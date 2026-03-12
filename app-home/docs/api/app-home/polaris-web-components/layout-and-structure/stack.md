---
title: Stack
description: >-
  Organizes elements horizontally or vertically along the block or inline axis.
  Use to structure layouts, group related components, or control spacing between
  elements.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/stack
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/stack.md
---

# Stack

Organizes elements horizontally or vertically along the block or inline axis. Use to structure layouts, group related components, or control spacing between elements.

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

* **alignContent**

  **AlignContentKeyword**

  **Default: 'normal'**

  Aligns the Stack's children along the block axis.

  This overrides the block value of `alignContent`.

* **alignItems**

  **AlignItemsKeyword**

  **Default: 'normal'**

  Aligns the Stack's children along the block axis.

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

* **columnGap**

  **MaybeResponsive<"" | SpacingKeyword>**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the inline axis.

  This overrides the column value of `gap`. `columnGap` either accepts:

  * a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
  * OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

* **direction**

  **MaybeResponsive<"inline" | "block">**

  **Default: 'block'**

  Sets how the Stack's children are placed within the Stack.

  `direction` either accepts:

  * a single value either `inline` or `block`
  * OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

* **display**

  **MaybeResponsive<"auto" | "none">**

  **Default: 'auto'**

  Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).

  * `auto` the component's initial value. The actual value depends on the component and context.
  * `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.

* **gap**

  **MaybeResponsive\<MaybeTwoValuesShorthandProperty\<SpacingKeyword>>**

  **Default: 'none'**

  Adjust spacing between elements.

  `gap` can either accept:

  * a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value applied to both axes (e.g. `large-100`)
  * OR a pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively
  * OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

* **justifyContent**

  **JustifyContentKeyword**

  **Default: 'normal'**

  Aligns the Stack's children along the inline axis.

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

* **rowGap**

  **MaybeResponsive<"" | SpacingKeyword>**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the block axis.

  This overrides the row value of `gap`. `rowGap` either accepts:

  * a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
  * OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

### AccessibilityRole

```ts
'main' | 'header' | 'footer' | 'section' | 'region' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'presentation' | 'none'
```

### AlignContentKeyword

Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.

```ts
'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition
```

### BaselinePosition

```ts
'baseline' | 'first baseline' | 'last baseline'
```

### ContentDistribution

```ts
'space-between' | 'space-around' | 'space-evenly' | 'stretch'
```

### OverflowPosition

```ts
`unsafe ${ContentPosition}` | `safe ${ContentPosition}`
```

### ContentPosition

```ts
'center' | 'start' | 'end'
```

### AlignItemsKeyword

Align items sets the align-self value on all direct children as a group.

```ts
'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
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

### SpacingKeyword

```ts
SizeKeyword | 'none'
```

### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

### JustifyContentKeyword

Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

```ts
'normal' | ContentDistribution | OverflowPosition | ContentPosition
```

### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

### PaddingKeyword

```ts
SizeKeyword | 'none'
```

## Slots

* **children**

  **HTMLElement**

  The content of the Stack.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-badge>Paid</s-badge>
    <s-badge>Processing</s-badge>
    <s-badge>Filled</s-badge>
    <s-badge>Completed</s-badge>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-badge>Paid</s-badge>
    <s-badge>Processing</s-badge>
    <s-badge>Filled</s-badge>
    <s-badge>Completed</s-badge>
  </s-stack>
  ```

* #### Basic block stack (vertical)

  ##### Description

  Default vertical stacking layout with consistent spacing between text elements.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-text>First item</s-text>
    <s-text>Second item</s-text>
    <s-text>Third item</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-text>First item</s-text>
    <s-text>Second item</s-text>
    <s-text>Third item</s-text>
  </s-stack>
  ```

* #### Inline stack (horizontal)

  ##### Description

  Horizontal layout for arranging badges or similar elements side by side.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="large-100">
    <s-badge>Item 1</s-badge>
    <s-badge>Item 2</s-badge>
    <s-badge>Item 3</s-badge>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="large-100">
    <s-badge>Item 1</s-badge>
    <s-badge>Item 2</s-badge>
    <s-badge>Item 3</s-badge>
  </s-stack>
  ```

* #### Responsive stack with container queries

  ##### Description

  Advanced responsive layout that changes direction and spacing based on container size.

  ##### jsx

  ```jsx
  <s-query-container>
    <s-stack
      direction="@container (inline-size > 500px) inline, block"
      gap="@container (inline-size > 500px) base, small-300"
    >
      <s-box
        padding="large-100"
        borderColor="base"
        borderWidth="small"
        borderRadius="large-100"
      >
        Content 1
      </s-box>
      <s-box
        padding="large-100"
        borderColor="base"
        borderWidth="small"
        borderRadius="large-100"
      >
        Content 2
      </s-box>
    </s-stack>
  </s-query-container>
  ```

  ##### html

  ```html
  <s-query-container>
    <s-stack
      direction="@container (inline-size > 500px) inline, block"
      gap="@container (inline-size > 500px) base, small-300"
    >
      <s-box
        padding="large-100"
        borderColor="base"
        borderWidth="small"
        borderRadius="large-100"
      >
        Content 1
      </s-box>
      <s-box
        padding="large-100"
        borderColor="base"
        borderWidth="small"
        borderRadius="large-100"
      >
        Content 2
      </s-box>
    </s-stack>
  </s-query-container>
  ```

* #### Custom alignment

  ##### Description

  Horizontal stack with space-between justification and center alignment for balanced layouts.

  ##### jsx

  ```jsx
  <s-stack direction="inline" justifyContent="space-between" alignItems="center">
    <s-text>Left aligned</s-text>
    <s-text>Centered text</s-text>
    <s-text>Right aligned</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" justifyContent="space-between" alignItems="center">
    <s-text>Left aligned</s-text>
    <s-text>Centered text</s-text>
    <s-text>Right aligned</s-text>
  </s-stack>
  ```

* #### Custom spacing

  ##### Description

  Stack with custom gap values and separate row/column gap controls for precise spacing.

  ##### jsx

  ```jsx
  <s-stack gap="large-100 large-500" rowGap="large-300" columnGap="large-200">
    <s-box
      padding="large-100"
      borderColor="base"
      borderWidth="small"
      borderRadius="large-100"
    >
      Box with custom spacing
    </s-box>
    <s-box
      padding="large-100"
      borderColor="base"
      borderWidth="small"
      borderRadius="large-100"
    >
      Another box
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="large-100 large-500" rowGap="large-300" columnGap="large-200">
    <s-box
      padding="large-100"
      borderColor="base"
      borderWidth="small"
      borderRadius="large-100"
    >
      Box with custom spacing
    </s-box>
    <s-box
      padding="large-100"
      borderColor="base"
      borderWidth="small"
      borderRadius="large-100"
    >
      Another box
    </s-box>
  </s-stack>
  ```

## Useful for

* Placing non-form items in rows or columns when sections don't work for your layout.
* Controlling the spacing between elements.
* For form layouts where you need multiple input fields on the same row, use `s-grid` instead.

## Considerations

* Stack doesn't add any padding by default. If you want padding around your stacked elements, use `base` to apply the default padding.
* When spacing becomes limited, Stack will always wrap children to a new line.

## Best practices

* Use smaller gaps between small elements and larger gaps between big ones.
* Maintain consistent spacing in stacks across all pages of your app.
