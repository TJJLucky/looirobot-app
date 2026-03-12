---
title: DateField
description: Allow users to select a specific date with a date picker.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datefield'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datefield.md
---

# Date​Field

Allow users to select a specific date with a date picker.

## Properties

* **allow**

  **string**

  **Default: ""**

  Dates that can be selected.

  A comma-separated list of dates, date ranges. Whitespace is allowed after commas.

  The default `''` allows all dates.

  * Dates in `YYYY-MM-DD` format allow a single date.

  * Dates in `YYYY-MM` format allow a whole month.

  * Dates in `YYYY` format allow a whole year.

  * Ranges are expressed as `start--end`. - Ranges are inclusive.

    * If either `start` or `end` is omitted, the range is unbounded in that direction.
    * If parts of the date are omitted for `start`, they are assumed to be the minimum possible value. So `2024--` is equivalent to `2024-01-01--`.
    * If parts of the date are omitted for `end`, they are assumed to be the maximum possible value. So `--2024` is equivalent to `--2024-12-31`.
    * Whitespace is allowed either side of `--`.

* **allowDays**

  **string**

  **Default: ""**

  Days of the week that can be selected. These intersect with the result of `allow` and `disallow`.

  A comma-separated list of days. Whitespace is allowed after commas.

  The default `''` has no effect on the result of `allow` and `disallow`.

  Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.

* **autocomplete**

  **DateAutocompleteField**

  **Default: 'on' for everything else**

  A hint as to the intended content of the field.

  When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.

  When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.

  Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.

* **defaultValue**

  **string**

  The default value for the field.

* **defaultView**

  **string**

  Default month to display in `YYYY-MM` format.

  This value is used until `view` is set, either directly or as a result of user interaction.

  Defaults to the current month in the user's locale.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **disallow**

  **string**

  **Default: ""**

  Dates that cannot be selected. These subtract from `allow`.

  A comma-separated list of dates, date ranges. Whitespace is allowed after commas.

  The default `''` has no effect on `allow`.

  * Dates in `YYYY-MM-DD` format disallow a single date.

  * Dates in `YYYY-MM` format disallow a whole month.

  * Dates in `YYYY` format disallow a whole year.

  * Ranges are expressed as `start--end`. - Ranges are inclusive.

    * If either `start` or `end` is omitted, the range is unbounded in that direction.
    * If parts of the date are omitted for `start`, they are assumed to be the minimum possible value. So `2024--` is equivalent to `2024-01-01--`.
    * If parts of the date are omitted for `end`, they are assumed to be the maximum possible value. So `--2024` is equivalent to `--2024-12-31`.
    * Whitespace is allowed either side of `--`.

* **disallowDays**

  **string**

  **Default: ""**

  Days of the week that cannot be selected. This subtracts from `allowDays`, and intersects with the result of `allow` and `disallow`.

  A comma-separated list of days. Whitespace is allowed after commas.

  The default `''` has no effect on `allowDays`.

  Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **labelAccessibilityVisibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **readOnly**

  **boolean**

  **Default: false**

  The field cannot be edited by the user. It is focusable will be announced by screen readers.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

* **view**

  **string**

  Displayed month in `YYYY-MM` format.

  `onViewChange` is called when this value changes.

  Defaults to `defaultView`.

### DateAutocompleteField

```ts
'bday-day' | 'bday-month' | 'bday-year' | 'bday' | 'cc-expiry-month' | 'cc-expiry-year' | 'cc-expiry'
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **blur**

  **CallbackEventListener<'input'>**

* **change**

  **CallbackEventListener<'input'>**

* **focus**

  **CallbackEventListener<'input'>**

* **input**

  **CallbackEventListener<'input'>**

* **invalid**

  **CallbackEventListener\<typeof tagName> | null**

* **viewchange**

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
  <s-date-field defaultView="2025-09" defaultValue="2025-09-01" />
  ```

  ##### html

  ```html
  <s-date-field defaultView="2025-09" defaultValue="2025-09-01"></s-date-field>
  ```

* #### Basic usage

  ##### Description

  Simple date field for collecting a single date with a descriptive label.

  ##### jsx

  ```jsx
  <s-date-field
    label="Order date"
    name="orderDate"
    placeholder="Select date"
   />
  ```

  ##### html

  ```html
  <s-date-field
    label="Order date"
    name="orderDate"
    placeholder="Select date"
  ></s-date-field>
  ```

* #### With default value

  ##### Description

  Date field pre-populated with a specific date for editing existing data.

  ##### jsx

  ```jsx
  <s-date-field
    label="Shipping date"
    name="shippingDate"
    value="2024-03-15"
   />
  ```

  ##### html

  ```html
  <s-date-field
    label="Shipping date"
    name="shippingDate"
    value="2024-03-15"
  ></s-date-field>
  ```

* #### With date restrictions

  ##### Description

  Shows how to restrict selectable dates to weekdays only.

  ##### jsx

  ```jsx
  <s-date-field
    label="Delivery date"
    name="deliveryDate"
    disallowDays="[0, 6]"
    details="Delivery available Monday through Friday only"
   />
  ```

  ##### html

  ```html
  <s-date-field
    label="Delivery date"
    name="deliveryDate"
    disallowDays="[0, 6]"
    details="Delivery available Monday through Friday only"
  ></s-date-field>
  ```

