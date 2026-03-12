---
title: Scanner
description: The Scanner API allows you to use the mobile device's camera to scan barcodes.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/scanner'
  md: 'https://shopify.dev/docs/api/app-home/apis/scanner.md'
---

# Scanner

The Scanner API allows you to use the mobile device's camera to scan barcodes.

## Scanner

The `scanner` API provides a `capture` method that opens the mobile device's scanner to capture a barcode. It returns a Promise resolving to the scanned barcode data or an error.

* **capture**

  **() => Promise\<ScannerPayload>**

  **required**

### ScannerPayload

* data

  ```ts
  string
  ```

Examples

### Examples

* #### Scanner

  ##### Default

  ```js
  try {
    const payload = await shopify.scanner.capture();
    console.log('Scanner success', payload);
  } catch (error) {
    console.log('Scanner error', error);
  }
  ```
