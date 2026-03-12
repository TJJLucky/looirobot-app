---
title: ClickableChip
description: >-
  Interactive button used to categorize or highlight content attributes. They
  are often displayed near the content they classify, enhancing discoverability
  by allowing users to identify items with similar properties.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickablechip
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickablechip.md
---

# Clickable​Chip

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

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

  **Default: false**

  Disables the chip, disallowing any interaction.

* **hidden**

  **boolean**

  **Default: false**

  Determines whether the chip is hidden.

  If this property is being set on each framework render (as in 'controlled' usage), and the chip is `removable`, ensure you update app state for this property when the `remove` event fires.

  If the chip is not `removable`, it can still be hidden by setting this property.

* **href**

  **string**

  The URL to link to.

  * If set, it will navigate to the location specified by `href` after executing the `click` event.
  * If a `commandFor` is set, the `command` will be executed instead of the navigation.

* **interestFor**

  **string**

  Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

* **removable**

  **boolean**

  **Default: false**

  Whether the chip is removable.

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **afterhide**

  **CallbackEventListener\<typeof tagName> | null**

* **click**

  **CallbackEventListener\<typeof tagName> | null**

* **remove**

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

  The content of the clickable chip.

* **graphic**

  **HTMLElement**

  The graphic to display in the clickable chip.

  Only accepts `Icon` components.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-clickable-chip>Clickable chip</s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip>Clickable chip</s-clickable-chip>
  ```

* #### Basic Usage

  ##### Description

  Demonstrates a simple clickable chip with a base color and interactive functionality.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="subdued"
      accessibilityLabel="Filter by draft products"
    >
      Draft
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Filter by archived products"
    >
      Archived
    </s-clickable-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="subdued"
      accessibilityLabel="Filter by draft products"
    >
      Draft
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Filter by archived products"
    >
      Archived
    </s-clickable-chip>
  </s-stack>
  ```

* #### With Icon and Remove Button

  ##### Description

  Showcases a strong-colored clickable chip with a check circle icon and a removable state.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  ```

* #### As a Link

  ##### Description

  Demonstrates a subdued clickable chip configured as a link with a product icon.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="subdued"
    href="javascript:void(0)"
    accessibilityLabel="View T-shirt product"
  >
    <s-icon slot="graphic" type="product" />
    T-shirt
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="subdued"
    href="javascript:void(0)"
    accessibilityLabel="View T-shirt product"
  >
    <s-icon slot="graphic" type="product"></s-icon>
    T-shirt
  </s-clickable-chip>
  ```

* #### Disabled State

  ##### Description

  Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="base"
    disabled
    accessibilityLabel="Status filter (disabled)"
  >
    Inactive
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="base"
    disabled
    accessibilityLabel="Status filter (disabled)"
  >
    Inactive
  </s-clickable-chip>
  ```

* #### Multiple Chips with Proper Spacing

  ##### Description

  Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-clickable-chip accessibilityLabel="Filter by status">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Remove status filter"
      removable
    >
      <s-icon slot="graphic" type="check-circle" />
      In progress
    </s-clickable-chip>
    <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
      <s-icon slot="graphic" type="filter" />
      Category
    </s-clickable-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-clickable-chip accessibilityLabel="Filter by status">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Remove status filter"
      removable
    >
      <s-icon slot="graphic" type="check-circle"></s-icon>
      In progress
    </s-clickable-chip>
    <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
      <s-icon slot="graphic" type="filter"></s-icon>
      Category
    </s-clickable-chip>
  </s-stack>
  ```

## Useful for

* Creating interactive filters or tags that can be clicked or removed
* Navigating to related content when configured as a link
* Allowing merchants to dismiss or remove applied filters or selections

## Best practices

* Use for interactive chips that merchants can click or dismiss
* Use Chip component instead for static, non-interactive indicators
* Keep labels short to avoid truncation
* Use color variants to indicate importance (subdued, base, strong)
* Add icons to provide visual context
