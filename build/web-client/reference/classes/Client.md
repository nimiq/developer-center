[@nimiq/core](../globals.md) / Client

# Class: Client

Defined in: @nimiq/core/types/wasm/web.d.ts:789

Nimiq Albatross client that runs in browsers via WASM and is exposed to Javascript.

### Usage:

```js
import init, * as Nimiq from './pkg/nimiq_web_client.js'

init().then(async () => {
  const config = new Nimiq.ClientConfiguration()
  const client = await config.instantiateClient()
  // ...
})
```

## Methods

### addConsensusChangedListener()

> **addConsensusChangedListener**(`listener`): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:799

Adds an event listener for consensus-change events, such as when consensus is established or lost.

#### Parameters

##### listener

(`state`) => `any`

#### Returns

`Promise`\<`number`\>

***

### addHeadChangedListener()

> **addHeadChangedListener**(`listener`): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:803

Adds an event listener for new blocks added to the blockchain.

#### Parameters

##### listener

(`hash`, `reason`, `reverted_blocks`, `adopted_blocks`) => `any`

#### Returns

`Promise`\<`number`\>

***

### addPeerChangedListener()

> **addPeerChangedListener**(`listener`): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:807

Adds an event listener for peer-change events, such as when a new peer joins, or a peer leaves.

#### Parameters

##### listener

(`peer_id`, `reason`, `peer_count`, `peer_info?`) => `any`

#### Returns

`Promise`\<`number`\>

***

### addTransactionListener()

> **addTransactionListener**(`listener`, `addresses`): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:813

Adds an event listener for transactions to and from the provided addresses.

The listener is called for transactions when they are _included_ in the blockchain.

#### Parameters

##### listener

(`transaction`) => `any`

##### addresses

(`string` \| [`Address`](Address.md) \| `Uint8Array`)[]

#### Returns

`Promise`\<`number`\>

***

### connectNetwork()

> **connectNetwork**(): `Promise`\<`void`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:960

This function is used to tell the network to (re)start connecting to peers.
This is could be used to tell the network to restart connection operations after
disconnect network is called.

#### Returns

`Promise`\<`void`\>

***

### disconnectNetwork()

> **disconnectNetwork**(): `Promise`\<`void`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:954

This function is used to tell the network to disconnect from every connected
peer and stop trying to connect to other peers.

**Important**: this function returns when the signal to disconnect was sent,
before all peers actually disconnect. This means that in order to ensure the
network is disconnected, wait for all peers to disappear after calling.

#### Returns

`Promise`\<`void`\>

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:791

#### Returns

`void`

***

### getAccount()

