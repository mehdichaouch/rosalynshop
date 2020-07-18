<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_AdvancedReview
 */


namespace Amasty\AdvancedReview\Plugin\View\Page\Config;

use Magento\Framework\App\CacheInterface;
use Magento\Framework\View\Asset\File;
use Magento\Framework\View\Page\Config\Renderer as MagentoRenderer;

/**
 * Class Renderer
 * @package Amasty\AdvancedReview\Plugin\View\Page\Config
 */
class Renderer
{
    const CACHE_KEY = 'advanced_review_should_load_css_file';

    /**
     * @var array
     */
    private $filesToCheck = ['css/styles-l.css', 'css/styles-m.css'];

    /**
     * @var \Magento\Framework\View\Page\Config
     */
    private $config;

    /**
     * @var CacheInterface
     */
    private $cache;

    public function __construct(
        \Magento\Framework\View\Page\Config $config,
        CacheInterface $cache
    ) {
        $this->config = $config;
        $this->cache = $cache;
    }

    /**
     * Add our css file if less functionality is missing
     *
     * @param MagentoRenderer $subject
     * @param array $resultGroups
     * @return array
     */
    public function beforeRenderAssets(
        MagentoRenderer $subject,
        $resultGroups = []
    ) {
        $shouldLoad = $this->cache->load(self::CACHE_KEY);
        if ($shouldLoad === false) {
            $shouldLoad = $this->isShouldLoadCss();
            $this->cache->save($shouldLoad, self::CACHE_KEY);
        }

        if ($shouldLoad) {
            $this->config->addPageAsset('Amasty_AdvancedReview::css/source/mkcss/amreview.css');
        }

        return [$resultGroups];
    }

    /**
     * @return int
     */
    private function isShouldLoadCss()
    {
        $collection = $this->config->getAssetCollection();
        $found = 0;
        foreach ($collection->getAll() as $item) {
            /** @var File $item */
            if ($item instanceof File
                && in_array($item->getFilePath(), $this->filesToCheck)
            ) {
                $found++;
            }
        }

        return (int)($found < count($this->filesToCheck));
    }
}
