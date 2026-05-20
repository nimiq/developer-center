---
title: FAQ
description: Answers to common questions about building mini apps for Nimiq Pay
icon: i-tabler:help
navigation:
  title: FAQ
  order: 10
---

# Mini Apps FAQ

Mini apps are web apps that run inside Nimiq Pay and connect to the user's Nimiq or Ethereum wallet through injected providers. This FAQ covers the questions developers most often ask, from what counts as a mini app to how to test, secure, and ship one.

## The basics

### What is a mini app?

A mini app is a web application that runs inside Nimiq Pay. It uses injected providers to interact with the user's Nimiq or Ethereum wallet without ever accessing private keys directly. The wallet handles all cryptographic operations, and users approve every sensitive action through native confirmation dialogs.

### What's the difference between a mini app and a regular web app?

The provider integration. A mini app must use the Nimiq provider, the Ethereum provider, or both to interact with the user's wallet. Without at least one provider connection, your app runs in Nimiq Pay's WebView, but it's not a mini app in any meaningful sense. The wallet integration is what defines a mini app.

### Does my mini app have to be about payments or crypto?

No. Mini apps can be games, calculators, to-do lists, social tools, tipping jars, or productivity utilities. Almost anything. The requirement is that the mini app connects to at least one provider. That connection is what anchors it to the Nimiq Pay ecosystem. If you're looking for inspiration, check our [Mini App Ideas](/mini-apps/ideas) page.

### I have no idea what to build. Where do I start?

The [Mini App Ideas](/mini-apps/ideas) page has a categorized list of mini app concepts, each with a description, which providers it needs, and any external APIs that could power it. Pick one, adapt it, or use it as a starting point for something entirely different.

### Do I need a Nimiq Pay account to use my mini app?

Yes. Mini apps run inside Nimiq Pay, so users need the app installed. When your mini app requests wallet access, Nimiq Pay handles authentication and user approval natively.

### Which networks and tokens can my mini app use?

Mini apps support NIM natively and all EVM-compatible chains available in Nimiq Pay, including Ethereum mainnet, Polygon, Arbitrum One, Optimism, Base, and BNB Smart Chain, as well as Sepolia for testing. ERC-20 tokens on any supported chain, including USDT on Polygon, are accessible through `window.ethereum` with no extra setup.

## Building

### Do I need to know blockchain development to build a mini app?

Not deeply. The Mini Apps Framework abstracts most of the complexity. If you know basic web development, you can build a mini app. For Nimiq provider access, a single `init()` call sets up the connection. For Ethereum, you use standard Web3 patterns via `window.ethereum`. Blockchain knowledge helps when you want to go deeper, but it's not a prerequisite to get started.

### Can I use any frontend framework?

Yes. Currently, our tutorials use Vue, React, and Svelte, but those are examples, not requirements. Any framework that runs in a WebView works. The Mini Apps Framework is framework-agnostic. If you're comfortable with a different stack, use it.

### Can my mini app have a backend or server?

Yes. The Mini Apps Framework only governs how your app talks to the wallet, through the providers. Beyond that connection, you have full freedom over your stack: backend services, databases, APIs, authentication, business logic.

### Can I use external APIs and services?

Yes. Your mini app can call any external API using `fetch()` or your HTTP client of choice. The [Mini App Ideas](/mini-apps/ideas) page lists some external APIs that pair well with mini apps, like CoinGecko for prices or OpenWeatherMap for weather data, but you're free to use any API you want. If it needs a secret key, keep it on your own backend rather than in the mini app bundle.

### Can I use open-source libraries and templates?

Yes. You can use any npm package, open-source template, or starter kit you like. Just respect the licenses of anything you depend on.

### Do I need to build a mini app from scratch, or can I reuse a project of mine?

You don't have to start from scratch. If you already have a web app, you can adapt it. The main change is adding provider integration: connecting to the Nimiq or Ethereum provider and using it for at least one interaction. The `mini-apps` [AI skill](/mini-apps/build-with-ai) can audit your codebase, map your existing functionality to Nimiq Pay's providers, assess feasibility, and plan the conversion before making any changes. If you don't want to use AI, install the [Mini App SDK](https://www.npmjs.com/package/@nimiq/mini-app-sdk) for Nimiq provider access or call `window.ethereum` directly for Ethereum, and wire up the interactions that make sense for your app.

### Do I need to use AI tools to build a mini app?

No. AI tools are entirely optional. The [Build with AI](/mini-apps/build-with-ai) page documents a skill that gives AI coding tools accurate context about the framework, which helps them generate working code. If you prefer to build without AI, the tutorials and API reference have everything you need.

## Testing, security, and deployment

### How do I test my mini app during development?

Run your dev server with network access enabled, then open Nimiq Pay on a phone connected to the same Wi-Fi network. Go to Mini Apps and enter your local network URL in the Custom URL field. Nimiq Pay also has a hidden dev menu that lets you switch to testnet: open the app menu and long-press the settings button for 10 seconds.

### How do I handle errors and edge cases when calling the provider?

Provider calls can fail in several ways: the user cancels the confirmation dialog, the request times out, no accounts are available, the network is unreachable, or the transaction itself is invalid. Each surfaces as a thrown error your code can inspect. For example, the Nimiq provider throws `PermissionDeniedError` on user rejection, and the Ethereum provider follows the EIP-1193 error codes (for example, `4902` for an unconfigured chain). Treat the cancellation case as a normal outcome, not a bug. Show clear messages to inform the user of the error rather than letting the UI freeze.

### How do I keep API keys and secrets secure?

Anything you ship in your mini app's frontend bundle is visible to anyone who opens the app. Treat the WebView like any other browser: never embed private API keys, signing secrets, or credentials directly in client code. If your mini app needs to call a third-party API that requires a secret, route the call through your own backend, which holds the key server-side and forwards the response to your mini app.

### How do I deploy my mini app?

Anywhere a web app can be hosted. Vercel, Netlify, Cloudflare Pages, or your own server. Once your mini app is reachable over HTTPS, paste the URL into Nimiq Pay's Custom URL field to load it for testing, or submit it for listing in Nimiq Pay.
