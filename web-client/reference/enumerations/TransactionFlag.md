Defined in: @nimiq/core/types/wasm/web.d.ts:14

A transaction flag signals a special purpose of the transaction. `ContractCreation` must be set
to create new vesting contracts or HTLCs. `Signaling` must be set to interact with the staking
contract for non-value transactions. All other transactions' flag is set to `None`.

## Enumeration Members

### ContractCreation

> **ContractCreation**: `1`

Defined in: @nimiq/core/types/wasm/web.d.ts:16

***

### None

> **None**: `0`

Defined in: @nimiq/core/types/wasm/web.d.ts:15

***

### Signaling

> **Signaling**: `2`

Defined in: @nimiq/core/types/wasm/web.d.ts:17
