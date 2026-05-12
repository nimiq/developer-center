---
icon: i-nimiq:bolt
navigation:
  title: Listen for Events
  order: 2
description: Subscribe to new blocks, track transactions for specific addresses, and monitor consensus and peer changes in real time.
---

# Listen for Events

The web client can notify your application when things happen on the blockchain — new blocks, incoming transactions, peer changes, and consensus state transitions. All listeners are asynchronous and return a numeric handle you can use to unsubscribe later.

The examples below assume you have a connected `client` instance. See [Getting Started](../getting-started) if you haven't set one up yet.

## Listen for new blocks

`addHeadChangedListener` fires every time the client adopts a new block. The callback receives the block hash, the reason for the change, and arrays of reverted and adopted blocks (relevant during chain reorganizations).

```js
const handle = await client.addHeadChangedListener((hash, reason, revertedBlocks, adoptedBlocks) => {
  console.log('New head:', hash, 'reason:', reason)
  console.log('Adopted:', adoptedBlocks.length, 'Reverted:', revertedBlocks.length)
})
```

This is useful for updating UI state, refreshing balances, or triggering background work whenever the chain advances.

## Track transactions for an address

`addTransactionListener` fires when a transaction involving any of the provided addresses is included in the blockchain. The callback receives the full transaction details.

```js
const handle = await client.addTransactionListener(
  (transaction) => {
    console.log('Transaction:', transaction.sender, '→', transaction.recipient)
    console.log('Value:', transaction.value, 'luna')
  },
  ['NQ07 0000 0000 0000 0000 0000 0000 0000 0000'], // addresses to watch
)
```

You can watch multiple addresses at once by passing them all in the array. The listener fires for both incoming and outgoing transactions.

## Monitor consensus state

`addConsensusChangedListener` fires when consensus is established or lost. Use this to show connection status in your UI or to pause operations that depend on an up-to-date chain view.

```js
const handle = await client.addConsensusChangedListener((state) => {
  console.log('Consensus state:', state)
})
```

See [How the Light Client Works](../concepts/how-the-light-client-works#consensus) for what "consensus established" means for a light client.

## Track peer changes

`addPeerChangedListener` fires when peers connect or disconnect. Useful for monitoring network health.

```js
const handle = await client.addPeerChangedListener((peerId, reason, peerCount, peerInfo) => {
  console.log('Peer', peerId, reason, '— total peers:', peerCount)
})
```

## Remove a listener

Every `add*Listener` method returns a numeric handle. Pass it to `removeListener()` to unsubscribe:

```js
const handle = await client.addHeadChangedListener((hash) => {
  console.log('New head:', hash)
})

// Later, when you no longer need the listener:
await client.removeListener(handle)
```

## Next steps

- [Create and Manage Wallets](./wallets) — generate keys to start signing transactions
- [Send Transactions](./send-transactions) — build and broadcast NIM transfers
- [API Reference](../reference/) — full callback signatures and return types
