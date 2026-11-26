---
title: Oracle verifier
description: Check both oracles and the wrapped supply against public chain data.
icon: i-tabler-shield-check
navigation:
  title: Oracle verifier
  order: 5
---

# Oracle verifier

Both oracle owners are trusted. Nothing on either network stops an owner from attesting a value that is not real. What makes that trust checkable is that every attested value can be recomputed from public data, as described in [what anyone can verify](/bridge/security-and-trust#what-anyone-can-verify). `oracle-verifier` is the program that does it. It reads a Nimiq node and an EVM node, never the relayer, holds no keys and sends no transactions.

The bridge operator runs it to watch their own deployment. Anyone else can run it with the same steps to check a bridge they do not operate. Why the owners have to be trusted is explained in [oracles](/bridge/how-it-works/oracles).

## What it checks

Each round runs every check below. A check that cannot complete, for example because a node does not answer, does not stop the others.

| Check | What it compares | Alarm when |
| --- | --- | --- |
| Nimiq oracle | Every value written to the Nimiq oracle, read from its update transactions, with the record tree rebuilt from the EVM oracle's `DataForwarded` logs | A written root is the root of no prefix of the real records, or the updates do not add up to the slots the oracle holds |
| EVM oracle headers | Every block hash the EVM oracle stores with the Nimiq block at that height | A stored hash is not the Nimiq block's hash, a stored height is past the Nimiq chain, or the oracle stores headers of another network, batch length or epoch length than the node's. In that last case no header is compared |
| EVM oracle slots | The slots the EVM oracle holds with its `Submitted` logs, folded again | They differ |
| Bridge wiring | The oracle, Nimiq bridge, network id and decimals `PolygonBridge` is set to | `PolygonBridge` mints against another oracle, another Nimiq bridge or another network, or wNIM does not have 5 decimals |
| Lock parsers | The protocol versions the EVM oracle accepts with the lock parsers `PolygonBridge` has | A version the oracle accepts has no lock parser, so its locks cannot be minted |
| Supply | wNIM in circulation with the NIM the Nimiq bridge contract holds | More wNIM exists than the bridge contract holds |
| Mints | Every `Minted` log with the lock its leaf names | A mint has no lock behind it, pays another value, destination or nonce than its lock, or a lock is minted twice |
| Locks | Every lock with the mints | A lock is at or before the EVM oracle's anchor and can never be minted |

Some findings are reported as warnings, without an alarm:

- A Nimiq oracle root that covers fewer records than an earlier one. Every record it covers is real. It is what a [second relayer](/bridge/reference/relayer#running-more-than-one) lagging behind the first writes, or a relayer that lost records.
- A lock whose nonce its destination has already minted, as when two locks carry the same nonce. Its NIM stays locked.
- A protocol version whose header format is set on the EVM oracle but not active yet, and that has no lock parser. It needs one before it activates, as in [keep the bridge working across a protocol upgrade](/bridge/operating/operator-actions#keep-the-bridge-working-across-a-protocol-upgrade).
- A lock the verifier cannot judge, because the node cannot prove it and its destination has already minted that nonce.
- A mint whose lock the verifier cannot identify, because the node cannot prove that lock.

## Before you start

### A Nimiq history node

The verifier needs a Nimiq node with these two lines in the `[consensus]` section of its `client.toml`:

```toml
sync_mode = "history"
index_history = true
```

It reads every update ever sent to the Nimiq oracle and every lock ever sent to the bridge contract, back to their creation. A history node keeps every transaction. A full node, such as the one in [deploy a bridge](/bridge/operating/deploy-a-bridge), drops the transactions of epochs older than `max_epochs_stored`. Once the oracle's first updates are older than that, the Nimiq oracle check cannot complete, with an error that the node's history holds fewer values than the oracle has written, and the mints of older locks are not judged. The other checks still run.

Every node, a history node included, also drops the blocks of epochs older than `max_epochs_stored`, except the election blocks. The default is 1. The verifier compares a stored EVM oracle header only with a block the node still holds, so a higher `max_epochs_stored` in the same section lets it compare more headers, at the cost of disk space.

### An EVM RPC endpoint

The same kind of endpoint the relayer uses. The verifier reads the logs of the EVM oracle and `PolygonBridge` from their deployment on, in ranges of 1,000 blocks, and the contracts' state 64 blocks behind the newest block. It does not need an archive node.

### The bridge's addresses

The verifier needs the addresses of the four contracts it checks, and the EVM block the bridge was deployed at:

- the Nimiq oracle and the Nimiq bridge contract;
- the EVM oracle and `PolygonBridge`;
- an EVM block at or before the deployment of both EVM contracts.

The operator has all of them in `~/nimiq-bridge/bridge.env` from [deploy a bridge](/bridge/operating/deploy-a-bridge).

### Build the verifier

The verifier is in the relayer's repository, `polygon-bridge-monitor`, and the relayer's build in [run a relayer](/bridge/operating/run-a-relayer#_1-build-the-relayer) already builds it.

Anyone who has not built the relayer needs [Rust](https://rustup.rs) and [Git](https://git-scm.com/downloads). Clone the [interoperability repository](https://github.com/nimiq/interoperability) and build the verifier:

```bash
mkdir -p ~/nimiq-bridge
cd ~/nimiq-bridge
git clone https://github.com/nimiq/interoperability.git
cd interoperability/polygon-bridge-monitor
cargo build --release --bin oracle-verifier
```

## 1. Write the configuration

The verifier reads a TOML file in the relayer's format, but needs only the endpoints and addresses, never a key. Give it a file of its own rather than the relayer's `relayer.toml`, which holds the relayer's keys and points at a full node.

The operator adds the history node's WebSocket endpoint to `bridge.env`, for example `export NIMIQ_HISTORY_WS=ws://127.0.0.1:8648/ws`, then writes the file from it:

```bash
source ~/nimiq-bridge/bridge.env
cat > ~/nimiq-bridge/verifier.toml <<EOF
nimiq_rpc_url = "$NIMIQ_HISTORY_WS"
evm_rpc_url = "$EVM_RPC_URL"
nimiq_oracle_address = "$NIMIQ_ORACLE"
evm_bridge_address = "$POLYGON_BRIDGE"

[oracle_verifier]
nimiq_bridge_address = "$NIMIQ_BRIDGE"
evm_oracle_address = "$EVM_ORACLE"
burns_from_block = $EVM_START_BLOCK
EOF
cat ~/nimiq-bridge/verifier.toml
```

Every value must be filled in. Anyone else writes the same file with a text editor, with the values of the bridge they check.

| Setting | Meaning |
| --- | --- |
| `nimiq_rpc_url` | The history node's WebSocket endpoint |
| `evm_rpc_url` | The EVM network's RPC endpoint |
| `nimiq_oracle_address` | The Nimiq oracle, in its `NQ` form |
| `evm_bridge_address` | `PolygonBridge` |
| `oracle_verifier.nimiq_bridge_address` | The Nimiq bridge contract, in its `NQ` form |
| `oracle_verifier.evm_oracle_address` | The EVM oracle |
| `oracle_verifier.burns_from_block` | The EVM block the verifier starts reading logs at. It has to be at or before the deployment of both EVM contracts. A later block makes the verifier miss logs, and it then raises alarms on honest values |

Two optional settings in `[oracle_verifier]` change how it runs: `watch_interval`, in [run it regularly](#_3-run-it-regularly), and `reviewed_nimiq_oracle_indices`, in [reviewed findings](#reviewed-findings).

## 2. Run it

Run one round:

```bash
~/nimiq-bridge/interoperability/polygon-bridge-monitor/target/release/oracle-verifier --config ~/nimiq-bridge/verifier.toml
```

It logs each check as it goes and exits when the round ends. The exit code says how the round went:

| Exit code | Meaning |
| --- | --- |
| `0` | Every check completed and found nothing |
| `1` | A check found something that needs a person to look at it. The log has an `ALARM:` line for it |
| `2` | A check could not complete, for example because a node did not answer, and none found anything. Also when the configuration file cannot be read or `evm_rpc_url` is not a valid URL, before any check runs |

An alarm outranks a check that could not complete, so a round with both exits with `1`.

## 3. Run it regularly

Run it every few hours. A stored EVM oracle header is compared only while the Nimiq node still holds its block, which with the default `max_epochs_stored` is at least one epoch, about 12 hours on mainnet. A round every few hours compares every header while it can be compared.

Either set `watch_interval` in `[oracle_verifier]` to the seconds between rounds, which keeps the verifier running, or leave it unset and start a round from cron or a process supervisor, which can act on the exit code.

## Read the results

### A clean round

A round with nothing to report logs one line per check and ends with `All checks passed`. On a bridge with one lock and one burn, it reads:

```
INFO oracle_verifier: Re-deriving Nimiq oracle roots from Polygon logs observed_records=1 oracle_writes=1
INFO oracle_verifier: Nimiq oracle updates replay to its slots
INFO oracle_verifier: Nimiq oracle root reproduced index=0 records_covered=1
INFO oracle_verifier: Wrapped supply is fully backed (I1 holds) supply_luna=50000 bridge_balance=1050000 headroom_luna=1000000
INFO oracle_verifier: Compared the EVM oracle's stored headers with the Nimiq chain stored_headers=10 checked=10 unchecked=0
INFO oracle_verifier: Looked up every bridge lock's mint by its leaf locks=1 mints=1 pending=0 nonce_used=0
INFO oracle_verifier: Paired the bridge's mints with the locks their leaves name mints=1 unverifiable=0 alarms=0 complete=true
INFO oracle_verifier: All checks passed
```

Each log line starts with a timestamp, left out here.

### An alarm

Each alarm is logged as an `ERROR` line that starts with `ALARM:`, says what does not match, and ends with the index, height or transaction it is about. The round then ends with `Verification found something that needs a human`. A root written to the Nimiq oracle that no burn produced, at index 1, gives:

```
ERROR oracle_verifier: ALARM: no prefix of the observed records reproduces this attested root. Either it was fabricated, this observer is missing records, or the relayer committed to an order other than the source chain's. index=1
```

### Reviewed findings

The verifier checks every value on every round, so a finding raises its alarm again each round. Once someone has looked into a Nimiq oracle finding, add its index to `reviewed_nimiq_oracle_indices` in `[oracle_verifier]`, for example `reviewed_nimiq_oracle_indices = [1]`. A listed index is still reported, as a warning, but no longer raises an alarm, so a new finding stands out:

```
WARN oracle_verifier: Reviewed Nimiq oracle finding, not alarming verdict=Unexplained { index: 1 }
```

### Headers not compared

The verifier counts a stored header whose block the Nimiq node no longer holds as unchecked, and logs how many there are:

```
INFO oracle_verifier: Compared the EVM oracle's stored headers with the Nimiq chain stored_headers=10 checked=4 unchecked=6
INFO oracle_verifier: Some stored headers are not compared: the Nimiq node no longer holds their blocks. A node with a larger max_epochs_stored compares more. unchecked=6
```

This is no alarm. Headers stored before the node's oldest kept block stay unchecked, and a higher [`max_epochs_stored`](#a-nimiq-history-node) on the node keeps the count down from then on.
