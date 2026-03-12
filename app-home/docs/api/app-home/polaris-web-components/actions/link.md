---
title: Link
description: >-
  Makes text interactive, allowing users to navigate to other pages or perform
  specific actions. Supports standard URLs, custom protocols, and navigation
  within Shopify or app pages.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/actions/link'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/actions/link.md'
---

# Link

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.

  Use this when using only an icon or the content of the link is not enough context for users using assistive technologies.

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

* **download**

  **string**

  Causes the browser to treat the linked URL as a download with the string being the file name. Download only works for same-origin URLs or the `blob:` and `data:` schemes.

* **href**

  **string**

  The URL to link to.

  * If set, it will navigate to the location specified by `href` after executing the `click` event.
  * If a `commandFor` is set, the `command` will be executed instead of the navigation.

* **interestFor**

  **string**

  Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

* **lang**

  **string**

  Indicate the text language. Useful when the text is in a different language than the rest of the page. It will allow assistive technologies such as screen readers to invoke the correct pronunciation. [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)

* **target**

  **"auto" | AnyString | "\_blank" | "\_self" | "\_parent" | "\_top"**

  **Default: 'auto'**

  Specifies where to display the linked URL.

* **tone**

  **"critical" | "auto" | "neutral"**

  **Default: 'auto'**

  Sets the tone of the Link, based on the intention of the information being conveyed.

### AnyString

Prevents widening string literal types in a union to \`string\`.

```ts
string & {}
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **click**

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

  The content of the Link.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-link href="javascript:void(0)">fufilling orders</s-link>
  ```

  ##### html

  ```html
  <s-link href="#beep">fufilling orders</s-link>
  ```

* #### Basic Links in Paragraph

  ##### Description

  Links automatically inherit the tone from their surrounding paragraph context.

  ##### jsx

  ```jsx
  <s-paragraph>
    Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
  </s-paragraph>
  ```

* #### Links in Subdued Paragraph

  ##### Description

  Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.

  ##### jsx

  ```jsx
  <s-paragraph color="subdued">
    Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph color="subdued">
    Need help setting up shipping rates? <s-link href="javascript:void(0)" target="_blank">View shipping guide</s-link> or <s-link href="javascript:void(0)">contact merchant support</s-link>.
  </s-paragraph>
  ```

* #### Critical Context Links

  ##### Description

  Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.

  ##### jsx

  ```jsx
  <s-paragraph tone="critical">
    Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph tone="critical">
    Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
  </s-paragraph>
  ```

* #### Links with Auto Tone

  ##### Description

  Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.

  ##### jsx

  ```jsx
  <s-paragraph>
    You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
  </s-paragraph>
  ```

* #### Links in Banner

  ##### Description

  Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.

  ##### jsx

  ```jsx
  <s-banner tone="info">
    <s-paragraph>
      Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
    </s-paragraph>
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner tone="info">
    <s-paragraph>
      Black Friday campaigns are now available!
      <s-link href="javascript:void(0)">Create your campaign</s-link>
    </s-paragraph>
  </s-banner>
  ```

* #### Links in Box Container

  ##### Description

  Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.

  ##### jsx

  ```jsx
  <s-box padding="base" background="base" borderWidth="base" borderColor="base">
    <s-paragraph>
      Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
    </s-paragraph>
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="base" background="base" borderWidth="base" borderColor="base">
    <s-paragraph>
      Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
    </s-paragraph>
  </s-box>
  ```

* #### Links in Banner Context

  ##### Description

  Shows how links can be used within warning banners to provide immediate actions related to critical notifications.

  ##### jsx

  ```jsx
  <s-banner tone="warning">
    <s-paragraph>
      Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
    </s-paragraph>
  </s-banner>
  ```

  ##### html

  ```html
  <s-banner tone="warning">
    <s-paragraph>
      Your inventory for "Vintage t-shirt" is running low (3 remaining). <s-link>Restock inventory</s-link>
    </s-paragraph>
  </s-banner>
  ```

* #### Download Links

  ##### Description

  Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.

  ##### jsx

  ```jsx
  <s-paragraph>
    Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
  </s-paragraph>
  ```

* #### External Links

  ##### Description

  Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.

  ##### jsx

  ```jsx
  <s-box padding="base">
    <s-paragraph>
      Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
    </s-paragraph>
  </s-box>
  ```

  ##### html

  ```html
  <s-box padding="base">
    <s-paragraph>
      Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
    </s-paragraph>
  </s-box>
  ```

* #### Links with Language Attribute

  ##### Description

  Shows how to use the \`lang\` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.

  ##### jsx

  ```jsx
  <s-paragraph>
    Voir en français: <s-link lang="fr">Gérer les produits</s-link>
  </s-paragraph>
  ```

  ##### html

  ```html
  <s-paragraph>
    Voir en français: <s-link lang="fr">Gérer les produits</s-link>
  </s-paragraph>
  ```

* #### Links with Different Tones

  ##### Description

  Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-paragraph>
      Default tone: <s-link>View orders</s-link>
    </s-paragraph>

    <s-paragraph tone="success">
      Success tone: <s-link>Inventory help</s-link>
    </s-paragraph>

    <s-paragraph tone="critical">
      Critical tone: <s-link>Close store</s-link>
    </s-paragraph>

    <s-paragraph tone="warning">
      Warning tone: <s-link>Update billing info</s-link>
    </s-paragraph>

    <s-paragraph tone="info">
      Info tone: <s-link>Learn more about reports</s-link>
    </s-paragraph>

    <s-paragraph tone="caution">
      Caution tone: <s-link>View archived products</s-link>
    </s-paragraph>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-paragraph>
      Default tone: <s-link>View orders</s-link>
    </s-paragraph>

    <s-paragraph tone="success">
      Neutral tone: <s-link>Inventory help</s-link>
    </s-paragraph>

    <s-paragraph tone="critical">
      Critical tone: <s-link>Close store</s-link>
    </s-paragraph>

    <s-paragraph tone="warning">
      Warning tone: <s-link>Update billing info</s-link>
    </s-paragraph>

    <s-paragraph tone="info">
      Info tone: <s-link>Learn more about reports</s-link>
    </s-paragraph>

    <s-paragraph tone="caution">
      Subdued tone: <s-link>View archived products</s-link>
    </s-paragraph>
  </s-stack>
  ```

## Best practices

* Use links for navigation and buttons for actions
* Use default links whenever possible to avoid disorienting merchants
* Open external links in a new tab only when merchants are performing a task or navigating outside the Shopify admin
