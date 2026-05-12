---
icon: i-nimiq:nodes
navigation:
  title: Query the Blockchain
  order: 1
description: Fetch account balances, look up blocks, check transaction status, and query validators — all read-only operations that don't require keys or signing.
---

# Query the Blockchain

Once your client has [established consensus](../getting-started), you can query the blockchain for account data, blocks, and transactions. All operations in this guide are read-only — no keys or signing required.

The examples below assume you have a connected `client` instance. See [Getting Started](../getting-started) if you haven't set one up yet.

## Fetch an account balance

Every Nimiq address has an associated account. Use `getAccount()` to fetch its current state, including the balance in luna (1 NIM = 100,000 luna).

```js
const account = await client.getAccount('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')

console.log(account.type)    // 'basic', 'vesting', or 'htlc'
console.log(account.balance) // balance in luna
```

To fetch multiple accounts in a single call:

```js
const accounts = await client.getAccounts([
  'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  'NQ15 0000 0000 0000 0000 0000 0000 0000 0000',
])

for (const account of accounts) {
  console.log(account.address, account.balance)
}
```

## Get the current head block

The head block is the most recent block the client knows about.

```js
// Just the height
const height = await client.getHeadHeight()

// Just the hash
const hash = await client.getHeadHash()

// The full block (header only — light clients don't have block bodies)
const block = await client.getHeadBlock()
console.log(block.height, block.hash, block.timestamp)
```

You can also fetch a specific block by hash or height, but only if the client has it in local memory. Light clients do not store historical blocks — see [How the Light Client Works](../concepts/how-the-light-client-works) for details.

```js
const block = await client.getBlockAt(12345) // throws if not available locally
```

## Look up a transaction

If you know a transaction hash, you can fetch its details:

```js
const tx = await client.getTransaction('abcdef1234567890...')

console.log(tx.sender, tx.recipient, tx.value, tx.state)
```

## Query transactions for an address

To get recent transactions involving a specific address:

```js
const transactions = await client.getTransactionsByAddress(
  'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
)

for (const tx of transactions) {
  console.log(tx.sender, '→', tx.recipient, tx.value, 'luna')
}
```

You can narrow the query with optional parameters:

```js
const transactions = await client.getTransactionsByAddress(
  'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  50000,  // sinceBlockHeight — only return transactions after this block
  [],     // knownTransactionDetails — exclude already-known transactions
  undefined, // startAt
  10,     // limit — maximum number of transactions to return
)
```

For lightweight receipt data (not fully verified), use `getTransactionReceiptsByAddress()` instead.

## Query validators and stakers

If you're building around staking, you can look up validator and staker data:

```js
// Single validator
const validator = await client.getValidator('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')

// Multiple validators at once
const validators = await client.getValidators([address1, address2])

// Single staker
const staker = await client.getStaker('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')

// Multiple stakers at once
const stakers = await client.getStakers([address1, address2])
```

## Next steps

- [Listen for Events](./listen-for-events) — react to new blocks and transactions in real time
- [Create and Manage Wallets](./wallets) — generate keys to start sending transactions
- [API Reference](../reference/) — full method signatures and return types
