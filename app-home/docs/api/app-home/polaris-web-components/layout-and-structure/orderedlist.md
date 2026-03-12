---
title: OrderedList
description: >-
  Displays a numbered list of related items in a specific sequence. Use to
  present step-by-step instructions, ranked items, or procedures where order
  matters.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/orderedlist
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/orderedlist.md
---

# Ordered​List

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.

## Slots

* **children**

  **HTMLElement**

  The items of the OrderedList.

  Only ListItems are accepted.

## ListItem

Represents a single item within an unordered or ordered list. Use only as a child of `s-unordered-list` or `s-ordered-list` components.

## Slots

* **children**

  **HTMLElement**

  The content of the ListItem.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-ordered-list>
    <s-list-item>Red shirt</s-list-item>
    <s-list-item>Green shirt</s-list-item>
    <s-list-item>Blue shirt</s-list-item>
  </s-ordered-list>
  ```

  ##### html

  ```html
  <s-ordered-list>
    <s-list-item>Red shirt</s-list-item>
    <s-list-item>Green shirt</s-list-item>
    <s-list-item>Blue shirt</s-list-item>
  </s-ordered-list>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a simple ordered list with three sequential steps.

  ##### jsx

  ```jsx
  <s-ordered-list>
    <s-list-item>Add products to your catalog</s-list-item>
    <s-list-item>Set up payment methods</s-list-item>
    <s-list-item>Configure shipping zones</s-list-item>
  </s-ordered-list>
  ```

  ##### html

  ```html
  <s-ordered-list>
    <s-list-item>Add products to your catalog</s-list-item>
    <s-list-item>Set up payment methods</s-list-item>
    <s-list-item>Configure shipping zones</s-list-item>
  </s-ordered-list>
  ```

* #### Order processing steps

  ##### Description

  Shows an ordered list with multiple steps in a workflow process.

  ##### jsx

  ```jsx
  <s-ordered-list>
    <s-list-item>Review order details and customer information</s-list-item>
    <s-list-item>Verify payment and billing address</s-list-item>
    <s-list-item>Check inventory availability for all items</s-list-item>
    <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
    <s-list-item>Package items and update tracking information</s-list-item>
    <s-list-item>Send shipment confirmation to customer</s-list-item>
  </s-ordered-list>
  ```

  ##### html

  ```html
  <s-ordered-list>
    <s-list-item>Review order details and customer information</s-list-item>
    <s-list-item>Verify payment and billing address</s-list-item>
    <s-list-item>Check inventory availability for all items</s-list-item>
    <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
    <s-list-item>Package items and update tracking information</s-list-item>
    <s-list-item>Send shipment confirmation to customer</s-list-item>
  </s-ordered-list>
  ```

* #### Product setup instructions

  ##### Description

  Illustrates a nested ordered list with sub-steps within main steps.

  ##### jsx

  ```jsx
  <s-ordered-list>
    <s-list-item>
      Create product listing with title and description
      <s-ordered-list>
        <s-list-item>Add high-quality product images</s-list-item>
        <s-list-item>Set SEO title and meta description</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>Configure pricing and inventory tracking</s-list-item>
    <s-list-item>Set up product variants (size, color, material)</s-list-item>
    <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
    <s-list-item>Review and publish product to storefront</s-list-item>
  </s-ordered-list>
  ```

  ##### html

  ```html
  <s-ordered-list>
    <s-list-item>
      Create product listing with title and description
      <s-ordered-list>
        <s-list-item>Add high-quality product images</s-list-item>
        <s-list-item>Set SEO title and meta description</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>Configure pricing and inventory tracking</s-list-item>
    <s-list-item>Set up product variants (size, color, material)</s-list-item>
    <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
    <s-list-item>Review and publish product to storefront</s-list-item>
  </s-ordered-list>
  ```

* #### Fulfillment process

  ##### Description

  Displays a complex nested list with multiple levels of sub-steps.

  ##### jsx

  ```jsx
  <s-ordered-list>
    <s-list-item>
      Process payment
      <s-ordered-list>
        <s-list-item>Verify card details</s-list-item>
        <s-list-item>Apply discount codes</s-list-item>
        <s-list-item>Calculate taxes</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>
      Prepare shipment
      <s-ordered-list>
        <s-list-item>Print shipping label</s-list-item>
        <s-list-item>Pack items securely</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>Update customer with tracking info</s-list-item>
  </s-ordered-list>
  ```

  ##### html

  ```html
  <s-ordered-list>
    <s-list-item>
      Process payment
      <s-ordered-list>
        <s-list-item>Verify card details</s-list-item>
        <s-list-item>Apply discount codes</s-list-item>
        <s-list-item>Calculate taxes</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>
      Prepare shipment
      <s-ordered-list>
        <s-list-item>Print shipping label</s-list-item>
        <s-list-item>Pack items securely</s-list-item>
      </s-ordered-list>
    </s-list-item>
    <s-list-item>Update customer with tracking info</s-list-item>
  </s-ordered-list>
  ```

## Best practices

* Use to break up related content and improve scannability
* Phrase items consistently (start each with a noun or verb)
* Start each item with a capital letter
* Don't use commas or semicolons at the end of lines
