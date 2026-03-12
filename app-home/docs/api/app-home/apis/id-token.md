---
title: ID Token
description: >-
  The ID token API asynchronously retrieves an [OpenID Connect ID
  Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C) from
  Shopify that can be used to ensure that requests came from a Shopify
  authenticated user. See the [ID Token
  documentation](/docs/apps/auth/oauth/session-tokens) from more information.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/id-token'
  md: 'https://shopify.dev/docs/api/app-home/apis/id-token.md'
---

# ID Token

The ID token API asynchronously retrieves an [OpenID Connect ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C) from Shopify that can be used to ensure that requests came from a Shopify authenticated user. See the [ID Token documentation](https://shopify.dev/docs/apps/auth/oauth/session-tokens) from more information.

## ID Token()

The `idToken` API is available on the `shopify` global. It asynchronously retrieves an OpenID Connect ID Token from Shopify.

### Returns

* **Promise\<string>**

Examples

### Examples

* #### ID Token

  ##### Default

  ```js
  await shopify.idToken();
  ```
