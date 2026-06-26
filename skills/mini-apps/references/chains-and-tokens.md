# Supported Chains and Token Addresses

## EVM chains

| Chain | Chain ID (hex) | Chain ID (decimal) |
| --- | --- | --- |
| Ethereum Mainnet | `0x1` | 1 |
| Polygon | `0x89` | 137 |
| Arbitrum One | `0xa4b1` | 42161 |
| Optimism | `0xa` | 10 |
| Base | `0x2105` | 8453 |
| BNB Smart Chain | `0x38` | 56 |
| Sepolia (testnet) | `0xaa36a7` | 11155111 |

Custom chains can be added using `wallet_addEthereumChain`.

## USDT contract addresses

| Chain | Address | Decimals |
| --- | --- | --- |
| Polygon | `0xc2132D05D31c914a87C6611C10748AEb04B58e8F` | 6 |
| Ethereum | `0xdAC17F958D2ee523a2206206994597C13D831ec7` | 6 |
| Arbitrum One | `0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9` | 6 |
| Optimism | `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58` | 6 |

USDT and USDC use 6 decimals, not 18. Always use the token's actual `decimals` value.

Full token list: https://raw.githubusercontent.com/Albermonte/evm-mini-wallet/refs/heads/main/src/utils/well-known-tokens.ts
Full documentation: https://nimiq.dev/raw/mini-apps/features/evm-tokens.md
