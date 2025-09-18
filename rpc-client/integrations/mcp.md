# MCP Server (AI Integration)

Enable AI assistants like Claude or Cursor to interact with the blockchain through natural language.

The Nimiq Model Context Protocol server provides AI assistants with direct blockchain access.

## Documentation & Usage

For complete documentation, installation instructions, and all available methods, visit the official repository:

<a href="https://github.com/onmax/nimiq-mcp" nq-arrow f-mt-sm nq-pill-blue target="_blank" mx-0>
  <div i-nimiq:logos-github-mono mr-4 />
  View Nimiq MCP Repository
</a>

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
