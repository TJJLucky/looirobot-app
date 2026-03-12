---
title: URLField
description: Collect URLs from users with built-in formatting and validation.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/urlfield'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/urlfield.md
---

# URLField

Collect URLs from users with built-in formatting and validation.

## URLField

* **autocomplete**

  **"on" | "off" | \`section-${string} url\` | \`section-${string} photo\` | \`section-${string} impp\` | \`section-${string} home impp\` | \`section-${string} mobile impp\` | \`section-${string} fax impp\` | \`section-${string} pager impp\` | "shipping url" | "shipping photo" | "shipping impp" | "shipping home impp" | "shipping mobile impp" | "shipping fax impp" | "shipping pager impp" | "billing url" | "billing photo" | "billing impp" | "billing home impp" | "billing mobile impp" | "billing fax impp" | "billing pager impp" | \`section-${string} shipping url\` | \`section-${string} shipping photo\` | \`section-${string} shipping impp\` | \`section-${string} shipping home impp\` | \`section-${string} shipping mobile impp\` | \`section-${string} shipping fax impp\` | \`section-${string} shipping pager impp\` | \`section-${string} billing url\` | \`section-${string} billing photo\` | \`section-${string} billing impp\` | \`section-${string} billing home impp\` | \`section-${string} billing mobile impp\` | \`section-${string} billing fax impp\` | \`section-${string} billing pager impp\` | URLAutocompleteField**

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

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

### URLAutocompleteField

```ts
'url' | 'photo' | 'impp' | 'home impp' | 'mobile impp' | 'fax impp' | 'pager impp'
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
  <s-url-field
    label="Your website"
    details="Join the partner ecosystem"
    placeholder="https://shopify.com/partner"
   />
  ```

  ##### html

  ```html
  <s-url-field
    label="Your website"
    details="Join the partner ecosystem"
    placeholder="https://shopify.com/partner"
  ></s-url-field>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple URL input field with a label and placeholder, showing the minimal configuration needed for collecting a URL.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    {/* Simple URL input */}
    <s-url-field
      label="Website URL"
      placeholder="https://example.com"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <!-- Simple URL input -->
    <s-url-field
      label="Website URL"
      placeholder="https://example.com"
    ></s-url-field>
  </s-stack>
  ```

* #### With validation

  ##### Description

  Shows a URL input field with built-in validation, including required status, minimum and maximum length constraints, and a custom error message for invalid inputs.

  ##### jsx

  ```jsx
  <s-url-field
    label="Company website"
    required
    minLength={10}
    maxLength={200}
    error="Please enter a valid website URL"
    />
  ```

  ##### html

  ```html
  <s-url-field
    label="Company website"
    required
    minLength="10"
    maxLength="200"
    error="Please enter a valid website URL"
  ></s-url-field>
  ```

* #### With default value

  ##### Description

  Illustrates a URL field pre-populated with a default value, set to read-only mode to prevent user modifications.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-url-field
      label="Profile URL"
      defaultValue="https://shop.myshopify.com"
      readOnly
    />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-url-field
      label="Profile URL"
      value="https://shop.myshopify.com"
      readOnly
    ></s-url-field>
  </s-stack>
  ```

* #### Disabled state

  ##### Description

  Shows a URL field in a disabled state, displaying a pre-filled URL that cannot be edited by the user.

  ##### jsx

  ```jsx
  <s-url-field
    label="Store URL"
    value="https://your-store.myshopify.com"
    disabled
  />
  ```

  ##### html

  ```html
  <s-url-field
    label="Store URL"
    value="https://your-store.myshopify.com"
    disabled
  ></s-url-field>
  ```
