# Activation Guide

This guide is part of the Nimiq PoW to PoS migration process and is intended for users who have already registered as validators during the Validator Registration Phase by **October 6th, 2024**. If you missed the registration deadline, you can still participate in the activation as an observer by following [this guide](node-operators).

For registering a validator post-transition, refer to the [Becoming a Validator](/build/set-up-your-own-node/becoming-a-validator.md) guide. For more technical details on the migration, see [Migration Technical Details](migration-technical-details).

## Validator Activation Tool

This guide covers **Phase 3: Validator Activation**, which starts on **November 19th**. The Validator Activation Tool facilitates the transition from the PoW chain to the PoS chain. We recommend running the tool before the activation window begins to allow time for database synchronization, as this process can take some time.

The tool will also automatically send online transactions every hour, signaling which validators are ready for the transition. These transactions will be covered by Team Nimiq. For more detailed information, click [here](migration-technical-details#activation-phase).

| **Phase** | **Start Date** | **End Date** |
| --- | --- | --- |
| Validator Registration | 12th September | 6th October |
| Pre-Stake Phase | 7th October | 10th November |
| **Validator Activation** | **19th November** | - |

The steps outlined in this guide are only applicable for the **Validator Activation Phase**. However, you can prepare by following these steps before that date.

### Prerequisites
- **Validator Registration**: You must have already [registered as a validator](validator-registration)
- **PoW Full Node**: You need access to a fully synchronized Nimiq PoW full node with RPC access enabled. If you are not already running a full node, follow the instructions in the [core-js repository](https://github.com/nimiq/core-js) to set it up and sync with the main network
    - If you are running a PoW client, ensure it is fully synced and configured properly
    - Use this [sample configuration file](https://github.com/nimiq/core-js/blob/master/clients/nodejs/sample.conf) to enable RPC access on your PoW client
    - During this phase, you will need to run both the PoW and PoS clients. Ensure they are configured to run on **different RPC ports** to avoid conflicts if you are running both clients on the same machine. Alternatively, running them on separate servers is also possible.
- **PoS Blockchain Repository**: Clone the [PoS blockchain repository](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#installation) following the installation instructions

### **Step 1: Add Validator Data into the Configuration File**

Once your PoS client is set up, follow these steps:

1. Check if the `$HOME/.nimiq` folder exists:
    1. If it exists, open the configuration file in `$HOME/.nimiq/client.toml` and locate the dedicated section for validators at the end
    2. If it doesn’t exist, create the `$HOME/.nimiq` folder and inside, create a `client.toml` file based on this [example](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml)
2. Paste your **validator data** into the validator section (public key, signing key, voting key)
3. Set the **network** is set to `main-albatross` and the `sync_mode` to `full` or `history`. Only full or history nodes are eligible to become validators
4. Review and adjust all the other sections of `client.toml` and ensure that the parameters are configured according to your specific setup (paths, keys, and any optional features you want to enable). Adjust these settings as needed to fit your node's configuration

### **Step 2: Download the PoW Chain Database Snapshot (Optional)**

If your PoW client is not synced or you’re setting it up from scratch, you can download a database snapshot to accelerate the synchronization process. This snapshot is particularly useful before running the Activation Tool, as it eliminates the need to sync the entire PoW chain from scratch. After downloading the snapshot, only a small portion of the chain needs to be synced, allowing your node to reach consensus more quickly:

- **IPFS**: Download the full PoW chain snapshot [here](https://ipfs.nimiq.io/ipfs/QmRKvFVpTdXagvgZG5cF9qdz13x9DkZhUvwXAS5YMaqTfu?filename=pow-main-full-consensus.zip)
- **Torrent**: Alternatively, download the snapshot via Torrent [here](https://repo.nimiq.com/torrents/nimiq-pow-main-full-consensus.torrent)

After downloading the snapshot, extract the file and place the database in the directory from where you are running your PoW client configuration. Once in place, follow steps [3](#step-3-prepare-the-pow-client-for-the-transition) and [4](#step-4-run-the-activation-tool). After your node reaches consensus, continue with the Activation Tool to complete the process.

### **Step 3: Prepare the PoW Client for the Transition**
Ensure the **PoW client is running with RPC enabled** on a distinct port from the PoS client, as the following command both clients are running in the same machine. Configure the PoW client’s RPC settings in its configuration file by adding your validator address and key pair. Refer to [**this example**](https://github.com/nimiq/core-js/blob/master/clients/nodejs/sample.conf#L163).

Run the following command to start the PoW client:

```bash
    node clients/nodejs/index.js --dumb --network=main --rpc=8648 --wallet-seed=private_keypublic_key
```

The `private_keypublic_key` is the concatenation of your private key and public key in that order. It's necessary because the activation tool will use these keys to send and sign transactions on behalf of your validator, signaling readiness.

### **Step 4: Run the Activation Tool**
Once your PoW client is synced and in consensus, you are ready to run the Validator Activation Tool. This tool establishes a connection with the PoW chain via RPC and sets your validator ready for the PoS transition.

1. Compile the PoS Client
Ensure your PoS client is [properly configured](#step-1-add-validator-data-into-the-configuration-file) in the `client.toml` file, and your validator data is correctly set, and compile the PoS client:
    ```
    cargo build --release
    ```
2. **Run the Activation Tool** using the following command in the PoS client directory:

    ```
    cargo run --release --bin nimiq-pow-migration --url "pow-rpc" --config client.toml
    ```

    Where `pow-rpc` is the **PoW client RPC url**. For example: `http://127.0.0.1:8648`

The tool will monitor validator readiness by tracking readiness transactions sent by all the registered validators within 24 hour activation windows. Once 80% of the total stake has signaled readiness, the activation tool will automatically start the PoS client. Read more about the activation process [here](migration-technical-details#activation-phase).

### PoS Activation

On **November 19**, the network will initiate the transition from PoW to PoS. Once 80% of the total stake signals their readiness, PoS chain starts with the [candidate block](migration-technical-details) as the genesis block. The transition block will be generated, and validators will officially start securing the PoS network. Ensure your validator is ready and synced before this date to avoid delays.
