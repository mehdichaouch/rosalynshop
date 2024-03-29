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



namespace Mirasvit\CacheWarmer\Service\Curl;

use Mirasvit\CacheWarmer\Model\Config;

class CurlChannel
{
    private $config;

    private $options = [];

    private $cookies = [];

    public function __construct(
        Config $config
    ) {
        $this->config = $config;

        $this->options = [
            CURLOPT_HTTPGET        => 1,
            CURLOPT_TIMEOUT        => 60,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_HEADER         => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
        ];

        if ($this->config->getHttpAuthUsername() && $this->config->getHttpAuthPassword()) {
            $userPwd = "{$this->config->getHttpAuthUsername()}:{$this->config->getHttpAuthPassword()}";

            $this->options[CURLOPT_USERPWD] = $userPwd;
        }
    }

    public function setUrl($url)
    {
        $this->options[CURLOPT_URL] = $url;

        return $this;
    }

    public function setOption($code, $value)
    {
        $this->options[$code] = $value;
        return $this;
    }

    /**
     * @return string
     */
    public function getUrl()
    {
        return isset($this->options[CURLOPT_URL]) ? $this->options[CURLOPT_URL] : false;
    }

    public function setUserAgent($agent)
    {
        $this->options[CURLOPT_USERAGENT] = $agent;

        return $this;
    }

    public function setHeaders(array $headers)
    {
        $h = [];
        foreach ($headers as $key => $value) {
            $h[] = "$key: $value";
        }

        $this->options[CURLOPT_HTTPHEADER] = $h;

        return $this;
    }

    public function addCookie($name, $value)
    {
        $this->cookies[$name] = $value;
    }

    public function getCh()
    {
        $ch = curl_init();

        if (count($this->cookies)) {
            $cookies = [];
            foreach ($this->cookies as $key => $value) {
                $cookies[] = "{$key}={$value}";
            }
            curl_setopt($ch, CURLOPT_COOKIE, implode(";", $cookies));
        }

        foreach ($this->options as $key => $value) {
            curl_setopt($ch, $key, $value);
        }

        return $ch;
    }

    public function getCUrl()
    {
        $opt = [];

        $aliases = [
            CURLOPT_USERPWD   => '--user',
            CURLOPT_TIMEOUT   => '--max-time',
            CURLOPT_USERAGENT => '-A',
            CURLOPT_HTTPHEADER => '-H',
        ];

        foreach ($aliases as $option => $cOption) {
            if (isset($this->options[$option])) {
                if (is_array($this->options[$option])) {
                    foreach($this->options[$option] as $op) {
                        $opt[] = "$cOption '" .$op."'";
                    }
                } else {
                    $opt[] = "$cOption '" . $this->options[$option]."'";
                }
            }
        }

        $cookie = '';
        if (count($this->cookies)) {
            $cookies = [];
            foreach ($this->cookies as $key => $value) {
                $cookies[] = "{$key}={$value}";
            }
            $cookie = '--cookie ' . implode(";", $cookies);
        }

        return 'curl -v ' . implode(' ', $opt) . ' ' . $cookie . ' --insecure ' . $this->options[CURLOPT_URL];
    }
}
