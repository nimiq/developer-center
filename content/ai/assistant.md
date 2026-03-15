---
icon: i-lucide-sparkles
title: Assistant
description: The built-in Docus assistant is already configured in the app and can be enabled when the worker gets an AI gateway key.
navigation:
  title: Assistant
  order: 4
---

The Developer Center already includes the Docus assistant module, but the backend is not live on the public worker yet. The UI is configured in the app, and the assistant becomes active once the deployment provides `AI_GATEWAY_API_KEY`.

::note
The assistant is planned for a future rollout. The current site configuration already enables the floating input UI and the "Explain with AI" action, but the server route stays disabled until the AI gateway key is present.
::

## Current Configuration

The app config currently enables:

| Feature | Status |
|:---|:---|
| Floating input | Enabled in app config |
| "Explain with AI" button | Enabled in app config |
| Assistant API route | Disabled until `AI_GATEWAY_API_KEY` is set |

## Runtime Details

When enabled, the assistant uses these Docus defaults:

| Setting | Value |
|:---|:---|
| API route | `/__docus__/assistant` |
| MCP server | `/mcp` |
| Default model | `google/gemini-3-flash` |

That means the assistant will use the same built-in MCP server documented in [/ai/mcp](/ai/mcp).

## What The Assistant Supports

Docus exposes configuration for:

| Option | Purpose |
|:---|:---|
| `floatingInput` | Shows the floating prompt input on documentation pages |
| `explainWithAi` | Shows the "Explain with AI" action in the docs sidebar |
| `faqQuestions` | Seeds suggested questions for users |
| `shortcuts.focusInput` | Controls the keyboard shortcut for focusing the assistant |
| `icons.trigger` | Changes the trigger icon |
| `icons.explain` | Changes the explain-action icon |

## Rollout Path

To make the assistant live on the worker, the deployment needs an AI gateway key. Once that key is present, Docus mounts the assistant API route automatically and the configured UI starts using it.
