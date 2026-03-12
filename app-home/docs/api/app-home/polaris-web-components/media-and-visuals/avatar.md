---
title: Avatar
description: 'Show a user’s profile image or initials in a compact, visual element.'
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/avatar
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/avatar.md
---

# Avatar

Show a user’s profile image or initials in a compact, visual element.

## Properties

* **alt**

  **string**

  An alternative text that describes the avatar for the reader to understand what it is about or identify the user the avatar belongs to.

* **initials**

  **string**

  Initials to display in the avatar.

* **size**

  **"small" | "small-200" | "base" | "large" | "large-200"**

  **Default: 'base'**

  Size of the avatar.

* **src**

  **string**

  The URL or path to the image.

  Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **error**

  **OnErrorEventHandler**

* **load**

  **CallbackEventListener\<typeof tagName> | null**

### CallbackEventListener

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-avatar alt="John Doe" initials="JD" />
  ```

  ##### html

  ```html
  <s-avatar alt="John Doe" initials="JD"></s-avatar>
  ```

* #### Basic usage

  ##### Description

  Displays a customer avatar with their initials when no profile image is available.

  ##### jsx

  ```jsx
  <s-avatar initials="SC" alt="Sarah Chen" />
  ```

  ##### html

  ```html
  <s-avatar initials="SC" alt="Sarah Chen"></s-avatar>
  ```

* #### Default avatar (no props)

  ##### Description

  Shows a generic person icon placeholder when no user information is available.

  ##### jsx

  ```jsx
  <s-avatar alt="Customer" />
  ```

  ##### html

  ```html
  <s-avatar alt="Customer"></s-avatar>
  ```

* #### With image source and fallback

  ##### Description

  Loads a customer profile image with automatic fallback to initials if the image fails to load.

  ##### jsx

  ```jsx
  <s-avatar
    src="/customers/profile-123.jpg"
    initials="MR"
    alt="Maria Rodriguez"
    size="base"
   />
  ```

  ##### html

  ```html
  <s-avatar
    src="/customers/profile-123.jpg"
    initials="MR"
    alt="Maria Rodriguez"
    size="base"
  ></s-avatar>
  ```

* #### Size variations

  ##### Description

  Displays customer and merchant avatars in different sizes for various interface contexts.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-avatar initials="SC" alt="Store customer" size="small-200" />
    <s-avatar initials="MR" alt="Merchant representative" size="small" />
    <s-avatar initials="SM" alt="Store manager" size="base" />
    <s-avatar initials="SF" alt="Staff member" size="large" />
    <s-avatar initials="SO" alt="Store owner" size="large-200" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-avatar initials="SC" alt="Store customer" size="small-200"></s-avatar>
    <s-avatar initials="MR" alt="Merchant representative" size="small"></s-avatar>
    <s-avatar initials="SM" alt="Store manager" size="base"></s-avatar>
    <s-avatar initials="SF" alt="Staff member" size="large"></s-avatar>
    <s-avatar initials="SO" alt="Store owner" size="large-200"></s-avatar>
  </s-stack>
  ```

* #### Long initials handling

  ##### Description

  Shows how the component handles store and business names of varying lengths in commerce contexts.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-avatar initials="TC" alt="Tech customer" size="base" />
    <s-avatar initials="VIP" alt="VIP customer store" size="base" />
    <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-avatar initials="TC" alt="Tech customer" size="base"></s-avatar>
    <s-avatar initials="VIP" alt="VIP customer store" size="base"></s-avatar>
    <s-avatar initials="SHOP" alt="Shopify partner store" size="base"></s-avatar>
  </s-stack>
  ```

* #### Color consistency demo

  ##### Description

  Demonstrates that identical initials always receive the same color assignment across different store types.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-avatar initials="AB" alt="Apparel boutique" size="base" />
    <s-avatar initials="CD" alt="Coffee direct" size="base" />
    <s-avatar initials="EF" alt="Electronics franchise" size="base" />
    <s-avatar initials="AB" alt="Art books store" size="base" />
    {/* Note: Both AB avatars will have the same color */}
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-avatar initials="AB" alt="Apparel boutique" size="base"></s-avatar>
    <s-avatar initials="CD" alt="Coffee direct" size="base"></s-avatar>
    <s-avatar initials="EF" alt="Electronics franchise" size="base"></s-avatar>
    <s-avatar initials="AB" alt="Art books store" size="base"></s-avatar>
    <!-- Note: Both AB avatars will have the same color -->
  </s-stack>
  ```

* #### Error handling example

  ##### Description

  Shows automatic fallback to initials when customer or merchant profile images fail to load.

  ##### jsx

  ```jsx
  <s-avatar
    src="/invalid-customer-photo.jpg"
    initials="CS"
    alt="Customer support"
   />
  ```

  ##### html

  ```html
  <s-avatar
    src="/invalid-customer-photo.jpg"
    initials="CS"
    alt="Customer support"
  ></s-avatar>
  <!-- Will display "CS" initials when image fails -->
  ```

