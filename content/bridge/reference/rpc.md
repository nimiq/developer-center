---
title: RPC methods
description: Node methods for reading oracle state and obtaining proofs.
icon: i-tabler-api
navigation:
  title: RPC Methods
  order: 4
---

# RPC methods

A Nimiq node answers these JSON-RPC methods for the bridge. They read oracle and bridge state, return the proofs a mint needs, and send the bridge and oracle transactions. Most have a `nimiq-rpc` command that calls them from the command line.

::callout{icon="i-tabler-info-circle" color="info"}
The [RPC methods list](/rpc/methods) covers every node method, generated from the node's OpenRPC document. The bridge methods are added to it when the bridge is released on mainnet. Until then, this page describes them in full.
::

## Conventions

### Requests and responses

A request names the method and passes its parameters as a list, in the order each method below gives them. Every parameter is required, including `fee` and `validityStartHeight`. A request with fewer parameters fails with `Invalid params`. The examples on this page send requests to a node at `127.0.0.1:8648`:

```bash
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getWindowSize","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"]}'
```

The value is in `result.data`. A failed request returns an `error` instead, with the reason in `error.data`:

```json
{ "jsonrpc": "2.0", "result": { "data": 100, "metadata": null }, "id": 1 }
```

The methods that read state or return proofs need a node that keeps the full blockchain. A light node answers them with an error. Long hex values in the examples are shortened with `…`.

### Addresses and amounts

Addresses are in their `NQ` form, with spaces. Amounts are in luna, 100,000 luna per NIM.

### Signing

The node signs the transactions it sends, so every wallet that signs one must be imported into the node and unlocked, with `importRawKey` and `unlockAccount`, or `nimiq-rpc import` and `nimiq-rpc unlock`.

Every `send…` method returns the transaction hash. It has a `create…` twin with the same parameters, for example `createBridgeDepositTransaction`, that returns the signed transaction, hex encoded, without sending it. In `nimiq-rpc`, the `--dry` option does the same.

### Fee and validity start height

Every transaction method ends with these two parameters:

- `fee` (number). The fee in luna. `nimiq-rpc` takes it as `--fee`, in NIM, and sends 0 if it is not set.
- `validityStartHeight` (number or string). The block from which the transaction is valid. A number is a block number. A string with a `+`, such as `"+0"`, is relative to the current block, and `"+0"` means the current block. `nimiq-rpc` takes it as `--validity-start-height` and sends `"+0"` if it is not set.

### nimiq-rpc

Each example shows the request with `curl` first, and the same call with `nimiq-rpc`, the command-line client the [operating guides](/bridge/operating/deploy-a-bridge) use, in the second tab. `nimiq-rpc` calls the same methods, with these differences:

| | JSON-RPC | `nimiq-rpc` |
| --- | --- | --- |
| Name | The method name, for example `sendBridgeDepositTransaction` | A command, for example `bridge-deposit` |
| Amounts | Luna | NIM |
| `fee`, `validityStartHeight` | Required | Optional, as `--fee` and `--validity-start-height` |
| Hashes for `sendUpdateOracleTransaction` | A list of objects with `algorithm` and `hash` | The algorithm once, then the hashes |
| Output | The JSON shown in each example | The same values in its own format, with addresses in raw hex |

`getBridgeNonce` has no `nimiq-rpc` command.

## Read an oracle

Anyone can call these. The terms are explained in [indices and slots](/bridge/reference/nimiq/oracle-contract#indices-and-slots).

### `getOwner`

Returns the address allowed to write to the oracle.

**Parameters**

- `contractAddress` (string). The oracle's address.

**Returns** a string, the owner's address.

**Errors**

- `Invalid address`. The address is not an oracle.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getOwner","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"]}'
```

```bash [nimiq-rpc]
nimiq-rpc get-owner "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95", "metadata": null }, "id": 1 }
```

### `getLatestIndex`

Returns the index of the last value written.

**Parameters**

- `contractAddress` (string). The oracle's address.

**Returns** a number, the latest index.

**Errors**

- `Oracle contract has no data`. The oracle has never been written.
- `Invalid address`. The address is not an oracle.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getLatestIndex","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"]}'
```

```bash [nimiq-rpc]
nimiq-rpc get-latest-index "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": 2, "metadata": null }, "id": 1 }
```

### `getEarliestIndex`

Returns the oldest index whose slot has not been written again.

**Parameters**

- `contractAddress` (string). The oracle's address.

**Returns** a number, the earliest index. It is 0 until a slot is written a second time.

**Errors**

