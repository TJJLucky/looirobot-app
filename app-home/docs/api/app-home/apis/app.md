---
title: App
description: >-
  The App API provides information about the app and the status of its
  extensions.


  The API returns information about two types of extensions:

  - **UI extensions** (`ui_extension`): Admin, Checkout, Customer Account and
  Point of Sale extensions

  - **Theme app extensions** (`theme_app_extension`): Theme app blocks and
  embeds
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/app'
  md: 'https://shopify.dev/docs/api/app-home/apis/app.md'
---

# App

The App API provides information about the app and the status of its extensions.

The API returns information about two types of extensions:

* **UI extensions** (`ui_extension`): Admin, Checkout, Customer Account and Point of Sale extensions
* **Theme app extensions** (`theme_app_extension`): Theme app blocks and embeds

## Extensions method

The `app.extensions()` method asynchronously retrieves detailed information about the app's extensions, including which targets they are activated on.

It returns a Promise that resolves to an array of `ExtensionInfo` objects. Each object contains:

* `handle`: The unique identifier for the extension
* `type`: Either `'ui_extension'` or `'theme_app_extension'`
* `activations`: Activation records (shape varies by extension type)

**UI Extensions** have activations with a `target` field indicating the admin, checkout, customer account or point of sale target.

**Theme App Extensions** have activations representing individual blocks/embeds, each with:

* `handle`: Block/embed filename
* `name`: Display name from block schema
* `target`: Location type (`'section'`, `'head'`, `'body'`, or `'compliance_head'`)
* `status`: Availability status (`'active'`, `'available'`, or `'unavailable'`)
* `activations`: Array of theme-specific placements with `target` and `themeId`

The array may be empty if the app has no extensions.

* **activations**

  **Type extends "ui\_extension" ? UiExtensionActivation\[] : Type extends "theme\_app\_extension" ? ThemeExtensionActivation\[] : never**

  **required**

  List of activation records for the extension. The shape depends on the extension type:

  * UI extensions have activations with only `target`
  * Theme app extensions have nested activations representing blocks/embeds

* **handle**

  **string**

  **required**

  The unique identifier for the extension.

* **type**

  **Type**

  **required**

  The type of the extension.

### UiExtensionActivation

Represents an activation record for a UI extension (checkout, customer account).

* target

  The target identifier for the extension activation. Example: 'purchase.thank-you.block.render'

  ```ts
  string
  ```

### ThemeExtensionActivation

Represents an activation record for a theme app block or embed. Each block/embed within a theme app extension has its own handle, status, and activations.

* activations

  List of theme-specific activations for this block/embed. Contains where the block is actually placed within themes.

  ```ts
  ThemeAppBlockActivation[]
  ```

* handle

  The filename of the block/embed within the theme app extension (without extension). This is configured by the developer when creating the block file.

  ```ts
  string
  ```

* name

  The developer-configured display name of this block/embed, defined in the block's schema.

  ```ts
  string
  ```

* status

  The availability status of this block/embed.

  ```ts
  ActivationStatus
  ```

* target

  The target location type for this block/embed. - 'section' for blocks - 'head', 'body', or 'compliance\_head' for embeds

  ```ts
  ThemeAppBlockTarget | ThemeAppEmbedTarget
  ```

### ThemeAppBlockActivation

Represents a theme-specific activation for a block/embed. Contains the specific placement within a theme.

* target

  The target identifier for the block/embed placement within the theme. Example: 'template--product.alternate/main/my\_app\_product\_rating\_GPzUYy'

  ```ts
  string
  ```

* themeId

  The theme ID where this block/embed is activated. Format: gid://shopify/OnlineStoreTheme/{id}

  ```ts
  string
  ```

### ActivationStatus

The availability status of a theme app block or embed. - 'active': Block/embed is currently present in a theme. - 'available': Block/embed exists but is not currently active - 'unavailable': Block/embed exists but is disabled (e.g., via available\_if condition) Note that if a block is present in a theme but is not available, its status will be 'unavailable'.

```ts
'active' | 'available' | 'unavailable'
```

### ThemeAppBlockTarget

Target location for theme app blocks.

```ts
'section'
```

### ThemeAppEmbedTarget

Target location for theme app embeds.

```ts
'head' | 'body' | 'compliance_head'
```

Examples

### Examples

* #### Get Extensions Status

  ##### Default

  ```js
  const extensions = await shopify.app.extensions();

  // Example response:
  // [
  //   // UI extension
  //   {
  //     handle: 'checkout-extension-1',
  //     type: 'ui_extension',
  //     activations: [
  //       {target: 'purchase.thank-you.block.render'},
  //       {target: 'customer-account.order-status.block.render'},
  //     ],
  //   },
  //   // Theme app extension with nested blocks/embeds
  //   {
  //     handle: 'my-theme-app-extension',
  //     type: 'theme_app_extension',
  //     activations: [
  //       {
  //         target: 'section',
  //         handle: 'product-rating',
  //         name: 'Product Rating',
  //         status: 'active',
  //         activations: [
  //           {
  //             target: 'template--product.custom/main/my_app_product_rating_GPzUYy',
  //             themeId: 'gid://shopify/OnlineStoreTheme/123',
  //           },
  //         ],
  //       },
  //       {
  //         target: 'head',
  //         handle: 'analytics-widget',
  //         name: 'Analytics Widget',
  //         status: 'active',
  //         activations: [
  //           {target: 'theme', themeId: 'gid://shopify/OnlineStoreTheme/123'},
  //         ],
  //       },
  //     ],
  //   },
  // ];
  ```
