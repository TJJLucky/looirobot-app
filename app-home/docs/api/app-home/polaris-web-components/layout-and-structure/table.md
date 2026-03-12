---
title: Table
description: >-
  Display data clearly in rows and columns, helping users view, analyze, and
  compare information. Automatically renders as a list on small screens and a
  table on large ones.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/table
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/layout-and-structure/table.md
---

# Table

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.

## Properties

* **hasNextPage**

  **boolean**

  **Default: false**

  Whether there's an additional page of data.

* **hasPreviousPage**

  **boolean**

  **Default: false**

  Whether there's a previous page of data.

* **loading**

  **boolean**

  **Default: false**

  Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table. When true, the table could be in an inert state, which prevents user interaction.

* **paginate**

  **boolean**

  **Default: false**

  Whether to use pagination controls.

* **variant**

  **"auto" | "list"**

  **Default: 'auto'**

  Sets the layout of the Table.

  * `list`: The Table is always displayed as a list.
  * `table`: The Table is always displayed as a table.
  * `auto`: The Table is displayed as a table on wide devices and as a list on narrow devices.

## Slots

* **children**

  **HTMLElement**

  The content of the Table.

* **filters**

  **HTMLElement**

  Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **nextpage**

  **CallbackEventListener\<typeof tagName> | null**

* **previouspage**

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

## TableBody

Define the main content area of a table, containing rows and cells that display data.

## Slots

* **children**

  **HTMLElement**

  The body of the table. May not have any semantic meaning in the Table's `list` variant.

## TableCell

Display data within a cell in a table row.

## Slots

* **children**

  **HTMLElement**

  The content of the table cell.

## TableHeader

Display column names at the top of a table.

* **format**

  **HeaderFormat**

  The format of the column. Will automatically apply styling and alignment to cell content based on the value.

  * `base`: The base format for columns.
  * `currency`: Formats the column as currency.
  * `numeric`: Formats the column as a number.

* **listSlot**

  **ListSlotType**

  **Default: 'labeled'**

  Content designation for the table's `list` variant.

  * `primary`: The most important content. Only one column can have this designation.
  * `secondary`: The secondary content. Only one column can have this designation.
  * `kicker`: Content that is displayed before primary and secondary content, but with less visual prominence. Only one column can have this designation.
  * `inline`: Content that is displayed inline.
  * `labeled`: Each column with this designation displays as a heading-content pair.

### HeaderFormat

```ts
'base' | 'numeric' | 'currency'
```

### ListSlotType

```ts
'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled'
```

## Slots

* **children**

  **HTMLElement**

  The heading of the column in the `table` variant, and the label of its data in `list` variant.

## TableHeaderRow

Define a header row in a table, displaying column names and enabling sorting.

## Slots

* **children**

  **HTMLElement**

  Contents of the table heading row; children should be `TableHeading` components.

## TableRow

Display a row of data within the body of a table.

* **clickDelegate**

  **string**

  The ID of an interactive element (e.g. `s-link`) in the row that will be the target of the click when the row is clicked. This is the primary action for the row; it should not be used for secondary actions.

  This is a click-only affordance, and does not introduce any keyboard or screen reader affordances. Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.

## Slots

* **children**

  **HTMLElement**

  The content of a TableRow, which should be `TableCell` components.

Examples

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header>Name</s-table-header>
        <s-table-header>Email</s-table-header>
        <s-table-header format="numeric">Orders placed</s-table-header>
        <s-table-header>Phone</s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>John Smith</s-table-cell>
          <s-table-cell>john@example.com</s-table-cell>
          <s-table-cell>23</s-table-cell>
          <s-table-cell>123-456-7890</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Jane Johnson</s-table-cell>
          <s-table-cell>jane@example.com</s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>234-567-8901</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Brandon Williams</s-table-cell>
          <s-table-cell>brandon@example.com</s-table-cell>
          <s-table-cell>42</s-table-cell>
          <s-table-cell>345-678-9012</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header>Name</s-table-header>
        <s-table-header>Email</s-table-header>
        <s-table-header format="numeric">Orders placed</s-table-header>
        <s-table-header>Phone</s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>John Smith</s-table-cell>
          <s-table-cell>john@example.com</s-table-cell>
          <s-table-cell>23</s-table-cell>
          <s-table-cell>123-456-7890</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Jane Johnson</s-table-cell>
          <s-table-cell>jane@example.com</s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>234-567-8901</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Brandon Williams</s-table-cell>
          <s-table-cell>brandon@example.com</s-table-cell>
          <s-table-cell>42</s-table-cell>
          <s-table-cell>345-678-9012</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

* #### Basic Usage

  ##### Description

  Tables expand to full width by default.

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled">Inventory</s-table-header>
        <s-table-header listSlot="labeled">Price</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
          <s-table-cell>$24.99</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$19.99</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
          <s-table-cell>$34.99</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled">Inventory</s-table-header>
        <s-table-header listSlot="labeled">Price</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
          <s-table-cell>$24.99</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$19.99</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
          <s-table-cell>$34.99</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

* #### With Pagination

  ##### Description

  Add pagination controls for navigating large datasets.

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table paginate hasPreviousPage hasNextPage>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Product 1</s-table-cell>
          <s-table-cell>Active</s-table-cell>
          <s-table-cell>250</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Product 2</s-table-cell>
          <s-table-cell>Active</s-table-cell>
          <s-table-cell>180</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Product 3</s-table-cell>
          <s-table-cell>Paused</s-table-cell>
          <s-table-cell>95</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table paginate hasPreviousPage hasNextPage>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Product 1</s-table-cell>
          <s-table-cell>Active</s-table-cell>
          <s-table-cell>250</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Product 2</s-table-cell>
          <s-table-cell>Active</s-table-cell>
          <s-table-cell>180</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Product 3</s-table-cell>
          <s-table-cell>Paused</s-table-cell>
          <s-table-cell>95</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

