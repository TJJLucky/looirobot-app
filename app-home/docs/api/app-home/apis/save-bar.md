---
title: Save Bar
description: >-
  The Save Bar API is used to indicate that a form on the current page has
  unsaved information. It can be used in 2 ways:


  1. It is automatically configured when you provide the
  <code>data-save-bar</code> attribute to a [<code>form</code>
  element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) and
  will display the save bar when there are unsaved changes. The
  [<code>submit</code>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
  event fires when the form is submitted or when the Save button is pressed. The
  [<code>reset</code>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event)
  event fires when the form is reset or when the Discard button is pressed,
  which discards all unsaved changes in the form.


  2. It can be controlled declaratively through the `ui-save-bar` element. For
  more information, refer to the [`ui-save-bar`
  component](/docs/api/app-bridge-library/web-components/ui-save-bar).
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/save-bar'
  md: 'https://shopify.dev/docs/api/app-home/apis/save-bar.md'
---

# Save Bar

The Save Bar API is used to indicate that a form on the current page has unsaved information. It can be used in 2 ways:

1. It is automatically configured when you provide the `data-save-bar` attribute to a [`form` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) and will display the save bar when there are unsaved changes. The [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) event fires when the form is submitted or when the Save button is pressed. The [`reset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event) event fires when the form is reset or when the Discard button is pressed, which discards all unsaved changes in the form.

2. It can be controlled declaratively through the `ui-save-bar` element. For more information, refer to the [`ui-save-bar` component](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-save-bar).

## saveBar

The `saveBar` API provides a `show` method to display a save bar, a `hide` method to hide a save bar, and a `toggle` method to toggle the visibility of a save bar. These are used in conjunction with the `ui-save-bar` element. They are alternatives to the `show`, `hide`, and `toggle` instance methods.

* **hide**

  **(id: string) => Promise\<void>**

  Hides the save bar element. An alternative to the `hide` instance method on the `ui-save-bar` element.

* **leaveConfirmation**

  **() => Promise\<void>**

  Checks if saveBar is shown. This promise resolves if the save bar is not shown. Uses this method before navigating away from the page only when you have a custom routing that is not anchor tag.

* **show**

  **(id: string) => Promise\<void>**

  Shows the save bar element. An alternative to the `show` instance method on the `ui-save-bar` element.

* **toggle**

  **(id: string) => Promise\<void>**

  Toggles the save bar element visibility. An alternative to the `toggle` instance method on the `ui-save-bar` element.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/contextual-save-bar-D20oMpjo.png)

### Examples

* #### Save Bar

  ##### Default

  ```html
  <form
    data-save-bar
    onsubmit="console.log('submit', new FormData(event.target)); event.preventDefault();"
  >
    <label>
      Name:
      <input name="username" />
    </label>
  </form>
  ```

* #### Subscribe to Discard

  ##### Description

  Subscribing to the \[\`HTMLFormElement: reset\`]\(https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset\_event) event

  ##### Event handler property

  ```html
  <form
    data-save-bar
    onreset="console.log('discarding')"
  >
    <label>
      Name:
      <input name="username" />
    </label>
  </form>
  ```

  ##### Event listener

  ```html
  <form data-save-bar>
    <label>
      Name:
      <input name="username" />
    </label>
  </form>

  <script>
    const form = document.querySelector('form');
    form.addEventListener('reset', (e) => {
      console.log('discarding');
    });
  </script>
  ```

* #### Subscribe to Save

  ##### Description

  Subscribing to the \[\`HTMLFormElement: submit\`]\(https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset\_event) event

  ##### Event handler property

  ```html
  <form
    data-save-bar
    onsubmit="console.log('submitting');"
  >
    <label>
      Name:
      <input name="username" />
    </label>
  </form>
  ```

  ##### Event listener

  ```html
  <form data-save-bar>
    <label>
      Name:
      <input name="username" />
    </label>
  </form>

  <script>
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      console.log('submitting');
    });
  </script>
  ```

* #### Showing a discard confirmation modal

  ##### Description

  Provide the \`data-discard-confirmation\` attribute to a \`form\` with the \`data-save-bar\` attribute to show a confirmation modal after the user clicks the Discard button of the save bar

  ##### HTML

  ```html
  <form
    data-save-bar
    data-discard-confirmation
    onsubmit="console.log('submit', new FormData(event.target)); event.preventDefault();"
  >
    <label>
      Name:
      <input name="username" />
    </label>
  </form>
  ```

* #### Showing the save bar with the saveBar API

  ##### Description

  Showing the save bar with the saveBar API

  ##### Default

  ```html
  <ui-save-bar id="my-save-bar"></ui-save-bar>

  <button onclick="shopify.saveBar.show('my-save-bar')">Show</button>
  <button onclick="shopify.saveBar.hide('my-save-bar')">Hide</button>
  ```

## Related

[Component - ui-save-bar](https://shopify.dev/docs/api/app-home/app-bridge-web-components/forms)

[Component - SaveBar](https://shopify.dev/docs/api/app-home/apis/save-bar)
