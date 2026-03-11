# Network Messages

The consensus crate implements a comprehensive network protocol enabling nodes to synchronize with the blockchain and exchange data efficiently. Communication follows two primary patterns:

**Request/Response**: Direct peer-to-peer queries with guaranteed responses, used for targeted data retrieval and sync coordination.

**Gossip/Broadcast**: One-to-many real-time propagation for block headers, bodies, and notifications.

All messages implement the `RequestCommon` trait with unique `TYPE_ID` identifiers and follow standardized error handling patterns. The following requests implement this multi-peer coordination through standardized message types:

## Request Summary

<table>
<thead>
  <tr>
    <th>
      TYPE_ID
    </th>
    
    <th>
      Request
    </th>
    
    <th>
      Purpose
    </th>
    
    <th>
      Response Type
    </th>
    
    <th>
      Primary Use
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        200
      </strong>
    </td>
    
    <td>
      <a href="#requestmacrochain">
        <code>
          RequestMacroChain
        </code>
      </a>
    </td>
    
    <td>
      Get macro block hashes from locators
    </td>
    
    <td>
      <code>
        MacroChain
      </code>
    </td>
    
    <td>
      Macro sync
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        202
      </strong>
    </td>
    
    <td>
      <a href="#requestbatchset">
        <code>
          RequestBatchSet
        </code>
      </a>
    </td>
    
    <td>
      Get macro block batch information
    </td>
    
    <td>
      <code>
        BatchSetInfo
      </code>
    </td>
    
    <td>
      History sync setup
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        204
      </strong>
    </td>
    
    <td>
      <a href="#requesthistorychunk">
        <code>
          RequestHistoryChunk
        </code>
      </a>
    </td>
    
    <td>
      Get history chunk by epoch/index
    </td>
    
    <td>
      <code>
        HistoryChunk
      </code>
    </td>
    
    <td>
      History download
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        207
      </strong>
    </td>
    
    <td>
      <a href="#requestblock">
        <code>
          RequestBlock
        </code>
      </a>
    </td>
    
    <td>
      Get specific block by hash
    </td>
    
    <td>
      <code>
        Block
      </code>
    </td>
    
    <td>
      Individual block retrieval
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        209
      </strong>
    </td>
    
    <td>
      <a href="#requestmissingblocks">
        <code>
          RequestMissingBlocks
        </code>
      </a>
    </td>
    
    <td>
      Get blocks between locators and target
    </td>
    
    <td>
      <code>
        ResponseBlocks
      </code>
    </td>
    
    <td>
      Chain gap filling
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        210
      </strong>
    </td>
    
    <td>
      <a href="#requesthead">
        <code>
          RequestHead
        </code>
      </a>
    </td>
    
    <td>
      Get peer's current chain tip
    </td>
    
    <td>
      <code>
        ResponseHead
      </code>
    </td>
    
    <td>
      Sync coordination
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        211
      </strong>
    </td>
    
    <td>
      <a href="#requestzkp">
        <code>
          RequestZKP
        </code>
      </a>
    </td>
    
    <td>
      Get zero-knowledge proof
    </td>
    
    <td>
      <code>
        RequestZKPResponse
      </code>
    </td>
    
    <td>
      Full and Light client sync
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        212
      </strong>
    </td>
    
    <td>
      <a href="#requestchunk">
        <code>
          RequestChunk
        </code>
      </a>
    </td>
    
    <td>
      Get accounts trie chunk
    </td>
    
    <td>
      <code>
        ResponseChunk
      </code>
    </td>
    
    <td>
      State live sync
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        213
      </strong>
    </td>
    
    <td>
      <a href="#requesttransactionsproof">
        <code>
          RequestTransactionsProof
        </code>
      </a>
    </td>
    
    <td>
      Get transaction inclusion proof
    </td>
    
    <td>
      <code>
        ResponseTransactionsProof
      </code>
    </td>
    
    <td>
      Transaction verification
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        214
      </strong>
    </td>
    
    <td>
      <a href="#requesttransactionreceiptsbyaddress">
        <code>
          RequestTransactionReceiptsByAddress
        </code>
      </a>
    </td>
    
    <td>
      Get receipts for address
    </td>
    
    <td>
      <code>
        ResponseTransactionReceiptsByAddress
      </code>
    </td>
    
    <td>
      Address queries
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        215
      </strong>
    </td>
    
    <td>
      <a href="#requesttrieproof">
        <code>
          RequestTrieProof
        </code>
      </a>
    </td>
    
    <td>
      Get accounts trie proof
    </td>
    
    <td>
      <code>
        ResponseTrieProof
      </code>
    </td>
    
    <td>
      State verification
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        216
      </strong>
    </td>
    
    <td>
      <a href="#requestblocksproof">
        <code>
          RequestBlocksProof
        </code>
      </a>
    </td>
    
    <td>
      Get block inclusion proof
    </td>
    
    <td>
      <code>
        ResponseBlocksProof
      </code>
    </td>
    
    <td>
      Block verification
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        217
      </strong>
    </td>
    
    <td>
      <a href="#requestsubscribetoaddress">
        <code>
          RequestSubscribeToAddress
        </code>
      </a>
    </td>
    
    <td>
      Subscribe to address notifications
    </td>
    
    <td>
      Success/Error
    </td>
    
    <td>
      Live monitoring
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        218
      </strong>
    </td>
    
    <td>
      <a href="#requesttriediff">
        <code>
          RequestTrieDiff
        </code>
      </a>
    </td>
    
    <td>
      Get trie difference for block
    </td>
    
    <td>
      <code>
        ResponseTrieDiff
      </code>
    </td>
    
    <td>
      State live sync
    </td>
  </tr>
