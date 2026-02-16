<!-- url: https://nimiq.com/developers/mini-apps/overview -->
<!-- type: overview -->
<!-- summary: High-level overview of Nimiq Pay mini apps, capabilities, and architecture -->

# Mini Apps

Build mini apps that let users interact with their Nimiq and Ethereum wallets without leaving the Nimiq Pay app.

## What are Mini Apps?

Mini apps are web applications that run inside the Nimiq Pay app. They give users access to blockchain services without switching apps or managing browser extensions.

Think of it like a specialized web browser embedded within Nimiq Pay. Your mini app loads in the Nimiq Pay app and can request wallet operations like listing accounts, signing messages, sending NIM payments, all while the user stays within the Nimiq Pay app. The wallet handles all the cryptographic operations securely, and users approve every sensitive action through native confirmation dialogs.

## How It Works

Mini apps run in a WebView and talk to Nimiq Pay through injected providers.

### Components

| Component | Lives in | What it does |
|---|---|---|
| Injected Provider (`window.ethereum`, `window.nimiq`) | WebView (injected by Nimiq Pay) | Exposes wallet APIs and sends requests to the host |
| MiniAppHost (host-side API) | Nimiq Pay (native) | Receives requests, validates them, shows approval dialogs, executes actions |
| Mini App SDK (optional) | WebView (your app or injected) | Typed Nimiq-native APIs + `Result<T, E>` patterns; uses its own message format |

Your mini app uses standard Web3 APIs via `window.ethereum`, and Nimiq-specific APIs via `window.nimiq` or the optional SDK.

### Request lifecycle

1. Your mini app calls a provider method (for example, request accounts or sign a message)
2. The injected provider forwards a message to `MiniAppHost`
3. `MiniAppHost` validates the request and shows a native confirmation dialog (when required)
4. If approved, Nimiq Pay executes the wallet operation (keys never leave the wallet)
5. The result is returned to your mini app through the provider

## Supported Networks

The framework supports two blockchain ecosystems:

**Nimiq**

- Native support for NIM payments, message signing, and consensus checks
- Direct integration with Nimiq Pay's core wallet features

**Ethereum + Layer 2 networks** (EVM-compatible)

- Ethereum Mainnet
- Polygon
- Arbitrum One
- Optimism
- Base
- BNB Smart Chain (formerly Binance Smart Chain)
- Sepolia (testnet for developers)

Mini apps can also dynamically request the addition of other Ethereum-compatible networks not pre-configured.

## Security and Permissions

Every sensitive action requires explicit user approval through native dialogs that mini apps cannot bypass. Your app runs in a secure sandbox with no direct access to private keys. The Nimiq Pay app mediates all wallet operations.

Here's how security works:

- **User consent is always required**: Viewing accounts, signing messages, and sending NIM payments trigger native confirmation dialogs
- **Sandboxed execution**: Mini apps run in an isolated WebView with no access to the wallet's internal state or private keys
- **Host app controls everything**: Your app can only *request* actions. The Nimiq Pay app decides whether to fulfill them, always with user approval
- **Network calls are proxied**: The host app makes blockchain RPC calls on your behalf
