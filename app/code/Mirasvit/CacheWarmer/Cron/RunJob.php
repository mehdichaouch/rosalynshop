<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/module-cache-warmer
 * @version   1.2.3
 * @copyright Copyright (C) 2018 Mirasvit (https://mirasvit.com/)
 */



namespace Mirasvit\CacheWarmer\Cron;

use Mirasvit\CacheWarmer\Api\Data\JobInterface;
use Mirasvit\CacheWarmer\Api\Repository\JobRepositoryInterface;
use Mirasvit\CacheWarmer\Api\Service\JobServiceInterface;
use Mirasvit\CacheWarmer\Model\Config;
use Mirasvit\CacheWarmer\Model\JobFactory;

class RunJob
{
    /**
     * @var JobRepositoryInterface
     */
    private $jobRepository;

    /**
     * @var JobServiceInterface
     */
    private $jobService;

    /**
     * @var Config
     */
    private $config;

    public function __construct(
        JobRepositoryInterface $jobRepository,
        JobServiceInterface $jobService,
        Config $config
    ) {
        $this->jobRepository = $jobRepository;
        $this->jobService    = $jobService;
        $this->config        = $config;
    }

    /**
     * @return void
     */
    public function execute()
    {
        if (!$this->config->isEnabled()) {
            return;
        }

        $lockFile    = $this->config->getTmpPath() . '/mst-cache-warmer.cli.lock';
        $lockPointer = fopen($lockFile, "w");

        if (flock($lockPointer, LOCK_EX | LOCK_NB)) {
            $collection = $this->jobRepository->getCollection();
            $collection->addFieldToFilter(JobInterface::STARTED_AT, ['null' => true]);

            foreach ($collection as $job) {
                $this->jobService->run($job);
            }

            flock($lockPointer, LOCK_UN);
        }

        fclose($lockPointer);
    }
}
