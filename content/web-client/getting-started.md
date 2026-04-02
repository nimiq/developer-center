---
icon: i-tabler:rocket
navigation:
  title: Getting Started
  order: 2
description: Install the Web Client, pick a network, connect to the blockchain, and get test funds — everything you need to start building.
---

# Getting Started

This guide takes you from zero to a connected Nimiq light client. By the end you'll have a running client synced with the network and test NIM to experiment with.

## Install

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

If you're using a framework like Vite, Nuxt, or Next.js, see the [integration guides](./integrations/vite) for bundler-specific configuration.

## Pick a network

Nimiq runs three networks. Choose the one that fits your current task:

| Network | Use for | Network ID |
| :--- | :--- | :--- |
| **TestAlbatross** | Development and testing. Free test NIM via the faucet. | `TestAlbatross` |
| **MainAlbatross** | Production. Real NIM, real transactions. | `MainAlbatross` |
| **DevAlbatross** | Local development and protocol work. | `DevAlbatross` |

Start with **TestAlbatross** — it behaves like mainnet but costs nothing.

## Connect

Create a client and wait for it to sync with the network:

::code-group

```js [browser.js]
import init, * as Nimiq from '@nimiq/core/web'

await init()

const config = new Nimiq.ClientConfiguration()
config.network('TestAlbatross')

const client = await Nimiq.Client.create(config.build())
await client.waitForConsensusEstablished()

console.log('Connected! Head block:', await client.getHeadHeight())
```

```js [Node.js]
import Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration()
config.network('TestAlbatross')

const client = await Nimiq.Client.create(config.build())
await client.waitForConsensusEstablished()

console.log('Connected! Head block:', await client.getHeadHeight())
```

::

Once `waitForConsensusEstablished()` resolves, your client is synced and ready to query the blockchain, listen for events, and send transactions.

## Get test funds

The [Nimiq Faucet](./faucet) dispenses free NIM on TestAlbatross for development and testing.

You can request funds through the interactive playground on the [Faucet page](./faucet), or programmatically:

```sh
curl -X POST https://faucet.pos.nimiq-testnet.com/tapit \
     -d "address=NQ07 0000 0000 0000 0000 0000 0000 0000 0000"
```

The faucet sends 10,000 NIM per request with no rate limit. See the [Faucet API reference](./faucet#api-reference) for details on parameters and response format.

## You're ready

You have a synced client and test funds. Here's where to go next:

- [Query the Blockchain](./guides/query-the-blockchain) — fetch balances, blocks, and transaction status
- [Listen for Events](./guides/listen-for-events) — subscribe to blocks, transactions, and consensus changes
- [Create and Manage Wallets](./guides/wallets) — generate keypairs and derive addresses
- [Send Transactions](./guides/send-transactions) — build, sign, and broadcast NIM transfers
- [Stake NIM](./guides/stake-nim) — delegate to validators and manage your stake
