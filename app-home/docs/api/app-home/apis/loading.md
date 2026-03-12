---
title: Loading
description: >-
  The Loading API indicates to users that a page is loading or an upload is
  processing.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/loading'
  md: 'https://shopify.dev/docs/api/app-home/apis/loading.md'
---

# Loading

The Loading API indicates to users that a page is loading or an upload is processing.

## Loading API(**[isLoading](#loadingapi-propertydetail-isloading)**​)

The `Loading` API is available on the `shopify` global. It displays a loading indicator in the Shopify admin.

### Parameters

* **isLoading**

  **boolean**

### Returns**void**

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/loading-COZFMV2R.png)

### Examples

* #### Loading

  ##### Default

  ```js
  shopify.loading(true);
  // ...
  shopify.loading(false);
  ```