* #### With specific allowed dates

  ##### Description

  Demonstrates allowing only specific dates from a predefined list.

  ##### jsx

  ```jsx
  <s-date-field
    label="Available appointment dates"
    name="appointmentDate"
    allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
    details="Select from available time slots"
   />
  ```

  ##### html

  ```html
  <s-date-field
    label="Available appointment dates"
    name="appointmentDate"
    allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
    details="Select from available time slots"
  ></s-date-field>
  ```

* #### With error state

  ##### Description

  Date field showing validation error for required field or invalid date entry.

  ##### jsx

  ```jsx
  <s-date-field
    label="Event date"
    error="Event date is required"
    required
  />
  ```

  ##### html

  ```html
  <s-date-field
    label="Event date"
    name="eventDate"
    required
    error="Select a valid event date"
  ></s-date-field>
  ```

* #### Disabled and read-only states

  ##### Description

  Shows date fields in different interaction states for viewing-only or disabled forms.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-date-field
      label="Creation date"
      name="createdDate"
      value="2024-01-01"
      readOnly
     />

    <s-date-field
      label="Archived date"
      name="archivedDate"
      value="2024-02-15"
      disabled
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-date-field
      label="Creation date"
      name="createdDate"
      value="2024-01-01"
      readOnly
    ></s-date-field>

    <s-date-field
      label="Archived date"
      name="archivedDate"
      value="2024-02-15"
      disabled
    ></s-date-field>
  </s-stack>
  ```

* #### Form integration

  ##### Description

  Complete form example showing date field with other form elements.

  ##### jsx

  ```jsx
  <form>
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="customerName"
        required
       />

      <s-date-field
        label="Order date"
        name="orderDate"
        value="2024-03-15"
        required
       />

      <s-date-field
        label="Requested delivery date"
        name="deliveryDate"
        disallowDays="[0, 6]"
        details="Weekdays only"
       />

      <s-button type="submit" variant="primary">
        Process order
      </s-button>
    </s-stack>
  </form>
  ```

  ##### html

  ```html
  <form>
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="customerName"
        required
      ></s-text-field>

      <s-date-field
        label="Order date"
        name="orderDate"
        value="2024-03-15"
        required
      ></s-date-field>

      <s-date-field
        label="Requested delivery date"
        name="deliveryDate"
        disallowDays="[0, 6]"
        details="Weekdays only"
      ></s-date-field>

      <s-button type="submit" variant="primary">Process order</s-button>
    </s-stack>
  </form>
  ```

* #### Date range selection

  ##### Description

  Example showing two date fields for selecting a date range.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-heading>Sales report period</s-heading>

    <s-stack direction="inline" gap="base">
      <s-date-field
        label="Start date"
        name="startDate"
        id="report-start"
       />

      <s-date-field
        label="End date"
        name="endDate"
        id="report-end"
       />
    </s-stack>

    <s-button variant="primary">Generate report</s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-heading>Sales report period</s-heading>

    <s-stack direction="inline" gap="base">
      <s-date-field
        label="Start date"
        name="startDate"
        id="report-start"
      ></s-date-field>

      <s-date-field
        label="End date"
        name="endDate"
        id="report-end"
      ></s-date-field>
    </s-stack>

    <s-button variant="primary">Generate report</s-button>
  </s-stack>
  ```

* #### Date fields with validation

  ##### Description

  Demonstrates date fields with business logic restrictions and validation.

  ##### jsx

  ```jsx
  <s-section>
    <s-heading>Promotion settings</s-heading>
    <s-stack gap="base">
      <s-text-field
        label="Promotion name"
        name="promoName"
        value="Spring sale"
       />

      <s-date-field
        label="Start date"
        name="promoStart"
        value="2024-04-01"
        details="Promotion begins at midnight"
       />

      <s-date-field
        label="End date"
        name="promoEnd"
        value="2024-04-30"
        details="Promotion ends at 11:59 PM"
       />

      <s-checkbox
        name="autoPublish"
        label="Automatically publish on start date"
       />
    </s-stack>
  </s-section>
  ```

  ##### html

  ```html
  <s-section>
    <s-heading>Promotion settings</s-heading>
    <s-stack gap="base">
      <s-text-field
        label="Promotion name"
        name="promoName"
        value="Spring sale"
      ></s-text-field>

      <s-date-field
        label="Start date"
        name="promoStart"
        value="2024-04-01"
        details="Promotion begins at midnight"
      ></s-date-field>

      <s-date-field
        label="End date"
        name="promoEnd"
        value="2024-04-30"
        details="Promotion ends at 11:59 PM"
      ></s-date-field>

      <s-checkbox
        name="autoPublish"
        label="Automatically publish on start date"
      ></s-checkbox>
    </s-stack>
  </s-section>
  ```

* #### Date field validation

  ##### Description

  Interactive example showing required date field validation with dynamic error messages.

  ##### jsx

  ```jsx
  const [date, setDate] = useState('');
  const [error, setError] = useState('Event date is required');

  return (
    <s-section>
      <s-stack gap="base" justifyContent="start">
        <s-text-field label="Event name" />
        <s-date-field
          label="Event date"
          value={date}
          error={error}
          required
          onChange={(e) => {
            setDate(e.currentTarget.value);
            setError(e.currentTarget.value ? '' : 'Event date is required');
          }}
        />
      </s-stack>
    </s-section>
  )
  ```

  ##### html

  ```html
  <s-date-field
    label="Event date"
    name="eventDate"
    required
    error="Select a valid event date"
  ></s-date-field>
  ```

## Best practices

* Use smart defaults and highlight common selections
* Use `allow` and `disallow` properties to restrict selectable dates appropriately
* Provide clear labels and use details text to explain date restrictions
* Don't use for dates that are many years in the future or the past
