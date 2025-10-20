[@nimiq/core](../globals.md) / Policy

# Class: Policy

Defined in: @nimiq/core/types/wasm/web.d.ts:1449

Policy constants

## Properties

### BATCHES\_PER\_EPOCH

> `readonly` `static` **BATCHES\_PER\_EPOCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1579

How many batches constitute an epoch

***

### BLOCK\_SEPARATION\_TIME

> `readonly` `static` **BLOCK\_SEPARATION\_TIME**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1643

The optimal time in milliseconds between blocks (1s)

***

### BLOCKS\_PER\_BATCH

> `readonly` `static` **BLOCKS\_PER\_BATCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1583

Length of a batch including the macro block

***

### BLOCKS\_PER\_EPOCH

> `readonly` `static` **BLOCKS\_PER\_EPOCH**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1587

Length of an epoch including the election block

***

### BLS\_CACHE\_MAX\_CAPACITY

> `readonly` `static` **BLS\_CACHE\_MAX\_CAPACITY**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1674

The maximum size of the BLS public key cache.

***

### COINBASE\_ADDRESS

> `readonly` `static` **COINBASE\_ADDRESS**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1604

This is the address for the coinbase. Note that this is not a real account, it is just the
address we use to denote that some coins originated from a coinbase event.

***

### F\_PLUS\_ONE

> `readonly` `static` **F\_PLUS\_ONE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1635

Calculates f+1 slots which is the minimum number of slots necessary to be guaranteed to have at
least one honest slots. That's because from a total of 3f+1 slots at most f will be malicious.
It is calculated as `ceil(SLOTS/3)` and we use the formula `ceil(x/y) = (x+y-1)/y` for the
ceiling division.

***

### GENESIS\_BLOCK\_NUMBER

> `readonly` `static` **GENESIS\_BLOCK\_NUMBER**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1591

Genesis block number

***

### HISTORY\_CHUNKS\_MAX\_SIZE

> `readonly` `static` **HISTORY\_CHUNKS\_MAX\_SIZE**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1679

Maximum size of history chunks.
25 MB.

***

### JAIL\_EPOCHS

> `readonly` `static` **JAIL\_EPOCHS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1666

The number of epochs a validator is put in jail for. The jailing only happens for severe offenses.

***

### MAX\_SIZE\_MICRO\_BODY

> `readonly` `static` **MAX\_SIZE\_MICRO\_BODY**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1608

The maximum allowed size, in bytes, for a micro block body.

***

### MIN\_EPOCHS\_STORED

> `readonly` `static` **MIN\_EPOCHS\_STORED**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1647

Minimum number of epochs that the ChainStore will store fully

***

### MIN\_PRODUCER\_TIMEOUT

> `readonly` `static` **MIN\_PRODUCER\_TIMEOUT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1639

The minimum timeout in milliseconds for a validator to produce a block (4s)

***

### MINIMUM\_REWARDS\_PERCENTAGE

> `readonly` `static` **MINIMUM\_REWARDS\_PERCENTAGE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1656

The minimum rewards percentage that we allow

***

### SLOTS

> `readonly` `static` **SLOTS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1616

Number of available validator slots. Note that a single validator may own several validator slots.

***

### STAKING\_CONTRACT\_ADDRESS

> `readonly` `static` **STAKING\_CONTRACT\_ADDRESS**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1599

This is the address for the staking contract.

***

### STATE\_CHUNKS\_MAX\_SIZE

> `readonly` `static` **STATE\_CHUNKS\_MAX\_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1595

Maximum size of accounts trie chunks.

***

### TIMESTAMP\_MAX\_DRIFT

> `readonly` `static` **TIMESTAMP\_MAX\_DRIFT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1652

The maximum drift, in milliseconds, that is allowed between any block's timestamp and the node's
system time. We only care about drifting to the future.

***

### TOTAL\_SUPPLY

> `readonly` `static` **TOTAL\_SUPPLY**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1670

Total supply in units.

***

### TRANSACTION\_VALIDITY\_WINDOW

> `readonly` `static` **TRANSACTION\_VALIDITY\_WINDOW**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1571

Number of batches a transaction is valid with Albatross consensus.

***

### TRANSACTION\_VALIDITY\_WINDOW\_BLOCKS

> `readonly` `static` **TRANSACTION\_VALIDITY\_WINDOW\_BLOCKS**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1575

Number of blocks a transaction is valid with Albatross consensus.

***

### TWO\_F\_PLUS\_ONE

> `readonly` `static` **TWO\_F\_PLUS\_ONE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1628

Calculates 2f+1 slots which is the minimum number of slots necessary to produce a macro block,
a skip block and other actions.
It is also the minimum number of slots necessary to be guaranteed to have a majority of honest
slots. That's because from a total of 3f+1 slots at most f will be malicious. If in a group of
2f+1 slots we have f malicious ones (which is the worst case scenario), that still leaves us
with f+1 honest slots. Which is more than the f slots that are not in this group (which must all
be honest).
It is calculated as `ceil(SLOTS*2/3)` and we use the formula `ceil(x/y) = (x+y-1)/y` for the
ceiling division.

***

### VALIDATOR\_DEPOSIT

> `readonly` `static` **VALIDATOR\_DEPOSIT**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1662

The deposit necessary to create a validator in Lunas (1 NIM = 100,000 Lunas).
A validator is someone who actually participates in block production. They are akin to miners
in proof-of-work.

***

### VERSION

> `readonly` `static` **VERSION**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1612

The current version number of the protocol. Changing this always results in a hard fork.

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1451

#### Returns

