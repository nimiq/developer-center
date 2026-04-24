# Ethereum Provider API

Access via `window.ethereum`. Standard EIP-1193 provider.

## Wallet methods

| Method | Parameters | Returns | User confirmation |
| --- | --- | --- | --- |
| `eth_requestAccounts` | none | `string[]` | yes |
| `personal_sign` | data (string), address (string) | `string` (hex signature) | yes |
| `eth_sendTransaction` | transaction object (from, to, value, data, gas) | `string` (tx hash) | yes |
| `eth_signTypedData_v4` | address (string), typedData (JSON string) | `string` (hex signature) | yes |
| `wallet_switchEthereumChain` | `{ chainId: string }` | `null` | yes |
| `wallet_addEthereumChain` | chain config object | `null` | yes |

## Read-only methods (no user confirmation)

`eth_chainId`, `eth_accounts`, `eth_getBalance`, `eth_call`, `eth_estimateGas`, `eth_gasPrice`, `eth_getTransactionCount`, `eth_getTransactionReceipt`, `eth_blockNumber`, `eth_getBlockByNumber`, `eth_getLogs`, `net_version`.

Full documentation: https://nimiq.dev/mini-apps/api-reference/ethereum-provider
