---
title: Title bar
description: >-
  The admin title bar is a critical part of the Shopify Admin experience. It
  provides a way to display the current page title and actions for the user to
  take. This guide will show you how to work with the admin title bar using the
  App Bridge UI library.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/title-bar'
  md: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/title-bar.md'
---

# Title bar

The admin title bar is a critical part of the Shopify Admin experience. It provides a way to display the current page title and actions for the user to take. This guide will show you how to work with the admin title bar using the App Bridge UI library.

## Use the s-page component

The `s-page` component is available for use in your app. It configures the title bar in the Shopify admin in addition to managing the page layout. Note that you do not need the full App Bridge UI library to use this component. You can still use `s-page` (and its required child components) in your app.

* **children**

  **SPageChildren**

* **heading**

  **string**

### SPageChildren

* breadcrumbActions

  ```ts
  HTMLElement
  ```

* primaryAction

  ```ts
  HTMLElement
  ```

* secondaryActions

  ```ts
  HTMLElement[]
  ```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/app-bridge-web-components/title-bar-app-home-BfbrPNeF.png)

### Examples

* #### Simple s-page component

  ##### Default

  ```html
  <s-page heading="Page Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Cancel')">Cancel</s-button>
  </s-page>
  ```

* #### Simple s-page component

  ##### Description

  The \`s-page\` component accepts the following properties: - \`heading\`: The heading for the page. This is the title of the page. And the following slots: - \`primary-action\`: The primary action for the page. This is the main action for the page. - \`secondary-actions\`: The secondary actions for the page. This is a group of actions that are related to the page. - \`breadcrumb-actions\`: The breadcrumb actions for the page. This is a link to the home page or the previous page. - \`accessory\`: A status badge displayed next to the title. Use with \`s-badge\` and the \`tone\` attribute (\`info\`, \`success\`, \`warning\`, or \`critical\`).

  ##### Default

  ```html
  <s-page heading="Page Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Cancel')">Cancel</s-button>
  </s-page>
  ```

* #### Accessory badge

  ##### Description

  Display a status badge next to the page title using the \`accessory\` slot. Use \`s-badge\` with the \`tone\` attribute to indicate status (\`info\`, \`success\`, \`warning\`, or \`critical\`).

  ##### Default

  ```html
  <s-page heading="Edit Product">
    <s-badge slot="accessory" tone="warning">Draft</s-badge>
    <s-button slot="primary-action">Save</s-button>
  </s-page>
  ```

* #### Grouped secondary actions

  ##### Description

  You can group secondary actions together using \`s-menu\` and the \`commandfor\` attribute. This will create a dropdown menu with the actions. The text content of the \`s-button\` used with the \`commandfor\` attribute will display a label for the group of actions.

  ##### Default

  ```html
  <s-page heading="Page Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" commandfor="more-actions-id">More actions</s-button>
    <s-menu id="more-actions-id">
      <s-button onclick="shopify.toast.show('Action 1')">Action 1</s-button>
      <s-button onclick="shopify.toast.show('Action 2')">Action 2</s-button>
      <s-button onclick="shopify.toast.show('Action 3')">Action 3</s-button>
    </s-menu>
  </s-page>
  ```

* #### Breadcrumb actions

  ##### Description

  You can add breadcrumb actions using the \`breadcrumb-actions\` slot. This will add a link to the breadcrumb actions. You can use this to add a link to the home page or to add a link to the previous page.

  ##### Default

  ```html
  <s-page heading="Page Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Cancel')">Cancel</s-button>
    <s-link slot="breadcrumb-actions" href="/">Home</s-link>
  </s-page>
  ```

* #### Complete example

  ##### Description

  Here is a complete example of how to use the \`s-page\` component to interact with the admin title bar.

  ##### Default

  ```html
  <s-page heading="Page Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
    <s-button slot="secondary-actions" commandfor="more-actions-id">More actions</s-button>
    <s-menu id="more-actions-id">
      <s-button onclick="shopify.toast.show('Action 1')">Action 1</s-button>
      <s-button onclick="shopify.toast.show('Action 2')">Action 2</s-button>
      <s-button onclick="shopify.toast.show('Action 3')">Action 3</s-button>
    </s-menu>
    <s-link slot="breadcrumb-actions" href="/">Home</s-link>
  </s-page>
  ```

## Related

[API - Navigation](https://shopify.dev/docs/api/app-home/apis/navigation)
