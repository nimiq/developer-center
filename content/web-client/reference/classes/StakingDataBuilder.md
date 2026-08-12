[@nimiq/core](../globals.md) / StakingDataBuilder

# Class: StakingDataBuilder

Defined in: @nimiq/core/types/wasm/web.d.ts:2187

The StakingDataBuilder class provides helper methods to easily create staking transaction data.
To decode the data into plain objects, use `StakingContract.dataToPlain()`.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2190

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2189

#### Returns

`void`

***

### addStake()

> `static` **addStake**(`staker_address`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2196

Creates staking transaction data for adding stake to a staker.

Note: This data does not need to be signed seperately and can be used as-is.

#### Parameters

##### staker\_address

[`Address`](Address.md)

#### Returns

`Uint8Array`

***

### createStaker()

> `static` **createStaker**(`delegation`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2206

Creates staking transaction data for creating a staker.

Note: The created data contains an empty signature proof. To add a valid proof:
1. Set the data on the transaction as `tx.data`
2. Create a signature proof over the transaction with the staker's keypair
3. Use `StakingDataBuilder.setProof(tx.data, proof)` to set the created proof on the staking data
4. Set the updated staking data back on the transaction as `tx.data`

#### Parameters

##### delegation

[`Address`](Address.md)

#### Returns

`Uint8Array`

***

### removeStake()

> `static` **removeStake**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2212

Creates staking transaction data for removing stake from the staking contract.

Attention: This is used as `senderData` in a transaction with the staking contract as the sender and the staker as signer.

#### Returns

`Uint8Array`

***

### retireStake()

> `static` **retireStake**(`retire_stake`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2224

Creates staking transaction data for retiring stake.

Note: The created data contains an empty signature proof. To add a valid proof:
1. Set the data on the transaction as `tx.data`
2. Create a signature proof over the transaction with the staker's keypair
3. Use `StakingDataBuilder.setProof(tx.data, proof)` to set the created proof on the staking data
4. Set the updated staking data back on the transaction as `tx.data`

Throws when the number given for `retire_stake` does not fit within a Coin value.

#### Parameters

##### retire\_stake

`bigint`

#### Returns

`Uint8Array`

***

### setActiveStake()

> `static` **setActiveStake**(`new_active_balance`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2236

Creates staking transaction data for setting the active stake of a staker.

Note: The created data contains an empty signature proof. To add a valid proof:
1. Set the data on the transaction as `tx.data`
2. Create a signature proof over the transaction with the staker's keypair
3. Use `StakingDataBuilder.setProof(tx.data, proof)` to set the created proof on the staking data
4. Set the updated staking data back on the transaction as `tx.data`

Throws when the number given for `new_active_balance` does not fit within a Coin value.

#### Parameters

##### new\_active\_balance

`bigint`

#### Returns

`Uint8Array`

***

### setProof()

> `static` **setProof**(`data`, `proof`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2240

Sets the signature proof on the provided staking transaction data.

#### Parameters

##### data

`Uint8Array`

##### proof

[`SignatureProof`](SignatureProof.md)

#### Returns

`Uint8Array`

***

### updateStaker()

> `static` **updateStaker**(`new_delegation`, `reactivate_all_stake`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2250

Creates staking transaction data for updating a staker.

Note: The created data contains an empty signature proof. To add a valid proof:
1. Set the data on the transaction as `tx.data`
2. Create a signature proof over the transaction with the staker's keypair
3. Use `StakingDataBuilder.setProof(tx.data, proof)` to set the created proof on the staking data
4. Set the updated staking data back on the transaction as `tx.data`

#### Parameters

##### new\_delegation

[`Address`](Address.md)

##### reactivate\_all\_stake

`boolean`

#### Returns

`Uint8Array`
