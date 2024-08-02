# PoS Migration Guide for JSON-RPC

## 1. General

- **`params` property in requests is now required**<br>
  While in PoW the `params` property in requests could be left out for requests that didn't take any parameters (or only optional ones), this is no longer the case in PoS. At least an empty array (`[]`) must now be passed.

- **Most params are now required**<br>
  In PoW many parameters could be left out, because they had a default in the server. In PoS most parameters are now required. For non-required parameters, `null` must still be passed in their place to use the server's default.

- **The result of a JSON-RPC response is in `result.data`**<br>
  In PoS, every RPC response contains `result: { data, metadata }`. The actual result of the request is in `result.data`, while `result.metadata` contains information about the current chainstate (only for chainstate-related requests, otherwise this is `null`).

- **Timestamps are now in milliseconds**<br>
  All timestamps (e.g. for blocks and transactions) are now specified in milliseconds since the Unix epoch.

## 2. Network

### 2.1 Network methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| `peerCount` | Now called `getPeerCount`. |
| ~~`syncing`~~ | No equivalent method. |
| `consensus` | Use `isConsensusEstablished` instead, which returns `true` when the node has consensus, `false` otherwise. |
| `peerList` | Now called `getPeerList`. Only returns an array of IDs (`string[]`) instead of a list of peer info objects. |
| ~~`peerState`~~ | No equivalent method. |

## 3. Transactions

### 3.1 Plain transaction objects

- `from` & `to` are now the user-friendly addresses. The fields ~~`fromAddress`~~ & ~~`toAddress`~~ have been removed.
- `data` has been renamed to `recipientData`.
- `timestamp` is now in milliseconds.
- ~~`blockHash`~~ has been removed.
- ~~`transactionIndex`~~ has been removed.

- The following fields have been added:
  ```ts
  {
    fromType: number
    toType: number
    senderData: string
    validityStartHeight: number
    proof: string
    networkId: number
    executionResult: boolean
  }
  ```

### 3.2 Transaction methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| `sendRawTransaction` | This method doesn't push to the local mempool, it only broadcasts the transaction to all peers. To push the transaction to the local mempool (if available), use `pushTransaction`. |
| `createRawTransaction` | Use separate transaction creation methods on the `Consensus` resolver instead. (TODO: link) |
| `sendTransaction` | Use separate transaction sending methods on the `Consensus` resolver instad. (TODO: link) |
| `getRawTransactionInfo` | No longer has the fields ~~`valid`~~ and ~~`inMempool`~~. See the plain transaction object changes above. |
| ~~`getTransactionByBlockHashAndIndex`~~ | No equivalent method. |
| ~~`getTransactionByBlockNumberAndIndex`~~ | No equivalent method. |
| `getTransactionByHash` | See the plain transaction object changes above. Transactions in the mempool are not discovered. To search in the mempool (if available), use `getTransactionFromMempool`. |
| ~~`getTransactionReceipt`~~ | No equivalent method. |
| `getTransactionsByAddress` | The `max` parameter's maximum value is `65535` (this might get increased in the future). See the plain transaction object changes above. There is also `getTransactionHashesByAddress` to only receive a list of transaction hashes. |

## 4. Mempool

Mempool methods are only available when the node has a mempool.

### 4.1 Mempool methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| `mempoolContent` | No change. See the plain transaction object changes above for when using `includeTransactions: true`. |
| `mempool` | No change |
| `minFeePerByte` | Now called `getMinFeePerByte` |

## 5. Miner

All mining-related methods have been removed as they are no longer relevant.

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| ~~`mining`~~ | Removed |
| ~~`hashrate`~~ | Removed |
| ~~`minerThreads`~~ | Removed |
| ~~`minerAddress`~~ | Removed |
| ~~`pool`~~ | Removed |
| ~~`poolConnectionState`~~ | Removed |
| ~~`poolConfirmedBalance`~~ | Removed |
| ~~`getWork`~~ | Removed |
| ~~`getBlockTemplate`~~ | Removed |
| ~~`submitBlock`~~ | Removed |

## 6. Accounts

### 6.1 Plain account objects

- The ~~`id`~~ field has been removed.
- The `type` field is now one of these strings: `"basic" | "vesting" | "htlc" | "staking"`.
- In vesting accounts, the `owner` field is now the address, the ~~`ownerAddress`~~ field has been removed.
- In HTLC accounts, the `sender` & `recipient` fields are now the addresses, the ~~`senderAddress`~~ & ~~`recipientAddress`~~ have been removed.
- HTLC accounts no longer have a ~~`hashAlgorithm`~~ field.

### 6.2 Account methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| `accounts` | Renamed to `listAccounts`, only lists addresses (`string[]`). |
| `createAccount` | The response no longer has an ~~`id`~~ field, but now includes `privateKey: string`. |
| `getBalance` | Removed, use `getAccountByAddress` instead. |
| `getAccount` | Renamed to `getAccountByAddress`. See the plain account object changes above.|

## 7. Blockchain

### 7.1. Plain block object

Blocks in PoS are one of two types: a micro block or a macro block. Both types can include transactions, although macro blocks only include validator reward transactions from the coinbase (with an empty `proof`). Additionally, micro blocks can be skip blocks which don't include transactions.

- `accountsHash` has been renamed to `stateHash`.
- `timestamp` is now in milliseconds.
- For changes to `transactions` plain objects, see [3.1 Plain transaction objects](#31-plain-transaction-objects).
- ~~`difficulty`~~ has been removed.
- ~~`nonce`~~ has been removed.
- ~~`miner`~~ has been removed.
- `minerAddress` for micro blocks is now `producer.validator`. Macro blocks do not have `producer`.
- ~~`pow`~~ has been removed.
- The following fields have been added:
  ```ts
  // All blocks
  {
    type: 'micro' | 'macro'
    batch: number
    epoch: number
    network: string
    version: number
    seed: string
    historyHash: string
  }

  // Micro blocks
  {
    producer: MicroProducer
    equivocationProofs: Array<EquivocationProof>
    justification: MicroJustification
  }

  // Macro blocks
  {
    isElectionBlock: boolean
    parentElectionHash: string
    nextBatchInitialPunishedSet: Array<number>
    justification: MacroJustification
  }
### 7.2 Blockchain methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| `blockNumber` | Renamed to `getBlockNumber`. To fetch the current block as a plain block object, use `getLatestBlock`. |
| ~~`getBlockTransactionCountByHash`~~ | No equivalent method. |
| ~~`getBlockTransactionCountByNumber`~~ | No equivalent method. |
| `getBlockByHash` | No change. See above for plain block object changes. |
| `getBlockByNumber` | No change. See above for plain block object changes. |

## 8. Miscellaneous

### 8.1 Miscellaneous methods

| Method | In Proof-of-Stake |
| ------ | ----------------- |
| ~~`constant`~~ | No equivalent method. |
| ~~`log`~~ | No equivalent method. |
