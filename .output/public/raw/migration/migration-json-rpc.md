# PoS Migration Guide for JSON-RPC

## 1. General

- **params property in requests is now required**<br />


While in PoW the `params` property in requests could be left out for requests that didn't take any parameters (or only optional ones), this is no longer the case in PoS. At least an empty array (`[]`) must now be passed.
- **Most params are now required**<br />


In PoW many parameters could be left out, because they had a default in the server. In PoS most parameters are now required. For non-required parameters, `null` must still be passed in their place to use the server's default.
- **The result of a JSON-RPC response is in result.data**<br />


In PoS, every RPC response contains `result: { data, metadata }`. The actual result of the request is in `result.data`, while `result.metadata` contains information about the current chainstate (only for chainstate-related requests, otherwise this is `null`).
- **Timestamps are now in milliseconds**<br />


All timestamps (e.g. for blocks and transactions) are now specified in milliseconds since the Unix epoch.

## 2. Network

### 2.1 Network methods

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        peerCount
      </code>
    </td>
    
    <td>
      Now called <code>
        getPeerCount
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          syncing
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        consensus
      </code>
    </td>
    
    <td>
      Use <code>
        isConsensusEstablished
      </code>
      
       instead, which returns <code>
        true
      </code>
      
       when the node has consensus, <code>
        false
      </code>
      
       otherwise.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        peerList
      </code>
    </td>
    
    <td>
      Now called <code>
        getPeerList
      </code>
      
      . Only returns an array of IDs (<code>
        string[]
      </code>
      
      ) instead of a list of peer info objects.
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          peerState
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
</tbody>
</table>

## 3. Transactions

### 3.1 Plain transaction objects

- `from` & `to` are now the user-friendly addresses. The fields ~~fromAddress~~ & ~~toAddress~~ have been removed.
- `data` has been renamed to `recipientData`.
- `timestamp` is now in milliseconds.
- ~~blockHash~~ has been removed.
- ~~transactionIndex~~ has been removed.
- The following fields have been added:```ts
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

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        sendRawTransaction
      </code>
    </td>
    
    <td>
      This method doesn't push to the local mempool, it only broadcasts the transaction to all peers. To push the transaction to the local mempool (if available), use <code>
        pushTransaction
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        createRawTransaction
      </code>
    </td>
    
    <td>
      Use separate transaction creation methods on the <code>
        Consensus
      </code>
      
       resolver instead. (TODO: link)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        sendTransaction
      </code>
    </td>
    
    <td>
      Use separate transaction sending methods on the <code>
        Consensus
      </code>
      
       resolver instad. (TODO: link)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getRawTransactionInfo
      </code>
    </td>
    
    <td>
      No longer has the fields <del>
        <code>
          valid
        </code>
      </del>
      
       and <del>
        <code>
          inMempool
        </code>
      </del>
      
      . See the plain transaction object changes above.
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getTransactionByBlockHashAndIndex
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getTransactionByBlockNumberAndIndex
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getTransactionByHash
      </code>
    </td>
    
    <td>
      See the plain transaction object changes above. Transactions in the mempool are not discovered. To search in the mempool (if available), use <code>
        getTransactionFromMempool
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getTransactionReceipt
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getTransactionsByAddress
      </code>
    </td>
    
    <td>
      The <code>
        max
      </code>
      
       parameter's maximum value is <code>
        65535
      </code>
      
       (this might get increased in the future). See the plain transaction object changes above. There is also <code>
        getTransactionHashesByAddress
      </code>
      
       to only receive a list of transaction hashes.
    </td>
  </tr>
</tbody>
</table>

## 4. Mempool

Mempool methods are only available when the node has a mempool.

### 4.1 Mempool methods

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        mempoolContent
      </code>
    </td>
    
    <td>
      No change. See the plain transaction object changes above for when using <code>
        includeTransactions: true
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        mempool
      </code>
    </td>
    
    <td>
      No change
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        minFeePerByte
      </code>
    </td>
    
    <td>
      Now called <code>
        getMinFeePerByte
      </code>
    </td>
  </tr>
</tbody>
</table>

## 5. Miner

All mining-related methods have been removed as they are no longer relevant.

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <del>
        <code>
          mining
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          hashrate
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          minerThreads
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          minerAddress
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          pool
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          poolConnectionState
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          poolConfirmedBalance
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getWork
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getBlockTemplate
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          submitBlock
        </code>
      </del>
    </td>
    
    <td>
      Removed
    </td>
  </tr>
</tbody>
</table>

## 6. Accounts

### 6.1 Plain account objects

- The ~~id~~ field has been removed.
- The `type` field is now one of these strings: `"basic" | "vesting" | "htlc" | "staking"`.
- In vesting accounts, the `owner` field is now the address, the ~~ownerAddress~~ field has been removed.
- In HTLC accounts, the `sender` & `recipient` fields are now the addresses, the ~~senderAddress~~ & ~~recipientAddress~~ have been removed.
- In HTLC accounts, the `hashRoot` field is now an object containing a `algorithm: 'blake2b' | 'sha256' | 'sha512'` field (replacing the toplevel ~~hashAlgorithm~~ field) and a `hash: string` field.

### 6.2 Account methods

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        accounts
      </code>
    </td>
    
    <td>
      Renamed to <code>
        listAccounts
      </code>
      
      , only lists addresses (<code>
        string[]
      </code>
      
      ).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        createAccount
      </code>
    </td>
    
    <td>
      The response no longer has an <del>
        <code>
          id
        </code>
      </del>
      
       field, but now includes <code>
        privateKey: string
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getBalance
      </code>
    </td>
    
    <td>
      Removed, use <code>
        getAccountByAddress
      </code>
      
       instead.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getAccount
      </code>
    </td>
    
    <td>
      Renamed to <code>
        getAccountByAddress
      </code>
      
      . See the plain account object changes above.
    </td>
  </tr>
</tbody>
</table>

## 7. Blockchain

### 7.1. Plain block object

Blocks in PoS are one of two types: a micro block or a macro block. Both types can include transactions, although macro blocks only include validator reward transactions from the coinbase (with an empty `proof`). Additionally, micro blocks can be skip blocks which don't include transactions.

- `accountsHash` has been renamed to `stateHash`.
- `timestamp` is now in milliseconds.
- For changes to `transactions` plain objects, see [3.1 Plain transaction objects](#31-plain-transaction-objects).
- ~~difficulty~~ has been removed.
- ~~nonce~~ has been removed.
- ~~miner~~ has been removed.
- `minerAddress` for micro blocks is now `producer.validator`. Macro blocks do not have `producer`.
- ~~pow~~ has been removed.
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
```

### 7.2 Blockchain methods

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        blockNumber
      </code>
    </td>
    
    <td>
      Renamed to <code>
        getBlockNumber
      </code>
      
      . To fetch the current block as a plain block object, use <code>
        getLatestBlock
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getBlockTransactionCountByHash
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          getBlockTransactionCountByNumber
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getBlockByHash
      </code>
    </td>
    
    <td>
      No change. See above for plain block object changes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getBlockByNumber
      </code>
    </td>
    
    <td>
      No change. See above for plain block object changes.
    </td>
  </tr>
</tbody>
</table>

## 8. Miscellaneous

### 8.1 Miscellaneous methods

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      In Proof-of-Stake
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <del>
        <code>
          constant
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
  
  <tr>
    <td>
      <del>
        <code>
          log
        </code>
      </del>
    </td>
    
    <td>
      No equivalent method.
    </td>
  </tr>
</tbody>
</table>
