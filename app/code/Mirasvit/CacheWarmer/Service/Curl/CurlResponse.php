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

use Mirasvit\CacheWarmer\Logger\Logger;

class CurlResponse
{
    private $url;

    private $headers = [];

    private $code;

    private $body;

    /**
     * @var Logger
     */
    private $logger;

    public function __construct(
        Logger $logger
    ) {
        $this->logger = $logger;
    }

    public function set(CurlChannel $channel, $code, array $headers, $body)
    {
        $this->url     = $channel->getUrl();
        $this->code    = $code;
        $this->headers = $headers;
        $this->body    = $body;

        if ($this->code == 200
            && preg_match('/Fatal error|Service Temporarily Unavailable|RuntimeException/', $body)) {
            $this->code = 500;
        }

        if ($this->code !== 200 && $this->body != '*') {
            // Unsuccessful request and not status check request
            $this->logger->error("Curl Response Error", [
                'url'     => $this->url,
                'code'    => $this->code,
                'body'    => $this->body,
                'headers' => $this->headers,
                'CURL'    => $channel->getCUrl(),
            ]);
        }
    }

    /**
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @return int
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @return array
     */
    public function getHeaders()
    {
        return $this->headers;
    }

    /**
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }
}
