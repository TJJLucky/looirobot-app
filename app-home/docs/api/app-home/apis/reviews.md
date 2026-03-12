---
title: Reviews
description: |2-

    The Reviews API allows you to request an app review modal overlaid on your embedded app in the Shopify admin. You control when to request a modal, but it will only be displayed to the merchant if [certain conditions](#rate-limits-restrictions) are met.
    
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/reviews'
  md: 'https://shopify.dev/docs/api/app-home/apis/reviews.md'
---

# Reviews

The Reviews API allows you to request an app review modal overlaid on your embedded app in the Shopify admin. You control when to request a modal, but it will only be displayed to the merchant if [certain conditions](#rate-limits-restrictions) are met.

## Reviews

The Reviews API provides a `request()` method that allows you to request an app review modal.

* **request**

  **() => Promise\<ReviewRequestResponse>**

  **required**

### ReviewRequestResponse

```ts
ReviewRequestSuccessResponse | ReviewRequestDeclinedResponse
```

### ReviewRequestSuccessResponse

* code

  ```ts
  'success'
  ```

* message

  ```ts
  'Review modal shown successfully'
  ```

* success

  ```ts
  true
  ```

### ReviewRequestDeclinedResponse

* code

  ```ts
  ReviewRequestDeclinedCode
  ```

* message

  ```ts
  string
  ```

* success

  ```ts
  false
  ```

### ReviewRequestDeclinedCode

```ts
'mobile-app' | 'already-reviewed' | 'annual-limit-reached' | 'cooldown-period' | 'merchant-ineligible' | 'recently-installed' | 'already-open' | 'open-in-progress' | 'cancelled'
```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/reviews-DTX8hadd.png)

### Examples

* #### Request an app review modal

  ##### Default

  ```js
  try {
    const result = await shopify.reviews.request();
    if (!result.success) {
      console.log(`Review modal not displayed. Reason: ${result.code}: ${result.message}`);
    }
    // if result.success *is* true, then review modal is displayed
  } catch (error) {
    console.error('Error requesting review:', error);
  }
  ```

## Response codes and messages

A request to the Reviews API will return one of the following responses:

| success | code | message |
| - | - | - |
| `true` | `success` | Review modal displayed |
| `false` | `mobile-app` | Review modal not supported on mobile devices |
| `false` | `already-reviewed` | Merchant already reviewed this app |
| `false` | `annual-limit-reached` | Review modal already displayed the maximum number of times within the last 365 days |
| `false` | `cooldown-period` | Review modal already displayed within the last 60 days |
| `false` | `merchant-ineligible` | Merchant isn't eligible to review this app |
| `false` | `recently-installed` | Merchant installed this app for less than 24 hours |
| `false` | `already-open` | Review modal is already open |
| `false` | `open-in-progress` | Review modal opening is already in progress |
| `false` | `cancelled` | Review modal opening was cancelled |

## Rate limits and restrictions

A review modal will only be displayed to the merchant if certain conditions are met. Be sure to follow the [recommended best practices](#best-practices) for requesting reviews.

### Rate limits

The Reviews API applies rate limits to ensure a good merchant experience and to prevent abuse. A review modal will only be displayed to a merchant:

* **Once** within any **60-day** period, and
* **Three** times within any **365-day** period.

### Restrictions

A review modal will never be displayed in these cases:

* The merchant already reviewed your app.
* The merchant is on a mobile device.
* The merchant is ineligible to leave a review.
* The merchant has installed your app for less than 24 hours

## Best practices for review requests

Because you can make only a [limited number](#rate-limits-restrictions) of requests for review, make sure to choose the right time:

* **Do** request a review at the end of a successful workflow.
* **Don't** request a review at any point that interrupts a merchant task.
* **Don't** request a review as soon as the merchant opens your app.
* **Don't** trigger a request with a button, link, or other call to action. Because the request might be rate-limited and the modal isn't guaranteed to display, your app UI would appear to be broken.

## Testing the Reviews API

You can use your development store to test the Reviews API, which bypasses the rate limits and restrictions. Reviews submitted from development stores are not published on the Shopify App Store.
