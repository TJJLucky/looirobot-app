---
title: Media card
description: >
  Media cards provide a consistent layout to present visual information to
  merchants. Visual media is used to provide additional context to the written
  information it's paired with.

    | Used to | Examples |
    | --- | --- |
    | Educate merchants on key actions | Show how to connect a social account with a demo image |
    | Provide clear calls to action | Show campaign preview with a "Send campaign" button |

    ---
    

    
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/media-card'
  md: 'https://shopify.dev/docs/api/app-home/patterns/compositions/media-card.md'
---

# Media card

Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with.

| Used to | Examples |
| - | - |
| Educate merchants on key actions | Show how to connect a social account with a demo image |
| Provide clear calls to action | Show campaign preview with a "Send campaign" button |

***

Examples

### Examples

* #### Media card

  ##### jsx

  ```jsx
  <s-box
    border="base"
    borderRadius="base"
    overflow="hidden"
    maxInlineSize="216px"
  >
    <s-clickable href="">
      <s-image
        aspectRatio="1/1"
        objectFit="cover"
        alt="Illustration of characters with a 4-piece puzzle"
        src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
       />
    </s-clickable>
    <s-divider />
    <s-grid
      gridTemplateColumns="1fr auto"
      background="base"
      padding="small"
      gap="small"
      alignItems="center"
    >
      <s-heading>4-Pieces</s-heading>
      <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
        View
      </s-button>
    </s-grid>
  </s-box>
  ```

  ##### html

  ```html
  <s-box border="base" borderRadius="base" overflow="hidden" maxInlineSize="216px">
    <s-clickable href="">
      <s-image
        aspectRatio="1/1"
        objectFit="cover"
        alt="Illustration of characters with a 4-piece puzzle"
        src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
      ></s-image>
    </s-clickable>
    <s-divider></s-divider>
    <s-grid
      gridTemplateColumns="1fr auto"
      background="base"
      padding="small"
      gap="small"
      alignItems="center"
    >
      <s-heading>4-Pieces</s-heading>
      <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
        View
      </s-button>
    </s-grid>
  </s-box>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
