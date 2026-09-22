# Nimiq Provider API

Access via `init()` from `@nimiq/mini-app-sdk`.

| Method | Parameters | Returns | User confirmation |
| --- | --- | --- | --- |
| `listAccounts()` | none | `string[]` | yes |
| `getBalance(address)` | address: string (required) | `number` (luna) | no |
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

`getBalance(address)` requires SDK `0.2.1` or later and a supported host. After `init()`, check `typeof nimiq.getBalance === 'function'` before calling it on older hosts. It reads any valid address on Nimiq Pay's active network without account approval or a transaction listener. Both the direct method and `request({ method: 'getBalance', params: { address } })` use the native bridge, with no external RPC endpoint.

The SDK method returns `Promise<number>` in luna. Zero means a successful lookup; failures reject with `NimiqProviderError`: `INVALID_REQUEST` (`-32602`) for invalid addresses, or `NETWORK_ERROR` (`-32000`) for an unavailable client, missing consensus, lookup failure, or a 30-second timeout. Contract balances are not necessarily spendable.

Full documentation: https://nimiq.dev/raw/mini-apps/api-reference/nimiq-provider.md
