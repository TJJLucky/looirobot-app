---
title: Box
description: >-
  A generic container that provides a flexible alternative for custom designs
  not achievable with existing components. Use it to apply styling such as
  backgrounds, padding, or borders, or to nest and group other components. The
  contents of Box always maintain their natural size, making it especially
  useful within layout components that would otherwise stretch their children.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/box
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/box.md
---

# Box

A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the element. When set, it will be announced to users using assistive technologies and will provide them with more context.

  Only use this when the element's content is not enough context for users using assistive technologies.

* **accessibilityRole**

  **AccessibilityRole**

  **Default: 'generic'**

  Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

* **accessibilityVisibility**

  **"visible" | "hidden" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the element.

  * `visible`: the element is visible to all users.
  * `hidden`: the element is removed from the accessibility tree but remains visible.
  * `exclusive`: the element is visually hidden but remains in the accessibility tree.

* **background**

  **BackgroundColorKeyword**

  **Default: 'transparent'**

  Adjust the background of the component.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the [block size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).

* **border**

  **BorderShorthand**

  **Default: 'none' - equivalent to \`none base auto\`.**

  Set the border via the shorthand property.

  This can be a size, optionally followed by a color, optionally followed by a style.

  If the color is not specified, it will be `base`.

  If the style is not specified, it will be `auto`.

  Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.

* **borderColor**

  **"" | ColorKeyword**

  **Default: '' - meaning no override**

  Adjust the color of the border.

* **borderRadius**

  **MaybeAllValuesShorthandProperty\<BoxBorderRadii>**

  **Default: 'none'**

  Adjust the radius of the border.

* **borderStyle**

  **"" | MaybeAllValuesShorthandProperty\<BoxBorderStyles>**

  **Default: '' - meaning no override**

  Adjust the style of the border.

* **borderWidth**

  **"" | MaybeAllValuesShorthandProperty<"small" | "small-100" | "base" | "large" | "large-100" | "none">**

  **Default: '' - meaning no override**

  Adjust the width of the border.

* **display**

  **MaybeResponsive<"auto" | "none">**

  **Default: 'auto'**

  Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).

  * `auto` the component's initial value. The actual value depends on the component and context.
  * `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the [maximum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the [maximum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the [minimum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the [minimum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).

* **overflow**

  **"visible" | "hidden"**

  **Default: 'visible'**

  Sets the overflow behavior of the element.

  * `hidden`: clips the content when it is larger than the element’s container. The element will not be scrollable and the users will not be able to access the clipped content by dragging or using a scroll wheel on a mouse.
  * `visible`: the content that extends beyond the element’s container is visible.

* **padding**

  **MaybeResponsive\<MaybeAllValuesShorthandProperty\<PaddingKeyword>>**

  **Default: 'none'**

  Adjust the padding of all edges.

  [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

  * 4 values: `block-start inline-end block-end inline-start`
  * 3 values: `block-start inline block-end`
  * 2 values: `block inline`

  For example:

  * `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
  * `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
  * `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
  * `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

  A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

  `padding` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingBlock**

  **MaybeResponsive<"" | MaybeTwoValuesShorthandProperty\<PaddingKeyword>>**

  **Default: '' - meaning no override**

  Adjust the block-padding.

  * `large none` means block-start padding is `large`, block-end padding is `none`.

  This overrides the block value of `padding`.

  `paddingBlock` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingBlockEnd**

  **MaybeResponsive<"" | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-end padding.

  This overrides the block-end value of `paddingBlock`.

  `paddingBlockEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingBlockStart**

  **MaybeResponsive<"" | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-start padding.

  This overrides the block-start value of `paddingBlock`.

  `paddingBlockStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingInline**

  **MaybeResponsive<"" | MaybeTwoValuesShorthandProperty\<PaddingKeyword>>**

  **Default: '' - meaning no override**

  Adjust the inline padding.

  * `large none` means inline-start padding is `large`, inline-end padding is `none`.

  This overrides the inline value of `padding`.

  `paddingInline` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingInlineEnd**

  **MaybeResponsive<"" | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline-end padding.

  This overrides the inline-end value of `paddingInline`.

  `paddingInlineEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

* **paddingInlineStart**

  **MaybeResponsive<"" | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline-start padding.

  This overrides the inline-start value of `paddingInline`.

  `paddingInlineStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### AccessibilityRole

```ts
'main' | 'header' | 'footer' | 'section' | 'region' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'presentation' | 'none'
```

### BackgroundColorKeyword

```ts
'transparent' | ColorKeyword
```

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

### BorderShorthand

Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.

```ts
BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`
```

### BorderSizeKeyword

```ts
SizeKeyword | 'none'
```

### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

### BorderStyleKeyword

```ts
'none' | 'solid' | 'dashed' | 'dotted' | 'auto'
```

### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

### BoxBorderRadii

```ts
'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none'
```

### BoxBorderStyles

```ts
'auto' | 'none' | 'solid' | 'dashed'
```

### MaybeResponsive

```ts
T | `@container${string}`
```

### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

### PaddingKeyword

```ts
SizeKeyword | 'none'
```

### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

## Slots

* **children**

  **HTMLElement**

  The content of the Box.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-box padding="base">Available for iPad, iPhone, and Android.</s-box>

    <s-box padding="base" background="subdued" border="base" borderRadius="base">
      Available for iPad, iPhone, and Android.
    </s-box>
  </>
  ```

  ##### html

  ```html
  <s-box padding="base">Available for iPad, iPhone, and Android.</s-box>

  <s-box padding="base" background="subdued" border="base" borderRadius="base">
    Available for iPad, iPhone, and Android.
  </s-box>
  ```

* #### Basic container

  ##### Description

  Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.

  ##### jsx

  ```jsx
  <s-box
    padding="base"
    background="base"
    borderWidth="base"
    borderColor="base"
    borderRadius="base"
  >
    <s-paragraph>Product information</s-paragraph>
  </s-box>
  ```

  ##### html

  ```html
  <s-box
    padding="base"
    background="base"
    borderWidth="base"
    borderColor="base"
    borderRadius="base"
  >
    <s-paragraph>Product information</s-paragraph>
  </s-box>
  ```

* #### Responsive shipping notice

  ##### Description

  Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.

  ##### jsx

  ```jsx
  <s-query-container>
    <s-box
      padding="@container (inline-size > 400px) base, large-200"
      background="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-text>Your order will be processed within 2-3 business days</s-text>
    </s-box>
  </s-query-container>
  ```

  ##### html

  ```html
  <s-query-container>
    <s-box
      padding="@container (inline-size > 400px) base, large-200"
      background="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-paragraph>Your order will be processed within 2-3 business days</s-paragraph>
    </s-box>
  </s-query-container>
  ```

* #### Accessible status messages

  ##### Description

  Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-box
      accessibilityRole="status"
      padding="base"
      background="strong"
      borderRadius="base"
    >
      <s-paragraph>Payment failed</s-paragraph>
    </s-box>

    <s-box accessibilityVisibility="exclusive">
      <s-paragraph>Price includes tax and shipping</s-paragraph>
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-box
      accessibilityRole="status"
      padding="base"
      background="strong"
      borderRadius="base"
    >
      <s-paragraph>Payment failed</s-paragraph>
    </s-box>

    <s-box accessibilityVisibility="exclusive">
      <s-paragraph>Price includes tax and shipping</s-paragraph>
    </s-box>
  </s-stack>
  ```

* #### Nested hierarchical containers

  ##### Description

  Demonstrates creating nested, hierarchical layouts using multiple boxes, showing how boxes can be combined to organize related content sections with different styling.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    {/* Inventory status section */}
    <s-box
      padding="base"
      background="base"
      borderRadius="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-stack gap="base">
        <s-box padding="small-100" background="subdued" borderRadius="small">
          <s-paragraph>In stock: 45 units</s-paragraph>
        </s-box>
        <s-box padding="small-100" background="subdued" borderRadius="small">
          <s-paragraph>Low stock alert: 5 units</s-paragraph>
        </s-box>
      </s-stack>
    </s-box>

    {/* Product information section */}
    <s-box
      padding="base"
      background="base"
      borderRadius="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-stack gap="base">
        <s-heading>Product sales</s-heading>
        <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
        <s-link>View details</s-link>
      </s-stack>
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <!-- Inventory status section -->
    <s-box
      padding="base"
      background="base"
      borderRadius="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-stack gap="base">
        <s-box padding="small-100" background="subdued" borderRadius="small">
          <s-paragraph>In stock: 45 units</s-paragraph>
        </s-box>
        <s-box padding="small-100" background="subdued" borderRadius="small">
          <s-paragraph>Low stock alert: 5 units</s-paragraph>
        </s-box>
      </s-stack>
    </s-box>

    <!-- Product information section -->
    <s-box
      padding="base"
      background="base"
      borderRadius="base"
      borderWidth="base"
      borderColor="base"
    >
      <s-stack gap="base">
        <s-heading>Product sales</s-heading>
        <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
        <s-link>View details</s-link>
      </s-stack>
    </s-box>
  </s-stack>
  ```

## Useful for

* Creating custom designs when you can't build what you need with the existing components.
* Setting up specific stylings such as background colors, paddings, and borders.
* Nesting with other components.

## Best practices

* Use for structural layouts with consistent spacing patterns
* Avoid adding too many borders that may visually fragment the interface
