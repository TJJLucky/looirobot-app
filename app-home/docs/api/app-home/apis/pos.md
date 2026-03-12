---
title: POS
description: |2-

    The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

    > Tip:
    > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](/docs/apps/pos/ui-extensions).
    
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/pos'
  md: 'https://shopify.dev/docs/api/app-home/apis/pos.md'
---

# POS

The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

**Tip:** It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to \<a href="/docs/apps/pos/ui-extensions">POS UI Extensions\</a>.

## Cart

Retrieve cart data and perform actions.

* **addAddress**

  **(address: Address) => Promise\<void>**

  Add a new address to a customer.

* **addCartProperties**

  **(properties: Record\<string, string>) => Promise\<void>**

  Add properties for the cart.

* **addCustomSale**

  **(customSale: CustomSale) => Promise\<void>**

  Add custom sale for the cart.

* **addLineItem**

  **(variantId: number, quantity: number) => Promise\<void>**

  Add a product to the cart.

* **addLineItemProperties**

  **(uuid: string, properties: Record\<string, string>) => Promise\<void>**

  Add properties to a line item.

* **applyCartCodeDiscount**

  **(code: string) => Promise\<void>**

  Apply a code discount to the whole cart.

* **applyCartDiscount**

  **(type: DiscountType, discountDescription: string, amount: string) => Promise\<void>**

  Apply a percentage or fixed amount discount to the whole cart.

* **clear**

  **() => Promise\<void>**

  Clear all contents from the cart.

* **fetch**

  **() => Promise\<Cart>**

  Fetch the current cart.

* **removeAllDiscounts**

  **(disableAutomaticDiscounts: boolean) => Promise\<void>**

  Clears all applied discounts from the cart and optionally disables automatic discounts.

* **removeCartDiscount**

  **() => Promise\<void>**

  Remove the discount applied to the whole cart.

* **removeCartProperties**

  **(keys: string\[]) => Promise\<void>**

  Remove properties from the cart.

* **removeCustomer**

  **() => Promise\<void>**

  Remove the current customer from the cart.

* **removeLineItem**

  **(uuid: string) => Promise\<void>**

  Remove a line item in the cart.

* **removeLineItemDiscount**

  **(uuid: string) => Promise\<void>**

  Remove a discount from a line item.

* **removeLineItemProperties**

  **(uuid: string, properties: string\[]) => Promise\<void>**

  Remove properties from a line item.

* **setCustomer**

  **(customer: Customer) => Promise\<void>**

  Add a new or existing customer to the cart.

* **setLineItemDiscount**

  **(uuid: string, type: DiscountType, discountDescription: string, amount: string) => Promise\<void>**

  Apply a discount to a line item.

* **subscribe**

  **(onSubscribe: CartSubscriber) => Unsubscribe**

  Subscribe the cart changes.

* **updateAddress**

  **(index: number, address: Address) => Promise\<void>**

  Update an address for a customer.

* **updateLineItem**

  **(uuid: string, quantity: number) => Promise\<void>**

  Make changes to a line item in the cart.

### Address

* address1

  The customer's primary address.

  ```ts
  string
  ```

* address2

  Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).

  ```ts
  string
  ```

* city

  The name of the customer's city.

  ```ts
  string
  ```

* company

  The company name associated with address.

  ```ts
  string
  ```

* country

  The country of the address.

  ```ts
  string
  ```

* countryCode

  The Country Code in ISO 3166-1 (alpha-2) format.

  ```ts
  string
  ```

* firstName

  The first name of the customer.

  ```ts
  string
  ```

* lastName

  The last name of the customer.

  ```ts
  string
  ```

* name

  The name of the address.

  ```ts
  string
  ```

* phone

  The phone number of the customer.

  ```ts
  string
  ```

* province

  The province or state of the address.

  ```ts
  string
  ```

* provinceCode

  The acronym of the province or state.

  ```ts
  string
  ```

* zip

  The ZIP or postal code of the address.

  ```ts
  string
  ```

### CustomSale

* price

  Price of line item

  ```ts
  number
  ```

* quantity

  Quantity of line item.

  ```ts
  number
  ```

* taxable

  If line item charges tax.

  ```ts
  boolean
  ```

* title

  Title of line item.

  ```ts
  string
  ```

### DiscountType

```ts
'Percentage' | 'FixedAmount'
```

### Cart

* cartDiscount

  The current discount applied to the entire cart.

  ```ts
  Discount
  ```

* cartDiscounts

  All current discounts applied to the entire cart and line items.

  ```ts
  Discount[]
  ```

* customer

  The customer associated to the current cart.

  ```ts
  Customer
  ```

