---
title: Relayer
description: What the relayer does, what it holds, and what it exposes.
icon: i-tabler-transfer
navigation:
  title: Relayer
  order: 3
---

# Relayer

The relayer is `polygon-bridge-monitor`, one process that runs two workers and an HTTP API. One worker carries Nimiq macro block headers to the EVM oracle, and the other carries burn records from the EVM oracle to the Nimiq oracle. The relayer never mints or releases, and its keys cannot redeem a transfer. It only writes the values that mints and releases are proven against. Why that makes it a trusted role, and what it could do if dishonest, is explained in [oracles](/bridge/how-it-works/oracles).

Running one is covered in [run a relayer](/bridge/operating/run-a-relayer).

## The two directions

### Nimiq to EVM: headers

The EVM oracle accepts only the macro block after the last one it holds. Every `polling_interval` seconds, the worker reads the height the EVM oracle holds and the node's newest macro block, fetches every newer header with `getRawMacroHeader`, and submits them in order. One header goes with `submit`. A backlog, after a stop, goes with `submitMany` in batches of up to `max_headers_per_submit`.

- A rejected submission stores nothing, so the next round retries from the same height. When the oracle rejects one header in a batch, the headers before it still go in.
- A submission not mined within two minutes is sent again, with a higher fee if the network's fees have risen past it.
- On startup, the worker checks that the EVM oracle stores headers of the node's network, with the node's batch and epoch lengths. On a mismatch it stops.

The node must still hold every macro block the oracle has yet to receive. A node keeps them for `max_epochs_stored` epochs, about 12 hours each on mainnet, so that setting decides how long the relayer can be stopped and still catch up.

### EVM to Nimiq: burn records

Every `polling_interval` seconds, the worker reads the EVM oracle's `DataForwarded` logs up to `confirmation_blocks` blocks behind the tip, so that a reorganization of the EVM network cannot remove a burn after its root was published. For each log it:

1. Stores the record, `source ++ data`, once per transaction hash and log index.
2. Rebuilds the record tree over every stored record, in block-then-log order, with `blake2b(blake2b(record))` leaves.
3. Writes a changed root to the Nimiq oracle in an update signed by the oracle owner's key.
4. Waits until a macro block has made the update final, and records the root with its oracle index.

An update that is not yet in a block is sent again every 30 seconds, up to `oracle_transaction_retry_count` times. The wait for a macro block is bounded at 10 minutes per allowed attempt. After that the worker retries the same EVM blocks, and first checks whether the root landed anyway.

## Keys

| Key | Setting | Owns | Signs and pays for |
| --- | --- | --- | --- |
| Nimiq oracle owner key | `polygon_to_nimiq.nimiq_oracle_private_key` | The Nimiq oracle | Every root update. Updates are sent with a fee of 0 |
| EVM oracle owner key | `nimiq_to_evm.evm_private_key` | The EVM oracle | Every header submission, and its gas |

