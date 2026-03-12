---
title: Select
description: >-
  Allow users to pick one option from a menu. Ideal when presenting four or more
  choices to keep interfaces uncluttered.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select.md'
---

# Select

Allow users to pick one option from a menu. Ideal when presenting four or more choices to keep interfaces uncluttered.

## Properties

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **icon**

  **"" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "order" | "code" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle" | "alert-triangle-filled" | "align-horizontal-centers" | "app-extension" | "apps" | "archive" | "arrow-down" | "arrow-down-circle" | "arrow-down-right" | "arrow-left" | "arrow-left-circle" | "arrow-right" | "arrow-right-circle" | "arrow-up" | "arrow-up-circle" | "arrow-up-right" | "arrows-in-horizontal" | "arrows-out-horizontal" | "asterisk" | "attachment" | "automation" | "backspace" | "bag" | "bank" | "barcode" | "battery-low" | "bill" | "blank" | "blog" | "bolt" | "bolt-filled" | "book" | "book-open" | "bug" | "bullet" | "business-entity" | "button" | "button-press" | "calculator" | "calendar" | "calendar-check" | "calendar-compare" | "calendar-list" | "calendar-time" | "camera" | "camera-flip" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cart" | "cart-abandoned" | "cart-discount" | "cart-down" | "cart-filled" | "cart-sale" | "cart-send" | "cart-up" | "cash-dollar" | "cash-euro" | "cash-pound" | "cash-rupee" | "cash-yen" | "catalog-product" | "categories" | "channels" | "channels-filled" | "chart-cohort" | "chart-donut" | "chart-funnel" | "chart-histogram-first" | "chart-histogram-first-last" | "chart-histogram-flat" | "chart-histogram-full" | "chart-histogram-growth" | "chart-histogram-last" | "chart-histogram-second-last" | "chart-horizontal" | "chart-line" | "chart-popular" | "chart-stacked" | "chart-vertical" | "chat" | "chat-new" | "chat-referral" | "check" | "check-circle" | "check-circle-filled" | "checkbox" | "chevron-down" | "chevron-down-circle" | "chevron-left" | "chevron-left-circle" | "chevron-right" | "chevron-right-circle" | "chevron-up" | "chevron-up-circle" | "circle" | "circle-dashed" | "clipboard" | "clipboard-check" | "clipboard-checklist" | "clock" | "clock-list" | "clock-revert" | "code-add" | "collection-featured" | "collection-list" | "collection-reference" | "color-none" | "compass" | "compose" | "confetti" | "connect" | "content" | "contract" | "corner-pill" | "corner-round" | "corner-square" | "credit-card" | "credit-card-cancel" | "credit-card-percent" | "credit-card-reader" | "credit-card-reader-chip" | "credit-card-reader-tap" | "credit-card-secure" | "credit-card-tap-chip" | "crop" | "currency-convert" | "cursor" | "cursor-banner" | "cursor-option" | "data-presentation" | "data-table" | "database" | "database-add" | "database-connect" | "delete" | "delivered" | "delivery" | "desktop" | "disabled" | "disabled-filled" | "discount" | "discount-add" | "discount-automatic" | "discount-code" | "discount-remove" | "dns-settings" | "dock-floating" | "dock-side" | "domain" | "domain-landing-page" | "domain-new" | "domain-redirect" | "download" | "drag-drop" | "drag-handle" | "drawer" | "duplicate" | "email" | "email-follow-up" | "email-newsletter" | "empty" | "enabled" | "enter" | "envelope" | "envelope-soft-pack" | "eraser" | "exchange" | "exit" | "export" | "external" | "eye-check-mark" | "eye-dropper" | "eye-dropper-list" | "eye-first" | "eyeglasses" | "fav" | "favicon" | "file" | "file-list" | "filter" | "filter-active" | "flag" | "flip-horizontal" | "flip-vertical" | "flower" | "folder" | "folder-add" | "folder-down" | "folder-remove" | "folder-up" | "food" | "foreground" | "forklift" | "forms" | "games" | "gauge" | "geolocation" | "gift" | "gift-card" | "git-branch" | "git-commit" | "git-repository" | "globe" | "globe-asia" | "globe-europe" | "globe-lines" | "globe-list" | "graduation-hat" | "grid" | "hashtag" | "hashtag-decimal" | "hashtag-list" | "heart" | "hide" | "hide-filled" | "home" | "home-filled" | "icons" | "identity-card" | "image" | "image-add" | "image-alt" | "image-explore" | "image-magic" | "image-none" | "image-with-text-overlay" | "images" | "import" | "in-progress" | "incentive" | "incoming" | "info-filled" | "inheritance" | "inventory" | "inventory-edit" | "inventory-list" | "inventory-transfer" | "inventory-updated" | "iq" | "key" | "keyboard" | "keyboard-filled" | "keyboard-hide" | "keypad" | "label-printer" | "language" | "language-translate" | "layout-block" | "layout-buy-button" | "layout-buy-button-horizontal" | "layout-buy-button-vertical" | "layout-column-1" | "layout-columns-2" | "layout-columns-3" | "layout-footer" | "layout-header" | "layout-logo-block" | "layout-popup" | "layout-rows-2" | "layout-section" | "layout-sidebar-left" | "layout-sidebar-right" | "lightbulb" | "link-list" | "list-bulleted" | "list-bulleted-filled" | "list-numbered" | "live" | "live-critical" | "live-none" | "location" | "location-none" | "lock" | "map" | "markets" | "markets-euro" | "markets-rupee" | "markets-yen" | "maximize" | "measurement-size" | "measurement-size-list" | "measurement-volume" | "measurement-volume-list" | "measurement-weight" | "measurement-weight-list" | "media-receiver" | "megaphone" | "mention" | "menu" | "menu-filled" | "menu-horizontal" | "menu-vertical" | "merge" | "metafields" | "metaobject" | "metaobject-list" | "metaobject-reference" | "microphone" | "microphone-muted" | "minimize" | "minus" | "minus-circle" | "mobile" | "money-none" | "money-split" | "moon" | "nature" | "note" | "note-add" | "notification" | "number-one" | "order-batches" | "order-draft" | "order-filled" | "order-first" | "order-fulfilled" | "order-repeat" | "order-unfulfilled" | "orders-status" | "organization" | "outdent" | "outgoing" | "package" | "package-cancel" | "package-fulfilled" | "package-on-hold" | "package-reassign" | "package-returned" | "page" | "page-add" | "page-attachment" | "page-clock" | "page-down" | "page-heart" | "page-list" | "page-reference" | "page-remove" | "page-report" | "page-up" | "pagination-end" | "pagination-start" | "paint-brush-flat" | "paint-brush-round" | "paper-check" | "partially-complete" | "passkey" | "paste" | "pause-circle" | "payment" | "payment-capture" | "payout" | "payout-dollar" | "payout-euro" | "payout-pound" | "payout-rupee" | "payout-yen" | "person" | "person-add" | "person-exit" | "person-filled" | "person-list" | "person-lock" | "person-remove" | "person-segment" | "personalized-text" | "phablet" | "phone" | "phone-down" | "phone-down-filled" | "phone-in" | "phone-out" | "pin" | "pin-remove" | "plan" | "play" | "play-circle" | "plus" | "plus-circle" | "plus-circle-down" | "plus-circle-filled" | "plus-circle-up" | "point-of-sale" | "point-of-sale-register" | "price-list" | "print" | "product-add" | "product-cost" | "product-filled" | "product-list" | "product-reference" | "product-remove" | "product-return" | "product-unavailable" | "profile" | "profile-filled" | "question-circle" | "question-circle-filled" | "radio-control" | "receipt" | "receipt-dollar" | "receipt-euro" | "receipt-folded" | "receipt-paid" | "receipt-pound" | "receipt-refund" | "receipt-rupee" | "receipt-yen" | "receivables" | "redo" | "referral-code" | "refresh" | "remove-background" | "reorder" | "replay" | "reset" | "return" | "reward" | "rocket" | "rotate-left" | "rotate-right" | "sandbox" | "save" | "savings" | "scan-qr-code" | "search-add" | "search-list" | "search-recent" | "search-resource" | "send" | "settings" | "share" | "shield-check-mark" | "shield-none" | "shield-pending" | "shield-person" | "shipping-label" | "shipping-label-cancel" | "shopcodes" | "slideshow" | "smiley-happy" | "smiley-joy" | "smiley-neutral" | "smiley-sad" | "social-ad" | "social-post" | "sort" | "sort-ascending" | "sort-descending" | "sound" | "sports" | "star" | "star-circle" | "star-filled" | "star-half" | "star-list" | "status" | "status-active" | "stop-circle" | "store" | "store-import" | "store-managed" | "store-online" | "sun" | "table" | "table-masonry" | "tablet" | "target" | "tax" | "team" | "text" | "text-align-center" | "text-align-left" | "text-align-right" | "text-block" | "text-bold" | "text-color" | "text-font" | "text-font-list" | "text-grammar" | "text-in-columns" | "text-in-rows" | "text-indent" | "text-indent-remove" | "text-italic" | "text-quote" | "text-title" | "text-underline" | "text-with-image" | "theme" | "theme-edit" | "theme-store" | "theme-template" | "three-d-environment" | "thumbs-down" | "thumbs-up" | "tip-jar" | "toggle-off" | "toggle-on" | "transaction" | "transaction-fee-add" | "transaction-fee-dollar" | "transaction-fee-euro" | "transaction-fee-pound" | "transaction-fee-rupee" | "transaction-fee-yen" | "transfer" | "transfer-in" | "transfer-internal" | "transfer-out" | "truck" | "undo" | "unknown-device" | "unlock" | "upload" | "variant-list" | "video" | "video-list" | "view" | "viewport-narrow" | "viewport-short" | "viewport-tall" | "viewport-wide" | "wallet" | "wand" | "watch" | "wifi" | "work" | "work-list" | "wrench" | "x" | "x-circle" | "x-circle-filled"**

  The type of icon to be displayed in the field.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **change**

  **CallbackEventListener<'input'>**

