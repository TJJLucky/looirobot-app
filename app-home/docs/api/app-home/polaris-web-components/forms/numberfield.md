---
title: NumberField
description: >-
  Collect numerical values from users with optimized keyboard settings and
  built-in validation.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/numberfield
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/numberfield.md
---

# Number​Field

Collect numerical values from users with optimized keyboard settings and built-in validation.

## Properties

* **autocomplete**

  **"on" | "off" | NumberAutocompleteField | \`section-${string} one-time-code\` | \`section-${string} cc-number\` | \`section-${string} cc-csc\` | "shipping one-time-code" | "shipping cc-number" | "shipping cc-csc" | "billing one-time-code" | "billing cc-number" | "billing cc-csc" | \`section-${string} shipping one-time-code\` | \`section-${string} shipping cc-number\` | \`section-${string} shipping cc-csc\` | \`section-${string} billing one-time-code\` | \`section-${string} billing cc-number\` | \`section-${string} billing cc-csc\`**

  **Default: 'on' for everything else**

  A hint as to the intended content of the field.

  When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.

  When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.

  Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.

* **defaultValue**

  **string**

  The default value for the field.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **inputMode**

  **"decimal" | "numeric"**

  **Default: 'decimal'**

  Sets the virtual keyboard.

* **label**

  **string**

  Content to use as the field label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **max**

  **number**

  **Default: Infinity**

  The highest decimal or integer to be accepted for the field. When used with `step` the value will round down to the max number.

  Note: a user will still be able to use the keyboard to input a number higher than the max. It is up to the developer to add appropriate validation.

* **min**

  **number**

  **Default: -Infinity**

  The lowest decimal or integer to be accepted for the field. When used with `step` the value will round up to the min number.

  Note: a user will still be able to use the keyboard to input a number lower than the min. It is up to the developer to add appropriate validation.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **prefix**

  **string**

  **Default: ''**

  A value to be displayed immediately before the editable portion of the field.

  This is useful for displaying an implied part of the value, such as "https://" or "+353".

  This cannot be edited by the user, and it isn't included in the value of the field.

  It may not be displayed until the user has interacted with the input. For example, an inline label may take the place of the prefix until the user focuses the input.

* **readOnly**

  **boolean**

  **Default: false**

  The field cannot be edited by the user. It is focusable will be announced by screen readers.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **step**

  **number**

  **Default: 1**

  The amount the value can increase or decrease by. This can be an integer or decimal. If a `max` or `min` is specified with `step` when increasing/decreasing the value via the buttons, the final value will always round to the `max` or `min` rather than the closest valid amount.

* **suffix**

  **string**

  **Default: ''**

  A value to be displayed immediately after the editable portion of the field.

  This is useful for displaying an implied part of the value, such as "@shopify.com", or "%".

  This cannot be edited by the user, and it isn't included in the value of the field.

  It may not be displayed until the user has interacted with the input. For example, an inline label may take the place of the suffix until the user focuses the input.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

### NumberAutocompleteField

```ts
'one-time-code' | 'cc-number' | 'cc-csc'
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **blur**

  **CallbackEventListener<'input'>**

* **change**

  **CallbackEventListener<'input'>**

* **focus**

  **CallbackEventListener<'input'>**

* **input**

  **CallbackEventListener<'input'>**

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
  <s-number-field
    label="Quantity"
    details="Number of items in stock"
    placeholder="0"
    step={5}
    min={0}
    max={100}
  />
  ```

  ##### html

  ```html
  <s-number-field
    label="Quantity"
    details="Number of items in stock"
    placeholder="0"
    step="5"
    min="0"
    max="100"
  ></s-number-field>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple number field for entering order quantity with a predefined range and step value.

  ##### jsx

  ```jsx
  <s-number-field
    label="Order quantity"
    value="5"
    min={1}
    max={999}
    step={1}
   />
  ```

  ##### html

  ```html
  <s-number-field
    label="Order quantity"
    value="5"
    min="1"
    max="999"
    step="1"
  ></s-number-field>
  ```

* #### With prefix and suffix

  ##### Description

  Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.

  ##### jsx

  ```jsx
  <s-number-field
    label="Product price"
    value="29.99"
    prefix="$"
    suffix="CAD"
    inputMode="decimal"
    step={0.01}
    min={0}
   />
  ```

  ##### html

  ```html
  <s-number-field
    label="Product price"
    value="29.99"
    prefix="$"
    suffix="CAD"
    inputMode="decimal"
    step="0.01"
    min="0"
  ></s-number-field>
  ```

* #### Multiple examples

  ##### Description

  Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-number-field
      label="Inventory count"
      value="150"
      min={0}
      step={1}
      inputMode="numeric"
      details="Current stock available for sale"
     />

    <s-number-field
      label="Discount percentage"
      value="15"
      suffix="%"
      min={0}
      max={100}
      step={0.1}
      inputMode="decimal"
     />

    <s-number-field
      label="Shipping weight"
      value="2.5"
      suffix="kg"
      min={0.1}
      step={0.1}
      inputMode="decimal"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-number-field
      label="Inventory count"
      value="150"
      min="0"
      step="1"
      inputMode="numeric"
      details="Current stock available for sale"
    ></s-number-field>

    <s-number-field
      label="Discount percentage"
      value="15"
      suffix="%"
      min="0"
      max="100"
      step="0.1"
      inputMode="decimal"
    ></s-number-field>

    <s-number-field
      label="Shipping weight"
      value="2.5"
      suffix="kg"
      min="0.1"
      step="0.1"
      inputMode="decimal"
    ></s-number-field>
  </s-stack>
  ```