</tbody>
</table>

---

### RequestMacroChain

Primary mechanism for macro sync phase across all node types. Gets a sequence of macro block hashes for epoch-based sync by providing known macro block hashes (newest to oldest). The responder finds the best-known locator and returns subsequent epochs. Uses `max_epochs` to avoid overwhelming peers.

```rust
pub struct RequestMacroChain {
    /// Blocks known by the requester.
    pub locators: Vec<Blake2bHash>,
    /// Limit of epochs to send in response.
    pub max_epochs: u16,
}

pub struct MacroChain {
    /// The hashes of the macro blocks starting at one of the locators of the request.
    pub epochs: Vec<Blake2bHash>,
    /// Under certain circumstances, the metadata about the last checkpoint block.
    pub checkpoint: Option<Checkpoint>,
}
```

**Error handling**:

- `UnknownLocators` (try different peer)
- `TooManyLocators` (reduce locator count)

### RequestBatchSet

Retrieves macro block metadata and history length information for a specific macro block hash. This provides the foundation for subsequent history chunk downloads by telling the requester how much history exists and how it's organized into batches.

```rust
pub struct RequestBatchSet {
    /// The hash of the macro block.
    pub hash: Blake2bHash,
}

pub struct BatchSetInfo {
    pub election_macro_block: Option<MacroBlock>,
    pub batch_sets: Vec<BatchSet>,
}

pub struct BatchSet {
    /// Verifying macro block
    pub macro_block: MacroBlock,
    /// Total history length at the height of the specified macro block
    pub history_len: SizeProof<Blake2bHash, HistoricTransaction>,
}
```

Each `BatchSet` provides cumulative history length through `history_len`, enabling calculation of chunk ranges for subsequent `RequestHistoryChunk` calls.

**Error handling**:

- `TargetHashNotFound` (try different hash or peer)
- `MicroBlockGiven` (must use macro block hash)

### RequestHistoryChunk

Downloads incremental ranges of historical data using coordinates provided by `RequestBatchSet`. The coordinates specify which portion of the history to retrieve, allowing nodes to download historical transaction data in manageable chunks in parallel from multiple peers to maximize throughput.

```rust
pub struct RequestHistoryChunk {
    pub epoch_number: u32,
    pub block_number: u32,
    pub chunk_index: u64,
}

/// This message contains a chunk of the history.
pub struct HistoryChunk {
    pub chunk: HistoryTreeChunk,
}
```

**Error handling**:

- `CouldntProduceProof` (chunk data unavailable or corrupted)

### RequestBlock

Direct block retrieval by hash with optional body inclusion. The `include_body` flag allows downloading headers-only for light verification or full blocks for complete validation. This is for targeted retrieval when the node knows exactly which block it needs.

```rust
pub struct RequestBlock {
    /// The hash of the block that is requested.
    pub hash: Blake2bHash,
    /// Whether to include the body.
    pub include_body: bool,
}
```

