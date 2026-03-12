---
title: Index
description: >-
  The index layout lets merchants view and manage all their objects at once in a
  table format. They can filter, sort and do quick actions on their objects. To
  prevent tables from becoming visually cluttered, reveal actions only when the
  row is hovered over or selected

    | Used to | Examples |
    | --- | --- |
    | View all objects at once | Products, orders, customers, discounts |
    | Perform bulk actions | Delete products, pause/activate campaigns |

    ![Preview of the index pattern](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/patterns/index-example-BnCMe8_K.png)

    This pattern uses `Badge`, `Box`, `Button`, `Clickable`, `Grid`, `Heading`, `Image`, `Link`, `Paragraph`, `Section`, `Stack`, and `Table` components.

    ---

    ## Design guidelines
    Design your index page so users can organize and take action on resource objects.

    ### Navigation

    * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
    * Offer users clear and predictable action labels.

    ---

    ### Layout

    * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
    * For resource index pages, use a full-width page. This is helpful when users are dealing with lists of data that have many columns.

    ---

    <style>
            div[class*="CodeBlock-module-CodeBlock_"] {
          max-height: calc(100vh - 400px) !important;
      }
      div[class*="Tabs-module-TabsContent_"] {
        overflow: auto !important;
      }
      div[class*="Screenshot-module-Screenshot_"] {
        display: none !important;
      }
    </style>
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/patterns/templates/index'
  md: 'https://shopify.dev/docs/api/app-home/patterns/templates/index.md'
---

# Index

The index layout lets merchants view and manage all their objects at once in a table format. They can filter, sort and do quick actions on their objects. To prevent tables from becoming visually cluttered, reveal actions only when the row is hovered over or selected

| Used to | Examples |
| - | - |
| View all objects at once | Products, orders, customers, discounts |
| Perform bulk actions | Delete products, pause/activate campaigns |

![Preview of the index pattern](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/patterns/index-example-BnCMe8_K.png)

This pattern uses `Badge`, `Box`, `Button`, `Clickable`, `Grid`, `Heading`, `Image`, `Link`, `Paragraph`, `Section`, `Stack`, and `Table` components.

***

## Design guidelines

Design your index page so users can organize and take action on resource objects.

### Navigation

* Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
* Offer users clear and predictable action labels.

***

### Layout

* Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
* For resource index pages, use a full-width page. This is helpful when users are dealing with lists of data that have many columns.

***

Examples

### Examples

