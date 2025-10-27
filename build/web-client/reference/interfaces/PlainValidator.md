[@nimiq/core](../globals.md) / PlainValidator

# Interface: PlainValidator

Defined in: @nimiq/core/types/wasm/web.d.ts:429

JSON-compatible and human-readable format of a validator. E.g. reward addresses and public keys are presented in
their human-readable format.

## Properties

### deposit

> **deposit**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:456

The amount of coins deposited by this validator. The initial deposit is a fixed amount,
however this value can be decremented by failing staking transactions due to fees.

***

### inactiveFrom

> **inactiveFrom**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:467

An option indicating if the validator is marked as inactive. If it is, then it contains the
block height at which it becomes inactive.
A validator can only effectively become inactive on the next election block. Thus, this may
contain a block height in the future.

***

### inactiveRelease

> **inactiveRelease**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:472

An option indicating if the validator is marked as inactive. If it is, then it contains the
block height at which the inactive stake gets released and the validator can be retired.

***

### jailedFrom

> **jailedFrom**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:483

An option indicating if the validator is jailed. If it is, then it contains the
block height at which it became jailed.
Opposed to `inactive_from`, jailing can and should take effect immediately to prevent
the validator and its stakers from modifying their funds and or delegation.

***

### jailedRelease

> **jailedRelease**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:488

An option indicating if the validator is jailed. If it is, then it contains the
block height at which the jail period ends and the validator becomes interactive again.

***

### numStakers

> **numStakers**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:460

The number of stakers that are delegating to this validator.

***

### retired

> **retired**: `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:476

A flag indicating if the validator is retired.

***

### rewardAddress

> **rewardAddress**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:441

The reward address of the validator. All the block rewards are paid to this address.

***

### signalData

> **signalData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:446

Signaling field. Can be used to do chain upgrades or for any other purpose that requires
validators to coordinate among themselves.

***

### signingPublicKey

> **signingPublicKey**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:433

The public key used to sign blocks. It is also used to retire and reactivate the validator.

***

### totalStake

> **totalStake**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:451

The total stake assigned to this validator. It includes the validator deposit as well as the
coins delegated to him by stakers.

***

### votingPublicKey

> **votingPublicKey**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:437

The voting public key, it is used to vote for skip and macro blocks.
