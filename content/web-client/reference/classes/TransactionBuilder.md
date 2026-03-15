[@nimiq/core](../globals.md) / TransactionBuilder

# Class: TransactionBuilder

Defined in: @nimiq/core/types/wasm/web.d.ts:2146

The TransactionBuilder class provides helper methods to easily create standard types of transactions.
It can only be instantiated from a Client with `client.transactionBuilder()`.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2149

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2148

#### Returns

`void`

***

### newAddStake()

> `static` **newAddStake**(`sender`, `staker_address`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2185

Adds stake to a staker in the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the sender account to this staker.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### staker\_address

[`Address`](Address.md)

##### value

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newBasic()

> `static` **newBasic**(`sender`, `recipient`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2158

Creates a basic transaction that transfers `value` amount of luna (NIM's smallest unit) from the
sender to the recipient.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### recipient

[`Address`](Address.md)

##### value

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newBasicWithData()

> `static` **newBasicWithData**(`sender`, `recipient`, `data`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2167

Creates a basic transaction that transfers `value` amount of luna (NIM's smallest unit) from the
sender to the recipient. It can include arbitrary `data`, up to 64 bytes.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### recipient

[`Address`](Address.md)

##### data

`Uint8Array`

##### value

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newCreateStaker()

> `static` **newCreateStaker**(`sender`, `delegation`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2176

Creates a new staker in the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the sender account to this new staker.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### delegation

[`Address`](Address.md)

##### value

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newCreateValidator()

> `static` **newCreateValidator**(`sender`, `reward_address`, `signing_key`, `voting_key_pair`, `signal_data`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2229

Registers a new validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### reward\_address

[`Address`](Address.md)

##### signing\_key

[`PublicKey`](PublicKey.md)

##### voting\_key\_pair

[`BLSKeyPair`](BLSKeyPair.md)

##### signal\_data

`string`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newDeactivateValidator()

> `static` **newDeactivateValidator**(`sender`, `validator`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2245

Deactivates a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### validator

[`Address`](Address.md)

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newDeleteValidator()

> `static` **newDeleteValidator**(`sender`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2253

Deleted a validator the staking contract. The deposit is returned to the Sender

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newRemoveStake()

> `static` **newRemoveStake**(`recipient`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2221

Removes stake from the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the staker to the recipient.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### recipient

[`Address`](Address.md)

##### value

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newRetireStake()

> `static` **newRetireStake**(`sender`, `retire_stake`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2212

Retires a portion of the inactive stake balance of the staker. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for fee and `retire_stake` do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### retire\_stake

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newRetireValidator()

> `static` **newRetireValidator**(`sender`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2261

Retires a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newSetActiveStake()

> `static` **newSetActiveStake**(`sender`, `new_active_balance`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2203

Sets the active stake balance of the staker. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for fee and `new_active_balance` do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### new\_active\_balance

`bigint`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newUpdateStaker()

> `static` **newUpdateStaker**(`sender`, `new_delegation`, `reactivate_all_stake`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2194

Updates a staker in the staking contract to stake for a different validator. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the number given for fee does not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### new\_delegation

[`Address`](Address.md)

##### reactivate\_all\_stake

`boolean`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### newUpdateValidator()

> `static` **newUpdateValidator**(`sender`, `reward_address`, `signing_key`, `voting_key_pair`, `signal_data`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2237

Updates parameters of a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address.md)

##### reward\_address

[`Address`](Address.md)

##### signing\_key

[`PublicKey`](PublicKey.md)

##### voting\_key\_pair

[`BLSKeyPair`](BLSKeyPair.md)

##### signal\_data

`string`

##### fee

`bigint`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

[`Transaction`](Transaction.md)
