# Prover node

This guide will help you configure your node as a [prover node](/protocol/protocol/prover-node). Follow the steps below to set up your prover node.

## Getting Started

Start by installing the Nimiq client. Follow the steps provided in the [Nimiq Core GitHub Repository](https://github.com/nimiq/core-rs-albatross/blob/albatross/README.md#installation) to install the client on your machine. Once the client is installed, proceed with the setup by starting the client with:

```bash
cargo run --release --bin nimiq-client
```

## Configuration
The next step is to configure your client to generate the configuration file. Follow the instructions provided in the [configuration guide](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration). This will walk you through the process of creating and setting up your node’s configuration file, which includes all necessary settings for your client.

## Configuring Your Node
The configuration file is located at `$HOME/.nimiq/client.toml` or the specified path in your local machine as defined in the previous step.

To be eligible as a prover node, you must first set your node to operate in **full** sync mode. This ensures that the node has access to the blockchain data required for prover functionality. In the **consensus** section of the configuration file, set `sync_mode` to `full` as shown in the example below:

```toml
[consensus]
sync_mode = "full"
```

> [!NOTE]
> Only nodes with `sync_mode` set to either `full` or `history` can become prover nodes. We recommend using **full** mode to ensure full prover functionality. History nodes require downloading the entire blockchain history, which is more resource-intensive.

## Download the Proving Keys

Before enabling the ZK Prover in the configuration file, you need to download and place the proving keys. Follow these steps:

#### 1. Download the Proving Keys
The proving keys are large (approximately 15 GB) and can be downloaded using IPFS or BitTorrent.
- **IPFS (InterPlanetary File System)**: IPFS is a decentralized file storage system that allows users to share and access files in a peer-to-peer network. You can use one of the following methods to download the keys from IPFS.
    - **IPFS ID:** `/ipfs/QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY`
    - **Public Gateways:**
        - [IPFS Gateway 1](https://ipfs.io/ipfs/QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY/)
        - [IPFS Gateway 2](https://bafybeidbrud57crri5xgdtvnipihzzdxjkghmebxlyseie5qha7sxwkj64.ipfs.dweb.link/)
    - **Our Gateway:** [Nimiq IPFS Gateway](https://ipfs.nimiq.io/ipfs/QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY/)
- **BitTorrent**: Alternatively, you can download the proving keys via BitTorrent.
    - **Download Torrent File:** [Proving Keys Torrent](https://repo.nimiq.com/torrents/nimiq-mainnet-zkp-keys.torrent)
    - **Magnet Link**:
   ```bash
      magnet:?xt=urn:btih:2cc3ca7888b75f1c38f2c4013f6eb3631946e2e9&dn=nimiq-zkp-keys&tr=udp%3A%2F%2Ftorrent.nimiq.network%3A6969
   ```
#### 2. Extract and Move the Proving Keys
After downloading the proving keys, extract the `.zip` file and move the extracted contents to the `.zkp_mainnet` folder.

## Enable the ZK Prover

Once you have the proving keys in the `.zkp_mainnet` folder, you need to enable the prover node in your configuration file. In the same configuration file, locate the ZK Prover section and uncomment it, and then set the path to the proving keys.

    ##############################################################################
    # ZK Prover configuration
    #
    # If the section header is uncommented, the prover is enabled.
    ##############################################################################
    [zk-prover]

    # The path for the proving keys folder.
    # Default: ".zkp"
    prover_keys_path = "~/.zkp_mainnet"

## Restart the Client

After you’ve configured the ZK Prover and placed the proving keys, restart the client to apply the changes:

```bash
cargo run --release --bin nimiq-client
```

Your node is now configured as a prover node and will be able to generate zk-SNARKS!
