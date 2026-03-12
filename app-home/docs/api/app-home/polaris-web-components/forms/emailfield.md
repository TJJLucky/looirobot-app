---
title: EmailField
description: Let users enter email addresses with optimized keyboard settings.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/emailfield
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/emailfield.md
---

# Email​Field

Let users enter email addresses with optimized keyboard settings.

## Properties

* **autocomplete**

  **"on" | "off" | EmailAutocompleteField | \`section-${string} email\` | \`section-${string} home email\` | \`section-${string} mobile email\` | \`section-${string} fax email\` | \`section-${string} pager email\` | "shipping email" | "shipping home email" | "shipping mobile email" | "shipping fax email" | "shipping pager email" | "billing email" | "billing home email" | "billing mobile email" | "billing fax email" | "billing pager email" | \`section-${string} shipping email\` | \`section-${string} shipping home email\` | \`section-${string} shipping mobile email\` | \`section-${string} shipping fax email\` | \`section-${string} shipping pager email\` | \`section-${string} billing email\` | \`section-${string} billing home email\` | \`section-${string} billing mobile email\` | \`section-${string} billing fax email\` | \`section-${string} billing pager email\`**

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

### EmailAutocompleteField

```ts
'email' | 'home email' | 'mobile email' | 'fax email' | 'pager email'
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
  <s-email-field
    label="Email"
    placeholder="bernadette.lapresse@jadedpixel.com"
    details="Used for sending notifications"
   />
  ```

  ##### html

  ```html
  <s-email-field
    label="Email"
    placeholder="bernadette.lapresse@jadedpixel.com"
    details="Used for sending notifications"
  ></s-email-field>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple email field with a label and required attribute, showing the most fundamental way to use the EmailField component.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field label="Email address" required />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field label="Email address" required></s-email-field>
  </s-stack>
  ```

* #### With error and help text

  ##### Description

  Showcases an email field with additional details and an error message, illustrating how to provide contextual information and validation feedback.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field
      label="Contact email"
      details="We'll send your order confirmation here"
      error="Please enter a valid email address"
      required
    />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field
      label="Contact email"
      details="We'll send your order confirmation here"
      error="Please enter a valid email address"
      required
    ></s-email-field>
  </s-stack>
  ```

* #### Optional field with placeholder

  ##### Description

  Illustrates an optional email field with a placeholder text and help text, demonstrating a common pattern for collecting alternative contact information.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field
      label="Alternate email"
      placeholder="secondary@example.com"
      details="Additional email for notifications"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field
      label="Alternate email"
      placeholder="secondary@example.com"
      details="Additional email for notifications"
    ></s-email-field>
  </s-stack>
  ```

* #### Read-only display

  ##### Description

  Shows how to render an email field in a read-only state, useful for displaying existing email addresses that cannot be modified.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field
      label="Account email"
      value="user@example.com"
      readOnly
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field
      label="Account email"
      value="user@example.com"
      readOnly
    ></s-email-field>
  </s-stack>
  ```

* #### With length constraints

  ##### Description

  Demonstrates setting minimum and maximum length constraints for the email input, providing additional validation beyond the standard email format check.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field
      label="Business email"
      minLength={5}
      maxLength={100}
      required
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field
      label="Business email"
      minLength="5"
      maxLength="100"
      required
    ></s-email-field>
  </s-stack>
  ```

* #### Email validation

  ##### Description

  Interactive example showing real-time email validation with error messages that update as the user types.

  ##### jsx

  ```jsx
  const [email, setEmail] = useState('invalid-email');
  const [error, setError] = useState('Please enter a valid email address');

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-text-field label="Name" />
        <s-email-field
          label="Contact email"
          details="We'll send your order confirmation here"
          value={email}
          error={error}
          required
          onInput={(e) => {
            setEmail(e.currentTarget.value);
            setError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.currentTarget.value) ? '' : 'Please enter a valid email address');
          }}
        />
      </s-stack>
    </s-section>
  )
  ```