* #### Index

  ##### jsx

  ```jsx
  <s-page heading="Puzzles">
        <s-button slot="primary-action" variant="primary">
          Create puzzle
        </s-button>
        <s-button slot="secondary-actions" variant="secondary">
          Export puzzles
        </s-button>
        <s-button slot="secondary-actions" variant="secondary">
          Import puzzles
        </s-button>
        {/* === */}
        {/* Empty state */}
        {/* This should only be visible if the merchant has not created any puzzles yet. */}
        {/* === */}
        <s-section accessibilityLabel="Empty state section">
          <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
            <s-box maxInlineSize="200px" maxBlockSize="200px">
              {/* aspectRatio should match the actual image dimensions (width/height) */}
              <s-image
                aspectRatio="1/0.5"
                src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
                alt="A stylized graphic of four characters, each holding a puzzle piece"
              />
            </s-box>
            <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
              <s-stack alignItems="center">
                <s-heading>Start creating puzzles</s-heading>
                <s-paragraph>
                  Create and manage your collection of puzzles for players to
                  enjoy.
                </s-paragraph>
              </s-stack>
              <s-button-group>
                <s-button
                  slot="secondary-actions"
                  accessibilityLabel="Learn more about creating puzzles"
                >
                  {" "}
                  Learn more{" "}
                </s-button>
                <s-button slot="primary-action" accessibilityLabel="Add a new puzzle">
                  {" "}
                  Create puzzle{" "}
                </s-button>
              </s-button-group>
            </s-grid>
          </s-grid>
        </s-section>

        {/* === */}
        {/* Table */}
        {/* This should only be visible if the merchant has created one or more puzzles. */}
        {/* === */}
        <s-section padding="none" accessibilityLabel="Puzzles table section">
          <s-table>
            <s-table-header-row>
              <s-table-header listSlot="primary">Puzzle</s-table-header>
              <s-table-header format="numeric">Pieces</s-table-header>
              <s-table-header>Created</s-table-header>
              <s-table-header>Status</s-table-header>
            </s-table-header-row>
            <s-table-body>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Mountain View puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        alt="Mountain View puzzle thumbnail"
                        src="https://picsum.photos/id/29/80/80"
                       />
                    </s-clickable>
                    <s-link href="/app/details">Mountain View</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>16</s-table-cell>
                <s-table-cell>Today</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="success">
                    Active
                  </s-badge>
                </s-table-cell>
              </s-table-row>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Ocean Sunset puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        alt="Ocean Sunset puzzle thumbnail"
                        src="https://picsum.photos/id/12/80/80"
                       />
                    </s-clickable>
                    <s-link href="/app/details">Ocean Sunset</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>9</s-table-cell>
                <s-table-cell>Yesterday</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="success">
                    Active
                  </s-badge>
                </s-table-cell>
              </s-table-row>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Forest Animals puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        alt="Forest Animals puzzle thumbnail"
                        src="https://picsum.photos/id/324/80/80"
                       />
                    </s-clickable>
                    <s-link href="/app/details">Forest Animals</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>25</s-table-cell>
                <s-table-cell>Last week</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="neutral">
                    Draft
                  </s-badge>
                </s-table-cell>
              </s-table-row>
              {/* Add more rows as needed here */}
              {/* If more than 100 rows are needed, index page tables should use the paginate, hasPreviousPage, hasNextPage, onPreviousPage, and onNextPage attributes to display and handle pagination) */}
            </s-table-body>
        </s-table>
      </s-section>
  </s-page>
  ```

  ##### html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
      <title>Pattern</title>
    </head>
    <body>
      <!-- === -->
      <!-- Index page pattern -->
      <!-- === -->
      <s-page heading="Puzzles">
        <s-button slot="primary-action" variant="primary">Create puzzle</s-button>
        <s-button slot="secondary-actions" variant="secondary">Export puzzles</s-button>
        <s-button slot="secondary-actions" variant="secondary">Import puzzles</s-button>
        <!-- === -->
        <!-- Empty state -->
        <!-- This should only be visible if the merchant has not created any puzzles yet. -->
        <!-- === -->
        <s-section accessibilityLabel="Empty state section">
          <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
            <s-box maxInlineSize="200px" maxBlockSize="200px">
              <!-- aspectRatio should match the actual image dimensions (width/height) -->
              <s-image
                maxInlineSize="200px"
                maxBlockSize="200px"
                aspectRatio="1/0.5"
                src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
                alt="A stylized graphic of four characters, each holding a puzzle piece"
              />
            </s-box>
            <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
              <s-stack alignItems="center">
                <s-heading>Start creating puzzles</s-heading>
                <s-paragraph>
                  Create and manage your collection of puzzles for players to enjoy.
                </s-paragraph>
              </s-stack>
              <s-button-group>
                <s-button slot="secondary-actions" aria-label="Learn more about creating puzzles"> Learn more </s-button>
                <s-button slot="primary-action" aria-label="Add a new puzzle"> Create puzzle </s-button>
              </s-button-group>
            </s-grid>
          </s-grid>
        </s-section>
        <!-- === -->
        <!-- Table -->
        <!-- This should only be visible if the merchant has created one or more puzzles. -->
        <!-- === -->
        <s-section padding="none" accessibilityLabel="Puzzles table section">
          <s-table>
            <s-table-header-row>
              <s-table-header listSlot="primary">Puzzle</s-table-header>
              <s-table-header format="numeric">Pieces</s-table-header>
              <s-table-header>Created</s-table-header>
              <s-table-header>Status</s-table-header>
            </s-table-header-row>
            <s-table-body>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Mountain View puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image objectFit="cover" alt="Mountain View puzzle thumbnail" src="https://picsum.photos/id/29/80/80"></s-image>
                    </s-clickable>
                    <s-link href="/app/details">Mountain View</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>16</s-table-cell>
                <s-table-cell>Today</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="success"> Active </s-badge>
                </s-table-cell>
              </s-table-row>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Ocean Sunset puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image objectFit="cover" alt="Ocean Sunset puzzle thumbnail" src="https://picsum.photos/id/12/80/80"></s-image>
                    </s-clickable>
                    <s-link href="/app/details">Ocean Sunset</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>9</s-table-cell>
                <s-table-cell>Yesterday</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="success"> Active </s-badge>
                </s-table-cell>
              </s-table-row>
              <s-table-row>
                <s-table-cell>
                  <s-stack direction="inline" gap="small" alignItems="center">
                    <s-clickable
                      href="/app/details"
                      accessibilityLabel="Forest Animals puzzle thumbnail"
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image objectFit="cover" alt="Forest Animals puzzle thumbnail" src="https://picsum.photos/id/324/80/80"></s-image>
                    </s-clickable>
                    <s-link href="/app/details">Forest Animals</s-link>
                  </s-stack>
                </s-table-cell>
                <s-table-cell>25</s-table-cell>
                <s-table-cell>Last week</s-table-cell>
                <s-table-cell>
                  <s-badge color="base" tone="neutral"> Draft </s-badge>
                </s-table-cell>
              </s-table-row>
              <!-- Add more rows as needed here -->
              <!-- If more than 100 rows are needed, index page tables should use the paginate, hasPreviousPage, hasNextPage, onPreviousPage, and onNextPage attributes to display and handle pagination) -->
            </s-table-body>
          </s-table>
        </s-section>
      </s-page>
    </body>
  </html>
  ```

## Related

[Requirements - Built for Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)
