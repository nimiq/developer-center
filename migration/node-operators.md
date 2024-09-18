# PoS Migration Guide for Node Operators

Our migration guides are designed for users who want to actively participate in the transition process. This specific guide is for those who want to run the migration process without becoming validators (if you want to become one of the first validators from the start of the PoS chain, please refer to this [guide](migration-validators)). It is suitable for:

- Node Operators
- Exchanges
- Regular Users

This guide provides instructions to run the Activation Tool, the final step of the migration to the Nimiq PoS. There is no requirement to run the migration as a node operator. You can simply start your PoS client once the migration process ends and build your own node.

It's important to note that, as a node operator, your role is primarily as an observer during the activation process. The migration will only proceed if at least 80% of the allocated stake is ready to migrate. Since you have not pre-registered as a validator, running the activation tool does not contribute to meet the threshold requirement for the transition. Nonetheless, by running the migration tool, you will replicate the state migration and genesis block creation process.

## Activation Tool

The Activation Tool facilitates the transition from the PoW chain to the PoS chain. We recommend running the activation tool before its window begins to ensure sufficient time for migrating the history, as this process can be time-consuming. Follow the appropriate guide based on whether you already have a PoW client running.

::: details Users without an Existing PoW Client

- Clone the [Nimiq CoreJS repository](https://github.com/nimiq/core-js?tab=readme-ov-file#quickstart) and follow the instructions
- Refer to [this sample guide](https://github.com/nimiq/core-js/blob/master/clients/nodejs/sample.conf) to enable the PoW RPC server
- Clone the [PoS blockchain repository](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#installation) and follow the instructions to compile the code

**Step 1: Set Up your PoS Configuration File**

This step involves configuring your PoS client settings to prepare for the transition. You'll set parameters such as the network, sync mode, and RPC server.

Once you have your client compiled in the **PoS chain**, you can:

- Open the configuration file which is by default located in `$HOME/.nimiq/client.toml`. (see [example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml))
- Set the `network` to `main-albatross`
- Choose your `sync_mode` setting as `full` or `history`
- Optionally, enable the PoS RPC server by uncommenting the section in the `[rpc-server]` configuration section if you need it
- **Review all other sections** of the client.toml file and ensure that the parameters are configured according to your specific setup (paths, keys, and any optional features you want to enable). Adjust these settings as needed to fit your node's configuration.

**Step 2: Download the PoW Chain Snapshot**

 If you are running the Activation Tool, a full database snapshot of the Nimiq PoW chain is available for download via IPFS or Torrent. While node operators primarily observe the migration process, downloading the snapshot is not required but can be helpful. Instead of syncing the entire chain from scratch, you will only need to sync the final portion after downloading the snapshot, enabling you to reach consensus more quickly.

- IPFS is a decentralized file storage system that allows users to share and access files in a peer-to-peer network. You can find the ZIP file of the snapshot [here](https://ipfs.nimiq.io/ipfs/QmRKvFVpTdXagvgZG5cF9qdz13x9DkZhUvwXAS5YMaqTfu?filename=pow-main-full-consensus.zip). It will start the download immediately.
- BitTorrent File: An alternative method, you can download the Torrent file [here](https://repo.nimiq.com/torrents/nimiq-pow-main-full-consensus.torrent).

After downloading the snapshot, the database file must be placed in the directory where your PoW node is set up. Once the database is in place, you can proceed by running the command from [step 3](#step-3-run-the-activation-tool). After your node has reached consensus, you can then move on to continue running the Activation Tool to complete the process.

**Step 3: Check Client Sync Status**

**In the PoW chain**, ensure you are fully synced and in consensus. Start the PoW client with an RPC server (this might take a while). Run the following command:

```bash
node clients/nodejs/index.js --dumb --network=main --rpc=8648
```

**Step 4: Run the Activation Tool**

The Activation Tool establishes a connection with the PoW client via RPC, extracting data from your PoW client with the PoS client configuration.

Ensure your PoW client is fully synced before running the Activation Tool on the PoS chain side. Before executing the Activation Tool, compile the **PoS chain** client by running `cargo build --release`.

Once you are in consensus in the PoW chain, proceed to execute the Activation Tool by running the following command **in the PoS client repository** directory, including the path to the configuration file containing your validator data and specifying the PoW RPC server to be used. Note that this assumes the PoS client and PoW client (with RPC server enabled) are running on the same machine:

```bash
cargo run --release --bin nimiq-pow-migration --url "http://127.0.0.1:8648" --config client.toml
```

:::

::: details Users with an Existing PoW Client

- Make sure you have your PoW RPC server enabled to allow your PoS client to connect to it
- Clone the [PoS blockchain repository](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#installation) and follow the instructions to compile the code

**Step 1: Set Up your PoS Configuration File**

This step involves configuring your PoS client settings to prepare for the transition. You'll set parameters such as the network, sync mode, and RPC server.

Once you have your client compiled, you can:

- Open the configuration file which is by default located at `$HOME/.nimiq/client.toml` (see [example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml))
- Set the `network` to `main-albatross`
- Choose your `sync_mode` setting as `full` or `history`
- Optionally, enable the PoS RPC server by uncommenting the section in the `[rpc-server]` configuration section if you need it
- **Review all other sections** of the client.toml file and ensure that the parameters are configured according to your specific setup (paths, keys, and any optional features you want to enable). Adjust these settings as needed to fit your node's configuration.

**Step 2: Run the Activation Tool**

The Activation Tool establishes a connection with the PoW chain via RPC, extracting data from your PoW client with the PoS client configuration.

Ensure your PoW client is fully synced before running the Activation Tool on the PoS chain side. Before executing the Activation Tool, compile the **PoS chain** code by running `cargo build --release`.

Once you are in consensus in the PoW chain, proceed to execute the Activation Tool by running the following command **in the PoS client repository** directory, including the path to the configuration file containing your validator data and specifying the RPC server to be used. Note that this assumes the PoS client and the PoW client (with the RPC server enabled at port `8648`) are running on the same machine:

```bash
cargo run --release --bin nimiq-pow-migration --url "http://127.0.0.1:8648" --config client.toml
```

:::

The Activation Tool connects with the PoW client via RPC to extract necessary data for the migration process. The tool:

- Captures the state of the PoW chain at the candidate block for the transition to the PoS chain
- Starts migrating the state from the PoW chain to the PoS state format
- Generates the "genesis" block using a candidate transition block for the PoS chain
- Monitors the readiness of validators, waiting for at least 80% of them to signal readiness

Once the readiness threshold is met, the PoS client starts, marking the beginning of the PoS chain. Mind that as a non-validator, your role during this process is primarily observant, as your participation does not contribute to reach the 80% readiness threshold.
