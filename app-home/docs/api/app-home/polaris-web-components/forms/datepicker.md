---
title: DatePicker
description: Allow users to select a specific date or date range.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datepicker
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datepicker.md
---

# Date​Picker

Allow users to select a specific date or date range.

## DatePicker

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

* **defaultValue**

  **string**

  **Default: ""**

  Default selected value.

  The default means no date is selected.

  If the provided value is invalid, no date is selected.

  * If `type="single"`, this is a date in `YYYY-MM-DD` format.
  * If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
  * If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.

* **defaultView**

  **string**

  Default month to display in `YYYY-MM` format.

  This value is used until `view` is set, either directly or as a result of user interaction.

  Defaults to the current month in the user's locale.

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

* **name**

  **string**

  An identifier for the field that is unique within the nearest containing form.

* **type**

  **"single" | "range"**

  **Default: "single"**

* **value**

  **string**

  **Default: ""**

  Current selected value.

  The default means no date is selected.

  If the provided value is invalid, no date is selected.

  Otherwise:

  * If `type="single"`, this is a date in `YYYY-MM-DD` format.
  * If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
  * If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.

* **view**

  **string**

  Displayed month in `YYYY-MM` format.

  `onViewChange` is called when this value changes.

  Defaults to `defaultView`.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* **blur**

  **CallbackEventListener\<typeof tagName> | null**

* **change**

  **CallbackEventListener\<typeof tagName> | null**

* **focus**

  **CallbackEventListener\<typeof tagName> | null**

* **input**

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
  <s-date-picker
    view="2025-05"
    type="range"
    value="2025-05-28--2025-05-31"
   />
  ```

  ##### html

  ```html
  <s-date-picker
    view="2025-05"
    type="range"
    value="2025-05-28--2025-05-31"
  ></s-date-picker>
  ```

* #### Single date selection

  ##### Description

  Demonstrates a date picker configured for selecting a single date with a default value and specific month view.

  ##### jsx

  ```jsx
  <s-date-picker
    type="single"
    name="delivery-date"
    value="2024-01-15"
    view="2024-01"
   />
  ```

  ##### html

  ```html
  <s-date-picker
    type="single"
    name="delivery-date"
    value="2024-01-15"
    view="2024-01"
  ></s-date-picker>
  ```

* #### With date restrictions

  ##### Description

  Illustrates how to restrict date selection to a specific date range, preventing selection of past or future dates outside the allowed period.

  ##### jsx

  ```jsx
  <s-date-picker
    type="single"
    name="appointment-date"
    disallow="past"
    allow="2024-06-01--2024-06-31"
    view="2024-06"
   />
  ```

  ##### html

  ```html
  <!-- Disable past dates and far future dates -->
  <s-date-picker
    type="single"
    name="appointment-date"
    disallow="past"
    allow="2024-06-01--2024-06-31"
    view="2024-06"
  ></s-date-picker>
  ```

* #### Handling onChange callbacks

  ##### Description

  Demonstrates how to handle onChange callbacks for both single and range date pickers, showing how to extract and process the selected values.

  ##### jsx

  ```jsx
  const [dateRange, setDateRange] = useState('2024-01-01--2024-01-31');
  const [orderNumber, setOrderNumber] = useState('');

  const handleApplyFilters = () => {
    console.log('Applying filters:', {
      orderNumber,
      dateRange
    });
  }

  return (
    <s-stack gap="base">
      <s-text-field
        label="Order number"
        placeholder="Search orders..."
        value={orderNumber}
        onChange={(event) => setOrderNumber(event.currentTarget.value)}
      />
      <s-date-picker
        type="range"
        name="order-date-range"
        value={dateRange}
        onChange={(event) => setDateRange(event.currentTarget.value)}
        view="2024-01"
      />
      <s-button onClick={handleApplyFilters}>Apply filters</s-button>
    </s-stack>
  )
  ```

  ##### html

  ```html
  <form>
    <s-text-field
      label="Order number"
      placeholder="Search orders..."
    ></s-text-field>
    <s-date-picker
      type="range"
      name="order-date-range"
      value="2024-01-01--2024-01-31"
      view="2024-01"
    ></s-date-picker>
    <s-button type="submit">Apply filters</s-button>
  </form>
  ```

* #### With quick date selection

  ##### Description

  Illustrates a date picker with quick preset buttons and onChange callback to capture user selections and update the displayed value.

  ##### jsx

  ```jsx
  const [value, setValue] = useState('2025-01-01--2025-01-31');

  const last7Days = () => {
    setValue('2025-01-07--2025-01-13');
  }

  const last30Days = () => {
    setValue('2024-12-14--2025-01-13');
  }

  const thisMonth = () => {
    setValue('2025-01-01--2025-01-31');
  }

  return (
    <s-stack gap="base">
      <s-button-group>
        <s-button slot="secondary-actions" onClick={last7Days}>Last 7 days</s-button>
        <s-button slot="secondary-actions" onClick={last30Days}>Last 30 days</s-button>
        <s-button slot="secondary-actions" onClick={thisMonth}>This month</s-button>
      </s-button-group>
      <s-date-picker
        type="range"
        name="analytics-period"
        id="analytics-picker"
        view="2025-01"
        value={value}
        onChange={(event) => {
          console.log('Date range changed:', event.currentTarget.value);
          setValue(event.currentTarget.value);
        }}
      />
      <s-text>Selected range: {value}</s-text>
    </s-stack>
  )
  ```

  ##### html

  ```html
  <!-- Quick date selection with onChange callback -->
  <s-stack gap="base">
    <s-button-group>
      <s-button slot="secondary-actions" id="last-7-days">Last 7 days</s-button>
      <s-button slot="secondary-actions" id="last-30-days">Last 30 days</s-button>
      <s-button slot="secondary-actions" id="this-month">This month</s-button>
    </s-button-group>
    <s-date-picker
      type="range"
      name="analytics-period"
      id="analytics-picker"
      value="2025-01-01--2025-01-31"
      view="2025-01"
      onchange="console.log('Date range changed:', event.currentTarget.value)"
    ></s-date-picker>
    <s-text id="selected-range">
      Selected range: 2025-01-01--2025-01-31
    </s-text>
  </s-stack>

  <script>
    const picker = document.getElementById('analytics-picker');
    const display = document.getElementById('selected-range');

    // Handle picker changes
    picker.addEventListener('change', (event) => {
      display.textContent = `Selected range: ${event.currentTarget.value}`;
    });

    // Quick selection buttons
    document.getElementById('last-7-days').addEventListener('click', () => {
      picker.value = '2025-01-07--2025-01-13';
      display.textContent = 'Selected range: 2025-01-07--2025-01-13';
    });

    document.getElementById('last-30-days').addEventListener('click', () => {
      picker.value = '2024-12-14--2025-01-13';
      display.textContent = 'Selected range: 2024-12-14--2025-01-13';
    });

    document.getElementById('this-month').addEventListener('click', () => {
      picker.value = '2025-01-01--2025-01-31';
      display.textContent = 'Selected range: 2025-01-01--2025-01-31';
    });
  </script>
  ```

## Best practices

* Use smart defaults and highlight common selections
* Don't use to enter a date that is many years in the future or the past
