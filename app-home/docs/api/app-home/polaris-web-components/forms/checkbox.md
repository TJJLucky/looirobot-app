---
title: Checkbox
description: >-
  Give users a clear way to make selections, such as agreeing to terms or
  choosing multiple items from a list.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/checkbox'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/checkbox.md
---

# Checkbox

Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.

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

* **defaultIndeterminate**

  **boolean**

  **Default: false**

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

* **indeterminate**

  **boolean**

* **label**

  **string**

  Visual content to use as the control label.

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
  <s-checkbox
    label="Require a confirmation step"
    details="Ensure all criteria are met before proceeding"
   />
  ```

  ##### html

  ```html
  <s-checkbox
    label="Require a confirmation step"
    details="Ensure all criteria are met before proceeding"
  ></s-checkbox>
  ```

* #### Indeterminate state

  ##### Description

  Checkbox in indeterminate state, commonly used for "select all" functionality when some items are selected.

  ##### jsx

  ```jsx
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
  const toggleAll = (checked) => setSelectedItems(checked ? items : []);
  const isSelected = (item) => selectedItems.includes(item);

  return (
    <s-stack gap="small">
      <s-checkbox
        label="Select all items"
        indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
        checked={selectedItems.length === items.length}
        onChange={e => toggleAll(e.currentTarget.checked)}
      />
      <s-divider />
      {items.map(i => (
        <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
      ))}
    </s-stack>
  );
  ```

* #### Error state

  ##### Description

  Checkbox with validation error message for required form fields.

  ##### jsx

  ```jsx
  <s-checkbox
    label="I agree to the terms"
    error="You must accept the terms to continue"
  />
  ```

  ##### html

  ```html
  <s-checkbox
    label="I agree to the terms"
    error="You must accept the terms to continue"
  ></s-checkbox>
  ```

* #### Help text

  ##### Description

  Checkbox with descriptive details text to provide additional context about the option.

  ##### jsx

  ```jsx
  <s-checkbox
    label="Send order notifications"
    details="You'll receive emails when orders are placed, fulfilled, or cancelled"
   />
  ```

  ##### html

  ```html
  <s-checkbox
    label="Send order notifications"
    details="You'll receive emails when orders are placed, fulfilled, or cancelled"
  ></s-checkbox>
  ```

* #### Disabled state

  ##### Description

  Checkbox in disabled state with explanatory details about why it's unavailable.

  ##### jsx

  ```jsx
  <s-checkbox
    label="Advanced settings"
    disabled
    details="Contact your administrator to enable advanced settings"
   />
  ```

  ##### html

  ```html
  <s-checkbox
    label="Advanced settings"
    disabled
    details="Contact your administrator to enable advanced settings"
  ></s-checkbox>
  ```

* #### Settings group

  ##### Description

  Multiple checkboxes for different configuration options with helpful details.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-checkbox label="Show only published products" checked />
    <s-checkbox
      label="Enable inventory tracking"
      details="Track inventory levels and receive low stock alerts"
      checked
     />
    <s-checkbox
      label="View customer data"
      details="Allow staff to access customer contact information and order history"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-checkbox label="Show only published products" checked></s-checkbox>
    <s-checkbox
      label="Enable inventory tracking"
      details="Track inventory levels and receive low stock alerts"
      checked
    ></s-checkbox>
    <s-checkbox
      label="View customer data"
      details="Allow staff to access customer contact information and order history"
    ></s-checkbox>
  </s-stack>
  ```

* #### Checkbox validation

  ##### Description

  Interactive example showing required checkbox validation with dynamic error messages.

  ##### jsx

  ```jsx
  const [checked, setChecked] = useState(false);
  const errorMessage = 'You must accept the terms to continue';
  const [error, setError] = useState(errorMessage);

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-text-field label="Name" />
        <s-checkbox
          label="I agree to the terms"
          checked={checked}
          error={error}
          onChange={(e) => {
            setChecked(e.currentTarget.checked);
            setError(e.currentTarget.checked ? '' : errorMessage);
          }}
        />
      </s-stack>
    </s-section>
  )
  ```

## Best practices

* Use ChoiceList when rendering multiple checkboxes to provide a consistent and accessible selection interface
* Work independently from each other
* Be framed positively (e.g., "Publish store" not "Hide store")
* Always have a label when used to activate or deactivate a setting
* Be listed in a logical order (alphabetical, numerical, time-based, etc.)

## Content guidelines

* Start each option with a capital letter
* Don't use commas or semicolons at the end of each line
* Use first person when asking merchants to agree to terms (e.g., "I agree to the Terms of Service")
