---
icon: i-tabler:brand-ethereum
---

<!-- url: https://nimiq.com/developers/mini-apps/api-reference/ethereum-provider -->
<!-- type: api reference -->
<!-- summary: Reference for the EIP-1193 Ethereum provider injected into mini apps, including EIP-6963 compatibility -->

# Ethereum Provider API (window.ethereum)

This provider implements [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) and supports [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) provider discovery. It is injected into the mini app environment.

## Access

```javascript
const provider = window.ethereum
```

## Methods

### `eth_requestAccounts` / `requestAccounts`

Requests the user's Ethereum accounts.

**Parameters**

- none

**Returns**

- `string[]` — Ethereum addresses.

**User confirmation**

- yes

**Example**

```javascript
const accounts = await provider.request({ method: 'eth_requestAccounts' })
```

### `personal_sign` / `signPersonalMessage`

Signs a message with the user's Ethereum key.

**Parameters**

- `data` (string, required): message to sign, plain text or hex string (0x-prefixed).
- `address` (string, required): Ethereum address to sign with.

**Returns**

- `string` — hex signature.

**User confirmation**

- yes

**Example**

```javascript
const signature = await provider.request({
  method: 'personal_sign',
  params: ['hello', '0x1234567890abcdef1234567890abcdef12345678'],
})
```

### `wallet_switchEthereumChain` / `switchEthereumChain`

Switches the active Ethereum network.

**Parameters**

- `chainId` (string, required): hex chain id.

**Returns**

- `null`.

**Errors**

- `4902` — chain not configured.

**User confirmation**

- no

**Example**

```javascript
await provider.request({
  method: 'wallet_switchEthereumChain',
  params: [{ chainId: '0x89' }],
})
```

### `wallet_addEthereumChain` / `addEthereumChain`

Adds a new chain configuration and switches to it.

**Parameters**

- `chainId` (string, required): hex chain id.
- `chainName` (string, required): human-readable name.
- `rpcUrls` (string[], required): RPC endpoints (first used).
- `nativeCurrency` (object, optional): `{ name: string, symbol: string, decimals: number }`.
- `blockExplorerUrls` (string[], optional): block explorer URLs.

**Returns**

- `null`.

**User confirmation**

- no

**Example**

```javascript
await provider.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x89',
    chainName: 'Polygon',
    rpcUrls: ['https://polygon-bor-rpc.publicnode.com'],
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://polygonscan.com'],
  }],
})
```

### `rpcCall`

Proxies a JSON-RPC call through the host app.

**Parameters**

- `rpcUrl` (string, required): RPC endpoint URL.
- `payload` (object, required): JSON-RPC request payload.

**Returns**

- JSON-RPC response.

**User confirmation**

- no

**Example**

```javascript
const response = await provider.request({
  method: 'rpcCall',
  params: {
    rpcUrl: 'https://ethereum-rpc.publicnode.com',
    payload: { jsonrpc: '2.0', id: 1, method: 'eth_chainId', params: [] },
  },
})
```

## Standard JSON-RPC Methods

These methods are routed through `rpcCall`.

### `eth_chainId`

Returns the current chain id.

**Parameters**

- none

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const chainId = await provider.request({ method: 'eth_chainId' })
```

### `eth_accounts`

Returns the connected accounts.

**Parameters**

- none

**Returns**

- `string[]` — Ethereum addresses (empty if not connected).

**User confirmation**

- no

**Example**

```javascript
const accounts = await provider.request({ method: 'eth_accounts' })
```

### `eth_getBalance`

Returns the balance for an address.

**Parameters**

- `address` (string, required): Ethereum address.
- `block` (string, required): block tag or hex block number.

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const balance = await provider.request({
  method: 'eth_getBalance',
  params: ['0x1234567890abcdef1234567890abcdef12345678', 'latest'],
})
```

### `eth_call`

Executes a read-only contract call.

**Parameters**

- `tx` (object, required): transaction call object.
- `block` (string, required): block tag or hex block number.

**Returns**

- `string` — hex data.

**User confirmation**

- no

**Example**

```javascript
const data = await provider.request({
  method: 'eth_call',
  params: [{ to: '0x1234567890abcdef1234567890abcdef12345678', data: '0x' }, 'latest'],
})
```

### `eth_estimateGas`

Estimates gas for a transaction.

**Parameters**

- `tx` (object, required): transaction call object.

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const gas = await provider.request({
  method: 'eth_estimateGas',
  params: [{ to: '0x1234567890abcdef1234567890abcdef12345678', data: '0x' }],
})
```

### `eth_gasPrice`

Returns the current gas price.

**Parameters**

- none

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const gasPrice = await provider.request({ method: 'eth_gasPrice' })
```

### `eth_getTransactionCount`

Returns the nonce for an address.

**Parameters**

- `address` (string, required): Ethereum address.
- `block` (string, required): block tag or hex block number.

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const nonce = await provider.request({
  method: 'eth_getTransactionCount',
  params: ['0x1234567890abcdef1234567890abcdef12345678', 'latest'],
})
```

### `eth_getTransactionReceipt`

Returns the transaction receipt.

**Parameters**

- `txHash` (string, required): 0x-prefixed 32-byte hash.

**Returns**

- `object | null` — `null` if not mined.

**User confirmation**

- no

**Example**

```javascript
const receipt = await provider.request({
  method: 'eth_getTransactionReceipt',
  params: ['0xabc...'],
})
```

### `eth_blockNumber`

Returns the latest block number.

**Parameters**

- none

**Returns**

- `string` — hex quantity.

**User confirmation**

- no

**Example**

```javascript
const blockNumber = await provider.request({ method: 'eth_blockNumber' })
```

### `eth_getBlockByNumber`

Returns block information for a given block.

**Parameters**

- `block` (string, required): block tag or hex block number.
- `includeTxs` (boolean, required): include full transaction objects.

**Returns**

- `object | null` — `null` if not found.

**User confirmation**

- no

**Example**

```javascript
const block = await provider.request({
  method: 'eth_getBlockByNumber',
  params: ['latest', false],
})
```

### `eth_getLogs`

Returns logs matching a filter.

**Parameters**

- `filter` (object, required): log filter object.

**Returns**

- `object[]` — log objects.

**User confirmation**

- no

**Example**

```javascript
const logs = await provider.request({
  method: 'eth_getLogs',
  params: [{ fromBlock: 'latest' }],
})
```

### `net_version`

Returns the current network id.

**Parameters**

- none

**Returns**

- `string` — decimal network id.

**User confirmation**

- no

**Example**

```javascript
const networkId = await provider.request({ method: 'net_version' })
```

Not implemented: `eth_sendTransaction`, `eth_signTypedData`.

## EIP-6963 Provider Discovery

Nimiq Pay is EIP-6963 compatible and discoverable by wallet discovery flows that support EIP-6963.

Mini app developers do not need to manually announce the provider. In most cases, using `window.ethereum` or a standard EIP-6963-compatible discovery library is sufficient.
