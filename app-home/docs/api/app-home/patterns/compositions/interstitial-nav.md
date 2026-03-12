---
title: Interstitial nav
description: >
  Interstitial navigation is used to connect merchants to deeper pages—such as
  settings, features, or resources—within a section of your app. It helps keep
  navigation clean and focused by avoiding multiple nested items, making it
  easier for merchants to discover and access important functionality.
   
    | Used to | Examples |
    | --- | --- |
    | Link to individual settings pages | Navigate from a settings overview to product settings or notification preferences |
    | Connect to feature-specific pages | Direct merchants from campaign overview to reporting or automation setup |
    | Guide merchants to supporting resources | Link to help documentation or integration guides from a central section |
    | Simplify navigation structure | Reduce clutter by providing access to deeper pages without multi-level menus |
    ---
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/interstitial-nav'
  md: >-
    https://shopify.dev/docs/api/app-home/patterns/compositions/interstitial-nav.md
---

# Interstitial nav

Interstitial navigation is used to connect merchants to deeper pages—such as settings, features, or resources—within a section of your app. It helps keep navigation clean and focused by avoiding multiple nested items, making it easier for merchants to discover and access important functionality.

| Used to | Examples |
| - | - |
| Link to individual settings pages | Navigate from a settings overview to product settings or notification preferences |
| Connect to feature-specific pages | Direct merchants from campaign overview to reporting or automation setup |
| Guide merchants to supporting resources | Link to help documentation or integration guides from a central section |
| Simplify navigation structure | Reduce clutter by providing access to deeper pages without multi-level menus |

***

Examples

### Examples

* #### Interstitial nav

  ##### jsx

  ```jsx
  <s-section heading="Preferences">
    <s-box border="base" borderRadius="base">
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
      >
        <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
          <s-box>
            <s-heading>Shipping & fulfillment</s-heading>
            <s-paragraph color="subdued">
              Shipping methods, rates, zones, and fulfillment preferences.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right" />
        </s-grid>
      </s-clickable>
      <s-box paddingInline="small-100">
        <s-divider />
      </s-box>
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
      >
        <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
          <s-box>
            <s-heading>Products & catalog</s-heading>
            <s-paragraph color="subdued">
              Product defaults, customer experience, and catalog display options.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right" />
        </s-grid>
      </s-clickable>
      <s-box paddingInline="small-100">
        <s-divider />
      </s-box>
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Manage customer support settings and help resources"
      >
        <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
          <s-box>
            <s-heading>Customer support</s-heading>
            <s-paragraph color="subdued">
              Support settings, help resources, and customer service tools.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right" />
        </s-grid>
      </s-clickable>
    </s-box>
  </s-section>
  ```

  ##### html

  ```html
  <s-section heading="Preferences">
    <s-box
      border="base"
      borderRadius="base"
    >
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
      >
        <s-grid
          gridTemplateColumns="1fr auto"
          alignItems="center"
          gap="base"
        >
          <s-box>
            <s-heading>Shipping & fulfillment</s-heading>
            <s-paragraph color="subdued">
              Shipping methods, rates, zones, and fulfillment preferences.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right"></s-icon>
        </s-grid>
      </s-clickable>
      <s-box paddingInline="small-100">
        <s-divider></s-divider>
      </s-box>
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
      >
        <s-grid
          gridTemplateColumns="1fr auto"
          alignItems="center"
          gap="base"
        >
          <s-box>
            <s-heading>Products & catalog</s-heading>
            <s-paragraph color="subdued">
              Product defaults, customer experience, and catalog display
              options.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right"></s-icon>
        </s-grid>
      </s-clickable>
      <s-box paddingInline="small-100">
        <s-divider></s-divider>
      </s-box>
      <s-clickable
        padding="small-100"
        href="#"
        accessibilityLabel="Manage customer support settings and help resources"
      >
        <s-grid
          gridTemplateColumns="1fr auto"
          alignItems="center"
          gap="base"
        >
          <s-box>
            <s-heading>Customer support</s-heading>
            <s-paragraph color="subdued">
              Support settings, help resources, and customer service
              tools.
            </s-paragraph>
          </s-box>
          <s-icon type="chevron-right"></s-icon>
        </s-grid>
      </s-clickable>
    </s-box>
  </s-section>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
