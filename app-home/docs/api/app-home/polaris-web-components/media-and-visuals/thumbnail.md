---
title: Thumbnail
description: 'Display a small preview image representing content, products, or media.'
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/thumbnail
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/thumbnail.md
---

# Thumbnail

Display a small preview image representing content, products, or media.

## Properties

* **alt**

  **string**

  **Default: \`''\`**

  An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

* **size**

  **"small" | "small-200" | "small-100" | "base" | "large" | "large-100"**

  **Default: 'base'**

  Adjusts the size the product thumbnail image.

* **src**

  **string**

  The image source (either a remote URL or a local file resource).

  When the image is loading or no `src` is provided, a placeholder will be rendered.

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
  <s-thumbnail
    alt="White sneakers"
    src="https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg"
   />
  ```

  ##### html

  ```html
  <s-thumbnail
    alt="White sneakers"
    src="https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg"
  ></s-thumbnail>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.

  ##### jsx

  ```jsx
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product preview"
    size="base"
   />
  ```

  ##### html

  ```html
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product preview"
    size="base"
  ></s-thumbnail>
  ```

* #### Empty state

  ##### Description

  Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.

  ##### jsx

  ```jsx
  <s-thumbnail alt="No image available" size="base" />
  ```

  ##### html

  ```html
  <s-thumbnail alt="No image available" size="base"></s-thumbnail>
  ```

* #### Different sizes

  ##### Description

  Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.

  ##### jsx

  ```jsx
  <s-stack gap="large-100">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Small thumbnail"
      size="small-200"
     />
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Base thumbnail"
      size="base"
     />
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Large thumbnail"
      size="large"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="large-100">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Small thumbnail"
      size="small-200"
    ></s-thumbnail>
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Base thumbnail"
      size="base"
    ></s-thumbnail>
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Large thumbnail"
      size="large"
    ></s-thumbnail>
  </s-stack>
  ```

* #### With event handling

  ##### Description

  Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.

  ##### jsx

  ```jsx
  const [loading, setLoading] = useState(true)

  return (
    <s-stack direction="inline" gap="base" alignItems="center">
      <s-thumbnail
        src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
        alt="Product"
        size="small-200"
        onLoad={() => setLoading(false)}
      />
      <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
   </s-stack>
  )
  ```

  ##### html

  ```html
    <s-stack direction="inline" gap="base">
      <s-thumbnail
        src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
        alt="Product"
        size="small-200"
        onLoad="setLoading(false)"
      />
      <s-paragraph>Image loaded</s-paragraph>
   </s-stack>
  ```

## Useful for

* Identifying items visually in lists, tables, or cards
* Seeing a preview of images before uploading or publishing
* Distinguishing between similar items by their appearance
* Confirming the correct item is selected

## Best practices

* `small-200`: use in very small areas
* `small`: use in small areas
* `base`: use as the default size
* `large`: use when thumbnail is a focal point

## Content guidelines

Alternative text should be accurate, concise, and descriptive:

* Use "Image of", "Photo of" prefix
* Be primary visual content: "Image of a woman with curly brown hair smiling"
* Include relevant emotions: "Image of a woman laughing with her hand on her face"
