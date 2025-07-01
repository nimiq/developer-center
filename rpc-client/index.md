---
prose: false
aside: false
footer: false
quickstarts:
  - label: Try the Playground
    href: ./playground
  - label: Browse RPC Methods
    href: ./methods/
  - label: Client Libraries
    href: ./clients

rpcFeatures:
  - title: Full Node Access
    icon: i-tabler:server
    description: Direct access to all Nimiq blockchain data and operations
  - title: RESTful & JSON-RPC
    icon: i-tabler:api
    description: Standard protocols for easy integration with any tech stack
  - title: Real-Time Updates
    icon: i-tabler:refresh
    description: WebSocket subscriptions for live blockchain events
  - title: Comprehensive Methods
    icon: i-tabler:list
    description: 20+ RPC methods covering all blockchain operations
  - title: Type-Safe Clients
    icon: i-tabler:shield-check
    description: Fully typed client libraries for TypeScript and other languages
  - title: AI-Powered Development
    icon: i-tabler:robot
    description: Use our MCP server to let AI assistants interact with the RPC API
---

# Nimiq RPC Client

Connect your backend services to the Nimiq blockchain {.nq-subline .mt-0}

The Nimiq RPC API provides full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints. Perfect for backend applications, data analytics, exchange integrations, and any service that needs reliable blockchain connectivity. {.mt-32}

## Quick Start

<div flex="~ gap-x-16 gap-y-12 wrap" mt-36 class="nq-raw">
  <a v-for="q in $frontmatter.quickstarts" :key="q.label" :href="q.href" nq-pill-blue nq-arrow>{{ q.label }}</a>
  <a href="https://github.com/onmax/nimiq-mcp" nq-pill-tertiary target="_blank">AI MCP Server</a>
</div>

## Why Use the RPC API?

The Nimiq RPC API is ideal for:

- **Backend Integration**: Connect servers, databases, and APIs to the blockchain
- **Exchange Services**: Build trading platforms with real-time market data
- **Analytics & Monitoring**: Create dashboards and tracking applications
- **Payment Processing**: Handle transactions in business applications
- **AI Development**: Use the [Nimiq MCP Server](https://github.com/onmax/nimiq-mcp) to enable AI assistants to interact with Nimiq blockchain data

<NqGrid f-my-xl :cards="$frontmatter.rpcFeatures" />

## AI-Powered Development

### Nimiq MCP Server

The [Nimiq Model Context Protocol (MCP) Server](https://github.com/onmax/nimiq-mcp) enables AI assistants like Claude, ChatGPT, and others to interact directly with the Nimiq blockchain. With 20 comprehensive tools, it provides:

- **Account & Balance Queries**: Get detailed account information and balances
- **Transaction Analysis**: Retrieve and analyze transaction history
- **Validator Information**: Access validator data and staking details
- **Network Status**: Monitor blockchain health and consensus state
- **Documentation Access**: AI can search and reference Nimiq docs
- **Price & Supply Data**: Get real-time market and tokenomics information

#### Quick Setup

```json
{
  "mcpServers": {
    "nimiq": {
      "command": "npx",
      "args": ["nimiq-mcp"]
    }
  }
}
```

## RPC Methods Overview

Explore our comprehensive RPC API:

| Category | Methods | Description |
|---|---|---|
| **Blockchain** | `getBlockByNumber`, `getBlockByHash`, `getHead` | Access block data and chain state |
| **Accounts** | `getAccount`, `getBalance` | Query account information and balances |
| **Transactions** | `getTransaction`, `getTransactionsByAddress`, `sendRawTransaction` | Handle transaction operations |
| **Validators** | `getValidators`, `getValidator`, `getSlots` | Access validator and staking data |
| **Network** | `getNetworkInfo`, `getEpochNumber` | Monitor network status and consensus |

[View All RPC Methods →](./methods/)

## Integration Examples

### REST API
```bash
# Get account balance
curl https://rpc.nimiqwatch.com/account/NQ07_0000_0000_0000_0000_0000_0000_0000_0000

# Get latest block
curl https://rpc.nimiqwatch.com/latest/1
```

### JSON-RPC
```javascript
// Using fetch
const response = await fetch('https://rpc.nimiqwatch.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'getBlockByNumber',
    params: [123456, false],
    id: 1
  })
})
```

## Next Steps

1. **Try the API**: Use our [interactive playground](./playground) to test RPC calls
2. **Browse Methods**: Explore all available [RPC methods](./methods/) with examples
3. **Use Client Libraries**: Get started with [typed client libraries](./clients)
4. **Enable AI**: Set up the [MCP server](https://github.com/onmax/nimiq-mcp) for AI-assisted development

<div mt-48 p-24 bg="neutral-100 dark:neutral-900" f-rounded-lg>
  <h3 text="f-lg" font-bold mb-12>Need Help?</h3>
  <p text="f-base neutral-700 dark:neutral-300" mb-16>
    Join our developer community for API support, integration help, and technical discussions.
  </p>
  <div flex="~ gap-12 wrap">
    <a href="https://t.me/nimiq" nq-pill-tertiary target="_blank">Telegram Community</a>
    <a href="https://github.com/onmax/nimiq-mcp" nq-pill-tertiary target="_blank">MCP Server GitHub</a>
    <a href="https://github.com/nimiq" nq-pill-tertiary target="_blank">Nimiq GitHub</a>
  </div>
</div>

<details>
<summary>Full RPC Specification</summary>

<<< ../.vitepress/rpc/openrpc-document.json

</details>
