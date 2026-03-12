---
title: ColorPicker
description: Allow users to select a color from a color palette.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorpicker
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorpicker.md
---

# Color​Picker

Allow users to select a color from a color palette.

## Properties

* **alpha**

  **boolean**

  **Default: false**

  Allow user to select an alpha value.

* **defaultValue**

  **string**

  The default value for the field.

* **formResetCallback**

  **() => void**

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **value**

  **string**

  The currently selected color.

  Supported formats include:

  * HSL

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **change**

  **CallbackEventListener\<typeof tagName> | null**

* **input**

  **CallbackEventListener\<typeof tagName> | null**

### CallbackEventListener

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-color-picker value="#FF0000" alpha />
  ```

  ##### html

  ```html
  <s-color-picker value="#FF0000" alpha></s-color-picker>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple color picker with a pre-selected red color, showing the basic implementation without alpha transparency.

  ##### jsx

  ```jsx
  <s-box padding="large" border="base" borderRadius="base">
    <s-color-picker value="#FF0000" name="primary-color" />
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="large" border="base" borderRadius="base">
    <s-color-picker value="#FF0000" name="primary-color"></s-color-picker>
  </s-box>
  ```

* #### With alpha transparency

  ##### Description

  Illustrates a color picker with alpha transparency enabled, allowing selection of colors with varying opacity levels.

  ##### jsx

  ```jsx
  <s-box padding="large" border="base" borderRadius="base">
    <s-color-picker
      value="#FF0000FF"
      alpha
      name="color-with-alpha"
     />
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="large" border="base" borderRadius="base">
    <s-color-picker
      value="#FF0000FF"
      alpha
      name="color-with-alpha"
    ></s-color-picker>
  </s-box>
  ```

## Best practices

* Use the alpha slider if you want to allow merchants to select a transparent color
