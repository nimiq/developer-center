# Policy

> @nimiq/core / Policy

[@nimiq/core](../globals) / Policy

# Class: Policy

Defined in: @nimiq/core/types/wasm/web.d.ts:1465

Policy constants

## Properties

### BATCHES_PER_EPOCH

> `readonly` `static` **BATCHES_PER_EPOCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1596

How many batches constitute an epoch

---

### BLOCK_SEPARATION_TIME

> `readonly` `static` **BLOCK_SEPARATION_TIME**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1660

The optimal time in milliseconds between blocks (1s)

---

### BLOCKS_PER_BATCH

> `readonly` `static` **BLOCKS_PER_BATCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1600

Length of a batch including the macro block

---

### BLOCKS_PER_EPOCH

> `readonly` `static` **BLOCKS_PER_EPOCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1604

Length of an epoch including the election block

---

### BLS_CACHE_MAX_CAPACITY

> `readonly` `static` **BLS_CACHE_MAX_CAPACITY**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1691

The maximum size of the BLS public key cache.

---

### COINBASE_ADDRESS

> `readonly` `static` **COINBASE_ADDRESS**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1625

This is the address for the coinbase. Note that this is not a real account, it is just the
address we use to denote that some coins originated from a coinbase event.

---

### F_PLUS_ONE

> `readonly` `static` **F_PLUS_ONE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1652

Calculates f+1 slots which is the minimum number of slots necessary to be guaranteed to have at
least one honest slots. That's because from a total of 3f+1 slots at most f will be malicious.
It is calculated as `ceil(SLOTS/3)` and we use the formula `ceil(x/y) = (x+y-1)/y` for the
ceiling division.

---

### GENESIS_BLOCK_NUMBER

> `readonly` `static` **GENESIS_BLOCK_NUMBER**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1608

Genesis block number

---

### HISTORY_CHUNKS_MAX_SIZE

> `readonly` `static` **HISTORY_CHUNKS_MAX_SIZE**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1696

Maximum size of history chunks.
25 MB.

---

### JAIL_EPOCHS

> `readonly` `static` **JAIL_EPOCHS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1683

The number of epochs a validator is put in jail for. The jailing only happens for severe offenses.

---

### MAX_SIZE_MICRO_BODY

> `readonly` `static` **MAX_SIZE_MICRO_BODY**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1629

The maximum allowed size, in bytes, for a micro block body.

---

### MAX_SUPPORTED_VERSION

> `readonly` `static` **MAX_SUPPORTED_VERSION**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1612

Genesis block number

---

### MIN_EPOCHS_STORED

> `readonly` `static` **MIN_EPOCHS_STORED**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1664

Minimum number of epochs that the ChainStore will store fully

---

### MIN_PRODUCER_TIMEOUT

> `readonly` `static` **MIN_PRODUCER_TIMEOUT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1656

The minimum timeout in milliseconds for a validator to produce a block (4s)

---

### MINIMUM_REWARDS_PERCENTAGE

> `readonly` `static` **MINIMUM_REWARDS_PERCENTAGE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1673

The minimum rewards percentage that we allow

---

### SLOTS

> `readonly` `static` **SLOTS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1633

Number of available validator slots. Note that a single validator may own several validator slots.

---

### STAKING_CONTRACT_ADDRESS

> `readonly` `static` **STAKING_CONTRACT_ADDRESS**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1620

This is the address for the staking contract.

---

### STATE_CHUNKS_MAX_SIZE

> `readonly` `static` **STATE_CHUNKS_MAX_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1616

Maximum size of accounts trie chunks.

---

### TIMESTAMP_MAX_DRIFT

> `readonly` `static` **TIMESTAMP_MAX_DRIFT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1669

The maximum drift, in milliseconds, that is allowed between any block's timestamp and the node's
system time. We only care about drifting to the future.

---

### TOTAL_SUPPLY

> `readonly` `static` **TOTAL_SUPPLY**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1687

Total supply in units.

---

### TRANSACTION_VALIDITY_WINDOW

> `readonly` `static` **TRANSACTION_VALIDITY_WINDOW**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1588

Number of batches a transaction is valid with Albatross consensus.

---

### TRANSACTION_VALIDITY_WINDOW_BLOCKS

> `readonly` `static` **TRANSACTION_VALIDITY_WINDOW_BLOCKS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1592

Number of blocks a transaction is valid with Albatross consensus.

---

### TWO_F_PLUS_ONE

> `readonly` `static` **TWO_F_PLUS_ONE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1645

Calculates 2f+1 slots which is the minimum number of slots necessary to produce a macro block,
a skip block and other actions.
It is also the minimum number of slots necessary to be guaranteed to have a majority of honest
slots. That's because from a total of 3f+1 slots at most f will be malicious. If in a group of
2f+1 slots we have f malicious ones (which is the worst case scenario), that still leaves us
with f+1 honest slots. Which is more than the f slots that are not in this group (which must all
be honest).
It is calculated as `ceil(SLOTS*2/3)` and we use the formula `ceil(x/y) = (x+y-1)/y` for the
ceiling division.

---

### VALIDATOR_DEPOSIT

> `readonly` `static` **VALIDATOR_DEPOSIT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1679

The deposit necessary to create a validator in Lunas (1 NIM = 100,000 Lunas).
A validator is someone who actually participates in block production. They are akin to miners
in proof-of-work.

## Methods

### [dispose]()

> **[dispose]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1468

#### Returns

`void`

---

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1467

#### Returns

`void`

---

