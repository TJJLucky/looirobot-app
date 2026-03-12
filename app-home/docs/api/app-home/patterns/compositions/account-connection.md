---
title: Account connection
description: >
  The account connection component is used so merchants can connect or
  disconnect their store to various accounts. For example, if merchants want to
  use the Facebook sales channel, they need to connect their Facebook account to
  their Shopify store.

    | Used to | Examples |
    | --- | --- |
    | Display connection status | Show if a sales channel is connected or disconnected |
    | Allow merchants to disconnect accounts  | Enable merchants to disconnect from a marketing platform |

    ---
    

    
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/patterns/compositions/account-connection
  md: >-
    https://shopify.dev/docs/api/app-home/patterns/compositions/account-connection.md
---

# Account connection

The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store.

| Used to | Examples |
| - | - |
| Display connection status | Show if a sales channel is connected or disconnected |
| Allow merchants to disconnect accounts | Enable merchants to disconnect from a marketing platform |

***

Examples

### Examples

* #### Account connection

  ##### jsx

  ```jsx
  <s-section>
    <s-stack gap="base">
      <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
        <s-grid-item>
          <s-stack>
            <s-heading>Puzzlify</s-heading>
            <s-text color="subdued">No account connected</s-text>
          </s-stack>
        </s-grid-item>
        <s-grid-item>
          <s-button variant="primary">Connect</s-button>
        </s-grid-item>
      </s-grid>
      <s-text>
        By clicking Connect, you agree to accept Sample App's terms and
        conditions. You'll pay a commission rate of 15% on sales made through
        Sample App.
      </s-text>
    </s-stack>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-stack gap="base">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
      <s-grid-item>
        <s-stack>
          <s-heading>Puzzlify</s-heading>
          <s-text color="subdued">No account connected</s-text>
        </s-stack>
      </s-grid-item>
      <s-grid-item>
        <s-button variant="primary">Connect</s-button>
      </s-grid-item>
    </s-grid>
    <s-text>By clicking Connect, you agree to accept Sample App's terms and conditions. You'll pay a commission rate of 15% on sales made through Sample App.</s-text>
  </s-stack>
  </s-section>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
