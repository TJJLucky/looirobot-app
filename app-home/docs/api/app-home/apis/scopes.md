---
title: Scopes
description: >-
  The Scopes API provides the ability to dynamically manage your access scopes
  within an embedded context.

    > Tip:
    > To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to [manage access scopes](/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).  
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/scopes'
  md: 'https://shopify.dev/docs/api/app-home/apis/scopes.md'
---

# Scopes

The Scopes API provides the ability to dynamically manage your access scopes within an embedded context.

**Tip:** To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to \<a href="/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes">manage access scopes\</a>.

## Scopes

Provides utilities to query, request, and revoke access scopes for the app using the Admin API.

* **query**

  **() => Promise\<ScopesDetail>**

  **required**

  Queries Shopify for the scopes for this app on this shop

* **request**

  **(scopes: string\[]) => Promise\<ScopesRequestResponse>**

  **required**

  Requests the merchant to grant the provided scopes for this app on this shop

  This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.

* **revoke**

  **(scopes: string\[]) => Promise\<ScopesRevokeResponse>**

  **required**

  Revokes the provided scopes from this app on this shop

### ScopesDetail

* granted

  The scopes that have been granted on the shop for this app

  ```ts
  string[]
  ```

* optional

  The optional scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

* required

  The required scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

### ScopesRequestResponse

* detail

  ```ts
  ScopesDetail
  ```

* result

  ```ts
  UserResult
  ```

### UserResult

\`UserResult\` represents the results of a user responding to a scopes request, i.e. a merchant user’s action taken when presented with a grant modal.

```ts
'granted-all' | 'declined-all'
```

### ScopesRevokeResponse

* detail

  ```ts
  ScopesDetail
  ```

Examples

### Examples

* #### Query access scopes granted to the app on this store

  ##### Default

  ```js
  const { granted } = await shopify.scopes.query();
  ```

* #### Request the user to grant access to the \`read\_products\` scope

  ##### Default

  ```js
  const response = await shopify.scopes.request(['read_products', 'write_discounts']);

  if (response.result === 'granted-all') {
    // merchant has been granted access — continue
    ...
  }
  else if (response.result === 'declined-all') {
    // merchant has declined access — handle accordingly
    ...
  }
  ```

* #### Revoke the granted access to the \`read\_products\` scope

  ##### Default

  ```js
  await shopify.scopes.revoke(['read_products']);
  ```

## Related

[Reference - Managing Access Scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes)

[API - Remix Scopes API](https://shopify.dev/docs/api/shopify-app-remix/v3/apis/scopes)
