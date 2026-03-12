---
title: Chip
description: >-
  Represents a set of user-supplied keywords that help label, organize, and
  categorize objects. Used to categorize or highlight content attributes. They
  are often displayed near the content they classify, enhancing discoverability
  by allowing users to identify items with similar properties.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/chip
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/typography-and-content/chip.md
---

# Chip

Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

## Slots

* **children**

  **HTMLElement**

  The content of the Chip.

* **graphic**

  **HTMLElement**

  The graphic to display in the chip.

  Only accepts `Icon` components.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-chip>Chip</s-chip>
  ```

  ##### html

  ```html
  <s-chip>Chip</s-chip>
  ```

* #### Basic usage

  ##### Description

  Simple chip displaying product status without an icon.

  ##### jsx

  ```jsx
  <s-chip color="base" accessibilityLabel="Product status indicator">
    Active
  </s-chip>
  ```

  ##### html

  ```html
  <s-chip color="base" accessibilityLabel="Product status indicator">
    Active
  </s-chip>
  ```

* #### With icon graphic

  ##### Description

  Chip enhanced with an icon to provide visual context for the category.

  ##### jsx

  ```jsx
  <s-chip color="strong" accessibilityLabel="Product category">
    <s-icon slot="graphic" type="catalog-product" size="small" />
    Electronics
  </s-chip>
  ```

  ##### html

  ```html
  <s-chip color="strong" accessibilityLabel="Product category">
    <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
    Electronics
  </s-chip>
  ```

* #### Color variants

  ##### Description

  Demonstrates all three color variants for different levels of visual emphasis.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-chip color="subdued" accessibilityLabel="Secondary information">
      Draft
    </s-chip>
    <s-chip color="base" accessibilityLabel="Standard information">
      Published
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Important status">
      <s-icon slot="graphic" type="check" size="small" />
      Verified
    </s-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-chip color="subdued" accessibilityLabel="Secondary information">
      Draft
    </s-chip>
    <s-chip color="base" accessibilityLabel="Standard information">
      Published
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Important status">
      <s-icon slot="graphic" type="check" size="small"></s-icon>
      Verified
    </s-chip>
  </s-stack>
  ```

* #### Product status

  ##### Description

  Common status indicators demonstrating chips in real-world product management scenarios.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-chip color="base" accessibilityLabel="Product status">
      Active
    </s-chip>
    <s-chip color="subdued" accessibilityLabel="Product status">
      Draft
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Product status">
      <s-icon slot="graphic" type="check" size="small" />
      Published
    </s-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
    <s-chip color="subdued" accessibilityLabel="Product status">Draft</s-chip>
    <s-chip color="strong" accessibilityLabel="Product status">
      <s-icon slot="graphic" type="check" size="small"></s-icon>
      Published
    </s-chip>
  </s-stack>
  ```

* #### Text truncation

  ##### Description

  Demonstrates automatic text truncation for long content within a constrained width.

  ##### jsx

  ```jsx
  <s-box maxInlineSize="200px">
    <s-stack gap="base">
      <s-chip color="base" accessibilityLabel="Long product name">
        This is a very long product name that will be truncated with ellipsis when
        it exceeds the container width
      </s-chip>
      <s-chip color="strong" accessibilityLabel="Long category name">
        <s-icon slot="graphic" type="catalog-product" size="small" />
        Electronics and computer accessories category with extended description
      </s-chip>
    </s-stack>
  </s-box>
  ```

  ##### html

  ```html
  <s-box maxInlineSize="200px">
    <s-stack gap="base">
      <s-chip color="base" accessibilityLabel="Long product name">
        This is a very long product name that will be truncated with ellipsis when
        it exceeds the container width
      </s-chip>
      <s-chip color="strong" accessibilityLabel="Long category name">
        <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
        Electronics and computer accessories category with extended description
      </s-chip>
    </s-stack>
  </s-box>
  ```

## Useful for

* Labeling, organizing, and categorizing objects
* Highlighting content attributes
* Enhancing discoverability by identifying items with similar properties

## Best practices

* `subdued`: use for secondary or less important information
* `base`: use as default color
* `strong`: use for important or verified status
* Text truncates automatically, keep labels short to avoid truncation
* Chips are static indicators, not interactive or dismissible. For interactive chips, use ClickableChip
* Add icons to `graphic` slot to provide visual context
* Display chips near the content they classify

## Content guidelines

Chip labels should:

* Be short and concise to avoid truncation
* Use `accessibilityLabel` to describe purpose for screen readers
* Common status labels: `Active`, `Draft`, `Published`, `Verified`
* Common category labels: `Product type`, `Collection`, `Tag name`
