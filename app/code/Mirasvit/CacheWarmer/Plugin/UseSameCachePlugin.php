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



namespace Mirasvit\CacheWarmer\Plugin;

use Mirasvit\CacheWarmer\Service\Config\ExtendedConfig;

class UseSameCachePlugin
{
    public function __construct(
        ExtendedConfig $extendedConfig
    ) {
        $this->extendedConfig = $extendedConfig;
    }

    public function afterGetData($subject, $data)
    {
        if (isset($data['store'])
            && $this->extendedConfig->isUseSameCacheForNewVisitor()) {
            unset($data['store']);
        }

        return $data;
    }
}