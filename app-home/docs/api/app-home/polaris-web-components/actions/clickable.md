---
title: Clickable
description: >-
  A generic interactive container component that provides a flexible alternative
  for custom interactive elements not achievable with existing components like
  Button or Link. Use it to apply specific styling such as backgrounds, padding,
  or borders.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickable
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickable.md
---

# Clickable

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.

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

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle'**

  **Default: '--auto'**

  Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.

* **commandFor**

  **string**

  Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.

* **disabled**

  **boolean**

  Disables the clickable, meaning it cannot be clicked or receive focus.

  In this state, onClick will not fire. If the click event originates from a child element, the event will immediately stop propagating from this element.

  However, items within the clickable can still receive focus and be interacted with.

  This has no impact on the visual state by default, but developers are encouraged to style the clickable accordingly.

* **display**

  **MaybeResponsive<"auto" | "none">**

  **Default: 'auto'**

  Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).

  * `auto` the component's initial value. The actual value depends on the component and context.
  * `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.

* **download**

  **string**

  Causes the browser to treat the linked URL as a download with the string being the file name. Download only works for same-origin URLs or the `blob:` and `data:` schemes.

* **href**

  **string**

  The URL to link to.

  * If set, it will navigate to the location specified by `href` after executing the `click` event.
  * If a `commandFor` is set, the `command` will be executed instead of the navigation.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

* **interestFor**

  **string**

  Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

* **loading**

  **boolean**

  Disables the clickable, and indicates to assistive technology that the loading is in progress.

  This also disables the clickable.

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

* **target**

  **"auto" | AnyString | "\_blank" | "\_self" | "\_parent" | "\_top"**

  **Default: 'auto'**

  Specifies where to display the linked URL.

* **type**

  **"button" | "reset" | "submit"**

  **Default: 'button'**

  The behavior of the Button.

  * `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
  * `button`: Used to indicate the component acts as a button, meaning it has no default action.
  * `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).

  This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.

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

### AnyString

Prevents widening string literal types in a union to \`string\`.

```ts
string & {}
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **blur**

  **CallbackEventListener\<typeof tagName> | null**

* **click**

  **CallbackEventListener\<typeof tagName> | null**

* **focus**

  **CallbackEventListener\<typeof tagName> | null**

### CallbackEventListener

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

## Slots

* **children**

  **HTMLElement**

  The content of the Clickable.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-clickable padding="base">Create Store</s-clickable>

    <s-clickable
      border="base"
      padding="base"
      background="subdued"
      borderRadius="base"
    >
      View Shipping Settings
    </s-clickable>
  </>
  ```

  ##### html

  ```html
  <s-clickable padding="base">Create Store</s-clickable>

  <s-clickable
    border="base"
    padding="base"
    background="subdued"
    borderRadius="base"
  >
    View Shipping Settings
  </s-clickable>
  ```

* #### Basic Button Usage

  ##### Description

  A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.

  ##### jsx

  ```jsx
  <s-clickable border="base" padding="base">
    Click me
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable border="base" padding="base">Click me</s-clickable>
  ```

* #### Link Mode

  ##### Description

  Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.

  ##### jsx

  ```jsx
  <s-clickable href="javascript:void(0)" target="_blank">
    Visit Shopify
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable href="javascript:void(0)" target="_blank">
    Visit Shopify
  </s-clickable>
  ```

* #### Form Submit Button

  ##### Description

  A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.

  ##### jsx

  ```jsx
  <s-clickable type="submit" disabled border="base" padding="base">
    Save changes
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable type="submit" disabled border="base" padding="base">
    Save changes
  </s-clickable>
  ```

* #### Section with Clickable Action

  ##### Description

  Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.

  ##### jsx

  ```jsx
  <s-box padding="large-400" background="base" borderRadius="small-200">
    <s-stack gap="large-300">
      <s-heading>Product settings</s-heading>
      <s-text>Configure your product inventory and pricing settings.</s-text>
      <s-clickable background="base" padding="base" borderRadius="small">
        <s-text type="strong">Configure settings</s-text>
      </s-clickable>
    </s-stack>
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="large-400" background="base" borderRadius="small-200">
    <s-stack gap="large-300">
      <s-heading>Product settings</s-heading>
      <s-text>Configure your product inventory and pricing settings.</s-text>
      <s-clickable background="base" padding="base" borderRadius="small">
        <s-text type="strong">Configure settings</s-text>
      </s-clickable>
    </s-stack>
  </s-box>
  ```

* #### Accessibility with ARIA Attributes

  ##### Description

  Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.

  ##### jsx

  ```jsx
  <s-clickable
    accessibilityLabel="Delete product winter collection jacket"
    background="base"
    padding="base"
    borderRadius="small"
  >
    <s-text>Delete</s-text>
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable
    accessibilityLabel="Delete product winter collection jacket"
    background="base"
    padding="base"
    borderRadius="small"
  >
    <s-text>Delete</s-text>
  </s-clickable>
  ```

* #### Disabled Link with ARIA

  ##### Description

  Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.

  ##### jsx

  ```jsx
  <s-clickable
    href="javascript:void(0)"
    disabled
    accessibilityLabel="This link is currently unavailable"
  >
    <s-text>Unavailable feature</s-text>
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable
    href="javascript:void(0)"
    disabled
    accessibilityLabel="This link is currently unavailable"
  >
    <s-text>Unavailable feature</s-text>
  </s-clickable>
  ```
