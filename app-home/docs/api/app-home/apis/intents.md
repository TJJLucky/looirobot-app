---
title: Intents
description: >-
  The Intents API provides a way to invoke existing admin workflows for
  creating, editing, and managing Shopify resources.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/intents'
  md: 'https://shopify.dev/docs/api/app-home/apis/intents.md'
---

# Intents

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.

## invoke

The `invoke` API is a function that accepts either a string query or an options object describing the intent to invoke and returns a Promise that resolves to an activity handle for the workflow.

## Intent Format

Intents are invoked using a string query format: `${action}:${type},${value}`

Where:

* `action` - The operation to perform (`create` or `edit`)
* `type` - The resource type (e.g., `shopify/Product`)
* `value` - The resource identifier (only for edit actions)

## Supported Resources

### Article

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Article` | — | — |
| `edit` | `shopify/Article` | `gid://shopify/Article/{id}` | — |

### Catalog

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Catalog` | — | — |
| `edit` | `shopify/Catalog` | `gid://shopify/Catalog/{id}` | — |

### Collection

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Collection` | — | — |
| `edit` | `shopify/Collection` | `gid://shopify/Collection/{id}` | — |

### Customer

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Customer` | — | — |
| `edit` | `shopify/Customer` | `gid://shopify/Customer/{id}` | — |

### Discount

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Discount` | — | `{ type: 'amount-off-product' \| 'amount-off-order' \| 'buy-x-get-y' \| 'free-shipping' }` |
| `edit` | `shopify/Discount` | `gid://shopify/Discount/{id}` | — |

### Market

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Market` | — | — |
| `edit` | `shopify/Market` | `gid://shopify/Market/{id}` | — |

### Menu

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Menu` | — | — |
| `edit` | `shopify/Menu` | `gid://shopify/Menu/{id}` | — |

### Metafield Definition

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/MetafieldDefinition` | — | `{ ownerType: 'product' }` |
| `edit` | `shopify/MetafieldDefinition` | `gid://shopify/MetafieldDefinition/{id}` | `{ ownerType: 'product' }` |

### Metaobject

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Metaobject` | — | `{ type: 'shopify--color-pattern' }` |
| `edit` | `shopify/Metaobject` | `gid://shopify/Metaobject/{id}` | `{ type: 'shopify--color-pattern' }` |

### Metaobject Definition

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/MetaobjectDefinition` | — | — |
| `edit` | `shopify/MetaobjectDefinition` | — | `{ type: 'my_metaobject_definition_type' }` |

### Page

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Page` | — | — |
| `edit` | `shopify/Page` | `gid://shopify/Page/{id}` | — |

### Product

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/Product` | — | — |
| `edit` | `shopify/Product` | `gid://shopify/Product/{id}` | — |

### Product Variant

| Action | Type | Value | Data |
| - | - | - | - |
| `create` | `shopify/ProductVariant` | — | `{ productId: 'gid://shopify/Product/{id}' }` |
| `edit` | `shopify/ProductVariant` | `gid://shopify/ProductVariant/{id}` | `{ productId: 'gid://shopify/Product/{id}' }` |

