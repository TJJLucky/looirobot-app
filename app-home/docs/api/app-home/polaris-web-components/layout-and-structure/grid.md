---
title: Grid
description: >-
  Use `s-grid` to organize your content in a matrix of rows and columns and make
  responsive layouts for pages. Grid follows the same pattern as the [CSS grid
  layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/grid
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/grid.md
---

# Grid

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).

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

  **"" | AlignContentKeyword**

  **Default: '' - meaning no override**

  Aligns the grid along the block axis.

  This overrides the block value of `placeContent`.

* **alignItems**

  **"" | AlignItemsKeyword**

  **Default: '' - meaning no override**

  Aligns the grid items along the block axis.

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

* **gridTemplateColumns**

  **string**

  **Default: 'none'**

  Define columns and specify their size. `gridTemplateColumns` either accepts:

  * [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
  * OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.

* **gridTemplateRows**

  **string**

  **Default: 'none'**

  Define rows and specify their size. `gridTemplateRows` either accepts:

  * [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
  * OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

* **justifyContent**

  **"" | JustifyContentKeyword**

  **Default: '' - meaning no override**

  Aligns the grid along the inline axis.

  This overrides the inline value of `placeContent`.

* **justifyItems**

  **"" | JustifyItemsKeyword**

  **Default: '' - meaning no override**

  Aligns the grid items along the inline axis.

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

* **placeContent**

  **"normal normal" | "normal stretch" | "normal start" | "normal end" | "normal center" | "normal unsafe start" | "normal unsafe end" | "normal unsafe center" | "normal safe start" | "normal safe end" | "normal safe center" | "stretch normal" | "stretch stretch" | "stretch start" | "stretch end" | "stretch center" | "stretch unsafe start" | "stretch unsafe end" | "stretch unsafe center" | "stretch safe start" | "stretch safe end" | "stretch safe center" | "baseline normal" | "baseline stretch" | "baseline start" | "baseline end" | "baseline center" | "baseline unsafe start" | "baseline unsafe end" | "baseline unsafe center" | "baseline safe start" | "baseline safe end" | "baseline safe center" | "first baseline normal" | "first baseline stretch" | "first baseline start" | "first baseline end" | "first baseline center" | "first baseline unsafe start" | "first baseline unsafe end" | "first baseline unsafe center" | "first baseline safe start" | "first baseline safe end" | "first baseline safe center" | "last baseline normal" | "last baseline stretch" | "last baseline start" | "last baseline end" | "last baseline center" | "last baseline unsafe start" | "last baseline unsafe end" | "last baseline unsafe center" | "last baseline safe start" | "last baseline safe end" | "last baseline safe center" | "start normal" | "start stretch" | "start start" | "start end" | "start center" | "start unsafe start" | "start unsafe end" | "start unsafe center" | "start safe start" | "start safe end" | "start safe center" | "end normal" | "end stretch" | "end start" | "end end" | "end center" | "end unsafe start" | "end unsafe end" | "end unsafe center" | "end safe start" | "end safe end" | "end safe center" | "center normal" | "center stretch" | "center start" | "center end" | "center center" | "center unsafe start" | "center unsafe end" | "center unsafe center" | "center safe start" | "center safe end" | "center safe center" | "unsafe start normal" | "unsafe start stretch" | "unsafe start start" | "unsafe start end" | "unsafe start center" | "unsafe start unsafe start" | "unsafe start unsafe end" | "unsafe start unsafe center" | "unsafe start safe start" | "unsafe start safe end" | "unsafe start safe center" | "unsafe end normal" | "unsafe end stretch" | "unsafe end start" | "unsafe end end" | "unsafe end center" | "unsafe end unsafe start" | "unsafe end unsafe end" | "unsafe end unsafe center" | "unsafe end safe start" | "unsafe end safe end" | "unsafe end safe center" | "unsafe center normal" | "unsafe center stretch" | "unsafe center start" | "unsafe center end" | "unsafe center center" | "unsafe center unsafe start" | "unsafe center unsafe end" | "unsafe center unsafe center" | "unsafe center safe start" | "unsafe center safe end" | "unsafe center safe center" | "safe start normal" | "safe start stretch" | "safe start start" | "safe start end" | "safe start center" | "safe start unsafe start" | "safe start unsafe end" | "safe start unsafe center" | "safe start safe start" | "safe start safe end" | "safe start safe center" | "safe end normal" | "safe end stretch" | "safe end start" | "safe end end" | "safe end center" | "safe end unsafe start" | "safe end unsafe end" | "safe end unsafe center" | "safe end safe start" | "safe end safe end" | "safe end safe center" | "safe center normal" | "safe center stretch" | "safe center start" | "safe center end" | "safe center center" | "safe center unsafe start" | "safe center unsafe end" | "safe center unsafe center" | "safe center safe start" | "safe center safe end" | "safe center safe center" | AlignContentKeyword | "normal space-between" | "normal space-around" | "normal space-evenly" | "baseline space-between" | "baseline space-around" | "baseline space-evenly" | "first baseline space-between" | "first baseline space-around" | "first baseline space-evenly" | "last baseline space-between" | "last baseline space-around" | "last baseline space-evenly" | "start space-between" | "start space-around" | "start space-evenly" | "end space-between" | "end space-around" | "end space-evenly" | "center space-between" | "center space-around" | "center space-evenly" | "unsafe start space-between" | "unsafe start space-around" | "unsafe start space-evenly" | "unsafe end space-between" | "unsafe end space-around" | "unsafe end space-evenly" | "unsafe center space-between" | "unsafe center space-around" | "unsafe center space-evenly" | "safe start space-between" | "safe start space-around" | "safe start space-evenly" | "safe end space-between" | "safe end space-around" | "safe end space-evenly" | "safe center space-between" | "safe center space-around" | "safe center space-evenly" | "stretch space-between" | "stretch space-around" | "stretch space-evenly" | "space-between normal" | "space-between start" | "space-between end" | "space-between center" | "space-between unsafe start" | "space-between unsafe end" | "space-between unsafe center" | "space-between safe start" | "space-between safe end" | "space-between safe center" | "space-between stretch" | "space-between space-between" | "space-between space-around" | "space-between space-evenly" | "space-around normal" | "space-around start" | "space-around end" | "space-around center" | "space-around unsafe start" | "space-around unsafe end" | "space-around unsafe center" | "space-around safe start" | "space-around safe end" | "space-around safe center" | "space-around stretch" | "space-around space-between" | "space-around space-around" | "space-around space-evenly" | "space-evenly normal" | "space-evenly start" | "space-evenly end" | "space-evenly center" | "space-evenly unsafe start" | "space-evenly unsafe end" | "space-evenly unsafe center" | "space-evenly safe start" | "space-evenly safe end" | "space-evenly safe center" | "space-evenly stretch" | "space-evenly space-between" | "space-evenly space-around" | "space-evenly space-evenly"**

  **Default: 'normal normal'**

  A shorthand property for `justify-content` and `align-content`.

* **placeItems**

  **AlignItemsKeyword | "normal normal" | "normal stretch" | "normal baseline" | "normal first baseline" | "normal last baseline" | "normal start" | "normal end" | "normal center" | "normal unsafe start" | "normal unsafe end" | "normal unsafe center" | "normal safe start" | "normal safe end" | "normal safe center" | "stretch normal" | "stretch stretch" | "stretch baseline" | "stretch first baseline" | "stretch last baseline" | "stretch start" | "stretch end" | "stretch center" | "stretch unsafe start" | "stretch unsafe end" | "stretch unsafe center" | "stretch safe start" | "stretch safe end" | "stretch safe center" | "baseline normal" | "baseline stretch" | "baseline baseline" | "baseline first baseline" | "baseline last baseline" | "baseline start" | "baseline end" | "baseline center" | "baseline unsafe start" | "baseline unsafe end" | "baseline unsafe center" | "baseline safe start" | "baseline safe end" | "baseline safe center" | "first baseline normal" | "first baseline stretch" | "first baseline baseline" | "first baseline first baseline" | "first baseline last baseline" | "first baseline start" | "first baseline end" | "first baseline center" | "first baseline unsafe start" | "first baseline unsafe end" | "first baseline unsafe center" | "first baseline safe start" | "first baseline safe end" | "first baseline safe center" | "last baseline normal" | "last baseline stretch" | "last baseline baseline" | "last baseline first baseline" | "last baseline last baseline" | "last baseline start" | "last baseline end" | "last baseline center" | "last baseline unsafe start" | "last baseline unsafe end" | "last baseline unsafe center" | "last baseline safe start" | "last baseline safe end" | "last baseline safe center" | "start normal" | "start stretch" | "start baseline" | "start first baseline" | "start last baseline" | "start start" | "start end" | "start center" | "start unsafe start" | "start unsafe end" | "start unsafe center" | "start safe start" | "start safe end" | "start safe center" | "end normal" | "end stretch" | "end baseline" | "end first baseline" | "end last baseline" | "end start" | "end end" | "end center" | "end unsafe start" | "end unsafe end" | "end unsafe center" | "end safe start" | "end safe end" | "end safe center" | "center normal" | "center stretch" | "center baseline" | "center first baseline" | "center last baseline" | "center start" | "center end" | "center center" | "center unsafe start" | "center unsafe end" | "center unsafe center" | "center safe start" | "center safe end" | "center safe center" | "unsafe start normal" | "unsafe start stretch" | "unsafe start baseline" | "unsafe start first baseline" | "unsafe start last baseline" | "unsafe start start" | "unsafe start end" | "unsafe start center" | "unsafe start unsafe start" | "unsafe start unsafe end" | "unsafe start unsafe center" | "unsafe start safe start" | "unsafe start safe end" | "unsafe start safe center" | "unsafe end normal" | "unsafe end stretch" | "unsafe end baseline" | "unsafe end first baseline" | "unsafe end last baseline" | "unsafe end start" | "unsafe end end" | "unsafe end center" | "unsafe end unsafe start" | "unsafe end unsafe end" | "unsafe end unsafe center" | "unsafe end safe start" | "unsafe end safe end" | "unsafe end safe center" | "unsafe center normal" | "unsafe center stretch" | "unsafe center baseline" | "unsafe center first baseline" | "unsafe center last baseline" | "unsafe center start" | "unsafe center end" | "unsafe center center" | "unsafe center unsafe start" | "unsafe center unsafe end" | "unsafe center unsafe center" | "unsafe center safe start" | "unsafe center safe end" | "unsafe center safe center" | "safe start normal" | "safe start stretch" | "safe start baseline" | "safe start first baseline" | "safe start last baseline" | "safe start start" | "safe start end" | "safe start center" | "safe start unsafe start" | "safe start unsafe end" | "safe start unsafe center" | "safe start safe start" | "safe start safe end" | "safe start safe center" | "safe end normal" | "safe end stretch" | "safe end baseline" | "safe end first baseline" | "safe end last baseline" | "safe end start" | "safe end end" | "safe end center" | "safe end unsafe start" | "safe end unsafe end" | "safe end unsafe center" | "safe end safe start" | "safe end safe end" | "safe end safe center" | "safe center normal" | "safe center stretch" | "safe center baseline" | "safe center first baseline" | "safe center last baseline" | "safe center start" | "safe center end" | "safe center center" | "safe center unsafe start" | "safe center unsafe end" | "safe center unsafe center" | "safe center safe start" | "safe center safe end" | "safe center safe center"**

  **Default: 'normal normal'**

  A shorthand property for `justify-items` and `align-items`.

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

### JustifyItemsKeyword

Justify items defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

```ts
'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
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

  The content of the Grid.

## GridItem

Display content within a single item of a grid layout.

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

* **gridColumn**

  **"auto" | \`span ${number}\`**

  **Default: 'auto'**

  Number of columns the item will span across

* **gridRow**

  **"auto" | \`span ${number}\`**

  **Default: 'auto'**

  Number of rows the item will span across

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

  The content of the GridItem.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-grid
    gridTemplateColumns="repeat(2, 1fr)"
    gap="small"
    justifyContent="center"
  >
    <s-grid-item gridColumn="span 2" border="base" borderStyle="dashed">
      Summary of sales
    </s-grid-item>
    <s-grid-item gridColumn="span 1" border="base" borderStyle="dashed">
      Orders
    </s-grid-item>
    <s-grid-item gridColumn="auto" border="base" borderStyle="dashed">
      Customers
    </s-grid-item>
  </s-grid>
  ```

  ##### html

  ```html
  <s-grid
    gridTemplateColumns="repeat(2, 1fr)"
    gap="small"
    justifyContent="center"
  >
    <s-grid-item gridColumn="span 2" border="base" borderStyle="dashed">
      Summary of sales
    </s-grid-item>
    <s-grid-item gridColumn="span 1" border="base" borderStyle="dashed">
      Orders
    </s-grid-item>
    <s-grid-item gridColumn="auto" border="base" borderStyle="dashed">
      Customers
    </s-grid-item>
  </s-grid>
  ```

* #### Basic two-column layout

  ##### Description

  Simple 12-column grid system with equal-width left and right columns.

  ##### jsx

  ```jsx
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 6" gridRow="span 1">
      <s-section>
        <s-text>Left column</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 1">
      <s-section>
        <s-text>Right column</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
  ```

  ##### html

  ```html
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 6" gridRow="span 1">
      <s-section>
        <s-text>Left column</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 1">
      <s-section>
        <s-text>Right column</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
  ```

* #### Layout with spans

  ##### Description

  Grid layout with full-width, half-width, and third-width column arrangements.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
      <s-grid-item gridColumn="span 12" gridRow="span 1">
        <s-section>
          <s-text>Full width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 6" gridRow="span 2">
        <s-section>
          <s-text>Half width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 6" gridRow="span 2">
        <s-section>
          <s-text>Half width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
    </s-grid>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
      <s-grid-item gridColumn="span 12" gridRow="span 1">
        <s-section>
          <s-text>Full width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 6" gridRow="span 2">
        <s-section>
          <s-text>Half width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 6" gridRow="span 2">
        <s-section>
          <s-text>Half width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
      <s-grid-item gridColumn="span 4" gridRow="span 3">
        <s-section>
          <s-text>Third width field</s-text>
        </s-section>
      </s-grid-item>
    </s-grid>
  </s-stack>
  ```

* #### Responsive grid

  ##### Description

  Adaptive grid that automatically adjusts column count based on screen size.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-text type="strong">Narrow container (375px)</s-text>
    <s-box inlineSize="375px">
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
          gap="base"
        >
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 1</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 2</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 3</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-box>

    <s-text type="strong">Wide container (450px)</s-text>
    <s-box inlineSize="450px">
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
          gap="base"
        >
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 1</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 2</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 3</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-box>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-text type="strong">Narrow container (375px)</s-text>
    <s-box inlineSize="375px">
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
          gap="base"
        >
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 1</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 2</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 3</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-box>

    <s-text type="strong">Wide container (450px)</s-text>
    <s-box inlineSize="450px">
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
          gap="base"
        >
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 1</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 2</s-text>
            </s-box>
          </s-grid-item>
          <s-grid-item>
            <s-box padding="small" background="subdued">
              <s-text>Item 3</s-text>
            </s-box>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-box>
  </s-stack>
  ```

## Best practices

* Always configure layout properties when using Grid. At minimum, set gridTemplateColumns to define your column structure (e.g., repeat(12, 1fr) for a 12-column grid)
* Use gap to add spacing between grid items rather than adding margins to individual items
* Combine gridTemplateColumns with gridColumn on GridItem components to control how items span across columns

## Useful for

* Building form layouts where you want more than one field on the same row.
* Organizing content into a grid-like layout with columns and rows with consistent alignment and spacing.
* Creating responsive layouts with consistent spacing.

## Considerations

* Grid doesn't include any padding by default. If you need padding around your grid, use `base` to apply the default padding.
* Grid will allow children to overflow unless template rows/columns are properly set.
* Grid will always wrap children to a new line. If you need to control the wrapping behavior, use `s-stack` or `s-box`.