Both are stored in the configuration file in plain text. The relayer keeps them out of its logs. How the operator holds and changes them is covered in [operator actions](/bridge/operating/operator-actions#how-the-keys-are-held).

## Configuration

The relayer reads one TOML file, passed with `--config`. The settings at the top level are shared by both workers.

| Setting | Default | Meaning |
| --- | --- | --- |
| `database_path` | `./bridge-monitor-db` | The folder of the relayer's [database](#state). Created if it does not exist |
| `evm_rpc_url` | Required | The EVM network's RPC endpoint |
| `nimiq_rpc_url` | Required | The Nimiq node's RPC endpoint |
| `evm_bridge_address` | None | `PolygonBridge`. Read by the oracle verifier, not by the workers |
| `nimiq_oracle_address` | Required by the burn direction | The Nimiq oracle, in its `NQ` form |
| `log_level` | `info` | The log filter, for example `debug` or `polygon_bridge_monitor=debug,hyper=info` |
| `api_bind_address` | `0.0.0.0` | The address the [API](#api) listens on |
| `api_port` | `8080` | The port the API listens on |
| `api_username`, `api_password` | None | Basic authentication for the API. Both must be set to turn it on |
| `api_cors_origins` | Any origin | The origins allowed to call the API from a browser, comma separated |

### `[polygon_to_nimiq]`

The burn direction.

| Setting | Default | Meaning |
| --- | --- | --- |
| `enabled` | `true` | Whether this worker runs |
| `nimiq_oracle_private_key` | Required | The Nimiq oracle owner's private key |
| `network` | Required | The Nimiq network, for example `test-albatross` |
| `evm_oracle_address` | `nimiq_to_evm.evm_oracle_address` | The EVM oracle whose `DataForwarded` logs are read |
| `start_block` | The latest block | The EVM block to start reading at on the first run. Ignored once the database holds a cursor |
| `polling_interval` | `12` | Seconds between checks for new EVM blocks |
| `confirmation_blocks` | `128` | EVM blocks to wait before a burn is treated as final and its root is published. Higher is safer and makes releases slower |
| `oracle_transaction_retry_count` | `1` | How many times an update not yet in a block is sent again |

### `[nimiq_to_evm]`

The header direction.

| Setting | Default | Meaning |
| --- | --- | --- |
| `enabled` | `false` | Whether this worker runs. A bridge needs it, so set it to `true` |
| `evm_oracle_address` | Required | The EVM oracle headers are submitted to |
| `evm_private_key` | Required | The EVM oracle owner's private key |
| `polling_interval` | `5` | Seconds between checks for new macro blocks |
| `max_headers_per_submit` | `32` | The most headers one `submitMany` carries when catching up, at most 128 |

### `[oracle_verifier]`

Settings of the [oracle verifier](/bridge/operating/oracle-verifier), a separate auditing tool that reads the same file. The relayer does not use them.

## State

The database keeps everything the relayer needs to resume after a restart.

| Table | Holds |
| --- | --- |
| `ForwardedRecords` | Every record read from the EVM oracle, with its transaction hash, block and log index |
| `MerkleRoot` | Every root a macro block has made final, by oracle index, with the number of records it covers and the slot value it overwrote |
| `EvmBlockCursor` | The last EVM block fully processed |
| `EvmFinalityAnchor` | That block's hash, read again later to detect a reorganization deeper than `confirmation_blocks` |
| `NimiqHeaderRelayProgress` | The header direction's progress and the oracle and network it checked |
| `NimiqHeaderSubmissions` | Header submissions not yet seen mined, so a restarted relayer recognizes its own |

A stopped relayer started again with the same database resumes where it stopped, and `start_block` is ignored:

```
INFO polygon_bridge_monitor::polygon_to_nimiq: Resuming Polygon->Nimiq monitoring from persisted cursor resume_block=76 blocks_behind_tip=157
```

Deleting the database makes it start again from `start_block`.

## API

The API reads the database and serves whichever workers run. With `api_username` and `api_password` set, every request needs Basic authentication. A request without it, or with wrong credentials, gets `401`:

```bash
curl -u operator:secret http://127.0.0.1:8080/root
```

Browsers send a preflight request without credentials before calling an API that needs them. With authentication on, the relayer answers that preflight with `401` too, so a browser page cannot call it directly.

### `GET /relay-status`

The header direction's progress as of its last check.

| Field | Meaning |
| --- | --- |
| `submitted_height` | The last macro block the EVM oracle holds |
| `nimiq_macro_height` | The node's newest macro block |
| `backlog` | The headers between the two, not yet submitted |

All three are `null` before the first check.

```json
{ "backlog": 0, "nimiq_macro_height": 264, "submitted_height": 264 }
```

### `GET /root`

The newest root published to the Nimiq oracle.

| Field | Meaning |
| --- | --- |
| `merkle_root` | The root. `null` before the first one |
| `record_count` | The number of records it covers |
| `oracle_index` | The Nimiq oracle index it was written at. `null` before the first one |

```json
{ "merkle_root": "36a71fea8af1b5ef79220f7fea9e3500d10bf711fe9791b1fc81d66232a3a14d", "record_count": 1, "oracle_index": 0 }
```

### `GET /proof/:tx_hash`

The release proofs for the burns in an EVM transaction, one entry per log, against the newest published root. `tx_hash` takes the hash with or without `0x`. Until a published root covers the transaction, which takes at least `confirmation_blocks` EVM blocks after the burn, it returns `404`. The message is `Forwarded record not found` while the relayer has not stored the burn yet, and `Forwarded record not yet published to the oracle` once it has stored it but no published root covers it.

| Field | Meaning |
| --- | --- |
| `record.record` | The record, `source ++ data`, hex encoded. A release's `burnTransactionData` |
| `record.leaf` | `blake2b(blake2b(record))` |
| `record.tx_hash`, `record.block_number`, `record.log_index` | Where the record was emitted |
| `merkle_path` | The path from the leaf to the current value of the oracle slot, as `{"hash", "left"}` nodes. The tree levels come first, then the slot's previous value |
| `merkle_root` | The root the path passes through |
| `oracle_index` | The Nimiq oracle index the release is proven against |

```json
[
  {
    "record": {
      "tx_hash": "839cbeecfe1eacce8398fc595b1f85732522fc4cface2666ac1b49153ad0fd8d",
      "block_number": 74,
      "log_index": 1,
      "record": "8464135c8f25da09e49bc8782676a84730c318bc1f61cbda…6396e91af",
      "leaf": "36a71fea8af1b5ef79220f7fea9e3500d10bf711fe9791b1fc81d66232a3a14d"
    },
    "merkle_path": [
      { "hash": "0000000000000000000000000000000000000000000000000000000000000000", "left": true }
    ],
    "merkle_root": "36a71fea8af1b5ef79220f7fea9e3500d10bf711fe9791b1fc81d66232a3a14d",
    "oracle_index": 0
  }
]
```

How the proof becomes the release's `merkleProof` is described in [build a release proof](/bridge/reference/rpc#build-a-release-proof).

## When it stops

The workers retry whatever retrying can fix: an unreachable node, a lost connection, a rejected or unmined transaction. A worker stops, and the relayer exits with code 1, when:

- The EVM oracle stores headers of another network, or other batch or epoch lengths, than the node.
- The database was written for another chain.
- The configured EVM oracle address holds no EVM oracle.
- The EVM oracle owner key does not own the EVM oracle, or ownership moved while it ran.
- The node no longer holds the next macro block the EVM oracle needs.

The log names the reason, for example:

```
ERROR polygon_bridge_monitor: Exiting error="The Nimiq->EVM worker stopped: The configured EVM oracle address holds no EvmOracle: 0x8464135c8f25da09e49bc8782676a84730c318bc does not answer the oracle's network ID: Contract call reverted with data: 0x"
```

Because it exits instead of waiting, run it under a supervisor that restarts it or reports the exit.

## Running more than one

A bridge needs one relayer. A second one with the same keys cannot cause a wrong release: every root either one writes covers real records, and a release is accepted once per nonce. It does waste resources. Most roots land twice, so the Nimiq oracle's slots are reused up to twice as fast, and the two relayers compete for the EVM oracle owner's transaction nonces, so the loser's submissions fail at the owner's expense.
