---
title: Paragraph
description: >-
  Displays a block of text and can contain inline elements such as buttons,
  links, or emphasized text. Use to present standalone blocks of content as
  opposed to inline text.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/paragraph
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/paragraph.md
---

# Paragraph

Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.

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

* **lineClamp**

  **number**

  **Default: Infinity - no truncation is applied**

  Truncates the text content to the specified number of lines.

* **tone**

  **"info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"**

  **Default: 'auto'**

  Sets the tone of the component, based on the intention of the information being conveyed.

## Slots

* **children**

  **HTMLElement**

  The content of the Paragraph.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-paragraph>
    Shopify POS is the easiest way to sell your products in person. Available for
    iPad, iPhone, and Android.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    Shopify POS is the easiest way to sell your products in person. Available for
    iPad, iPhone, and Android.
  </s-paragraph>
  ```

* #### Basic Usage

  ##### Description

  Demonstrates a simple paragraph with default styling, showing how to use the paragraph component for standard text content.

  ##### jsx

  ```jsx
  <s-paragraph>
    Track inventory across all your retail locations in real-time.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    Track inventory across all your retail locations in real-time.
  </s-paragraph>
  ```

* #### With Tone and Color

  ##### Description

  Illustrates how to apply different tones and color variations to convey different types of information, such as informational and success messages.

  ##### jsx

  ```jsx
  <s-section>
    <s-paragraph tone="info" color="base">
      Your order will be processed within 2-3 business days.
    </s-paragraph>

    <s-paragraph tone="success" color="subdued">
      Payment successfully processed.
    </s-paragraph>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-paragraph tone="info" color="base">
      Your order will be processed within 2-3 business days.
    </s-paragraph>

    <s-paragraph tone="success" color="subdued">
      Payment successfully processed.
    </s-paragraph>
  </s-section>
  ```

* #### Line Clamping

  ##### Description

  Shows how to limit the number of lines displayed using the lineClamp prop, which truncates long text with an ellipsis after the specified number of lines.

  ##### jsx

  ```jsx
  <s-box inlineSize="300px">
    <s-paragraph lineClamp={1}>
      Premium organic cotton t-shirt featuring sustainable manufacturing
      processes, ethically sourced materials, and carbon-neutral shipping.
      Available in multiple colors and sizes with customization options for your
      brand.
    </s-paragraph>
  </s-box>
  ```

  ##### html

  ```html
  <s-box inlineSize="300px">
    <s-paragraph lineClamp="1">
      Premium organic cotton t-shirt featuring sustainable manufacturing
      processes, ethically sourced materials, and carbon-neutral shipping.
      Available in multiple colors and sizes with customization options for your
      brand.
    </s-paragraph>
  </s-box>
  ```

* #### Tabular Numbers

  ##### Description

  Demonstrates the use of tabular numbers with fontVariantNumeric, ensuring consistent alignment and readability for numerical data.

  ##### jsx

  ```jsx
  <s-paragraph fontVariantNumeric="tabular-nums">
    Orders: 1,234 Revenue: $45,678.90 Customers: 890
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph fontVariantNumeric="tabular-nums">
    Orders: 1,234 Revenue: $45,678.90 Customers: 890
  </s-paragraph>
  ```

* #### RTL Support

  ##### Description

  Illustrates right-to-left (RTL) text rendering, showing how the paragraph component supports internationalization and different text directions.

  ##### jsx

  ```jsx
  <s-paragraph dir="rtl">
    محتوى النص باللغة العربية
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph dir="rtl">
    محتوى النص باللغة العربية
  </s-paragraph>
  ```

* #### Screen Reader Text

  ##### Description

  Shows how to use the accessibilityVisibility prop to create text that is exclusively available to screen readers, improving accessibility for assistive technologies.

  ##### jsx

  ```jsx
  <s-paragraph accessibilityVisibility="exclusive">
    Table sorted by date, newest first.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph accessibilityVisibility="exclusive">
    Table sorted by date, newest first.
  </s-paragraph>
  ```

* #### Admin UI Patterns

  ##### Description

  Showcases various tone and color combinations for different administrative messages, illustrating how paragraph can communicate different types of information in a user interface.

  ##### jsx

  ```jsx
  <s-section>
    <s-paragraph tone="success" color="base">
      Payment successfully processed and order confirmed.
    </s-paragraph>

    <s-paragraph tone="warning" color="base">
      Inventory levels are running low for this product.
    </s-paragraph>

    <s-paragraph tone="critical" color="base">
      This order requires immediate attention due to shipping delays.
    </s-paragraph>

    <s-paragraph tone="info" color="base">
      Customer requested gift wrapping for this order.
    </s-paragraph>

    <s-paragraph tone="caution" color="base">
      Review shipping address before processing.
    </s-paragraph>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-paragraph tone="success" color="base">
      Payment successfully processed and order confirmed.
    </s-paragraph>

    <s-paragraph tone="warning" color="base">
      Inventory levels are running low for this product.
    </s-paragraph>

    <s-paragraph tone="critical" color="base">
      This order requires immediate attention due to shipping delays.
    </s-paragraph>

    <s-paragraph tone="info" color="base">
      Customer requested gift wrapping for this order.
    </s-paragraph>

    <s-paragraph tone="caution" color="base">
      Review shipping address before processing.
    </s-paragraph>
  </s-section>
  ```

## Useful for

* Displaying text content in a paragraph format.
* Grouping elements with the same style. For instance, icons inside a paragraph will automatically adopt the paragraph's tone.

## Best practices

* Use short paragraphs to make your content scannable.
* Use plain and clear terms.
* Don't use jargon or technical language.
* Don't use different terms to describe the same thing.
* Don't duplicate content.
