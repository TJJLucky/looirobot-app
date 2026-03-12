---
title: App Nav
description: >-
  The `s-app-nav` component creates a navigation menu for your app. On desktop
  web browsers, the navigation menu appears as part of the app nav, on the left
  of the screen. On Shopify mobile, the navigation menu appears in a dropdown
  from the TitleBar. This is modeled after the [HTML nav
  element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav). Note
  that nested navigation items are not supported.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav'
  md: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav.md'
---

# App Nav

The `s-app-nav` component creates a navigation menu for your app. On desktop web browsers, the navigation menu appears as part of the app nav, on the left of the screen. On Shopify mobile, the navigation menu appears in a dropdown from the TitleBar. This is modeled after the [HTML nav element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav). Note that nested navigation items are not supported.

## s-app-nav element

The `s-app-nav` element is available for use in your app. It configures the app nav in the Shopify admin.

You may configure the home route of the app by adding the `rel="home"` attribute to a child element. If it is provided, it will not be rendered as a link in the app nav. It needs to have `rel="home"` set along with the `href` set to the root path.

* **children**

  **any**

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/apps/tools/app-bridge-navigation-menu-DdMXEPrX.png)

### Examples

* #### Navigation Menu

  ##### Default

  ```html
  <s-app-nav>
    <s-link href="/" rel="home">Home</s-link>
    <s-link href="/templates">Templates</s-link>
    <s-link href="/settings">Settings</s-link>
  </s-app-nav>
  ```

## Related

[React components - Navigation API](https://shopify.dev/docs/api/app-home/apis/navigation)
