---
title: Spinner
description: >-
  Displays an animated indicator showing users that content or actions are
  loading. Use to communicate ongoing processes, such as fetching data from a
  server. For loading states on buttons, use the “loading” property on the
  Button component instead.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/feedback-and-status-indicators/spinner
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/feedback-and-status-indicators/spinner.md
---

# Spinner

Displays an animated indicator showing users that content or actions are loading. Use to communicate ongoing processes, such as fetching data from a server. For loading states on buttons, use the “loading” property on the Button component instead.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose of the progress. When set, it will be announced to users using assistive technologies and will provide them with more context. Providing an `accessibilityLabel` is recommended if there is no accompanying text describing that something is loading.

* **size**

  **"base" | "large" | "large-100"**

  **Default: 'base'**

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-spinner accessibilityLabel="Loading" size="large-100" />
  ```

  ##### html

  ```html
  <s-spinner accessibilityLabel="Loading" size="large-100"></s-spinner>
  ```

* #### Basic usage

  ##### Description

  Standard loading spinner with accessibility label for screen readers.

  ##### jsx

  ```jsx
  <s-spinner accessibilityLabel="Loading content" />
  ```

  ##### html

  ```html
  <s-spinner accessibilityLabel="Loading content"></s-spinner>
  ```

* #### Loading state in section

  ##### Description

  Centered loading indicator with text in a section layout for content loading states.

  ##### jsx

  ```jsx
  <s-stack alignItems="center" gap="base" padding="large">
    <s-spinner accessibilityLabel="Loading products" size="large" />
    <s-text>Loading products...</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack alignItems="center" gap="base" padding="large">
    <s-spinner accessibilityLabel="Loading products" size="large"></s-spinner>
    <s-text>Loading products...</s-text>
  </s-stack>
  ```

* #### Inline loading with text

  ##### Description

  Compact inline loading indicator for form submissions and quick actions.

  ##### jsx

  ```jsx
  <s-stack direction="inline" alignItems="center" gap="small">
    <s-spinner accessibilityLabel="Saving" />
    <s-text>Saving...</s-text>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" alignItems="center" gap="small">
    <s-spinner accessibilityLabel="Saving"></s-spinner>
    <s-text>Saving...</s-text>
  </s-stack>
  ```

## Best practices

* Use to notify merchants that their action is being processed
* Don't use for entire page loads
