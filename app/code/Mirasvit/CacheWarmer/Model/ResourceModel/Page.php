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



namespace Mirasvit\CacheWarmer\Model\ResourceModel;

use Magento\Framework\Model\AbstractModel;
use Magento\Framework\Model\ResourceModel\Db\AbstractDb;
use Mirasvit\CacheWarmer\Api\Data\PageInterface;

class Page extends AbstractDb
{
    /**
     * {@inheritdoc}
     */
    protected function _construct()
    {
        $this->_init(PageInterface::TABLE_NAME, PageInterface::ID);
    }

    /**
     * {@inheritdoc}
     */
    protected function _afterLoad(AbstractModel $object)
    {
        $object->setId(intval($object->getId())); // change string to int (speed up updates by id)

        return parent::_afterLoad($object);
    }
}