* **input**

  **CallbackEventListener<'input'>**

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

  The options a user can select from.

  Accepts `Option` and `OptionGroup` components.

## Option

Represents a single option within a select component. Use only as a child of `s-select` components.

* **defaultSelected**

  **boolean**

  **Default: false**

  Whether the control is active by default.

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

* **selected**

  **boolean**

  **Default: false**

  Whether the control is active.

* **value**

  **string**

  The value used in form data when the control is checked.

## Slots

* **children**

  **HTMLElement**

  The content to use as the label.

## OptionGroup

Represents a group of options within a select component. Use only as a child of `s-select` components.

* **disabled**

  **boolean**

  **Default: false**

  Whether the options within this group can be selected or not.

* **label**

  **string**

  The user-facing label for this group of options.

## Slots

* **children**

  **HTMLElement**

  The options a user can select from.

  Accepts `Option` components.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-select label="Date range">
    <s-option value="1">Today</s-option>
    <s-option value="2">Yesterday</s-option>
    <s-option value="3">Last 7 days</s-option>
    <s-option-group label="Custom ranges">
      <s-option value="4">Last 30 days</s-option>
      <s-option value="5">Last 90 days</s-option>
    </s-option-group>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Date range">
    <s-option value="1">Today</s-option>
    <s-option value="2">Yesterday</s-option>
    <s-option value="3">Last 7 days</s-option>
    <s-option-group label="Custom ranges">
      <s-option value="4">Last 30 days</s-option>
      <s-option value="5">Last 90 days</s-option>
    </s-option-group>
  </s-select>
  ```

* #### Basic usage

  ##### Description

  A simple select dropdown with pre-selected value for product sorting options.

  ##### jsx

  ```jsx
  <s-select label="Sort products by" value="newest">
    <s-option value="newest">Newest first</s-option>
    <s-option value="oldest">Oldest first</s-option>
    <s-option value="title">Title A–Z</s-option>
    <s-option value="price-low">Price: low to high</s-option>
    <s-option value="price-high">Price: high to low</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Sort products by" value="newest">
    <s-option value="newest">Newest first</s-option>
    <s-option value="oldest">Oldest first</s-option>
    <s-option value="title">Title A–Z</s-option>
    <s-option value="price-low">Price: low to high</s-option>
    <s-option value="price-high">Price: high to low</s-option>
  </s-select>
  ```

* #### With placeholder

  ##### Description

  Select dropdown with helpful placeholder text guiding category selection.

  ##### jsx

  ```jsx
  <s-select
    label="Product category"
    placeholder="Choose category for better organization"
  >
    <s-option value="clothing">Clothing & apparel</s-option>
    <s-option value="accessories">Accessories & jewelry</s-option>
    <s-option value="home-garden">Home & garden</s-option>
    <s-option value="electronics">Electronics & tech</s-option>
    <s-option value="books">Books & media</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select
    label="Product category"
    placeholder="Choose category for better organization"
  >
    <s-option value="clothing">Clothing & apparel</s-option>
    <s-option value="accessories">Accessories & jewelry</s-option>
    <s-option value="home-garden">Home & garden</s-option>
    <s-option value="electronics">Electronics & tech</s-option>
    <s-option value="books">Books & media</s-option>
  </s-select>
  ```

* #### With error state

  ##### Description

  Select in error state showing specific business context and actionable error message.

  ##### jsx

  ```jsx
  <s-select
    label="Shipping origin"
    error="Select your primary shipping location to calculate accurate rates for customers"
    required
  >
    <s-option value="ca">Canada</s-option>
    <s-option value="us">United states</s-option>
    <s-option value="mx">Mexico</s-option>
    <s-option value="uk">United kingdom</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select
    label="Shipping origin"
    error="Select your primary shipping location to calculate accurate rates for customers"
    required
  >
    <s-option value="ca">Canada</s-option>
    <s-option value="us">United states</s-option>
    <s-option value="mx">Mexico</s-option>
    <s-option value="uk">United kingdom</s-option>
  </s-select>
  ```

* #### With option groups

  ##### Description

  Grouped select options organized by geographical regions for international shipping.

  ##### jsx

  ```jsx
  <s-select label="Shipping destination">
    <s-option-group label="North america">
      <s-option value="ca">Canada</s-option>
      <s-option value="us">United states</s-option>
      <s-option value="mx">Mexico</s-option>
    </s-option-group>
    <s-option-group label="Europe">
      <s-option value="uk">United kingdom</s-option>
      <s-option value="fr">France</s-option>
      <s-option value="de">Germany</s-option>
      <s-option value="it">Italy</s-option>
    </s-option-group>
    <s-option-group label="Asia pacific">
      <s-option value="au">Australia</s-option>
      <s-option value="jp">Japan</s-option>
      <s-option value="sg">Singapore</s-option>
    </s-option-group>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Shipping destination">
    <s-option-group label="North america">
      <s-option value="ca">Canada</s-option>
      <s-option value="us">United states</s-option>
      <s-option value="mx">Mexico</s-option>
    </s-option-group>
    <s-option-group label="Europe">
      <s-option value="uk">United kingdom</s-option>
      <s-option value="fr">France</s-option>
      <s-option value="de">Germany</s-option>
      <s-option value="it">Italy</s-option>
    </s-option-group>
    <s-option-group label="Asia pacific">
      <s-option value="au">Australia</s-option>
      <s-option value="jp">Japan</s-option>
      <s-option value="sg">Singapore</s-option>
    </s-option-group>
  </s-select>
  ```

* #### With icon

  ##### Description

  Select dropdown with sort icon for filtering order management views.

  ##### jsx

  ```jsx
  <s-select label="Filter orders by" icon="sort">
    <s-option value="date">Order date</s-option>
    <s-option value="status">Fulfillment status</s-option>
    <s-option value="total">Order total</s-option>
    <s-option value="customer">Customer name</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Filter orders by" icon="sort">
    <s-option value="date">Order date</s-option>
    <s-option value="status">Fulfillment status</s-option>
    <s-option value="total">Order total</s-option>
    <s-option value="customer">Customer name</s-option>
  </s-select>
  ```

* #### Disabled state

  ##### Description

  Select in disabled state preventing user interaction with pre-selected value.

  ##### jsx

  ```jsx
  <s-select label="Product type" disabled value="physical">
    <s-option value="physical">Physical product</s-option>
    <s-option value="digital">Digital product</s-option>
    <s-option value="service">Service</s-option>
    <s-option value="gift-card">Gift card</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Product type" disabled value="physical">
    <s-option value="physical">Physical product</s-option>
    <s-option value="digital">Digital product</s-option>
    <s-option value="service">Service</s-option>
    <s-option value="gift-card">Gift card</s-option>
  </s-select>
  ```
