# Web Client VS RPC Client

If you're unsure which client to use for interacting with the Nimiq blockchain, this page offers a comparison between the Nimiq Web Client and the RPC so you can choose the tool that best fits your needs and expertise. {.nq-subline}

### TL;DR
The Nimiq Web Client establishes direct connections with other peers in the network, making it a part of the blockchain network. In contrast, the RPC follows a client-server model, where clients connect to a single server that interacts with multiple peers on the network. The Web Client operates in JavaScript environments, such as web browsers and Node.js, while the RPC can be used from any programming language and environment through HTTP calls.

<img class="object-contain max-h-[max(60vh,180px)]" src="/assets/images/protocol/network.png" alt="web client vs rpc" />

## Nimiq Web Client

The [Nimiq Web Client](/build/web-client/getting-started.md) is a JavaScript library that enables direct participation in the Nimiq PoS ecosystem. It can run in environments including web browsers as well as server-side environments like Node.js. This client is compiled from Rust to WebAssembly using `wasm-pack` and it offers a lightweight solution for users who want to interact with the Nimiq blockchain.

The Web Client provides a user-friendly interface for building consensus with other nodes, creating wallets, sending transactions, and interacting with the blockchain with simple operations. It simplifies user interaction and offers easy integration.

Users can access the Web Client on mobile devices, such as smartphones and tablets, providing flexibility and convenience for managing their Nimiq wallets and transactions on the go. The Web Client is designed to be compatible with major web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari ensuring a consistent user experience across different platforms.

## Nimiq RPC

[Nimiq RPC](/build/set-up-your-own-node/rpc-docs/index.md) provides developers access to a node that is part of the Nimiq blockchain and establishes a connection between a client and a single server, which then interacts with multiple peers on the network.

RPC offers more elaborate functionalities, such as retrieving information about the blockchain state, submitting transactions, managing accounts, and configuring node settings. It is particularly valuable for developers and nodes who require advanced control and automation of blockchain operations.

RPC supports interaction with nodes and allows users to call its endpoints using HTTP from any language or software capable of sending requests according to the JSON-RPC specification. Comprehensive API documentation is available for the RPC, detailing the methods, parameters, and endpoints supported by the interface, facilitating seamless integration and development.

## How to know which one to use?

| Aspect | Web Client | RPC Client |
| --- | --- | --- |
| Nimiq Use | Nimiq Wallet, Nimiq Pay | TrustWallet, Block Explorer |
| Accessibility | Requires familiarity with JavaScript and similar frameworks like NodeJS; can be run in a browser | Requires adherence to the JSON-RPC specification |
| Functionality | Offers lightweight access to blockchain operations, and functions as a light node within the network | Offers full node control, providing a wider range of options, particularly for managing full and history nodes |
| User Base | For developers capable of managing consensus within a JavaScript environment | For developers seeking to retrieve data efficiently within a stable client and manage their node|

When interacting with the Nimiq blockchain, users have the option to choose between the Web Client and the RPC, each offering distinct advantages based on their needs and expertise. Let’s take a look at what you can do with both.

### Web Client

For users seeking a straightforward and user-friendly way to interact with the blockchain, the Nimiq Web Client is the ideal choice. With its intuitive interface, users can perform basic operations such as creating wallets, sending transactions, and checking balances within their browsers. The Web Client simplifies blockchain interactions, making it accessible to users of all skill levels. Some of the operations supported by the Web Client include:

- Create new wallet addresses
- Send transactions to other addresses
- View transaction history
- Check account balances

### RPC

For developers, tech-savvies, and validators looking for more advanced control over blockchain operations, the Nimiq RPC provides extensive capabilities for accessing their nodes. Through established methods and endpoints, users can perform a wide range of operations, including:

- Lock and unlock accounts
- Verify transactions
- List all available accounts and their balances
- Retrieve ZKP state information

## Start building now

Now that you know the differences, why not start building?

<div flex="~ gap-16 items-center" class="nq-raw" mt-16>
  <a href="./web-client/" nq-arrow nq-pill-sm nq-pill-blue>Web Client</a>
  <a href="./set-up-your-own-node/" nq-arrow nq-pill-sm nq-pill-secondary>Your private node</a>
</div>

## Learn about the protocol

Curious about how the Nimiq blockchain works? Dive into the [Nimiq Albatross protocol documentation](/learn/) to learn more about the consensus algorithm, block structure, network protocol and more.
