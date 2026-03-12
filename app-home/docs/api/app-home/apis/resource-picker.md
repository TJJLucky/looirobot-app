---
title: Resource Picker
description: >-
  The Resource Picker API provides a search-based interface to help users find
  and select one or more products, collections, or product variants, and then
  returns the selected resources to your app. Both the app and the user must
  have the necessary permissions to access the resources selected.


  > Tip:

  > If you are picking app resources such as product reviews, email templates,
  or subscription options, you should use the [Picker](picker) API instead.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/resource-picker'
  md: 'https://shopify.dev/docs/api/app-home/apis/resource-picker.md'
---

# Resource Picker

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

**Tip:** If you are picking app resources such as product reviews, email templates, or subscription options, you should use the \<a href="picker">Picker\</a> API instead.

## Resource Picker Options

The `Resource Picker` accepts a variety of options to customize the picker's behavior.

* **type**

  **ResourceType**

  **required**

  The type of resource you want to pick.

* **action**

  **'add' | 'select'**

  **Default: 'add'**

  The action verb appears in the title and as the primary action of the Resource Picker.

* **filter**

  **Filters**

  Filters for what resource to show.

* **multiple**

  **boolean | number**

  **Default: false**

  Whether to allow selecting multiple items of a specific type or not. If a number is provided, then limit the selections to a maximum of that number of items. When type is Product, the user may still select multiple variants of a single product, even if multiple is false.

