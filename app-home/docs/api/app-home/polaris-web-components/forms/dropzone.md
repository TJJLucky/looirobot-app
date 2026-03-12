---
title: DropZone
description: >-
  Lets users upload files through drag-and-drop functionality into a designated
  area on a page, or by activating a button.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/dropzone'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/dropzone.md
---

# Drop​Zone

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.

## Properties

* **accept**

  **string**

  **Default: ''**

  A string representing the types of files that are accepted by the drop zone. This string is a comma-separated list of unique file type specifiers which can be one of the following:

  * A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
  * A valid MIME type string with no extensions

  If omitted, all file types are accepted.

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the item. When set, it will be announced to buyers using assistive technologies and will provide them with more context.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **files**

  **File\[]**

  **Default: \[]**

  An array of File objects representing the files currently selected by the user.

  This property is read-only and cannot be directly modified. To clear the selected files, set the `value` prop to an empty string or null.

* **label**

  **string**

  Content to use as the field label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **multiple**

  **boolean**

  **Default: false**

  Whether multiple files can be selected or dropped at once.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  **Default: ''**

  This sets the input value for a file type, which cannot be set programatically, so it can only be reset.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **change**

  **CallbackEventListener\<typeof tagName$K>**

* **droprejected**

  **CallbackEventListener\<typeof tagName$K>**

* **input**

  **CallbackEventListener\<typeof tagName$K>**

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
  <s-drop-zone
    label="Upload"
    accessibilityLabel="Upload image of type jpg, png, or gif"
    accept=".jpg,.png,.gif"
    multiple
    onInput={(event) => console.log('onInput', event.currentTarget?.value)}
    onChange={(event) => console.log('onChange', event.currentTarget?.value)}
    onDropRejected={(event) => console.log('onDropRejected', event.currentTarget?.value)}
   />
  ```

  ##### html

  ```html
  <s-drop-zone
    label="Upload"
    accessibilityLabel="Upload image of type jpg, png, or gif"
    accept=".jpg,.png,.gif"
    multiple
    onInput="console.log('onInput', event.currentTarget?.value)"
    onChange="console.log('onChange', event.currentTarget?.value)"
    onDropRejected="console.log('onDropRejected', event.currentTarget?.value)"
  ></s-drop-zone>
  ```

* #### Basic usage

  ##### Description

  Demonstrates a basic drop zone that allows multiple file uploads with a simple label.

  ##### jsx

  ```jsx
  <s-drop-zone label="Drop files to upload" multiple />
  ```

  ##### html

  ```html
  <s-drop-zone label="Drop files to upload" multiple></s-drop-zone>
  ```

* #### Image upload

  ##### Description

  Shows a drop zone configured specifically for uploading multiple image files.

  ##### jsx

  ```jsx
  <s-drop-zone accept="image/*" label="Upload images" multiple />
  ```

  ##### html

  ```html
  <s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>
  ```

* #### With required field

  ##### Description

  Illustrates a drop zone when the file upload is required.

  ##### jsx

  ```jsx
  <s-drop-zone name="file" required label="Upload file" />
  ```

  ##### html

  ```html
  <s-drop-zone name="file" required label="Upload file"></s-drop-zone>
  ```

* #### Disabled state

  ##### Description

  Displays a drop zone in a disabled state, preventing file uploads.

  ##### jsx

  ```jsx
  <s-drop-zone label="Upload not available" disabled />
  ```

  ##### html

  ```html
  <s-drop-zone label="Upload not available" disabled></s-drop-zone>
  ```

* #### File type restrictions

  ##### Description

  Demonstrates restricting file uploads to specific document types like PDF and DOC.

  ##### jsx

  ```jsx
  <s-drop-zone
    accept=".pdf,.doc,.docx"
    label="Upload documents"
    multiple
   />
  ```

  ##### html

  ```html
  <s-drop-zone
    accept=".pdf,.doc,.docx"
    label="Upload documents"
    multiple
  ></s-drop-zone>
  ```

* #### With error state

  ##### Description

  Shows a drop zone with an error message, useful for indicating file upload validation issues.

  ##### jsx

  ```jsx
  <s-drop-zone
    label="Upload file"
    error="File size must be less than 5mb"
   />
  ```

  ##### html

  ```html
  <s-drop-zone
    label="Upload file"
    error="File size must be less than 5mb"
  ></s-drop-zone>
  ```

* #### With accessibility options

  ##### Description

  Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.

  ##### jsx

  ```jsx
  <s-drop-zone
    label="Upload files"
    accessibilityLabel="Upload files using drag and drop or file selector"
    labelAccessibilityVisibility="exclusive"
    multiple
   />
  ```

  ##### html

  ```html
  <s-drop-zone
    label="Upload files"
    accessibilityLabel="Upload files using drag and drop or file selector"
    labelAccessibilityVisibility="exclusive"
    multiple
  ></s-drop-zone>
  ```
