# Migration to PoS user guide

These instructions are exclusively for users interested in using Nimiq’s Migration Tools to transition from PoW to PoS. If you wish to become a validator post-migration, please refer to this [documentation](becoming-a-validator.md). This is the user guide for the registration tool. For a complete understanding of the migration technicalities, refer to this [document](/learn/protocol/migration).

## Validator Registration Tool

The Validator Registration tool facilitates the registration process for users migrating from PoW to PoS during the pre-registration phase. Users register within the PoW chain. The Validator Registration tool operates in two distinct modes:

- Address and corresponding keys generation
- Validator registration via transactions

 First, you need to clone the [core-js repository](https://github.com/nimiq/core-js?tab=readme-ov-file#quickstart) and follow the instructions.

### Step 1: Generate the keys

After you cloned the core-js repository, change directory with ```cd clients/nodejs``` to be able to execute the registration script.

Execute the script without parameters to generate the validator address, signing key, and voting key:

```shell
node validator-registration.js
```

The tool generates the keys and pastes them into the `validator-keys.json` file. The screenshot demonstrates the output of the script.

<img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/migration/migration.png" alt="skip block struct" />

<Callout type='tip'>

Save the private key securely! There is no recovery mechanism for lost private keys. Once lost, access to your validator and NIM may be permanently lost.

</Callout>

### Step 2: Fund your address

To start the validator registration process, fund the address you just generated to cover the nominal transaction fees of 1 Luna each (you need 6 Lunas) associated with the validator generation process. You can use any wallet to fund this address.

<Callout type='info'>

You will need funds to pay the validator registration transaction and the deposit payment for your validator. If you don't have funds to pay these transactions, please use our **[Testnet Faucet](https://test.nimiq.watch/#faucet)** to request NIM for the test-run.

</Callout>

### Step 3: Execute the Validator Registration Script

For testing this in the PoW testnet, you must specify the network argument as follows:

```shell
node validator-registration.js --validator validator-keys.json
```

The script will connect the tool to the Nimiq PoW chain. Upon consensus, the tool creates the validator registration transaction, signs it, and sends it to the network, effectively generating the validator. Note that this transaction is a bundle of 6, and each one has a nominal fee of 1 Luna. Please ensure you have funded your address—as instructed in the previous step—as the transaction fees are paid from this address.

For detailed guidance through the scripts, run `node validator-registration.js --help`. This will print out the following usage description.

### Step 4:  Deposit Payment and Commit

The final transaction involves committing to the registration and paying the validator's deposit of 100 000 NIM. This transaction can be sent from any address. Despite the address you use to pay the validator deposit, **you must include your validator address** in the transaction’s “public message” field so we can later identify your validator. Please include your validator address in human-readable format.

To send the transaction manually via wallet, you need the following data:

**Burn Address**: NQ07 0000 0000 0000 0000 0000 0000 0000 0000

**Value**: 100 000 NIM

**Public Message**: Your validator address (e.g. NQ65 SYRU Q915 CMSP G28V 4HL7 C9RP DVAX YLBP)

<Callout type='warning'>

Please note that any value below 100 000 NIM will result in permanent loss, and any value above will be burned.

</Callout>

## Validator Activation Tool

The Activation tool facilitates the transition from the PoW chain to the PoS chain. Keep in mind that this tool can only be executed once the pre-stake phase is concluded, specifically during the activation phase.

- Clone and compile the [PoS blockchain](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#installation) repository and follow the instructions.
- Enable the RPC server in the PoW chain. Follow the instructions in [this sample guide](https://github.com/nimiq/core-js/blob/master/clients/nodejs/sample.conf).

### Step 1:  Add your Validator Data into the Configuration File

Once you have your client setup, you can either:

- Go to the file `$HOME/.nimiq/client.toml`, which includes a dedicated validator section at the end, and paste your validator data into this section.
- Refer to [this guide](becoming-a-validator#configuration).

Ensure that you set your `sync_mode` as `full` or `history` in the consensus part of the configuration file. Only full or history nodes are eligible to be validators.

### Step 2:  Run the Activation Tool

The Activation tool establishes a connection with the PoW chain via RPC, extracting data from your configuration file and crosschecking it with the information in the JSON file within the PoW chain.

To execute the tool successfully, you need to ensure that you are fully synced and in consensus **within the PoW chain**. This requires starting the PoW client with a RPC server enabled (this might take a while). You can start it by running the following command:

```shell
node clients/nodejs/index.js --dumb --network=test --rpc=8648
```

Before executing the activation tool, make sure you run ```cargo build --release``` within the PoS repository to compile the code.

Once you are in consensus in the PoW chain, proceed to execute the migration tool by running the following command **in the PoS chain**, including the path to the configuration file containing your validator data and specifying the RPC server to be used:

```shell
 ./nimiq-pow-migration --url "http://127.0.0.1:8648" --config client.toml
```

After launching the tool, the readiness transaction will be automatically sent to the network. During a span of blocks, the tool will monitor for readiness transactions. At the defined candidate block, if the tool counts 80% of readiness, the migration process starts and once it is done, it will automatically start the PoS client.