`void`

***

### batchAt()

> `static` **batchAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1464

Returns the batch number at a given `block_number` (height)

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### batchDelayPenalty()

> `static` **batchDelayPenalty**(`delay`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1567

Returns the percentage reduction that should be applied to the rewards due to a delayed batch.
This function returns a float in the range [0, 1]
I.e 1 means that the full rewards should be given, whereas 0.5 means that half of the rewards should be given
The input to this function is the batch delay, in milliseconds
The function is: [(1 - MINIMUM_REWARDS_PERCENTAGE) * BLOCKS_DELAY_DECAY ^ (t^2)] + MINIMUM_REWARDS_PERCENTAGE

#### Parameters

##### delay

`bigint`

#### Returns

`number`

***

### batchIndexAt()

> `static` **batchIndexAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1469

Returns the batch index at a given block number. The batch index is the number of a block relative
to the batch it is in. For example, the first block of any batch always has an batch index of 0.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### blockAfterJail()

> `static` **blockAfterJail**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1549

Returns the first block after the jail period of a given block number has ended.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### blockAfterReportingWindow()

> `static` **blockAfterReportingWindow**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1545

Returns the first block after the reporting window of a given block number has ended.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### electionBlockAfter()

> `static` **electionBlockAfter**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1473

Returns the number (height) of the next election macro block after a given block number (height).

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### electionBlockBefore()

> `static` **electionBlockBefore**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1478

Returns the block number (height) of the preceding election macro block before a given block number (height).
If the given block number is an election macro block, it returns the election macro block before it.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### electionBlockOf()

> `static` **electionBlockOf**(`epoch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1525

Returns the block number of the election macro block of the given epoch (which is always the last block).
If the index is out of bounds, None is returned

#### Parameters

##### epoch

`number`

#### Returns

`number`

***

### epochAt()

> `static` **epochAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1455

Returns the epoch number at a given block number (height).

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### epochIndexAt()

> `static` **epochIndexAt**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1460

Returns the epoch index at a given block number. The epoch index is the number of a block relative
to the epoch it is in. For example, the first block of any epoch always has an epoch index of 0.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### firstBatchOfEpoch()

> `static` **firstBatchOfEpoch**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1536

Returns a boolean expressing if the batch at a given block number (height) is the first batch
of the epoch.

#### Parameters

##### block\_number

`number`

#### Returns

`boolean`

***

### firstBlockOf()

> `static` **firstBlockOf**(`epoch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1515

Returns the block number of the first block of the given epoch (which is always a micro block).
If the index is out of bounds, None is returned

#### Parameters

##### epoch

`number`

#### Returns

`number`

***

### firstBlockOfBatch()

> `static` **firstBlockOfBatch**(`batch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1520

Returns the block number of the first block of the given batch (which is always a micro block).
If the index is out of bounds, None is returned

#### Parameters

##### batch

`number`

#### Returns

`number`

***

### isElectionBlockAt()

> `static` **isElectionBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1487

Returns a boolean expressing if the block at a given block number (height) is an election macro block.

#### Parameters

##### block\_number

`number`

#### Returns

`boolean`

***

### isMacroBlockAt()

> `static` **isMacroBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1506

Returns a boolean expressing if the block at a given block number (height) is a macro block.

#### Parameters

##### block\_number

`number`

#### Returns

`boolean`

***

### isMicroBlockAt()

> `static` **isMicroBlockAt**(`block_number`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1510

Returns a boolean expressing if the block at a given block number (height) is a micro block.

#### Parameters

##### block\_number

`number`

#### Returns

`boolean`

***

### lastBlockOfReportingWindow()

> `static` **lastBlockOfReportingWindow**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1541

Returns the block height for the last block of the reporting window of a given block number.
Note: This window is meant for reporting malicious behaviour (aka `jailable` behaviour).

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### lastElectionBlock()

> `static` **lastElectionBlock**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1483

Returns the block number (height) of the last election macro block at a given block number (height).
If the given block number is an election macro block, then it returns that block number.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### lastMacroBlock()

> `static` **lastMacroBlock**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1502

Returns the block number (height) of the last macro block at a given block number (height).
If the given block number is a macro block, then it returns that block number.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### macroBlockAfter()

> `static` **macroBlockAfter**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1492

Returns the block number (height) of the next macro block after a given block number (height).
If the given block number is a macro block, it returns the macro block after it.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### macroBlockBefore()

> `static` **macroBlockBefore**(`block_number`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1497

Returns the block number (height) of the preceding macro block before a given block number (height).
If the given block number is a macro block, it returns the macro block before it.

#### Parameters

##### block\_number

`number`

#### Returns

`number`

***

### macroBlockOf()

> `static` **macroBlockOf**(`batch`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1531

Returns the block number of the macro block (checkpoint or election) of the given batch (which
is always the last block).
If the index is out of bounds, None is returned

#### Parameters

##### batch

`number`

#### Returns

`number`

***

### supplyAt()

> `static` **supplyAt**(`genesis_supply`, `genesis_time`, `current_time`): `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:1559

Returns the supply at a given time (as Unix time) in Lunas (1 NIM = 100,000 Lunas). It is
calculated using the following formula:
```text
supply(t) = total_supply - (total_supply - genesis_supply) * supply_decay^t
```
Where t is the time in milliseconds since the PoS genesis block and `genesis_supply` is the supply at
the genesis of the Nimiq 2.0 chain.

#### Parameters

##### genesis\_supply

`bigint`

##### genesis\_time

`bigint`

##### current\_time

`bigint`

#### Returns

`bigint`
