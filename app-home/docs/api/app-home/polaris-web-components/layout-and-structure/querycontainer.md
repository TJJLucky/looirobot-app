---
title: QueryContainer
description: >-
  Establishes a query container for responsive design. Use `s-query-container`
  to define an element as a containment context, enabling child components or
  styles to adapt based on the container’s size.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/querycontainer
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/querycontainer.md
---

# Query​Container

Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.

## Properties

Use to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.

* **containerName**

  **string**

  **Default: ''**

  The name of the container, which can be used in your container queries to target this container specifically.

  We place the container name of `s-default` on every container. Because of this, it is not required to add a `containerName` identifier in your queries. For example, a `@container (inline-size <= 300px) none, auto` query is equivalent to `@container s-default (inline-size <= 300px) none, auto`.

  Any value set in `containerName` will be set alongside alongside `s-default`. For example, `containerName="my-container-name"` will result in a value of `s-default my-container-name` set on the `container-name` CSS property of the rendered HTML.

## Slots

* **children**

  **HTMLElement**

  The content of the container.

Examples

### Examples

* ####

  ##### jsx

  ```jsx
  <s-query-container>
    <s-box
      padding="@container (inline-size > 500px) large-500, none"
      background="strong"
    >
      Padding is applied when the inline-size > 500px
    </s-box>
  </s-query-container>
  ```

  ##### html

  ```html
  <s-query-container>
    <s-box
      padding="@container (inline-size > 500px) large-500, none"
      background="strong"
    >
      Padding is applied when the inline-size '>' 500px
    </s-box>
  </s-query-container>
  ```

* #### Basic Usage

  ##### Description

  Demonstrates the simplest way to use QueryContainer, wrapping content with a named container context.

  ##### jsx

  ```jsx
  <>
  <s-box inlineSize="375px">
    <s-query-container id="product-section" containerName="product">
      <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
        <s-text>Padding is different depending on the container size</s-text>
      </s-box>
    </s-query-container>
  </s-box>

  <s-box inlineSize="450px">
    <s-query-container id="product-section" containerName="product">
      <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
        <s-text>Padding is different depending on the container size</s-text>
      </s-box>
    </s-query-container>
  </s-box>
  </>
  ```

  ##### html

  ```html
  <s-box inlineSize="375px">
    <s-query-container id="product-section" containerName="product">
      <s-box padding="@container product (inline-size > 400px) large-500, none">
        <s-text>Padding is different depending on the container size</s-text>
      </s-box>
    </s-query-container>
  </s-box>

  <s-box inlineSize="450px">
    <s-query-container id="product-section" containerName="product">
      <s-box padding="@container product (inline-size > 400px) large-500, none">
        <s-text>Padding is different depending on the container size</s-text>
      </s-box>
    </s-query-container>
  </s-box>
  ```
