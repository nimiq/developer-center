# Migration for Integrators and Exchanges

## Migration Overview

Nimiq is transitioning from Proof-of-Work (PoW) to Proof-of-Stake (PoS), where validators will replace miners to confirm transactions and produce blocks. This shift in the consensus algorithm enables more sustainable, energy-efficient, and cost-effective blockchain operations. PoS also allows faster transactions by reducing block confirmation times and improving overall throughput. Nimiq uses an account-based model, where each account holds the balance information. This guide focuses on the requirements for integrators, like exchanges, who either have an existing PoW node and migrate to PoS or are setting up a PoS node from scratch.

## Start of the PoS Mainnet Chain

The PoS Mainnet activation is scheduled on **November 19th, 2024**, starting at the PoW block height **3’456’000**. However, this does not necessarily mean the PoS chain will continue at that block height. The activation is a window of the next ~24 hours (1440 PoW blocks) where at least 80% of the registered validators’ stake must signal readiness on-chain. If the activation does not occur in the first window, additional windows allow the activation in subsequent attempts until the PoS chain starts. Once the minimal readiness threshold to bootstrap the PoS chain is reached, the final PoW block number will become the genesis block number of the PoS chain. To summarise, the start of the activation phase with the first window on November 19th, 2024, as outlined in the [migration technical details](https://www.nimiq.com/developers/migration/migration-technical-details), **should not** be considered a fixed date but rather a potential moment for the PoS chain to begin. This is important when temporarily disabling on-chain deposits and withdrawals is relevant.

As we approach the first activation window on November 19, and since the validator registration window has already closed, the current community sentiment suggests that the actual start of the PoS chain will likely happen within the first 7 windows.

### General Considerations for Different Node Options

As part of the transition from PoW to PoS, the terminology of the node types has changed:

- **PoW Full nodes** are now called **PoS History nodes (recommend)**
    - Stores all transactions since genesis but **does not permanently retain all block data**. However, transactions are never pruned and remain retrievable by their hash and block number.
- **PoW Light nodes** are now called **PoS Full nodes**
    - Holds all the blocks and transactions of only roughly the last 24 hours. The configuration of this duration is explained later in this document via the `client.toml`.
- **PoW Nano/Pico nodes** are now called **PoS Light nodes**
    - This node type is **not** suitable for integrators, as it lacks capabilities like a mempool, transaction inclusion and block bodies. It is meant to run on low-end devices like in mobile phones and browsers.

### Hardware Requirements and Recommendations per Node Type

| PoS Node Type | Memory | CPU | Storage | Network | Syncing Time |
| --- | --- | --- | --- | --- | --- |
| History (recommend) | Minimum 16GB RAM (higher recommended) | Minimum 4 vCPUs, 8 recommended | Starts from a few gigabytes, grows linearly with blockchain size | High-speed, reliable internet connection; Good I/O performance (SSDs required) | Sync time increases over the life of the blockchain |
| Full | Minimum 8GB RAM | Minimum 4 vCPUs, 8 recommended | Minimum 80GB of storage, 160GB recommended | High-speed, reliable internet connection; Good I/O performance (SSDs recommended) | Sync time grows linearly but slowly |
| Light | 1GB RAM recommended | 64-bit recommended | Works with minimal storage | Moderate-speed internet connection (e.g., 1 Mbps or higher) | Syncs in a few seconds |

## Integration Considerations when Migrating from PoW to PoS

This section is meant for you if you already have integrated with PoW. If you haven’t integrated with Nimiq before the migration, you can skip this section and continue with the [next chapter](#getting-started-with-the-pos-node).

### Account Balances, Private Keys, and Contract Address

For all intents and purposes, the PoS chain is a direct **continuation** of the PoW chain.

- **All** account balances from PoW are part of the activation snapshot and will be migrated to the PoS chain.
- Private keys remain usable on the PoS chain and will derive into the same addresses.
- NIM are migrated with a 1:1 ratio from PoW to PoS.
- Since Nimiq is a Layer 1 blockchain, there is **no** new contract address since there hasn’t been one from the beginning.

### Pausing Deposits and Withdrawals during PoW to PoS migration

During the transition from PoW to PoS, a snapshot of the PoW state is captured and migrated to the PoS chain. We recommend pausing on-chain deposits and withdrawals on November 18th, 2024, to prevent transaction losses - that is **1 day before** PoW block 3’456’000, expected to be mined on November 19th, 2024. Since the start of the PoS chain is a dynamic process (as stated in the [intro](#start-of-the-pos-mainnet-chain)), a [manual monitoring](https://nimiq.watch/) of the start of the PoS chain is required. Additionally, we will notify integrators once the migration is successful and the network is confirmed stable. Off-chain transactions and trading within the exchange **do not** need to pause during the migration.

### JSON-RPC Interface Changes

Due to the fundamental differences between the PoW and PoS chains, breaking changes to the JSON-RPC interface are necessary. All references around mining have been removed, and general naming conventions, input parameters, and response bodies have been updated.

Methods like generating addresses, creating/sending transactions, retrieving balances/transactions by address and hash remain available in the PoS JSON-RPC interface, though the method names have changed.

A document outlining all the changes can be found here: [Guide for migrating JSON-RPC](https://www.nimiq.com/developers/migration/migration-json-rpc).

The full JSON-RPC interfaces for both PoS and PoW are documented below:
- [PoS JSON-RPC Specification](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/)
- [PoW JSON-RPC Specification](https://github.com/nimiq/core-js/wiki/JSON-RPC-API)

### Key PoS JSON-RPC Methods

The following methods are particularly useful when interacting with the network:

1. [`getTransactionByHash`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#gettransactionbyhash): Retrieve transaction details using a transaction hash.
2. [`getTransactionHashesByAddress`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#gettransactionhashesbyaddress): Fetch transaction hashes associated with a given address.
3. [`getBlockNumber`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#getblocknumber): Returns the current head block of the node.
4. [`getBlockByNumber`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#getblockbynumber): Returns the block at the specified height
5. [`getRawTransactionInfo`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#getrawtransactioninfo): Get raw transaction details by decoding a serialized transaction.
6. [`isConsensusEstablished`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#isconsensusestablished): Returns a boolean specifying if the node has established consensus with the network.
7. [`createBasicTransaction`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#createbasictransaction): Create a signed transaction and returns a hex-encoded representation without broadcasting it. All `create*Transaction` RPC methods also have an equivalent `send*Transaction` version in order to create and broadcast the transaction one-go.
8. [`sendRawTransaction`](https://www.nimiq.com/developers/build/set-up-your-own-node/rpc-docs/#sendrawtransaction): Sends the given serialized and signed transaction to the network.

### Shutdown of PoW Nodes

Once the PoS chain has started, PoW nodes are no longer needed and can be shut down. This also acts as a commitment to leave the PoW chain behind. Make sure that accessing transactions on the PoW chain is no longer necessary once the PoS Mainnet chain is live. **If you need to access transaction history from before the transition, you will need to complete the migration process as described in the [Migration Tool Guide](node-operators.md).**

## Getting Started with the PoS Node

This section focuses on how to set up and configure your PoS node. The most important configuration settings are outlined below, but it is strongly recommended to review all the sections and apply them based on your requirements. Currently, two methods are supported for running a node: via Docker or by compiling from source code.

### The `nimiq-client`

The `nimiq-client` is the central software for operating a PoS node and connecting to the blockchain. Written in Rust, it is completely [open source](https://github.com/nimiq/core-rs-albatross). While we make no guarantees about the minimum supported Rust version, we currently test two versions older than the current Rust stable version. Releases follow [Semantic Versioning](https://semver.org/) rules, meaning patch releases are non-breaking. If you are compiling from source we therefore **recommend** to use the [Github releases](https://github.com/nimiq/core-rs-albatross/releases) rather than the main branch, as the latter may include breaking changes. A new Docker image is automatically uploaded to the [Github Container registry](https://github.com/nimiq/core-rs-albatross/pkgs/container/core-rs-albatross) with every new release.

### The `client.toml`

The `client.toml` is the configuration file for the `nimiq-client`. It is divided into multiple sections, and most of the properties have default values. Upon running the `nimiq-client` for the first time, an example file is generated by the client and stored at `~/.nimiq/client.example.toml`. Rename this file to `client.toml`,  as `~/.nimiq/client.toml` is the default location where the `nimiq-client` will look for configurations. The example file of the `client.toml` is available here: [GitHub](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml).

### Important Configuration File Settings

When setting up a node, ensure the following settings are properly configured in your `client.toml`. Every property has either a default value or accepted options. The following list highlights the most important ones to get your node up and running:

- **network.seed_nodes:** Depending on whether you are connecting to the PoS Testnet or Mainnet, the relevant seed nodes need to be provided. A list per network is provided [later](#mainnet-and-testnet-seed-nodes) in this document.
- **network.tls:** TLS is **optional**; the client uses the [libp2p](https://libp2p.io) network stack under the hood which enforces encrypted connections between peers out-of-the-box.
- **consensus.network**: Set to `main-albatross` in order to connect to the PoS Mainnet (default is Testnet).
- **consensus.sync_mode**: **Must** be `history` or `full` as outlined in [General Considerations](#general-considerations-for-different-node-options).
- **consensus.max_epochs_stored:** Only applies if `consensus.sync_mode` is set to `full`; configures how long blocks and transactions are kept around before they get pruned (1 epoch translates roughly to 12 hours).
- **rpc-server**: Uncomment the JSON-RPC server section (which it is by default) and configure the bind address and port for remote communication if desired. However, it is not recommended to allow communication outside of localhost unless TLS is used.

### Mainnet and Testnet Seed Nodes

Both the PoS Mainnet and Testnet have their own seed nodes for initial connection and network discovery within the respective blockchain network. In the `client.toml`, apply the appropriate seed nodes in the `network.seed_nodes` section.

**Testnet**:

- `/dns4/seed1.pos.nimiq-testnet.com/tcp/8443/wss`

**Mainnet**:

- `/dns4/seed-1.pos.nimiq.com/tcp/8443/wss`
- `/dns4/seed-2.pos.nimiq.com/tcp/8443/wss`
- `/dns4/seed-3.pos.nimiq.com/tcp/8443/wss`
- `/dns4/seed-4.pos.nimiq.com/tcp/8443/wss`

### Running the `nimiq-client` — Docker Setup (recommended)

- Create a `data` folder in the $HOME directory: `mkdir ~/data` .
- Pull the latest image from the container registry:
`docker pull ghcr.io/nimiq/core-rs-albatross:latest` .
- Create a `client.toml` in `~/data` and populate it with [the example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml). Adjust the configuration based on your requirements and [Important Configuration File Settings](#important-configuration-file-settings).
- Run `nimiq-client` via Docker:
`docker run -v $(pwd)/data:/home/nimiq/.nimiq -p 8443:8443 -p 8648:8648 -p 9100:9100 --name nimiq-rpc --rm ghcr.io/nimiq/core-rs-albatross:latest` .

**Overview of Exposed Ports:**

| Port | Description |
| --- | --- |
| 8443 | Incoming network connections port |
| 8648 | RPC port |
| 9100 | Metrics port |

### Running the `nimiq-client` — From Source Code (Ubuntu)

- Install Rust stable via [Rustup](https://rustup.rs)
- Install required build packages: `apt update && apt install clang cmake libssl-dev pkg-config`
- Clone the [source code](https://github.com/nimiq/core-rs-albatross) and change directory into the repository directory
- Checkout to the [latest release](https://github.com/nimiq/core-rs-albatross/releases)
- Within the root of the source code repository, compile the binaries:
`cargo build --release --bin nimiq-client`
- Run the `nimiq-client`: `cargo run --release --bin nimiq-client`

## Blockchain Explorers

For a visual representation of the activity on the PoS blockchain, we recommend the [NimiqHub](https://www.nimiqhub.com) blockchain explorer, which allows you to switch between the PoS Testnet and Mainnet. Note that depending on when you read this document, the PoS Mainnet explorer may not yet exist.

For PoW, we recommend [Nimiq.Watch](https://nimiq.watch).

## Useful Utility Binaries

Besides the `nimiq-client` we provide a set of other binaries to facilitate interactions with the network and simplify key tasks. To run these binaries, you need to [compile them from source](#running-the-nimiq-client-—-from-source-code-ubuntu).

- `nimiq-address`: Generates a Nimiq address and corresponding key pair. Outputs the user-friendly address, raw address, public key and private key.

    ```bash
    cargo run --release --bin nimiq-address -- --help
    cargo run --release --bin nimiq-address
    ```

- `nimiq-signtx`: Signs a transaction using key parameters such as sender address, recipient address, value and fee. Outputs the signed transaction in hexadecimal format.

    ```bash
    cargo run --release --bin nimiq-signtx -- --help
    cargo run --release --bin nimiq-signtx -- --secret-key <secret_key> --from <sender_address> --to <recipient_address> --value <amount> --fee <fee> --validity-start-height <start_height> --network <network_id>
    ```

- `nimiq-rpc`: A CLI RPC client that can query all the supported JSON-RPC methods.

    ```bash
    cargo run --release --bin nimiq-rpc -- --help
    cargo run --release --bin nimiq-rpc -- -u URL -U username -P password
    ```

## Important PoS Blockchain Properties

### Network Parameters

| Parameter | Details |
| --- | --- |
| **Block frequency target** | 1 block per second |
| **Maximum transactions per second** | ~700 transactions |
| **Blocks per batch** | 60 blocks |
| **Batches per epoch** | 720 batches |
| **Blocks per epoch** | 43’200 blocks |
| **Epoch duration** | ~12 hours |
| **Transaction validity window** | 7’200 blocks (~2 hours) |
| **Transaction finality** | After the next macro block (end of every batch) |

### Transaction Validity Window

The blockchain has a  **~2 hours** validity window, just like PoW did, meaning that a transaction is valid to be included in a block within that timeframe after the transaction's validity start height. If a transaction is not included within this window, it becomes invalid and will be rejected by the network.

### **Transaction Failure**

Transactions can fail for multiple reasons, such as missing information or invalid parameters. Before a transaction is added to the blockchain, it must meet all the conditions. If any of the following errors occur, the transaction will be rejected by the network and not be included in a block:

- **NoSender**: The sender address is missing from the transaction.
- **NoRecipient**: The recipient address is missing. A valid recipient must be provided.
- **NoValue**: The transaction value (amount to be transferred) is missing.
- **NoValidityStartHeight**: The transaction’s validity start height, which defines from when the transaction becomes valid, is not set.
- **NoNetworkId**: The transaction’s network ID is missing. The ID identifies which network the transaction is intended, whether Testnet or Mainnet.

### Transaction Finality

Once a valid transaction is included in a **micro block** (blocks containing user-generated transactions), finality is achieved through **macro blocks**. Macro blocks are produced after 59 micro blocks (~1 minute) using the Tendermint consensus algorithm. Once a macro block is added to the chain, all the transactions from the previous 59 micro blocks are finalized and have become irreversible.

## Reference

- Albatross White Paper: https://arxiv.org/pdf/1903.01589
- Protocol: https://www.nimiq.com/developers/learn/
- Migration: https://www.nimiq.com/developers/migration/