Uses `include_body: false` for quick verification, `include_body: true` for full validation or transaction processing. Body inclusion depends on node type specifications and sync requirements.

**Error handling**:

- `TargetHashNotFound` (block unknown to peer)
- `ResponseHashMismatch` (response does not match requested hash)

### RequestMissingBlocks

Fills gaps in the blockchain by requesting blocks between known points. Uses locators (newest first) to help peers find the best starting point, then retrieves blocks toward the target hash.

```rust
pub struct RequestMissingBlocks {
    /// Target block hash.
    pub target_hash: Blake2bHash,
    /// Whether to include block bodies.
    pub include_body: bool,
    /// List of known block hashes, ordered from newest to oldest.
    /// The responder uses the most recent matching locator to build the response.
    /// For `Forward` requests, incorrect ordering may lead to unnecessary blocks being returned.
    pub locators: Vec<Blake2bHash>,
    /// Search direction for the response:
    /// - `Forward`: from the first matching locator to the target, always on the main chain.
    /// - `Backward`: from the target backwards until a locator or macro block is found.
    /// `Backward` allows retrieving forks but is less efficient for large responses.
    pub direction: Direction,
}
```

Direction determines search strategy. Uses Forward for normal sync, Backward for fork resolution or when retrieving inferior chains.

- **Forward**: Searches from best locator to target on main chain only
- **Backward**: Searches from target backwards, can include fork blocks

**Error handling**:

