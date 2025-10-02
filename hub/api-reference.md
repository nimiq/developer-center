---
title: API Reference
description: Summary of Hub API methods, request types, and access levels
---

# API Reference

Complete reference for all Hub API methods, request types, and response formats.

The Hub exposes a small set of methods to third-party origins (for example apps integrating the public Hub at
`https://hub.nimiq.com`). Additional methods exist for the official Nimiq wallet and other privileged deployments, but
those calls are blocked for regular origins. This page focuses on what you can use today and points you to the exact
TypeScript definitions that ship with `@nimiq/hub-api`.

> [!NOTE] Check the types
> The authoritative definitions live in `client/PublicRequestTypes.ts` inside the Hub repository and are bundled with the
> published npm package. Importing the library in a TypeScript project gives you auto-complete and compile-time safety.

## Public Methods

### checkout()
Request a payment flow. For NIM-only payments (`version` omitted or set to `1`) the Hub returns a signed transaction and
broadcasts it. Multi-currency requests (`version: 2`) always include a NIM option and can provide additional Bitcoin or
Polygon payment options.

```ts
interface NimiqCheckoutRequest extends BasicRequest {
  version?: 1
  shopLogoUrl?: string
  sender?: string
  forceSender?: boolean
  recipient: string
  recipientType?: Nimiq.AccountType
  value: number
  fee?: number
  extraData?: string | Uint8Array
  flags?: number
  validityDuration?: number
  disableDisclaimer?: boolean // privileged origins only
}

interface MultiCurrencyCheckoutRequest extends BasicRequest {
  version: 2
  shopLogoUrl: string
  callbackUrl?: string
  csrf?: string
  extraData?: string | Uint8Array // deprecated, use NIM option extraData instead
  time: number // seconds or milliseconds
  fiatCurrency: string // ISO 4217 code, e.g. "EUR"
  fiatAmount: number
  paymentOptions: AvailablePaymentOptions[]
  isPointOfSale?: boolean
  disableDisclaimer?: boolean // privileged origins only
}

type CheckoutRequest = NimiqCheckoutRequest | MultiCurrencyCheckoutRequest
```

Key points:
- `AvailablePaymentOptions` lets you offer NIM, BTC, and Polygon USDC/USDT direct payments. Each currency can appear at
  most once and NIM is mandatory.
- For popups you normally rely on the default behavior. Pass a second argument (`RedirectRequestBehavior`) for
  redirect-based flows.

### signTransaction()
Sign a NIM transaction without broadcasting it.

```ts
interface SignTransactionRequest extends BasicRequest {
  sender: string
  recipient: string
  recipientType?: Nimiq.AccountType
  recipientLabel?: string
  value: number
  fee?: number
  extraData?: string | Uint8Array
  flags?: number
  validityStartHeight: number
}
```

Always obtain a current block height from a node and pass it as `validityStartHeight` so the transaction stays valid.

### signStaking()
Sign one or multiple NIM staking transactions. You must prepare the raw transaction bytes yourself (for example with
[`@nimiq/core`](/web-client/)) and hand them to the Hub for signing.

```ts
interface SignStakingRequest extends BasicRequest {
  senderLabel?: string
  recipientLabel?: string
  transaction: Uint8Array | Uint8Array[]
}
```

### signMessage()
Let the user sign an arbitrary message. Use it for authentication challenges.

```ts
interface SignMessageRequest extends BasicRequest {
  signer?: string // optional human-readable address to pre-select
  message: string | Uint8Array
}
```

### chooseAddress()
Ask the user to pick one of their addresses. Ideal for getting a destination account before sending funds.

```ts
interface ChooseAddressRequest extends BasicRequest {
  returnBtcAddress?: boolean
  returnUsdcAddress?: boolean
  minBalance?: number
  disableContracts?: boolean
  disableLegacyAccounts?: boolean
  disableBip39Accounts?: boolean
  disableLedgerAccounts?: boolean
  ui?: number // internal flag for Hub UI variants
}

interface ChooseAddressResult extends Address {
  btcAddress?: string
  usdcAddress?: string
  meta: {
    account: {
      label: string
      color: string
    }
  }
}
```

### createCashlink()
Create a shareable cashlink. The request extends `BasicRequest` and supports optional fields for value, theme, message,
pre-selecting the funding address, and configuring redirect behaviour.

```ts
// Simplified view — see CreateCashlinkRequest in PublicRequestTypes.ts for all combinations
interface CreateCashlinkRequest extends BasicRequest {
  value?: number // Luna
  theme?: HubApi.CashlinkTheme
  message?: string
  autoTruncateMessage?: boolean
  senderAddress?: string
  senderBalance?: number
  returnLink?: boolean // when true you can skip the sharing screen via skipSharing
  skipSharing?: boolean
  fiatCurrency?: string
}
```

### manageCashlink()
Retrieve the status of an existing cashlink (and allow the user to cancel if it is still unclaimed).

```ts
interface ManageCashlinkRequest extends BasicRequest {
  cashlinkAddress: string
}
```

## Result Types

```ts
interface SignedTransaction {
  transaction: Uint8Array
  serializedTx: string
  hash: string
  raw: {
    signerPublicKey: Uint8Array
    signature: Uint8Array
    sender: string
    senderType: Nimiq.AccountType
    recipient: string
    recipientType: Nimiq.AccountType
    value: number
    fee: number
    validityStartHeight: number
    extraData: Uint8Array
    flags: number
    networkId: number
    proof: Uint8Array
  }
}

interface SignedMessage {
  signer: string
  signerPublicKey: Uint8Array
  signature: Uint8Array
}

interface Cashlink {
  address: string
  message: string
  value: number
  status: CashlinkState
  theme: CashlinkTheme
  link?: string
}
```

Use `HubApi.CashlinkState` and `HubApi.CashlinkTheme` enums to interpret cashlink details.

## Restricted Methods

The following calls are **blocked** for regular origins on hub.nimiq.com. They require either the official Nimiq wallet
origin or a self-hosted Hub configured with your domain in `privilegedOrigins`:

- Account management: `onboard`, `signup`, `login`, `logout`, `export`, `rename`, `addAddress`, `addVestingContract`,
  `list`, `cashlinks`, `changePassword`
- Multi-chain: `signBtcTransaction`, `addBtcAddresses`, `activateBitcoin`, `signPolygonTransaction`, `activatePolygon`
- Swaps: `setupSwap`, `refundSwap`

Attempting to call these from an unprivileged origin results in an "unauthorized" error response.

## Request Behaviors

All methods accept an optional request behaviour. Popups are the default; use `new HubApi.RedirectRequestBehavior()` for
mobile-friendly full-page flows and remember to call `hubApi.checkRedirectResponse()` on load. The Hub emits
`HubApi.RequestType` events when a redirect returns — register handlers with `hubApi.on(...)`.

## Next Steps

- [Getting Started](./getting-started)
- [Integration Guide](./guide/integration)
- [Transaction Methods](./guide/transactions)
- [Cashlink and Advanced Features](./guide/advanced)
- Type definitions in `@nimiq/hub-api/types`
