---
title: Web Vitals
description: >-
  The Web Vitals API allows you to access performance metrics for your app
  directly through App Bridge.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/apis/web-vitals'
  md: 'https://shopify.dev/docs/api/app-home/apis/web-vitals.md'
---

# Web Vitals

The Web Vitals API allows you to access performance metrics for your app directly through App Bridge.

## Web Vitals

The Web Vitals API provides an onReport method that registers a callback function to receive Web Vitals data. It allows you to monitor and analyze your app's performance in the Shopify admin.

* **onReport**

  **(callback: WebVitalsCallback) => Promise\<void>**

### WebVitalsCallback

* payload

  ```ts
  WebVitalsReport
  ```

void | Promise\<void>

```ts
void | Promise<void>
```

### WebVitalsReport

* metrics

  ```ts
  WebVitalsMetric[]
  ```

### WebVitalsMetric

WebVitals API

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* value

  ```ts
  number
  ```

Examples

### Examples

* #### Callback onReport

  ##### Default

  ```js
  // Define the callback function
  const callback = async (metrics) => {
      const monitorUrl = 'https://yourserver.com/web-vitals-metrics';
      const data = JSON.stringify(metrics);

      navigator.sendBeacon(monitorUrl, data);
  };

  // Register the callback
  shopify.webVitals.onReport(callback);
  ```

## Related

[Reference - App Performance Guidelines](https://shopify.dev/docs/apps/build/performance/admin-installation-oauth)

[API - Web Vitals Debug](https://shopify.dev/docs/api/app-bridge-library/apis/config#config-propertydetail-debug)
