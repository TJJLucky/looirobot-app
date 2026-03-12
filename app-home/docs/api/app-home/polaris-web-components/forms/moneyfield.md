---
title: MoneyField
description: >-
  Collect monetary values from users with built-in currency formatting and
  validation.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/moneyfield
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/moneyfield.md
---

# Money​Field

Collect monetary values from users with built-in currency formatting and validation.

## Properties

* **autocomplete**

  **string**

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

* **readOnly**

  **boolean**

  **Default: false**

  The field cannot be edited by the user. It is focusable will be announced by screen readers.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

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
  <s-money-field
    label="Regional Price"
    placeholder="99.99"
    details="Recommended price for the European market"
   />
  ```

  ##### html

  ```html
  <s-money-field
    label="Regional Price"
    placeholder="99.99"
    details="Recommended price for the European market"
  ></s-money-field>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple money field with a label, initial value, and numeric constraints.

  ##### jsx

  ```jsx
  <s-money-field
    label="Price"
    value="19.99"
    min={0}
    max={1000}
   />
  ```

  ##### html

  ```html
  <s-money-field
    label="Price"
    value="19.99"
    min="0"
    max="1000"
  ></s-money-field>
  ```

* #### With validation limits

  ##### Description

  Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.

  ##### jsx

  ```jsx
  <s-money-field
    label="Discount amount"
    value="5.00"
    min={0}
    max={100}
    details="Enter discount amount between $0 and $100"
  />
  ```

  ##### html

  ```html
  <s-money-field
    label="Discount amount"
    value="5.00"
    min="0"
    max="100"
    details="Enter discount amount between $0 and $100"
  ></s-money-field>
  ```

* #### Basic field

  ##### Description

  Illustrates a money field demonstrating basic error handling and validation.

  ##### jsx

  ```jsx
  <s-money-field
    label="Product cost"
    value="29.99"
    min={0.01}
    error="Product cost is required"
   />
  ```

  ##### html

  ```html
  <s-money-field
    label="Product cost"
    value="29.99"
    min="0.01"
    error="Product cost is required"
  ></s-money-field>
  ```

* #### Currency formatting with form integration

  ##### Description

  Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.

  ##### jsx

  ```jsx
  <s-stack direction="block" gap="base">
    <s-money-field
      label="Price"
      value="0.00"
      min={0.01}
      max={99999.99}
      details="Customers will see this price"
     />

    <s-money-field
      label="Compare at price"
      value=""
      min={0}
      max={99999.99}
      details="Show customers the original price when on sale"
     />

    <s-money-field
      label="Cost per item"
      value=""
      min={0}
      max={99999.99}
      details="Customers won't see this"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="block" gap="base">
    <s-money-field
      label="Price"
      value="0.00"
      min="0.01"
      max="99999.99"
      details="Customers will see this price"
    ></s-money-field>

    <s-money-field
      label="Compare at price"
      value=""
      min="0"
      max="99999.99"
      details="Show customers the original price when on sale"
    ></s-money-field>

    <s-money-field
      label="Cost per item"
      value=""
      min="0"
      max="99999.99"
      details="Customers won't see this"
    ></s-money-field>
  </s-stack>
  ```

* #### Money field validation

  ##### Description

  Interactive example showing real-time validation with min/max limits and dynamic error messages.

  ##### jsx

  ```jsx
  const [amount, setAmount] = useState('150');
  const [error, setError] = useState('Value must be no more than $100');

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-text-field label="Product name" />
        <s-money-field
          label="Discount amount"
          value={amount}
          min={0}
          max={100}
          details="Enter discount amount between $0 and $100"
          error={error}
          onInput={(e) => {
            setAmount(e.currentTarget.value);
            const val = parseFloat(e.currentTarget.value);
            setError(val > e.currentTarget.max ? 'Value must be no more than $100' : val < e.currentTarget.min ? 'Value must be at least $0' : '');
          }}
        />
      </s-stack>
    </s-section>
  )
  ```
