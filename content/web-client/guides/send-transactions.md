---
icon: i-nimiq:duotone-send
navigation:
  title: Send Transactions
  order: 4
description: Build, sign, and broadcast NIM transfers — with and without data payloads.
---

# Send Transactions

This guide walks through creating, signing, and broadcasting transactions using the web client. You'll need a connected client with consensus and a keypair with funds. If you don't have these yet, see [Getting Started](../getting-started) and [Create and Manage Wallets](./wallets).

The examples below assume you have a connected `client`, a funded `keyPair`, and a `sender` address derived from it. See [Getting Started](../getting-started) and [Create and Manage Wallets](./wallets) if you don't have these yet.

## Send a basic transaction

A basic transaction transfers NIM from one address to another. Values and fees are in luna (1 NIM = 100,000 luna).

```js
const recipient = Nimiq.Address.fromUserFriendlyAddress('NQ15 0000 0000 0000 0000 0000 0000 0000 0000')

const tx = Nimiq.TransactionBuilder.newBasic(
  sender,
  recipient,
  100_000_000_00n,  // 1,000 NIM in luna
  0n,         // fee in luna — 0 is valid for most transactions
  await client.getHeadHeight(), // validity start height
  await client.getNetworkId(),
)

tx.sign(keyPair)

const details = await client.sendTransaction(tx)
console.log('Transaction hash:', details.hash)
console.log('State:', details.state)
```

The `validityStartHeight` determines when the transaction becomes valid. Setting it to the current head height means it's valid immediately. Transactions expire after a protocol-defined window.

## Send a transaction with data

You can attach up to 64 bytes of arbitrary data to a transaction:

```js
const data = new TextEncoder().encode('Hello Nimiq!')

const tx = Nimiq.TransactionBuilder.newBasicWithData(
  sender,
  recipient,
  data,
  500_00n,    // 500 NIM in luna
  0n,         // fee in luna
  await client.getHeadHeight(),
  await client.getNetworkId(),
)

tx.sign(keyPair)

const details = await client.sendTransaction(tx)
console.log('Transaction hash:', details.hash)
```

## Check transaction status

After broadcasting, you can check the transaction state:

```js
const tx = await client.getTransaction(details.hash)
console.log('State:', tx.state) // 'pending', 'included', etc.
```

Or watch for it in real time with a [transaction listener](./listen-for-events#track-transactions-for-an-address):

```js
await client.addTransactionListener(
  (tx) => console.log('Confirmed:', tx.hash, tx.state),
  [sender],
)
```

## Fees

A fee of `0n` is valid for most transactions. Fees become relevant when the network is congested — higher fees increase the priority of your transaction. Fees are denominated in luna.

## Next steps

- [Stake NIM](./stake-nim) — use transactions to create stakers and delegate to validators
- [Query the Blockchain](./query-the-blockchain) — check balances and transaction history
- [API Reference](../reference/) — full TransactionBuilder and Client method signatures
