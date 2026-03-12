---
title: ChoiceList
description: >-
  Present multiple options to users, allowing either single selections with
  radio buttons or multiple selections with checkboxes.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/choicelist
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/choicelist.md
---

# Choice​List

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.

## Properties

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

  `disabled` on any child choices is ignored when this is true.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **label**

  **string**

  Content to use as the field label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **multiple**

  **boolean**

  **Default: false**

  Whether multiple choices can be selected.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **values**

  **string\[]**

  An array of the `value`s of the selected options.

  This is a convenience prop for setting the `selected` prop on child options.

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

## Choice

Create options that let users select one or multiple items from a list of choices.

* **accessibilityLabel**

  **string**

  A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced. This can also be used to display a control without a visual label, while still providing context to users using screen readers.

* **defaultSelected**

  **boolean**

  **Default: false**

  Whether the control is active by default.

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

* **selected**

  **boolean**

  **Default: false**

  Whether the control is active.

* **value**

  **string**

  The value used in form data when the control is checked.

## Slots

* **children**

  **HTMLElement**

  Content to use as the choice label.

  The label is produced by extracting and concatenating the text nodes from the provided content; any markup or element structure is ignored.

* **details**

  **HTMLElement**

  Additional text to provide context or guidance for the input.

  This text is displayed along with the input and its label to offer more information or instructions to the user.

* **secondary-content**

  **HTMLElement**

  Additional content to display below the choice label. Can include rich content like TextFields, Buttons, or other interactive components. Event handlers on React components are preserved.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  const handleChange = (event) => {
    console.log('Values: ', event.currentTarget.values)
  }

  return (
    <s-choice-list
      label="Company name"
      name="Company name"
      details="The company name will be displayed on the checkout page."
      onChange={handleChange}
    >
      <s-choice value="hidden">Hidden</s-choice>
      <s-choice value="optional">Optional</s-choice>
      <s-choice value="required">Required</s-choice>
    </s-choice-list>
  )
  ```

  ##### html

  ```html
  <script>
    const handleChange = (event) =>
      console.log('Values: ', event.currentTarget.values);
  </script>
  <s-choice-list
    label="Company name"
    name="Company name"
    details="The company name will be displayed on the checkout page."
    onChange="handleChange(event)"
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required">Required</s-choice>
  </s-choice-list>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.

  ##### jsx

  ```jsx
  <s-choice-list label="Product visibility" name="visibility">
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required" selected>
      Required
    </s-choice>
  </s-choice-list>
  ```

  ##### html

  ```html
  <s-choice-list label="Product visibility" name="visibility">
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required" selected>Required</s-choice>
  </s-choice-list>
  ```

* #### Multiple selections

  ##### Description

  Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.

  ##### jsx

  ```jsx
  <s-choice-list label="Checkout options" name="checkout" multiple>
    <s-choice value="shipping" selected>
      Use the shipping address as the billing address by default
      <s-text slot="details">
        Reduces the number of fields required to check out. The billing address
        can still be edited.
      </s-text>
    </s-choice>
    <s-choice value="confirmation">
      Require a confirmation step
      <s-text slot="details">
        Customers must review their order details before purchasing.
      </s-text>
    </s-choice>
  </s-choice-list>
  ```

  ##### html

  ```html
  <s-choice-list label="Checkout options" name="checkout" multiple>
    <s-choice value="shipping" selected>
      Use the shipping address as the billing address by default
      <s-text slot="details">
        Reduces the number of fields required to check out. The billing address
        can still be edited.
      </s-text>
    </s-choice>
    <s-choice value="confirmation">
      Require a confirmation step
      <s-text slot="details">
        Customers must review their order details before purchasing.
      </s-text>
    </s-choice>
  </s-choice-list>
  ```

* #### With error state

  ##### Description

  Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.

  ##### jsx

  ```jsx
  <s-choice-list
    label="Product visibility"
    error="Please select an option"
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required">Required</s-choice>
  </s-choice-list>
  ```

  ##### html

  ```html
  <s-choice-list
    label="Product visibility"
    name="visibility"
    error="Product visibility cannot be hidden at this time"
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required" selected>Required</s-choice>
  </s-choice-list>
  ```

* #### Multiple choices with details

  ##### Description

  Showcases a multiple-selection ChoiceList with each option including detailed information.

  ##### jsx

  ```jsx
  <s-choice-list
    label="Available shipping methods"
    name="shipping-methods"
    multiple
  >
    <s-choice value="standard" selected>
      Standard shipping
      <s-text slot="details">5-7 business days delivery</s-text>
    </s-choice>
    <s-choice value="express" selected>
      Express shipping
      <s-text slot="details">2-3 business days delivery</s-text>
    </s-choice>
    <s-choice value="overnight">
      Overnight shipping
      <s-text slot="details">Next business day delivery</s-text>
    </s-choice>
  </s-choice-list>
  ```

  ##### html

  ```html
  <s-choice-list
    label="Available shipping methods"
    name="shipping-methods"
    multiple
  >
    <s-choice value="standard" selected>
      Standard shipping
      <s-text slot="details">5-7 business days delivery</s-text>
    </s-choice>
    <s-choice value="express" selected>
      Express shipping
      <s-text slot="details">2-3 business days delivery</s-text>
    </s-choice>
    <s-choice value="overnight">
      Overnight shipping
      <s-text slot="details">Next business day delivery</s-text>
    </s-choice>
  </s-choice-list>
  ```

* #### Choice list validation

  ##### Description

  Interactive example showing required choice validation with dynamic error messages.

  ##### jsx

  ```jsx
  const [error, setError] = useState('Please select at least one option');

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-choice-list
          label="Product visibility"
          name="visibility"
          error={error}
          onChange={(e) => {
            setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
          }}
        >
          <s-choice value="hidden">Hidden</s-choice>
          <s-choice value="optional">Optional</s-choice>
          <s-choice value="required">Required</s-choice>
        </s-choice-list>
      </s-stack>
    </s-section>
  )
  ```

## Best practices

* Include a title that tells merchants what to do or explains the available options
* Label options clearly based on what the option will do
* Avoid mutually exclusive options when allowing multiple selection

## Content guidelines

* Write titles and choices in sentence case
* End titles with a colon if they introduce the list
* Start each choice with a capital letter
* Don't use commas or semicolons at the end of lines
