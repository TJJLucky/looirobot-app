---
title: App Window
description: >-
  The `s-app-window` component displays a fullscreen modal window. It allows you
  to open up a page in your app specified by the `src` property. You can use
  this when you have larger or complex workflows that you want to display. The
  app window covers the entirety of the screen. The top bar of the app window is
  controlled by the admin and allows the user to exit if needed.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window'
  md: >-
    https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window.md
---

# App Window

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.

## s-app-window element

The `s-app-window` element is available for use in your app. It configures a App Window to display in the Shopify Admin.

The content of the app window is specified by the src property and should point to a route within your app.

* **src**

  **string**

  **required**

  The URL of the content to display within the S-App-Window. S-App-Window only supports src-based content (required).

* **id**

  **string**

  A unique identifier for the S-App-Window

## s-app-window instance

The `s-app-window` element provides instance properties and methods to control the App Window.

* **content**

  **undefined**

  **required**

  Always returns undefined for s-app-window (src-only)

* **addEventListener**

  **(type: "show" | "hide", listener: EventListenerOrEventListenerObject) => void**

  Add 'show' | 'hide' event listeners.

* **contentWindow**

  **Window | null**

  A getter for the Window object of the s-app-window iframe. Only accessible when the s-app-window is open.

* **hide**

  **() => Promise\<void>**

  Hides the s-app-window element

* **removeEventListener**

  **(type: "show" | "hide", listener: EventListenerOrEventListenerObject) => void**

  Remove 'show' | 'hide' event listeners.

* **show**

  **() => Promise\<void>**

  Shows the s-app-window element

* **src**

  **string**

  A getter/setter for the s-app-window src URL

* **toggle**

  **() => Promise\<void>**

  Toggles the s-app-window element between showing and hidden states

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/app-bridge-web-components/s-app-window-jyBt5mAs.png)

### Examples

* #### App Window

  ##### App Window

  ```html
  <s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

  <s-button command="--show" commandFor="app-window">Open App Window</s-button>
  ```

* #### Title bar heading

  ##### Description

  App Window title

  ##### Default

  ```html
  <s-app-window src="/app-window-content.html"></s-app-window>

  // app-window-content.html
  <s-page heading="App Window Title"></s-page>
  ```

* #### Title bar actions

  ##### Description

  App Window title bar actions

  ##### Default

  ```html
  <s-app-window src="/app-window-content.html"></s-app-window>

  // app-window-content.html
  <s-page heading="App Window Title">
    <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
    <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
  </s-page>
  ```

* #### Title bar accessory badge

  ##### Description

  Display a status badge in the title bar using the accessory slot. The \`tone\` attribute controls the badge color (\`info\`, \`success\`, \`warning\`, or \`critical\`).

  ##### Default

  ```html
  <s-app-window src="/app-window-content.html"></s-app-window>

  // app-window-content.html
  <s-page heading="Edit Product">
    <s-badge slot="accessory" tone="warning">Draft</s-badge>
    <s-button slot="primary-action">Save</s-button>
  </s-page>
  ```

* #### Icons and menu actions

  ##### Description

  Add icons to action buttons and use \`commandfor\` to create dropdown menus. Menu buttons support the \`tone\` attribute for destructive actions.

  ##### Default

  ```html
  <s-app-window src="/app-window-content.html"></s-app-window>

  // app-window-content.html
  <s-page heading="Product Details">
    <s-button slot="primary-action" icon="save">Save</s-button>
    <s-button slot="secondary-actions" icon="view">Preview</s-button>
    <s-button slot="secondary-actions" commandfor="actions-menu" icon="menu">More</s-button>
    <s-menu id="actions-menu">
      <s-button icon="duplicate">Duplicate</s-button>
      <s-button icon="archive">Archive</s-button>
      <s-button icon="delete" tone="critical">Delete</s-button>
    </s-menu>
  </s-page>
  ```

* #### Instance methods

  ##### Description

  Controlling the App Window with the show and hide methods

  ##### Default

  ```html
  <s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

  <s-button onclick="document.getElementById('app-window').show()">Show App Window</s-button>
  <s-button onclick="document.getElementById('app-window').hide()">Hide App Window</s-button>
  ```

* #### Command attribute

  ##### Description

  Controlling the App Window with the command attribute

  ##### Default

  ```html
  <s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

  <s-button command="--show" commandFor="app-window">Open App Window</s-button>
  <s-button command="--hide" commandFor="app-window">Hide App Window</s-button>
  <s-button command="--toggle" commandFor="app-window">Toggle App Window</s-button>
  ```

* #### Form with save bar

  ##### Description

  Forms with the \`data-save-bar\` attribute automatically integrate with the save bar. Changes to form inputs are tracked and the save bar appears when there are unsaved changes.

  ##### Default

  ```html
  <s-app-window src="/app-window-content.html"></s-app-window>

  // app-window-content.html
  <s-page heading="Edit Settings">
    <s-button slot="primary-action" type="submit" form="settings-form">Save</s-button>
    <form id="settings-form" data-save-bar>
      <s-text-field label="Store Name" name="storeName"></s-text-field>
      <s-checkbox label="Enable Notifications" name="notifications"></s-checkbox>
    </form>
  </s-page>
  ```

## Related

[API - Modal](https://shopify.dev/docs/api/app-home/apis/modal-api)
