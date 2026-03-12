---
title: Page
description: ' Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.'
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/structure/page'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/structure/page.md
---

# Page

Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.

## Properties

Use as the outer wrapper of a page

* **heading**

  **string**

  The main page heading

* **inlineSize**

  **"small" | "base" | "large"**

  **Default: 'base'**

  The inline size of the page

  * `base` corresponds to a set default inline size
  * `large` full width with whitespace

## Slots

* **aside**

  **HTMLElement**

  The content to display in the aside section of the page.

  This slot is only rendered when `inlineSize` is "base".

* **breadcrumb-actions**

  **HTMLElement**

  Navigations back actions for the page.

  Only accepts `Link` components.

* **children**

  **HTMLElement**

  The content of the Page.

* **primary-action**

  **HTMLElement**

  The primary action for the page.

  Only accepts a single `Button` component with a `variant` of `primary`.

* **secondary-actions**

  **HTMLElement**

  Secondary actions for the page.

  Only accepts `ButtonGroup` and `Button` components with a `variant` of `secondary` or `auto`.

Examples

### Examples

* ####

  ##### jsx

  ```jsx
  <s-page heading="Products">
    <s-section>
      <s-text>Hello World</s-text>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Products">
    <s-section>
      <s-text>Hello World</s-text>
    </s-section>
  </s-page>
  ```

* #### Page with heading

  ##### Description

  Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.

  ##### jsx

  ```jsx
  <s-page heading="Product catalog" inlineSize="base">
    <s-section>
      <s-text>Manage your product catalog and inventory.</s-text>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Product catalog" inline-size="base">
    <s-section>
      <s-text>Manage your product catalog and inventory.</s-text>
    </s-section>
  </s-page>
  ```

* #### Small inline size for focused content

  ##### Description

  Illustrates a page with a small inline size, ideal for focused, compact content like settings or forms with minimal information.

  ##### jsx

  ```jsx
  <s-page heading="Store settings" inlineSize="small">
    <s-section>
      <s-stack gap="base">
        <s-text>Configure your basic store preferences.</s-text>
        <s-text-field label="Store name" />
        <s-button variant="primary">Save</s-button>
      </s-stack>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Store settings" inline-size="small">
    <s-section>
      <s-stack gap="base">
        <s-text>Configure your basic store preferences.</s-text>
        <s-text-field label="Store name"></s-text-field>
        <s-button variant="primary">Save</s-button>
      </s-stack>
    </s-section>
  </s-page>
  ```

* #### Large inline size for wide content

  ##### Description

  Demonstrates a page with a large inline size, perfect for displaying broader content like analytics or dashboards with multiple information sections.

  ##### jsx

  ```jsx
  <s-page heading="Store analytics" inlineSize="large">
    <s-section>
      <s-stack gap="base">
        <s-text>Monitor your store performance across all channels.</s-text>
        <s-grid>
          <s-grid-item>
            <s-box
              padding="base"
              background="base"
              borderWidth="base"
              borderColor="base"
              borderRadius="base"
            >
              <s-heading>Sales</s-heading>
              <s-text type="strong">$12,456</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box
              padding="base"
              background="base"
              borderWidth="base"
              borderColor="base"
              borderRadius="base"
            >
              <s-heading>Orders</s-heading>
              <s-text type="strong">145</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-stack>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Store analytics" inline-size="large">
    <s-section>
      <s-stack gap="base">
        <s-text>Monitor your store performance across all channels.</s-text>
        <s-grid>
          <s-grid-item>
            <s-box
              padding="base"
              background="base"
              borderWidth="base"
              borderColor="base"
              borderRadius="base"
            >
              <s-heading>Sales</s-heading>
              <s-text type="strong">$12,456</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box
              padding="base"
              background="base"
              borderWidth="base"
              borderColor="base"
              borderRadius="base"
            >
              <s-heading>Orders</s-heading>
              <s-text type="strong">145</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-stack>
    </s-section>
  </s-page>
  ```

* #### Page with breadcrumbs and title

  ##### Description

  Shows a page with breadcrumb navigation and a descriptive heading, helping users understand their location in the navigation hierarchy.

  ##### jsx

  ```jsx
  <s-page heading="Edit Product" inlineSize="base">
    <s-link slot="breadcrumb-actions" href="/products">Products</s-link>
    <s-link slot="breadcrumb-actions" href="/products/123">Acme Widget</s-link>
    <s-section>
      <s-text>Update your product information and settings.</s-text>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Edit Product" inline-size="base">
    <s-link slot="breadcrumb-actions" href="/products">Products</s-link>
    <s-link slot="breadcrumb-actions" href="/products/123">Acme Widget</s-link>
    <s-section>
      <s-text>Update your product information and settings.</s-text>
    </s-section>
  </s-page>
  ```

* #### Page with primary and secondary actions

  ##### Description

  Demonstrates a page with a primary action button and secondary action buttons, showing how to provide main and related actions alongside the page heading.

  ##### jsx

  ```jsx
  <s-page heading="Products" inlineSize="base">
    <s-button slot="secondary-actions">Preview</s-button>
    <s-button slot="secondary-actions">Duplicate</s-button>
    <s-button slot="primary-action" variant="primary">Save</s-button>
    <s-section>
      <s-text>Manage your products and organize your catalog.</s-text>
    </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <s-page heading="Products" inline-size="base">
    <s-button slot="secondary-actions">Preview</s-button>
    <s-button slot="secondary-actions">Duplicate</s-button>
    <s-button slot="primary-action" variant="primary">Save</s-button>
    <s-section>
      <s-text>Manage your products and organize your catalog.</s-text>
    </s-section>
  </s-page>
  ```

## Best practices

* Always provide a title that describes the current page
* Include breadcrumbs when the page is part of a flow
* Include page actions in the header only if they are relevant to the entire page
* Include no more than one primary action and 3 secondary actions per page
* Don't include any actions at the bottom of the page

## Content guidelines

* Use sentence case and avoid unnecessary words
* Don't include punctuation like periods or exclamation marks
* Page titles should clearly communicate the page purpose
* Page actions should use a verb or verb + noun phrase (e.g., "Create store", "Edit product")
