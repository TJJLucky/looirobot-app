---
title: TextArea
description: >-
  Collect longer text content from users with a multi-line input that expands
  automatically.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/textarea'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/textarea.md
---

# Text​Area

Collect longer text content from users with a multi-line input that expands automatically.

## Properties

* **autocomplete**

  **"on" | "off" | TextAutocompleteField | \`section-${string} one-time-code\` | "shipping one-time-code" | "billing one-time-code" | \`section-${string} shipping one-time-code\` | \`section-${string} billing one-time-code\` | \`section-${string} language\` | \`section-${string} organization\` | \`section-${string} additional-name\` | \`section-${string} address-level1\` | \`section-${string} address-level2\` | \`section-${string} address-level3\` | \`section-${string} address-level4\` | \`section-${string} address-line1\` | \`section-${string} address-line2\` | \`section-${string} address-line3\` | \`section-${string} country-name\` | \`section-${string} country\` | \`section-${string} family-name\` | \`section-${string} given-name\` | \`section-${string} honorific-prefix\` | \`section-${string} honorific-suffix\` | \`section-${string} name\` | \`section-${string} nickname\` | \`section-${string} organization-title\` | \`section-${string} postal-code\` | \`section-${string} sex\` | \`section-${string} street-address\` | \`section-${string} transaction-currency\` | \`section-${string} username\` | \`section-${string} cc-additional-name\` | \`section-${string} cc-family-name\` | \`section-${string} cc-given-name\` | \`section-${string} cc-name\` | \`section-${string} cc-type\` | "shipping language" | "shipping organization" | "shipping additional-name" | "shipping address-level1" | "shipping address-level2" | "shipping address-level3" | "shipping address-level4" | "shipping address-line1" | "shipping address-line2" | "shipping address-line3" | "shipping country-name" | "shipping country" | "shipping family-name" | "shipping given-name" | "shipping honorific-prefix" | "shipping honorific-suffix" | "shipping name" | "shipping nickname" | "shipping organization-title" | "shipping postal-code" | "shipping sex" | "shipping street-address" | "shipping transaction-currency" | "shipping username" | "shipping cc-additional-name" | "shipping cc-family-name" | "shipping cc-given-name" | "shipping cc-name" | "shipping cc-type" | "billing language" | "billing organization" | "billing additional-name" | "billing address-level1" | "billing address-level2" | "billing address-level3" | "billing address-level4" | "billing address-line1" | "billing address-line2" | "billing address-line3" | "billing country-name" | "billing country" | "billing family-name" | "billing given-name" | "billing honorific-prefix" | "billing honorific-suffix" | "billing name" | "billing nickname" | "billing organization-title" | "billing postal-code" | "billing sex" | "billing street-address" | "billing transaction-currency" | "billing username" | "billing cc-additional-name" | "billing cc-family-name" | "billing cc-given-name" | "billing cc-name" | "billing cc-type" | \`section-${string} shipping language\` | \`section-${string} shipping organization\` | \`section-${string} shipping additional-name\` | \`section-${string} shipping address-level1\` | \`section-${string} shipping address-level2\` | \`section-${string} shipping address-level3\` | \`section-${string} shipping address-level4\` | \`section-${string} shipping address-line1\` | \`section-${string} shipping address-line2\` | \`section-${string} shipping address-line3\` | \`section-${string} shipping country-name\` | \`section-${string} shipping country\` | \`section-${string} shipping family-name\` | \`section-${string} shipping given-name\` | \`section-${string} shipping honorific-prefix\` | \`section-${string} shipping honorific-suffix\` | \`section-${string} shipping name\` | \`section-${string} shipping nickname\` | \`section-${string} shipping organization-title\` | \`section-${string} shipping postal-code\` | \`section-${string} shipping sex\` | \`section-${string} shipping street-address\` | \`section-${string} shipping transaction-currency\` | \`section-${string} shipping username\` | \`section-${string} shipping cc-additional-name\` | \`section-${string} shipping cc-family-name\` | \`section-${string} shipping cc-given-name\` | \`section-${string} shipping cc-name\` | \`section-${string} shipping cc-type\` | \`section-${string} billing language\` | \`section-${string} billing organization\` | \`section-${string} billing additional-name\` | \`section-${string} billing address-level1\` | \`section-${string} billing address-level2\` | \`section-${string} billing address-level3\` | \`section-${string} billing address-level4\` | \`section-${string} billing address-line1\` | \`section-${string} billing address-line2\` | \`section-${string} billing address-line3\` | \`section-${string} billing country-name\` | \`section-${string} billing country\` | \`section-${string} billing family-name\` | \`section-${string} billing given-name\` | \`section-${string} billing honorific-prefix\` | \`section-${string} billing honorific-suffix\` | \`section-${string} billing name\` | \`section-${string} billing nickname\` | \`section-${string} billing organization-title\` | \`section-${string} billing postal-code\` | \`section-${string} billing sex\` | \`section-${string} billing street-address\` | \`section-${string} billing transaction-currency\` | \`section-${string} billing username\` | \`section-${string} billing cc-additional-name\` | \`section-${string} billing cc-family-name\` | \`section-${string} billing cc-given-name\` | \`section-${string} billing cc-name\` | \`section-${string} billing cc-type\`**

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

* **maxLength**

  **number**

  **Default: Infinity**

  Specifies the maximum number of characters allowed.

* **minLength**

  **number**

  **Default: 0**

  Specifies the min number of characters allowed.

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

* **rows**

  **number**

  **Default: 2**

  A number of visible text lines.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

### TextAutocompleteField

```ts
'language' | 'organization' | 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'country-name' | 'country' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'name' | 'nickname' | 'one-time-code' | 'organization-title' | 'postal-code' | 'sex' | 'street-address' | 'transaction-currency' | 'username' | 'cc-additional-name' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-type'
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
  <s-text-area
    label="Shipping address"
    value="1776 Barnes Street, Orlando, FL 32801"
    rows={3}
   />
  ```

  ##### html

  ```html
  <s-text-area
    label="Shipping address"
    value="1776 Barnes Street, Orlando, FL 32801"
    rows="3"
  ></s-text-area>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple text area for collecting product descriptions with a placeholder and autocomplete disabled.

  ##### jsx

  ```jsx
  <s-text-area
    label="Product description"
    placeholder="Enter a detailed description..."
    autocomplete="off"
   />
  ```

  ##### html

  ```html
  <s-text-area
    label="Product description"
    placeholder="Enter a detailed description..."
    autocomplete="off"
  ></s-text-area>
  ```

