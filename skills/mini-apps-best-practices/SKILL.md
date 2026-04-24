---
name: mini-apps-best-practices
description: The rulebook for building mini apps inside Nimiq Pay. Contains correct patterns for the Nimiq provider (`@nimiq/mini-app-sdk`) and the Ethereum provider (`window.ethereum`), supported chain IDs, ERC-20 conventions (USDT, USDC, decimals), NIM staking methods, and anti-patterns to avoid. Use whenever the user mentions a Nimiq Pay mini app, the `@nimiq/mini-app-sdk` package, `window.ethereum` in a Nimiq context, sending NIM or USDT from inside a wallet, switching EVM chains from a mini app, or anything involving `listAccounts`, `sign`, `sendBasicTransaction`, staking, or ERC-20 contract calls in a mini-app context. Load alongside scaffold or convert, or on its own when the developer is writing feature code for an existing mini app.
---

# Nimiq Mini Apps — Best Practices

A mini app is a web application that runs inside Nimiq Pay in a mobile WebView. It communicates with the wallet through injected providers. The app runs in a sandbox with no access to private keys. Every sensitive action requires user approval through native dialogs.

This skill is a continuous guardrail. It shapes every suggestion the AI makes during development. It does not scaffold projects or run checklists — it ensures the AI never generates code that violates the framework's rules.

## Providers

Two providers are available. Use one or both depending on the app's needs.

### Nimiq provider

For NIM payments, message signing, staking, and blockchain state queries. Access exclusively through the Mini App SDK `init()` helper. Never access it any other way.

```ts
import { init } from '@nimiq/mini-app-sdk'

const nimiq = await init()
```

Available capabilities:
- **Account access**: list the user's Nimiq addresses. Requires user confirmation.
- **Message signing**: sign arbitrary messages with the user's Nimiq key. Requires user confirmation.
- **Consensus and block state**: check if the wallet has network consensus, get the current block height. No confirmation needed.
- **NIM payments**: send basic NIM transactions, with or without attached text data. Requires user confirmation. Amounts are in Luna (1 NIM = 100,000 Luna). Methods: `sendBasicTransaction`, `sendBasicTransactionWithData`.
- **Staking**: all require user confirmation. Capability → method: create a new staker (`sendNewStakerTransaction`), add stake (`sendStakeTransaction`), set active stake (`sendSetActiveStakeTransaction`), update delegation (`sendUpdateStakerTransaction`), retire stake (`sendRetireStakeTransaction`), remove stake (`sendRemoveStakeTransaction`).

For exact method signatures, parameters, and return types, see [references/nimiq-provider-api.md](references/nimiq-provider-api.md).

### Ethereum provider

For EVM chain interaction, ERC-20 tokens, message signing, and contract calls. Access via `window.ethereum`. This is a standard EIP-1193 provider. No SDK needed.

Available capabilities:
- **Account access**: request the user's Ethereum addresses. Same address works across all EVM chains. Requires user confirmation.
- **Message signing**: for typed structured data — permits, order approvals, login challenges — prefer `eth_signTypedData_v4` (EIP-712). It presents the user with a readable breakdown of what they're signing instead of an opaque hash. Use `personal_sign` only for plain text messages that have no structure worth showing. Both require user confirmation.
- **Transactions**: send native token transfers or contract calls (`eth_sendTransaction`). Requires user confirmation.
- **Chain management**: switch the active EVM chain (`wallet_switchEthereumChain`) or add a new one (`wallet_addEthereumChain`). Requires user confirmation.
- **Read-only queries**: get balances, call contracts, estimate gas, read blocks and logs, get transaction receipts. No confirmation needed. These are routed through RPC.
- **Arbitrary RPC**: `rpcCall` proxies a JSON-RPC request through the host for methods not in the standard list. Use sparingly; prefer the typed methods above.
- **Discovery**: Nimiq Pay implements EIP-6963, so wallet-discovery libraries (wagmi, RainbowKit, etc.) detect it automatically. You don't need to announce the provider manually.

For exact method signatures, parameters, and return types, see [references/ethereum-provider-api.md](references/ethereum-provider-api.md).

## Supported EVM chains

These are the chains currently exposed in Nimiq Pay. Do not hardcode chains beyond this list. Do not assume other chains are available.

| Chain | Chain ID (hex) | Chain ID (decimal) |
| --- | --- | --- |
| Ethereum Mainnet | `0x1` | 1 |
| Polygon | `0x89` | 137 |
| Arbitrum One | `0xa4b1` | 42161 |
| Optimism | `0xa` | 10 |
| Base | `0x2105` | 8453 |
| BNB Smart Chain | `0x38` | 56 |
| Sepolia (testnet) | `0xaa36a7` | 11155111 |

