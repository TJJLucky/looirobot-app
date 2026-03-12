---
title: ColorField
description: Allow users to select a color with a color picker or as a text input.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorfield
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorfield.md
---

# Color​Field

Allow users to select a color with a color picker or as a text input.

## Properties

* **alpha**

  **boolean**

  **Default: false**

  Allow user to select an alpha value.

* **autocomplete**

  **"on" | "off"**

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
  <s-color-field placeholder="Select a color" value="#FF0000" />
  ```

  ##### html

  ```html
  <s-color-field placeholder="Select a color" value="#FF0000"></s-color-field>
  ```

* #### Basic Usage

  ##### Description

  Standard color input field with hex value.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field label="Brand color" name="color" value="#FF0000"></s-color-field>
  </s-stack>
  ```

* #### Required

  ##### Description

  Required color field ensuring essential color values are provided.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field label="Brand color" value="#FF0000" required />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field label="Brand color" value="#FF0000" required></s-color-field>
  </s-stack>
  ```

* #### With Alpha Transparency

  ##### Description

  Color field supporting alpha channel for transparency control.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field
      label="Background color"
      value="rgba(255, 0, 0, 0.5)"
      alpha
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field
      label="Background color"
      value="rgba(255, 0, 0, 0.5)"
      alpha
    ></s-color-field>
  </s-stack>
  ```

* #### With Error State

  ##### Description

  Color field with validation error for invalid color format inputs.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field
      label="Brand color"
      name="brandColor"
      value="#invalid"
      error="Please enter a valid color format (hex, rgb, or rgba)"
      required
    ></s-color-field>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field
      label="Brand color"
      name="brandColor"
      value="#invalid"
      error="Please enter a valid color format (hex, rgb, or rgba)"
      required
    ></s-color-field>
  </s-stack>
  ```

* #### With Help Text

  ##### Description

  Color field with contextual details providing additional guidance.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field
      label="Primary color"
      value="#1a73e8"
      details="Main brand color used for buttons and links"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field
      label="Primary color"
      value="#1a73e8"
      details="Main brand color used for buttons and links"
    ></s-color-field>
  </s-stack>
  ```

* #### With Placeholder

  ##### Description

  Color field demonstrating how to use a placeholder to guide user input for color selection.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field
      label="Theme color"
      placeholder="Enter a hex color (e.g., #FF0000)"
      value="#000000"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field
      label="Theme color"
      placeholder="Enter a hex color (e.g., #FF0000)"
      value="#000000"
    ></s-color-field>
  </s-stack>
  ```

* #### Read Only State

  ##### Description

  Color field in a read-only mode, preventing user modifications to the color value.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-color-field label="System color" name="color" value="#1a73e8" readOnly></s-color-field>
  </s-stack>
  ```

* #### Form Integration

  ##### Description

  A multi-color field form section demonstrating how ColorField can be used to capture different color settings in a single form.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-section>
      <s-heading>Theme settings</s-heading>
      <s-stack gap="base">
        <s-color-field
          label="Primary brand color"
          name="primaryColor"
          value="#1a73e8"
          defaultValue="#1a73e8"
          details="This color will be used for buttons, links, and brand elements"
          required
         />
        <s-color-field
          label="Secondary color"
          name="secondaryColor"
          value="#34a853"
          details="Used for secondary actions and accents"
         />
        <s-color-field
          label="Background overlay"
          name="overlayColor"
          value="rgba(0, 0, 0, 0.5)"
          alpha
          details="Background color for modal overlays and dropdowns"
         />
      </s-stack>
    </s-section>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-section>
      <s-heading>Theme settings</s-heading>
      <s-stack gap="base">
        <s-color-field
          label="Primary brand color"
          name="primaryColor"
          value="#1a73e8"
          defaultValue="#1a73e8"
          details="This color will be used for buttons, links, and brand elements"
          required
        ></s-color-field>
        <s-color-field
          label="Secondary color"
          name="secondaryColor"
          value="#34a853"
          details="Used for secondary actions and accents"
        ></s-color-field>
        <s-color-field
          label="Background overlay"
          name="overlayColor"
          value="rgba(0, 0, 0, 0.5)"
          alpha
          details="Background color for modal overlays and dropdowns"
        ></s-color-field>
      </s-stack>
    </s-section>
  </s-stack>
  ```

* #### Color validation

  ##### Description

  Interactive example showing real-time hex color validation with error messages.

  ##### jsx

  ```jsx
  const [color, setColor] = useState('#invalid');
  const [error, setError] = useState('Please enter a valid color format');

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-text-field label="Theme name" />
        <s-color-field
          label="Brand color"
          name="Color"
          value={color}
          error={error}
          required
          onInput={(e) => {
            setColor(e.currentTarget.value);
            setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
          }}
        />
      </s-stack>
    </s-section>
  )
  ```

## Best practices

* Use the alpha property to allow merchants to select transparent colors
* Provide clear labels that indicate what the color will be used for
* Use details text to provide context about the color's purpose
* Validate color format inputs and provide clear error messages
