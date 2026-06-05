---
name: mini-apps
description: Build, scaffold, convert, validate, audit, or ship a Nimiq Pay mini app. Covers the Nimiq provider (@nimiq/mini-app-sdk) and the Ethereum provider (window.ethereum), ERC-20 tokens (USDT, USDC), supported EVM chains (Polygon, Arbitrum, Base, Optimism, BNB, Sepolia), NIM payments, staking, message signing, and project setup. Use when the user wants to build, create, start, bootstrap, or scaffold a mini app; convert, port, migrate, or adapt an existing web app to run inside Nimiq Pay; add NIM, USDT, or ERC-20 token support; integrate Nimiq Pay wallet features; replace Stripe, PayPal, or MetaMask with Nimiq Pay providers; check, review, validate, or audit a mini app before shipping; or mentions window.ethereum, @nimiq/mini-app-sdk, listAccounts, sendBasicTransaction, wallet_switchEthereumChain, eth_sendTransaction, eth_signTypedData_v4, or balanceOf in a Nimiq context.
---

# Nimiq Mini Apps

A mini app is a web application that runs inside Nimiq Pay in a mobile WebView. It communicates with the wallet through injected providers. The app runs in a sandbox with no access to private keys. Every sensitive action requires user approval through native dialogs.

## How to proceed

If the developer's request already implies a path, route directly:

- Wants to build, create, start, or scaffold something new → read and follow [references/scaffold.md](references/scaffold.md)
- Has existing code to convert, port, migrate, or adapt → read and follow [references/convert.md](references/convert.md)
- Wants to check, review, validate, or audit before shipping → read and follow [references/checklist.md](references/checklist.md)
- Already building, asks a specific question → continue with the rules below, consult API references as needed

If invoked without context or the intent is unclear, present these options and ask the developer to choose:

1. **Start from scratch** — I have an idea and no project yet
2. **Convert an existing app** — I have a web app I want to run inside Nimiq Pay
3. **Check if my app is ready** — I want to validate my mini app before shipping
4. **Just build** — I'm already building, I just need the rules and API context

Do not guess. Do not load a reference until you understand what the developer needs.

After completing the scaffold or convert flow, always run the checklist ([references/checklist.md](references/checklist.md)) as the final step. When the developer says the app is done, ready, or complete during any flow, run the checklist.

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
- **Staking**: all require user confirmation. Capability to method: create a new staker (`sendNewStakerTransaction`), add stake (`sendStakeTransaction`), set active stake (`sendSetActiveStakeTransaction`), update delegation (`sendUpdateStakerTransaction`), retire stake (`sendRetireStakeTransaction`), remove stake (`sendRemoveStakeTransaction`).

For exact method signatures, parameters, and return types, see [references/nimiq-provider-api.md](references/nimiq-provider-api.md).

### Ethereum provider

For EVM chain interaction, ERC-20 tokens, message signing, and contract calls. Access via `window.ethereum`. This is a standard EIP-1193 provider. No SDK needed.

Available capabilities:
- **Account access**: request the user's Ethereum addresses. Same address works across all EVM chains. Requires user confirmation.
- **Message signing**: for typed structured data (permits, order approvals, login challenges) prefer `eth_signTypedData_v4` (EIP-712). It presents the user with a readable breakdown of what they're signing instead of an opaque hash. Use `personal_sign` only for plain text messages that have no structure worth showing. Both require user confirmation.
- **Transactions**: send native token transfers or contract calls (`eth_sendTransaction`). Requires user confirmation.
- **Chain management**: switch the active EVM chain (`wallet_switchEthereumChain`) or add a new one (`wallet_addEthereumChain`). Requires user confirmation.
- **Read-only queries**: get balances, call contracts, estimate gas, read blocks and logs, get transaction receipts. No confirmation needed. Routed through RPC.
- **Arbitrary RPC**: `rpcCall` proxies a JSON-RPC request through the host for methods not in the standard list. Use sparingly; prefer the typed methods above.
- **Discovery**: Nimiq Pay implements EIP-6963, so wallet-discovery libraries (wagmi, RainbowKit, etc.) detect it automatically. You don't need to announce the provider manually.

For exact method signatures, parameters, and return types, see [references/ethereum-provider-api.md](references/ethereum-provider-api.md).

## Supported EVM chains

These are the chains currently exposed in Nimiq Pay. Custom chains can be added using `wallet_addEthereumChain`. Sepolia is for development and testing only. Do not ship mini apps that transact on Sepolia to real users.

For chain IDs, token addresses, and decimals, see [references/chains-and-tokens.md](references/chains-and-tokens.md).

## ERC-20 token rules

Any ERC-20 token on any supported chain is accessible through `window.ethereum`. No custom provider or extra setup is needed.

The pattern is always:
1. Switch to the correct chain with `wallet_switchEthereumChain`
2. Call the token contract using `eth_call` (for reads like `balanceOf`) or `eth_sendTransaction` (for writes like `transfer`)

Use an EVM library (viem, ethers.js, or wagmi) for ABI encoding. Do not manually encode contract calls.

USDT and USDC use 6 decimal places, not the 18 used by most ERC-20 tokens. Always use the token's actual `decimals` value when parsing or formatting amounts. A 1 USDT balance displayed with 18 decimals would show as `0.000000000001` instead of `1.0`.

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

When the mini app calls a backend the developer controls, the backend must include the mini app's origin in its `Access-Control-Allow-Origin` response header. The origin is the URL Nimiq Pay loaded the mini app from.

In dev, the mini app runs in Nimiq Pay on a phone, so `localhost` from inside the WebView resolves to the phone, not the dev machine. If the backend also runs locally during dev, point `fetch` URLs at the dev machine's LAN IP (e.g. `http://192.168.x.x:3000`), not `localhost`.

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

- [Mini Apps Overview](https://nimiq.dev/raw/mini-apps/index.md)
- [Build Your First Mini App](https://nimiq.dev/raw/mini-apps/mini-app-tutorial.md)
- [Build a Dual-Chain Mini App](https://nimiq.dev/raw/mini-apps/dual-chain-mini-app-tutorial.md)
- [Load a Local Mini App](https://nimiq.dev/raw/mini-apps/load-local-mini-app.md)
- [Using EVM Tokens in Mini Apps](https://nimiq.dev/raw/mini-apps/evm-tokens.md)
- [Nimiq Provider API](https://nimiq.dev/raw/mini-apps/api-reference/nimiq-provider.md)
- [Ethereum Provider API](https://nimiq.dev/raw/mini-apps/api-reference/ethereum-provider.md)

Reference implementations:

- [evm-mini-wallet](https://github.com/Albermonte/evm-mini-wallet) — full EVM wallet mini app with token sends, receives, and balance tracking across all supported chains
- [nimiq-mini-app-demo](https://github.com/Eligioo/nimiq-mini-app-demo) — demo of all supported Nimiq and Ethereum provider methods

Nimiq visual assets:

- [Nimiq Design Kit](https://nimiq.dev/raw/design-kit/index.md)