- `Oracle contract has no data`. The oracle has never been written.
- `Invalid address`. The address is not an oracle.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getEarliestIndex","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"]}'
```

```bash [nimiq-rpc]
nimiq-rpc get-earliest-index "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": 0, "metadata": null }, "id": 1 }
```

### `getWindowSize`

Returns the number of slots, `hash_count`.

**Parameters**

- `contractAddress` (string). The oracle's address.

**Returns** a number, the number of slots. The example request is the one in [requests and responses](#requests-and-responses).

**Errors**

- `Invalid address`. The address is not an oracle.

### `getLatestData`

Returns the value of the slot written last.

**Parameters**

- `contractAddress` (string). The oracle's address.

**Returns** an object, the slot's value as `hash` and the oracle's hash algorithm as `algorithm`. A slot holds the hash of its previous value and the value written, so it differs from the value the update carried.

**Errors**

- `Oracle contract has no data`. The oracle has never been written.
- `Invalid address`. The address is not an oracle.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getLatestData","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"]}'
```

```bash [nimiq-rpc]
nimiq-rpc get-latest-data "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND"
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": { "algorithm": "blake2b", "hash": "a3491bae6189b0a97bd77ca00d545df6c8b982f7fa8a099310665a1f57a7fea1" }, "metadata": null }, "id": 1 }
```

### `getEntry`

Returns the current value of the slot an index was written to. It works for any index from 0 to the latest index, inside the window or not.

**Parameters**

- `contractAddress` (string). The oracle's address.
- `index` (number). The index.

**Returns** an object, in the same form as `getLatestData`.

**Errors**

- `Oracle contract has no data`. The oracle has never been written.
- `Index … has not been written yet`. The index is above the latest index.
- `Invalid address`. The address is not an oracle.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getEntry","params":["NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND",1]}'
```

```bash [nimiq-rpc]
nimiq-rpc get-entry "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND" 1
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": { "algorithm": "blake2b", "hash": "90ed8da52624aeeabdc7fd5b358f2c67b97002852e9e1040a698161455d52466" }, "metadata": null }, "id": 1 }
```

## Read a bridge

### `getBridgeNonce`

Returns the last [release nonce](/bridge/reference/nimiq/bridge-contract#release-nonces) used for an address. A burn back to that address takes this nonce plus one. It has no `nimiq-rpc` command.

**Parameters**

- `bridgeAddress` (string). The Nimiq bridge contract's address.
- `address` (string). The address the releases went to.

**Returns** a number, the last nonce, 0 if nothing has been released to the address. `metadata` holds the block it was read at.

**Example**

```bash
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getBridgeNonce","params":["NQ76 QCJ4 Y3TF 4KSH VBLQ AT99 5LKQ 8RR2 1BK0","NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95"]}'
```

```json
{ "jsonrpc": "2.0", "result": { "data": 1, "metadata": { "blockNumber": 500, "blockHash": "09966904b977105df78f539a301cb78d7dcedb3fdc8143943cd550fec60b761e" } }, "id": 1 }
```

## Prove a lock for a mint

A mint on the EVM network proves that the lock is in Nimiq's history. These three methods give everything it needs from Nimiq. The other two arguments of `mint`, the index and the ring segment, come from the [EVM oracle](/bridge/reference/evm/oracle-contract). The [mint step](/bridge/operating/run-a-relayer#mint) of run a relayer builds all of them.

### `getMacroBlockAfter`

Returns the next macro block after a block. For a mint, it gives the macro block to prove the lock against.

**Parameters**

- `blockNumber` (number). The lock's block number.

**Returns** a number, the macro block's number.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getMacroBlockAfter","params":[299]}'
```

```bash [nimiq-rpc]
nimiq-rpc macro-block-after 299
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": 328, "metadata": null }, "id": 1 }
```

### `getTransactionHistoryProof`

Returns a transaction's history record and its proof against a macro block. The macro block must be in the same epoch as the transaction, and the first one after it always is. The node needs `index_history` enabled and must still hold that epoch. Once fetched, the proof stays valid, so it can be saved and used later.

**Parameters**

- `transactionHash` (string). The lock's transaction hash.
- `macroBlockNumber` (number). The macro block from `getMacroBlockAfter`.

**Returns** an object:

