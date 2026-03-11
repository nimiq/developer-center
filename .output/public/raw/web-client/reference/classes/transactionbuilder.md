# TransactionBuilder

> @nimiq/core / TransactionBuilder

[@nimiq/core](../globals) / TransactionBuilder

# Class: TransactionBuilder

Defined in: @nimiq/core/types/wasm/web.d.ts:2146

The TransactionBuilder class provides helper methods to easily create standard types of transactions.
It can only be instantiated from a Client with `client.transactionBuilder()`.

## Methods

### [dispose]()

> **[dispose]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2149

#### Returns

`void`

---

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2148

#### Returns

`void`

---

### newAddStake()

> `static` **newAddStake**(`sender`, `staker_address`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2185

Adds stake to a staker in the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the sender account to this staker.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### staker_address

[`Address`](Address)

##### value

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newBasic()

> `static` **newBasic**(`sender`, `recipient`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2158

Creates a basic transaction that transfers `value` amount of luna (NIM's smallest unit) from the
sender to the recipient.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### recipient

[`Address`](Address)

##### value

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newBasicWithData()

> `static` **newBasicWithData**(`sender`, `recipient`, `data`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2167

Creates a basic transaction that transfers `value` amount of luna (NIM's smallest unit) from the
sender to the recipient. It can include arbitrary `data`, up to 64 bytes.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### recipient

[`Address`](Address)

##### data

`Uint8Array`

##### value

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newCreateStaker()

> `static` **newCreateStaker**(`sender`, `delegation`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2176

Creates a new staker in the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the sender account to this new staker.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### delegation

[`Address`](Address)

##### value

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newCreateValidator()

> `static` **newCreateValidator**(`sender`, `reward_address`, `signing_key`, `voting_key_pair`, `signal_data`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2229

Registers a new validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### reward_address

[`Address`](Address)

##### signing_key

[`PublicKey`](PublicKey)

##### voting_key_pair

[`BLSKeyPair`](BLSKeyPair)

##### signal_data

`string`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newDeactivateValidator()

> `static` **newDeactivateValidator**(`sender`, `validator`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2245

Deactivates a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### validator

[`Address`](Address)

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newDeleteValidator()

> `static` **newDeleteValidator**(`sender`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2253

Deleted a validator the staking contract. The deposit is returned to the Sender

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newRemoveStake()

> `static` **newRemoveStake**(`recipient`, `value`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2221

Removes stake from the staking contract and transfers `value` amount of luna (NIM's smallest unit)
from the staker to the recipient.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for value and fee do not fit within a u64 or the networkId is unknown.

#### Parameters

##### recipient

[`Address`](Address)

##### value

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newRetireStake()

> `static` **newRetireStake**(`sender`, `retire_stake`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2212

Retires a portion of the inactive stake balance of the staker. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for fee and `retire_stake` do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### retire_stake

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newRetireValidator()

> `static` **newRetireValidator**(`sender`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2261

Retires a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newSetActiveStake()

> `static` **newSetActiveStake**(`sender`, `new_active_balance`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2203

Sets the active stake balance of the staker. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the numbers given for fee and `new_active_balance` do not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### new_active_balance

`bigint`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newUpdateStaker()

> `static` **newUpdateStaker**(`sender`, `new_delegation`, `reactivate_all_stake`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2194

Updates a staker in the staking contract to stake for a different validator. This is a
signaling transaction and as such does not transfer any value.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the number given for fee does not fit within a u64 or the networkId is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### new_delegation

[`Address`](Address)

##### reactivate_all_stake

`boolean`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)

---

### newUpdateValidator()

> `static` **newUpdateValidator**(`sender`, `reward_address`, `signing_key`, `voting_key_pair`, `signal_data`, `fee`, `validity_start_height`, `network_id`): [`Transaction`](Transaction)

Defined in: @nimiq/core/types/wasm/web.d.ts:2237

Updates parameters of a validator in the staking contract.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when the fee does not fit within a u64 or the `networkId` is unknown.

#### Parameters

##### sender

[`Address`](Address)

##### reward_address

[`Address`](Address)

##### signing_key

[`PublicKey`](PublicKey)

##### voting_key_pair

[`BLSKeyPair`](BLSKeyPair)

##### signal_data

`string`

##### fee

`bigint`

##### validity_start_height

`number`

##### network_id

`number`

#### Returns

[`Transaction`](Transaction)
