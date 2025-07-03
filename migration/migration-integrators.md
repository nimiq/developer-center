# Guide for Integrators and Exchanges

This guide outlines the key steps and requirements for integrators, such as exchanges, who want to set up and operate a Proof-of-Stake (PoS) node for the Nimiq blockchain. It provides detailed information on node types, hardware requirements and configuration options to facilitate an efficient integration.

### General Considerations for Different Node Options

We have the following node types:
- **History nodes** (recommend): Stores all transactions since genesis but **does not permanently retain all block data**. However, transactions are never pruned and remain retrievable by their hash and block number.

- **Full nodes**: Holds all the blocks and transactions of only roughly the last 24 hours. The configuration of this duration is explained later in this document via the `client.toml`.

- **Light nodes**: This node type is **not** suitable for integrators, as it lacks capabilities like a mempool, transaction inclusion and block bodies. It is meant to run on low-end devices like mobile phones and browsers.

### Hardware Requirements and Recommendations per Node Type

| PoS Node Type | Memory | CPU | Storage | Network | Syncing Time |
| --- | --- | --- | --- | --- | --- |
| History (recommend) | Minimum 16GB RAM (higher recommended) | Minimum 4 vCPUs, 8 recommended | Starts from a few gigabytes, grows linearly with blockchain size | High-speed, reliable internet connection; Good I/O performance (SSDs required) | Sync time increases over the life of the blockchain |
| Full | Minimum 8GB RAM | Minimum 4 vCPUs, 8 recommended | Minimum 80GB of storage, 160GB recommended | High-speed, reliable internet connection; Good I/O performance (SSDs recommended) | Sync time grows linearly but slowly |
| Light | 1GB RAM recommended | 64-bit recommended | Works with minimal storage | Moderate-speed internet connection (e.g., 1 Mbps or higher) | Syncs in a few seconds |

### JSON-RPC Interface

The JSON-RPC interface provides methods for generating addresses, creating/sending transactions, retrieving balances and much more. The full specification is available here: [PoS JSON-RPC Specification](/rpc-client/methods/).

### Key JSON-RPC Methods

The following methods are particularly useful when interacting with the network:

1. [`getTransactionByHash`](/rpc-client/methods/#gettransactionbyhash): Retrieve transaction details using a transaction hash.
2. [`getTransactionHashesByAddress`](/rpc-client/methods/#gettransactionhashesbyaddress): Fetch transaction hashes associated with a given address.
3. [`getBlockNumber`](/rpc-client/methods/#getblocknumber): Returns the current head block of the node.
4. [`getBlockByNumber`](/rpc-client/methods/#getblockbynumber): Returns the block at the specified height
5. [`getRawTransactionInfo`](/rpc-client/methods/#getrawtransactioninfo): Get raw transaction details by decoding a serialized transaction.
6. [`isConsensusEstablished`](/rpc-client/methods/#isconsensusestablished): Returns a boolean specifying if the node has established consensus with the network.
7. [`createBasicTransaction`](/rpc-client/methods/#createbasictransaction): Create a signed transaction and returns a hex-encoded representation without broadcasting it. All `create*Transaction` RPC methods also have an equivalent `send*Transaction` version in order to create and broadcast the transaction one-go.
8. [`sendRawTransaction`](/rpc-client/methods/#sendrawtransaction): Sends the given serialized and signed transaction to the network.

### PoW Account and Transaction history
Nimiq has transitioned from a PoW system to a PoS system. For those needing access to historical transaction data before the PoS genesis block, a read-only database of the PoW chain is available and can be queried using the [JSON-RPC interface](#json-rpc-interface).

Pre-genesis transactions use a different format compared to PoS transactions. Instructions on how to handle and query these pre-genesis transactions will be provided in a future update.

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
- `/dns4/seed2.pos.nimiq-testnet.com/tcp/8443/wss`
- `/dns4/seed3.pos.nimiq-testnet.com/tcp/8443/wss`
- `/dns4/seed4.pos.nimiq-testnet.com/tcp/8443/wss`

**Mainnet**:

- `/dns4/aurora.seed.nimiq.com/tcp/443/wss`
- `/dns4/catalyst.seed.nimiq.network/tcp/443/wss`
- `/dns4/cipher.seed.nimiq-network.com/tcp/443/wss`
- `/dns4/eclipse.seed.nimiq.cloud/tcp/443/wss`
- `/dns4/lumina.seed.nimiq.systems/tcp/443/wss`
- `/dns4/nebula.seed.nimiq.com/tcp/443/wss`
- `/dns4/nexus.seed.nimiq.network/tcp/443/wss`
- `/dns4/polaris.seed.nimiq-network.com/tcp/443/wss`
- `/dns4/photon.seed.nimiq.cloud/tcp/443/wss`
- `/dns4/pulsar.seed.nimiq.systems/tcp/443/wss`
- `/dns4/quasar.seed.nimiq.com/tcp/443/wss`
- `/dns4/solstice.seed.nimiq.network/tcp/443/wss`
- `/dns4/vortex.seed.nimiq.cloud/tcp/443/wss`
- `/dns4/zenith.seed.nimiq.systems/tcp/443/wss`

### Running the `nimiq-client` — Docker Setup (recommended)
For history nodes on mainnet, the full genesis file is required. Follow these instructions to ensure proper setup.

1. Create a `data` folder in the $HOME directory: `mkdir ~/data`.
2. Pull the latest image from the container registry:
`docker pull ghcr.io/nimiq/core-rs-albatross:latest`.
3. Create a `client.toml` in `~/data` and populate it with [the example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml). Adjust the configuration based on your requirements and [Important Configuration File Settings](#important-configuration-file-settings).
4. Run the client via Docker.
    - For history node on **mainnet**:
        - Make sure to have downloaded the full genesis file as explained in the [README](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#history-nodes).
        - Copy the full genesis file into the `data` folder: `cp /path/to/nimiq-genesis-main-albatross.toml ~/data`.
        - Run the client with the `NIMIQ_OVERRIDE_MAINNET_CONFIG` environment variable:
        ```
        docker run -v $(pwd)/data:/home/nimiq/.nimiq -p 8443:8443 -p 8648:8648 -p 9100:9100 -e NIMIQ_OVERRIDE_MAINNET_CONFIG=/home/nimiq/.nimiq/nimiq-genesis-main-albatross.toml --name nimiq-rpc --rm ghcr.io/nimiq/core-rs-albatross:latest
        ```
    - For other configurations (**non-history** nodes or **non-mainnet**):
     ```
     docker run -v $(pwd)/data:/home/nimiq/.nimiq -p 8443:8443 -p 8648:8648 -p 9100:9100 --name nimiq-rpc --rm ghcr.io/nimiq/core-rs-albatross:latest
     ```

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

For a visual representation of the activity on the PoS blockchain, the following blockchain explorers are available:

**Mainnet**:
- [NimiqHub](https://nimiqhub.com)
- [Nimiq Watch](https://nimiq.watch)

**Testnet**:
- [NimiqHub](https://testnet.nimiqhub.com)
- [Nimiq Watch](https://test.nimiq.watch)

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

The blockchain has a  **~2 hours** validity window, meaning that a transaction is valid to be included in a block within that timeframe after the transaction's validity start height. If a transaction is not included within this window, it becomes invalid and will be rejected by the network.

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
