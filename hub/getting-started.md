---
title: Getting Started
description: Get up and running with the Nimiq Hub API in minutes
---

<script setup lang="ts">
const items = [
  { label: 'View source on GitHub', href: 'https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts', icon: 'i-nimiq:logos-github-mono' },
]
</script>

# Getting Started

Get started with the Nimiq Hub API in three easy steps: install the client, initialize it, and make your first request.

## Quick Start

**Try the live demo:** [hub-api-ts.vercel.app](https://hub-api-ts.vercel.app/)

Or clone the starter template:

```bash
npx degit onmax/nimiq-starter/starters/hub-api-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

<NqLinks :items />

## Installation

### CDN (Recommended for Prototyping)

The fastest way to get started is using the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>
```

For production, pin to a specific version for stability:

```html
<script
  src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@v1.10.0/dist/standalone/HubApi.standalone.umd.js"
  integrity="sha256-+SGul9asL86fbSc9VF/yjB+Ibe5K/Bn/AZAJ20jA4E0="
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

**Automatic endpoint selection:** If you don't provide an endpoint, the Hub API automatically selects based on your domain (`*.nimiq.com` → mainnet, `*.nimiq-testnet.com` → testnet, others → localhost).

## Making Your First Request

All Hub API methods are asynchronous and return promises. They must be called within a user action (like a click) to avoid popup blockers.

### Example: Request a Payment

```ts
document.getElementById('pay-button').addEventListener('click', async () => {
  try {
    const result = await hubApi.checkout({
      appName: 'My Shop',
      recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
      value: 1_000, // 0.01 NIM (value in Luna, 1 NIM = 100,000 Luna)
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

**Important:** Call Hub methods **synchronously** within user actions (clicks, touches) to avoid popup blockers. Don't call Hub methods after `await` or inside `setTimeout`.

```ts
// ✅ Good
button.addEventListener('click', async () => {
  const result = await hubApi.checkout(options)
})

// ❌ Bad - popup will be blocked
button.addEventListener('click', async () => {
  await someAsyncFunction()
  const result = await hubApi.checkout(options)
})
```

## COOP/COEP Headers

Do not set `Cross-Origin-Embedder-Policy` or `Cross-Origin-Opener-Policy` headers — they break Hub popup communication.

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
- See [Starter Template](https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts)
- Check the complete [API Reference](/hub/api-reference)

## Need Help?

- Review [common integration issues](/hub/guide/integration#troubleshooting)
- Check out [starter template](https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts)
- Ask questions in the [Nimiq Community Forum](https://forum.nimiq.community/)
