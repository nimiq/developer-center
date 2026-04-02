---
icon: i-nimiq:verified
navigation:
  title: Stake NIM
  order: 5
description: Create stakers, delegate to validators, add and remove stake, and manage active stake — all from the web client.
---

# Stake NIM

Nimiq uses Proof-of-Stake consensus. You can participate by staking your NIM — delegating it to a validator that produces blocks on your behalf. This guide covers creating a staker, managing stake, and changing delegation, all using the web client.

You'll need a connected client with consensus and a funded keypair. See [Getting Started](../getting-started) and [Create and Manage Wallets](./wallets) if you don't have these.

The examples below assume you have a connected `client`, a funded `keyPair`, and a `sender` address. All values and fees are in luna (1 NIM = 100,000 luna). Each example also uses `validityStartHeight` and `networkId` from the client.

## Create a staker

To start staking, create a staker and delegate to a validator. This transfers NIM from your account into the staking contract.

```js
const validator = Nimiq.Address.fromUserFriendlyAddress('NQ15 0000 0000 0000 0000 0000 0000 0000 0000')

const tx = Nimiq.TransactionBuilder.newCreateStaker(
  sender,
  validator,    // the validator to delegate to
  100_000_00n,  // 100,000 NIM in luna
  0n,           // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

## Add stake

Increase your stake after the staker already exists:

```js
const tx = Nimiq.TransactionBuilder.newAddStake(
  sender,
  sender,       // staker address to add stake to
  50_000_00n,   // 50,000 NIM in luna
  0n,           // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

You can add stake to any staker address, not just your own.

## Change delegation

Switch your delegation to a different validator with `newUpdateStaker`. This is a signaling transaction — it doesn't transfer NIM.

```js
const newValidator = Nimiq.Address.fromUserFriendlyAddress('NQ20 0000 0000 0000 0000 0000 0000 0000 0000')

const tx = Nimiq.TransactionBuilder.newUpdateStaker(
  sender,
  newValidator,  // new validator to delegate to
  true,          // reactivate all stake
  0n,            // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

## Manage active stake

You can control how much of your stake is active (earning rewards) versus inactive.

### Set active stake

Set the total amount of active stake. Stake beyond this amount becomes inactive.

```js
const tx = Nimiq.TransactionBuilder.newSetActiveStake(
  sender,
  80_000_00n,   // new active balance in luna
  0n,           // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

### Retire stake

Move a portion of your inactive stake into the retired state, preparing it for removal.

```js
const tx = Nimiq.TransactionBuilder.newRetireStake(
  sender,
  20_000_00n,   // amount to retire in luna
  0n,           // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

## Remove stake

Withdraw retired NIM from the staking contract back to a regular account.

```js
const tx = Nimiq.TransactionBuilder.newRemoveStake(
  sender,       // recipient of the withdrawn NIM
  20_000_00n,   // amount to remove in luna
  0n,           // fee in luna
  validityStartHeight,
  networkId,
)

tx.sign(keyPair)
await client.sendTransaction(tx)
```

## Query staker and validator data

Check your staking status or look up validator information:

```js
const staker = await client.getStaker(sender)
console.log(staker.balance, staker.delegation)

const validator = await client.getValidator('NQ15 0000 0000 0000 0000 0000 0000 0000 0000')
console.log(validator.balance, validator.rewardAddress)
```

## Next steps

- [Query the Blockchain](./query-the-blockchain) — check balances and staker data
- [Listen for Events](./listen-for-events) — monitor transactions related to your staker
- [API Reference](../reference/) — full TransactionBuilder staking method signatures
