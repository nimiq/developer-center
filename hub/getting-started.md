---
title: Getting Started
description: Get up and running with the Nimiq Hub API in minutes
---

# Getting Started

Get started with the Nimiq Hub API in three easy steps: install the client, initialize it, and make your first request.

## Quick Start

Here's a complete example to request an address from the user:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Hub Quick Start</title>
</head>
<body>
  <button id="choose-address">Choose Address</button>
  <p>Selected address: <span id="output">-</span></p>

  <!-- 1. Include the Hub API from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>

  <script>
    // 2. Initialize for mainnet (use 'https://hub.nimiq-testnet.com' for testnet)
    const hubApi = new HubApi('https://hub.nimiq.com')

    // 3. Request an address from the user
    document.getElementById('choose-address').addEventListener('click', async () => {
      try {
        const result = await hubApi.chooseAddress({
          appName: 'My App',
        })
        document.getElementById('output').textContent = result.address
      } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`
      }
    })
  </script>
</body>
</html>
```

::: tip Try it live
Copy this code into an HTML file and open it in your browser. Clicking the button will open the Hub popup to select an address.
:::

## Installation

### CDN (Recommended for Prototyping)

The fastest way to get started is using the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>
```

For production, pin to a specific version for stability:

```html
<script
  src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@v1.2.3/dist/standalone/HubApi.standalone.umd.js"
  integrity="sha256-5X6zryCUAPOnfjLU8tEtJrLdcslA2UI27RsUWnLAxHs="
  crossorigin="anonymous">
</script>
```

### NPM (Recommended for Production)

For modern JavaScript projects:

::: code-group

```bash [pnpm]
pnpm add @nimiq/hub-api
```

```bash [npm]
npm install @nimiq/hub-api
```

```bash [yarn]
yarn add @nimiq/hub-api
```

:::

Then import in your code:

```ts
// ES Module
import HubApi from '@nimiq/hub-api'

// CommonJS
const HubApi = require('@nimiq/hub-api')
```

## Initialization

Create a Hub API instance by specifying the Hub endpoint:

```ts
// For mainnet
const hubApi = new HubApi('https://hub.nimiq.com')

// For testnet
const hubApi = new HubApi('https://hub.nimiq-testnet.com')

// For local development
const hubApi = new HubApi('http://localhost:8080')
```

::: info Automatic Endpoint Selection
If you don't provide an endpoint, the Hub API will automatically select the appropriate endpoint based on your domain:
- `*.nimiq.com` → `https://hub.nimiq.com`
- `*.nimiq-testnet.com` → `https://hub.nimiq-testnet.com`
- Everything else → `http://localhost:8080`
:::

## Making Your First Request

All Hub API methods are asynchronous and return promises. They must be called within a user action (like a click) to avoid popup blockers.

### Example: Request a Payment

```ts
document.getElementById('pay-button').addEventListener('click', async () => {
  try {
    const result = await hubApi.checkout({
      appName: 'My Shop',
      recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
      value: 1000000, // 0.01 NIM (value in Luna, 1 NIM = 100,000 Luna)
    })

    console.log('Payment successful!')
    console.log('Transaction hash:', result.hash)
  }
  catch (error) {
    if (error.message === 'Request was cancelled') {
      console.log('User cancelled the payment')
    }
    else {
      console.error('Payment failed:', error)
    }
  }
})
```

::: warning Important: User Action Context
Hub API methods must be called **synchronously** within a user action (click, touch, etc.) to prevent browsers from blocking the popup. Don't call Hub methods after `await` or in `setTimeout`:

```ts
// ✅ Good: Called directly in click handler
button.addEventListener('click', async () => {
  const result = await hubApi.checkout(options)
})

// ❌ Bad: Called after async operation
button.addEventListener('click', async () => {
  await someAsyncFunction()
  const result = await hubApi.checkout(options) // Popup will be blocked!
})

// ❌ Bad: Called in setTimeout
button.addEventListener('click', () => {
  setTimeout(() => {
    hubApi.checkout(options) // Popup will be blocked!
  }, 1000)
})
```
:::

## Configuration Warning

::: danger Do NOT Set COOP/COEP Headers
The Hub API requires cross-origin communication to function properly. **Do not set** `Cross-Origin-Embedder-Policy` or `Cross-Origin-Opener-Policy` headers in your development or production servers, as they will prevent Hub popups from communicating with your application.

```ts
// ❌ These headers will break Hub integration:
{
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',  // DON'T USE
    'Cross-Origin-Opener-Policy': 'same-origin',     // DON'T USE
  }
}
```

These headers are sometimes added for `SharedArrayBuffer` or WASM support, but they are incompatible with the Hub's popup-based architecture.
:::

## Network Selection

The Hub API works on both **mainnet** and **testnet**:

::: code-group

```ts [Mainnet]
const hubApi = new HubApi('https://hub.nimiq.com')
```

```ts [Testnet]
const hubApi = new HubApi('https://hub.nimiq-testnet.com')
```

:::

For testing and development, use **testnet** to avoid spending real NIM.

## Common Request Options

Most Hub API methods accept an `appName` parameter to identify your application:

```ts
const options = {
  appName: 'My App', // Short, descriptive name shown to users
  // ... other method-specific options
}
```

The `appName` is displayed in the Hub UI so users know which application is requesting the action.

## Next Steps

Now that you have the Hub API installed and initialized:

- Learn about [Hub Architecture and Concepts](/hub/guide/concepts)
- Explore [Integration Patterns](/hub/guide/integration)
- See [Practical Examples](/hub/examples)
- Check the complete [API Reference](/hub/api-reference)

## Need Help?

- Review [common integration issues](/hub/guide/integration#troubleshooting)
- Check out [example applications](/hub/examples)
- Ask questions in the [Nimiq Community Forum](https://forum.nimiq.community/)
