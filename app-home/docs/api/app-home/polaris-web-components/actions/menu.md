---
title: Menu
description: Use Menu to display a list of actions that can be performed on a resource.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/actions/menu'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/actions/menu.md'
---

# Menu

Use Menu to display a list of actions that can be performed on a resource.

## Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the element. When set, it will be announced using assistive technologies and provide additional context.

## Slots

* **children**

  **HTMLElement**

  The Menu items.

  Only accepts `Button` and `Section` components.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="customer-menu">Edit customer</s-button>

    <s-menu id="customer-menu" accessibilityLabel="Customer actions">
      <s-button icon="merge">Merge customer</s-button>
      <s-button icon="incoming">Request customer data</s-button>
      <s-button icon="delete" tone="critical">
        Delete customer
      </s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-button icon="merge">Merge customer</s-button>
    <s-button icon="incoming">Request customer data</s-button>
    <s-button icon="delete" tone="critical">Delete customer</s-button>
  </s-menu>
  ```

* #### Basic Menu

  ##### Description

  Demonstrates a simple menu with basic action buttons and shows how to link it to a trigger button.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="product-menu">Product actions</s-button>

    <s-menu id="product-menu" accessibilityLabel="Product actions">
      <s-button icon="edit">Edit product</s-button>
      <s-button icon="duplicate">Duplicate product</s-button>
      <s-button icon="archive">Archive product</s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
  ```

* #### Menu with Icons

  ##### Description

  Illustrates a menu with icons for each action, providing visual context for different menu items and showing how to use the caret-down icon on the trigger button.

  ##### jsx

  ```jsx
  <>
    <s-button icon="caret-down" commandFor="actions-menu">
      More actions
    </s-button>

    <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
      <s-button icon="edit">Edit product</s-button>
      <s-button icon="duplicate">Duplicate product</s-button>
      <s-button icon="archive">Archive product</s-button>
      <s-button icon="delete" tone="critical">
        Delete product
      </s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button icon="caret-down" commandFor="actions-menu">More actions</s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">Delete product</s-button>
  </s-menu>
  ```

* #### Menu with Sections

  ##### Description

  Shows how to organize menu items into logical sections with headings, helping to group related actions and improve menu readability.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="organized-menu">Bulk actions</s-button>

    <s-menu id="organized-menu" accessibilityLabel="Organized menu">
      <s-section heading="Product actions">
        <s-button icon="edit">Edit selected</s-button>
        <s-button icon="duplicate">Duplicate selected</s-button>
        <s-button icon="archive">Archive selected</s-button>
      </s-section>
      <s-section heading="Export options">
        <s-button icon="export">Export as CSV</s-button>
        <s-button icon="print">Print barcodes</s-button>
      </s-section>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
  ```

* #### Menu with Links and Disabled Items

  ##### Description

  Demonstrates a menu with a mix of link-based buttons, standard buttons, and a disabled button, showcasing the menu's flexibility in handling different interaction states.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="mixed-menu">Options</s-button>

    <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
      <s-button href="javascript:void(0)" target="_blank">
        View product page
      </s-button>
      <s-button disabled>Unavailable action</s-button>
      <s-button download="sales-report.csv" href="/reports/sales-report.csv">
        Download report
      </s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download href="javascript:void(0)">Download report</s-button>
  </s-menu>
  ```

* #### Actions menu with sections

  ##### Description

  Presents a comprehensive menu showing how to create sections with different action groups and include a critical action at the menu's root level.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="customer-menu">Edit customer</s-button>

    <s-menu id="customer-menu" accessibilityLabel="Customer actions">
      <s-section heading="Customer management">
        <s-button icon="edit">Edit customer</s-button>
        <s-button icon="email">Send email</s-button>
        <s-button icon="order">View orders</s-button>
      </s-section>
      <s-section heading="Account actions">
        <s-button icon="reset">Reset password</s-button>
        <s-button icon="lock">Disable account</s-button>
      </s-section>
      <s-button tone="critical" icon="delete">
        Delete customer
      </s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">Delete customer</s-button>
  </s-menu>
  ```

* #### Menu with nested sections

  ##### Description

  Illustrates a complex menu with nested sections, demonstrating how to organize multiple related actions with icons.

  ##### jsx

  ```jsx
  <>
    <s-button icon="settings" commandFor="admin-settings">
      Settings
    </s-button>

    <s-menu id="admin-settings" accessibilityLabel="Settings menu">
      <s-section heading="Account">
        <s-button icon="profile">Profile settings</s-button>
        <s-button icon="lock">Security</s-button>
        <s-button>Billing information</s-button>
      </s-section>
      <s-section heading="Store">
        <s-button icon="store">Store settings</s-button>
        <s-button>Payment providers</s-button>
        <s-button icon="delivery">Shipping rates</s-button>
      </s-section>
      <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
    </s-menu>
  </>
  ```

  ##### html

  ```html
  <s-button icon="settings" commandFor="admin-settings">Settings</s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
  ```

## Useful for

* Presenting a set of actions or selectable options to merchants
* Creating dropdown menus with related actions
* Organizing actions into logical groupings using sections

## Best practices

* Use for secondary or less important actions since they're hidden until merchants open them
* Contain actions that are related to each other

## Content guidelines

* Each item should be clear and predictable
* Lead with a strong verb using the {verb}+{noun} format (e.g., "Buy shipping label", "Edit HTML")
* Avoid unnecessary words and articles like "the", "an", or "a"