* **query**

  **string**

  **Default: ''**

  GraphQL initial search query for filtering resources available in the picker. See [search syntax](https://shopify.dev/docs/api/usage/search-syntax) for more information. This is displayed in the search bar when the picker is opened and can be edited by users. For most use cases, you should use the `filter.query` option instead which doesn't show the query in the UI.

* **selectionIds**

  **BaseResource\[]**

  **Default: \[]**

  Resources that should be preselected when the picker is opened.

### Filters

* archived

  Whether to show \[archived products]\(https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability). Only applies to the Product resource type picker. Setting this to undefined will show a badge on draft products.

  ```ts
  boolean | undefined
  ```

* draft

  Whether to show \[draft products]\(https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability). Only applies to the Product resource type picker. Setting this to undefined will show a badge on draft products.

  ```ts
  boolean | undefined
  ```

* hidden

  Whether to show hidden resources, referring to products that are not published on any sales channels.

  ```ts
  boolean
  ```

* query

  GraphQL initial search query for filtering resources available in the picker. See \[search syntax]\(https://shopify.dev/docs/api/usage/search-syntax) for more information. This is not displayed in the search bar when the picker is opened.

  ```ts
  string
  ```

* variants

  Whether to show product variants. Only applies to the Product resource type picker.

  ```ts
  boolean
  ```

### BaseResource

* id

  in GraphQL id format, ie 'gid://shopify/Product/1'

  ```ts
  string
  ```

* variants

  ```ts
  Resource[]
  ```

### Resource

* id

  in GraphQL id format, ie 'gid://shopify/Product/1'

  ```ts
  string
  ```

## Resource Picker Return Payload

The `Resource Picker` returns a Promise with an array of the selected resources. The object type in the array varies based on the provided `type` option.

If the picker is cancelled, the Promise resolves to `undefined`

* **when type is "collection":**

  **Collection\[]**

* **when type is "product":**

  **Product\[]**

* **when type is "variant":**

  **ProductVariant\[]**

### Collection

* availablePublicationCount

  ```ts
  number
  ```

* description

  ```ts
  string
  ```

* descriptionHtml

  ```ts
  string
  ```

* handle

  ```ts
  string
  ```

* id

  in GraphQL id format, ie 'gid://shopify/Product/1'

  ```ts
  string
  ```

* image

  ```ts
  Image | null
  ```

* productsAutomaticallySortedCount

  ```ts
  number
  ```

* productsCount

  ```ts
  number
  ```

* productsManuallySortedCount

  ```ts
  number
  ```

* publicationCount

  ```ts
  number
  ```

* ruleSet

  ```ts
  RuleSet | null
  ```

* seo

  ```ts
  { description?: string; title?: string; }
  ```

* sortOrder

  ```ts
  CollectionSortOrder
  ```

* storefrontId

  ```ts
  string
  ```

* templateSuffix

  ```ts
  string | null
  ```

* title

  ```ts
  string
  ```

* updatedAt

  ```ts
  string
  ```

### Image

* altText

  ```ts
  string
  ```

* id

  ```ts
  string
  ```

* originalSrc

  ```ts
  string
  ```

### RuleSet

* appliedDisjunctively

  ```ts
  boolean
  ```

* rules

  ```ts
  CollectionRule[]
  ```

### CollectionRule

* column

  ```ts
  string
  ```

* condition

  ```ts
  string
  ```

* relation

  ```ts
  string
  ```

### CollectionSortOrder

* Manual

  ```ts
  MANUAL
  ```

* BestSelling

  ```ts
  BEST_SELLING
  ```

* AlphaAsc

  ```ts
  ALPHA_ASC
  ```

* AlphaDesc

  ```ts
  ALPHA_DESC
  ```

* PriceDesc

  ```ts
  PRICE_DESC
  ```

* PriceAsc

  ```ts
  PRICE_ASC
  ```

* CreatedDesc

  ```ts
  CREATED_DESC
  ```

* Created

  ```ts
  CREATED
  ```

* MostRelevant

  ```ts
  MOST_RELEVANT
  ```

### Product

* availablePublicationCount

  ```ts
  number
  ```

* createdAt

  ```ts
  string
  ```

* descriptionHtml

  ```ts
  string
  ```

* handle

  ```ts
  string
  ```

* hasOnlyDefaultVariant

  ```ts
  boolean
  ```

* id

  in GraphQL id format, ie 'gid://shopify/Product/1'

  ```ts
  string
  ```

* images

  ```ts
  Image[]
  ```

* options

  ```ts
  { id: string; name: string; position: number; values: string[]; }[]
  ```

* productType

  ```ts
  string
  ```

* publishedAt

  ```ts
  string | null
  ```

* status

  ```ts
  ProductStatus
  ```

* tags

  ```ts
  string[]
  ```

* templateSuffix

  ```ts
  string | null
  ```

* title

  ```ts
  string
  ```

* totalInventory

  ```ts
  number
  ```

* totalVariants

  ```ts
  number
  ```

* tracksInventory

  ```ts
  boolean
  ```

* updatedAt

  ```ts
  string
  ```

* variants

  ```ts
  Partial<ProductVariant>[]
  ```

* vendor

  ```ts
  string
  ```

### ProductStatus

* Active

  ```ts
  ACTIVE
  ```

* Archived

  ```ts
  ARCHIVED
  ```

* Draft

  ```ts
  DRAFT
  ```

### ProductVariant

* availableForSale

  ```ts
  boolean
  ```

* barcode

  ```ts
  string | null
  ```

* compareAtPrice

  ```ts
  Money | null
  ```

* createdAt

  ```ts
  string
  ```

* displayName

  ```ts
  string
  ```

* fulfillmentService

  ```ts
  { id: string; inventoryManagement: boolean; productBased: boolean; serviceName: string; type: FulfillmentServiceType; }
  ```

* id

  in GraphQL id format, ie 'gid://shopify/Product/1'

  ```ts
  string
  ```

* image

  ```ts
  Image | null
  ```

* inventoryItem

  ```ts
  { id: string; }
  ```

* inventoryManagement

  ```ts
  ProductVariantInventoryManagement
  ```

* inventoryPolicy

  ```ts
  ProductVariantInventoryPolicy
  ```

* inventoryQuantity

  ```ts
  number | null
  ```

* position

  ```ts
  number
  ```

* price

  ```ts
  Money
  ```

* product

  ```ts
  Partial<Product>
  ```

* requiresShipping

  ```ts
  boolean
  ```

* selectedOptions

  ```ts
  { value?: string; }[]
  ```

* sku

  ```ts
  string | null
  ```

* taxable

  ```ts
  boolean
  ```

* title

  ```ts
  string
  ```

* updatedAt

  ```ts
  string
  ```

* weight

  ```ts
  number | null
  ```

* weightUnit

  ```ts
  WeightUnit
  ```

### Money

```ts
string
```

### FulfillmentServiceType

* GiftCard

  ```ts
  GIFT_CARD
  ```

* Manual

  ```ts
  MANUAL
  ```

* ThirdParty

  ```ts
  THIRD_PARTY
  ```

### ProductVariantInventoryManagement

* Shopify

  ```ts
  SHOPIFY
  ```

* NotManaged

  ```ts
  NOT_MANAGED
  ```

* FulfillmentService

  ```ts
  FULFILLMENT_SERVICE
  ```

### ProductVariantInventoryPolicy

* Deny

  ```ts
  DENY
  ```

* Continue

  ```ts
  CONTINUE
  ```

### WeightUnit

* Kilograms

  ```ts
  KILOGRAMS
  ```

* Grams

  ```ts
  GRAMS
  ```

* Pounds

  ```ts
  POUNDS
  ```

* Ounces

  ```ts
  OUNCES
  ```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/resource-picker-DeAqlQby.png)

### Examples

* #### Product picker

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({type: 'product'});
  ```

* #### Alternate resources

  ##### Description

  Alternate resources

  ##### Collection picker

  ```js
  const selected = await shopify.resourcePicker({type: 'collection'});
  ```

  ##### Product variant picker

  ```js
  const selected = await shopify.resourcePicker({type: 'variant'});
  ```

* #### Product picker with preselected resources

  ##### Description

  Preselected resources

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    selectionIds: [
      {
        id: 'gid://shopify/Product/12345',
        variants: [
          {
            id: 'gid://shopify/ProductVariant/1',
          },
        ],
      },
      {
        id: 'gid://shopify/Product/67890',
      },
    ],
  });
  ```

* #### Product picker with action verb

  ##### Description

  Action verb

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    action: 'select',
  });
  ```

* #### Product picker with multiple selection

  ##### Description

  Multiple selection

  ##### Unlimited selectable items

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    multiple: true,
  });
  ```

  ##### Maximum selectable items

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    multiple: 5,
  });
  ```

* #### Product picker with filters

  ##### Description

  Filters

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    filter: {
      hidden: true,
      variants: false,
      draft: false,
      archived: false,
    },
  });
  ```

* #### Product picker with a custom filter query

  ##### Description

  Filter query

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    filter: {
      query: 'Sweater',
    },
  });
  ```

* #### Product picker using returned selection payload

  ##### Description

  Selection

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({type: 'product'});

  if (selected) {
    console.log(selected);
  } else {
    console.log('Picker was cancelled by the user');
  }
  ```

* #### Product picker with initial query provided

  ##### Description

  Initial query

  ##### Default

  ```js
  const selected = await shopify.resourcePicker({
    type: 'product',
    query: 'Sweater',
  });
  ```
