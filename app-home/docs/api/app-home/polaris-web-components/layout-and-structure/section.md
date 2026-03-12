---
title: Section
description: >-
  Groups related content into clearly-defined thematic areas. Sections have
  contextual styling that automatically adapts based on nesting depth. They also
  adjust heading levels to maintain a meaningful and accessible page structure.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/section
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/section.md
---

# Section

Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.

## Properties

* **accessibilityLabel**

  **string**

  A label used to describe the section that will be announced by assistive technologies.

  When no `heading` property is provided or included as a children of the Section, you **must** provide an `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide the right context to users.

* **heading**

  **string**

  A title that describes the content of the section.

* **padding**

  **"base" | "none"**

  **Default: 'base'**

  Adjust the padding of all edges.

  * `base`: applies padding that is appropriate for the element. Note that it may result in no padding if this is the right design decision in a particular context.
  * `none`: removes all padding from the element. This can be useful when elements inside the Section need to span to the edge of the Section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base' to bring back the desired padding for the rest of the content.

## Slots

* **children**

  **HTMLElement**

  The content of the Section.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-section heading="Online store dashboard">
    <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
  </s-section>
  ```

  ##### html

  ```html
  <s-section heading="Online store dashboard">
    <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
  </s-section>
  ```

* #### Top-Level Section with Form Elements

  ##### Description

  Demonstrates a level 1 section with a heading and multiple form fields. This example shows how sections provide visual hierarchy and structure for input elements.

  ##### jsx

  ```jsx
  <s-section heading="Customer information">
    <s-text-field label="First name" value="John" />
    <s-text-field label="Last name" value="Doe" />
    <s-email-field label="Email" value="john@example.com" />
  </s-section>
  ```

  ##### html

  ```html
  <!-- Level 1 section - elevated with shadow on desktop -->
  <s-section heading="Customer information">
    <s-text-field label="First name" value="John"></s-text-field>
    <s-text-field label="Last name" value="Doe"></s-text-field>
    <s-email-field label="Email" value="john@example.com"></s-email-field>
  </s-section>
  ```

* #### Nested Sections with Visual Level Differences

  ##### Description

  Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example demonstrates the automatic visual leveling of nested sections.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    {/* Level 1 section */}
    <s-section heading="Order details">
      <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

      {/* Level 2 section - nested with different visual treatment */}
      <s-section heading="Customer">
        <s-text-field label="Name" value="Jane Smith" />
        <s-text-field label="Email" value="jane@example.com" />

        {/* Level 3 section - further nested */}
        <s-section heading="Billing address">
          <s-text-field label="Street" value="123 Main St" />
          <s-text-field label="City" value="Toronto" />
        </s-section>
      </s-section>

      {/* Another Level 2 section */}
      <s-section heading="Items">
        <s-paragraph>2 items totaling $49.99</s-paragraph>
      </s-section>
    </s-section>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <!-- Level 1 section -->
    <s-section heading="Order details">
      <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

      <!-- Level 2 section - nested with different visual treatment -->
      <s-section heading="Customer">
        <s-text-field label="Name" value="Jane Smith"></s-text-field>
        <s-text-field label="Email" value="jane@example.com"></s-text-field>

        <!-- Level 3 section - further nested -->
        <s-section heading="Billing address">
          <s-text-field label="Street" value="123 Main St"></s-text-field>
          <s-text-field label="City" value="Toronto"></s-text-field>
        </s-section>
      </s-section>

      <!-- Another Level 2 section -->
      <s-section heading="Items">
        <s-paragraph>2 items totaling $49.99</s-paragraph>
      </s-section>
    </s-section>
  </s-stack>
  ```

* #### Section with Accessibility Label

  ##### Description

  Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading.

  ##### jsx

  ```jsx
  <s-section
    heading="Payment summary"
    accessibilityLabel="Order payment breakdown and totals"
  >
    <s-stack>
      <s-paragraph>Subtotal: $42.99</s-paragraph>
      <s-paragraph>Tax: $5.59</s-paragraph>
      <s-paragraph>Shipping: $1.41</s-paragraph>
      <s-paragraph>
        <s-text type="strong">Total: $49.99</s-text>  
      </s-paragraph>
    </s-stack>
  </s-section>
  ```

  ##### html

  ```html
  <s-section
    heading="Payment summary"
    accessibilityLabel="Order payment breakdown and totals"
  >
    <s-stack gap="base">
      <s-paragraph>Subtotal: $42.99</s-paragraph>
      <s-paragraph>Tax: $5.59</s-paragraph>
      <s-paragraph>Shipping: $1.41</s-paragraph>
      <s-paragraph>
        <s-text type="strong">Total: $49.99</s-text>
      </s-paragraph>
    </s-stack>
  </s-section>
  ```

* #### Full-width Content Layout

  ##### Description

  Demonstrates using a section with \`padding="none"\` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering.

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="labeled">Price</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>Cotton t-shirt</s-table-cell>
          <s-table-cell>$29.99</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="labeled">Price</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>Cotton t-shirt</s-table-cell>
          <s-table-cell>$29.99</s-table-cell>
          <s-table-cell><s-badge tone="success">Active</s-badge></s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

## Useful for

* Organizing your page in a logical structure based on nesting levels.
* Creating consistency across pages.

## Considerations

* When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.
* Built-in spacing is added between nested sections, as well as between heading and content.
* **Level 1:** Display as responsive cards with background color, rounded corners, and shadow effects. Includes outer padding that can be removed when content like `s-table` needs to expand to the full width of the section.
* **Nested sections:** Don't have any background color or effects by default.
