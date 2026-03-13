---
icon: i-lucide-bot
title: AI Integrations
description: Connect assistants and agent workflows to the Nimiq Developer Center with MCP, llms.txt, llms-full.txt, and the upcoming built-in assistant.
navigation:
  title: Overview
  order: 1
---

Nimiq Developer Center ships AI-facing surfaces directly from the docs worker. That includes a built-in MCP server for tool-based retrieval, generated `llms.txt` files for model-friendly discovery, and a Docus assistant that can be enabled when the worker has an AI gateway key.

::u-page-section
---
headline: Available Surfaces
title: Build against the docs directly
description: Use the integration that matches your assistant, IDE, or agent workflow.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: MCP Server
    description: Connect Cursor, VS Code, or any MCP client to the built-in documentation server.
    icon: i-lucide-plug-zap
    to: /ai/mcp
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: llms.txt
    description: Give language models a compact or full-text index of the Developer Center.
    icon: i-lucide-file-text
    to: /ai/llms
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Assistant
    description: Prepare for the built-in docs assistant that will use the same MCP server when enabled.
    icon: i-lucide-sparkles
    to: /ai/assistant
    variant: outline
    ---
    ::::
  :::
::

## What ships today

| Surface | Status | Route |
|:---|:---|:---|
| MCP server | Live | `/mcp` |
| Cursor deeplink | Live | `/mcp/deeplink` |
| VS Code deeplink | Live | `/mcp/deeplink?ide=vscode` |
| `llms.txt` | Live | `/llms.txt` |
| `llms-full.txt` | Live | `/llms-full.txt` |
| Docus assistant UI | Configured | App config enabled |
| Docus assistant backend | Future rollout | Requires `AI_GATEWAY_API_KEY` |

## Deployed URLs

On the public Developer Center deployment, these endpoints are available under `https://nimiq.com/developers`:

- `https://nimiq.com/developers/mcp`
- `https://nimiq.com/developers/llms.txt`
- `https://nimiq.com/developers/llms-full.txt`

The assistant will also run on the same deployment once the AI gateway key is configured.