* #### In customer list context

  ##### Description

  Typical usage pattern for displaying customer avatars in order lists or customer listings.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/customers/merchant-alice.jpg"
        initials="AJ"
        alt="Alice's jewelry store"
        size="small"
       />
      <s-text>Alice's jewelry store</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
      <s-text>Bob's pet supplies</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/customers/charlie-cafe.jpg"
        initials="CC"
        alt="Charlie's coffee corner"
        size="small"
       />
      <s-text>Charlie's coffee corner</s-text>
    </s-stack>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/customers/merchant-alice.jpg"
        initials="AJ"
        alt="Alice's jewelry store"
        size="small"
      ></s-avatar>
      <s-text>Alice's jewelry store</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="BP" alt="Bob's pet supplies" size="small"></s-avatar>
      <s-text>Bob's pet supplies</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/customers/charlie-cafe.jpg"
        initials="CC"
        alt="Charlie's coffee corner"
        size="small"
      ></s-avatar>
      <s-text>Charlie's coffee corner</s-text>
    </s-stack>
  </s-stack>
  ```

* #### Staff member profiles

  ##### Description

  Shows staff member avatars in different admin interface contexts.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="large">
    <s-avatar
      src="/staff/manager-profile.jpg"
      initials="SM"
      alt="Store manager"
      size="large"
     />
    <s-avatar initials="CS" alt="Customer service rep" size="base" />
    <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="large">
    <s-avatar
      src="/staff/manager-profile.jpg"
      initials="SM"
      alt="Store manager"
      size="large"
    ></s-avatar>
    <s-avatar initials="CS" alt="Customer service rep" size="base"></s-avatar>
    <s-avatar initials="FT" alt="Fulfillment team lead" size="small"></s-avatar>
  </s-stack>
  ```

* #### With Section component

  ##### Description

  Demonstrates avatar integration with other admin-ui components in a merchant section layout.

  ##### jsx

  ```jsx
  <s-section>
    <s-stack gap="base">
      <s-stack direction="inline" gap="small">
        <s-avatar
          src="/merchants/premium-store.jpg"
          initials="PS"
          alt="Premium store"
          size="base"
         />
        <s-stack gap="small-400">
          <s-heading>Premium store</s-heading>
          <s-text color="subdued">Shopify Plus merchant</s-text>
        </s-stack>
      </s-stack>
      <s-text>Monthly revenue: $45,000</s-text>
    </s-stack>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-stack gap="base">
      <s-stack direction="inline" gap="small">
        <s-avatar
          src="/merchants/premium-store.jpg"
          initials="PS"
          alt="Premium store"
          size="base"
        ></s-avatar>
        <s-stack gap="small-400">
          <s-heading>Premium store</s-heading>
          <s-text color="subdued">Shopify Plus merchant</s-text>
        </s-stack>
      </s-stack>
      <s-text>Monthly revenue: $45,000</s-text>
    </s-stack>
  </s-section>
  ```

* #### Fulfillment partner avatars

  ##### Description

  Shows avatars for different types of fulfillment partners in the Shopify ecosystem.

  ##### jsx

  ```jsx
  <s-stack gap="small">
    <s-stack direction="inline" gap="small">
      <s-avatar initials="3P" alt="3PL partner" size="small" />
      <s-text>Third-party logistics</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="DS" alt="Dropship supplier" size="small" />
      <s-text>Dropship supplier</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="WH" alt="Warehouse hub" size="small" />
      <s-text>Warehouse hub</s-text>
    </s-stack>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="small">
    <s-stack direction="inline" gap="small">
      <s-avatar initials="3P" alt="3PL partner" size="small"></s-avatar>
      <s-text>Third-party logistics</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="DS" alt="Dropship supplier" size="small"></s-avatar>
      <s-text>Dropship supplier</s-text>
    </s-stack>
    <s-stack direction="inline" gap="small">
      <s-avatar initials="WH" alt="Warehouse hub" size="small"></s-avatar>
      <s-text>Warehouse hub</s-text>
    </s-stack>
  </s-stack>
  ```

## Useful for

* Identifying individuals or businesses
* Representing merchants, customers, or other entities visually
* Seeing visual indicators of people or businesses in lists, tables, or cards

## Best practices

* `small-200`: use in tightly condensed layouts
* `small`: use when the base size is too big for the layout, or when the avatar has less importance
* `base`: use as the default size
* `large`: use when an avatar is a focal point, such as on a single customer card
* `large-200`: use when extra emphasis is required

## Content guidelines

For avatars, we recommend using a format that describes what will show in the image:

* alt="Person's name" if avatar represents a person
* alt="Business's name" if avatar represents a business
* alt="" if the name appears next to the avatar as text
