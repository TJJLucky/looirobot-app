---
title: Divider
description: Create clear visual separation between elements in your user interface.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/divider
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/divider.md
---

# Divider

Create clear visual separation between elements in your user interface.

## Properties

* **color**

  **"base" | "strong"**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **direction**

  **"inline" | "block"**

  **Default: 'inline'**

  Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-divider />
  ```

  ##### html

  ```html
  <s-divider></s-divider>
  ```

* #### Basic usage

  ##### Description

  Demonstrates the default divider with standard base color and inline direction.

  ##### jsx

  ```jsx
  <s-divider />
  ```

  ##### html

  ```html
  <s-divider></s-divider>
  ```

* #### Custom color

  ##### Description

  Shows a divider with a strong color variant for increased visual emphasis.

  ##### jsx

  ```jsx
  <s-divider color="strong" />
  ```

  ##### html

  ```html
  <s-divider color="strong"></s-divider>
  ```

* #### Custom direction

  ##### Description

  Illustrates using a block-direction divider within an inline stack to create vertical separation between items.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-text>Item 1</s-text>
    <s-divider direction="block" />
    <s-text>Item 2</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-text>Item 1</s-text>
    <s-divider direction="block"></s-divider>
    <s-text>Item 2</s-text>
  </s-stack>
  ```

* #### Separating form sections

  ##### Description

  Uses a divider to visually group and separate different sections of a form, improving readability and user comprehension.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-text-field label="Store name" />
    <s-text-field label="Description" />
    <s-divider />
    <s-text-field label="Email address" />
    <s-text-field label="Phone number" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-text-field label="Store name"></s-text-field>
    <s-text-field label="Description"></s-text-field>
    <s-divider></s-divider>
    <s-text-field label="Email address"></s-text-field>
    <s-text-field label="Phone number"></s-text-field>
  </s-stack>
  ```

* #### Organizing settings panels

  ##### Description

  Demonstrates using a divider to logically separate basic and advanced settings in a configuration panel.

  ##### jsx

  ```jsx
  <s-box padding="base">
    <s-stack gap="base">
      <s-switch label="Email notifications" />
      <s-switch label="Auto-save" />
      <s-divider />
      <s-switch label="Advanced settings" />
      <s-switch label="Developer tools" />
    </s-stack>
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="base">
    <s-stack gap="base">
      <s-switch label="Email notifications"></s-switch>
      <s-switch label="Auto-save"></s-switch>
      <s-divider></s-divider>
      <s-switch label="Advanced settings"></s-switch>
      <s-switch label="Developer tools"></s-switch>
    </s-stack>
  </s-box>
  ```

* #### Visual breaks in section layouts

  ##### Description

  Shows how dividers can be used to create clean, segmented sections within a section, improving information hierarchy.

  ##### jsx

  ```jsx
  <s-box padding="large-400" background="base">
    <s-stack gap="base">
      <s-heading>Order summary</s-heading>
      <s-text>3 items</s-text>
      <s-divider />
      <s-heading>Shipping address</s-heading>
      <s-text>123 Main Street, Toronto ON</s-text>
      <s-divider />
      <s-heading>Payment method</s-heading>
      <s-text>•••• 4242</s-text>
    </s-stack>
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="large-400" background="base">
    <s-stack gap="base">
      <s-heading>Order summary</s-heading>
      <s-text>3 items</s-text>
      <s-divider></s-divider>
      <s-heading>Shipping address</s-heading>
      <s-text>123 Main Street, Toronto ON</s-text>
      <s-divider></s-divider>
      <s-heading>Payment method</s-heading>
      <s-text>•••• 4242</s-text>
    </s-stack>
  </s-box>
  ```

* #### Separating content sections

  ##### Description

  Illustrates using dividers to create clear, visually distinct sections for different metrics or content blocks.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-box padding="base">
      <s-text>150 orders</s-text>
    </s-box>
    <s-divider />
    <s-box padding="base">
      <s-text>$2,400 revenue</s-text>
    </s-box>
    <s-divider />
    <s-box padding="base">
      <s-text>89 customers</s-text>
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-box padding="base">
      <s-text>150 orders</s-text>
    </s-box>
    <s-divider></s-divider>
    <s-box padding="base">
      <s-text>$2,400 revenue</s-text>
    </s-box>
    <s-divider></s-divider>
    <s-box padding="base">
      <s-text>89 customers</s-text>
    </s-box>
  </s-stack>
  ```

## Useful for

* Separating elements inside sections.
* Visually grouping related content in forms and lists.