* grandTotal

  The total cost of the current cart, after taxes and discounts have been applied. Value is based on the shop's existing currency settings.

  ```ts
  string
  ```

* lineItems

  A list of lineItem objects.

  ```ts
  LineItem[]
  ```

* properties

  A list of objects containing cart properties.

  ```ts
  Record<string, string>
  ```

* subTotal

  The total cost of the current cart including discounts, but before taxes and shipping. Value is based on the shop's existing currency settings.

  ```ts
  string
  ```

* taxTotal

  The sum of taxes for the current cart. Value is based on the shop's existing currency settings.

  ```ts
  string
  ```

### Discount

* amount

  Amount of discount. Only for fixed or percentage discounts.

  ```ts
  number
  ```

* discountDescription

  Description of discount.

  ```ts
  string
  ```

* type

  Type of discount.

  ```ts
  DiscountType
  ```

### Customer

* email

  The email for a new customer.

  ```ts
  string
  ```

* firstName

  The first name for new customer.

  ```ts
  string
  ```

* id

  The ID of existing customer.

  ```ts
  number
  ```

* lastName

  The last name for new customer.

  ```ts
  string
  ```

* note

  The note for new customer.

  ```ts
  string
  ```

### LineItem

* discounts

  Discount applied to line item.

  ```ts
  Discount[]
  ```

* isGiftCard

  If the line item is a gift card.

  ```ts
  boolean
  ```

* price

  Price of line item

  ```ts
  number
  ```

* productId

  Product identifier for line item.

  ```ts
  number
  ```

* properties

  Properties of the line item.

  ```ts
  { [key: string]: string; }
  ```

* quantity

  Quantity of line item.

  ```ts
  number
  ```

* sku

  Stock keeping unit of the line item.

  ```ts
  string
  ```

* taxable

  If line item charges tax.

  ```ts
  boolean
  ```

* title

  Title of line item.

  ```ts
  string
  ```

* uuid

  Unique id of line item

  ```ts
  string
  ```

* variantId

  Variant identifier for line item.

  ```ts
  number
  ```

* vendor

  Vendor of line item.

  ```ts
  string
  ```

### CartSubscriber

Callback to execute when cart updates.

* cart

  ```ts
  Cart
  ```

void

```ts
void
```

### Unsubscribe

Callback to unsubscribe



void

```ts
void
```

## Close()

Close the app

### Returns

* **Promise\<void>**

## Device()

Retrieve device data

### Returns

* **Promise\<Device>**

### Device

* name

  The name of the device.

  ```ts
  string
  ```

* serialNumber

  The unique ID associated device ID and app ID..

  ```ts
  string
  ```

## Location()

Retrieve location data

### Returns

* **Promise\<Location>**

### Location

* active

  The status of current location.

  ```ts
  boolean
  ```

* address1

  The primary address of current location.

  ```ts
  string
  ```

* address2

  Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).

  ```ts
  string
  ```

* city

  The name of the city.

  ```ts
  string
  ```

* countryCode

  The Country Code in ISO 3166-1 (alpha-2) format.

  ```ts
  string
  ```

* countryName

  The country of the address.

  ```ts
  string
  ```

* id

  The ID of current location.

  ```ts
  number
  ```

* locationType

  The type of current location.

  ```ts
  string
  ```

* name

  The name of current location.

  ```ts
  string
  ```

* phone

  The phone number of the location.

  ```ts
  string
  ```

* province

  TThe province or state of the address.

  ```ts
  string
  ```

* zip

  The ZIP or postal code of the address.

  ```ts
  string
  ```

## User()

