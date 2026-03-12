---
title: Callout card
description: >
  Callout cards are used to encourage merchants to take an action related to a
  new feature or opportunity. They are most commonly displayed in the sales
  channels section of Shopify.
   
    | Used to | Examples |
    | --- | --- |
    | Promote new features or integrations | Dismissible feature announcement |
    | Drive adoption of app functionality | Common first actions |
    ---
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/callout-card'
  md: 'https://shopify.dev/docs/api/app-home/patterns/compositions/callout-card.md'
---

# Callout card

Callout cards are used to encourage merchants to take an action related to a new feature or opportunity. They are most commonly displayed in the sales channels section of Shopify.

| Used to | Examples |
| - | - |
| Promote new features or integrations | Dismissible feature announcement |
| Drive adoption of app functionality | Common first actions |

***

Examples

### Examples

* #### Callout card

  ##### jsx

  ```jsx
  <s-section>
    <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
      <s-grid
        gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
        gap="base"
        alignItems="center"
      >
        <s-grid gap="small-200">
          <s-heading>Ready to create your custom puzzle?</s-heading>
          <s-paragraph>
            Start by uploading an image to your gallery or choose from one of our
            templates.
          </s-paragraph>
          <s-stack direction="inline" gap="small-200">
            <s-button> Upload image </s-button>
            <s-button tone="neutral" variant="tertiary">
              {" "}
              Browse templates{" "}
            </s-button>
          </s-stack>
        </s-grid>
        <s-stack alignItems="center">
          <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
            <s-image
              src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
              alt="Customize checkout illustration"
              aspectRatio="1/0.5"
             />
          </s-box>
        </s-stack>
      </s-grid>
      <s-button
        icon="x"
        tone="neutral"
        variant="tertiary"
        accessibilityLabel="Dismiss card"
       />
    </s-grid>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
      <s-grid
        gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
        gap="base"
        alignItems="center"
      >
        <s-grid gap="small-200">
          <s-heading>Ready to create your custom puzzle?</s-heading>
          <s-paragraph>
            Start by uploading an image to your gallery or choose from one of our templates.
          </s-paragraph>
          <s-stack direction="inline" gap="small-200">
            <s-button> Upload image </s-button>
            <s-button tone="neutral" variant="tertiary"> Browse templates </s-button>
          </s-stack>
        </s-grid>
        <s-stack alignItems="center">
          <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
            <s-image
              src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
              alt="Customize checkout illustration"
              aspectRatio="1/0.5"
            ></s-image>
          </s-box>
        </s-stack>
      </s-grid>
      <s-button
        icon="x"
        tone="neutral"
        variant="tertiary"
        accessibilityLabel="Dismiss card"
      ></s-button>
    </s-grid>
  </s-section>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
