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

## Methods

### `listAccounts`

Returns the user's Nimiq account addresses.

**Parameters**

- none

**Returns**

- `string[]` — user-friendly addresses.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.

**User confirmation**

- yes

**Example**

```ts
const accounts = await nimiq.listAccounts()
```

### `getBalance`

Reads the on-chain balance of any valid Nimiq address through Nimiq Pay's client on its active network (mainnet or testnet). The address can belong to someone else. No account approval, ownership check, or transaction listener is required, and you do not need to call `listAccounts()` first.

Use SDK `0.2.1` or later and a version of Nimiq Pay that exposes this method. Updating the SDK alone does not add it to older hosts. After `init()`, check `typeof nimiq.getBalance === 'function'` and ask the user to update Nimiq Pay if it is unavailable.

**Parameters**

- `address` (string, required): a valid Nimiq address. A missing, non-string, or malformed address is rejected.

**Returns**

- `Promise<number>` through the provider returned by `init()`. The value is in luna: 100,000 luna = 1 NIM.

A result of `0` means the lookup succeeded and reported zero. Failed lookups reject; they do not return zero. This is the balance of the supplied address, not a wallet total. Contract balances, including HTLC and vesting balances, are not necessarily spendable: their spending conditions still apply.

**Errors**

The SDK provider rejects with `NimiqProviderError`. Use `NimiqProviderError.is(error)` to recognize it, then inspect `type`, `message`, and `code`.

| Type | Code | Cause |
| --- | --- | --- |
| `INVALID_REQUEST` | `-32602` | The address is missing or invalid. |
| `NETWORK_ERROR` | `-32000` | The client is unavailable, consensus is not established, or the lookup fails or exceeds the 30-second timeout. |

**User confirmation**

- no

**Example**

```ts
import { init, NimiqProviderError } from '@nimiq/mini-app-sdk'

const nimiq = await init()

if (typeof nimiq.getBalance !== 'function') {
  console.info('Update Nimiq Pay to look up balances.')
}
else {
  try {
    const balanceLuna = await nimiq.getBalance('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')
    console.log({ balanceLuna, balanceNim: balanceLuna / 100_000 })
  }
  catch (error) {
    if (NimiqProviderError.is(error)) {
      console.error(error.type, error.message, error.code)
    }
    else {
      throw error
    }
  }
}
```

Replace the example address with the address you want to query. On a supported host, the generic request form performs the same lookup:

```ts
const balanceLuna = await nimiq.request({
  method: 'getBalance',
  params: { address: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000' },
})
```

Both forms use the native bridge. They require no external RPC endpoint, and `setRPCUrl()` does not change the network used for this lookup.

### `sign`

Signs a message with the user's Nimiq key.

**Parameters**

- `message` (string | object, required): plain text string or `{ message: string, isHex?: boolean }`.

**Returns**

- `{ publicKey: string, signature: string }` — hex strings.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.

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

Sends a basic NIM payment.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

Sends a NIM payment with an attached text message.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.
- `data` (string, required): text message to attach.
- `validityStartHeight` (number, optional): block height from which the transaction becomes valid.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

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
