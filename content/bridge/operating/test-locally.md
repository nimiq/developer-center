---
title: Test a bridge locally
description: Deploy a bridge, run its relayer and send a round trip on a local Nimiq network and a local EVM chain.
icon: i-tabler-flask
navigation:
  title: Test a bridge locally
  order: 3
---

# Test a bridge locally

This guide runs the steps of [deploy a bridge](/bridge/operating/deploy-a-bridge) and [run a relayer](/bridge/operating/run-a-relayer) on your own machine, against a local Nimiq network and a local EVM chain in Docker. It needs no testnet access and no faucets, and it ends with a test transfer in both directions. The commands are the same as on testnet. Only the network values and the funding differ.

## How it differs from testnet

| | Testnet | Local |
| --- | --- | --- |
| Nimiq network | `test-albatross`, network id 5. 60 blocks per batch and 720 batches per epoch, about 12 hours | `unit-albatross`, network id 7. 32 blocks per batch and 4 batches per epoch, about two minutes |
| Nimiq node | Built and configured by you | Runs in Docker, with the testnet guide's node settings except `max_epochs_stored` |
| EVM network | Polygon Amoy | anvil, a local EVM chain with Amoy's chain id 80002 |
| NIM | The testnet faucet | An account the local network starts with |
| EVM keys and gas | Your own keys, with POL from a faucet | anvil's built-in accounts, already funded |
| Relayer `network` setting | `test-albatross` | `unit-albatross` |

The local Nimiq network starts at protocol version 3, which bridge and oracle transactions require.

::callout{icon="i-tabler-alert-triangle" color="warning"}
The private keys on this page belong to public test accounts that anyone can use. Never use them on a real network.
::

## Before you start

The commands are for bash or zsh on macOS or Linux. On Windows, run them in WSL.

