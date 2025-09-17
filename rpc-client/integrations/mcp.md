# MCP Server (AI Integration)

Enable AI assistants like Claude to interact with the blockchain through natural language. {.nq-subline}

The Nimiq Model Context Protocol server provides AI assistants with direct blockchain access.

---

## Basic Setup

```bash
npm install -g nimiq-mcp

# Add to Claude Desktop config (~/.config/Claude/claude_desktop_config.json):
{
  "mcpServers": {
    "nimiq": {
      "command": "npx",
      "args": ["nimiq-mcp"]
    }
  }
}
```

---

## Natural Language Queries

Ask Claude directly:

> **"What's the balance of address NQ07_...?"**

> **"Show me the top 5 validators by stake"**

> **"Analyze transaction patterns for the last 100 blocks"**

Claude will automatically use tools like:
- `get_account_balance`
- `get_validators`
- `search_transactions`
- `analyze_address`

---

## AI-Powered Analysis

Advanced requests:

> **"Compare validator performance over the last month"**

> **"Find accounts with unusual transaction patterns"**

> **"Generate a network health report"**

Claude combines multiple tools and provides insights:
- Pattern recognition in blockchain data
- Performance analysis and recommendations
- Automated report generation
- Real-time monitoring suggestions

---

## Need More Examples?

For comprehensive documentation and all available methods:

- **[Browse all RPC methods →](../methods/)**
- **[MCP Repository →](https://github.com/onmax/nimiq-mcp)**
- **[Claude Desktop Setup Guide →](https://docs.anthropic.com/claude/docs/claude-desktop)**