| Field | Meaning | `mint` argument |
| --- | --- | --- |
| `historicTransaction` | The lock's history record, hex encoded | `historicTx`, with `0x` in front |
| `mmrSize`, `leafIndex`, `nodes` | The position of the record in the epoch's history tree, and the hashes from it to the root | `mmrProof`, as the tuple `(mmrSize, leafIndex, [nodes])`, each node with `0x` in front |

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getTransactionHistoryProof","params":["d1e97c4ae2fc4fe619551147c510886bfe113564d42e0482c27deeb373fa5b55",328]}'
```

```bash [nimiq-rpc]
nimiq-rpc transaction-history-proof d1e97c4ae2fc4fe619551147c510886bfe113564d42e0482c27deeb373fa5b55 328
```

::

```json
{
  "jsonrpc": "2.0",
  "result": {
    "data": {
      "mmrSize": 16,
      "leafIndex": 7,
      "nodes": [
        "fed1cb35fed41019e6bf85fcbfb22dffc48b94f5c3c2da9ab191f7f090e01931",
        "0c941cb48ff2603c4690b3840e8c094b385e99e5fa7ef37cbfdeb4db01b380d9",
        "a47a2d5afd3b1a0ed06d8a603d454a43aba40d7c285fea012ee195632fedd1ef",
        "6bfcf9ba0fb0ab480473c65b50a5c1fbeffc155c8a3cfa6ef6ea54cd151f237d"
      ],
      "historicTransaction": "07ab02a8c187c7a034…46f00"
    },
    "metadata": null
  },
  "id": 1
}
```

### `getRawMacroHeader`

Returns a macro block's header. Its Blake2b-256 hash is the block hash. For a mint, it is the `header` argument, with `0x` in front.

**Parameters**

- `blockNumber` (number). The macro block's number.

**Returns** a string, the header, hex encoded. It starts with the network id and the protocol version.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"getRawMacroHeader","params":[328]}'
```

```bash [nimiq-rpc]
nimiq-rpc raw-macro-header 328
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "07000300000148000000000000…", "metadata": null }, "id": 1 }
```

## Send bridge transactions

### `sendNewBridgeTransaction`

Creates a [bridge contract](/bridge/reference/nimiq/bridge-contract#creating-a-bridge-contract).

**Parameters**

- `wallet` (string). The unlocked wallet that sends the transaction and pays the deposit.
- `owner` (string). The contract's owner.
- `oracleAddress` (string). The Nimiq oracle every release is proven against.
- `sourceChainId` (number). The EVM chain id, 80002 for Amoy.
- `chainConfig` (string). The [chain configuration](/bridge/reference/nimiq/chain-config), hex encoded.
- `value` (number). The deposit in luna.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash. The new contract's address is the transaction's recipient.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendNewBridgeTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND",80002,"82f10401…c318bc",1000000,0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc create-bridge "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" \
  "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND" 80002 82f10401…c318bc 10
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "3aa55c3a90fb7ea6f0c17ce10161cdd1c541a3e5a97e90390bfe3aaa484f0de2", "metadata": null }, "id": 1 }
```

### `sendBridgeDepositTransaction`

Locks NIM in a bridge contract.

**Parameters**

- `wallet` (string). The unlocked wallet that locks the NIM.
- `bridgeAddress` (string). The Nimiq bridge contract.
- `data` (string). The 56 bytes, hex encoded, that name the destination, as in [lock and mint](/bridge/how-it-works/lock-and-mint).
- `value` (number). The amount to lock, in luna.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendBridgeDepositTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ76 QCJ4 Y3TF 4KSH VBLQ AT99 5LKQ 8RR2 1BK0","00000000000000013c44…c318bc",100000,0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc bridge-deposit "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ76 QCJ4 Y3TF 4KSH VBLQ AT99 5LKQ 8RR2 1BK0" \
  00000000000000013c44…c318bc 1
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "d1e97c4ae2fc4fe619551147c510886bfe113564d42e0482c27deeb373fa5b55", "metadata": null }, "id": 1 }
```

### `sendBridgeReleaseTransaction`

Releases NIM from a bridge contract against a burn on the EVM network.

**Parameters**