* #### Seo meta description with character limit

  ##### Description

  Showcases a text area for writing SEO meta descriptions with a character limit of 160, providing guidance text and a multi-line input.

  ##### jsx

  ```jsx
  <s-text-area
    label="Meta description"
    max-length={160}
    details="Appears in search results. Keep under 160 characters for best visibility."
    placeholder="Write a compelling description that will appear in Google search results..."
    rows={3}
    autocomplete="off"
   />
  ```

  ##### html

  ```html
  <s-text-area
    label="Meta description"
    max-length="160"
    details="Appears in search results. Keep under 160 characters for best visibility."
    placeholder="Write a compelling description that will appear in Google search results..."
    rows="3"
    autocomplete="off"
  ></s-text-area>
  ```

* #### With error state

  ##### Description

  Demonstrates the error state of a text area with a minimum length requirement, showing how validation errors are displayed in a commerce context.

  ##### jsx

  ```jsx
  <s-text-area
    label="Reason for return"
    error="Please provide a detailed explanation for the return request. This helps us improve our products and process the refund faster."
    minLength={20}
    placeholder="Explain why the customer is returning this item..."
    rows={3}
    autocomplete="off"
   />
  ```

  ##### html

  ```html
  <s-text-area
    label="Reason for return"
    error="Please provide a detailed explanation for the return request. This helps us improve our products and process the refund faster."
    minLength="20"
    placeholder="Explain why the customer is returning this item..."
    rows="3"
    autocomplete="off"
  ></s-text-area>
  ```

* #### Product care instructions

  ##### Description

  Illustrates a text area for entering detailed product care instructions, with an expanded height and supporting guidance text.

  ##### jsx

  ```jsx
  <s-text-area
    label="Care instructions"
    rows={6}
    details="Detailed care instructions help customers maintain their purchases and reduce returns."
    placeholder="Provide washing, storage, and maintenance instructions..."
    autocomplete="off"
   />
  ```

  ##### html

  ```html
  <s-text-area
    label="Care instructions"
    rows="6"
    details="Detailed care instructions help customers maintain their purchases and reduce returns."
    placeholder="Provide washing, storage, and maintenance instructions..."
    autocomplete="off"
  ></s-text-area>
  ```
