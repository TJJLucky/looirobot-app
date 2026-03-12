---
title: Metrics card
description: >
  Metrics cards are used to highlight important numbers, statistics, or trends
  from your app, so merchants can quickly understand their activity and
  performance.
    
    
    | Used to | Examples |
    | --- | --- |
    | Show app-specific metrics | Email open rates, active subscribers |
    | Visualize user engagement | Social media followers, campaign clicks |
    ---
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/metrics-card'
  md: 'https://shopify.dev/docs/api/app-home/patterns/compositions/metrics-card.md'
---

# Metrics card

Metrics cards are used to highlight important numbers, statistics, or trends from your app, so merchants can quickly understand their activity and performance.

| Used to | Examples |
| - | - |
| Show app-specific metrics | Email open rates, active subscribers |
| Visualize user engagement | Social media followers, campaign clicks |

***

Examples

### Examples

* #### Metrics card

  ##### jsx

  ```jsx
  <s-section padding="base">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 400px) 1fr, 1fr auto 1fr auto 1fr"
      gap="small"
    >
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Total Designs</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>156</s-text>
            <s-badge tone="success" icon="arrow-up">
              {" "}
              12%{" "}
            </s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
      <s-divider direction="block" />
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Units Sold</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>2,847</s-text>
            <s-badge tone="warning">0%</s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
      <s-divider direction="block" />
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Return Rate</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>3.2%</s-text>
            <s-badge tone="critical" icon="arrow-down">
              {" "}
              0.8%{" "}
            </s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
    </s-grid>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="small">
      <s-grid
        gridTemplateColumns="@container (inline-size <= 400px) 1fr, 1fr auto 1fr auto 1fr"
        gap="small"
      >
        <s-clickable
          href=""
          paddingBlock="small-400"
          paddingInline="small-100"
          borderRadius="base"
        >
          <s-grid gap="small-300">
            <s-heading>Total Designs</s-heading>
            <s-stack direction="inline" gap="small-200">
              <s-text>156</s-text>
              <s-badge tone="success" icon="arrow-up"> 12% </s-badge>
            </s-stack>
          </s-grid>
        </s-clickable>
        <s-divider direction="block"></s-divider>
        <s-clickable
          href=""
          paddingBlock="small-400"
          paddingInline="small-100"
          borderRadius="base"
        >
          <s-grid gap="small-300">
            <s-heading>Units Sold</s-heading>
            <s-stack direction="inline" gap="small-200">
              <s-text>2,847</s-text>
              <s-badge tone="warning">0%</s-badge>
            </s-stack>
          </s-grid>
        </s-clickable>
        <s-divider direction="block"></s-divider>
        <s-clickable
          href=""
          paddingBlock="small-400"
          paddingInline="small-100"
          borderRadius="base"
        >
          <s-grid gap="small-300">
            <s-heading>Return Rate</s-heading>
            <s-stack direction="inline" gap="small-200">
              <s-text>3.2%</s-text>
              <s-badge tone="critical" icon="arrow-down"> 0.8% </s-badge>
            </s-stack>
          </s-grid>
        </s-clickable>
      </s-grid>
  </s-section>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
