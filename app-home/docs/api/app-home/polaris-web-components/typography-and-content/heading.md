---
title: Heading
description: >-
  Renders hierarchical titles to communicate the structure and organization of
  page content. Heading levels adjust automatically based on nesting within
  parent Section components, ensuring a meaningful and accessible page outline.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/heading
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/heading.md
---

# Heading

Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.

## Properties

* **accessibilityRole**

  **"none" | "presentation" | "heading"**

  **Default: 'heading'**

  Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

  * `heading`: defines the element as a heading to a page or section.
  * `presentation`: the heading level will be stripped, and will prevent the element’s implicit ARIA semantics from being exposed to the accessibility tree.
  * `none`: a synonym for the `presentation` role.

* **accessibilityVisibility**

  **"visible" | "hidden" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the element.

  * `visible`: the element is visible to all users.
  * `hidden`: the element is removed from the accessibility tree but remains visible.
  * `exclusive`: the element is visually hidden but remains in the accessibility tree.

* **lineClamp**

  **number**

  **Default: Infinity - no truncation is applied**

  Truncates the text content to the specified number of lines.

## Slots

* **children**

  **HTMLElement**

  The content of the Heading.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-heading>Online store dashboard</s-heading>
  ```

  ##### html

  ```html
  <s-heading>Online store dashboard</s-heading>
  ```

* #### Basic heading

  ##### Description

  Standard heading for section titles and page content organization that creates a simple, clean title for a content section.

  ##### jsx

  ```jsx
  <s-heading>Product details</s-heading>
  ```

  ##### html

  ```html
  <s-heading>Product details</s-heading>
  ```

* #### Heading with line clamping

  ##### Description

  Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.

  ##### jsx

  ```jsx
  <s-box inlineSize="200px">
    <s-heading lineClamp={2}>
      Premium organic cotton t-shirt with sustainable manufacturing practices
    </s-heading>
  </s-box>
  ```

  ##### html

  ```html
  <s-box inlineSize="200px">
    <s-heading lineClamp="2">
      Premium organic cotton t-shirt with sustainable manufacturing practices
    </s-heading>
  </s-box>
  ```

* #### Heading with custom accessibility

  ##### Description

  Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.

  ##### jsx

  ```jsx
  <s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
    Sale badge
  </s-heading>
  ```

  ##### html

  ```html
  <s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
    Sale badge
  </s-heading>
  ```

* #### Heading within section hierarchy

  ##### Description

  Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.

  ##### jsx

  ```jsx
  <s-section>
    <s-heading>Order information</s-heading>
    {/* Renders as h2 */}
    <s-section>
      <s-heading>Shipping details</s-heading>
      {/* Renders as h3 */}
      <s-section>
        <s-heading>Tracking updates</s-heading>
        {/* Renders as h4 */}
      </s-section>
    </s-section>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-heading>Order information</s-heading>
    <!-- Renders as h2 -->
    <s-section>
      <s-heading>Shipping details</s-heading>
      <!-- Renders as h3 -->
      <s-section>
        <s-heading>Tracking updates</s-heading>
        <!-- Renders as h4 -->
      </s-section>
    </s-section>
  </s-section>
  ```

## Useful for

* Creating titles and subtitles for your content that are consistent across your app.
* Helping users with visual impairments navigate through content effectively using assistive technologies like screen readers.

## Considerations

* The level of the heading is automatically determined by how deeply it's nested inside other components, starting from h2.
* Default to using the `heading` property in `s-section`. The `s-heading` component should only be used if you need to implement a custom layout for your heading in the UI.

## Best practices

* Use short headings to make your content scannable.
* Use plain and clear terms.
* Don't use jargon or technical language.
* Don't use different terms to describe the same thing.
* Don't duplicate content.
