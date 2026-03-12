---
title: UnorderedList
description: >-
  Displays a bulleted list of related items. Use to present collections of items
  or options where the sequence isn’t critical.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/unorderedlist
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/unorderedlist.md
---

# Unordered​List

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.

## Slots

* **children**

  **HTMLElement**

  The items of the UnorderedList.

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
  <s-unordered-list>
    <s-list-item>Red shirt</s-list-item>
    <s-list-item>Green shirt</s-list-item>
    <s-list-item>Blue shirt</s-list-item>
  </s-unordered-list>
  ```

  ##### html

  ```html
  <s-unordered-list>
    <s-list-item>Red shirt</s-list-item>
    <s-list-item>Green shirt</s-list-item>
    <s-list-item>Blue shirt</s-list-item>
  </s-unordered-list>
  ```

* #### Unordered list with nested items

  ##### Description

  A standard unordered list with nested items demonstrating hierarchical content structure.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-box borderWidth="small-100" borderRadius="base" padding="base">
      <s-unordered-list>
        <s-list-item>Configure payment settings</s-list-item>
        <s-list-item>
          Set up shipping options
          <s-unordered-list>
            <s-list-item>Domestic shipping rates</s-list-item>
            <s-list-item>International shipping zones</s-list-item>
          </s-unordered-list>
        </s-list-item>
        <s-list-item>Add product descriptions</s-list-item>
      </s-unordered-list>
    </s-box>

    <s-box borderWidth="small-100" borderRadius="base" padding="base">
      <s-unordered-list>
        <s-list-item>Enable online payments</s-list-item>
        <s-list-item>Set up shipping rates</s-list-item>
        <s-list-item>Configure tax settings</s-list-item>
        <s-list-item>Add product descriptions</s-list-item>
      </s-unordered-list>
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-box borderWidth="small-100" borderRadius="base" padding="base">
      <s-unordered-list>
        <s-list-item>Configure payment settings</s-list-item>
        <s-list-item>
          Set up shipping options
          <s-unordered-list>
            <s-list-item>Domestic shipping rates</s-list-item>
            <s-list-item>International shipping zones</s-list-item>
          </s-unordered-list>
        </s-list-item>
        <s-list-item>Add product descriptions</s-list-item>
      </s-unordered-list>
    </s-box>

    <s-box borderWidth="small-100" borderRadius="base" padding="base">
      <s-unordered-list>
        <s-list-item>Enable online payments</s-list-item>
        <s-list-item>Set up shipping rates</s-list-item>
        <s-list-item>Configure tax settings</s-list-item>
        <s-list-item>Add product descriptions</s-list-item>
      </s-unordered-list>
    </s-box>
  </s-stack>
  ```

## Best practices

* Use to break up related content and improve scannability
* Phrase items consistently (start each with a noun or verb)
* Start each item with a capital letter
* Don't use commas or semicolons at the end of lines
