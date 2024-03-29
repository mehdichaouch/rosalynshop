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



namespace Mirasvit\CacheWarmer\Controller\Adminhtml\Page;

use Mirasvit\CacheWarmer\Api\Data\PageInterface;
use Mirasvit\CacheWarmer\Controller\Adminhtml\AbstractPage;

class Clean extends AbstractPage
{
    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        if ($this->getRequest()->getParam(PageInterface::ID)) {
            $collection = $this->pageRepository->getCollection()
                ->addFieldToFilter(
                    PageInterface::ID,
                    [$this->getRequest()->getParam(PageInterface::ID)]
                );
        } else {
            $collection = $this->filter->getCollection($this->pageRepository->getCollection());
        }

        foreach ($collection as $page) {
            try {
                $this->warmerService->cleanPage($page);
            } catch (\Exception $e) {
                $this->messageManager->addErrorMessage($e->getMessage());
            }
        }

        $this->messageManager->addSuccessMessage(
            __('%1 page(s) was cleaned.', $collection->getSize())
        );

        return $this->resultRedirectFactory->create()->setPath('*/*/');
    }
}
