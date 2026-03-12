---
title: Forms
description: >-
  Enable automatic save bar integration for HTML forms by adding the
  `data-save-bar` attribute to your form element. When form data changes, a save
  bar automatically appears, prompting users to save or discard their changes.


  Alternatively, use the global `shopify.saveBar` API for programmatic control
  over the save bar behavior. Programmatic control of the save bar is available
  as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and
  `shopify.saveBar.toggle()`.


  **Note:** The save bar functionality requires the full App Bridge UI library
  to be loaded via a [script tag](/docs/api/app-home/using-polaris-components).
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/forms'
  md: 'https://shopify.dev/docs/api/app-home/app-bridge-web-components/forms.md'
---

# Forms

Enable automatic save bar integration for HTML forms by adding the `data-save-bar` attribute to your form element. When form data changes, a save bar automatically appears, prompting users to save or discard their changes.

Alternatively, use the global `shopify.saveBar` API for programmatic control over the save bar behavior. Programmatic control of the save bar is available as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and `shopify.saveBar.toggle()`.

**Note:** The save bar functionality requires the full App Bridge UI library to be loaded via a [script tag](https://shopify.dev/docs/api/app-home/using-polaris-components).

## Enable save bar on forms

Simply add `data-save-bar` to your `<form>` element:

```html
<form data-save-bar>
  <!-- Your form fields -->
</form>
```

* **data-discard-confirmation**

  **boolean**

* **data-save-bar**

  **boolean**

* **onreset**

  **(event: Event) => void**

* **onsubmit**

  **(event: SubmitEvent) => void**

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/app-bridge-web-components/forms-alt-BR0YaM5v.png)

### Examples

* #### Form with automatic save bar

  ##### Default

  ```html
  <form data-save-bar>
    <s-text-field
      label="Product Title"
      name="title"
      required
    ></s-text-field>

    <s-text-area
      label="Description"
      name="description"
      rows="4"
    ></s-text-area>

    <s-text-field
      label="Price"
      name="price"
      type="number"
      step="0.01"
      min="0"
    ></s-text-field>
  </form>
  ```

* #### Simple form with save bar

  ##### Description

  Basic form with automatic save bar functionality.

  ##### Default

  ```html
  <form data-save-bar>
    <s-text-field
      label="Product Title"
      name="title"
      required
    ></s-text-field>

    <s-text-area
      label="Description"
      name="description"
      rows="4"
    ></s-text-area>

    <s-text-field
      label="Price"
      name="price"
      type="number"
      step="0.01"
      min="0"
    ></s-text-field>
  </form>
  ```

* #### Programmatic save bar control

  ##### Description

  Using the programmatic API for custom save logic.

  ##### Default

  ```html
  <form id="custom-form">
    <s-text-field
      id="settings-name"
      label="Store Name"
    ></s-text-field>

    <s-checkbox
      id="settings-notifications"
      label="Enable email notifications"
    ></s-checkbox>
  </form>

  <script>
    // Track form changes manually
    const form = document.getElementById('custom-form');
    let hasChanges = false;

    form.addEventListener('input', () => {
      if (!hasChanges) {
        hasChanges = true;
        // Show save bar programmatically
        shopify.saveBar.show({
          onSave: async () => {
            // Custom save logic
            console.log('Saving form data...');
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            hasChanges = false;
            shopify.saveBar.hide();
          },
          onDiscard: () => {
            // Reset form
            form.reset();
            hasChanges = false;
            shopify.saveBar.hide();
          }
        });
      }
    });
  </script>
  ```

* #### Form with onsubmit and onreset events

  ##### Description

  Using the onsubmit and onreset events to handle form submission and reset.

  ##### Default

  ```html
  <form
    data-save-bar
    onsubmit="console.log('submit');"
    onreset="console.log('reset');"
  >
    <s-text-field label="Name" name="name"></s-text-field>
    <s-button type="submit">Submit</s-button>
    <s-button type="reset">Reset</s-button>
  </form>
  ```

## Related

[API - Save Bar](https://shopify.dev/docs/api/app-home/apis/save-bar)
