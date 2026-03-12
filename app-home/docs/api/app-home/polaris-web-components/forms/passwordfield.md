---
title: PasswordField
description: Securely collect sensitive information from users.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/passwordfield
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/passwordfield.md
---

# Password​Field

Securely collect sensitive information from users.

## Properties

* **autocomplete**

  **"on" | "off" | PasswordAutocompleteField | \`section-${string} current-password\` | \`section-${string} new-password\` | "shipping current-password" | "shipping new-password" | "billing current-password" | "billing new-password" | \`section-${string} shipping current-password\` | \`section-${string} shipping new-password\` | \`section-${string} billing current-password\` | \`section-${string} billing new-password\`**

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

### PasswordAutocompleteField

```ts
'current-password' | 'new-password'
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
  <s-password-field
    label="Password"
    placeholder="Enter your password"
    details="Must be at least 8 characters long"
    minLength={8}
   />
  ```

  ##### html

  ```html
  <s-password-field
    label="Password"
    placeholder="Enter your password"
    details="Must be at least 8 characters long"
    minLength="8"
  ></s-password-field>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a basic password field with a label, name, and required validation. Sets a minimum length of 8 characters and configures autocomplete for a new password.

  ##### jsx

  ```jsx
  <s-password-field
    label="Password"
    name="password"
    required
    minLength={8}
    autocomplete="new-password"
  />
  ```

  ##### html

  ```html
  <s-password-field
    label="Password"
    name="password"
    required
    minLength="8"
    autocomplete="new-password"
  ></s-password-field>
  ```

* #### With error state

  ##### Description

  Shows a password field in an error state, displaying a custom error message when the password does not meet the minimum length requirement.

  ##### jsx

  ```jsx
  <s-password-field
    label="Password"
    name="password"
    error="Password must be at least 8 characters"
    minLength={8}
    autocomplete="new-password"
   />
  ```

  ##### html

  ```html
  <s-password-field
    label="Password"
    name="password"
    error="Password must be at least 8 characters"
    minLength="8"
    autocomplete="new-password"
  ></s-password-field>
  ```

* #### With helper text

  ##### Description

  Illustrates a password field with additional details providing guidance about password creation requirements.

  ##### jsx

  ```jsx
  <s-password-field
    label="Create password"
    name="new-password"
    details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
    minLength={8}
    autocomplete="new-password"
   />
  ```

  ##### html

  ```html
  <s-password-field
    label="Create password"
    name="new-password"
    details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
    minLength="8"
    autocomplete="new-password"
  ></s-password-field>
  ```

* #### In form layout

  ##### Description

  Shows how the password field can be integrated into a form alongside other input fields, such as an email field, to create a complete login or registration form.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-email-field
      label="Email"
      name="email"
      autocomplete="email"
      required
     />
    <s-password-field
      label="Password"
      name="password"
      autocomplete="current-password"
      required
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-email-field
      label="Email"
      name="email"
      autocomplete="username"
      required
    ></s-email-field>
    <s-password-field
      label="Password"
      name="password"
      autocomplete="current-password"
      required
    ></s-password-field>
  </s-stack>
  ```

* #### With password strength requirements

  ##### Description

  Demonstrates a password field with dynamic password strength validation, showing real-time feedback on password complexity requirements.

  ##### jsx

  ```jsx
  <s-stack gap="large-100">
    <s-password-field
      label="Create password"
      name="password"
      value="example-password"
      autocomplete="new-password"
      required
     />
    <s-stack gap="small-200">
      <s-text tone="success">✓ At least 8 characters</s-text>
      <s-text color="subdued">○ Contains uppercase letter</s-text>
      <s-text color="subdued">○ Contains lowercase letter</s-text>
      <s-text color="subdued">○ Contains number</s-text>
    </s-stack>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="large-100">
    <s-password-field
      label="Create password"
      name="password"
      value="example-password"
      autocomplete="new-password"
      required
    ></s-password-field>
    <s-stack gap="small-200">
      <s-text tone="success">✓ At least 8 characters</s-text>
      <s-text color="subdued">○ Contains uppercase letter</s-text>
      <s-text color="subdued">○ Contains lowercase letter</s-text>
      <s-text color="subdued">○ Contains number</s-text>
    </s-stack>
  </s-stack>
  ```
