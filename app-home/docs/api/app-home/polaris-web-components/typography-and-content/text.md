---
title: Text
description: >-
  Displays inline text with specific visual styles or tones. Use to emphasize or
  differentiate words or phrases within a Paragraph or other block-level
  components.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/text
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/text.md
---

# Text

Displays inline text with specific visual styles or tones. Use to emphasize or differentiate words or phrases within a Paragraph or other block-level components.

## Properties

* **accessibilityVisibility**

  **"visible" | "hidden" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the element.

  * `visible`: the element is visible to all users.
  * `hidden`: the element is removed from the accessibility tree but remains visible.
  * `exclusive`: the element is visually hidden but remains in the accessibility tree.

* **color**

  **"base" | "subdued"**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **dir**

  **"" | "auto" | "ltr" | "rtl"**

  **Default: ''**

  Indicates the directionality of the element’s text.

  * `ltr`: languages written from left to right (e.g. English)
  * `rtl`: languages written from right to left (e.g. Arabic)
  * `auto`: the user agent determines the direction based on the content
  * `''`: direction is inherited from parent elements (equivalent to not setting the attribute)

* **fontVariantNumeric**

  **"auto" | "normal" | "tabular-nums"**

  **Default: 'auto' - inherit from the parent element**

  Set the numeric properties of the font.

* **interestFor**

  **string**

  ID of a component that should respond to interest (e.g. hover and focus) on this component.

* **tone**

  **"info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"**

  **Default: 'auto'**

  Sets the tone of the component, based on the intention of the information being conveyed.

* **type**

  **"strong" | "generic" | "address" | "redundant"**

  **Default: 'generic'**

  Provide semantic meaning and default styling to the text.

  Other presentation properties on Text override the default styling.

## Slots

* **children**

  **HTMLElement**

  The content of the Text.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-paragraph>
    <s-text type="strong">Name: </s-text>
    <s-text>Jane Doe</s-text>
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    <s-text type="strong">Name: </s-text>
    <s-text>Jane Doe</s-text>
  </s-paragraph>
  ```

* #### Basic Usage

  ##### Description

  Standard text content for general interface messaging and descriptions.

  ##### jsx

  ```jsx
  <s-text>
    Manage your products and inventory from one dashboard.
  </s-text>
  ```

  ##### html

  ```html
  <s-text>
    Manage your products and inventory from one dashboard.
  </s-text>
  ```

* #### Strong Text

  ##### Description

  Emphasized text for important messages and call-to-actions.

  ##### jsx

  ```jsx
  <s-text type="strong">
    Free shipping on orders over $50
  </s-text>
  ```

  ##### html

  ```html
  <s-text type="strong">
    Free shipping on orders over $50
  </s-text>
  ```

* #### Semantic Address

  ##### Description

  Structured address text with proper semantic meaning for screen readers.

  ##### jsx

  ```jsx
  <s-text type="address">
    123 Commerce Street, Toronto, ON M5V 2H1
  </s-text>
  ```

  ##### html

  ```html
  <s-text type="address">
    123 Commerce Street, Toronto, ON M5V 2H1
  </s-text>
  ```

* #### Tabular Numbers

  ##### Description

  Monospace number formatting for consistent alignment in tables and financial data.

  ##### jsx

  ```jsx
  <s-text fontVariantNumeric="tabular-nums">
    $1,234.56
  </s-text>
  ```

  ##### html

  ```html
  <s-text fontVariantNumeric="tabular-nums">
    $1,234.56
  </s-text>
  ```

* #### Status Tones

  ##### Description

  Color-coded text indicating different status states and semantic meanings.

  ##### jsx

  ```jsx
  <s-stack gap="small">
    <s-text tone="success">Order fulfilled</s-text>
    <s-text tone="critical">Payment failed</s-text>
    <s-text tone="warning">Low inventory</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="small">
    <s-text tone="success">Order fulfilled</s-text>
    <s-text tone="critical">Payment failed</s-text>
    <s-text tone="warning">Low inventory</s-text>
  </s-stack>
  ```

* #### Accessibility Hidden Text

  ##### Description

  Text visible only to screen readers for providing additional context.

  ##### jsx

  ```jsx
  <s-text accessibilityVisibility="exclusive">
    Product prices include tax
  </s-text>
  ```

  ##### html

  ```html
  <s-text accessibilityVisibility="exclusive">
    Product prices include tax
  </s-text>
  ```

* #### Right-to-Left Text

  ##### Description

  Text direction support for RTL languages like Arabic and Hebrew.

  ##### jsx

  ```jsx
  <s-text dir="rtl">
    محتوى النص باللغة العربية
  </s-text>
  ```

  ##### html

  ```html
  <s-text dir="rtl">
    محتوى النص باللغة العربية
  </s-text>
  ```

* #### Subdued Color

  ##### Description

  Lower contrast text for secondary information and timestamps.

  ##### jsx

  ```jsx
  <s-text color="subdued">
    Last updated 2 hours ago
  </s-text>
  ```

  ##### html

  ```html
  <s-text color="subdued">
    Last updated 2 hours ago
  </s-text>
  ```

* #### Interest For Association

  ##### Description

  Text element associated with tooltips using the \`interestFor\` attribute to show additional information on hover or focus.

  ##### jsx

  ```jsx
  <>
    <s-tooltip id="sku-tooltip">
      SKU must be unique across all products and cannot be changed after creation
    </s-tooltip>
    <s-text color="subdued" interestFor="sku-tooltip">
      What is a product SKU?
    </s-text>
  </>
  ```

  ##### html

  ```html
  <s-tooltip id="sku-tooltip">
    SKU must be unique across all products and cannot be changed after creation
  </s-tooltip>
  <s-text color="subdued" interestFor="sku-tooltip">
    What is a product SKU?
  </s-text>
  ```

## Useful for

* Adding inline text elements such as labels or line errors.
* Applying different visual tones and text styles to specific words or phrases within a `s-paragraph`, such as a `strong` type or `critical` tone.

## Best practices

* Text elements display inline and will flow on the same line when placed next to each other. To stack multiple text elements vertically, wrap them in a Stack container or use multiple `s-paragraph` components.
* Use plain and clear terms.
* Don't use jargon or technical language.
* Don't use different terms to describe the same thing.
* Don't duplicate content.
