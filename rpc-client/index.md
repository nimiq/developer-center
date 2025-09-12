---
secondarySidebar: false
footer: false
hoverableGrid:
  - title: Try the Playground
    href: ./playground
  - title: Browse RPC Methods
    href: ./methods/
  - title: Client Libraries
    href: ./clients/

rpcFeatures:
  - title: Full Node Access
    description: Direct access to all Nimiq blockchain data and operations
  - title: RESTful & JSON-RPC
    description: Standard protocols for easy integration with any tech stack
  - title: Real-Time Updates
    description: WebSocket subscriptions for live blockchain events
  - title: Comprehensive Methods
    description: 20+ RPC methods covering all blockchain operations
  - title: Type-Safe Clients
    description: Fully typed client libraries for TypeScript and other languages
  - title: AI-Powered Development
    description: Use our MCP server to let AI assistants interact with the RPC API
needHelpItems:
    - title: Telegram Community
      href: https://t.me/nimiq
      icon: i-nimiq:logos-telegram-mono
    - title: Nimiq GitHub
      href: https://github.com/nimiq
      icon: i-nimiq:logos-github-mono
---

# Nimiq RPC Client

Connect your backend services to the Nimiq blockchain {.nq-subline .mt-0}

The Nimiq RPC API provides full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints. Perfect for backend applications, data analytics, exchange integrations, and any service that needs reliable blockchain connectivity. {.mt-32}

## Quick Start

<script setup lang="ts">
import HoverableGrid from '../.vitepress/theme/components/HoverableGrid.vue'
</script>

<HoverableGrid bg-neutral-100 :actions="$frontmatter.hoverableGrid" class="mt-36" />

<div flex="~ gap-x-16 gap-y-16 wrap" mt-36 class="nq-raw">
  <a v-for="q in $frontmatter.quickstarts" :key="q.label" :href="q.href" nq-pill-blue nq-arrow>{{ q.label }}</a>
  <a href="https://github.com/onmax/nimiq-mcp" nq-pill-tertiary nq-arrow target="_blank" rel="noopener noreferrer">AI MCP Server</a>

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

## RPC Specification

You can download the full OpenRPC document directly from our releases:

- [OpenRPC JSON (v1.1.1)](https://github.com/nimiq/core-rs-albatross/releases/download/v1.1.1/openrpc-document.json)

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

### Need Help?

Join our developer community for API support, integration help, and technical discussions.

<NqGrid f-my-sm :cards="$frontmatter.needHelpItems" large-cards />

<div class="nq-raw" grid="~ cols-1 md:cols-3 gap-16" mt-12>
  <a href="https://t.me/nimiq" target="_blank" rel="noopener noreferrer" class="nq-hoverable bg-neutral-100 dark:bg-neutral-900 flex items-center gap-12 p-16 rounded-8">
    <span class="i-tabler:brand-telegram text-neutral-800 size-20"></span>
    <span class="font-semibold text-neutral">Telegram Community</span>
  </a>
  <a href="https://github.com/onmax/nimiq-mcp" target="_blank" rel="noopener noreferrer" class="nq-hoverable bg-neutral-100 dark:bg-neutral-900 flex items-center gap-12 p-16 rounded-8">
    <span class="i-local:nimiq-mcp text-neutral-800 size-20"></span>
    <span class="font-semibold text-neutral">MCP Server GitHub</span>
  </a>
  <a href="https://github.com/nimiq" target="_blank" rel="noopener noreferrer" class="nq-hoverable bg-neutral-100 dark:bg-neutral-900 flex items-center gap-12 p-16 rounded-8">
    <span class="i-tabler:brand-github text-neutral-800 size-20"></span>
    <span class="font-semibold text-neutral">Nimiq GitHub</span>
  </a>

</div>
