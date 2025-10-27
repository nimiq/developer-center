[@nimiq/core](../globals.md) / PlainStaker

# Interface: PlainStaker

Defined in: @nimiq/core/types/wasm/web.d.ts:60

JSON-compatible and human-readable format of a staker. E.g. delegation addresses are presented in their
human-readable format.

## Properties

### balance

> **balance**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:64

The staker\'s active balance.

***

### delegation

> **delegation**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:69

The address of the validator for which the staker is delegating its stake for. If it is not
delegating to any validator, this will be set to None.

***

### inactiveBalance

> **inactiveBalance**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:76

The staker\'s inactive balance. Only released inactive balance can be withdrawn from the staking contract.
Stake can only be re-delegated if the whole balance of the staker is inactive and released
(or if there was no prior delegation). For inactive balance to be released, the maximum of
the inactive and the validator\'s jailed periods must have passed.

***

### inactiveFrom

> **inactiveFrom**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:84

The block number at which the inactive balance was last inactivated.
If the stake is currently delegated to a jailed validator, the maximum of its jail release
and the inactive release is taken. Re-delegation requires the whole balance of the staker to be inactive.
The stake can only effectively become inactive on the next election block. Thus, this may contain a
future block height.

***

### inactiveRelease

> **inactiveRelease**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:90

The block number from which the staker\'s `inactive_balance` gets released, e.g. for retirement.
Re-delegation requires the whole balance of the staker to be inactive and released, as well as
its delegated validator to not currently be jailed.

***

### retiredBalance

> **retiredBalance**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:97

The staker\'s retired balance. Retired balance can only be withdrawn, thus retiring is irreversible.
Only released inactive balance can be retired, so the maximum of the inactive and the validator\'s jailed
periods must have passed.
Once retired, the funds are immediately available to be withdrawn (removed).
