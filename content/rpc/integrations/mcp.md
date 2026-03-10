---
icon: i-tabler:robot
---

# MCP Server (AI Integration)

Enable AI assistants like Claude or Cursor to interact with the blockchain through natural language.

The Nimiq Model Context Protocol server provides AI assistants with direct blockchain access.

## Documentation & Usage

For complete documentation, installation instructions, and all available methods, visit the official repository:

<UButton to="https://github.com/onmax/nimiq-mcp" target="_blank" label="View Nimiq MCP Repository" icon="i-simple-icons:github" trailing-icon="i-tabler:arrow-up-right" color="primary" class="mt-4 rounded-full" />

## Natural Language Queries

Ask your AI agent directly:

- "What's the balance of address NQ07_...?"

- "Show me the top 5 validators by stake"

- "Analyze transaction patterns for the last 100 blocks"

Claude will automatically use tools like:

- `get_account_balance`
- `get_validators`
- `search_transactions`
- `analyze_address`

Finally, it can summarize the results in plain language for you.
