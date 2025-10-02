---
title: Advanced Features
description: Cashlinks, privileged swap helpers, and multi-chain considerations
---

# Advanced Features

Most third-party integrations focus on `checkout`, `signTransaction`, and `signMessage`. This page covers the extra
functionality available through the Hub API and clarifies which features require privileged access.

## Cashlinks

Cashlinks are shareable links that contain claimable value. Anyone with the link can redeem the funds via the Hub. The
API exposes two public methods for working with cashlinks: `createCashlink()` and `manageCashlink()`.

### Creating a Cashlink

::: code-group

```ts [create-cashlink.ts]
const cashlink = await hubApi.createCashlink({
  appName: 'Promo Campaign',
  value: 50_000, // 0.5 NIM (value is optional, defaults to user input)
  message: 'Thanks for trying our app!',
  theme: HubApi.CashlinkTheme.GENERIC,
  returnLink: true, // Show the result screen inside your app
  skipSharing: true, // Skip Hub sharing UI when returnLink is true
})

console.log('Share this URL:', cashlink.link)
```

:::

`CreateCashlinkRequest` extends `BasicRequest` and supports these options:

| Field | Type | Notes |
| ----- | ---- | ----- |
| `value` | `number` | Amount in Luna; omit to let the user enter an amount. |
| `message` | `string` | Optional greeting shown to the recipient. Use `autoTruncateMessage` if you plan to send long text. |
| `theme` | `HubApi.CashlinkTheme` | Controls the look of the Hub UI. |
| `senderAddress` | `string` | Prefill the funding address when you know which account should pay. |
| `senderBalance` | `number` | Optional balance hint for Hub optimisations. |
| `fiatCurrency` | `string` | ISO 4217 code used for contextual pricing. |
| `returnLink` | `boolean` | When `true`, the Hub redirects back to your app. Combine with `skipSharing` to bypass the share dialog. |
| `skipSharing` | `boolean` | Only valid when `returnLink` is `true`. |
| `autoTruncateMessage` | `boolean` | Automatically shortens long messages. |

### Managing a Cashlink

::: code-group

```ts [manage-cashlink.ts]
const cashlink = await hubApi.manageCashlink({
  appName: 'Promo Campaign',
  cashlinkAddress: 'NQ30 F0O ...',
})

if (cashlink.status === HubApi.CashlinkState.UNCLAIMED) {
  console.log('Cashlink still unclaimed — you may cancel it inside the Hub UI.')
}
```

:::

### Result Format

```ts
interface Cashlink {
  address: string
  message: string
  value: number
  status: HubApi.CashlinkState
  theme: HubApi.CashlinkTheme
  link?: string
}
```

`HubApi.CashlinkState` enumerates the lifecycle:

| State | Description |
|-------|-------------|
| `UNKNOWN` | Cashlink status could not be determined. |
| `UNCHARGED` | Awaiting funding. |
| `CHARGING` | Funding transaction in flight. |
| `UNCLAIMED` | Ready to be claimed. |
| `CLAIMING` | Claim transaction in flight. |
| `CLAIMED` | Funds redeemed. |

### Tips

- Pin cashlink values in Luna to avoid floating-point rounding issues.
- Provide context (e.g. campaign or customer) using the `returnLink` state object when you call
  `new HubApi.RedirectRequestBehavior(returnUrl, state)`.
- Use `HubApi.CashlinkTheme.GENERIC` for brand-neutral cashlinks or pick seasonal themes when appropriate.

## Atomic Swaps (privileged)

`setupSwap()` and `refundSwap()` are exposed only to privileged origins (the official Nimiq wallet and self-hosted Hub
instances that whitelist your domain). They orchestrate Hash Time-Locked Contracts for NIM, Bitcoin, Polygon, and fiat
legs. If you maintain such an environment, consult `client/PublicRequestTypes.ts` in the Hub repository for the precise
request structures. Public integrations on hub.nimiq.com should rely on external swap services instead.

## Multi-Chain Helpers (privileged)

The Bitcoin and Polygon helpers—`activateBitcoin`, `signBtcTransaction`, `addBtcAddresses`, `activatePolygon`, and
`signPolygonTransaction`—also require a privileged origin. Their payloads depend on detailed chain metadata (UTXO
information for Bitcoin, OpenGSN relay objects for Polygon). Unless you operate a custom Hub deployment, focus on the NIM
methods documented in the other guides.

## Chain Comparison

| Feature | Nimiq | Bitcoin | Polygon |
|---------|-------|---------|---------|
| Address Format | `NQ...` | `bc1...`, `1...`, `3...` | `0x...` |
| Unit | Luna (1 NIM = 100k Luna) | Satoshi (1 BTC = 100M) | Wei (1 MATIC = 1e18) |
| Confirmation Time | ~1 second | ~10–60 minutes | ~2 seconds |
| Transaction Fee | Very low/free | Variable (sat/vB) | Variable (Gwei) |
| Smart Contracts | ✅ Yes | ❌ Limited | ✅ Yes (EVM) |

Understanding these differences helps when you build dashboards or display balances from multiple chains.

## Next Steps

- Review the [API Reference](/hub/api-reference) for a method-by-method overview.
- Follow the [Integration Guide](/hub/guide/integration) for workflow best practices.
- Check out the [Starter Template](https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts) for working examples.
