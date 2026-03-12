---
title: Environment
description: >-
  The Environment API provides utilities for information regarding the
  environment an App Home is running on.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/environment'
  md: 'https://shopify.dev/docs/api/app-home/apis/environment.md'
---

# Environment

The Environment API provides utilities for information regarding the environment an App Home is running on.

## Environment

The `environment` API is available on the `shopify` global. It contains information about the current environment an App Home is running on.

* **embedded**

  **boolean**

  Whether the app is embedded in the Shopify admin.

* **mobile**

  **boolean**

  Whether the app is running on Shopify Mobile.

* **pos**

  **boolean**

  Whether the app is running on Shopify POS.

Examples

### Examples

* #### Environment

  ##### Default

  ```js
  shopify.environment;
  // => { mobile: false, embedded: true, pos: false }
  ```
