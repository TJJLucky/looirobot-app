---
title: Banner
description: >-
  Highlights important information or required actions prominently within the
  interface. Use to communicate statuses, provide feedback, or draw attention to
  critical updates.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/feedback-and-status-indicators/banner
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/feedback-and-status-indicators/banner.md
---

# Banner

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.

## Properties

* **dismissible**

  **boolean**

  **Default: false**

  Determines whether the close button of the banner is present.

  When the close button is pressed, the `dismiss` event will fire, then `hidden` will be true, any animation will complete, and the `afterhide` event will fire.

* **heading**

  **string**

  **Default: ''**

  The title of the banner.

* **hidden**

  **boolean**

  **Default: false**

  Determines whether the banner is hidden.

  If this property is being set on each framework render (as in 'controlled' usage), and the banner is `dismissible`, ensure you update app state for this property when the `dismiss` event fires.

  If the banner is not `dismissible`, it can still be hidden by setting this property.

* **tone**

  **"info" | "success" | "warning" | "critical" | "auto"**

  **Default: 'auto'**

  Sets the tone of the Banner, based on the intention of the information being conveyed.

  The banner is a live region and the type of status will be dictated by the Tone selected.

  * `critical` creates an [assertive live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) that is announced by screen readers immediately.
  * `neutral`, `info`, `success`, `warning` and `caution` creates an [informative live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) that is announced by screen readers after the current message.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **afterhide**

  **CallbackEventListener\<typeof tagName> | null**

* **dismiss**

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

  The content of the Banner.

* **secondary-actions**

  **HTMLElement**

  The secondary actions to display at the bottom of the Banner.

  Only Buttons with the `variant` of "secondary" or "auto" are permitted. A maximum of two `s-button` components are allowed.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-banner heading="Order archived" tone="info" dismissible>
    This order was archived on March 7, 2017 at 3:12pm EDT.
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="Order archived" tone="info" dismissible>
    This order was archived on March 7, 2017 at 3:12pm EDT.
  </s-banner>
  ```

* #### Basic information banner

  ##### Description

  Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.

  ##### jsx

  ```jsx
  <s-banner heading="Order archived">
    This order was archived on March 7, 2017 at 3:12pm EDT.
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="Order archived">
    This order was archived on March 7, 2017 at 3:12pm EDT.
  </s-banner>
  ```

* #### Warning banner with specific actions

  ##### Description

  Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.

  ##### jsx

  ```jsx
  <s-banner heading="127 products missing shipping weights" tone="warning">
    Products without weights may show inaccurate shipping rates, leading to
    checkout abandonment.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/products?filter=missing-weights"
    >
      Review products
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="javascript:void(0)"
    >
      Setup guide
    </s-button>
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="127 products missing shipping weights" tone="warning">
    Products without weights may show inaccurate shipping rates, leading to
    checkout abandonment.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/products?filter=missing-weights"
    >
      Review products
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="javascript:void(0)"
    >
      Setup guide
    </s-button>
  </s-banner>
  ```

* #### Critical banner with clear next steps

  ##### Description

  Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.

  ##### jsx

  ```jsx
  <s-banner heading="Order #1024 flagged for fraud review" tone="critical">
    This order shows multiple risk indicators and cannot be auto-fulfilled. Review
    required within 24 hours to prevent automatic cancellation.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/orders/1024/risk"
    >
      Review order details
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/settings/payments/fraud"
    >
      Adjust fraud settings
    </s-button>
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="Order #1024 flagged for fraud review" tone="critical">
    This order shows multiple risk indicators and cannot be auto-fulfilled. Review
    required within 24 hours to prevent automatic cancellation.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/orders/1024/risk"
    >
      Review order details
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/settings/payments/fraud"
    >
      Adjust fraud settings
    </s-button>
  </s-banner>
  ```

* #### Dismissible success banner

  ##### Description

  Success confirmation with dismiss option for completed operations.

  ##### jsx

  ```jsx
  <s-banner heading="Products imported" tone="success" dismissible={true}>
    Successfully imported 50 products to your store.
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="Products imported" tone="success" dismissible="true">
    Successfully imported 50 products to your store.
  </s-banner>
  ```

* #### Info banner with clear value proposition

  ##### Description

  Informational banner highlighting app updates with clear benefits and actions.

  ##### jsx

  ```jsx
  <s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
    New version includes faster checkout processing and inventory sync
    improvements.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/apps/pos/changelog"
    >
      View changes
    </s-button>
    <s-button slot="secondary-actions" variant="secondary">
      Install update
    </s-button>
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
    New version includes faster checkout processing and inventory sync
    improvements.
    <s-button
      slot="secondary-actions"
      variant="secondary"
      href="/admin/apps/pos/changelog"
    >
      View changes
    </s-button>
    <s-button slot="secondary-actions" variant="secondary">
      Install update
    </s-button>
  </s-banner>
  ```

## Useful for

* Showing important information or changes
* Prompting merchants to take a specific action
* Displaying warnings, errors, or critical information
* Communicating persistent conditions that need attention

## Outside of a section

Banners placed outside of a section will display in their own card and should be located at the top of the page. They're useful for conveying messages that apply to the entire page or areas not visible within the viewport, such as validation errors further down the page.

## In a section

Banners placed inside a section will have styles applied contextually. They're useful for conveying messages relevant to a specific section or piece of content.

## Best practices

* Seeing these banners can be stressful, so use them sparingly to avoid overwhelming users.
* Focus on a single piece of information or required action to avoid overwhelming users.
* Make the message concise and scannable. Users shouldn’t need to spend a lot of time figuring out what they need to know and do.
* Info, Warning and Critical banners should contain a call to action and clear next steps. Users should know what to do after seeing the banner.
* Avoid banners that can't be dismissed unless the user is required to take action.

## Content guidelines

* Keep titles concise and clear
* Limit body content to 1-2 sentences where possible
* Use action-led buttons with strong verbs (e.g., "Activate Apple Pay" not "Try Apple Pay")
* Avoid unnecessary words and articles in button text
* For warning and critical banners, explain how to resolve the issue
