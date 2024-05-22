# PoS Migration Guide for Node Operators

Our migration guides are designed for users who want to actively participate in the transition process. This specific guide is for those who want to run the migration process without becoming validators (if you want to become one of the first validators from the start of the PoS chain, please refer to this [guide](migration-validators)). It is suitable for:

- Node Operators
- Exchanges
- Regular Users

This guide provides instructions to run the Activation Tool, the final step of the migration to the Nimiq PoS. There is no requirement to run the migration as a node operator. You can simply start your PoS client once the migration process ends and build your own node.

It's important to note that, as a node operator, your role is primarily as an observer during the activation process. The migration will only proceed if at least 80% of the allocated stake is ready to migrate. Since you have not pre-registered as a validator, running the activation tool does not contribute to meeting the threshold requirement for the transition. Nonetheless, by running the migration tool, you will participate in the state migration and genesis block creation process.

## Activation Tool

The Activation Tool facilitates the transition from the PoW chain to the PoS chain. We recommend running the activation tool before its window begins to ensure sufficient time for migrating the history, as this process can be time-consuming. Follow the appropriate guide based on whether you already have a PoW client running.

::: details Users without an Existing PoW Client

- Clone the [Nimiq CoreJS repository](https://github.com/nimiq/core-js?tab=readme-ov-file#quickstart) and follow the instructions
- Refer to [this sample guide](https://github.com/nimiq/core-js/blob/master/clients/nodejs/sample.conf) to enable the PoW RPC server
- Clone the [PoS blockchain repository](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#installation) and follow the instructions to compile the code

**Step 1: Set Up your PoS Configuration File**

This step involves configuring your PoS client settings to prepare for the transition. You'll set parameters such as the network, sync mode, and RPC server.

Once you have your client compiled in the **PoS chain**, you can:

- Open the file `$HOME/.nimiq/client.toml` (see [example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml))
- Set the `network` to `main`
- Choose your `sync_mode` setting as `full` or `history`
- Enable the PoS RPC server by uncommenting the section in the `[rpc-server]` configuration

**Step 2: Check Client Sync Status**

**In the PoW chain**, ensure you are fully synced and in consensus. Start the PoW client with an RPC server (this might take a while). Run the following command:

```bash
node clients/nodejs/index.js --dumb --network=main --rpc=8648
```

**Step 3: Run the Activation Tool**

The Activation Tool establishes a connection with the PoW chain via RPC, extracting data from your PoW client with the PoS client configuration.

Ensure your PoW client is fully synced before running the Activation Tool on the PoS chain side. Before executing the Activation Tool, compile the **PoS chain** code by running `cargo build --release`.

Once you are in consensus in the PoW chain, proceed to execute the Activation Tool by running the following command **in the PoS chain**, including the path to the configuration file containing your validator data and specifying the RPC server to be used:

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

- Open the file `$HOME/.nimiq/client.toml` (see [example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml))
- Set the `network` to `main`
- Choose your `sync_mode` setting as `full` or `history`
- Enable the PoS RPC server by uncommenting the section in the `[rpc-server]` configuration

**Step 2: Run the Activation Tool**

The Activation Tool establishes a connection with the PoW chain via RPC, extracting data from your PoW client with the PoS client configuration.

Ensure your PoW client is fully synced before running the Activation Tool on the PoS chain side. Before executing the Activation Tool, compile the **PoS chain** code by running `cargo build --release`.

Once you are in consensus in the PoW chain, proceed to execute the Activation Tool by running the following command **in the PoS chain**, including the path to the configuration file containing your validator data and specifying the RPC server to be used:

```bash
cargo run --release --bin nimiq-pow-migration --url "http://127.0.0.1:8648" --config client.toml
```

:::

The Activation Tool connects with the PoW chain via RPC to extract necessary data for the migration process. After launching the tool, it proceeds as follows:

- Selects the block for the transition to the PoS chain
- Starts the migration of the state from the PoW chain to the PoS chain
- Builds the genesis block for the PoS chain
- Monitors the readiness of validators, waiting for at least 80% of them to signal readiness

Once this readiness threshold is met, the PoS client is launched with the new genesis block, marking the beginning of the PoS chain. Mind that as a non-validator, your role during this process is primarily observant, as your participation does not contribute to reaching the 80% readiness threshold.