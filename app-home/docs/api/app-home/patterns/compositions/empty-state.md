---
title: Empty state
description: >
  Empty states are used when a list, table, or chart has no items or data to
  show. This is an opportunity to provide explanation or guidance to help
  merchants progress. The empty state component is intended for use when a full
  page in the admin is empty, and not for individual elements or areas in the
  interface.

    | Used to | Examples |
    | --- | --- |
    | Offer a clear next step when no data is present | Prompt merchants to create their first campaign |
    | Encourage activation of features | Suggest setting up a subscription plan when none exist |
    ---
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/compositions/empty-state'
  md: 'https://shopify.dev/docs/api/app-home/patterns/compositions/empty-state.md'
---

# Empty state

Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress. The empty state component is intended for use when a full page in the admin is empty, and not for individual elements or areas in the interface.

| Used to | Examples |
| - | - |
| Offer a clear next step when no data is present | Prompt merchants to create their first campaign |
| Encourage activation of features | Suggest setting up a subscription plan when none exist |

***

Examples

### Examples

* #### Empty state

  ##### jsx

  ```jsx
  <s-section accessibilityLabel="Empty state section">
    <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
      <s-box maxInlineSize="200px" maxBlockSize="200px">
        {/* aspectRatio should match the actual image dimensions (width/height) */}
        <s-image
          aspectRatio="1/0.5"
          src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
          alt="A stylized graphic of four characters, each holding a puzzle piece"
        />
      </s-box>
      <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
        <s-stack alignItems="center">
          <s-heading>Start creating puzzles</s-heading>
          <s-paragraph>
            Create and manage your collection of puzzles for players to enjoy.
          </s-paragraph>
        </s-stack>
        <s-button-group>
          <s-button
            slot="secondary-actions"
            aria-label="Learn more about creating puzzles"
          >
            {" "}
            Learn more{" "}
          </s-button>
          <s-button slot="primary-action" aria-label="Add a new puzzle">
            {" "}
            Create puzzle{" "}
          </s-button>
        </s-button-group>
      </s-grid>
    </s-grid>
  </s-section>
  ```

  ##### html

  ```html
  <s-section accessibilityLabel="Empty state section">
    <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
      <s-box maxInlineSize="200px" maxBlockSize="200px">
        <!-- aspectRatio should match the actual image dimensions (width/height) -->
        <s-image
          aspectRatio="1/0.5"
          src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
          alt="A stylized graphic of four characters, each holding a puzzle piece"
        />
      </s-box>
      <s-grid
        justifyItems="center"
        maxInlineSize="450px"
        gap="base"
      >
      <s-stack alignItems="center">
        <s-heading>Start creating puzzles</s-heading>
        <s-paragraph>
          Create and manage your collection of puzzles for players to enjoy.
        </s-paragraph>
      </s-stack>
      <s-button-group>
        <s-button slot="secondary-actions" aria-label="Learn more about creating puzzles"> Learn more </s-button>
        <s-button slot="primary-action" aria-label="Add a new puzzle"> Create puzzle </s-button>
      </s-button-group>
      </s-grid>
    </s-grid>
  </s-section>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
