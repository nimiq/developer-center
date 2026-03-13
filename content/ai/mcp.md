---
icon: i-lucide-plug-zap
title: MCP Server
description: Connect AI tools directly to the built-in MCP server that ships with the Nimiq Developer Center worker.
navigation:
  title: MCP Server
  order: 2
---

Connect AI tools directly to the Nimiq Developer Center MCP server that ships with this worker. This is the built-in Docus MCP server, and it is also the MCP backend the site assistant uses when that feature is enabled.

<UButton to="/mcp/deeplink" label="Install in Cursor" icon="i-tabler:download" trailing-icon="i-tabler:arrow-up-right" color="primary" class="mt-4 mr-3 rounded-full" />
<UButton to="/mcp/deeplink?ide=vscode" label="Install in VS Code" icon="i-tabler:download" trailing-icon="i-tabler:arrow-up-right" color="neutral" variant="outline" class="mt-4 rounded-full" />

## Endpoint

Point your MCP client to:

```text
/mcp
```

On the public deployment, that resolves to:

```text
https://nimiq.com/developers/mcp
```

## Routes

| Route | Purpose |
|:---|:---|
| `/mcp` | MCP server endpoint |
| `/mcp/deeplink` | One-click install for Cursor by default |
| `/mcp/deeplink?ide=vscode` | One-click install for VS Code |
| `/mcp/badge.svg` | Install badge image |

## Tools

The current worker ships these Docus documentation tools:

| Tool | Purpose |
|:---|:---|
| `list-pages` | Discover available documentation pages with titles, descriptions, and paths |
| `get-page` | Fetch the full markdown content of a specific page |

Use `list-pages` when you need to browse the docs first. Use `get-page` once you know the exact path you want to read.

## Example Configuration

```json
{
  "mcpServers": {
    "nimiq-developer-center": {
      "type": "http",
      "url": "https://nimiq.com/developers/mcp"
    }
  }
}
```

## What It Is For

This MCP server is optimized for documentation retrieval. It lets assistants and agents discover Nimiq documentation pages and read their markdown directly from the live Developer Center worker.
