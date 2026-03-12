---
title: Popover
description: >-
  Popovers are used to display content in an overlay that can be triggered by a
  button.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/popover
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/popover.md
---

# Popover

Popovers are used to display content in an overlay that can be triggered by a button.

## Properties

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size.

### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **afterhide**

  **CallbackEventListener\<TTagName> | null**

* **aftershow**

  **CallbackEventListener\<TTagName> | null**

* **aftertoggle**

  **CallbackEventListener\<TTagName> | null**

* **hide**

  **CallbackEventListener\<TTagName> | null**

* **show**

  **CallbackEventListener\<TTagName> | null**

* **toggle**

  **CallbackEventListener\<TTagName> | null**

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

  The content of the Popover.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="product-options-popover">Product options</s-button>

    <s-popover id="product-options-popover">
      <s-stack direction="block">
        <s-button variant="tertiary">Import</s-button>
        <s-button variant="tertiary">Export</s-button>
      </s-stack>
    </s-popover>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="product-options-popover">Product options</s-button>

  <s-popover id="product-options-popover">
    <s-stack direction="block">
      <s-button variant="tertiary">Import</s-button>
      <s-button variant="tertiary">Export</s-button>
    </s-stack>
  </s-popover>
  ```

* #### Popover with notifications

  ##### Description

  Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="notifications-popover" icon="notification">
      Notifications
    </s-button>

    <s-popover id="notifications-popover">
      <s-box padding="base">
        <s-stack gap="small-200">
          <s-stack gap="small">
            <s-heading>New order received</s-heading>
            <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
          </s-stack>

          <s-divider />

          <s-stack gap="small">
            <s-heading>Low inventory alert</s-heading>
            <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
          </s-stack>

          <s-divider />

          <s-stack gap="small">
            <s-heading>Payment processed</s-heading>
            <s-paragraph color="subdued">$250.00 payment confirmed for order #1230</s-paragraph>
          </s-stack>
        </s-stack>
      </s-box>
    </s-popover>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">
            Order #1234 was placed 5 minutes ago
          </s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">
            3 products are running low on stock
          </s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">
            $250.00 payment confirmed for order #1230
          </s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
  ```

* #### Popover with choice list

  ##### Description

  Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="table-settings-popover" icon="settings">
      Columns
    </s-button>

    <s-popover id="table-settings-popover">
      <s-box padding="base">
        <s-stack gap="small-200">
          <s-stack gap="small">
            <s-heading>Choose columns to display</s-heading>
            <s-choice-list label="Select columns to display">
              <s-choice value="sku" selected>
                Sku
              </s-choice>
              <s-choice value="inventory" selected>
                Inventory
              </s-choice>
              <s-choice value="price" selected>
                Price
              </s-choice>
              <s-choice value="vendor">Vendor</s-choice>
              <s-choice value="type">Product type</s-choice>
            </s-choice-list>
          </s-stack>
          <s-button variant="primary">Apply changes</s-button>
        </s-stack>
      </s-box>
    </s-popover>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>Sku</s-choice>
            <s-choice value="inventory" selected>Inventory</s-choice>
            <s-choice value="price" selected>Price</s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
  ```

* #### Popover with inventory details

  ##### Description

  Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="stock-popover" icon="info">
      Stock details
    </s-button>

    <s-popover id="stock-popover">
      <s-box padding="base">
        <s-stack gap="small">
          <s-stack gap="small-200">
            <s-stack direction="inline" justifyContent="space-between">
              <s-text color="subdued">Available</s-text>
              <s-text>127 units</s-text>
            </s-stack>

            <s-stack direction="inline" justifyContent="space-between">
              <s-text color="subdued">Reserved</s-text>
              <s-text>15 units</s-text>
            </s-stack>

            <s-stack direction="inline" justifyContent="space-between">
              <s-text color="subdued">In transit</s-text>
              <s-text>50 units</s-text>
            </s-stack>
          </s-stack>

          <s-divider />

          <s-stack direction="inline" justifyContent="space-between">
            <s-text>Total stock</s-text>
            <s-text>192 units</s-text>
          </s-stack>

          <s-button variant="secondary">View full inventory report</s-button>
        </s-stack>
      </s-box>
    </s-popover>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
  ```

## Usage

Popovers are closed by default and should be triggered by a button using the `commandFor` attribute. The button's `commandFor` value should match the popover's `id`. The popover's position is determined by the button that triggers it.

## Best practices

* Use for secondary or less important information and actions since they're hidden until triggered
* Contain actions that share a relationship to each other
* Be triggered by a clearly labeled default or tertiary button

## Content guidelines

* Use clear action verbs in the {verb}+{noun} format (e.g., "Create order", "Edit HTML")
* Avoid unnecessary words like "the", "an", or "a"
