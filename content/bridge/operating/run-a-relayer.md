---
title: Run a relayer
description: Start the relayer that connects the two sides of a bridge, and check the bridge with a test transfer.
icon: i-tabler-server
navigation:
  title: Run a relayer
  order: 2
---

# Run a relayer

The relayer carries what each network needs to know about the other. In one direction it submits every Nimiq macro block header to the EVM oracle, which is what minting NIM on Polygon is proven against. In the other it reads the burn records forwarded through the EVM oracle and writes their root to the Nimiq oracle, which is what releasing NIM is proven against. Without it, the contracts exist but nothing crosses. To understand what the relayer can and cannot do, read about [oracles](/bridge/how-it-works/oracles).

This guide starts from a bridge deployed with [deploy a bridge](/bridge/operating/deploy-a-bridge). It ends with a test transfer in both directions and the checks of a working bridge.

## Before you start

- **The contracts are deployed.** All seven steps of [deploy a bridge](/bridge/operating/deploy-a-bridge) are done, and `~/nimiq-bridge/bridge.env` holds their values.
- **The node is running** in the node terminal. The relayer uses the same node as the deployment.
- **The relayer starts soon after the EVM oracle.** The relayer submits every macro block header from the oracle's anchor on, and the node keeps them only for `max_epochs_stored` epochs, about two days with the node configuration of the deploy guide.
- **The EVM relayer key has POL** for as long as the relayer runs. It pays for a header submission at every Nimiq macro block.

## 1. Build the relayer

Open the **relayer terminal**, a third terminal. The relayer is `polygon-bridge-monitor`, in the interoperability repository cloned for the deployment:

```bash
cd ~/nimiq-bridge/interoperability/polygon-bridge-monitor
cargo build --release
```

## 2. Write the configuration

