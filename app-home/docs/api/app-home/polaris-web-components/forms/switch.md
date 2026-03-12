---
title: Switch
description: Give users a clear way to toggle options on or off.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/switch'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/switch.md'
---

# Switch

Give users a clear way to toggle options on or off.

## Properties

* **accessibilityLabel**

  **string**

  A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced. This can also be used to display a control without a visual label, while still providing context to users using screen readers.

* **checked**

  **boolean**

  **Default: false**

  Whether the control is active.

* **defaultChecked**

  **boolean**

  **Default: false**

  Whether the control is active by default.

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

  Visual content to use as the control label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The value used in form data when the checkbox is checked.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **change**

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
  <s-switch
    label="Enable feature"
    details="Ensure all criteria are met before enabling"
   />
  ```

  ##### html

  ```html
  <s-switch
    label="Enable feature"
    details="Ensure all criteria are met before enabling"
  ></s-switch>
  ```

* #### Basic switch

  ##### Description

  Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing users to toggle a single setting on or off.

  ##### jsx

  ```jsx
  <s-switch id="basic-switch" label="Enable notifications" />
  ```

  ##### html

  ```html
  <s-switch id="basic-switch" label="Enable notifications"></s-switch>
  ```

* #### Disabled switch

  ##### Description

  Locked switch with explanatory text for unavailable premium features. This example shows a switch that is visually disabled and cannot be interacted with, typically used to indicate a feature is not currently available.

  ##### jsx

  ```jsx
  <s-switch
    id="disabled-switch"
    label="Feature locked (Premium plan required)"
    checked={true}
    disabled={true}
   />
  ```

  ##### html

  ```html
  <s-switch
    id="disabled-switch"
    label="Feature locked (Premium plan required)"
    checked="true"
    disabled="true"
  ></s-switch>
  ```

* #### Form integration

  ##### Description

  Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow users to configure multiple related settings simultaneously.

  ##### jsx

  ```jsx
  <form>
    <s-switch
      id="email-notifications"
      label="Email notifications"
      name="emailNotifications"
      value="enabled"
     />
    <s-switch
      id="sms-notifications"
      label="SMS notifications"
      name="smsNotifications"
      value="enabled"
     />
  </form>
  ```

  ##### html

  ```html
  <form>
    <s-switch
      id="email-notifications"
      label="Email notifications"
      name="emailNotifications"
      value="enabled"
    ></s-switch>
    <s-switch
      id="sms-notifications"
      label="SMS notifications"
      name="smsNotifications"
      value="enabled"
    ></s-switch>
  </form>
  ```

* #### Hidden label for accessibility

  ##### Description

  Switch with visually hidden label that remains accessible to screen readers. This example demonstrates how to create a switch with a label that is only perceivable by assistive technologies, maintaining accessibility while minimizing visual clutter.

  ##### jsx

  ```jsx
  <s-switch
    id="hidden-label-switch"
    labelAccessibilityVisibility="exclusive"
    label="Toggle feature"
    checked={true}
   />
  ```

  ##### html

  ```html
  <s-switch
    id="hidden-label-switch"
    labelAccessibilityVisibility="exclusive"
    label="Toggle feature"
    checked="true"
  ></s-switch>
  ```

* #### With details and error

  ##### Description

  Required switch with validation error and contextual details for user guidance. This example shows a switch that requires user interaction, provides additional context through details, and displays an error message when validation fails.

  ##### jsx

  ```jsx
  <s-switch
    id="terms-switch"
    label="Agree to terms and conditions"
    details="You must agree to continue with the purchase"
    error="Agreement is required"
    name="termsAgreement"
    required={true}
    value="agreed"
   />
  ```

  ##### html

  ```html
  <s-switch
    id="terms-switch"
    label="Agree to terms and conditions"
    details="You must agree to continue with the purchase"
    error="Agreement is required"
    name="termsAgreement"
    required="true"
    value="agreed"
  ></s-switch>
  ```

* #### Switch with accessibility label

  ##### Description

  Switch with enhanced accessibility description for screen reader users. This example illustrates how to provide a more descriptive accessibility label that provides additional context beyond the visible label.

  ##### jsx

  ```jsx
  <s-switch
    id="event-switch"
    label="Feature toggle"
    accessibilityLabel="Toggle feature on or off"
   />
  ```

  ##### html

  ```html
  <s-switch
    id="event-switch"
    label="Feature toggle"
    accessibilityLabel="Toggle feature on or off"
  ></s-switch>
  ```

* #### Settings panel with Stack

  ##### Description

  Group of related switches arranged in a vertical stack for settings configuration. This example demonstrates how to use the Stack component to create a clean, organized layout for multiple related switch settings.

  ##### jsx

  ```jsx
  <s-stack gap="small-200">
    <s-switch id="notifications-setting" label="Push notifications" />
    <s-switch id="autosave-setting" label="Auto-save drafts" />
    <s-switch
      id="analytics-setting"
      label="Usage analytics"
      checked={true}
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-switch id="notifications-setting" label="Push notifications"></s-switch>
    <s-switch id="autosave-setting" label="Auto-save drafts"></s-switch>
    <s-switch
      id="analytics-setting"
      label="Usage analytics"
      checked="true"
    ></s-switch>
  </s-stack>
  ```