- `targetWallet` (string). The burn's target. It signs the release and must be unlocked.
- `bridgeAddress` (string). The Nimiq bridge contract.
- `burnTransactionData` (string). The burn record, from the relayer's proof.
- `merkleProof` (string). The [release proof](#build-a-release-proof), hex encoded.
- `oracleStateIndex` (number). The Nimiq oracle index the proof is checked against, from the relayer's proof.
- `value` (number). The amount released, in luna. `value` plus `fee` must equal the burned amount.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendBridgeReleaseTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ76 QCJ4 Y3TF 4KSH VBLQ AT99 5LKQ 8RR2 1BK0","8464135c8f25…7220ae60","0301018001000…000",0,50000,0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc bridge-release "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ76 QCJ4 Y3TF 4KSH VBLQ AT99 5LKQ 8RR2 1BK0" \
  8464135c8f25…7220ae60 0301018001000…000 0 0.5
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "ce5476aa8057cef78bbb9d3787abe4bf99484c1684a650adbf03f0c1487242c1", "metadata": null }, "id": 1 }
```

## Build a release proof

The relayer serves the proof of a burn at its `/proof/:tx_hash` endpoint, described in the [relayer reference](/bridge/reference/relayer#get-prooftx_hash). Its answer has one entry per burn in the EVM transaction:

| Field | Use |
| --- | --- |
| `record.record` | `burnTransactionData` |
| `oracle_index` | `oracleStateIndex` |
| `merkle_path` | The path from the record to the oracle value, as a list of `{"hash", "left"}` nodes |

`merkleProof` takes `merkle_path` as a serialized `AnyMerkleProof`, hex encoded:

| Bytes | Content |
| --- | --- |
| 1 | `03`, a Blake2b Merkle path |
| 1 | The number of nodes |
| 1 | The number of bytes of left flags that follow |
| Varies | The left flags, one bit per node, the first node in the highest bit |
| 1 | The number of hashes, equal to the number of nodes |
| 32 per hash | The node hashes, in order |

The counts take one byte each for paths of up to 127 nodes. The [release step](/bridge/operating/run-a-relayer#release) of run a relayer converts the relayer's answer with `jq`.

## Send oracle transactions

The transactions are described in the [oracle contract](/bridge/reference/nimiq/oracle-contract#owner-transactions) reference.

### `sendNewOracleTransaction`

Creates an oracle contract.

**Parameters**

- `wallet` (string). The unlocked wallet that sends the transaction and pays the deposit.
- `owner` (string). The oracle's owner.
- `hashCount` (number). The number of slots. It cannot be changed later.
- `hashAlgorithm` (string). `"blake2b"`, `"sha256"`, `"sha512"` or `"keccak256"`. A bridge's oracle uses `"blake2b"`.
- `value` (number). The deposit in luna.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash. The new oracle's address is the transaction's recipient.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendNewOracleTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95",100,"blake2b",1000,0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc create-oracle "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" 100 blake2b 0.01
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "404e50d2ca2d0c786967510c5f1aa8af999112593d07a55734c6f85b5b9b4756", "metadata": null }, "id": 1 }
```

### `sendUpdateOracleTransaction`

Writes values to an oracle. The relayer sends every update itself.

**Parameters**

- `senderWallet` (string). The unlocked wallet that sends the transaction and pays the fee.
- `ownerWallet` (string). The oracle's owner, which signs the update. It must be unlocked.
- `oracleAddress` (string). The oracle.
- `hashes` (array). The values to write, each an object with `algorithm` and `hash`. `nimiq-rpc` takes the algorithm once and the hashes after it instead.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendUpdateOracleTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND",[{"algorithm":"blake2b","hash":"0000…0001"}],0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc update-oracle "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" \
  "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND" blake2b 0000…0001
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "fed8927f7a22e6005546db7b56c35eedd9064c4e569720eb0790f6b6613ed850", "metadata": null }, "id": 1 }
```

### `sendChangeOracleOwnerTransaction`

Transfers an oracle to a new owner, in one step.

**Parameters**

- `senderWallet` (string). The unlocked wallet that sends the transaction and pays the fee.
- `ownerWallet` (string). The current owner, which signs the change. It must be unlocked.
- `oracleAddress` (string). The oracle.
- `newOwner` (string). The new owner's address.
- `fee`, `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendChangeOracleOwnerTransaction","params":["NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95","NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND","NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG",0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc change-oracle-owner "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" "NQ48 72JA AYV3 FGC9 TLBQ 1KVJ J59L 6D70 2E95" \
  "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND" "NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG"
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "83c101f8a8bdbd70a2ecfcfd6f243eb7eaea22b8e76a2bfc5dc67b651c9ff5ce", "metadata": null }, "id": 1 }
```

### `sendDeleteOracleTransaction`

Withdraws an oracle's whole balance, which deletes the oracle. [Operator actions](/bridge/operating/operator-actions#delete-the-nimiq-oracle) explains the consequences.

**Parameters**

- `ownerWallet` (string). The owner, which signs the withdrawal. It must be unlocked.
- `oracleAddress` (string). The oracle.
- `recipient` (string). The address that receives the balance.
- `value` (number). The whole balance, in luna.
- `fee` (number). Must be 0.
- `validityStartHeight`. As for [every transaction method](#fee-and-validity-start-height).

**Returns** a string, the transaction hash.

**Errors**

- `Value: must equal the oracle balance`. `value` is not the whole balance.
- `Fee: withdrawing an oracle deposit requires a zero fee`. `fee` is not 0.

**Example**

::code-group

```bash [curl]
curl -s http://127.0.0.1:8648 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"sendDeleteOracleTransaction","params":["NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG","NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND","NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG",1000,0,"+0"]}'
```

```bash [nimiq-rpc]
nimiq-rpc delete-oracle "NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG" "NQ40 EB5T 7FXK TMAJ T5UN KUYG USF9 V3V7 NSND" \
  "NQ79 RTPX E226 2DT0 XSTG DFK5 G7CM S7A8 KCUG" 0.01
```

::

```json
{ "jsonrpc": "2.0", "result": { "data": "9661d88b742af1606a818960159ece529aedb720fb773258286ef165279a3888", "metadata": null }, "id": 1 }
```
