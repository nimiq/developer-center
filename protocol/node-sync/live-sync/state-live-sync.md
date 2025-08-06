# State Live Sync

State Live Sync is a comprehensive real-time synchronization mechanism designed exclusively for full blockchain instances. The State Live Sync simultaneously maintains both the latest blockchain state and complete account data through parallel block and state synchronization.

Every other node type doesn't use State Live Sync. Instead, they transition to **[Block Live Sync](block-live-sync)** to synchronize both blocks and complete account state simultaneously.

## Key Characteristics

- **Peer-to-Peer Operation**: Each peer is handled independently with separate request queues
- **Full State Synchronization**: Maintains complete account state through parallel chunk downloads
- **Full Blockchain Exclusive**: Compatible only with full blockchain instances
- **Multi-Layered Architecture**: Combines `BlockQueue`, `DiffQueue`, and `StateQueue` for comprehensive sync
- **Partial Trie Reconstruction**: Builds complete state without requiring transaction history
- **State Completion Tracking**: Monitors blockchain state completeness and triggers chunk requests as needed
- **Stream-Based**: Implements the `Stream` trait for asynchronous event processing

## How It Works

The `StateLiveSync` manages both block and state synchronization through a layered queue system. It processes incoming blocks while simultaneously requesting and applying state chunks in order to eventually reach a complete blockchain state. The sync monitors account tree completeness and automatically triggers state synchronization when gaps are detected.

The `StateLiveSync` follows a dual-request pattern combining block and state synchronization:

1. **RequestMissingBlocks** → Request missing blocks when gaps are detected
2. **RequestTrieDiff** → Request trie diffs for efficient state updates
3. **RequestChunk** → Request state chunks to fill account tree gaps

The complete message specifications are documented in the [Network Protocol](/protocol/node-sync/network-protocol) document.

## Partial Trie Construction

The State Live Sync does not download the entire state trie at once. Instead, nodes request and apply small chunks of the trie incrementally. This approach is necessary because blocks continue to be produced while a node is syncing. By the time the full trie was downloaded, it would already be outdated.

Instead, nodes construct a **partial trie** by:

- Requesting one chunk at a time
- Using the `end_key` from the previous response as the `start_key` for the next request
- Repeating this process until the full trie is reconstructed and matches the current state

At the end of the process, the node compares its computed **state root** against the expected root in the latest block to verify correctness. This approach that eliminates the need for transaction history while maintaining complete account state.

## Architecture Overview

::: details State Live Sync Struct (click to expand)

```rust
pub type StateLiveSync<N> = LiveSyncer<N, StateQueue<N>>;

pub struct LiveSyncer<N: Network, Q: LiveSyncQueue<N>> {
    blockchain: BlockchainProxy,

    network: Arc<N>,

    queue: Q,

    /// Vector of pending push operations.
    pending: VecDeque<BoxFuture<'static, Q::PushResult>>,

    /// Cache for BLS public keys to avoid repetitive uncompressing.
    bls_cache: Arc<Mutex<BlsCache>>,

    /// Channel used to communicate additional blocks to the queue.
    /// We use this to wake up the queue and pass in new, unknown blocks
    /// received in the consensus as part of the head requests.
    block_tx: mpsc::Sender<BlockAndSource<N>>,
}

pub struct StateQueue<N: Network> {
    /// Configuration for the block queue.
    config: QueueConfig,

    /// Reference to the blockchain.
    blockchain: Arc<RwLock<Blockchain>>,

    /// Reference to the network.
    network: Arc<N>,

    /// The queue from which we receive blocks and tree diffs.
    diff_queue: DiffQueue<N>,

    /// The chunk request component.
    /// We use it to request chunks from up-to-date peers
    chunk_request_component: ChunkRequestComponent<N>,

    /// Buffered chunks - `block_height -> block_hash -> BlockAndId`.
    /// There can be multiple blocks at a height if there are forks.
    /// For each block, we can store multiple chunks.
    buffer: BTreeMap<u32, HashMap<Blake2bHash, Vec<ChunkAndSource<N>>>>,

    buffer_size: usize,

    /// The block number of the latest macro block. We prune the block buffer when it changes.
    current_macro_height: u32,

    /// The starting point for the next chunk to be requested. We reset it to `None` when the
    /// chain of chunks is invalidated, which will force the component to request the next
    /// chunk starting from the missing range of the blockchain state.
    /// Invalidation of the chain may happen by an invalid chunk or block, a discarded chunk,
    /// or a rebranch event.
    start_key: ChunkRequestState,

    /// The blockchain event stream.
    blockchain_rx: BoxStream<'static, BlockchainEvent>,

    /// Waiter for the peer list to become nonempty.
    ///
    /// Since we only want to dispatch requests from the
    /// `ChunkRequestComponent` when its peer list is nonempty, we need some
    /// notification mechanism to wake us up once the list becomes nonempty if
    /// we find it empty.
    peers_became_nonempty: Option<BoxFuture<'static, ()>>,
}

```

