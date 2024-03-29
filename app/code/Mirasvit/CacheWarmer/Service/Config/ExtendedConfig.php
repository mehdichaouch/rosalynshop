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



namespace Mirasvit\CacheWarmer\Service\Config;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;
use Mirasvit\Core\Service\CompatibilityService;

class ExtendedConfig
{
    /**
     * @var ScopeConfigInterface
     */
    private $scopeConfig;

    public function __construct(
        ScopeConfigInterface $scopeConfig
    ) {
        $this->scopeConfig = $scopeConfig;
    }

    /**
     * {@inheritdoc}
     */
    public function isForbidCacheFlush()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/forbid_cache_flush',
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * {@inheritdoc}
     */
    public function isRunAsWebServerUser()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/run_as_web_server_user',
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * {@inheritdoc}
     */
    public function isDeleteCacheableFalse()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/is_delete_cacheable_false',
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getDeleteCacheableFalseConfig()
    {
        $data = $this->scopeConfig->getValue(
            'cache_warmer/extended/delete_cacheable_false_config',
            ScopeInterface::SCOPE_STORE
        );

        if ($data == '[]' || !$data) {
            $data = [];
        } elseif (CompatibilityService::is22()) {
            try {
                $data = \Zend_Json::decode($data);
            } catch (\Exception $e) {
            }
        } else {
            $data = unserialize($data);
        }

        $result = [];
        foreach ($data as $key => $info) {
            if (is_array($info) && isset($info['is_active'])) {
                $result[] = $key;
            }
        }

        return $result;
    }

    /**
     * {@inheritdoc}
     */
    public function isWarmMobilePagesEnabled()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/is_warm_mobile_pages',
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * {@inheritdoc}
     */
    public function isUseEmptyVaryDataForMobilePages()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/is_use_empty_vary_data_for_mobile_pages',
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * {@inheritdoc}
     */
    public function isUseSameCacheForNewVisitor()
    {
        return $this->scopeConfig->getValue(
            'cache_warmer/extended/is_use_same_cache_for_new_visitor',
            ScopeInterface::SCOPE_STORE
        );
    }
}
