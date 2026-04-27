---
title: Build with AI
description: Install AI skills that give your coding tool accurate context about the Nimiq Mini Apps Framework
icon: i-tabler:sparkles
navigation:
  title: Build with AI
  order: 5
---

# Build with AI

AI coding tools generate better code when they have accurate context about the framework you're using. Without it, the AI will suggest patterns that look correct but don't work inside Nimiq Pay.

Nimiq provides a set of **AI skills** for the Mini Apps Framework. These skills give your AI coding tool the rules, patterns, and API knowledge it needs to generate working mini app code from the start.

## What is a skill?

A skill is a small text file with instructions written for AI, not for you. It gets installed into your project and is automatically loaded by your AI coding tool at the start of every session. You don't need to reference it or prompt for it. The AI reads the skill and follows its rules in the background.

Skills work with any tool that supports the [Agent Skills](https://skills.sh/) spec, including Claude Code, Cursor, VS Code Copilot, and others.

## How to install

You need [Node.js](https://nodejs.org/) installed. Then run one command per skill in your project directory:

```bash
npx skills add nimiq/developer-center --skill mini-apps-scaffold
```

This pulls the skill file from the Nimiq Developer Center GitHub repo and saves it to your project. The exact location depends on your tool (`.claude/skills/`, `.github/skills/`, etc.). The CLI detects which AI tools you have and installs the skill in the right place for each one. It doesn't modify your code, your dependencies, or your build.

After installing, open your AI coding tool in the project directory and start working. The skill is picked up automatically by the AI, but you can also invoke it directly. Either way, the AI will have the Nimiq Mini Apps context available.

## Choose your path

You don't need all four skills. Pick the ones that match your situation. If you need inspiration first, check the [Mini App Ideas](/mini-apps/ideas) page.

| Your situation | Skills to install |
| --- | --- |
| Starting from scratch | `mini-apps-scaffold` + `mini-apps-checklist` |
| Converting an existing app | `mini-apps-convert` + `mini-apps-checklist` |
| Building your own way | `mini-apps-best-practices` + `mini-apps-checklist` |

### Starting from scratch

You have an idea and an empty project.

```bash
npx skills add nimiq/developer-center --skill mini-apps-scaffold
npx skills add nimiq/developer-center --skill mini-apps-checklist
```

### Converting an existing app

You have a working web app and want it to run inside Nimiq Pay.

```bash
npx skills add nimiq/developer-center --skill mini-apps-convert
npx skills add nimiq/developer-center --skill mini-apps-checklist
```

### Building your own way

You're comfortable setting up your own project and just need the AI to know the rules.

```bash
npx skills add nimiq/developer-center --skill mini-apps-best-practices
npx skills add nimiq/developer-center --skill mini-apps-checklist
```

## What each skill does

- **`mini-apps-best-practices`** is the rulebook. It contains the conceptual API overview, correct patterns, constraints, and anti-patterns. It doesn't tell the AI what to build. It ensures the AI never generates code that violates the framework's rules. Load it alongside any other skill, or on its own if you prefer to handle setup yourself.

- **`mini-apps-scaffold`** is the starting point. It walks the AI through understanding your intent, scaffolding the project, installing dependencies, and verifying the provider connection works end to end. It asks questions before writing code and doesn't proceed until you confirm the connection works on your phone.

- **`mini-apps-convert`** is the migration tool. It scans an existing codebase, identifies which parts map to Nimiq Pay's providers, assesses whether the conversion makes sense, and generates a plan before changing anything. It will tell you honestly if the app is not a good fit.

- **`mini-apps-checklist`** is the exit gate. Run it when the app is functionally complete. The AI checks provider integration, mobile-first UI, security, error handling, token correctness, and chain usage, then reports what passes, what fails, and how to fix it.

## Reference

- [Mini Apps Overview](/mini-apps/)
- [Build Your First Mini App](/mini-apps/mini-app-tutorial)
- [Using EVM Tokens](/mini-apps/evm-tokens)
- [Nimiq Provider API](/mini-apps/api-reference/nimiq-provider)
- [Ethereum Provider API](/mini-apps/api-reference/ethereum-provider)
- [Skills directory](https://skills.sh/)
