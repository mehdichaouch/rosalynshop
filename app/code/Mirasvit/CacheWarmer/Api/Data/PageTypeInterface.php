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



namespace Mirasvit\CacheWarmer\Api\Data;

interface PageTypeInterface
{
    const TABLE_NAME = 'mst_cache_warmer_page_type';

    const ID        = 'page_type_id';
    const PAGE_TYPE = 'page_type';

    /**
     * @return int
     */
    public function getId();

    /**
     * @return string
     */
    public function getPageType();

    /**
     * @param string $value
     * @return $this
     */
    public function setPageType($value);

}