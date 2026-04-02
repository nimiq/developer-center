---
icon: i-tabler:layout-grid
title: Nimiq Web Client
navigation:
  title: Overview
  order: 1
description: A JavaScript light client that connects directly to the Nimiq blockchain from any browser or Node.js environment — no servers, no intermediaries.
---

The Nimiq Web Client is a WebAssembly-powered light client packaged as an npm module. It lets your JavaScript application participate in the Nimiq blockchain directly — syncing with the network, reading on-chain state, and broadcasting transactions — without relying on any server or third-party API.

## What you can build

::u-page-grid

  :::u-page-card
  ---
  title: Query the Blockchain
  description: Fetch account balances, look up blocks, and check transaction status — all from the browser.
  icon: i-nimiq:duotone-network
  to: ./guides/query-the-blockchain
  variant: outline
  ---
  :::

  :::u-page-card
  ---
  title: Listen for Events
  description: Subscribe to new blocks, track transactions for an address, and react to consensus changes in real time.
  icon: i-nimiq:duotone-speedmeter
  to: ./guides/listen-for-events
  variant: outline
  ---
  :::

  :::u-page-card
  ---
  title: Create and Manage Wallets
  description: Generate keypairs, derive addresses from mnemonics, and manage HD wallets entirely client-side.
  icon: i-nimiq:wallet
  to: ./guides/wallets
  variant: outline
  ---
  :::

  :::u-page-card
  ---
  title: Send Transactions
  description: Build, sign, and broadcast NIM transfers with optional data payloads.
  icon: i-nimiq:duotone-send
  to: ./guides/send-transactions
  variant: outline
  ---
  :::

  :::u-page-card
  ---
  title: Stake NIM
  description: Create stakers, delegate to validators, and manage your stake directly from your application.
  icon: i-nimiq:verified
  to: ./guides/stake-nim
  variant: outline
  ---
  :::

::

## Quick start

Install the package and connect to the network in a few lines:

::code-group

```bash [pnpm]
pnpm add @nimiq/core
```

```bash [npm]
npm install @nimiq/core
```

```bash [yarn]
yarn add @nimiq/core
```

```bash [bun]
bun add @nimiq/core
```

::

::code-group

```js [browser.js]
import init, * as Nimiq from '@nimiq/core/web'

await init()

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

```js [Node.js]
import Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

::

## Where to go next

::callout{icon="i-tabler:rocket" to="./getting-started"}
**New to the Web Client?** — Set up your environment, pick a network, and get test funds in the Getting Started guide.
::

::callout{icon="i-tabler:code" to="./integrations/vite"}
**Using a framework?** — Follow the integration guide for [Vite](./integrations/vite), [Nuxt](./integrations/nuxt), [Next.js](./integrations/NextJS), or [plain ESM](./integrations/ESM).
::

::callout{icon="i-tabler:book" to="./concepts/browser-vs-server"}
**Want to understand the fundamentals?** — Learn how the light client works, or compare the [Web Client vs RPC](./concepts/web-client-vs-rpc) approach.
::

::callout{icon="i-tabler:file-search" to="./reference/"}
**Looking for a specific method?** — Browse the full API Reference.
::
