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



namespace Mirasvit\CacheWarmer\Controller\Adminhtml\Job;

use Magento\Ui\Component\MassAction\Filter;
use Mirasvit\CacheWarmer\Api\Data\JobInterface;
use Mirasvit\CacheWarmer\Controller\Adminhtml\AbstractJob;

class Run extends AbstractJob
{
    /**
     * @return \Magento\Backend\Model\View\Result\Page
     */
    public function execute()
    {
        $ids = [];

        if ($this->getRequest()->getParam(JobInterface::ID)) {
            $ids = [$this->getRequest()->getParam(JobInterface::ID)];
        }

        if ($this->getRequest()->getParam(Filter::SELECTED_PARAM)) {
            $ids = $this->getRequest()->getParam(Filter::SELECTED_PARAM);
        }

        if ($ids) {
            foreach ($ids as $id) {
                try {
                    $job = $this->jobRepository->get($id);
                    $this->jobService->run($job);
                } catch (\Exception $e) {
                    $this->messageManager->addErrorMessage($e->getMessage());
                }
            }

            $this->messageManager->addSuccessMessage(
                __('%1 job(s) was executed', count($ids))
            );
        } else {
            $this->messageManager->addErrorMessage(__('Please select job(s)'));
        }

        return $this->resultRedirectFactory->create()->setPath('*/*/');
    }
}
