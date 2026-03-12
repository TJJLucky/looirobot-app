---
title: App card
description: >
  App cards provide a consistent layout for presenting another app to merchants.
  They are used to highlight apps that can extend functionality or help
  merchants accomplish related tasks. App cards should educate merchants about
  the value of the suggested app and provide a clear, actionable way to learn
  more or install it.

    | Used to | Examples |
    | --- | --- |
    | Suggest complementary apps | Recommend an email marketing app to subscription service users |
    | Promote integrations | Highlight a social media scheduler that connects with your app |
    | Guide merchants to explore new solutions | Introduce a reporting tool for advanced analytics |

    ---
    

    
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/app-card'
  md: 'https://shopify.dev/docs/api/app-home/patterns/compositions/app-card.md'
---

# App card

App cards provide a consistent layout for presenting another app to merchants. They are used to highlight apps that can extend functionality or help merchants accomplish related tasks. App cards should educate merchants about the value of the suggested app and provide a clear, actionable way to learn more or install it.

| Used to | Examples |
| - | - |
| Suggest complementary apps | Recommend an email marketing app to subscription service users |
| Promote integrations | Highlight a social media scheduler that connects with your app |
| Guide merchants to explore new solutions | Introduce a reporting tool for advanced analytics |

***

Examples

### Examples

* #### App card

  ##### jsx

  ```jsx
  <s-clickable
    href="https://apps.shopify.com/planet"
    border="base"
    borderRadius="base"
    padding="base"
    inlineSize="100%"
  >
    <s-grid gridTemplateColumns="auto 1fr auto" alignItems="stretch" gap="base">
      <s-thumbnail
        size="small"
        src="https://cdn.shopify.com/app-store/listing_images/87176a11f3714753fdc2e1fc8bbf0415/icon/CIqiqqXsiIADEAE=.png"
        alt="Shopify Planet icon"
       />
      <s-box>
        <s-heading>Shopify Planet</s-heading>
        <s-paragraph>Free</s-paragraph>
        <s-paragraph>
          Offer carbon-neutral shipping and showcase your commitment.
        </s-paragraph>
      </s-box>
      <s-stack justifyContent="start">
        <s-button
          href="https://apps.shopify.com/planet"
          icon="download"
          accessibilityLabel="Download Shopify Planet"
         />
      </s-stack>
    </s-grid>
  </s-clickable>
  ```

  ##### html

  ```html
  <s-clickable
    href="https://apps.shopify.com/planet"
    border="base"
    borderRadius="base"
    padding="base"
    inlineSize="100%"
  >
    <s-grid gridTemplateColumns="auto 1fr auto" alignItems="stretch" gap="base">
        <s-thumbnail
          size="small"
          src="https://cdn.shopify.com/app-store/listing_images/87176a11f3714753fdc2e1fc8bbf0415/icon/CIqiqqXsiIADEAE=.png"
          alt="Shopify Planet icon"
        ></s-thumbnail>
      <s-box>
        <s-heading>Shopify Planet</s-heading>
        <s-paragraph>Free</s-paragraph>
        <s-paragraph>
          Offer carbon-neutral shipping and showcase your commitment.
        </s-paragraph>
      </s-box>
      <s-stack justifyContent="start">
        <s-button
          href="https://apps.shopify.com/planet"
          icon="download"
          accessibilityLabel="Download Shopify Planet"
        ></s-button>
      </s-stack>
    </s-grid>
  </s-clickable>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
