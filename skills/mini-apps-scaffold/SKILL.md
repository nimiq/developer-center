---
name: mini-apps-scaffold
description: Scaffold a new Nimiq Pay mini app from scratch — captures intent, sets up the project, installs `@nimiq/mini-app-sdk`, configures the Vite dev server for LAN access, and verifies the provider connection before any feature code. Use whenever the user says they want to 'start', 'build', 'create', 'scaffold', 'set up', or 'bootstrap' a new mini app, Nimiq Pay app, or wallet mini app, or says they have an idea for one but no project yet. Triggers on phrases like 'I have an idea for a mini app', 'how do I start a Nimiq mini app', 'new Nimiq Pay app', 'build a wallet mini app'.
---

# Nimiq Mini Apps — Scaffold

This skill creates a new mini app project from scratch. It guides the developer from idea to a working, connected shell that's ready for feature development.

A mini app is a web application that runs inside Nimiq Pay on mobile devices. It communicates with the wallet through injected providers: a Nimiq provider for NIM operations and an Ethereum provider (`window.ethereum`) for EVM chain and token interactions.

## Step 0 — Understand the request

Before writing any code, ask the developer these questions:

1. **What does the app do?** Get a clear description of the intended functionality.
2. **Which providers does it need?**
   - Nimiq provider: for NIM payments, message signing, staking, or blockchain state
   - Ethereum provider: for EVM tokens (like USDT), Ethereum signing, or multi-chain interaction
   - Both: for apps that bridge Nimiq and EVM functionality
3. **Which framework or language?** Any web framework works. The mini app just needs to run in a browser. The documentation has examples for Vue, React, and Svelte. If the developer uses a different framework, adapt the patterns from the docs. If they don't have a preference, recommend Vue (it's what the reference implementations use).
4. **Does it involve specific tokens or chains?** If yes, confirm which ones. Only these EVM chains are supported: Ethereum, Polygon, Arbitrum One, Optimism, Base, BNB Smart Chain, Sepolia.

Summarize your understanding back to the developer. Do not proceed until they confirm.

If the developer's idea doesn't fit what the framework can do (e.g., requires server-side wallet access, needs chains that aren't supported, or bypasses the approval dialog), explain why and suggest alternatives. Do not reject outright. Work with the developer to find a feasible approach.

## Step 1 — Scaffold the project

**Prerequisites:** Node.js 22 or later. Nimiq Pay installed on a phone (or emulator) on the same Wi-Fi network as the dev machine.

Use Vite (or the developer's preferred build tool) with their chosen framework. Example with Vue:

```bash
npm create vite@latest my-mini-app -- --template vue-ts
cd my-mini-app
npm install
```

Adapt the template and tooling to whatever framework the developer chose. A mini app is a web app. Any framework that outputs HTML/JS/CSS in a browser will work.

## Step 2 — Install the SDK

If the app uses the Nimiq provider (most apps will):

```bash
npm install @nimiq/mini-app-sdk
```

If the app only uses the Ethereum provider, no SDK is needed. `window.ethereum` is injected by Nimiq Pay.

If the app needs ABI encoding for ERC-20 token interaction, also install an EVM library:

```bash
npm install viem
```

## Step 3 — Configure the dev server

Set `server.host: true` and `server.port: 5173` in the Vite config. The app must be reachable from a phone over the local network.

```ts
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
  },
})
```

Adjust the plugin import for the chosen framework.

## Step 4 — Initialize the provider

Add provider initialization in the main app component, wrapped in error handling so the app stays usable when opened outside Nimiq Pay. The pattern looks like this (Vue shown; adapt to the chosen framework):

```ts
import { init } from '@nimiq/mini-app-sdk'
import { onMounted, ref } from 'vue'

let nimiqPromise: ReturnType<typeof init> | null = null
const isConnecting = ref(true)
const isReady = ref(false)
const errorMessage = ref<string | null>(null)

onMounted(async () => {
  try {
    nimiqPromise = init({ timeout: 10_000 })
    await nimiqPromise
    isReady.value = true
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : String(error)
  }
  finally {
    isConnecting.value = false
  }
})
```

For the Ethereum provider, no SDK is involved — just feature-detect the injected object:

```ts
const provider = window.ethereum
if (!provider) {
  // Not inside Nimiq Pay — show a clear message and keep non-wallet UI usable.
}
```

The app must show a clear, non-alarming message if the provider is unavailable, and non-wallet features (if any) should still work.

## Step 5 — Verify the connection

Before adding any feature code, add a simple provider call and display the result. This confirms the connection works end to end.

For the Nimiq provider, call `isConsensusEstablished()` or `listAccounts()`. For the Ethereum provider, call `eth_requestAccounts`.

Start the dev server:

```bash
npm run dev -- --host
```

Tell the developer:

1. Note the **Network URL** from the terminal (e.g. `http://192.168.x.x:5173`). Do not use `localhost`.
2. Open **Nimiq Pay** on their phone.
3. Go to **Mini Apps**.
4. Enter the Network URL.
5. Verify they see the provider response on screen.

**Do not continue until the developer confirms the connection works.** If it fails, troubleshoot:
- Are the phone and dev machine on the same Wi-Fi network?
- Is the app opened through Nimiq Pay, not a regular browser?
- If using secure-context-only APIs (like `crypto.randomUUID()`), add a fallback. They may not work over HTTP on LAN.

If the app involves payments or staking, suggest testing on testnet first. Nimiq Pay has a hidden dev menu: long-press the settings button for 10 seconds to reveal it, then switch to Testnet. Note: testnet only affects Nimiq provider operations. EVM operations stay on mainnet.

## Step 6 — Build

The project is now connected and verified. Proceed with the requested functionality based on the developer's intent from Step 0.

For patterns, constraints, and API details during development, install the `mini-apps-best-practices` skill (`npx skills add nimiq/developer-center --skill mini-apps-best-practices`) or refer to the documentation:

- [Mini Apps Overview](https://nimiq.com/developers/mini-apps/)
- [Nimiq Provider API](https://nimiq.com/developers/mini-apps/api-reference/nimiq-provider)
- [Ethereum Provider API](https://nimiq.com/developers/mini-apps/api-reference/ethereum-provider)
- [Using EVM Tokens in Mini Apps](https://nimiq.com/developers/mini-apps/evm-tokens)

## Before shipping

When the app is functionally complete, run the `mini-apps-checklist` skill to verify it meets all requirements for running inside Nimiq Pay. Install it with `npx skills add nimiq/developer-center --skill mini-apps-checklist`.