Refer to the [user API](https://shopify.dev/docs/api/app-bridge-library/apis/user) to learn more about retrieving POS user data.

### Returns

* **Promise\<POSUser>**

### POSUser

* accountAccess

  The account access level of the logged-in user

  ```ts
  string
  ```

* accountType

  The user's account type.

  ```ts
  string
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* firstName

  The user's first name.

  ```ts
  string
  ```

* id

  The ID of the user's staff.

  ```ts
  number
  ```

* lastName

  The user's last name.

  ```ts
  string
  ```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/admin/apis/pos-11_huAsZ.png)

### Examples

* #### Fetch the POS cart

  ##### Default

  ```js
  await shopify.pos.cart.fetch();
  ```

* #### Fetch the cart

  ##### Default

  ```js
  await shopify.pos.cart.fetch();
  ```

* #### Subscribe to cart updates

  ##### Default

  ```js
  await shopify.pos.cart.subscribe((cart) => {
    console.log(cart);
  });
  ```

* #### Clear the cart

  ##### Default

  ```js
  await shopify.pos.cart.clear();
  ```

* #### Line Items

  ##### Add line item

  ```js
  await shopify.pos.cart.addLineItem(40202439393345, 10);
  ```

  ##### Update line item

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.updateLineItem(lineItemUuid, 4);
  ```

  ##### Remove line item

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.removeLineItem(lineItemUuid);
  ```

* #### Custom Sale

  ##### Add custom sale

  ```js
  await shopify.pos.cart.addCustomSale({
    price: 10,
    quantity: 1,
    title: 'Custom sale',
    taxable: true,
  });
  ```

* #### Customers

  ##### Add a customer by email

  ```js
  await shopify.pos.cart.setCustomer({
    email: 'foo@shopify.com',
    firstName: 'Jane',
    lastName: 'Doe',
    note: 'Customer note',
  });
  ```

  ##### Add a customer by id

  ```js
  await shopify.pos.cart.setCustomer({
    id: 5945486803009,
    note: 'Customer note',
  });
  ```

  ##### Remove customer

  ```js
  await shopify.pos.cart.removeCustomer();
  ```

  ##### Add a customer address

  ```js
  await shopify.pos.cart.addAddress({
    address1: '123 Cherry St.',
    address2: 'Apt. 5',
    city: 'Toronto',
    company: 'Shopify',
    firstName: 'Foo',
    lastName: 'Bar',
    phone: '(613) 555-5555',
    province: 'Ontario',
    country: 'Canada',
    zip: 'M5V0G4',
    name: 'Shopify',
    provinceCode: 'M5V0G4',
    countryCode: '1',
  });
  ```

  ##### Update customer address

  ```js
  await shopify.pos.cart.updateAddress(0, {
    address1: '555 Apple St.',
    address2: 'Unit. 10',
    city: 'Vancouver',
    company: 'Shopify',
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '(403) 555-5555',
    province: 'British Columbia',
    country: 'Canada',
    zip: 'M5V0G4',
    name: 'Shopify',
    provinceCode: 'M5V0G4',
    countryCode: '2',
  });
  ```

* #### Addresses

  ##### Add a customer address

  ```js
  await shopify.pos.cart.addAddress({
    address1: '123 Cherry St.',
    address2: 'Apt. 5',
    city: 'Toronto',
    company: 'Shopify',
    firstName: 'Foo',
    lastName: 'Bar',
    phone: '(613) 555-5555',
    province: 'Ontario',
    country: 'Canada',
    zip: 'M5V0G4',
    name: 'Shopify',
    provinceCode: 'M5V0G4',
    countryCode: '1',
  });
  ```

  ##### Update customer address

  ```js
  await shopify.pos.cart.updateAddress(0, {
    address1: '555 Apple St.',
    address2: 'Unit. 10',
    city: 'Vancouver',
    company: 'Shopify',
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '(403) 555-5555',
    province: 'British Columbia',
    country: 'Canada',
    zip: 'M5V0G4',
    name: 'Shopify',
    provinceCode: 'M5V0G4',
    countryCode: '2',
  });
  ```

* #### Cart Discounts

  ##### Add cart discount

  ```js
  await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');
  ```

  ##### Add dicount code

  ```js
  await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');
  ```

  ##### Remove cart discount

  ```js
  await shopify.pos.cart.removeCartDiscount();
  ```

  ##### Remove all discounts with automatic discounts disabled

  ```js
  await shopify.pos.cart.removeAllDiscounts(true);
  ```

* #### Line Item Discounts

  ##### Add line item discount

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.setLineItemDiscount(
    lineItemUuid,
    'Percentage',
    'Holiday sale',
    '0.5',
  );
  ```

  ##### Remove line item discount

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);
  ```

* #### Cart Properties

  ##### Add cart properties

  ```js
  await shopify.pos.cart.addCartProperties({
    referral: 'Shopify',
    employee: '472',
  });
  ```

  ##### Remove cart properties

  ```js
  await shopify.pos.cart.removeCartProperties(['referral', 'employee']);
  ```

  ##### Add line item properties

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
    referral: 'Shopify',
    employee: '472',
  });
  ```

  ##### Remove line item properties

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
    'referral',
    'employee',
  ]);
  ```

* #### Line Item Properties

  ##### Add line item properties

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
    referral: 'Shopify',
    employee: '472',
  });
  ```

  ##### Remove line item properties

  ```js
  const cart = await shopify.pos.cart.fetch();
  const lineItemUuid = cart.lineItems[0].uuid;
  await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
    'referral',
    'employee',
  ]);
  ```

* #### Dismiss the screen

  ##### Default

  ```js
  await shopify.pos.close();
  ```

* #### Retrieve POS device data

  ##### Default

  ```js
  await shopify.pos.device();
  ```

* #### Retrieve POS location data

  ##### Default

  ```js
  await shopify.pos.location();
  ```
