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

### `payLightningInvoice`

Starts a self-custodial swap that pays a Bitcoin Lightning invoice with NIM or USDT. Nimiq Pay lets the user choose the asset and approve the payment.

**Parameters**

- `invoice` (string, required): fixed-amount BOLT11 invoice or fixed-amount LNURL. It must match the wallet's active network.

**Returns**

- `{ hash: string, swapId: string }` — the submitted NIM or Polygon transaction hash and swap ID. This confirms submission, not Lightning settlement.

**Errors**

- `PERMISSION_DENIED` — the user declined payment-history access, asset selection, or payment approval.
- `INVALID_REQUEST` or `INVALID_TRANSACTION` — the invoice or swap quote is invalid, expired, or otherwise unusable.
- `DUPLICATE_PAYMENT` — the resolved invoice was already submitted or may still be pending.
- `TRANSACTION_OUTCOME_UNKNOWN` — submission may have occurred. Do not retry the same invoice.

For duplicate or uncertain payments, `NimiqProviderError.data` can contain `hash` and `swapId` when known. Duplicate payment identifiers are only disclosed to the same Mini App and wallet.

**User confirmation**

- yes. Nimiq Pay requests access to check this wallet's Lightning invoice history, lets the user choose NIM or USDT, and asks for payment approval.

**Example**

```ts
const { hash, swapId } = await nimiq.payLightningInvoice({ invoice: merchantInvoice })
```

See [Bitcoin Lightning Payments](/mini-apps/features/bitcoin-lightning-payments) for the payment flow and retry guidance.

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
