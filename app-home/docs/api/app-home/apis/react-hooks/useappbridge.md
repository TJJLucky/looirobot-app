---
title: useAppBridge
description: >-
  The `useAppBridge` hook returns the `shopify` global variable to use App
  Bridge APIs such as `toast` and `resourcePicker`.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/react-hooks/useappbridge'
  md: 'https://shopify.dev/docs/api/app-home/apis/react-hooks/useappbridge.md'
---

# use​App​Bridge

**Requires \[\`@shopify/app-bridge-react\@v4\`]\(https://www\.npmjs.com/package/@shopify/app-bridge-react) and the \[\`app-bridge.js\` script tag]\(/docs/api/app-bridge-library#getting-started):**

The `useAppBridge` hook returns the `shopify` global variable to use App Bridge APIs such as `toast` and `resourcePicker`.

## useAppBridge hook

The `useAppBridge` hook is available for use in your app. It returns the `shopify` global or a proxy when not in a browser environment.

For more information, see the [global variable section](https://shopify.dev/docs/api/app-bridge-library#shopify-global-variable) and the individual reference pages like [Toast](https://shopify.dev/docs/api/app-bridge-library/apis/toast) and [Resource Picker](https://shopify.dev/docs/api/app-bridge-library/apis/resource-picker).

Examples

### Examples

* #### useAppBridge

  ##### Default

  ```jsx
  import {useAppBridge} from '@shopify/app-bridge-react';

  export function GenerateBlogPostButton() {
    const shopify = useAppBridge();

    function generateBlogPost() {
      // Handle generating
      shopify.toast.show('Blog post template generated');
    }

    return <button onClick={generateBlogPost}>Generate Blog Post</button>;
  }
  ```

## Related

[API - shopify global variable](https://shopify.dev/docs/api/app-bridge-library#shopify-global-variable)
