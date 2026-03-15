---
icon: i-tabler:home
title: Nimiq Hub
description: The secure wallet integration API that lets your users sign transactions, manage accounts, and interact with the blockchain — without you ever touching their private keys.
navigation:
  title: Overview
  order: 1
---

## Get started now

Request a payment and get the signed transaction.

::code-group

```bash [pnpm]
pnpm add @nimiq/hub-api
```

```bash [npm]
npm install @nimiq/hub-api
```

```bash [yarn]
yarn add @nimiq/hub-api
```

```bash [CDN]
<script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>
```

::

::code-group

```js [Payment Example]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.checkout({
  appName: 'My Shop',
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 1_000, // 0.01 NIM in Luna
})

console.log('Payment complete:', result.hash)
```

```js [Authentication]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.signMessage({
  appName: 'My App',
  message: 'Sign in to My App',
})

console.log('Signed by:', result.signer)
// Verify signature on your server
```

```js [Address Selection]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.chooseAddress({
  appName: 'My App',
})

console.log('Address:', result.address)
console.log('Label:', result.label)
```

::

::u-page-section
---
headline: Why Use Hub API
title: Secure Wallet Integration Made Simple
description: The Hub provides a unified interface for all Nimiq wallet operations. Your users maintain full control of their keys while you get a simple, powerful API.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Zero Key Management
    description: Private keys never leave the secure Keyguard environment
    icon: i-tabler:key-off
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Trusted by Users
    description: Same interface across all Nimiq apps
    icon: i-tabler:users
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Multi-Chain Ready
    description: Support for Nimiq today; Bitcoin and Polygon flows require a privileged Hub origin
    icon: i-tabler:timeline
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Simple Integration
    description: CDN or NPM — start in minutes
    icon: i-tabler:puzzle
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Type-Safe API
    description: Full TypeScript definitions included
    icon: i-tabler:code
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Mobile Friendly
    description: Popup or redirect flows for all devices
    icon: i-tabler:device-mobile
    variant: outline
    ---
    ::::
  :::
::

::callout{icon="i-tabler:bulb" to="./guide/concepts"}
**How the Hub Architecture Works** — Learn about the Hub-Keyguard relationship, request behaviors, and security model.
::

::u-page-section
---
headline: Quick Start
title: Jump right in
description: Choose your integration path and start building.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Getting Started Guide
    description: Install the Hub API and make your first request in 5 minutes
    icon: i-tabler:rocket
    to: ./getting-started
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: API Reference
    description: Complete documentation for all Hub methods and types
    icon: i-tabler:book-2
    to: ./api-reference
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Starter Template
    description: Ready-to-use integration boilerplate
    icon: i-tabler:code-dots
    to: https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts
    variant: outline
    ---
    ::::
  :::
::

::callout{icon="i-tabler:arrows-exchange"}
**Need Lower-Level Control?** — For advanced use cases requiring direct blockchain access, consider using the [Web Client](/web-client/) or [RPC API](/rpc/).
::

## Hub Capabilities

Flexible integration options. Choose your integration style, access powerful methods, and support multiple chains.

::callout{icon="i-tabler-bulb"}
**Security First**

The Hub uses a separate secure origin (Keyguard) to store and manage private keys. Your application **never** has access to user keys — all signing happens in the isolated Keyguard environment.
::

### Choose your integration style

Select how the Hub appears to your users.

### Request behaviour

:::u-page-grid
  ::::u-page-card
  ---
  title: Popup (Default)
  description: Opens in a centered popup window
  icon: i-tabler:window
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Redirect
  description: Full-page redirect for mobile-friendly flows
  icon: i-tabler:arrow-back-up
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: IFrame
  description: Seamless integration for privileged origins
  icon: i-tabler:layout-grid
  variant: outline
  ---
  ::::
:::

### Core Methods

:::u-page-grid
  ::::u-page-card
  ---
  title: Payments
  description: Accept NIM with checkout() and signTransaction()
  icon: i-tabler:coins
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Authentication
  description: Sign messages for secure user login with signMessage()
  icon: i-tabler:signature
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Cashlinks
  description: Create shareable payment links with createCashlink()
  icon: i-nimiq:gift
  variant: outline
  ---
  ::::
:::

### Multi-Chain Support

:::u-page-grid
  ::::u-page-card
  ---
  title: Bitcoin
  description: Sign Bitcoin transactions with signBtcTransaction()
  icon: i-nimiq:logos-bitcoin-mono
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Polygon
  description: Sign EVM transactions with signPolygonTransaction()
  icon: i-tabler:hexagon-letter-p
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Atomic Swaps
  description: Trustless cross-chain trading with setupSwap()
  icon: i-nimiq:btc-nim-swap
  variant: outline
  ---
  ::::
:::