Sepolia is exposed for development and testing only. Do not ship mini apps that transact on Sepolia to real users.

## ERC-20 token rules

Any ERC-20 token on any supported chain is accessible through `window.ethereum`. No custom provider or extra setup is needed.

The pattern is always:
1. Switch to the correct chain with `wallet_switchEthereumChain`
2. Call the token contract using `eth_call` (for reads like `balanceOf`) or `eth_sendTransaction` (for writes like `transfer`)

Use an EVM library (viem, ethers.js, or wagmi) for ABI encoding. Do not manually encode contract calls.

Critical rule on decimals: USDT and USDC use 6 decimal places, not the 18 used by most ERC-20 tokens. Always use the token's actual `decimals` value when parsing or formatting amounts. A 1 USDT balance displayed with 18 decimals would show as `0.000000000001` instead of `1.0`.

USDT contract addresses:

| Chain | Address | Decimals |
| --- | --- | --- |
| Polygon | `0xc2132D05D31c914a87C6611C10748AEb04B58e8F` | 6 |
| Ethereum | `0xdAC17F958D2ee523a2206206994597C13D831ec7` | 6 |
| Arbitrum One | `0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9` | 6 |
| Optimism | `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58` | 6 |

For chain IDs, token addresses, and decimals, see [references/chains-and-tokens.md](references/chains-and-tokens.md).

## Mobile-first

Mini apps run inside Nimiq Pay on mobile devices. Every UI decision must account for this:

- Design for small screens first. No desktop-only layouts.
- Use touch-friendly tap targets (minimum 44px).
- Avoid horizontal scrolling.
- Test on actual devices or device emulation, not just desktop browsers.

## User language

Nimiq Pay exposes the user's selected language at `window.nimiqPay.language`. The value is an ISO 639-1 two-letter code (e.g. `'en'`, `'de'`), injected before page scripts run, read-only, static per session. When building anything with localization or i18n, use this value to match the user's Nimiq Pay language setting.

## External APIs and backends

Mini apps can and should call external APIs and use server-side backends. This makes mini apps richer. The only constraint is that wallet operations (payments, signing, account access) must go through the injected providers.

## Approval dialog UX

Do not fire multiple provider calls that require user confirmation in rapid sequence. Each confirmation triggers a native dialog that the user must respond to. Queuing several creates a confusing experience. Batch read-only calls freely, but sequence confirmation-requiring calls with clear user intent between them.

## Testing on testnet

Nimiq Pay has a hidden dev menu with a network switch. Long-press the settings button for 10 seconds to reveal it. Options: Default, Mainnet, Testnet.

The testnet switch only affects Nimiq provider operations. EVM operations continue running against mainnet chains. For EVM testing, developers can add custom chains (e.g. Sepolia) using `wallet_addEthereumChain`.

When suggesting test flows that involve payments or staking, recommend testnet to avoid using real funds.

## Anti-patterns

Do not do any of the following:

- **Do not access private keys.** The app runs in a sandbox. Keys never leave the wallet. All signing goes through the approval dialog.
- **Do not bypass the approval dialog.** Every sensitive action (account access, signing, transactions) requires explicit user confirmation through native Nimiq Pay dialogs.
- **Do not use third-party payment providers** (Stripe, PayPal, etc.) for payments. Use the Nimiq and Ethereum providers exclusively.

## Reference

Documentation:

- [Mini Apps Overview](https://nimiq.dev/mini-apps/)
- [Build Your First Mini App](https://nimiq.dev/mini-apps/mini-app-tutorial)
- [Build a Dual-Chain Mini App](https://nimiq.dev/mini-apps/dual-chain-mini-app-tutorial)
- [Load a Local Mini App](https://nimiq.dev/mini-apps/load-local-mini-app)
- [Using EVM Tokens in Mini Apps](https://nimiq.dev/mini-apps/evm-tokens)
- [Nimiq Provider API](https://nimiq.dev/mini-apps/api-reference/nimiq-provider)
- [Ethereum Provider API](https://nimiq.dev/mini-apps/api-reference/ethereum-provider)

Reference implementations:

- [evm-mini-wallet](https://github.com/Albermonte/evm-mini-wallet) — full EVM wallet mini app with token sends, receives, and balance tracking across all supported chains
- [nimiq-mini-app-demo](https://github.com/Eligioo/nimiq-mini-app-demo) — demo of all supported Nimiq and Ethereum provider methods

Nimiq visual assets:

- [Nimiq Design Kit](https://nimiq.dev/design-kit)

## Before shipping

When the app is functionally complete, run the `mini-apps-checklist` skill to verify it meets all requirements for running inside Nimiq Pay. Install it with `npx skills add nimiq/developer-center --skill mini-apps-checklist`.
