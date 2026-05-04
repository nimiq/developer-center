---
title: Build with AI
description: Install an AI skill that gives your coding tool accurate context about the Nimiq Mini Apps Framework
icon: i-tabler:sparkles
navigation:
  title: Build with AI
  order: 5
---

# Build with AI

AI coding tools generate better code when they have accurate context about the framework you're using. Without it, the AI will suggest patterns that look correct but don't work inside Nimiq Pay.

Nimiq provides an **AI skill** for the Mini Apps Framework. This skill gives your AI coding tool the rules, patterns, and API knowledge it needs to generate working mini app code from the start.

## What is a skill?

A skill is a set of files with instructions written for AI, not for you. It gets installed into your project and is automatically loaded by your AI coding tool at the start of every session. The AI reads the skill and follows its rules in the background.

Skills work with any tool that supports the [Agent Skills](https://skills.sh/) spec, including Claude Code, Cursor, VS Code Copilot, and others.

## How to install

You need [Node.js](https://nodejs.org/) installed. Run this command in your project directory:

```bash
npx skills add nimiq/developer-center --skill mini-apps
```

This pulls the skill from the Nimiq Developer Center GitHub repo and saves it to your project. The exact location depends on your tool (`.claude/skills/`, `.github/skills/`, etc.). The CLI detects which AI tools you have and installs the skill in the right place for each one. It doesn't modify your code, your dependencies, or your build.

After installing, open your AI coding tool in the project directory and start working. The skill is picked up automatically by the AI, but you can also invoke it directly. Either way, the AI will have the Nimiq Mini Apps context available.

To remove the skill:

```bash
npx skills remove mini-apps
```

## What the skill covers

Once installed, the AI will ask how you want to proceed and present these options:

| Your situation | What the AI does |
| --- | --- |
| Starting from scratch | Asks what you want to build, scaffolds the project, installs the SDK, configures the dev server, verifies the provider connects |
| Converting an existing app | Audits your codebase, maps your existing functionality to Nimiq Pay's providers, assesses feasibility, plans and executes the conversion |
| Checking if your app is ready | Runs a pre-ship checklist covering provider integration, mobile UI, security, error handling, token correctness, and chain usage |
| Just building | Provides the rules, patterns, and API context as an ambient guardrail while you code |

You don't need to pick upfront. The AI asks you when the skill activates. If you need inspiration first, check the [Mini App Ideas](/mini-apps/ideas) page.

The skill also includes local reference files with method signatures, supported chain IDs, and token contract addresses, so the AI has accurate data without needing to fetch external URLs.

## Reference

- [Mini Apps Overview](/mini-apps/)
- [Build Your First Mini App](/mini-apps/mini-app-tutorial)
- [Using EVM Tokens](/mini-apps/evm-tokens)
- [Nimiq Provider API](/mini-apps/api-reference/nimiq-provider)
- [Ethereum Provider API](/mini-apps/api-reference/ethereum-provider)
- [Agent Skills spec](https://skills.sh/)