> **Note**: To determine whether to use the `shopify/ProductVariant` `edit` intent or the `shopify/Product` `edit` intent, query the [`product.hasOnlyDefaultVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.hasOnlyDefaultVariant) field. If the product has only the default variant (`hasOnlyDefaultVariant` is `true`), use the `shopify/Product` `edit` intent.

* **invoke**

  **{ (query: IntentQuery): Promise\<IntentActivity>; (intentURL: string, options?: IntentQueryOptions): Promise\<IntentActivity>; }**

  Invoke an intent using the object syntax.

  Invoke an intent using the URL syntax.

  URL format: `action:type[,value][?params]`.

### IntentQuery

* action

  ```ts
  IntentAction
  ```

* data

  Additional data required for certain intent types. For example: - Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' } - ProductVariant creation requires { productId: 'gid://shopify/Product/123' } - Metaobject creation requires { type: 'shopify--color-pattern' }

  ```ts
  { [key: string]: unknown; }
  ```

* type

  ```ts
  IntentType
  ```

* value

  The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

  ```ts
  string
  ```

### IntentAction

The action to perform on a resource.

```ts
'create' | 'edit'
```

### IntentType

Supported resource types that can be targeted by intents.

```ts
'shopify/Article' | 'shopify/Catalog' | 'shopify/Collection' | 'shopify/Customer' | 'shopify/Discount' | 'shopify/Market' | 'shopify/Menu' | 'shopify/MetafieldDefinition' | 'shopify/Metaobject' | 'shopify/MetaobjectDefinition' | 'shopify/Page' | 'shopify/Product' | 'shopify/ProductVariant'
```

### IntentActivity

Activity handle for tracking intent workflow progress.

* complete

  A Promise that resolves when the intent workflow completes, returning the response.

  ```ts
  Promise<IntentResponse>
  ```

### IntentResponse

Result of an intent activity. Discriminated union representing all possible completion outcomes.

```ts
ClosedIntentResponse | SuccessIntentResponse | ErrorIntentResponse
```

### ClosedIntentResponse

User dismissed or closed the workflow without completing it.

* code

  ```ts
  'closed'
  ```

### SuccessIntentResponse

Successful intent completion.

* code

  ```ts
  'ok'
  ```

* data

  ```ts
  { [key: string]: unknown; }
  ```

### ErrorIntentResponse

Failed intent completion.

* code

  ```ts
  'error'
  ```

* issues

  ```ts
  Issue[]
  ```

* message

  ```ts
  string
  ```

### IntentQueryOptions

Options for invoking intents when using the query string format.

* data

  Additional data required for certain intent types. For example: - Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' } - ProductVariant creation requires { productId: 'gid://shopify/Product/123' } - Metaobject creation requires { type: 'shopify--color-pattern' }

  ```ts
  { [key: string]: unknown; }
  ```

* value

  The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

  ```ts
  string
  ```

## IntentAction

Supported actions that can be performed on resources.

* `create`: Opens a creation workflow for a new resource
* `edit`: Opens an editing workflow for an existing resource (requires `value` parameter)

**`'create' | 'edit'`**

## IntentType

Supported resource types that can be targeted by intents.

**`'shopify/Article' | 'shopify/Catalog' | 'shopify/Collection' | 'shopify/Customer' | 'shopify/Discount' | 'shopify/Market' | 'shopify/Menu' | 'shopify/MetafieldDefinition' | 'shopify/Metaobject' | 'shopify/MetaobjectDefinition' | 'shopify/Page' | 'shopify/Product' | 'shopify/ProductVariant'`**

## IntentQueryOptions

Options for invoking intents when using the query string format.

* **data**

  **{ \[key: string]: unknown; }**

  Additional data required for certain intent types. For example:

  * Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
  * ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
  * Metaobject creation requires { type: 'shopify--color-pattern' }

* **value**

  **string**

  The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

## IntentResponse

Response object returned when the intent workflow completes.

**`ClosedIntentResponse | SuccessIntentResponse | ErrorIntentResponse`**

### ClosedIntentResponse

* **code**

  **'closed'**

### ErrorIntentResponse

* **code**

  **'error'**

* **issues**

  **Issue\[]**

* **message**

  **string**

### SuccessIntentResponse

* **code**

  **'ok'**

* **data**

  **{ \[key: string]: unknown; }**

### ClosedIntentResponse

User dismissed or closed the workflow without completing it.

* code

  ```ts
  'closed'
  ```

### SuccessIntentResponse

Successful intent completion.

* code

  ```ts
  'ok'
  ```

* data

  ```ts
  { [key: string]: unknown; }
  ```

### ErrorIntentResponse

Failed intent completion.

* code

  ```ts
  'error'
  ```

* issues

  ```ts
  Issue[]
  ```

* message

  ```ts
  string
  ```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/intents-bqfuEvyn.png)

### Examples

* #### Creating a collection

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Collection');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Collection created:', response.data);
  }
  ```

* #### Create article

  ##### Description

  Create a new article. Opens the article creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Article');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Article created:', response.data);
  }
  ```

* #### Edit article

  ##### Description

  Edit an existing article. Requires an article GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Article', {
    value: 'gid://shopify/Article/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Article updated:', response.data);
  }
  ```

* #### Create catalog

  ##### Description

  Create a new catalog. Opens the catalog creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Catalog');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Catalog created:', response.data);
  }
  ```

* #### Edit catalog

  ##### Description

  Edit an existing catalog. Requires a catalog GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
    value: 'gid://shopify/Catalog/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Catalog updated:', response.data);
  }
  ```

* #### Create collection

  ##### Description

  Create a new collection. Opens the collection creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Collection');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Collection created:', response.data);
  }
  ```

* #### Edit collection

  ##### Description

  Edit an existing collection. Requires a collection GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Collection', {
    value: 'gid://shopify/Collection/987654321',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Collection updated:', response.data);
  }
  ```

