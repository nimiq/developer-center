# Nimiq Provider API (window.nimiq)

This provider exposes Nimiq blockchain operations and is injected into the mini app environment.

## Access

```javascript
const nimiq = window.nimiq
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

```javascript
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

```javascript
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

```javascript
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

```javascript
const height = await nimiq.getBlockNumber()
```

### `sendBasicTransaction`

Sends a basic NIM payment.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendBasicTransaction({
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
})
```

### `sendBasicTransactionWithData`

Sends a NIM payment with an attached text message.

**Parameters**

- `recipient` (string, required): Nimiq user-friendly address.
- `value` (number, required): amount in Luna (1 NIM = 100,000 Luna).
- `fee` (number, optional): transaction fee in Luna.
- `data` (string, optional): text message to attach.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendBasicTransactionWithData({
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
  data: 'mic check',
})
```

### `sendNewStakerTransaction`

Creates a new staking transaction.

**Parameters**

- `delegation` (string, required): validator address or delegation target.
- `value` (number, required): amount in Luna.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendNewStakerTransaction({
  delegation: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 100000,
  fee: 1000,
})
```

### `sendAddStakeTransaction`

Adds stake to an existing staker.

**Parameters**

- `value` (number, required): amount in Luna.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendAddStakeTransaction({
  value: 100000,
  fee: 1000,
})
```

### `sendSetActiveStakeTransaction`

Sets the active stake amount.

**Parameters**

- `newActiveBalance` (number, required): active stake amount in Luna.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendSetActiveStakeTransaction({
  newActiveBalance: 100000,
  fee: 1000,
})
```

### `sendUpdateStakerTransaction`

Updates staker settings.

**Parameters**

- `newDelegation` (string, required): new validator address or delegation target.
- `reactivateAllStake` (boolean, required): whether to reactivate all stake.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendUpdateStakerTransaction({
  newDelegation: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  reactivateAllStake: true,
  fee: 1000,
})
```

### `sendRetireStakeTransaction`

Retires stake from a staker.

**Parameters**

- `retireStake` (number, required): amount in Luna to retire.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendRetireStakeTransaction({
  retireStake: 100000,
  fee: 1000,
})
```

### `sendRemoveStakeTransaction`

Removes stake from a staker.

**Parameters**

- `value` (number, required): amount in Luna.
- `fee` (number, required): transaction fee in Luna.

**Returns**

- `string` — transaction hash.

**Errors**

- `PermissionDeniedError` — user rejected the confirmation dialog.
- `InvalidTransactionError` — transaction data malformed.

**User confirmation**

- yes

**Example**

```javascript
const txHash = await nimiq.sendRemoveStakeTransaction({
  value: 100000,
  fee: 1000,
})
```
