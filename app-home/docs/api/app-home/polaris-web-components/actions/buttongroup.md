---
title: ButtonGroup
description: Displays multiple buttons in a layout.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/buttongroup
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/buttongroup.md
---

# Button​Group

Displays multiple buttons in a layout.

## Properties

* **accessibilityLabel**

  **string**

  Label for the button group that describes the content of the group for screen reader users to understand what's included.

* **gap**

  **"base" | "none"**

  **Default: 'base'**

  The gap between elements.

## Slots

* **children**

  **HTMLElement**

  The content of the ButtonGroup.

* **primary-action**

  **HTMLElement**

  The primary action button for the group. Accepts a single Button element with a `variant` of `primary`. Cannot be used when gap="none".

* **secondary-actions**

  **HTMLElement**

  Secondary action buttons for the group. Accepts Button or PressButton elements with a `variant` of `secondary` or `auto`.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="primary-action">Save</s-button>
    <s-button slot="secondary-actions">Cancel</s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="primary-action">Save</s-button>
    <s-button slot="secondary-actions">Cancel</s-button>
  </s-button-group>
  ```

* #### Basic usage

  ##### Description

  Standard button group with cancel and primary action for form workflows.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="primary-action" variant="primary">
      Save
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="primary-action" variant="primary">Save</s-button>
  </s-button-group>
  ```

* #### Bulk action buttons

  ##### Description

  Action buttons for selected items with destructive option.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions">Archive</s-button>
    <s-button slot="secondary-actions">Export</s-button>
    <s-button slot="secondary-actions" tone="critical">
      Delete
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions">Archive</s-button>
    <s-button slot="secondary-actions">Export</s-button>
    <s-button slot="secondary-actions" tone="critical">Delete</s-button>
  </s-button-group>
  ```

* #### Form action buttons

  ##### Description

  Typical form completion actions with clear visual hierarchy.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="primary-action" variant="primary">
      Save product
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="primary-action" variant="primary">Save product</s-button>
  </s-button-group>
  ```

* #### Buttons with icons

  ##### Description

  Icon-labeled buttons for common actions.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions" icon="duplicate">
      Duplicate
    </s-button>
    <s-button slot="secondary-actions" icon="archive">
      Archive
    </s-button>
    <s-button slot="secondary-actions" icon="delete" tone="critical">
      Delete
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions" icon="duplicate">Duplicate</s-button>
    <s-button slot="secondary-actions" icon="archive">Archive</s-button>
    <s-button slot="secondary-actions" icon="delete" tone="critical">
      Delete
    </s-button>
  </s-button-group>
  ```

* #### Segmented appearance

  ##### Description

  Tightly grouped buttons for view switching and filter options.

  ##### jsx

  ```jsx
  <s-button-group gap="none">
    <s-button slot="secondary-actions">Day</s-button>
    <s-button slot="secondary-actions">Week</s-button>
    <s-button slot="secondary-actions">Month</s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group gap="none">
    <s-button slot="secondary-actions">Day</s-button>
    <s-button slot="secondary-actions">Week</s-button>
    <s-button slot="secondary-actions">Month</s-button>
  </s-button-group>
  ```

* #### Destructive actions pattern

  ##### Description

  Confirmation dialog style with cancel option and destructive action.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="secondary-actions" tone="critical">
      Delete product
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions">Cancel</s-button>
    <s-button slot="secondary-actions" tone="critical">Delete product</s-button>
  </s-button-group>
  ```

## Useful for

* Accessing related actions in a consistent layout
* Making secondary actions visible alongside primary actions

## Best practices

* Group together related calls to action
* Avoid too many actions that may cause uncertainty
* Consider how buttons will work on small screens