The relayer reads [one TOML file](/bridge/reference/relayer#configuration). In the relayer terminal, load `bridge.env` and write the file from it:

```bash
source ~/nimiq-bridge/bridge.env
cat > ~/nimiq-bridge/relayer.toml <<EOF
database_path = "$HOME/nimiq-bridge/relayer-db"
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
network = "test-albatross"
start_block = $EVM_START_BLOCK

[nimiq_to_evm]
enabled = true
evm_oracle_address = "$EVM_ORACLE"
evm_private_key = "$EVM_RELAYER_KEY"

[oracle_verifier]
nimiq_bridge_address = "$NIMIQ_BRIDGE"
EOF
cat ~/nimiq-bridge/relayer.toml
```

The last command shows the file. Every value must be filled in. An empty `""` means a value is missing from `bridge.env`. The file holds two private keys, so keep it private.

| Setting | Meaning |
| --- | --- |
| `database_path` | The folder of the relayer's database. It holds the burn records and roots the relayer has published, and its progress on both networks |
| `evm_rpc_url`, `nimiq_rpc_url` | The Amoy RPC URL, and the Nimiq node's WebSocket endpoint |
| `evm_bridge_address` | `PolygonBridge`, from step 2 of the deployment |
| `nimiq_oracle_address` | The Nimiq oracle, from step 4, in the `NQ` form the relayer requires |
| `api_bind_address`, `api_port` | Where the relayer serves its [API](/bridge/reference/relayer#api) |
| `[polygon_to_nimiq]` | The burn direction. `nimiq_oracle_private_key` signs every update to the Nimiq oracle and must be the oracle's owner. `start_block` is the Amoy block the relayer starts reading at on its first run |
| `[nimiq_to_evm]` | The header direction. `evm_private_key` signs every header submission and must be the EVM oracle's owner |
| `[oracle_verifier]` | `nimiq_bridge_address` is read by the oracle verifier, a separate auditing tool. The relayer itself does not use it |

The burn direction waits `confirmation_blocks` Amoy blocks, 128 by default, before it publishes a burn's root.

## 3. Start the relayer

In the relayer terminal, start the relayer and leave it running:

```bash
cargo run --release --bin polygon-bridge-monitor -- --config ~/nimiq-bridge/relayer.toml
```

On startup it checks that the EVM oracle stores headers of the node's network, with the node's batch and epoch lengths, and exits on a mismatch. Once running, it logs each header submission, for example `Submitted Nimiq macro headers to the EVM oracle headers=1 submitted_height=...`.

If it exits with an error that the node no longer has a macro block, the node has already dropped the headers after the anchor. The bridge then needs a new EVM oracle on a newer anchor, as in [recover a relayer that stopped for too long](/bridge/operating/operator-actions#recover-a-relayer-that-stopped-for-too-long).

## 4. Check the relay

Back in the **commands terminal**, read the relay's progress:

```bash
curl -s http://127.0.0.1:8080/relay-status
```

```json
{ "backlog": 0, "nimiq_macro_height": 3456390, "submitted_height": 3456390 }
```

`submitted_height` is the last macro block header the EVM oracle holds, `nimiq_macro_height` is the node's newest macro block, and `backlog` is the number of headers still to submit. Right after startup the relayer catches up from the anchor. Once `backlog` stays at 0, the relay is current.

## 5. Send a test transfer

The test transfer crosses both ways. It locks 1 NIM on Nimiq and mints it as NIM on Polygon, then burns 0.5 NIM of it on Polygon and releases them on Nimiq. The burn takes back only half to show that any amount can cross back, so 0.5 NIM stay on Polygon at the end. No fee is taken along the way, because `nimiq-rpc` sends every transaction with a fee of 0 unless `--fee` is set.

It uses the operator key on Nimiq, which already holds NIM, and a new EVM key on Polygon. All its commands run in the commands terminal, in `~/nimiq-bridge/core-rs-albatross`.

### Create the destination key

The EVM key receives the minted NIM and calls `mint` and `burn` itself, so it needs POL for gas:

```bash
cast wallet new
```

Add both to `bridge.env` as `EVM_DESTINATION` and `EVM_DESTINATION_KEY`, in the same form as the other keys, and request POL for the address as in the deployment. 0.1 POL is more than enough for the test's mint and burn.

### Lock

A lock names its destination, a nonce, the EVM chain and `PolygonBridge` in 56 bytes of transaction data. The nonce must be the destination's next one, one above the last nonce minted to it. Build the data:

```bash
source ~/nimiq-bridge/bridge.env
LOCK_NONCE=$(( $(cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "mintNonces(address)(uint64)" "$EVM_DESTINATION") + 1 ))
LOCK_DATA=$(printf '%016x' "$LOCK_NONCE")$(echo "${EVM_DESTINATION#0x}" | tr 'A-F' 'a-f')$(printf '%016x' 80002)$(echo "${POLYGON_BRIDGE#0x}" | tr 'A-F' 'a-f')
echo "${#LOCK_DATA}"
```

The last command prints `112`, the length of correct lock data. Lock 1 NIM with it:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc bridge-deposit "$NIMIQ_OPERATOR" "$NIMIQ_BRIDGE" "$LOCK_DATA" 1
```

The command prints the transaction hash in `data`. Add it to `bridge.env`, for example `export LOCK_TX=517ec3016adab82f0a4887326d7ce017bac4286c41fe047a0b0d79c3532467c7`.

A lock with a wrong nonce or a malformed destination can never be minted, and Nimiq does not check either. [Lock and mint](/bridge/how-it-works/lock-and-mint) explains why.

### Wait for the proof block

The mint is proven against the first macro block after the lock. The next commands read values from the node's JSON-RPC server, so define a short function for it first:

```bash
rpc() {
  curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
    --data "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"$1\",\"params\":$2}"
}
```

A function, like a variable, exists only in the terminal where it was defined. A few seconds after the lock, once it is in a block, read the lock's block, then the macro block after it. The `echo` line must print a number. If it prints `null`, the lock is not in a block yet, so run the block again:

```bash
source ~/nimiq-bridge/bridge.env
LOCK_BLOCK=$(rpc getTransactionByHash "[\"$LOCK_TX\"]" | jq -r .result.data.blockNumber)
PROOF_BLOCK=$(rpc getMacroBlockAfter "[$LOCK_BLOCK]" | jq -r .result.data)
echo "$PROOF_BLOCK"
```

These values and the ones in the next sections are only needed for the transfer, so they stay in the terminal and do not go into `bridge.env`.

Wait until the relayer has submitted that block. The command prints nothing and returns to the prompt once it has, which on testnet takes about a minute:

```bash
source ~/nimiq-bridge/bridge.env
until curl -s http://127.0.0.1:8080/relay-status | jq -e ".submitted_height >= $PROOF_BLOCK" > /dev/null; do sleep 5; done
```

### Mint

The mint takes the lock's history record and its proof, the proof block's header, and the index the EVM oracle stored that header at. Read them:

```bash
source ~/nimiq-bridge/bridge.env
PROOF=$(rpc getTransactionHistoryProof "[\"$LOCK_TX\", $PROOF_BLOCK]" | jq .result.data)
HISTORIC_TX=0x$(echo "$PROOF" | jq -r .historicTransaction)
MMR_PROOF=$(echo "$PROOF" | jq -r '"(\(.mmrSize),\(.leafIndex),[\(.nodes | map("0x"+.) | join(","))])"')
PROOF_HEADER=0x$(./target/release/nimiq-rpc raw-macro-header "$PROOF_BLOCK")
ORACLE_INDEX=$(cast logs --rpc-url "$EVM_RPC_URL" --address "$EVM_ORACLE" --from-block "$EVM_START_BLOCK" --json \
  "Submitted(uint256 indexed index,uint32 indexed height,bytes32 blockHash,bytes32 newEntry)" "" "$PROOF_BLOCK" \
  | jq -r '.[0].topics[1]' | cast to-dec)
echo "$ORACLE_INDEX"
```

The last argument of `mint` is a [ring segment](/bridge/reference/evm/oracle-contract#rebuilding-a-ring-segment), the path from the header's hash to the value its oracle slot holds now. For a new EVM oracle it is a single zero hash. That holds while the oracle has stored fewer than 1,024 headers, about 17 hours after its deployment on testnet. Check the count, then mint:

```bash
source ~/nimiq-bridge/bridge.env
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "nextIndex()(uint256)"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DESTINATION_KEY" "$POLYGON_BRIDGE" \
  "mint(bytes,(uint64,uint64,bytes32[]),bytes,uint256,bytes32[])" \
  "$HISTORIC_TX" "$MMR_PROOF" "$PROOF_HEADER" "$ORACLE_INDEX" \
  "[0x0000000000000000000000000000000000000000000000000000000000000000]"
```

The first command must print a number below 1024. `cast send` prints `status 1 (success)` when the mint goes through. A failed mint reverts with one of the messages on the [EVM bridge contract reference](/bridge/reference/evm/bridge-contract#revert-messages).

### Burn

A burn names the Nimiq address that receives the NIM, as 20 raw bytes, and that address's next release nonce on the Nimiq bridge contract. Here the receiver is the operator, whose raw address is `NIMIQ_OPERATOR_RAW` from the deployment. Read the operator's release nonce, then burn 0.5 NIM, 50,000 luna, with the next one:

```bash
source ~/nimiq-bridge/bridge.env
BURN_NONCE=$(( $(rpc getBridgeNonce "[\"$NIMIQ_BRIDGE\", \"$NIMIQ_OPERATOR\"]" | jq -r .result.data) + 1 ))
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DESTINATION_KEY" --json "$POLYGON_BRIDGE" \
  "burn(bytes,uint256,uint256)" "0x$NIMIQ_OPERATOR_RAW" "$BURN_NONCE" 50000 | jq -r .transactionHash
```

The command prints the burn's transaction hash. Add it to `bridge.env`, for example `export BURN_TX=0xd442f2c7a173557c4c4e512a9231172b126345222bcf70b660b1e96609027c19`.

Releases to one address go in nonce order, so a burn with a later nonce waits until the burns before it are released. [Burn and release](/bridge/how-it-works/burn-and-release) explains the nonces.

### Release

The relayer waits `confirmation_blocks` Amoy blocks after the burn, then writes a root covering it to the Nimiq oracle. Wait until it serves a proof for the burn. The command prints nothing, saves the proof in a file, and returns to the prompt once the proof exists:

```bash
source ~/nimiq-bridge/bridge.env
until curl -sf "http://127.0.0.1:8080/proof/$BURN_TX" > ~/nimiq-bridge/burn-proof.json; do sleep 10; done
```

Wait for the prompt to come back before you continue. Then check the proof file. This must print a number, the Nimiq oracle index the release is proven against. If it prints `null` or an error, the proof is not there yet:

```bash
jq '.[0].oracle_index' ~/nimiq-bridge/burn-proof.json
```

`bridge-release` takes the burn record, the proof as encoded hex, and the Nimiq oracle index the proof ends at. Read them from the file:

```bash
BURN_RECORD=$(jq -r '.[0].record.record' ~/nimiq-bridge/burn-proof.json)
RELEASE_INDEX=$(jq -r '.[0].oracle_index' ~/nimiq-bridge/burn-proof.json)
RELEASE_PROOF=$(jq -r '
  def hex: "0123456789abcdef" as $d | $d[(. / 16 | floor):(. / 16 | floor) + 1] + $d[(. % 16):(. % 16) + 1];
  .[0].merkle_path as $path | ($path | length) as $n
  | [$path | to_entries | group_by(.key / 8 | floor)[] | map(if .value.left then pow(2; 7 - (.key % 8)) else 0 end) | add] as $bits
  | "03" + ($n | hex) + ($bits | length | hex) + ($bits | map(hex) | join("")) + ($n | hex) + ($path | map(.hash) | join(""))
' ~/nimiq-bridge/burn-proof.json)
```

Release the 0.5 NIM. The receiver signs the release, so the operator key sends it:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc bridge-release "$NIMIQ_OPERATOR" "$NIMIQ_BRIDGE" "$BURN_RECORD" "$RELEASE_PROOF" "$RELEASE_INDEX" 0.5
```

The value is what the operator receives. A release pays its fee out of the burned NIM rather than from the receiver's balance, so the value plus the fee must equal the burned amount. With a fee of 0.01 NIM, set with `--fee 0.01`, the value would be 0.49 NIM. This release has no fee, so the value is the full 0.5 NIM.

The command prints the transaction hash when the release is sent. The node checks the release before sending it and names the check that failed, if any.

## What a working bridge looks like

Each item lists the command that checks it. A few seconds after the release, run them in the commands terminal, after `source ~/nimiq-bridge/bridge.env`. `rpc` is the function defined in [wait for the proof block](#wait-for-the-proof-block).

| Check | Command | Expected |
| --- | --- | --- |
| The relayer is running and current | `curl -s http://127.0.0.1:8080/relay-status` | `backlog` is 0 and `submitted_height` keeps rising |
| The bridge contract holds what is still on Polygon | `./target/release/nimiq-rpc get "$NIMIQ_BRIDGE"` | `balance` is the creation deposit plus 50,000 luna: 1 NIM locked, 0.5 NIM released |
| 0.5 NIM remain on Polygon | `cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "balanceOf(address)(uint256)" "$EVM_DESTINATION"` | `50000`, which is 0.5 NIM at 5 decimals |
| The mint nonce moved on | `cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "mintNonces(address)(uint64)" "$EVM_DESTINATION"` | `1` |
| The release nonce moved on | `rpc getBridgeNonce "[\"$NIMIQ_BRIDGE\", \"$NIMIQ_OPERATOR\"]"` | `data` is `1` |
| The operator received the release | `./target/release/nimiq-rpc get "$NIMIQ_OPERATOR"` | `balance` is 1,051,000 luna lower than when you imported the operator key in the deployment: the oracle deposit (1,000), the bridge deposit (1,000,000) and the lock (100,000) went out, and the release (50,000) came back |

## Restarts

The relayer keeps its progress in its [database](/bridge/reference/relayer#state), so a stopped relayer can be started again with the same command. It resumes where it stopped and submits the headers it missed. A relayer stopped for longer than the node keeps macro blocks needs the [recovery in operator actions](/bridge/operating/operator-actions#recover-a-relayer-that-stopped-for-too-long).
