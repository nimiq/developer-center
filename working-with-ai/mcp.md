# Model Context Protocol

MCP (Model Context Protocol) enables AI assistants to access external data sources and tools. The Nimiq MCP server provides access to documentation, tutorials, RPC methods, and blockchain data.

## Server Endpoint

```
https://developer-center.je-cf9.workers.dev/mcp
```

Browser access redirects to docs. MCP protocol access provides structured resources for AI assistants.

## What's Available

The Nimiq MCP server exposes three types of capabilities:

### Resources

**Documentation Pages** - All Nimiq docs indexed by module
`resource://nimiq/documentation-pages`

**Tutorials** - Hands-on learning content catalog
`resource://nimiq/tutorials`

**OpenRPC Specification** - Complete RPC API spec with 125+ methods
`resource://nimiq/open-rpc-specification-document`

### Tools

**Documentation Tools**
- `list_documentation_pages` - List docs by module (web-client, rpc, protocol, hub, nodes, nimiq-utils)
- `get_documentation_page` - Read full page content by path
- `search_documentation` - Find pages about a topic

**Tutorial Tools**
- `list_tutorials` - Browse all tutorials
- `get_tutorial` - Read complete tutorial by slug
- `search_tutorials` - Find tutorials by topic

**RPC Tools**
- `list_rpc_methods` - List methods by tag (consensus, wallet, validator, blockchain, mempool, network, zkp)
- `call_rpc_method` - Execute live RPC call against Nimiq mainnet
- `search_rpc_methods` - Find method for a specific task

### Prompts

**find_documentation_for_topic** - Guided doc discovery with optional module filter

**find_tutorial_for_topic** - Find hands-on tutorials for specific learning goals

**find_rpc_method_for_task** - Discover which RPC method performs a blockchain operation

## Setup

::: code-group
```json [Claude Code]
// ~/.config/claude/mcp.json
{
  "mcpServers": {
    "nimiq": {
      "url": "https://developer-center.je-cf9.workers.dev/mcp"
    }
  }
}
```

```json [Cursor]
// ~/.cursor/mcp.json (macOS/Linux)
// %APPDATA%\Cursor\mcp.json (Windows)
{
  "mcpServers": {
    "nimiq": {
      "url": "https://developer-center.je-cf9.workers.dev/mcp"
    }
  }
}
```

```json [VS Code (Copilot)]
// .vscode/mcp.json (workspace)
{
  "servers": {
    "nimiq": {
      "url": "https://developer-center.je-cf9.workers.dev/mcp"
    }
  }
}
```

```json [Windsurf]
// ~/.windsurf/mcp.json
{
  "mcpServers": {
    "nimiq": {
      "url": "https://developer-center.je-cf9.workers.dev/mcp"
    }
  }
}
```

```json [Zed]
// Zed settings
{
  "mcp": {
    "servers": {
      "nimiq": {
        "url": "https://developer-center.je-cf9.workers.dev/mcp"
      }
    }
  }
}
```
:::

### ChatGPT

1. Settings → Apps & Connectors → Advanced settings → Enable developer mode → Go back
2. Click "+" next to "Enabled apps & connectors"
3. Name: `Nimiq MCP`
4. URL: `https://developer-center.je-cf9.workers.dev/mcp`
5. Protocol: MCP

### GitHub Copilot Agent

Repository settings → Copilot → Enable MCP tools → Add:

```json
{
  "nimiq": {
    "url": "https://developer-center.je-cf9.workers.dev/mcp"
  }
}
```

### Other Clients

**Mistral Le Chat**, **Opencode**, and other MCP-compatible clients:
- Use server URL: `https://developer-center.je-cf9.workers.dev/mcp`
- Refer to client docs for config steps

## Usage Examples

### Finding Documentation

> "Show me Web Client integration guides"

AI uses `list_documentation_pages` with `module=webClient` filter

### Reading Content

> "How do I create a transaction?"

AI uses `search_documentation` or `find_documentation_for_topic` prompt, then `get_documentation_page` to read relevant content

### Working with Tutorials

> "I want to learn how to send my first transaction"

AI uses `search_tutorials` to find "first-transaction" tutorial, then `get_tutorial` to read step-by-step guide

### RPC Method Discovery

> "Which RPC method gets validator info?"

AI uses `search_rpc_methods` or `find_rpc_method_for_task` prompt to find `getValidatorByAddress`

### Live Blockchain Data

> "Show me the latest block"

AI uses `call_rpc_method` with `getLatestBlock` to fetch real mainnet data

## Testing Setup

Ask your AI assistant:

> "List available Nimiq documentation modules"

> "What tutorials are available?"

> "Call the getLatestBlock RPC method"

If these work, setup is complete.

## Troubleshooting

**Connection issues**
- Verify URL: `https://developer-center.je-cf9.workers.dev/mcp`
- Check internet connection
- Restart AI assistant/editor

**No resources retrieved**
- Enable MCP in client settings
- Check client logs for errors
- Verify JSON config syntax

**RPC calls failing**
- Verify method name from `list_rpc_methods`
- Check params match schema
- Ensure mainnet connectivity

## Need Help?

- [Discord](https://discord.gg/nimiq)
- [Telegram](https://t.me/nimiq)
- [GitHub Issues](https://github.com/nimiq/developer-center/issues)
