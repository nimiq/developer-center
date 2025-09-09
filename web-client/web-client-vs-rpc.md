# Web Client vs RPC Client

If you're unsure which client to use for interacting with the Nimiq blockchain, this page offers a comparison between the Nimiq Web Client and the RPC Client so you can choose the tool that best fits your needs and expertise. {.nq-subline}

## TL;DR
The Nimiq Web Client establishes direct connections with other peers in the network, making it a part of the blockchain network. In contrast, the RPC follows a client-server model, where clients connect to a single server that interacts with multiple peers on the network. The Web Client operates in JavaScript environments, such as web browsers and Node.js, while the RPC can be used from any programming language and environment through HTTP calls.

<img class="object-contain max-h-[max(60vh,180px)]" src="/assets/images/protocol/network.png" alt="Web Client vs RPC" />

## Nimiq Web Client

The [Nimiq Web Client](/web-client/) is a JavaScript library that enables direct participation in the Nimiq PoS ecosystem. It can run in environments including web browsers as well as server-side environments like Node.js. This client is compiled from Rust to WebAssembly using `wasm-pack` and offers a lightweight solution for users who want to interact with the Nimiq blockchain.

The Web Client provides a user-friendly interface for building consensus with other nodes, creating wallets, sending transactions, and interacting with the blockchain through simple operations. It simplifies user interaction and offers easy integration.

Users can access the Web Client on mobile devices, such as smartphones and tablets, providing flexibility and convenience for managing their Nimiq wallets and transactions on the go. The Web Client is designed to be compatible with major web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari, ensuring a consistent user experience across different platforms.

## Nimiq RPC

[Nimiq RPC](/rpc-client/) provides developers access to a node that is part of the Nimiq blockchain and establishes a connection between a client and a single server, which then interacts with multiple peers on the network.

RPC offers more elaborate functionalities, such as retrieving information about the blockchain state, submitting transactions, managing accounts, and configuring node settings. It is particularly valuable for developers and nodes who require advanced control and automation of blockchain operations.

RPC supports interaction with nodes and allows users to call its endpoints using HTTP from any language or software capable of sending requests according to the JSON-RPC specification. Comprehensive API documentation is available for the RPC, detailing the methods, parameters, and endpoints supported by the interface, facilitating seamless integration and development.

## Comparison Table

| Aspect | Web Client | RPC Client |
| --- | --- | --- |
| **Use Cases** | Nimiq Wallet, Nimiq Pay, browser dApps | TrustWallet, Block Explorer, server applications |
| **Accessibility** | Requires familiarity with JavaScript and similar frameworks like Node.js; can be run in a browser | Requires adherence to the JSON-RPC specification |
| **Functionality** | Offers lightweight access to blockchain operations and functions as a light node within the network | Offers full node control, providing a wider range of options, particularly for managing full and history nodes |
| **User Base** | For developers capable of managing consensus within a JavaScript environment | For developers seeking to retrieve data efficiently within a stable client and manage their node |
| **Infrastructure** | No server infrastructure required | Requires running a Nimiq node |
| **Performance** | Peer-to-peer, direct blockchain access | Centralized through your node |
| **Languages** | JavaScript/TypeScript | Any language with HTTP support |

## When to Use Each

### Choose Web Client When:
- Building browser-based applications
- Creating decentralized applications (dApps)
- Want to minimize infrastructure requirements
- Need mobile-friendly solutions
- Building with JavaScript/TypeScript

### Choose RPC Client When:
- Building server-side applications
- Need advanced node management
- Working with languages other than JavaScript
- Require high-performance data retrieval
- Building block explorers or analytics tools

## What You Can Do

### Web Client Capabilities

For users seeking a straightforward and user-friendly way to interact with the blockchain, the Nimiq Web Client is the ideal choice. With its intuitive interface, users can perform basic operations such as creating wallets, sending transactions, and checking balances within their browsers. The Web Client simplifies blockchain interactions, making it accessible to users of all skill levels. Some of the operations supported by the Web Client include:

- Create new wallet addresses
- Send transactions to other addresses
- View transaction history
- Check account balances
- Subscribe to real-time blockchain events

### RPC Capabilities

For developers, tech-savvy users, and validators looking for more advanced control over blockchain operations, the Nimiq RPC provides extensive capabilities for accessing their nodes. Through established methods and endpoints, users can perform a wide range of operations, including:

- Lock and unlock accounts
- Verify transactions
- List all available accounts and their balances
- Retrieve ZKP state information
- Manage validator operations
- Advanced blockchain querying

## Start Building Now

Now that you know the differences, why not start building?

<NqGrid :cards="[
  { icon: 'i-local:nimiq-web-client', title: 'Web Client', href: '/web-client' },
  { icon: 'i-local:nimiq-rpc', title: 'Nimiq RPC', href: '/rpc-client' },
  { icon: 'i-local:nimiq-validors', title: 'Validators', href: '/validators' },
]" />

## Learn More

Curious about how the Nimiq blockchain works? Dive into the [Nimiq Albatross protocol documentation](/protocol/index) to learn more about the consensus algorithm, block structure, network protocol, and more.