:::

**Key components:**

| **Component** | **Purpose** |
| --- | --- |
| `LiveSyncer` | Main sync controller implementing `Stream` |
| `StateQueue` | Manages state chunk requests and buffering for trie reconstruction |
| `DiffQueue` | Handles tree diff processing and application for incremental updates |
| `BlockQueue` | Manages block buffering, ordering, and gap detection |
| `ChunkRequestComponent` | Handles network requests for state chunks |

## Buffer Configuration

State Live Sync uses multiple buffer systems to manage concurrent block and state processing:

```rust
pub struct QueueConfig {
    /// Buffer size limit
    pub buffer_max: usize,

    /// How many blocks ahead we will buffer.
    pub window_ahead_max: u32,

    /// How many blocks back into the past we tolerate without returning a peer as Outdated.
    pub tolerate_past_max: u32,

    /// Flag to indicate if blocks should carry a body.
    pub include_body: bool,
}
```

## Step-by-Step Process

### 1. Dual Stream Processing

The node processes two parallel streams:

- **Block Announcements**: Via gossipsub block announcements from peers
- **State Monitoring**: Via blockchain events tracking account tree completeness

### 2. Block Reception & Buffering

Incoming blocks are processed through the layered queue system:

- **StateQueue**: Requests corresponding state chunks for each block to maintain trie completeness
- **DiffQueue**: Applies tree diffs for efficient state updates without full reconstruction
- **BlockQueue**: Handles block ordering and gap detection for continuous sync

### 3. Partial Trie Reconstruction

When the account tree is incomplete, the node initiates chunk-based reconstruction:

- **Gap Discovery**: Use `get_missing_accounts_range()` to identify missing trie sections
- **Sequential Requests**: Request chunks starting from missing key ranges with up to 5,000 nodes each
- **Progressive Building**: Apply chunks sequentially using `start_key` from previous response as next `start_key`
- **Chunk Buffering**: Buffer chunks by block height and hash for ordered application

### 4. Block & State Application

Process blocks and chunks in the following order:

- **Block Validation**: Standard block signature and intrinsic validation
- **Block Push**: Apply validated blocks to the blockchain
- **Chunk Push**: Apply state chunks via `commit_chunks()` to rebuild account trie
- **BLS Cache Updates**: Update validator key cache for performance optimization

### 5. State Completion Tracking & Diff Mode

Monitor blockchain state completeness and optimize sync strategy:

- **Completion Detection**: Mark state sync complete when `accounts_complete()` returns true
- **Diff Mode Switch**: Disable chunk requests and enable diff-only processing for efficiency
- **Reset Triggers**: Restart chunk-based reconstruction on rebranch or state reinitialization
- **Buffer Pruning**: Clean outdated chunks when passing macro blocks to manage memory
- **Progress Reporting**: Emit events for state sync progress and completion

### 6. Rebranch Recovery

Handle blockchain reorganizations gracefully:

- **State Validation**: Check if rebranch caused state incompleteness
- **Reset Strategy**: If incomplete, reset to chunk request mode and re-enable diffs
- **Buffer Cleanup**: Clear invalid chunks and restart trie reconstruction from detected gaps

## Event Processing

State Live Sync emits structured events for different synchronization scenarios:

**Block and State Events:**

- `AcceptedAnnouncedBlock(hash)` - Real-time block accepted
- `AcceptedBufferedBlock(hash, buffer_size)` - Buffered block applied
- `ReceivedMissingBlocks(hashes)` - Missing blocks successfully received
- `RejectedBlock(hash)` - Block validation failed
- `AcceptedChunks(hash)` - State chunks applied for head block

**Peer Events:**

- `Behind(peer_id)` - Peer is behind our blockchain state
- `Ahead(peer_id)` - Peer is ahead of our blockchain state

**Peer Classification Logic:**

Peers are classified based on the block height difference and tolerance configuration:

- **Behind**: Peer's announced block is more than `tolerate_past_max` blocks behind our current head
- **Ahead**: Peer's announced block is more than `window_ahead_max` blocks ahead of our current head
