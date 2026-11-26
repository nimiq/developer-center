---
title: Operator actions
description: What the operator does after the bridge is running, from oracle changes to protocol upgrades.
icon: i-tabler-adjustments
navigation:
  title: Operator actions
  order: 4
---

# Operator actions

Once the bridge is running, the relayer keeps it moving without help. Four actions are left to the operator:

- [Changing who owns the Nimiq oracle](#change-the-nimiq-oracle-owner)
- [Deleting the Nimiq oracle](#delete-the-nimiq-oracle)
- [Getting a relayer going again after a long stop](#recover-a-relayer-that-stopped-for-too-long)
- [Keeping the bridge working across a Nimiq protocol upgrade](#keep-the-bridge-working-across-a-protocol-upgrade)

Each one uses an owner key, and [security and trust](/bridge/security-and-trust#trusted-roles) lists what each owner can do.

## Before you start

This guide starts from a bridge on the Nimiq testnet and Polygon Amoy, deployed with [deploy a bridge](/bridge/operating/deploy-a-bridge) and running as in [run a relayer](/bridge/operating/run-a-relayer). It uses the same terminals and the same values. Make sure:

- **The bridge is deployed and the relayer runs.** `~/nimiq-bridge/bridge.env` holds the values of the deployment.
- **The node is running** in the node terminal, with the operator key unlocked. After a node restart, unlock it again with `./target/release/nimiq-rpc unlock "$NIMIQ_OPERATOR"`.
- **The commands run in the commands terminal**, in `~/nimiq-bridge/core-rs-albatross`, as in the deployment.

## How the keys are held

A bridge has three keys, each the owner of one contract:

| Key | Owns | Where it is |
| --- | --- | --- |
| Nimiq operator key | The Nimiq oracle. It writes the roots, can transfer the oracle and can delete it | `bridge.env`, `relayer.toml` and the node's wallet |
| EVM relayer key | The EVM oracle. It submits the headers, sets the header format of a new protocol version and can transfer the oracle | `bridge.env` and `relayer.toml` |
| EVM deployer key | `PolygonBridge`. It changes the oracle, the Nimiq bridge address, the network id and the lock parsers | `bridge.env` |

All three are stored in plain text. Anyone who can read `bridge.env` or `relayer.toml` holds the keys in it, so keep both files readable only by you.

The relayer needs the first two keys to run. It never uses the deployer key, which is needed only to change the bridge contract's settings, so it can be kept on another machine than the relayer.

Whether an owner is a single key or a multisig is the operator's choice. This guide uses single keys throughout.

## Change the Nimiq oracle owner

The relayer signs every update to the Nimiq oracle with the owner's key. After a change of owner it has to sign with the new key, or every update it sends is rejected.

Create the new key, as in the deployment:

```bash
cargo run --release --bin nimiq-address
```

Stop the relayer with `Ctrl+C` in the relayer terminal. Then add the new key to `bridge.env` as `NIMIQ_NEW_OWNER`, with quotes, and `NIMIQ_NEW_OWNER_KEY`, for example:

```bash
export NIMIQ_NEW_OWNER="NQ12 3ABC DEF4 5GHJ 6KLM 7NPQ 8RST 9UVX YABC"
export NIMIQ_NEW_OWNER_KEY=4f2e...
```

Transfer the oracle. The current owner signs the change:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc change-oracle-owner "$NIMIQ_OPERATOR" "$NIMIQ_OPERATOR" "$NIMIQ_ORACLE" "$NIMIQ_NEW_OWNER"
```

| Argument | Value | Meaning |
| --- | --- | --- |
| Sender | `$NIMIQ_OPERATOR` | The unlocked key that sends the transaction and pays the fee |
| Owner | `$NIMIQ_OPERATOR` | The current owner, which signs the change. It must be unlocked |
| Oracle | `$NIMIQ_ORACLE` | The Nimiq oracle |
| New owner | `$NIMIQ_NEW_OWNER` | The address that owns the oracle from now on |

A few seconds later, once the transaction is in a block, check the oracle:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc get "$NIMIQ_ORACLE"
```

`owner` is now the new key's raw address. The change takes effect in one step, with no confirmation from the new owner, so a mistyped address loses the oracle for good.

Point the relayer at the new key. In `~/nimiq-bridge/relayer.toml`, replace the value of `nimiq_oracle_private_key` with the new private key, in quotes. Check the line:

```bash
grep nimiq_oracle_private_key ~/nimiq-bridge/relayer.toml
```

Start the relayer again in the relayer terminal, with the same command as in [run a relayer](/bridge/operating/run-a-relayer#_3-start-the-relayer). It resumes where it stopped.

To sign further owner actions on this page with the new key, import and unlock it in the node:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc import "$NIMIQ_NEW_OWNER_KEY"
./target/release/nimiq-rpc unlock "$NIMIQ_NEW_OWNER"
```

The commands on the rest of this page use `$NIMIQ_OPERATOR` as the owner. After a change of owner, use `$NIMIQ_NEW_OWNER` in its place.

## Delete the Nimiq oracle

::callout{icon="i-tabler-alert-triangle" color="warning"}
Deleting the oracle cannot be undone. A Nimiq bridge contract cannot switch to another oracle, so the NIM locked in it can never be released again, including NIM locked after the deletion. [Security and trust](/bridge/security-and-trust#if-the-nimiq-oracle-is-deleted) explains what this means for users.
::

The owner deletes the oracle by withdrawing its deposit. The withdrawal must take the whole balance and pay no fee.

Stop the relayer first, with `Ctrl+C` in the relayer terminal. Then check the oracle's balance:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc get "$NIMIQ_ORACLE"
```

`balance` is in luna, 100,000 luna per NIM. With the deposit from the deployment it is 1,000 luna, which is 0.01 NIM. Withdraw it, with your balance in NIM in place of `0.01`:

```bash
source ~/nimiq-bridge/bridge.env
./target/release/nimiq-rpc delete-oracle "$NIMIQ_OPERATOR" "$NIMIQ_ORACLE" "$NIMIQ_OPERATOR" 0.01
```

| Argument | Value | Meaning |
| --- | --- | --- |
| Owner | `$NIMIQ_OPERATOR` | The owner, which signs the withdrawal. It must be unlocked |
| Oracle | `$NIMIQ_ORACLE` | The Nimiq oracle |
| Recipient | `$NIMIQ_OPERATOR` | The account that receives the deposit |
| Value | `0.01` | The whole balance, in NIM |

A few seconds later, check the oracle again with the same `get` command. It now shows a `Basic` account with a `balance` of 0, because the contract was removed. Do not start the relayer again for this bridge.

## Recover a relayer that stopped for too long

While the relayer is stopped, nothing is lost, but nothing moves. Locks wait for their headers, and burns wait for their roots. A relayer that was stopped for less than the node keeps old blocks needs nothing more than a restart, as in [restarts](/bridge/operating/run-a-relayer#restarts). It submits the headers it missed and catches up.

The node keeps the macro blocks between election blocks for `max_epochs_stored` epochs, set in `~/.nimiq/client.toml`. An epoch is about 12 hours on mainnet. To ride out a longer outage, raise `max_epochs_stored` before it happens, to cover the longest stop you want to survive. Running the relayer under a supervisor that restarts it, and that reports when it stops, keeps any outage well within that window, so the recovery below is a last resort.

Keep POL on the EVM relayer key. It pays for a header submission at every macro block. Once it runs out, the relayer keeps running but submits no header, and logs `Failed to submit Nimiq macro headers to the EVM oracle` at every attempt. After the key is topped up, it continues where it stopped.

If the relayer was stopped for longer, it exits with an error that names a block the node no longer has:

```
ERROR polygon_bridge_monitor: Exiting error="The Nimiq->EVM worker stopped: The Nimiq node no longer has macro block 360, the next header the EVM oracle accepts. ..."
```

The EVM oracle cannot advance past that block. The bridge moves again with a new EVM oracle, anchored where the node still holds every macro block, and `PolygonBridge` pointed at it.

::callout{icon="i-tabler-alert-triangle" color="warning"}
This applies only after the relayer stayed stopped longer than the node keeps macro blocks. In that case, two kinds of transfers can be left behind by the recovery:

- Locks made before the new anchor and not yet minted can no longer be minted, because the new EVM oracle holds no header before its anchor. A proof saved earlier does not help. Their NIM stays in the Nimiq bridge contract.
- Burns made around the switch may never be released. The relayer reads burns from one EVM oracle at a time, so a burn forwarded to the old oracle that it had not read yet, or one forwarded to the new oracle before the relayer switched, can be skipped.
::

### 1. Find the new anchor

The node keeps every election block, but only the last `max_epochs_stored` epochs of the macro blocks between them. The new anchor is the oldest election block after which the node still holds every macro block. In the commands terminal, find it. It prints the block number:

```bash
source ~/nimiq-bridge/bridge.env
rpc() {
  curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
    --data "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"$1\",\"params\":$2}"
}
HEAD=$(rpc getBlockNumber '[]' | jq -r .result.data)
NEW_ANCHOR=$(rpc getLastElectionBlock "[$HEAD]" | jq -r .result.data)
while true; do
  PREVIOUS=$(rpc getElectionBlockBefore "[$NEW_ANCHOR]" | jq -r .result.data)
  (( PREVIOUS < NEW_ANCHOR )) || break
  ./target/release/nimiq-rpc raw-macro-header $((PREVIOUS + BLOCKS_PER_BATCH)) > /dev/null 2>&1 || break
  NEW_ANCHOR=$PREVIOUS
done
echo "$NEW_ANCHOR"
```

Add it to `bridge.env`, for example `export NEW_ANCHOR=584`.

### 2. Deploy the new EVM oracle

Deploy it as in step 1 of [deploy a bridge](/bridge/operating/deploy-a-bridge#_1-deploy-the-evm-oracle), on the new anchor. The last command prints its address:

```bash
source ~/nimiq-bridge/bridge.env
NEW_ANCHOR_HEADER=0x$(./target/release/nimiq-rpc raw-macro-header "$NEW_ANCHOR" | tr -d '[:space:]')
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_RELAYER_KEY" --json \
  --create "$(jq -r .bytecode "$INTEROP/evm/oracle/artifacts/contracts/2_EvmOracle.sol/EvmOracle.json")" \
  "constructor(bytes,(uint16,uint16,uint16,uint16,uint16,uint16),uint32,uint16,uint8)" \
  "$NEW_ANCHOR_HEADER" "(371,3,11,51,243,307)" "$BLOCKS_PER_BATCH" "$BATCHES_PER_EPOCH" "$NIMIQ_NETWORK_ID" \
  | jq -r .contractAddress
```

Add it to `bridge.env`, for example `export NEW_EVM_ORACLE=0x5fc8d32690cc91d4c39d9d3abcbd16989f875707`.

### 3. Point PolygonBridge at it

From this transaction on, mints are proven against the new oracle, and burns are forwarded to it. The command prints `status 1 (success)`:

```bash
source ~/nimiq-bridge/bridge.env
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setOracle(address)" "$NEW_EVM_ORACLE"
```

### 4. Switch the relayer to the new oracle

In the relayer terminal, replace the old oracle's address in `relayer.toml` with the new one. The `grep` line must print the new address twice:

```bash
source ~/nimiq-bridge/bridge.env
sed "s/$EVM_ORACLE/$NEW_EVM_ORACLE/" ~/nimiq-bridge/relayer.toml > ~/nimiq-bridge/relayer.toml.new
mv ~/nimiq-bridge/relayer.toml.new ~/nimiq-bridge/relayer.toml
grep evm_oracle_address ~/nimiq-bridge/relayer.toml
```

Add `export EVM_ORACLE=` followed by the new address to `bridge.env`, so later commands use the new oracle. Then start the relayer with the same database:

```bash
cargo run --release --bin polygon-bridge-monitor -- --config ~/nimiq-bridge/relayer.toml
```

It warns once that the database records another EVM oracle, and continues:

```
WARN polygon_bridge_monitor::nimiq_to_evm: The database records the progress of another EVM oracle; this one's replaces it recorded_oracle=0x5fbdb2315678afecb367f032d93f642f64180aa3
```

In the commands terminal, check the relay as in [run a relayer](/bridge/operating/run-a-relayer#_4-check-the-relay). Once `backlog` is 0, the bridge is moving again.

## Keep the bridge working across a protocol upgrade

A hard fork raises the Nimiq protocol version, and every macro block header carries that version. Both EVM contracts look up what they need by version number, so each new version has to be registered with them. Registered before the fork, it keeps the bridge running through it:

- The EVM oracle reads a header with the [header format](/bridge/reference/evm/oracle-contract#header-formats) of its version. It rejects the first header of a version without one, with `EvmOracle: unsupported header version`, and the relayer submits nothing after it until the format is set.
- `PolygonBridge` reads a lock with the [lock parser](/bridge/reference/evm/bridge-contract#lock-parsers) of its version. Locks of a version without one revert with `No lock parser for the protocol version` until one is set.

When the fork keeps the macro block header format, nothing new is deployed. The next version takes the current version's format and lock parser. Run this once, before the fork:

```bash
source ~/nimiq-bridge/bridge.env
CURRENT=$(cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "latestVersion()(uint16)")
NEXT=$((CURRENT + 1))
FORMAT=$(cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "headerFormat(uint16)((uint16,uint16,uint16,uint16,uint16,uint16))" "$CURRENT")
PARSER=$(cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "lockParsers(uint16)(address)" "$CURRENT")
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_RELAYER_KEY" \
  "$EVM_ORACLE" "setHeaderFormat(uint16,(uint16,uint16,uint16,uint16,uint16,uint16))" "$NEXT" "$FORMAT"
cast send --rpc-url "$EVM_RPC_URL" --private-key "$EVM_DEPLOYER_KEY" \
  "$POLYGON_BRIDGE" "setLockParser(uint16,address)" "$NEXT" "$PARSER"
```

The first `cast send` registers the format with the EVM oracle, signed by its owner, the relayer key. The second registers the lock parser with `PolygonBridge`, signed by its owner, the deployer key. Each prints `status 1 (success)`. Check that the next version now has both:

```bash
source ~/nimiq-bridge/bridge.env
NEXT=$(( $(cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "latestVersion()(uint16)") + 1 ))
cast call --rpc-url "$EVM_RPC_URL" "$EVM_ORACLE" "headerFormat(uint16)((uint16,uint16,uint16,uint16,uint16,uint16))" "$NEXT"
cast call --rpc-url "$EVM_RPC_URL" "$POLYGON_BRIDGE" "lockParsers(uint16)(address)" "$NEXT"
```

```
(371, 3, 11, 51, 243, 307)
0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F
```

The format and parser must be the current version's, not an error and not the zero address. Until the fork, the bridge keeps running on the current version. `latestVersion` changes to the new version when the EVM oracle stores the fork's first header, and running the first set of commands after that would register the version after it.

If the fork comes first, the bridge pauses instead of breaking. The EVM oracle rejects the fork's first header, so `latestVersion` stays the same and the same commands still register the right version. The relayer then submits the rejected header again and continues, and locks under the new version can be minted once its parser is set.