* #### Create customer

  ##### Description

  Create a new customer. Opens the customer creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Customer');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Customer created:', response.data);
  }
  ```

* #### Edit customer

  ##### Description

  Edit an existing customer. Requires a customer GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Customer', {
    value: 'gid://shopify/Customer/456789123',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Customer updated:', response.data);
  }
  ```

* #### Create discount

  ##### Description

  Create a new discount. Opens the discount creation workflow. Requires a discount type.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Discount', {
    data: {type: 'amount-off-product'},
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Discount created:', response.data);
  }
  ```

* #### Edit discount

  ##### Description

  Edit an existing discount. Requires a discount GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Discount', {
    value: 'gid://shopify/Discount/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Discount updated:', response.data);
  }
  ```

* #### Create market

  ##### Description

  Create a new market. Opens the market creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Market');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Market created:', response.data);
  }
  ```

* #### Edit market

  ##### Description

  Edit an existing market. Requires a market GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Market', {
    value: 'gid://shopify/Market/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Market updated:', response.data);
  }
  ```

* #### Create menu

  ##### Description

  Create a new menu. Opens the menu creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Menu');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Menu created:', response.data);
  }
  ```

* #### Edit menu

  ##### Description

  Edit an existing menu. Requires a menu GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Menu', {
    value: 'gid://shopify/Menu/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Menu updated:', response.data);
  }
  ```

* #### Create metafield definition

  ##### Description

  Create a new metafield definition. Opens the metafield definition creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke(
    'create:shopify/MetafieldDefinition',
    {data: {ownerType: 'product'}},
  );

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metafield definition created:', response.data);
  }
  ```

* #### Edit metafield definition

  ##### Description

  Edit an existing metafield definition. Requires a metafield definition GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke(
    'edit:shopify/MetafieldDefinition',
    {
      value: 'gid://shopify/MetafieldDefinition/123456789',
      data: {ownerType: 'product'},
    },
  );

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metafield definition updated:', response.data);
  }
  ```

* #### Create metaobject

  ##### Description

  Create a new metaobject. Opens the metaobject creation workflow. Requires a type.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
    data: {type: 'shopify--color-pattern'},
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metaobject created:', response.data);
  }
  ```

* #### Edit metaobject

  ##### Description

  Edit an existing metaobject. Requires a metaobject GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
    value: 'gid://shopify/Metaobject/123456789',
    data: {type: 'shopify--color-pattern'},
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metaobject updated:', response.data);
  }
  ```

* #### Create metaobject definition

  ##### Description

  Create a new metaobject definition. Opens the metaobject definition creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke(
    'create:shopify/MetaobjectDefinition',
  );

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metaobject definition created:', response.data);
  }
  ```

* #### Edit metaobject definition

  ##### Description

  Edit an existing metaobject definition. Requires a metaobject definition GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke(
    'edit:shopify/MetaobjectDefinition',
    data: {type: 'my_metaobject_definition_type'},
  );

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Metaobject definition updated:', response.data);
  }
  ```

* #### Create page

  ##### Description

  Create a new page. Opens the page creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Page');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Page created:', response.data);
  }
  ```

* #### Edit page

  ##### Description

  Edit an existing page. Requires a page GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Page', {
    value: 'gid://shopify/Page/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Page updated:', response.data);
  }
  ```

* #### Create product

  ##### Description

  Create a new product. Opens the product creation workflow.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/Product');

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Product created:', response.data);
  }
  ```

* #### Edit product

  ##### Description

  Edit an existing product. Requires a product GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/Product', {
    value: 'gid://shopify/Product/123456789',
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Product updated:', response.data);
  }
  ```

* #### Create variant

  ##### Description

  Create a new product variant. Opens the variant creation workflow. Requires a product ID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
    data: {productId: 'gid://shopify/Product/123456789'},
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Product variant created:', response.data);
  }
  ```

* #### Edit variant

  ##### Description

  Edit an existing product variant. Requires a variant GID.

  ##### Default

  ```js
  const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
    value: 'gid://shopify/ProductVariant/123456789',
    data: {productId: 'gid://shopify/Product/123456789'},
  });

  const response = await activity.complete;

  if (response.code === 'ok') {
    console.log('Product variant updated:', response.data);
  }
  ```
