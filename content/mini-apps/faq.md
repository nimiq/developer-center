---
title: FAQ
description: Answers to common questions about building mini apps for Nimiq Pay
icon: i-tabler:help
navigation:
  title: FAQ
  order: 10
---

# Frequently Asked Questions

## What is a mini app?

A mini app is a web application that runs inside Nimiq Pay. It uses injected providers to interact with the user's Nimiq or Ethereum wallet without ever accessing private keys directly. The wallet handles all cryptographic operations, and users approve every sensitive action through native confirmation dialogs.

## What's the difference between a mini app and a regular web app?

The provider integration. A mini app must use the Nimiq provider, the Ethereum provider, or both to interact with the user's wallet. Without at least one provider connection, your app runs in Nimiq Pay's WebView, but it's not a mini app in any meaningful sense. The wallet integration is what defines a mini app.

## Does my mini app have to be about payments or crypto?

No. Mini apps can be games, calculators, to-do lists, social tools, tipping jars, or productivity utilities. Almost anything. The requirement is that the mini app connects to at least one provider. That connection is what anchors it to the Nimiq Pay ecosystem. If you're looking for inspiration, check our [Mini App Ideas](/mini-apps/ideas) page.

## Do I need to know blockchain development to build a mini app?

Not deeply. The Mini Apps Framework abstracts most of the complexity. If you know basic web development, you can build a mini app. For Nimiq provider access, a single `init()` call sets up the connection. For Ethereum, you use standard Web3 patterns via `window.ethereum`. Blockchain knowledge helps when you want to go deeper, but it's not a prerequisite to get started.

## Can I use any frontend framework?

Yes. Currently, our tutorials use Vue, React, and Svelte, but those are examples, not requirements. Any framework that runs in a WebView works. The Mini Apps Framework is framework-agnostic. If you're comfortable with a different stack, use it.

## Do I need to build a mini app from scratch, or can I reuse a project of mine?

You don't have to start from scratch. If you already have a web app, you can adapt it. The main change is adding provider integration: connecting to the Nimiq or Ethereum provider and using it for at least one interaction. The `mini-apps` [AI skill](/mini-apps/build-with-ai) can audit your codebase, map your existing functionality to Nimiq Pay's providers, assess feasibility, and plan the conversion before making any changes. If you don't want to use AI, install the [Mini App SDK](https://www.npmjs.com/package/@nimiq/mini-app-sdk) for Nimiq provider access or call `window.ethereum` directly for Ethereum, and wire up the interactions that make sense for your app.

## Do I need to use AI tools to build a mini app?

No. AI tools are entirely optional. The [Build with AI](/mini-apps/build-with-ai) page documents a skill that gives AI coding tools accurate context about the framework, which helps them generate working code. If you prefer to build without AI, the tutorials and API reference have everything you need.

## How do I test my mini app during development?

Run your dev server with network access enabled, then open Nimiq Pay on a phone connected to the same Wi-Fi network. Go to Mini Apps and enter your local network URL in the Custom URL field. Nimiq Pay also has a hidden dev menu that lets you switch to testnet: open the app menu and long-press the settings button for 10 seconds.

## Does a user need a Nimiq Pay account to use my mini app?

Yes. Mini apps run inside Nimiq Pay, so users need the app installed. When your mini app requests wallet access, Nimiq Pay handles authentication and user approval natively.

## Which networks and tokens can my mini app use?

Mini apps support NIM natively and all EVM-compatible chains available in Nimiq Pay, including Ethereum mainnet, Polygon, Arbitrum One, Optimism, Base, and BNB Smart Chain, as well as Sepolia for testing. ERC-20 tokens on any supported chain, including USDT on Polygon, are accessible through `window.ethereum` with no extra setup.

## I have no idea what to build. Where do I start?

The [Mini App Ideas](/mini-apps/ideas) page has a categorized list of mini app concepts, each with a description, which providers it needs, and any external APIs that could power it. Pick one, adapt it, or use it as a starting point for something entirely different.
