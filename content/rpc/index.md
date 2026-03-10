---
icon: i-tabler:layout-grid
title: Nimiq RPC Client
description: Connect your backend services to the Nimiq blockchain with full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints.
---

::u-page-hero
---
title: Nimiq RPC Client
description: Connect your backend services to the Nimiq blockchain with full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints.
---

[Open RPC Servers](/rpc/open-servers){.mr-2} [TypeScript Client](/rpc/integrations/typescript){.mr-2} [MCP Server](/rpc/integrations/mcp)
::

::u-page-section
---
headline: Quick Start
title: Jump right in
description: Start experimenting with the Nimiq RPC API.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Browse RPC Methods
    description: Explore all available RPC methods and try them directly in the browser
    icon: i-tabler:book-2
    to: ./methods/
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Open RPC Servers
    description: Use public servers for testing and development
    icon: i-tabler:server
    to: ./open-servers
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Integrations
    description: Learn how to connect with a CLI, TypeScript, or HTTP
    icon: i-tabler:code
    variant: outline
    ---
    ::::
  :::
::

::u-page-section
---
headline: Why RPC API
title: Perfect for backend integration
description: The Nimiq RPC API is ideal for servers, exchanges, analytics platforms, and any service needing reliable blockchain connectivity.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Full Node Access
    description: Direct access to all Nimiq blockchain data and operations
    icon: i-tabler:database
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: RESTful & JSON-RPC
    description: Standard protocols for easy integration with any tech stack
    icon: i-tabler:api
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Real-Time Updates
    description: WebSocket subscriptions for live blockchain events
    icon: i-tabler:broadcast
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Comprehensive Methods
    description: 120+ RPC methods covering all blockchain operations
    icon: i-tabler:layers-linked
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Type-Safe Clients
    description: Fully typed client libraries for TypeScript
    icon: i-tabler:shield-check
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Production Ready
    description: High availability and performance
    icon: i-tabler:server
    variant: outline
    ---
    ::::
  :::
::

::callout{icon="i-tabler:bot" to="https://github.com/onmax/nimiq-mcp"}
**Build with AI using Nimiq MCP** --- Enable AI assistants like Claude to interact directly with the Nimiq blockchain through our Model Context Protocol server.
::

::u-page-section
---
headline: RPC Methods
title: Explore the API
description: Discover the full range of RPC methods available for interacting with the Nimiq blockchain.
---

| Category | Methods | Description |
|:---|:---|:---|
| **Blockchain** | `getBlockByNumber`, `getBlockByHash`, `getLatestBlock` | Access block data and chain state |
| **Accounts** | `getAccountByAddress`, `getBalance` | Query account information and balances |
| **Transactions** | `getTransactionByHash`, `getTransactionsByAddress`, `sendRawTransaction` | Handle transaction operations |
| **Validators** | `getValidators`, `getValidatorByAddress`, `getSlotAt` | Access validator and staking data |
| **Network** | `getNetworkInfo`, `getEpochNumber` | Monitor network status and consensus |

<UButton to="./methods/" label="View All RPC Methods" trailing-icon="i-tabler:arrow-up-right" color="primary" class="rounded-full" />

::
