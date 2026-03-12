---
title: Modal API
description: >-
  The Modal API allows you to display an overlay that prevents interaction with
  the rest of the app until dismissed.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/modal-api'
  md: 'https://shopify.dev/docs/api/app-home/apis/modal-api.md'
---

# Modal API

The Modal API allows you to display an overlay that prevents interaction with the rest of the app until dismissed.

## Modal

The `modal` API provides a `show` method to display a Modal, a `hide` method to hide a Modal, and a `toggle` method to toggle the visibility of a Modal. These are used in conjunction with the [`ui-modal` element](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-modal). They are alternatives to the `show`, `hide`, and `toggle` instance methods.

* **hide**

  **(id: string) => Promise\<void>**

  Hides the modal element. An alternative to the `hide` instance method on the `ui-modal` element.

* **show**

  **(id: string) => Promise\<void>**

  Shows the modal element. An alternative to the `show` instance method on the `ui-modal` element.

* **toggle**

  **(id: string) => Promise\<void>**

  Toggles the modal element visibility. An alternative to the `toggle` instance method on the `ui-modal` element.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/apps/tools/app-bridge-modal-BUQeTJIG.png)

### Examples

* #### Modal

  ##### Modal

  ```html
  <ui-modal id="my-modal">
    <p>Hello, World!</p>
  </ui-modal>

  <button onclick="shopify.modal.show('my-modal')">Open Modal</button>
  ```

## Related

[Component - ui-modal](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-modal)

[Component - Modal](https://shopify.dev/docs/api/app-bridge-library/react-components/modal-component)