Make sure [Docker](https://docs.docker.com/get-started/get-docker/), [Rust](https://rustup.rs), [Node.js](https://nodejs.org/en/download) with npm, [Foundry](https://book.getfoundry.sh/getting-started/installation), [jq](https://jqlang.org/download/), [Python](https://www.python.org/downloads/) 3.10 or later, and [Git](https://git-scm.com/downloads) are installed and up to date. For Rust, `rustup update` installs the latest stable version. Docker must be running.

The guide uses three terminals. Each step names the terminal it runs in.

| Terminal | Runs | Folder |
| --- | --- | --- |
| Node | The local networks' log | `~/nimiq-bridge/interoperability` |
| Commands | Every other command in this guide | `~/nimiq-bridge/core-rs-albatross` |
| Relayer | The relayer | `~/nimiq-bridge/interoperability/polygon-bridge-monitor` |

### Get the code

This is done once. Both repositories go into `~/nimiq-bridge`, as in the testnet guides, and this guide keeps its own files in `~/nimiq-bridge/local`.

In the commands terminal, clone both repositories, build the Nimiq tools, compile the EVM contracts and build the relayer:

```bash
mkdir -p ~/nimiq-bridge
cd ~/nimiq-bridge
git clone https://github.com/nimiq/core-rs-albatross.git
git clone https://github.com/nimiq/interoperability.git
cd ~/nimiq-bridge/core-rs-albatross
git checkout albatross-next
cargo build --release --bin nimiq-rpc --bin nimiq-address
cd ~/nimiq-bridge/interoperability/evm/oracle && npm install && npx hardhat compile
cd ~/nimiq-bridge/interoperability/evm/bridge && npm install && npx hardhat compile
cd ~/nimiq-bridge/interoperability/polygon-bridge-monitor && cargo build --release
```

The first time, Hardhat asks whether to share usage data. Either answer works.

The local networks run from Docker images that the interoperability repository builds. Check whether they exist:

```bash
docker images | grep interop-e2e
```

- **It prints two lines,** `interop-e2e/nimiq-node` and `interop-e2e/relayer`: the images are built.
- **It prints nothing:** build them. It takes 20 to 40 minutes.

```bash
cd ~/nimiq-bridge/interoperability
python3 -m venv venv
venv/bin/pip install -r tests/e2e/requirements.txt
venv/bin/python tests/e2e/run.py build
```

## 1. Start the local networks

In the commands terminal, create the folder for this guide's files. Removing it first makes every run start clean:

```bash
rm -rf ~/nimiq-bridge/local
mkdir ~/nimiq-bridge/local
```

Write the node's configuration. It is the local network's node configuration with the testnet guide's `[consensus]` settings. `max_epochs_stored` is 100 instead of 4, because local epochs last about two minutes, and 100 keeps the blocks the relayer needs for about three hours:

```bash
cat > ~/nimiq-bridge/local/full.toml <<'EOF'
[network]
peer_key_file = "/home/nimiq/peer_key.dat"
listen_addresses = ["/ip4/0.0.0.0/tcp/8443/ws"]
allow_loopback_addresses = true
dht_quorum = 1
seed_nodes = [
    { address = "/dns4/nimiq-validator/tcp/8443/ws" },
]

[consensus]
network = "unit-albatross"
min_peers = 1
sync_mode = "full"
max_epochs_stored = 100
index_history = true

[database]
path = "/home/nimiq/db"

[rpc-server]
bind = "0.0.0.0"
port = 8648
EOF
```

Write a second file that tells Docker to use that configuration for the node:

```bash
cat > ~/nimiq-bridge/local/full-override.yaml <<EOF
services:
  nimiq:
    volumes:
      - $HOME/nimiq-bridge/local/full.toml:/etc/nimiq/client.toml:ro
EOF
```

In the node terminal, start the local networks and follow the node's log. Leave it running:

```bash
cd ~/nimiq-bridge/interoperability
docker compose -f tests/e2e/docker/compose.yaml -f ~/nimiq-bridge/local/full-override.yaml up -d nimiq-validator nimiq anvil
docker compose -f tests/e2e/docker/compose.yaml logs -f nimiq
```

This starts a Nimiq validator, a Nimiq node with its JSON-RPC server at `127.0.0.1:8648`, and anvil at `http://localhost:8545`.

## 2. Keep your values in bridge.env

Each step produces values that later steps use. As in the testnet guides, they are kept in a file. In the commands terminal, create it with the values that are already known:

```bash
cd ~/nimiq-bridge/core-rs-albatross
cat > ~/nimiq-bridge/local/bridge.env <<'EOF'
export INTEROP=$HOME/nimiq-bridge/interoperability
export EVM_RPC_URL=http://localhost:8545
export EVM_RELAYER_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
export EVM_DEPLOYER_KEY=0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
export NIMIQ_NETWORK_ID=7
export BLOCKS_PER_BATCH=32
export BATCHES_PER_EPOCH=4
EOF
```

The two EVM keys are anvil's accounts #0 and #1, used as the relayer key and the deployer key.

Whenever a step says to add a line to `bridge.env`, add it at the end of the file in a text editor and save. Every command block that uses a value from the file starts with `source ~/nimiq-bridge/local/bridge.env`, so it always sees your latest values. The commands terminal stays in `~/nimiq-bridge/core-rs-albatross` from here on, because the commands run `nimiq-rpc` from its `target/release` folder.

## 3. Check the node

```bash
./target/release/nimiq-rpc is-consensus-established
```

Run it until it prints `data: true`, which takes a few seconds after the start. If it keeps printing `false`, check in the node terminal that all three containers run: press Ctrl+C to stop following the log, then run `docker compose -f tests/e2e/docker/compose.yaml ps`. It must list `nimiq-validator`, `nimiq` and `anvil`. If one is missing, run the commands of step 1 in the node terminal again.

## 4. Create and fund the operator key

Create the Nimiq operator key:

```bash
cargo run --release --bin nimiq-address
```

```
Address:       NQ78 RABU JNY2 C64P VUAG EAFK 8BKV AHVD 8PCU
Address (raw): ca97c95be261897ef150729f342e7d547ad45d9c
Public Key:    0c1c899679f9b86ee8a7ede6f37140d7131ffbba2cf8a1b4700037282262c6af
Private Key:   9aae2349cca24562204881af106edeae6cd9c4fb5722ab9fdf85d737c25b2ef2
```

The output above is an example. Every run creates a new key, so use the values yours prints. `cargo run` may print warnings such as `unused workspace dependency` first. They do not affect the result. Add your values to `bridge.env`, with quotes around the `NQ` address:

```bash
export NIMIQ_OPERATOR="NQ78 RABU JNY2 C64P VUAG EAFK 8BKV AHVD 8PCU"
export NIMIQ_OPERATOR_RAW=ca97c95be261897ef150729f342e7d547ad45d9c
export NIMIQ_OPERATOR_KEY=9aae2349cca24562204881af106edeae6cd9c4fb5722ab9fdf85d737c25b2ef2
```

The local network starts with one account that holds NIM. Its key and address are fixed in the interoperability repository's test setup, so the next commands use them as written. They import that account into the node and send 100 NIM to your operator:

```bash
source ~/nimiq-bridge/local/bridge.env
./target/release/nimiq-rpc import 6c9320ac201caf1f8eaa5b05f5d67a9e77826f3f6be266a0ecccc20416dc6587
./target/release/nimiq-rpc unlock "NQ46 U66M JNLD 0DJ7 0E9P Q7XR V9KV H976 813A"
./target/release/nimiq-rpc basic "NQ46 U66M JNLD 0DJ7 0E9P Q7XR V9KV H976 813A" "$NIMIQ_OPERATOR" 100
```

Import and unlock your operator key, so the node can sign with it, and check its balance:

```bash
source ~/nimiq-bridge/local/bridge.env
./target/release/nimiq-rpc import "$NIMIQ_OPERATOR_KEY"
./target/release/nimiq-rpc unlock "$NIMIQ_OPERATOR"
./target/release/nimiq-rpc get "$NIMIQ_OPERATOR"
```

`get` shows your raw address and a `balance` of `10000000`, which is 100 NIM in luna. If it shows 0, wait a few seconds and run `get` again.

## 5. Deploy the contracts

These are steps 1 to 7 of [deploy a bridge](/bridge/operating/deploy-a-bridge), which explains each one.

### Deploy the EVM oracle

Read the current block number, then the last election block at that number, with your number in place of `266`:

```bash
./target/release/nimiq-rpc block-number
./target/release/nimiq-rpc last-election-block 266
```

The election block is `200`, or a later one if the network has run longer. Election blocks are 128 blocks apart. Add it to `bridge.env`, for example `export ANCHOR_BLOCK=200`.

Read the anchor's header. It prints one long line of hex, starting with `07`, the network id:

```bash
source ~/nimiq-bridge/local/bridge.env
./target/release/nimiq-rpc raw-macro-header "$ANCHOR_BLOCK"
```

Add `export ANCHOR_HEADER=0x` followed by the whole line to `bridge.env`.

Read the current EVM block, then add it to `bridge.env`, for example `export EVM_START_BLOCK=35`:

```bash
source ~/nimiq-bridge/local/bridge.env
cast block-number --rpc-url "$EVM_RPC_URL"
```

Deploy the oracle with the relayer key. The command prints the new contract's address:

```bash
source ~/nimiq-bridge/local/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_RELAYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/oracle/artifacts/contracts/2_EvmOracle.sol/EvmOracle.json")" \
  "constructor(bytes,(uint16,uint16,uint16,uint16,uint16,uint16),uint32,uint16,uint8)" \
  "$ANCHOR_HEADER" "(371,3,11,51,243,307)" "$BLOCKS_PER_BATCH" "$BATCHES_PER_EPOCH" "$NIMIQ_NETWORK_ID" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export EVM_ORACLE=0x5fbdb2315678afecb367f032d93f642f64180aa3`. On a fresh local chain, the three EVM contracts usually get the same addresses as the examples on this page, because the same keys deploy them in the same order.

### Deploy the EVM bridge contract and the lock parser

```bash
source ~/nimiq-bridge/local/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/bridge/artifacts/contracts/1_EvmBridge.sol/PolygonBridge.json")" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export POLYGON_BRIDGE=0x8464135c8f25da09e49bc8782676a84730c318bc`. Point it at the oracle, and deploy the lock parser:

```bash
source ~/nimiq-bridge/local/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setOracle(address)" "$EVM_ORACLE"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/bridge/artifacts/contracts/5_LockParser.sol/LockParser.json")" \
  | jq -r .contractAddress
```

The first command prints a receipt with `status 1 (success)`, and the second the lock parser's address. Add it to `bridge.env`, for example `export LOCK_PARSER=0x948b3c65b89df0b4894abe91e6d02fe579834f8f`.

### Create the Nimiq oracle

```bash
source ~/nimiq-bridge/local/bridge.env
./target/release/nimiq-rpc create-oracle "$NIMIQ_OPERATOR" "$NIMIQ_OPERATOR" 1000 blake2b 0.01
```

It prints the transaction hash in `data`. A few seconds later, read the new oracle's address, with your hash in place of the example:

```bash
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getTransactionByHash","params":["6119e1384c18575ced820303a9da836bc006923b7577aed58e5c101ec2a210d4"]}' \
  | jq -r .result.data.to
```

It prints an `NQ` address. If it prints anything else, the transaction is not in a block yet. Run it again after a few seconds. Add it to `bridge.env` with quotes, for example `export NIMIQ_ORACLE="NQ34 D1CT 7LB0 HBRN LVL5 JKSB UYJH CH1F FCJB"`.

### Create the Nimiq bridge contract

Build the chain configuration, and create the bridge contract with a 10 NIM deposit. The `echo` line prints `398`:

```bash
source ~/nimiq-bridge/local/bridge.env
AMOY_CHAIN_CONFIG_PREFIX=82f10401000000000000000000000000000000000000000000000000000000000000000001010200170000041c0f736f757263655f636f6e74726163740048051c06616d6f756e740014041c0e7461726765745f616464726573730028051c0c7461726765745f6e6f6e636500280500ffffffff0f141c116275726e5f626c6f636b5f6865696768740068051c0f7461726765745f636861696e5f6964008801041c0e6272696467655f616464726573732014
export CHAIN_CONFIG="${AMOY_CHAIN_CONFIG_PREFIX}$(echo "${POLYGON_BRIDGE#0x}" | tr 'A-F' 'a-f')"
echo "${#CHAIN_CONFIG}"
./target/release/nimiq-rpc create-bridge "$NIMIQ_OPERATOR" "$NIMIQ_OPERATOR" "$NIMIQ_ORACLE" 80002 "$CHAIN_CONFIG" 10
```

Read the contract's address with the same `curl` command and this transaction's hash, and add it to `bridge.env` with quotes, for example `export NIMIQ_BRIDGE="NQ08 P0C8 XH3B 1PGR 0FQY H5MH LJJQ SBUX PPL4"`. Then check it:

```bash
source ~/nimiq-bridge/local/bridge.env
./target/release/nimiq-rpc get "$NIMIQ_BRIDGE"
```

It shows a `Bridge` account with `source_chain_id: 80002` and a `balance` of `1000000`. At the top, `address: Address("...")` shows the contract's raw address. Add it to `bridge.env`, for example `export NIMIQ_BRIDGE_RAW=b8188f446b0de1903f1f896b1a4a58d2f9ebde84`.

### Link the two sides

Read the protocol version from the anchor header. It prints `3`. Add `export HEADER_VERSION=3` to `bridge.env`:

```bash
source ~/nimiq-bridge/local/bridge.env
echo $((16#${ANCHOR_HEADER:4:4}))
```

Send the three settings. Each prints `status 1 (success)`:

```bash
source ~/nimiq-bridge/local/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setNimiqBridgeAddress(address)" "0x$NIMIQ_BRIDGE_RAW"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setNimiqNetworkId(uint8)" "$NIMIQ_NETWORK_ID"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setLockParser(uint16,address)" "$HEADER_VERSION" "$LOCK_PARSER"
```

### Check the deployment

```bash
source ~/nimiq-bridge/local/bridge.env
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "oracle()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "nimiqBridgeAddress()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "nimiqNetworkId()(uint8)"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "lockParsers(uint16)(address)" "$HEADER_VERSION"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "decimals()(uint8)"
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "owner()(address)"
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "anchorHeight()(uint32)"
```

The lines print, in order. Addresses may differ in upper and lower case only:

1. Your `EVM_ORACLE`
2. `0x` followed by your `NIMIQ_BRIDGE_RAW`
3. `7`
4. Your `LOCK_PARSER`
5. `5`
6. `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`, the relayer key's address
7. Your `ANCHOR_BLOCK`

## 6. Start the relayer

In the relayer terminal, write the relayer's configuration from `bridge.env`. It is the configuration of [run a relayer](/bridge/operating/run-a-relayer#_2-write-the-configuration), with `network = "unit-albatross"`:

```bash
cd ~/nimiq-bridge/interoperability/polygon-bridge-monitor
source ~/nimiq-bridge/local/bridge.env
cat > ~/nimiq-bridge/local/relayer.toml <<EOF
database_path = "$HOME/nimiq-bridge/local/relayer-db"
evm_rpc_url = "$EVM_RPC_URL"
nimiq_rpc_url = "ws://127.0.0.1:8648/ws"
evm_bridge_address = "$POLYGON_BRIDGE"
nimiq_oracle_address = "$NIMIQ_ORACLE"
api_bind_address = "127.0.0.1"
api_port = 8080

[polygon_to_nimiq]
enabled = true
nimiq_oracle_private_key = "$NIMIQ_OPERATOR_KEY"
evm_oracle_address = "$EVM_ORACLE"
network = "unit-albatross"
start_block = $EVM_START_BLOCK

[nimiq_to_evm]
enabled = true
evm_oracle_address = "$EVM_ORACLE"
evm_private_key = "$EVM_RELAYER_KEY"

[oracle_verifier]
nimiq_bridge_address = "$NIMIQ_BRIDGE"
EOF
cat ~/nimiq-bridge/local/relayer.toml
```

Every value in the printed file must be filled in. Start the relayer and leave it running:

```bash
cargo run --release --bin polygon-bridge-monitor -- --config ~/nimiq-bridge/local/relayer.toml
```

In the commands terminal, check the relay. Once `backlog` is 0, the relay is current:

```bash
curl -s http://127.0.0.1:8080/relay-status
```

## 7. Lock and mint

The test transfer locks 1 NIM on Nimiq and mints it on the EVM side, then burns 0.5 NIM and releases them on Nimiq. The EVM side uses anvil's account #2, which is already funded. Add it to `bridge.env`:

```bash
export EVM_DESTINATION=0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
export EVM_DESTINATION_KEY=0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
```

Build the lock data and lock 1 NIM. The `echo` line prints `112`, and the last command prints the transaction hash:

```bash
source ~/nimiq-bridge/local/bridge.env
LOCK_NONCE=$(( $(cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "mintNonces(address)(uint64)" "$EVM_DESTINATION") + 1 ))
LOCK_DATA=$(printf '%016x' "$LOCK_NONCE")$(echo "${EVM_DESTINATION#0x}" | tr 'A-F' 'a-f')$(printf '%016x' 80002)$(echo "${POLYGON_BRIDGE#0x}" | tr 'A-F' 'a-f')
echo "${#LOCK_DATA}"
./target/release/nimiq-rpc bridge-deposit "$NIMIQ_OPERATOR" "$NIMIQ_BRIDGE" "$LOCK_DATA" 1
```

Add the hash to `bridge.env`, for example `export LOCK_TX=517ec3016adab82f0a4887326d7ce017bac4286c41fe047a0b0d79c3532467c7`.

A few seconds later, once the lock is in a block, define a helper for the node's JSON-RPC server and find the macro block the mint is proven against. The `echo` line must print a number. If it prints `null`, the lock is not in a block yet, so run the block again:

```bash
source ~/nimiq-bridge/local/bridge.env
rpc() {
  curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
    --data "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"$1\",\"params\":$2}"
}
LOCK_BLOCK=$(rpc getTransactionByHash "[\"$LOCK_TX\"]" | jq -r .result.data.blockNumber)
PROOF_BLOCK=$(rpc getMacroBlockAfter "[$LOCK_BLOCK]" | jq -r .result.data)
echo "$PROOF_BLOCK"
```

Wait until the relayer has submitted that block. The command prints nothing and returns to the prompt once it has, after up to a minute:

```bash
until curl -s http://127.0.0.1:8080/relay-status | jq -e ".submitted_height >= $PROOF_BLOCK" > /dev/null; do sleep 5; done
```

Read the proof, and mint. The last command prints `status 1 (success)`:

```bash
source ~/nimiq-bridge/local/bridge.env
PROOF=$(rpc getTransactionHistoryProof "[\"$LOCK_TX\", $PROOF_BLOCK]" | jq .result.data)
HISTORIC_TX=0x$(echo "$PROOF" | jq -r .historicTransaction)
MMR_PROOF=$(echo "$PROOF" | jq -r '"(\(.mmrSize),\(.leafIndex),[\(.nodes | map("0x"+.) | join(","))])"')
PROOF_HEADER=0x$(./target/release/nimiq-rpc raw-macro-header "$PROOF_BLOCK")
ORACLE_INDEX=$(cast logs --rpc-url "$EVM_RPC_URL" --address "$EVM_ORACLE" --from-block "$EVM_START_BLOCK" --json \
  "Submitted(uint256 indexed index,uint32 indexed height,bytes32 blockHash,bytes32 newEntry)" "" "$PROOF_BLOCK" \
  | jq -r '.[0].topics[1]' | cast to-dec)
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DESTINATION_KEY" "$POLYGON_BRIDGE" \
  "mint(bytes,(uint64,uint64,bytes32[]),bytes,uint256,bytes32[])" \
  "$HISTORIC_TX" "$MMR_PROOF" "$PROOF_HEADER" "$ORACLE_INDEX" \
  "[0x0000000000000000000000000000000000000000000000000000000000000000]"
```

The single zero hash at the end is the [ring segment](/bridge/reference/evm/oracle-contract#rebuilding-a-ring-segment) of a new EVM oracle. It works while the oracle has stored fewer than 1,024 headers, about nine hours after step 5 on the local network, at one macro block every 32 seconds.

## 8. Burn and release

Burn 0.5 NIM on the EVM side, back to the operator. The command prints the burn's transaction hash:

```bash
source ~/nimiq-bridge/local/bridge.env
BURN_NONCE=$(( $(rpc getBridgeNonce "[\"$NIMIQ_BRIDGE\", \"$NIMIQ_OPERATOR\"]" | jq -r .result.data) + 1 ))
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DESTINATION_KEY" --json "$POLYGON_BRIDGE" \
  "burn(bytes,uint256,uint256)" "0x$NIMIQ_OPERATOR_RAW" "$BURN_NONCE" 50000 | jq -r .transactionHash
```

Add it to `bridge.env`, for example `export BURN_TX=0xd442f2c7a173557c4c4e512a9231172b126345222bcf70b660b1e96609027c19`.

Wait for the relayer's proof of the burn. The command prints nothing, saves the proof in a file, and returns to the prompt once the proof exists, after about three minutes:

```bash
source ~/nimiq-bridge/local/bridge.env
until curl -sf "http://127.0.0.1:8080/proof/$BURN_TX" > ~/nimiq-bridge/local/burn-proof.json; do sleep 10; done
```

Wait for the prompt before you continue. Then check the proof file. It must print a number, the Nimiq oracle index the release is proven against:

```bash
jq '.[0].oracle_index' ~/nimiq-bridge/local/burn-proof.json
```

Build the release from the proof, and release the 0.5 NIM. The last command prints the transaction hash:

```bash
source ~/nimiq-bridge/local/bridge.env
BURN_RECORD=$(jq -r '.[0].record.record' ~/nimiq-bridge/local/burn-proof.json)
RELEASE_INDEX=$(jq -r '.[0].oracle_index' ~/nimiq-bridge/local/burn-proof.json)
RELEASE_PROOF=$(jq -r '
  def hex: "0123456789abcdef" as $d | $d[(. / 16 | floor):(. / 16 | floor) + 1] + $d[(. % 16):(. % 16) + 1];
  .[0].merkle_path as $path | ($path | length) as $n
  | [$path | to_entries | group_by(.key / 8 | floor)[] | map(if .value.left then pow(2; 7 - (.key % 8)) else 0 end) | add] as $bits
  | "03" + ($n | hex) + ($bits | length | hex) + ($bits | map(hex) | join("")) + ($n | hex) + ($path | map(.hash) | join(""))
' ~/nimiq-bridge/local/burn-proof.json)
./target/release/nimiq-rpc bridge-release "$NIMIQ_OPERATOR" "$NIMIQ_BRIDGE" "$BURN_RECORD" "$RELEASE_PROOF" "$RELEASE_INDEX" 0.5
```

## 9. Check the result

A few seconds after the release, run these in the commands terminal, after `source ~/nimiq-bridge/local/bridge.env`. `rpc` is the helper from step 7.

| Command | Expected |
| --- | --- |
| `./target/release/nimiq-rpc get "$NIMIQ_BRIDGE"` | `balance` is `1050000`: the 10 NIM deposit plus 1 NIM locked, minus 0.5 NIM released |
| `cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "balanceOf(address)(uint256)" "$EVM_DESTINATION"` | `50000`, 0.5 NIM still on the EVM side |
| `cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "mintNonces(address)(uint64)" "$EVM_DESTINATION"` | `1` |
| `rpc getBridgeNonce "[\"$NIMIQ_BRIDGE\", \"$NIMIQ_OPERATOR\"]"` | `"data":1` |
| `./target/release/nimiq-rpc get "$NIMIQ_OPERATOR"` | `balance` is `8949000`: the 100 NIM from step 4, minus the oracle deposit (0.01 NIM), the bridge deposit (10 NIM) and the lock (1 NIM), plus the release (0.5 NIM) |

## Stop and start over

1. In the relayer terminal, press Ctrl+C to stop the relayer.
2. In the node terminal, press Ctrl+C to stop following the log, then stop the local networks and delete their data:

```bash
docker compose -f tests/e2e/docker/compose.yaml down -v
```

A new run starts again at step 1.