> **getAccount**(`address`): `Promise`\<[`PlainAccount`](../type-aliases/PlainAccount.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:871

Fetches the account for the provided address from the network.

Throws if the address cannot be parsed and on network errors.

#### Parameters

##### address

`string` | [`Address`](Address.md) | `Uint8Array`

#### Returns

`Promise`\<[`PlainAccount`](../type-aliases/PlainAccount.md)\>

***

### getAccounts()

> **getAccounts**(`addresses`): `Promise`\<[`PlainAccount`](../type-aliases/PlainAccount.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:877

Fetches the accounts for the provided addresses from the network.

Throws if an address cannot be parsed and on network errors.

#### Parameters

##### addresses

(`string` \| [`Address`](Address.md) \| `Uint8Array`)[]

#### Returns

`Promise`\<[`PlainAccount`](../type-aliases/PlainAccount.md)[]\>

***

### getAddressBook()

> **getAddressBook**(): `Promise`\<[`PlainPeerInfo`](../interfaces/PlainPeerInfo.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:849

Returns the current address books peers.
Each peer will have one address and currently no guarantee for the usefulness of that address can be given.

The resulting Array may be empty if there is no peers in the address book.

#### Returns

`Promise`\<[`PlainPeerInfo`](../interfaces/PlainPeerInfo.md)[]\>

***

### getBlock()

> **getBlock**(`hash`): `Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:857

Fetches a block by its hash.

Throws if the client does not have the block.

Fetching blocks from the network is not yet available.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

***

### getBlockAt()

> **getBlockAt**(`height`): `Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:865

Fetches a block by its height (block number).

Throws if the client does not have the block.

Fetching blocks from the network is not yet available.

#### Parameters

##### height

`number`

#### Returns

`Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

***

### getHeadBlock()

> **getHeadBlock**(): `Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:842

Returns the current blockchain head block.
Note that the web client is a light client and does not have block bodies, i.e. no transactions.

#### Returns

`Promise`\<[`PlainBlock`](../type-aliases/PlainBlock.md)\>

***

### getHeadHash()

> **getHeadHash**(): `Promise`\<`string`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:833

Returns the block hash of the current blockchain head.

#### Returns

`Promise`\<`string`\>

***

### getHeadHeight()

> **getHeadHeight**(): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:837

Returns the block number of the current blockchain head.

#### Returns

`Promise`\<`number`\>

***

### getNetworkId()

> **getNetworkId**(): `Promise`\<`number`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:821

Returns the network ID that the client is connecting to.

#### Returns

`Promise`\<`number`\>

***

### getStaker()

> **getStaker**(`address`): `Promise`\<[`PlainStaker`](../interfaces/PlainStaker.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:883

Fetches the staker for the provided address from the network.

Throws if the address cannot be parsed and on network errors.

#### Parameters

##### address

`string` | [`Address`](Address.md) | `Uint8Array`

#### Returns

`Promise`\<[`PlainStaker`](../interfaces/PlainStaker.md)\>

***

### getStakers()

> **getStakers**(`addresses`): `Promise`\<[`PlainStaker`](../interfaces/PlainStaker.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:889

Fetches the stakers for the provided addresses from the network.

Throws if an address cannot be parsed and on network errors.

#### Parameters

##### addresses

(`string` \| [`Address`](Address.md) \| `Uint8Array`)[]

#### Returns

`Promise`\<[`PlainStaker`](../interfaces/PlainStaker.md)[]\>

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:911

Fetches the transaction details for the given transaction hash.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)\>

***

### getTransactionReceiptsByAddress()

> **getTransactionReceiptsByAddress**(`address`, `limit?`, `start_at?`, `min_peers?`): `Promise`\<[`PlainTransactionReceipt`](../interfaces/PlainTransactionReceipt.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:923

This function is used to query the network for transaction receipts from and to a
specific address, that have been included in the chain.

The obtained receipts are _not_ verified before being returned.

Up to a `limit` number of transaction receipts are returned from newest to oldest.
It starts at the `start_at` transaction and goes backwards. If this hash does not exist
or does not belong to the address, an empty list is returned.
If the network does not have at least `min_peers` to query, then an error is returned.

#### Parameters

##### address

`string` | [`Address`](Address.md) | `Uint8Array`

##### limit?

`number`

##### start\_at?

`string`

##### min\_peers?

`number`

#### Returns

`Promise`\<[`PlainTransactionReceipt`](../interfaces/PlainTransactionReceipt.md)[]\>

***

### getTransactionsByAddress()

> **getTransactionsByAddress**(`address`, `since_block_height?`, `known_transaction_details?`, `start_at?`, `limit?`, `min_peers?`): `Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:945

This function is used to query the network for transactions from and to a specific
address, that have been included in the chain.

The obtained transactions are verified before being returned.

If you already have transactions belonging to this address, you can provide some of that
information to reduce the amount of network requests made:
- Provide the `since_block_height` parameter to exclude any history from before
  that block height. You should be completely certain about its state. This should not be
  the last known block height, but an earlier block height that could not have been forked
  from (e.g. the last known election or checkpoint block).
- Provide a list of `known_transaction_details` to have them verified and/or broadcasted
  again.
- Provide a `start_at` parameter to start the query at a specific transaction hash
  (which will not be included). This hash must exist and the corresponding transaction
  must involve this address for the query to work correctly.

Up to a `limit` number of transactions are returned from newest to oldest.
If the network does not have at least `min_peers` to query, an error is returned.

#### Parameters

##### address

`string` | [`Address`](Address.md) | `Uint8Array`

##### since\_block\_height?

`number`

##### known\_transaction\_details?

[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)[]

##### start\_at?

`string`

##### limit?

`number`

##### min\_peers?

`number`

#### Returns

`Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)[]\>

***

### getValidator()

> **getValidator**(`address`): `Promise`\<[`PlainValidator`](../interfaces/PlainValidator.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:895

Fetches the validator for the provided address from the network.

Throws if the address cannot be parsed and on network errors.

#### Parameters

##### address

`string` | [`Address`](Address.md) | `Uint8Array`

#### Returns

`Promise`\<[`PlainValidator`](../interfaces/PlainValidator.md)\>

***

### getValidators()

> **getValidators**(`addresses`): `Promise`\<[`PlainValidator`](../interfaces/PlainValidator.md)[]\>

Defined in: @nimiq/core/types/wasm/web.d.ts:901

Fetches the validators for the provided addresses from the network.

Throws if an address cannot be parsed and on network errors.

#### Parameters

##### addresses

(`string` \| [`Address`](Address.md) \| `Uint8Array`)[]

#### Returns

`Promise`\<[`PlainValidator`](../interfaces/PlainValidator.md)[]\>

***

### isConsensusEstablished()

> **isConsensusEstablished**(): `Promise`\<`boolean`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:825

Returns if the client currently has consensus with the network.

#### Returns

`Promise`\<`boolean`\>

***

### removeListener()

> **removeListener**(`handle`): `Promise`\<`void`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:817

Removes an event listener by its handle.

#### Parameters

##### handle

`number`

#### Returns

`Promise`\<`void`\>

***

### sendTransaction()

> **sendTransaction**(`transaction`): `Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:907

Sends a transaction to the network and returns [PlainTransactionDetails](../interfaces/PlainTransactionDetails.md).

Throws in case of network errors.

#### Parameters

##### transaction

`string` | [`PlainTransaction`](../interfaces/PlainTransaction.md) | `Uint8Array` | [`Transaction`](Transaction.md)

#### Returns

`Promise`\<[`PlainTransactionDetails`](../interfaces/PlainTransactionDetails.md)\>

***

### waitForConsensusEstablished()

> **waitForConsensusEstablished**(): `Promise`\<`void`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:829

Returns a promise that resolves when the client has established consensus with the network.

#### Returns

`Promise`\<`void`\>

***

### create()

> `static` **create**(`config`): `Promise`\<`Client`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:795

Creates a new Client that automatically starts connecting to the network.

#### Parameters

##### config

[`PlainClientConfiguration`](../interfaces/PlainClientConfiguration.md)

#### Returns

`Promise`\<`Client`\>
