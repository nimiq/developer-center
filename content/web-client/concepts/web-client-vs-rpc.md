---
icon: i-tabler:git-compare
description: Compare the Nimiq Web Client and the RPC Client to choose the right approach for your application.
navigation:
  title: Web Client vs RPC
  order: 2
---

# Web Client vs RPC

Nimiq offers two ways to interact with the blockchain: the **Web Client** and **RPC**. They differ in architecture, infrastructure requirements, and language support.

The Web Client is a light node — it joins the peer-to-peer network directly and syncs with other peers. RPC follows a client-server model: your application sends HTTP requests to a Nimiq node, which interacts with the network on your behalf.

![Web Client vs RPC](/assets/images/protocol/network.png)

## Web Client

The [Web Client](/web-client/) is a JavaScript library compiled from Rust to WebAssembly. It runs in browsers and Node.js, connects directly to the blockchain network, and requires no server infrastructure.

It supports account queries, transaction creation and broadcasting, wallet management, and real-time event subscriptions. See the [guides](/web-client/guides/query-the-blockchain) for what you can build with it.

## RPC

[RPC](/rpc/) exposes a Nimiq node's full functionality over HTTP using the JSON-RPC specification. It works from any programming language that can send HTTP requests.

RPC provides everything the Web Client does, plus full node control: managing accounts, configuring node settings, retrieving detailed blockchain state, and managing validator operations.

## Comparison

| Aspect | Web Client | RPC |
| --- | --- | --- |
| **Architecture** | Peer-to-peer, joins the network directly | Client-server, connects to your node |
| **Infrastructure** | None — runs in the browser or Node.js | Requires running a Nimiq node |
| **Languages** | JavaScript / TypeScript | Any language with HTTP support |
| **Functionality** | Light client operations: queries, transactions, events | Full node control: all light client operations plus node management, validator operations, advanced queries |
| **Use cases** | Wallets, browser dApps, payment flows, mobile apps | Block explorers, analytics, server applications, validator management |

## When to use each

**Choose Web Client when:**

- Building browser-based or mobile-friendly applications
- You want zero infrastructure — no server to run or maintain
- Working in JavaScript / TypeScript
- Building decentralized applications where users connect directly

**Choose RPC when:**

- Building server-side applications or backend services
- You need full node control or validator management
- Working in languages other than JavaScript
- Building block explorers, analytics tools, or data pipelines

## Start building

:::u-page-grid
  ::::u-page-card
  ---

title: Web Client
  icon: i-lucide-globe
  to: ../web-client
  variant: outline
  ---

  ::::

  ::::u-page-card
  ---

title: Nimiq RPC
  icon: i-lucide-terminal
  to: ../rpc
  variant: outline
  ---

  ::::

  ::::u-page-card
  ---

title: Validators
  icon: i-lucide-shield-check
  to: ../nodes/validators/becoming-a-validator
  variant: outline
  ---

  ::::
:::

## Further reading

- [Nimiq Albatross protocol documentation](/protocol/index) — consensus algorithm, block structure, network protocol
- [How the Light Client Works](./how-the-light-client-works) — what the Web Client can and cannot access
