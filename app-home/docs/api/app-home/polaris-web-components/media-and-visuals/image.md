---
title: Image
description: >-
  Embeds an image within the interface and controls its presentation. Use to
  visually illustrate concepts, showcase products, or support user tasks and
  interactions.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/image
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/media-and-visuals/image.md
---

# Image

Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.

## Properties

* **accessibilityRole**

  **"none" | "presentation" | "img"**

  **Default: 'img'**

  Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

* **alt**

  **string**

  **Default: \`''\`**

  An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

* **aspectRatio**

  **\`${number}\` | \`${number}/${number}\` | \`${number}/ ${number}\` | \`${number} /${number}\` | \`${number} / ${number}\`**

  **Default: '1/1'**

  The aspect ratio of the image.

  The rendering of the image will depend on the `inlineSize` value:

  * `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
  * `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.

  For example, if the value is set as `50 / 100`, the getter returns `50 / 100`. If the value is set as `0.5`, the getter returns `0.5 / 1`.

* **border**

  **BorderShorthand**

  **Default: 'none' - equivalent to \`none base auto\`.**

  Set the border via the shorthand property.

  This can be a size, optionally followed by a color, optionally followed by a style.

  If the color is not specified, it will be `base`.

  If the style is not specified, it will be `auto`.

  Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.

* **borderColor**

  **"" | ColorKeyword**

  **Default: '' - meaning no override**

  Adjust the color of the border.

* **borderRadius**

  **MaybeAllValuesShorthandProperty\<BoxBorderRadii>**

  **Default: 'none'**

  Adjust the radius of the border.

* **borderStyle**

  **"" | MaybeAllValuesShorthandProperty\<BoxBorderStyles>**

  **Default: '' - meaning no override**

  Adjust the style of the border.

* **borderWidth**

  **"" | MaybeAllValuesShorthandProperty<"small" | "small-100" | "base" | "large" | "large-100" | "none">**

  **Default: '' - meaning no override**

  Adjust the width of the border.

* **inlineSize**

  **"auto" | "fill"**

  **Default: 'fill'**

  The displayed inline width of the image.

  * `fill`: the image will takes up 100% of the available inline size.
  * `auto`: the image will be displayed at its natural size.

* **loading**

  **"eager" | "lazy"**

  **Default: 'eager'**

  Determines the loading behavior of the image:

  * `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
  * `lazy`: Delays loading the image until it approaches a specified distance from the viewport.

* **objectFit**

  **"contain" | "cover"**

  **Default: 'contain'**

  Determines how the content of the image is resized to fit its container. The image is positioned in the center of the container.

* **sizes**

  **string**

  A set of media conditions and their corresponding sizes.

* **src**

  **string**

  The image source (either a remote URL or a local file resource).

  When the image is loading or no `src` is provided, a placeholder will be rendered.

* **srcSet**

  **string**

  A set of image sources and their width or pixel density descriptors.

  This overrides the `src` property.

### BorderShorthand

Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.

```ts
BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`
```

### BorderSizeKeyword

```ts
SizeKeyword | 'none'
```

### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

### BorderStyleKeyword

```ts
'none' | 'solid' | 'dashed' | 'dotted' | 'auto'
```

### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

### BoxBorderRadii

```ts
'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none'
```

### BoxBorderStyles

```ts
'auto' | 'none' | 'solid' | 'dashed'
```

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
  <s-image
    src="https://cdn.shopify.com/static/images/polaris/image-wc_src.png"
    alt="Four pixelated characters ready to build amazing Shopify apps"
    aspectRatio="59/161"
    inlineSize="auto"
   />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/images/polaris/image-wc_src.png"
    alt="Four pixelated characters ready to build amazing Shopify apps"
    aspectRatio="59/161"
    inlineSize="auto"
  ></s-image>
  ```

* #### Basic usage

  ##### Description

  Demonstrates the simplest implementation of an image component with a source and alt text.

  ##### jsx

  ```jsx
  <s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product image"
  ></s-image>
  ```

* #### Responsive layout with aspect ratio

  ##### Description

  Shows how to create a responsive image with a fixed 16:9 aspect ratio, set to cover the container, and loaded lazily.

  ##### jsx

  ```jsx
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Featured product"
    aspectRatio="16/9"
    objectFit="cover"
    loading="lazy"
   />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Featured product"
    aspectRatio="16/9"
    objectFit="cover"
    loading="lazy"
  ></s-image>
  ```

* #### Responsive images with srcset

  ##### Description

  Illustrates how to provide multiple image sources for different screen sizes and resolutions using srcSet and sizes attributes.

  ##### jsx

  ```jsx
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
            https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
    alt="Product detail"
    aspectRatio="16/9"
    objectFit="cover"
   />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
            https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
    alt="Product detail"
    aspectRatio="16/9"
    objectFit="cover"
  ></s-image>
  ```

* #### With border styling

  ##### Description

  Demonstrates how to apply border styling to an image, including width, style, color, and radius, using border-related properties.

  ##### jsx

  ```jsx
  <s-box inlineSize="300px">
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product thumbnail"
      borderWidth="large"
      borderStyle="solid"
      borderColor="strong"
      borderRadius="large"
      objectFit="cover"
      aspectRatio="1/1"
     />
  </s-box>
  ```

  ##### html

  ```html
  <s-box inlineSize="300px">
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product thumbnail"
      borderWidth="large"
      borderStyle="solid"
      borderColor="strong"
      borderRadius="large"
      objectFit="cover"
      aspectRatio="1/1"
    ></s-image>
  </s-box>
  ```

* #### Decorative image

  ##### Description

  Shows how to mark an image as decorative, which will make screen readers ignore the image by setting an empty alt text and presentation role.

  ##### jsx

  ```jsx
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt=""
    accessibilityRole="presentation"
    objectFit="cover"
   />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt=""
    accessibilityRole="presentation"
    objectFit="cover"
  ></s-image>
  ```

* #### Auto-sized image

  ##### Description

  Demonstrates an image with auto-sizing, which allows the image to adjust its size based on its container's width.

  ##### jsx

  ```jsx
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product image"
    inlineSize="auto"
   />
  ```

  ##### html

  ```html
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product image"
    inlineSize="auto"
  ></s-image>
  ```

* #### Within layout components

  ##### Description

  Shows how to use images within a grid layout, creating a consistent grid of images with equal size, aspect ratio, and styling.

  ##### jsx

  ```jsx
  <s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Main view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
     />
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Side view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
     />
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Detail view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
     />
  </s-grid>
  ```

  ##### html

  ```html
  <s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Main view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
    ></s-image>
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Side view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
    ></s-image>
    <s-image
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Detail view"
      aspectRatio="1/1"
      objectFit="cover"
      borderRadius="base"
      inlineSize="fill"
    ></s-image>
  </s-grid>
  ```

## Useful for

* Adding illustrations and photos.

## Best practices

* Use high-resolution, optimized images
* Use intentionally to add clarity and guide users

## Content guidelines

Alt text should be accurate, concise, and descriptive:

* Indicate it's an image: "Image of", "Photo of"
* Focus on description: "Image of a woman with curly brown hair smiling"
