---
title: User
description: >-
  The User API lets you asynchronously retrieve information about the currently
  logged-in user.


  The API returns a `Promise`, which contains user information, and the payload
  varies based on whether the user is logged into the Shopify admin or Shopify
  POS.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/user'
  md: 'https://shopify.dev/docs/api/app-home/apis/user.md'
---

# User

The User API lets you asynchronously retrieve information about the currently logged-in user.

The API returns a `Promise`, which contains user information, and the payload varies based on whether the user is logged into the Shopify admin or Shopify POS.

## Admin User()

The `user` API, which is available on the `shopify` global, asynchronously retrieves information about the user that's logged into the Shopify admin.

### Returns

* **Promise\<AdminUser>**

### AdminUser

* accountAccess

  The account access level of the logged-in user

  ```ts
  string
  ```

## POS User()

The `user` API, which is available on the `shopify` global, asynchronously retrieves information about the current user logged into Shopify POS.

### Returns

* **Promise\<POSUser>**

### POSUser

* accountAccess

  The account access level of the logged-in user

  ```ts
  string
  ```

* accountType

  The user's account type.

  ```ts
  string
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* firstName

  The user's first name.

  ```ts
  string
  ```

* id

  The ID of the user's staff.

  ```ts
  number
  ```

* lastName

  The user's last name.

  ```ts
  string
  ```

Examples

### Examples

* #### User

  ##### Default

  ```js
  await shopify.user();
  ```