- `TargetBlockNotOnMainChain` (target not on peer's main chain)
- `TargetHashNotFound` (target unknown to peer)
- `UnknownLocators` (try different peer)
- `TooManyLocators` (reduce locator count)
- `FailedToGetBlocks` (peer internal error)

### RequestHead

Queries a peer's current chain state to determine sync status and consensus alignment. Returns blockchain tip information including block number, hashes, and election state. Primary mechanism for consensus establishment and peer capability assessment.

```rust
pub struct RequestHead {}

pub struct ResponseHead {
    pub block_number: u32,
    pub block_hash: Blake2bHash,
    pub macro_hash: Blake2bHash,
    pub election_hash: Blake2bHash,
}
```

Polls multiple peers simultaneously to establish network consensus. If 2/3+ peers agree on the same head, consensus is likely established.

### RequestZKP

Requests zero-knowledge proofs for efficient chain verification for full and light nodes. Includes block number filter to prevent outdated proof flooding. Optionally requests the corresponding election block. Responds with either a recent proof or indicates the request is outdated.

```rust
#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct RequestZKP {
    pub(crate) block_number: u32,
    pub(crate) request_election_block: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[repr(u8)]
pub enum RequestZKPResponse {
    Proof(ZKProof, Option<MacroBlock>),
    Outdated(u32),
}
```

Sets `block_number` to its current height, preventing the node from receiving outdated proofs it already has. Sets `request_election_block: true` when the node needs the full election block data for state verification, not just the proof itself.

**Error handling**: `Outdated` built in the response `enum`

### RequestChunk

Downloads state trie chunks during live sync to reconstruct the current accounts state. Node specifies a starting key and limit to control chunk size. Used for state live sync to incrementally build the complete state tree from multiple peers in parallel.

```rust
pub struct RequestChunk {
    pub start_key: KeyNibbles,
    pub limit: u32,
}

/// The response for trie chunk requests.
/// In addition to the chunk, we also return the block hash and number.
pub struct Chunk {
    pub block_number: u32,
    pub block_hash: Blake2bHash,
    pub chunk: TrieChunk,
}

pub enum ResponseChunk {
    Chunk(Chunk),
    IncompleteState,
}
```

Node requests chunks sequentially using the end key of previous chunk as `start_key` for next request. Use reasonable limits to balance throughput with memory usage.

**Error handling**: `IncompleteState` built in the response `enum`

### RequestTransactionsProof

Requests cryptographic proofs for specific transactions within a block. Provides transaction hashes and optionally specifies which block to search. Returns proofs that can be verified independently without requiring the full block data.

```rust
pub struct RequestTransactionsProof {
    pub hashes: Vec<Blake2bHash>,
    pub block_number: Option<u32>,
}

pub struct ResponseTransactionsProof {
    pub proof: HistoryTreeProof,
    pub block: Block,
}
```

**Error handling**:

- `NoTransactionsProvided` (empty hash list)
- `TooManyTransactionsProvided` (reduce hash list size)
- `RequestedTxnProofFromFuture` (block does not exist yet)
- `RequestedTxnProofFromFinalizedEpoch` (use election block instead)
- `RequestedTxnProofFromFinalizedBatch` (use checkpoint block instead)
- `BlockNotFound` (specified block unknown)
- `CouldntProveInclusion` (proof generation failed)
- `TransactionNotFound` (transaction not in block)

### RequestTransactionReceiptsByAddress

Returns the latest transactions for a given address where the address appears as sender, recipient, or in reward transactions. Supports pagination and result limiting. Transactions are returned in descending order (latest first).

```rust
pub struct RequestTransactionReceiptsByAddress {
    pub address: Address,
    pub max: Option<u16>,
    pub start_at: Option<Blake2bHash>,
}

pub struct ResponseTransactionReceiptsByAddress {
    /// Tuples of `(transaction_hash, block_number)`
    pub receipts: Vec<(Blake2bHash, u32)>,
}
```

Uses `max` to limit response size. Use `start_at` with a transaction hash to retrieve transactions that occurred before that hash. If the `start_at` hash is not found or does not belong to the address, returns an empty list. Results are ordered newest to oldest.

**Error handling**: No specific errors (always returns response, potentially empty)

### RequestTrieProof

Requests cryptographic proofs for specific account addresses in the accounts trie. Node provides key nibbles (account addresses) and receives a proof that can verify account states without requiring the full trie data.

```rust
pub struct RequestTrieProof {
    /// Addresses for which the accounts trie proof is requested for
    pub keys: Vec<KeyNibbles>, //-> Accounts
}

pub struct ResponseTrieProof {
    // The accounts proof
    pub proof: TrieProof,
    // The hash of the block that was used to create the proof
    pub block_hash: Blake2bHash,
}
```

Requests proofs for multiple addresses simultaneously to batch verification. Use reasonable key limits to avoid overwhelming peers with large proof generation tasks.

**Error handling**:

- `TooManyKeys` (reduce number of addresses requested)
- `IncompleteTrie` (peer does not have complete trie state)

### RequestBlocksProof

Requests inclusion proofs for specific blocks within an election period. Node provides an election head and list of block numbers, receiving cryptographic proof that those blocks are part of the canonical chain for that election period. Uses `election_head` as the trusted reference point for proof verification.

```rust
pub struct RequestBlocksProof {
    pub election_head: u32,
    pub blocks: Vec<u32>,
}

pub struct ResponseBlocksProof {
    pub proof: BlockInclusionProof,
}
```

**Strategy**: Only works for finalized epochs (election_head must be election block). Batch multiple blocks for efficiency.

**Error handling**:

- `BadBlockNumber` (invalid block number provided)
- `TooManyBlocks` (reduce number of blocks requested)

### RequestSubscribeToAddress

Manages address subscriptions for real-time transaction notifications. Node can subscribe or unsubscribe from specific addresses to receive notifications when transactions involve those addresses.

```rust
pub enum AddressSubscriptionOperation {
    /// Subscribe to some interesting addresses, to start receiving notifications about those addresses.
    Subscribe,
    /// Unsubscribe from some specific addresses, to stop receiving notifications from those addresses
    Unsubscribe,
}

pub struct RequestSubscribeToAddress {
    /// The type of operation that is needed by the peer
    pub operation: AddressSubscriptionOperation,
    /// The addresses which are interesting to the peer
    pub addresses: Vec<Address>,
}
```

**Error handling**:

- `TooManyPeers` (node is already serving too many subscription peers)
- `TooManyAddresses` (node is already monitoring too many addresses)
- `InvalidOperation` (invalid subscription operation or parameters)

### RequestTrieDiff

Requests state changes (diffs) for a specific block to enable efficient state synchronization. Node provides a block hash and receives only the account changes needed to transition to that block's state, avoiding the need to download complete state trees.

```rust
pub struct RequestTrieDiff {
    pub block_hash: Blake2bHash,
}

pub enum ResponseTrieDiff {
    PartialDiff(TrieDiff),
    UnknownBlockHash,
    IncompleteState,
}
```

Applies diffs sequentially to build state incrementally rather than downloading complete state trees. Enables efficient rollbacks during fork resolution by unapplying diffs in reverse order.

**Error handling**: Built into response `enum` (`UnknownBlockHash`, `IncompleteState`)
