---
title: Navigation
description: >-
  The Navigation API allows you navigate within and outside of your app using
  the [HTML anchor
  element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). It also
  allows you to modify the top-level browser URL with or without navigating. It
  does this through the [History
  API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and the
  [Navigation
  API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API).
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/navigation'
  md: 'https://shopify.dev/docs/api/app-home/apis/navigation.md'
---

# Navigation

The Navigation API allows you navigate within and outside of your app using the [HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). It also allows you to modify the top-level browser URL with or without navigating. It does this through the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API).

Examples

### Examples

* #### anchor

  ##### Default

  ```html
  <a href="shopify://admin/products" target="_top">Products page</a>
  ```

* #### App navigation with relative path

  ##### Description

  Navigating to relative path within your app

  ##### HTML

  ```html
  <a href="/settings">Settings</a>
  ```

  ##### JavaScript

  ```js
  open('/settings', '_self');
  ```

* #### External URL in same window

  ##### Description

  Navigating to external URL in same window

  ##### HTML

  ```html
  <a href="https://example.com">Settings</a>
  ```

  ##### JavaScript

  ```js
  open('https://example.com', '_top');
  ```

* #### External URL in new window

  ##### Description

  Navigating to external URL in new window

  ##### HTML

  ```html
  <a href="https://example.com" target="_blank">Settings</a>
  ```

  ##### JavaScript

  ```js
  open('https://example.com', '_blank');
  ```

* #### /products page

  ##### Description

  Navigating to /products page

  ##### HTML

  ```html
  <a href="shopify://admin/products" target="_top">Products page</a>
  ```

  ##### JavaScript

  ```js
  open('shopify://admin/products', '_top');
  ```

* #### /products page with resource

  ##### Description

  Navigating to /products page with specific resource

  ##### HTML

  ```html
  <a href="shopify://admin/products/123" target="_top">Products page</a>
  ```

  ##### JavaScript

  ```js
  open('shopify://admin/products/123', '_top');
  ```

* #### /customers page

  ##### Description

  Navigating to /customers page

  ##### HTML

  ```html
  <a href="shopify://admin/customers" target="_top">Customers page</a>
  ```

  ##### JavaScript

  ```js
  open('shopify://admin/customers', '_top');
  ```

* #### /orders page

  ##### Description

  Navigating to /orders page

  ##### HTML

  ```html
  <a href="shopify://admin/orders" target="_top">Orders page</a>
  ```

  ##### JavaScript

  ```js
  open('shopify://admin/orders', '_top');
  ```

* #### History API

  ##### Description

  Using the \[History API]\(https://developer.mozilla.org/en-US/docs/Web/API/History\_API)

  ##### pushState

  ```js
  history.pushState(null, '', '/settings');
  ```

  ##### replaceState

  ```js
  history.replaceState(null, '', '/settings');
  ```

* #### Navigation API

  ##### Description

  Using the \[Navigation API]\(https://developer.mozilla.org/en-US/docs/Web/API/Navigation\_API)

  ##### pushState

  ```js
  navigation.navigate('/settings', {
    history: 'push',
  });
  ```

  ##### replaceState

  ```js
  navigation.navigate('/settings', {
    history: 'replace',
  });
  ```
