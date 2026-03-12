---
title: Toast
description: >-
  The Toast API displays a non-disruptive message that appears at the bottom of
  the interface to provide quick and short feedback on the outcome of an action.
  This API is modeled after the [Web Notification
  API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/toast'
  md: 'https://shopify.dev/docs/api/app-home/apis/toast.md'
---

# Toast

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).

## show method(**[message](#showmethod-propertydetail-message)**​,**[opts](#showmethod-propertydetail-opts)**​)

The `Toast.show` method displays a Toast notification in the Shopify admin. It accepts a variety of options to customize the behavior.

### Parameters

* **message**

  **string**

  **required**

* **opts**

  **ToastOptions**

### Returns**string**

### ToastOptions

* action

  Content of an action button.

  ```ts
  string
  ```

* duration

  The length of time in milliseconds the toast message should persist.

  ```ts
  number
  ```

* isError

  Display an error-styled toast.

  ```ts
  boolean
  ```

* onAction

  Callback fired when the action button is clicked.

  ```ts
  () => void
  ```

* onDismiss

  Callback fired when the dismiss icon is clicked

  ```ts
  () => void
  ```

## hide method(**[id](#hidemethod-propertydetail-id)**​)

The `Toast.hide` method hides a Toast notification. This is not required to be called as the Toast notification will automatically hide after the `duration` has elapsed.

### Parameters

* **id**

  **string**

  **required**

### Returns**void**

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/apps/tools/app-bridge-toast-BMc-izxL.png)

### Examples

* #### Toast

  ##### Default

  ```js
  shopify.toast.show('Message sent');
  ```

* #### Toast with duration

  ##### Description

  Toast with duration

  ##### Default

  ```js
  shopify.toast.show('Product saved', {
    duration: 5000,
  });
  ```

* #### Toast with action

  ##### Description

  Toast with action

  ##### Default

  ```js
  shopify.toast.show('Product saved', {
    action: 'Undo',
    onAction: () => {}, // Undo logic
  });
  ```

* #### Toast with dismiss callback

  ##### Description

  Toast with dismiss callback

  ##### Default

  ```js
  shopify.toast.show('Product saved', {
    onDismiss: () => {}, // Dismiss logic
  });
  ```
