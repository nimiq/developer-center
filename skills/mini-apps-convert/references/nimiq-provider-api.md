# Nimiq Provider API

Access via `init()` from `@nimiq/mini-app-sdk`.

| Method | Parameters | Returns | User confirmation |
| --- | --- | --- | --- |
| `listAccounts()` | none | `string[]` | yes |
| `sign(message)` | `string \| { message: string, isHex?: boolean }` | `{ publicKey: string, signature: string }` | yes |
| `isConsensusEstablished()` | none | `boolean` | no |
| `getBlockNumber()` | none | `number` | no |
| `sendBasicTransaction({ recipient, value, fee?, validityStartHeight? })` | recipient: string, value: number (Luna), fee: number (Luna), validityStartHeight: number | `string` (tx hash) | yes |
| `sendBasicTransactionWithData({ recipient, value, data, fee?, validityStartHeight? })` | same as above + data: string | `string` (tx hash) | yes |
| `sendNewStakerTransaction({ delegation, value, fee?, validityStartHeight? })` | delegation: string, value: number (Luna) | `string` (tx hash) | yes |
| `sendStakeTransaction({ value, fee?, validityStartHeight? })` | value: number (Luna) | `string` (tx hash) | yes |
| `sendSetActiveStakeTransaction({ newActiveBalance, fee?, validityStartHeight? })` | newActiveBalance: number (Luna) | `string` (tx hash) | yes |
| `sendUpdateStakerTransaction({ newDelegation, reactivateAllStake?, fee?, validityStartHeight? })` | newDelegation: string | `string` (tx hash) | yes |
| `sendRetireStakeTransaction({ retireStake, fee?, validityStartHeight? })` | retireStake: number (Luna) | `string` (tx hash) | yes |
| `sendRemoveStakeTransaction({ value, fee?, validityStartHeight? })` | value: number (Luna) | `string` (tx hash) | yes |

1 NIM = 100,000 Luna.

Full documentation: https://nimiq.dev/mini-apps/api-reference/nimiq-provider
