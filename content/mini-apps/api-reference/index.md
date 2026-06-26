---
description: Reference documentation for Nimiq Pay mini app providers and APIs
icon: i-tabler:api
navigation:
  title: API Reference
  order: 1
---

# API Reference

This API is injected by the host app into the mini app environment. For Nimiq access, the recommended pattern is to use the Mini App SDK `init()` helper. This section is reference-only.

## Contents

- [Nimiq provider](/mini-apps/api-reference/nimiq-provider)
- [Ethereum provider](/mini-apps/api-reference/ethereum-provider)

To load and build a mini app, see [Load a Local Mini App in Nimiq Pay](/mini-apps/development/load-local-mini-app), the [Mini app tutorial](/mini-apps/tutorials/mini-app-tutorial), and [Build a Dual-Chain Mini App with Nimiq Pay](/mini-apps/tutorials/dual-chain-mini-app-tutorial).

## Quick Start Examples

### Nimiq Provider

```typescript
import { init } from '@nimiq/mini-app-sdk'

const nimiq = await init()

const accounts = await nimiq.listAccounts()
const signed = await nimiq.sign('hello')

console.log({ accounts, signed })
```

### Ethereum dApp (EIP-1193)

```javascript
const provider = window.ethereum

const accounts = await provider.request({ method: 'eth_requestAccounts' })
const address = accounts[0]

const balance = await provider.request({
  method: 'eth_getBalance',
  params: [address, 'latest'],
})

console.log({ address, balance })
```
