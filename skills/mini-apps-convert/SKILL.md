---
name: mini-apps-convert
description: Convert an existing web application into a Nimiq Pay mini app — audits the codebase, maps payment and auth flows to the Nimiq and Ethereum providers, assesses feasibility, executes the conversion in four phases. Use whenever the user wants to 'port', 'migrate', 'convert', or 'adapt' an existing app to run inside Nimiq Pay, add Nimiq Pay or USDT support to a site they already have, replace Stripe/PayPal/MetaMask with Nimiq Pay wallet flows, or says things like 'can I make my app work in Nimiq Pay', 'add USDT payments to my SPA', or 'turn my existing site into a mini app'. Prefer this over scaffold when the user already has a working project.
---

# Nimiq Mini Apps — Convert

This skill converts an existing web application into a mini app that runs inside Nimiq Pay. It audits the codebase, identifies what can be adapted, flags what cannot, and executes the changes.

A mini app runs inside Nimiq Pay in a mobile WebView with access to two injected providers: a Nimiq provider (for NIM payments, signing, staking) and an Ethereum provider (`window.ethereum`, for EVM chains and ERC-20 tokens).

## Phase 1 — Audit the codebase

Scan the existing project and answer these questions:

1. **What does the app do?** Summarize its core functionality in 2-3 sentences.
2. **What framework and build tool does it use?** Vite is recommended but any build tool that outputs a web app works. Note the current tooling for the conversion plan.
3. **Does it have payment or transaction logic?** Identify any existing payment integrations (Stripe, PayPal, crypto wallets, etc.).
4. **Does it have authentication?** Identify how users log in (email, OAuth, wallet connect, etc.).
5. **Does it call external APIs or backends?** List them. External APIs and backends are fully supported in mini apps.
6. **Is it mobile-friendly?** Mini apps run on mobile. A desktop-only layout will need responsive work.
7. **Does it use secure-context-only Web APIs?** APIs like `crypto.randomUUID()` may not work when loaded over HTTP on a LAN. Identify any usage and note where fallbacks are needed.

Present this audit to the developer and confirm your understanding before proceeding.

## Phase 2 — Assess feasibility

Based on the audit, determine if the app is a good fit for conversion. Consider:

**Good fit:**
- Client-side SPA (Vue, React, Svelte, or any framework that outputs a browser-runnable web app)
- Has payment or transaction features that map to Nimiq/Ethereum providers
- Already mobile-friendly or close to it
- Dev server supports binding to `0.0.0.0` so the phone can reach it over LAN (nearly all do; Vite's `server.host: true` is the example used throughout Nimiq's docs)

**Challenging but possible:**
- Desktop-only layout (needs responsive work)
- Has server-rendered pages (SSR components may need restructuring for WebView)
- Uses secure-context-only Web APIs (e.g. `crypto.randomUUID()`) without fallbacks — these may be unavailable over HTTP on a LAN URL

Any build tool works — Vite, webpack, Parcel, Next.js in SPA-export mode, SvelteKit, etc. You do not need to migrate bundlers to ship a mini app.

**Not a good fit:**
- Requires server-side wallet access or private key management
- Depends entirely on third-party payment providers with no clear mapping to Nimiq/Ethereum
- Is a native mobile app, not a web app
- Requires features that Nimiq Pay's WebView cannot provide

If the app is not a good fit, explain why clearly and specifically. Do not just say "this won't work." Explain what would need to change for it to work, and let the developer decide if that's worth it. If the gap is too large, suggest building a new mini app instead and recommend the `mini-apps-scaffold` skill.

## Phase 3 — Plan the conversion

Create a conversion plan with these sections:

**Keep as-is:**
- List existing functionality that works without changes (UI components, external API calls, data display, etc.)

**Replace:**
- Map existing payment/transaction logic to the correct provider methods
- Map existing authentication to wallet-based identity if applicable
- Example: "Replace Stripe checkout with `sendBasicTransaction` via the Nimiq provider" or "Replace MetaMask connection with `eth_requestAccounts` via the injected `window.ethereum`"

**Add:**
- `@nimiq/mini-app-sdk` installation and provider initialization (if the app uses NIM features)
- Dev server configuration so the phone can reach the app over LAN (for Vite, `server.host: true` and `server.port: 5173`; adapt for other build tools)
- Error handling for provider unavailability (app opened outside Nimiq Pay)
- Mobile-responsive adjustments if needed
- Fallbacks for any secure-context-only Web APIs identified in the audit. The most common culprit is `crypto.randomUUID()` — feature-detect it and fall back to `crypto.getRandomValues()` or a UUID helper, because the app loads over `http://<lan-ip>:<port>` on device and those APIs may be unavailable in a non-secure context.

**Remove:**
- Third-party payment SDKs that are being replaced
- Authentication flows that are being replaced by wallet identity
- Any code that attempts direct key access or bypasses user confirmation

Present this plan to the developer. Do not execute until they approve.

## Phase 4 — Execute the conversion

Follow the approved plan. For each change:

1. Make the change
2. Explain what you changed and why
3. Flag anything that needs the developer's input

After all changes are complete, verify the connection:

1. Start the dev server with `npm run dev -- --host`
2. Tell the developer to open the Network URL in Nimiq Pay on their phone
3. Confirm the provider connects and the converted functionality works

## Constraints

These rules apply to every conversion:

- All payments must go through the Nimiq or Ethereum providers. Do not keep third-party payment flows.
- All signing and account access must go through the injected providers. Do not access private keys.
- Every sensitive action triggers a native approval dialog. Do not attempt to bypass it.
- The UI must work on mobile screens. Mini apps run inside Nimiq Pay on phones.
- Only these EVM chains are supported: Ethereum (0x1), Polygon (0x89), Arbitrum One (0xa4b1), Optimism (0xa), Base (0x2105), BNB Smart Chain (0x38), Sepolia (0xaa36a7).

## Reference

- [Nimiq Provider API](references/nimiq-provider-api.md)
- [Ethereum Provider API](references/ethereum-provider-api.md)
- [Chains and Tokens](references/chains-and-tokens.md)
- Full documentation: https://nimiq.dev/raw/mini-apps/index.md
- [evm-mini-wallet](https://github.com/Albermonte/evm-mini-wallet): full EVM wallet mini app with token sends, receives, and balance tracking
- [nimiq-mini-app-demo](https://github.com/Eligioo/nimiq-mini-app-demo): demo of all supported provider methods

## Before shipping

When the conversion is complete, run the `mini-apps-checklist` skill to verify the app meets all requirements for running inside Nimiq Pay. Install it with `npx skills add nimiq/developer-center --skill mini-apps-checklist`.
