---
title: Config
description: >-
  The <code>config</code> API stores the initial configuration information for
  your app and lets you synchronously retrieve it.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/config'
  md: 'https://shopify.dev/docs/api/app-home/apis/config.md'
---

# Config

The `config` API stores the initial configuration information for your app and lets you synchronously retrieve it.

## Config

The `config` API is available on the `shopify` global. It stores the initial configuration information for your app and shop.

* **apiKey**

  **string**

  **required**

  The client ID provided for your application in the Partner Dashboard.

  This needs to be provided by the app developer.

* **appOrigins**

  **string\[]**

  An allowlist of origins that your app can send authenticated fetch requests to.

  This is useful if your app needs to make authenticated requests to a different domain that you control.

* **debug**

  **DebugOptions**

  Configuration options for enabling debug features within the app. Includes options for monitoring performance metrics, such as web vitals.

  Recommended for use during development and debugging to aid in identifying and resolving performance issues.

  Generally not recommended for long-term use in production environments.

* **disabledFeatures**

  **string\[]**

  The features to disable in your app.

  This allows app developers to opt-out of features such as `fetch`.

* **experimentalFeatures**

  **string\[]**

  The experimental features to enable in your app.

  This allows app developers to opt-in to experiement features.

* **host**

  **string**

  The base64-encoded host of the shop that's embedding your app.

  This does not need to be provided by the app developer.

* **locale**

  **string**

  **Default: 'en-US'**

  The locale of the shop that's embedding your app.

  This does not need to be provided by the app developer.

* **shop**

  **string**

  The shop origin of the shop that's embedding your app.

  This does not need to be provided by the app developer.

### DebugOptions

* webVitals

  Enables or disables the logging of web performance metrics (Web Vitals) in the browser's console. When set to \`true\`, the app will log Core Web Vitals (such as LCP, INP, and CLS) and other relevant performance metrics to help developers understand the real-world performance of their app. This can be useful for debugging performance issues during development or in a staging environment. This field is optional and defaults to \`false\`, meaning that web vitals logging is disabled by default to avoid performance overhead and unnecessary console output in production environments.

  ```ts
  boolean
  ```

Examples

### Examples

* #### Shop

  ##### Default

  ```js
  shopify.config.shop;
  // => 'your-shop-name.myshopify.com'
  ```

* #### shop

  ##### Description

  Retrieving the shop origin

  ##### Default

  ```js
  shopify.config.shop;
  // => 'your-shop-name.myshopify.com'
  ```

* #### host

  ##### Description

  Retrieving the host

  ##### Default

  ```js
  shopify.config.host;
  ```

* #### locale

  ##### Description

  Retrieving the locale

  ##### Default

  ```js
  shopify.config.locale;
  ```

* #### apiKey

  ##### Description

  Retrieving the apiKey

  ##### Default

  ```js
  shopify.config.apiKey;
  ```

* #### disabledFeatures

  ##### Description

  Retrieving the disabledFeatures

  ##### Default

  ```js
  shopify.config.disabledFeatures;
  ```

* #### appOrigins

  ##### Description

  Retrieving the appOrigins

  ##### Default

  ```js
  shopify.config.appOrigins;
  ```

* #### debug

  ##### Description

  Configuration for debugging apps.

  ##### Default

  ```js
  shopify.config.debug;
  // => { webVitals: false }
  ```

* #### apiKey

  ##### Description

  Setting the apiKey

  ##### meta tag

  ```html
  <head>
    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />

    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```

* #### disabledFeatures

  ##### Description

  Setting the disabledFeatures

  ##### single feature

  ```html
  <head>
    <meta name="shopify-disabled-features" content="fetch" />

    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```

  ##### multiple features

  ```html
  <head>
    <meta name="shopify-disabled-features" content="fetch, auto-redirect" />

    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```

* #### appOrigins

  ##### Description

  Setting the appOrigins

  ##### single origin

  ```html
  <head>
    <meta name="shopify-app-origins" content="https://example.com" />

    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```

  ##### multiple origins

  ```html
  <head>
    <meta
      name="shopify-app-origins"
      content="https://example.com,https://example.net"
    />

    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```

* #### debug

  ##### Description

  Enabling Debug Features for Performance Monitoring

  ##### Web Vitals

  ```html
  <head>
    <meta name="shopify-debug" content="web-vitals" />

    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
  </head>
  ```
