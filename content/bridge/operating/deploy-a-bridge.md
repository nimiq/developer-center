---
title: Deploy a bridge
description: Create the contracts of a bridge between the Nimiq testnet and Polygon Amoy, and link them to each other.
icon: i-tabler-rocket
navigation:
  title: Deploy a bridge
  order: 1
---

# Deploy a bridge

A bridge is five contracts and one relayer. Three contracts live on the EVM network (an oracle, the bridge contract that is also the token, and a lock parser), and two on Nimiq (an oracle and a bridge contract). To see how they work together before creating them, read [the round trip](/bridge/how-it-works/the-round-trip).

This guide creates all five on the Nimiq testnet and Polygon Amoy, and links them to each other. Some contracts need another contract's address, which sets the order of the steps. [Run a relayer](/bridge/operating/run-a-relayer) then starts the relayer and sends a test transfer. To try all of it on your own machine first, without testnet access, follow [test a bridge locally](/bridge/operating/test-locally).

## Before you start

Everything in this section is done once. Steps 1 to 7 are done once per bridge.

### Tools

The commands are for bash or zsh on macOS or Linux. On Windows, run them in WSL.

Make sure [Rust](https://rustup.rs), [Node.js](https://nodejs.org/en/download) with npm, [Foundry](https://book.getfoundry.sh/getting-started/installation), [jq](https://jqlang.org/download/) and [Git](https://git-scm.com/downloads) are installed and up to date. For Rust, `rustup update` installs the latest stable version. For Node.js, use the latest LTS version.

### Terminals

The deployment uses two terminals, and the relayer adds a third. Each step names the terminal it runs in.

| Terminal | Runs | Folder |
| --- | --- | --- |
| Node | The Nimiq node, for as long as the bridge runs | `~/nimiq-bridge/core-rs-albatross` |
| Commands | Every other command in this guide | `~/nimiq-bridge/core-rs-albatross` |
| Relayer | The relayer, from [run a relayer](/bridge/operating/run-a-relayer) | `~/nimiq-bridge/interoperability/polygon-bridge-monitor` |

### Access to Amoy

Polygon Amoy is a public test network that Polygon runs. Nothing has to be installed or run for it. Every EVM command in this guide reaches Amoy through an RPC URL, from a public Amoy endpoint or an RPC provider. Amoy's chain id is 80002, and gas is paid in POL.

### Build the Nimiq tools

This guide keeps everything in one folder, `~/nimiq-bridge`: both repositories, the file of values, and the relayer's configuration. That way every command can name each file by its exact path. Another folder works too, as long as the paths in the commands change with it.

In the node terminal, create the folder, clone [core-rs-albatross](https://github.com/nimiq/core-rs-albatross) into it, and build the node, the RPC client and the address tool from the `albatross-next` branch:

```bash
mkdir ~/nimiq-bridge
cd ~/nimiq-bridge
git clone https://github.com/nimiq/core-rs-albatross.git
cd core-rs-albatross
git checkout albatross-next
cargo build --release --bin nimiq-client --bin nimiq-rpc --bin nimiq-address
```

The first build takes a while. The build puts the tools in `target/release`. The guide runs `nimiq-client` and `nimiq-address` with `cargo run`, and `nimiq-rpc`, which it calls many times, directly as `./target/release/nimiq-rpc`. Both work from the `core-rs-albatross` folder. `cargo run` may print warnings such as `unused workspace dependency` before the tool's output. They do not affect the result.

### Configure the node

Still in the node terminal, run the node once. It creates an example configuration file at `~/.nimiq/client.example.toml`, then stops with `Configuration error: Config file not found`. Copy the example to the file the node reads:

```bash
cargo run --release --bin nimiq-client
cp ~/.nimiq/client.example.toml ~/.nimiq/client.toml
```

Open `~/.nimiq/client.toml` in a text editor. It is the [example configuration](https://github.com/nimiq/core-rs-albatross/blob/albatross-next/lib/src/config/config_file/client.example.toml), with a comment above each setting, and lines starting with `#` are ignored. Make two changes.

**Seed nodes, in `[network]`.** The file connects to mainnet by default. Comment out every line of the mainnet `seed_nodes` list with `#`, from `seed_nodes = [` to its closing `]`, and uncomment the testnet list above it:

```toml
seed_nodes = [
  { address = "/dns4/seed1.pos.nimiq-testnet.com/tcp/8443/wss" },
  { address = "/dns4/seed2.pos.nimiq-testnet.com/tcp/8443/wss" },
  { address = "/dns4/seed3.pos.nimiq-testnet.com/tcp/8443/wss" },
  { address = "/dns4/seed4.pos.nimiq-testnet.com/tcp/8443/wss" },
]
```

**Consensus, in `[consensus]`.** Set the network to the testnet, and uncomment `max_epochs_stored` and `index_history` with these values:

```toml
network = "test-albatross"
sync_mode = "full"
max_epochs_stored = 4
index_history = true
```

- `sync_mode = "full"` serves every call the deployment, the relayer and the test transfer make, as long as `index_history` is on.
- `max_epochs_stored` sets how many epochs of blocks the node keeps. The relayer submits every macro block header to the EVM oracle, so after an outage it needs the node to still hold the headers it missed. Each epoch is about 12 hours, so 4 covers an outage of about two days. The default of 1 is too short for a relayer node.
- `index_history = true` indexes transactions by hash. Minting needs a proof that the lock is in the history tree, and the node only serves that proof with the index. A full node leaves it off by default, so this line is required. The node keeps the index only for the epochs it stores, so mint within `max_epochs_stored` epochs of the lock.

The JSON-RPC server needs no change. Its `[rpc-server]` section is enabled in the example file, and it listens on `127.0.0.1:8648`.

### Start the node

In the node terminal, start the node and leave it running:

```bash
cargo run --release --bin nimiq-client
```

Open the commands terminal in the same folder, and check that the node has consensus:

```bash
cd ~/nimiq-bridge/core-rs-albatross
./target/release/nimiq-rpc is-consensus-established
```

```
RPCData {
    data: true,
    metadata: (),
}
```

While it shows `false`, the node is still syncing. The first sync on testnet can take a while. If it stays `false`, check that `client.toml` uses the testnet seed nodes, and look for errors in the node terminal.

### Compile the EVM contracts

In the commands terminal, clone the [interoperability repository](https://github.com/nimiq/interoperability) next to core-rs-albatross, compile both contract projects, and come back:

```bash
cd ~/nimiq-bridge
git clone https://github.com/nimiq/interoperability.git
cd interoperability/evm/oracle && npm install && npx hardhat compile
cd ../bridge && npm install && npx hardhat compile
cd ~/nimiq-bridge/core-rs-albatross
```

### Keep your values in bridge.env

Each step produces values that later steps use, such as contract addresses. They are shell variables, which exist only in the terminal where they are set, so this guide keeps them in a file. Create it with the values already known:

```bash
cat > ~/nimiq-bridge/bridge.env <<'EOF'
export INTEROP=$HOME/nimiq-bridge/interoperability
export NIMIQ_NETWORK_ID=5
export BLOCKS_PER_BATCH=60
export BATCHES_PER_EPOCH=720
EOF
```

The last three are fixed for the Nimiq testnet. `./target/release/nimiq-rpc policy-constants` shows the node's batch and epoch lengths as `blocks_per_batch` and `batches_per_epoch`.

Whenever a step says to add a line to `bridge.env`, add it at the end of the file in a text editor and save. Every command block that uses a value from the file starts with `source ~/nimiq-bridge/bridge.env`, which loads the file again, so the block always sees your latest values, in any terminal.

### Create the keys

A bridge uses three keys.

| Key | Role |
| --- | --- |
| Nimiq operator key | Sends both Nimiq creation transactions and owns the Nimiq oracle. The relayer signs every update to the Nimiq oracle with it, so it must be the oracle's owner |
| EVM relayer key | Deploys and owns the EVM oracle. Only the owner can submit headers, and the relayer submits them with this key |
| EVM deployer key | Deploys `PolygonBridge` and `LockParser`, and owns `PolygonBridge`. Only the owner can configure it |

In the commands terminal, create the Nimiq operator key:

```bash
cargo run --release --bin nimiq-address
```

```
Address:       NQ78 RABU JNY2 C64P VUAG EAFK 8BKV AHVD 8PCU
Address (raw): ca97c95be261897ef150729f342e7d547ad45d9c
Public Key:    0c1c899679f9b86ee8a7ede6f37140d7131ffbba2cf8a1b4700037282262c6af
Private Key:   9aae2349cca24562204881af106edeae6cd9c4fb5722ab9fdf85d737c25b2ef2
```

The output above is an example. Every run creates a new key, so use the values your run prints. Create the two EVM keys by running `cast wallet new` twice. Each run prints an address and a private key.

Add your keys and your Amoy RPC URL to `bridge.env`. The `NQ` address needs quotes, because it contains spaces:

```bash
export NIMIQ_OPERATOR="NQ78 RABU JNY2 C64P VUAG EAFK 8BKV AHVD 8PCU"   # Address
export NIMIQ_OPERATOR_RAW=ca97c95be261897ef150729f342e7d547ad45d9c     # Address (raw)
export NIMIQ_OPERATOR_KEY=9aae2349cca2...                              # Private Key
export EVM_RELAYER_KEY=0x...                                           # first cast wallet new
export EVM_DEPLOYER_KEY=0x...                                          # second cast wallet new
export EVM_RPC_URL=https://...
```

Check that `source ~/nimiq-bridge/bridge.env && echo "$NIMIQ_OPERATOR"` prints your `NQ` address. How the keys are held is the operator's decision, whether as one key each or behind a multisig. On testnet, `bridge.env` is enough. Keep it private, since it holds private keys.

### Fund the keys

- **The Nimiq operator key** pays both creation deposits and the fees, 10.01 NIM with the amounts in this guide, plus 1 NIM for the test transfer in [run a relayer](/bridge/operating/run-a-relayer). Request testnet NIM for its `NQ` address from the [faucet](/web-client/faucet).
- **Both EVM keys** pay gas in POL on Amoy. Request testnet POL for both addresses in the [Polygon support Discord](https://discord.gg/polygon-support-635865020172861441). About 1 POL each covers the deployment and a short test. The relayer key needs more the longer the relayer runs, because it submits every Nimiq macro block header to the EVM oracle.

### Import the operator key

The node signs the Nimiq transactions, so it needs the operator key. Import it, unlock it, and check its balance. The commands read your values from `bridge.env`, so they run as written:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc import "$NIMIQ_OPERATOR_KEY"
./target/release/nimiq-rpc unlock "$NIMIQ_OPERATOR"
./target/release/nimiq-rpc get "$NIMIQ_OPERATOR"
```

`balance` is in luna, 100,000 luna per NIM, and must be at least 1,001,000. The node keeps the key unlocked until it restarts. After a restart, run `unlock` again.

## 1. Deploy the EVM oracle

The EVM oracle starts from an **anchor**, an [election block](/protocol/glossary#election-block) whose header it trusts without proof. Every later header is checked against it. The anchor must be at or before the creation of the Nimiq bridge contract in step 5, because a lock in a block before the anchor can never be proven. Taking the latest election block now meets that rule.

All steps run in the commands terminal. Read the current block number, then the last election block at that number, with your number in place of `3456789`:

```bash
./target/release/nimiq-rpc block-number
./target/release/nimiq-rpc last-election-block 3456789
```

Add `export ANCHOR_BLOCK=` followed by the election block number to `bridge.env`.

Read the anchor's header. The command prints only the header, as one long line of hex:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc raw-macro-header "$ANCHOR_BLOCK"
```

Add `export ANCHOR_HEADER=0x` followed by the whole line to `bridge.env`. On testnet it starts with `0x05`, the network id.

Read the current Amoy block. No contract of this bridge has events before it, so the relayer starts reading Amoy there:

```bash
source ~/nimiq-bridge/bridge.env
cast block-number --rpc-url "$EVM_RPC_URL"
```

Add `export EVM_START_BLOCK=` followed by the number to `bridge.env`, for example `export EVM_START_BLOCK=1185`.

Deploy the oracle with the relayer key, which makes the relayer its owner. The command prints the new contract's address:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_RELAYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/oracle/artifacts/contracts/2_EvmOracle.sol/EvmOracle.json")" \
  "constructor(bytes,(uint16,uint16,uint16,uint16,uint16,uint16),uint32,uint16,uint8)" \
  "$ANCHOR_HEADER" "(371,3,11,51,243,307)" "$BLOCKS_PER_BATCH" "$BATCHES_PER_EPOCH" "$NIMIQ_NETWORK_ID" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export EVM_ORACLE=0x5fbdb2315678afecb367f032d93f642f64180aa3`.

::callout{icon="i-tabler-alert-triangle" color="warning"}
From here, the relayer has to start before the node drops the macro blocks after the anchor. The relayer submits every macro block header from the anchor on, and the node keeps them for `max_epochs_stored` epochs, about two days with this configuration. If the relayer starts later, it exits with an error naming the missing block, and the bridge needs a new EVM oracle on a newer anchor, as in [recover a relayer that stopped for too long](/bridge/operating/operator-actions#recover-a-relayer-that-stopped-for-too-long).
::

The constructor takes the anchor header, the [header format](/bridge/reference/evm/oracle-contract#header-formats), the batch and epoch lengths, and the network id. The header format gives the header length and the byte offsets of the block number, timestamp, parent election hash, state root and history root, for the header layout from protocol version 2 on. The constructor rejects a header whose network id or length does not match. All its checks are on the [EVM oracle reference](/bridge/reference/evm/oracle-contract#deploying).

## 2. Deploy the EVM bridge contract

`PolygonBridge` is the bridge contract and the token at once. It takes no constructor arguments, and the deployer key becomes its owner:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/bridge/artifacts/contracts/1_EvmBridge.sol/PolygonBridge.json")" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export POLYGON_BRIDGE=0x8464135c8f25da09e49bc8782676a84730c318bc`. Then point the contract at the oracle from step 1:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setOracle(address)" "$EVM_ORACLE"
```

`cast send` prints the transaction receipt, with `status 1 (success)` when it went through. The rest of the configuration needs the Nimiq bridge contract, so it waits until step 6.

## 3. Deploy the lock parser

A [lock parser](/bridge/reference/evm/bridge-contract#lock-parsers) reads a Nimiq lock out of its history record when NIM on Polygon is minted. It takes no constructor arguments:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/bridge/artifacts/contracts/5_LockParser.sol/LockParser.json")" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export LOCK_PARSER=0x948b3c65b89df0b4894abe91e6d02fe579834f8f`.

## 4. Create the Nimiq oracle

The [Nimiq oracle](/bridge/reference/nimiq/oracle-contract) stores the roots of the record tree of burns on the EVM network. It depends on nothing on the EVM side.

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc create-oracle "$NIMIQ_OPERATOR" "$NIMIQ_OPERATOR" 1000 blake2b 0.01
```

| Argument | Value | Meaning |
| --- | --- | --- |
| Sender | `$NIMIQ_OPERATOR` | The unlocked key that signs the transaction and pays the deposit |
| Owner | `$NIMIQ_OPERATOR` | The oracle's owner. It must be the key the relayer signs updates with |
| Hash count | `1000` | The number of slots in the oracle's [ring buffer](/bridge/reference/nimiq/oracle-contract#indices-and-slots). It cannot be changed later |
| Hash algorithm | `blake2b` | The hash of every value the oracle stores. It must match the bridge contract's chain configuration, which uses Blake2b |
| Value | `0.01` | The deposit in NIM, which becomes the oracle's balance |

The command prints the transaction hash in `data`. The new oracle's address is the transaction's recipient. A few seconds later, once the transaction is in a block, read it, with your transaction hash in place of the example:

```bash
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getTransactionByHash","params":["6119e1384c18575ced820303a9da836bc006923b7577aed58e5c101ec2a210d4"]}' \
  | jq -r .result.data.to
```

```
NQ34 D1CT 7LB0 HBRN LVL5 JKSB UYJH CH1F FCJB
```

If it prints anything other than an `NQ` address, the transaction is not in a block yet. Run it again after a few seconds.

Add it to `bridge.env` with quotes, for example `export NIMIQ_ORACLE="NQ34 D1CT 7LB0 HBRN LVL5 JKSB UYJH CH1F FCJB"`. Check the oracle:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc get "$NIMIQ_ORACLE"
```

It shows an `Oracle` account with the operator's raw address as `owner`, `hash_count: 1000`, `hash_algorithm: Blake2b`, and the deposit, 1,000 luna, as `balance`.

## 5. Create the Nimiq bridge contract

The Nimiq bridge contract holds the locked NIM and releases them against burns proven through the Nimiq oracle. Its creation data is permanent. No transaction changes its oracle, source chain id or chain configuration afterward. All of it is described on the [Nimiq bridge contract reference](/bridge/reference/nimiq/bridge-contract#creating-a-bridge-contract).

The [chain configuration](/bridge/reference/nimiq/chain-config) describes Amoy to Nimiq, including the contract whose burns the bridge accepts. For Amoy it is a fixed hex string that ends with that contract's address, the `PolygonBridge` address from step 2. Build it by appending the address, in lowercase and without `0x`, to the fixed part. The last command prints `398`, the length of a correct configuration:

```bash
source ~/nimiq-bridge/bridge.env
AMOY_CHAIN_CONFIG_PREFIX=82f10401000000000000000000000000000000000000000000000000000000000000000001010200170000041c0f736f757263655f636f6e74726163740048051c06616d6f756e740014041c0e7461726765745f616464726573730028051c0c7461726765745f6e6f6e636500280500ffffffff0f141c116275726e5f626c6f636b5f6865696768740068051c0f7461726765745f636861696e5f6964008801041c0e6272696467655f616464726573732014
export CHAIN_CONFIG="${AMOY_CHAIN_CONFIG_PREFIX}$(echo "${POLYGON_BRIDGE#0x}" | tr 'A-F' 'a-f')"
echo "${#CHAIN_CONFIG}"
```

The configuration is only needed for the next command, so it does not go into `bridge.env`. Create the bridge contract:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc create-bridge "$NIMIQ_OPERATOR" "$NIMIQ_OPERATOR" "$NIMIQ_ORACLE" 80002 "$CHAIN_CONFIG" 10
```

| Argument | Value | Meaning |
| --- | --- | --- |
| Sender | `$NIMIQ_OPERATOR` | The unlocked key that signs the transaction and pays the deposit |
| Owner | `$NIMIQ_OPERATOR` | Recorded in the contract. The owner has no authority over the contract once it exists |
| Oracle | `$NIMIQ_ORACLE` | The oracle from step 4 |
| Source chain id | `80002` | Amoy's chain id. It must equal the chain id in the chain configuration |
| Chain configuration | `$CHAIN_CONFIG` | The configuration built above |
| Value | `10` | The creation deposit in NIM. It stays in the contract for good |

::callout{icon="i-tabler-info-circle" color="info"}
Deposit at least 10 NIM. Whether bridge contracts will require a minimum creation deposit is still being decided.
::

Consensus rejects the transaction if it fails the [creation checks](/bridge/reference/nimiq/chain-config#creation-checks), and nothing is created. Read the new contract's address with the same `curl` command as in step 4 and this transaction's hash. Add it to `bridge.env` with quotes, for example `export NIMIQ_BRIDGE="NQ08 P0C8 XH3B 1PGR 0FQY H5MH LJJQ SBUX PPL4"`. Check the contract:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc get "$NIMIQ_BRIDGE"
```

```
RPCData {
    data: Account {
        address: Address(
            "b8188f446b0de1903f1f896b1a4a58d2f9ebde84",
        ),
        balance: Coin(
            1000000,
        ),
        account_additional_fields: Bridge {
...
```

It shows a `Bridge` account with `oracle_address` set to the oracle and `source_chain_id: 80002`. Step 6 needs the contract's raw address, the hex inside `Address( )` at the top. Add it to `bridge.env`, for example `export NIMIQ_BRIDGE_RAW=b8188f446b0de1903f1f896b1a4a58d2f9ebde84`.

## 6. Link the EVM bridge contract to Nimiq

`PolygonBridge` needs three more settings before it can mint: the Nimiq bridge contract's address, the Nimiq network id, and the lock parser for the anchor's protocol version. The protocol version is the second and third bytes of the anchor header:

```bash
source ~/nimiq-bridge/bridge.env
echo $((16#${ANCHOR_HEADER:4:4}))
```

Add `export HEADER_VERSION=` followed by that number to `bridge.env`.

Send the three settings with the deployer key. `setNimiqBridgeAddress` takes the Nimiq address as 20 raw bytes, written like an EVM address, so the raw hex gets `0x` in front. Each command prints `status 1 (success)`:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setNimiqBridgeAddress(address)" "0x$NIMIQ_BRIDGE_RAW"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setNimiqNetworkId(uint8)" "$NIMIQ_NETWORK_ID"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setLockParser(uint16,address)" "$HEADER_VERSION" "$LOCK_PARSER"
```

The owner can change these settings at any time, which makes the deployer key a [trusted role](/bridge/security-and-trust#the-evm-bridge-contract-owner).

## 7. Check the deployment

Read each setting back.

```bash
source ~/nimiq-bridge/bridge.env
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "oracle()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "nimiqBridgeAddress()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "nimiqNetworkId()(uint8)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "lockParsers(uint16)(address)" "$HEADER_VERSION"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "decimals()(uint8)"
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "owner()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "anchorHeight()(uint32)"
```

The lines print, in order:

1. Your `EVM_ORACLE`
2. `0x` followed by your `NIMIQ_BRIDGE_RAW`
3. `5`
4. Your `LOCK_PARSER`
5. `5`
6. The relayer key's address, which `cast wallet address "$EVM_RELAYER_KEY"` prints
7. Your `ANCHOR_BLOCK`, for example `3464010 [3.464e6]`. `cast` adds the same number in scientific notation in brackets.

`cast` prints addresses in mixed case, so compare them without regard to case. The Nimiq contracts were checked in steps 4 and 5.

The contracts are in place, but nothing crosses between the two networks until the relayer runs. [Run a relayer](/bridge/operating/run-a-relayer) starts it from the values in `bridge.env` and sends a test transfer.
