---
title: Share
description: >-
  The Share API allows you to invoke the "share sheet" to share content from
  your App Home on an iOS or Android device.

   For more information, see the [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) documentation. When using the `navigator.share()` method in an App Home, the `files` value within the `data` parameter is not supported.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/share'
  md: 'https://shopify.dev/docs/api/app-home/apis/share.md'
---

# Share

The Share API allows you to invoke the "share sheet" to share content from your App Home on an iOS or Android device.

For more information, see the [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) documentation. When using the `navigator.share()` method in an App Home, the `files` value within the `data` parameter is not supported.

Examples

### Examples

* #### Share

  ##### Default

  ```js
  try {
    const shareData = {
      text: 'Learn more about Shopify App Bridge',
      url: 'https://shopify.dev/docs/api/app-bridge',
    };
    await navigator.share(shareData);
  } catch (err) {
    console.log('Share error', err);
  }
  ```
