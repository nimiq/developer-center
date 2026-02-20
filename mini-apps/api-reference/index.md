<!-- url: https://nimiq.com/developers/mini-apps/api-reference -->
<!-- type: api reference -->
<!-- summary: Reference documentation for Nimiq Pay mini app providers and APIs -->

# API Reference

This API is injected by the host app into the mini app environment. The providers are available on the `window` object. This section is reference-only.

## Contents

- [Nimiq provider](/mini-apps/api-reference/nimiq-provider.md)
- [Ethereum provider](/mini-apps/api-reference/ethereum-provider.md)

To set up and build a mini app, see the [Developer setup](/mini-apps/developer-setup.md) and the [Mini app tutorial](/mini-apps/mini-app-tutorial.md).

## Quick Start Examples

### Nimiq Provider

```javascript
const nimiq = window.nimiq

const accounts = await nimiq.listAccounts()
const address = accounts[0]

const signed = await nimiq.sign('hello')
console.log({ address, signed })
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
