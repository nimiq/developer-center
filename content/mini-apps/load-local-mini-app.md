---
title: Load a Local Mini App
description: Load a local mini app into Nimiq Pay from your development machine
icon: i-tabler:device-mobile-code
navigation:
  title: Load a Local Mini App
  order: 4
---

# Load a Local Mini App in Nimiq Pay

Use this guide to load any locally running web app inside Nimiq Pay.

## Prerequisites

- **Node.js** (version 22+, only if your mini app uses Node.js; the examples in this guide use it)
- **Nimiq Pay** app installed on a mobile device (or emulator)
- Phone and development machine on the same Wi-Fi network

## Start your local app

The commands below assume you're using a Node.js mini app.

Go to your project directory.

```bash
cd my-mini-app
```

Install dependencies.

```bash
npm install
```

Start the dev server with network access enabled.

```bash
npm run dev -- --host
```

Note the **Network** URL in the terminal output, for example `http://192.168.1.42:5173`.

::callout{color="info" title="HMR over LAN with Docker"}

If you're running the Vite dev server inside Docker, hot module reload (HMR) may fail silently when the app is opened on your phone. The HMR client tries to connect through container-internal addresses the phone cannot reach.

To fix it, set `VITE_HMR_HOST` to your host machine's LAN IP and add an `hmr` block to your `vite.config`:

```ts
const hmrHost = process.env.VITE_HMR_HOST

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    hmr: hmrHost ? { host: hmrHost, protocol: 'ws', clientPort: 5173 } : undefined,
  },
})
```

Then run with the env variable set: `VITE_HMR_HOST=<your-LAN-IP> npm run dev -- --host`. Outside Docker, the default Vite config works without this.
::

## Open your local app in Nimiq Pay

1. Open **Nimiq Pay** on your phone.
2. Go to **Mini Apps**.
3. Enter your network URL in the Custom URL field: `http://<your-ip>:5173`.

::callout{color="neutral" title="Secure-Context APIs"}

`http://<your-ip>:5173` is not HTTPS, so secure-context-only Web APIs may be unavailable. For example, `crypto.randomUUID()` may work on `localhost` in a desktop browser but fail when the same app is opened from your phone inside a WebView.

If your app uses one of these APIs, feature-detect it and add a fallback. For ID generation, use `crypto.getRandomValues()` or a UUID helper that falls back to it. If no fallback is practical, test over local HTTPS.
::

Your app should load inside Nimiq Pay. You can also test [this demo](https://github.com/Eligioo/nimiq-mini-app-demo) to see a working mini app.

## Test on testnet

Nimiq Pay has a hidden dev menu with a network switch for testing without real funds.

To access it: open the app menu and long-press the settings button for 10 seconds. A dev menu appears with three network options:

- **Default**: follows the build type (dev builds use testnet, production builds use mainnet)
- **Mainnet**: force mainnet regardless of build type
- **Testnet**: force testnet regardless of build type

Switching clears transaction history and reloads the app.

::callout{icon="i-tabler-info-circle" color="info" title="Testnet applies to Nimiq only"}
The testnet switch only affects Nimiq provider operations (NIM payments, signing, staking). EVM mini apps continue running against mainnet chains. To add custom EVM chains for development, use [`wallet_addEthereumChain`](https://docs.metamask.io/metamask-connect/evm/reference/json-rpc-api/wallet_addEthereumChain/).
::

## Tutorials

- Build a first mini app: [Mini app tutorial](/mini-apps/mini-app-tutorial)
- Build a dual-chain mini app: [Build a Dual-Chain Mini App with Nimiq Pay](/mini-apps/dual-chain-mini-app-tutorial)