* #### With Loading State

  ##### Description

  Display a loading state while fetching data.

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table loading>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled">Inventory</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Notebook set</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>245</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table loading>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled">Inventory</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Notebook set</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>245</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

* #### Full-width table with multiple columns

  ##### Description

  Display multiple columns in a full-width table.

  ##### jsx

  ```jsx
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="kicker">SKU</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
        <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
        <s-table-header listSlot="labeled">Last updated</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>WB-001</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
          <s-table-cell>$24.99</s-table-cell>
          <s-table-cell>2 hours ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>TS-002</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$19.99</s-table-cell>
          <s-table-cell>1 day ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>CB-003</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
          <s-table-cell>$34.99</s-table-cell>
          <s-table-cell>3 days ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Notebook set</s-table-cell>
          <s-table-cell>NB-004</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>245</s-table-cell>
          <s-table-cell>$12.99</s-table-cell>
          <s-table-cell>5 hours ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Stainless steel straws</s-table-cell>
          <s-table-cell>SS-005</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>89</s-table-cell>
          <s-table-cell>$9.99</s-table-cell>
          <s-table-cell>1 hour ago</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="primary">Product</s-table-header>
        <s-table-header listSlot="kicker">SKU</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
        <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
        <s-table-header listSlot="labeled">Last updated</s-table-header>
      </s-table-header-row>

      <s-table-body>
        <s-table-row>
          <s-table-cell>Water bottle</s-table-cell>
          <s-table-cell>WB-001</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>128</s-table-cell>
          <s-table-cell>$24.99</s-table-cell>
          <s-table-cell>2 hours ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>T-shirt</s-table-cell>
          <s-table-cell>TS-002</s-table-cell>
          <s-table-cell>
            <s-badge tone="warning">Low stock</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$19.99</s-table-cell>
          <s-table-cell>1 day ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Cutting board</s-table-cell>
          <s-table-cell>CB-003</s-table-cell>
          <s-table-cell>
            <s-badge tone="critical">Out of stock</s-badge>
          </s-table-cell>
          <s-table-cell>0</s-table-cell>
          <s-table-cell>$34.99</s-table-cell>
          <s-table-cell>3 days ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Notebook set</s-table-cell>
          <s-table-cell>NB-004</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>245</s-table-cell>
          <s-table-cell>$12.99</s-table-cell>
          <s-table-cell>5 hours ago</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>Stainless steel straws</s-table-cell>
          <s-table-cell>SS-005</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>89</s-table-cell>
          <s-table-cell>$9.99</s-table-cell>
          <s-table-cell>1 hour ago</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

* #### List Variant

  ##### Description

  Display data using the list variant with specialized slot types. List is the default variant on mobile devices.

  ##### jsx

  ```jsx
  <s-section padding="none">  
    <s-table variant="list">
      <s-table-header-row>
        <s-table-header listSlot="kicker">ID</s-table-header>
        <s-table-header listSlot="primary">Customer</s-table-header>
        <s-table-header listSlot="secondary">Email</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
        <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>#1001</s-table-cell>
          <s-table-cell>Sarah Johnson</s-table-cell>
          <s-table-cell>sarah@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>23</s-table-cell>
          <s-table-cell>$1,245.50</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>#1002</s-table-cell>
          <s-table-cell>Mike Chen</s-table-cell>
          <s-table-cell>mike@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="neutral">Inactive</s-badge>
          </s-table-cell>
          <s-table-cell>7</s-table-cell>
          <s-table-cell>$432.75</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>#1003</s-table-cell>
          <s-table-cell>Emma Davis</s-table-cell>
          <s-table-cell>emma@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$892.25</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

  ##### html

  ```html
  <s-section padding="none">
    <s-table variant="list">
      <s-table-header-row>
        <s-table-header listSlot="kicker">ID</s-table-header>
        <s-table-header listSlot="primary">Customer</s-table-header>
        <s-table-header listSlot="secondary">Email</s-table-header>
        <s-table-header listSlot="inline">Status</s-table-header>
        <s-table-header listSlot="labeled" format="numeric">
          Orders
        </s-table-header>
        <s-table-header listSlot="labeled" format="currency">
          Total spent
        </s-table-header>
      </s-table-header-row>
      <s-table-body>
        <s-table-row>
          <s-table-cell>#1001</s-table-cell>
          <s-table-cell>Sarah Johnson</s-table-cell>
          <s-table-cell>sarah@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>23</s-table-cell>
          <s-table-cell>$1,245.50</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>#1002</s-table-cell>
          <s-table-cell>Mike Chen</s-table-cell>
          <s-table-cell>mike@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="neutral">Inactive</s-badge>
          </s-table-cell>
          <s-table-cell>7</s-table-cell>
          <s-table-cell>$432.75</s-table-cell>
        </s-table-row>
        <s-table-row>
          <s-table-cell>#1003</s-table-cell>
          <s-table-cell>Emma Davis</s-table-cell>
          <s-table-cell>emma@example.com</s-table-cell>
          <s-table-cell>
            <s-badge tone="success">Active</s-badge>
          </s-table-cell>
          <s-table-cell>15</s-table-cell>
          <s-table-cell>$892.25</s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </s-section>
  ```

## Best practices

* Use when displaying data with 3 or more attributes per item
* All items should share the same structure and attributes
* Don't use when data varies significantly between items (use a list instead)
* Tables automatically transform into lists on mobile devices

## Related

[Composition - Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)
