---
description: Reference for the Nimiq provider injected into mini apps
icon: i-tabler:currency-bitcoin
navigation:
  title: Nimiq Provider API
  order: 2
---

# Nimiq Provider API

This provider exposes Nimiq blockchain operations and is injected into the mini app environment.

## Access

Use the Mini App SDK `init()` helper to wait until Nimiq Pay injects the provider.

```ts
import { init } from '@nimiq/mini-app-sdk'

const nimiq = await init()
```

### SDK version

These examples require SDK `0.2.0` or later for normalized wallet errors and the `NimiqProviderError` export. Install the latest release with your package manager:

::code-group

```bash [pnpm]
pnpm add @nimiq/mini-app-sdk
```

```bash [npm]
npm install @nimiq/mini-app-sdk
```

```bash [yarn]
yarn add @nimiq/mini-app-sdk
```

```bash [bun]
bun add @nimiq/mini-app-sdk
```

::

If you are upgrading from `0.1.0`, follow [Updating existing Mini Apps](#updating-existing-mini-apps) to replace legacy error handling.

## Accounts and signing

Nimiq Pay chooses the account used for signing and sending transactions. `sign()` has no address parameter, and the transaction methods have no sender parameter. Selecting an address in your mini app does not change the wallet's signer.

`listAccounts()` shares addresses; it does not prove ownership. The API does not define their order as a signer-selection rule.

The provider caches the addresses returned by `listAccounts()`. It has no documented `accountsChanged` event for Nimiq, so do not copy the Ethereum provider's account-change handling and assume it also works here.

## Wallet errors

With SDK `0.2.0` or later, the provider returned by `init()` rejects with `NimiqProviderError` for recognized wallet errors. This applies to `connect()`, `listAccounts()`, `sign()`, all `send*Transaction()` methods below, and `request()` calls for wallet methods, including `nim_requestAccounts`.

Unrelated exceptions remain unchanged. `init()` throws an ordinary `Error` if provider injection times out. Status methods (`isConsensusEstablished()` and `getBlockNumber()`), external RPC queries, and direct calls to `window.nimiq` keep their original error behavior.

Use `try`/`catch` and `NimiqProviderError.is(error)` to identify wallet errors across package and host bundle boundaries:

```ts
import { init, NimiqProviderError } from '@nimiq/mini-app-sdk'

try {
  const nimiq = await init()
  const accounts = await nimiq.listAccounts()
  console.log(accounts)
}
catch (error) {
  if (!NimiqProviderError.is(error)) {
    console.error(error)
  }
  else if (error.type === 'PERMISSION_DENIED') {
    console.info('Request cancelled by the user.')
  }
  else {
    console.error(error.type, error.message, error.code)
  }
}
```

### Error fields and types

`NimiqProviderError` extends `Error` with `name: 'NimiqProviderError'`, a string `type`, a `message`, and an optional numeric `code`. Handle unlisted types too: the SDK preserves any explicit host-supplied type and uses the following mapping only when the host supplies a numeric code and message without a type.

| Type | Fallback RPC code | Suggested handling |
| --- | --- | --- |
| `PERMISSION_DENIED` | `4001` | Treat cancellation as a normal outcome; keep the screen usable. |
| `UNKNOWN_REQUEST` | `4200` | Explain that the host does not support this request. |
| `INVALID_TRANSACTION` | `-32602` | Show the error and check the parameters before resending. |
| `NETWORK_ERROR` | `-32000` | Show the connection or submission error; follow the payment check below. |
| `INTERNAL_ERROR` | `-32603` | Report that the wallet could not complete the request. |
| `UNKNOWN_ERROR` | Any unmapped numeric code | Handle the failure without assuming its cause. |

Keep error details for diagnosis. Check payment status before asking the user to resend after a timeout or submission error.

### Updating existing Mini Apps

Replace resolved `{ error }` checks with `try`/`catch`. The SDK also converts legacy `{ error: { type, message } }` responses to `NimiqProviderError`, which may have no `code`. Successful calls return their success value directly.

## Methods

### `listAccounts`

Returns the user's shared Nimiq account addresses. After a successful call, subsequent calls return the cached list until `disconnect()` clears it.

**Parameters**

- none

**Returns**

- `string[]` — user-friendly addresses.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- Requested through the host when the list is not cached. Cached calls do not open another dialog.

**Example**

```ts
const accounts = await nimiq.listAccounts()
```

### `sign`

Signs a message with Nimiq Pay. The response includes `publicKey`; verify the signature before using it as proof of identity.

**Parameters**

- `message` (string | object, required): plain text string or `{ message: string, isHex?: boolean }`.

**Returns**

- `{ publicKey: string, signature: string }` — hex strings.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const signed = await nimiq.sign('hello')
```

### `isConsensusEstablished`

Checks whether the Nimiq network consensus is established.

**Parameters**

- none

**Returns**

- `boolean`.

**User confirmation**

- no

**Example**

```ts
const ready = await nimiq.isConsensusEstablished()
```

### `getBlockNumber`

Returns the current Nimiq block height.

**Parameters**

- none

**Returns**

- `number`.

**User confirmation**

- no

**Example**

```ts
const height = await nimiq.getBlockNumber()
```

### `sendBasicTransaction`

Sends a basic NIM payment. A returned hash identifies the transaction; it does not prove successful execution or finality.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendBasicTransaction({
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendBasicTransactionWithData`

Sends a NIM payment with an attached text message. The message is public on-chain.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.
- `data` (string, required): text message to attach.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendBasicTransactionWithData({
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
  data: 'mic check',
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendNewStakerTransaction`

Creates a new staking transaction.

**Parameters**

- `delegation` (string, required): validator address or delegation target.
- `value` (number, required): amount in Luna.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendNewStakerTransaction({
  delegation: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendStakeTransaction`

Adds stake to an existing staker.

**Parameters**

- `value` (number, required): amount in Luna.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendStakeTransaction({
  value: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendSetActiveStakeTransaction`

Sets the active stake amount.

**Parameters**

- `newActiveBalance` (number, required): active stake amount in Luna.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendSetActiveStakeTransaction({
  newActiveBalance: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendUpdateStakerTransaction`

Updates staker settings.

**Parameters**

- `newDelegation` (string, required): new validator address or delegation target.
- `reactivateAllStake` (boolean, optional): whether to reactivate all stake.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendUpdateStakerTransaction({
  newDelegation: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  reactivateAllStake: true,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendRetireStakeTransaction`

Retires stake from a staker.

**Parameters**

- `retireStake` (number, required): amount in Luna to retire.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendRetireStakeTransaction({
  retireStake: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `sendRemoveStakeTransaction`

Removes stake from a staker.

**Parameters**

- `value` (number, required): amount in Luna.
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

See [wallet errors](#wallet-errors).

**User confirmation**

- yes

**Example**

```ts
const txHash = await nimiq.sendRemoveStakeTransaction({
  value: 100000,
  // Optional. Nimiq Pay chooses a fee automatically, using 0 if possible.
  fee: 1000,
  // Optional.
  validityStartHeight: 123456,
})
```

### `disconnect`

Clears the provider's cached account list and emits a local `disconnect` event. `connected` then becomes `false`.

```ts
nimiq.disconnect()
```

This method sends no revocation request to Nimiq Pay. It does not change the host's signer or end your mini app's backend session. Clear your app's local state and invalidate its server session separately when the user logs out.

Calling `listAccounts()` afterwards requests addresses from the host again. Whether that opens an approval dialog depends on the host's permissions. The provider has no host permission-state or revocation method.

### `setRPCUrl` and `request`

Set an external Nimiq JSON-RPC endpoint to query blockchain data that has no dedicated provider method:

```ts
nimiq.setRPCUrl('https://your-nimiq-rpc.example')

const result = await nimiq.request({
  method: 'getTransactionByHash',
  params: ['TRANSACTION_HASH'],
})
console.log(result)
```

Replace the endpoint and hash with your own values. Use an endpoint for the same network as the payment. Browser requests require HTTPS and a server that allows your mini app's origin through CORS. Keep private RPC credentials on your backend.

Wallet methods still go through Nimiq Pay. The `nim_isConsensusEstablished` alias also queries the host. Other `request()` calls go to the configured RPC endpoint and fail if none is configured. `setRPCUrl()` does not switch the wallet's network. The dedicated `getBlockNumber()` and `isConsensusEstablished()` methods continue to query the host.

`request()` returns the RPC response's `result.data`, without the JSON-RPC envelope. A TypeScript result type does not validate the response at runtime. See the [RPC methods](/rpc/methods) for query parameters and response fields.