### batchAt()

> `static` **batchAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1481

Returns the batch number at a given `block_number` (height)

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### batchDelayPenalty()

> `static` **batchDelayPenalty**(`delay`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1584

Returns the percentage reduction that should be applied to the rewards due to a delayed batch.
This function returns a float in the range <span>

0, 1

</span>


I.e 1 means that the full rewards should be given, whereas 0.5 means that half of the rewards should be given
The input to this function is the batch delay, in milliseconds
The function is: <span>

(1 - MINIMUM_REWARDS_PERCENTAGE) * BLOCKS_DELAY_DECAY ^ (t^2)

</span>

 + MINIMUM_REWARDS_PERCENTAGE

#### Parameters

##### delay

`bigint`

#### Returns

`number`

---

### batchIndexAt()

> `static` **batchIndexAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1486

Returns the batch index at a given block number. The batch index is the number of a block relative
to the batch it is in. For example, the first block of any batch always has an batch index of 0.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### blockAfterJail()

> `static` **blockAfterJail**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1566

Returns the first block after the jail period of a given block number has ended.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### blockAfterReportingWindow()

> `static` **blockAfterReportingWindow**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1562

Returns the first block after the reporting window of a given block number has ended.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### electionBlockAfter()

> `static` **electionBlockAfter**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1490

Returns the number (height) of the next election macro block after a given block number (height).

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### electionBlockBefore()

> `static` **electionBlockBefore**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1495

Returns the block number (height) of the preceding election macro block before a given block number (height).
If the given block number is an election macro block, it returns the election macro block before it.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### electionBlockOf()

> `static` **electionBlockOf**(`epoch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1542

Returns the block number of the election macro block of the given epoch (which is always the last block).
If the index is out of bounds, None is returned

#### Parameters

##### epoch

`number`

#### Returns

`number`

---

### epochAt()

> `static` **epochAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1472

Returns the epoch number at a given block number (height).

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### epochIndexAt()

> `static` **epochIndexAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1477

Returns the epoch index at a given block number. The epoch index is the number of a block relative
to the epoch it is in. For example, the first block of any epoch always has an epoch index of 0.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### firstBatchOfEpoch()

> `static` **firstBatchOfEpoch**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1553

Returns a boolean expressing if the batch at a given block number (height) is the first batch
of the epoch.

#### Parameters

##### block_number

`number`

#### Returns

`boolean`

---

### firstBlockOf()

> `static` **firstBlockOf**(`epoch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1532

Returns the block number of the first block of the given epoch (which is always a micro block).
If the index is out of bounds, None is returned

#### Parameters

##### epoch

`number`

#### Returns

`number`

---

### firstBlockOfBatch()

> `static` **firstBlockOfBatch**(`batch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1537

Returns the block number of the first block of the given batch (which is always a micro block).
If the index is out of bounds, None is returned

#### Parameters

##### batch

`number`

#### Returns

`number`

---

### isElectionBlockAt()

> `static` **isElectionBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1504

Returns a boolean expressing if the block at a given block number (height) is an election macro block.

#### Parameters

##### block_number

`number`

#### Returns

`boolean`

---

### isMacroBlockAt()

> `static` **isMacroBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1523

Returns a boolean expressing if the block at a given block number (height) is a macro block.

#### Parameters

##### block_number

`number`

#### Returns

`boolean`

---

### isMicroBlockAt()

> `static` **isMicroBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1527

Returns a boolean expressing if the block at a given block number (height) is a micro block.

#### Parameters

##### block_number

`number`

#### Returns

`boolean`

---

### lastBlockOfReportingWindow()

> `static` **lastBlockOfReportingWindow**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1558

Returns the block height for the last block of the reporting window of a given block number.
Note: This window is meant for reporting malicious behaviour (aka `jailable` behaviour).

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### lastElectionBlock()

> `static` **lastElectionBlock**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1500

Returns the block number (height) of the last election macro block at a given block number (height).
If the given block number is an election macro block, then it returns that block number.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### lastMacroBlock()

> `static` **lastMacroBlock**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1519

Returns the block number (height) of the last macro block at a given block number (height).
If the given block number is a macro block, then it returns that block number.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### macroBlockAfter()

> `static` **macroBlockAfter**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1509

Returns the block number (height) of the next macro block after a given block number (height).
If the given block number is a macro block, it returns the macro block after it.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### macroBlockBefore()

> `static` **macroBlockBefore**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1514

Returns the block number (height) of the preceding macro block before a given block number (height).
If the given block number is a macro block, it returns the macro block before it.

#### Parameters

##### block_number

`number`

#### Returns

`number`

---

### macroBlockOf()

> `static` **macroBlockOf**(`batch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1548

Returns the block number of the macro block (checkpoint or election) of the given batch (which
is always the last block).
If the index is out of bounds, None is returned

#### Parameters

##### batch

`number`

#### Returns

`number`

---

### supplyAt()

> `static` **supplyAt**(`genesis_supply`, `genesis_time`, `current_time`): `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1576

Returns the supply at a given time (as Unix time) in Lunas (1 NIM = 100,000 Lunas). It is
calculated using the following formula:

```text
supply(t) = total_supply - (total_supply - genesis_supply) * supply_decay^t
```

Where t is the time in milliseconds since the PoS genesis block and `genesis_supply` is the supply at
the genesis of the Nimiq 2.0 chain.

#### Parameters

##### genesis_supply

`bigint`

##### genesis_time

`bigint`

##### current_time

`bigint`

#### Returns

`bigint`
