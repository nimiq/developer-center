# History Macro Sync

History Macro Sync is a full history synchronization mechanism designed exclusively for history nodes. It downloads the complete blockchain transaction history from genesis. The History Macro Sync is required for nodes that need to serve historical queries or verify the full transaction history.

## Key Characteristics

- **Peer-to-Peer Operation**: Each peer is handled independently with separate request queues
- **Full History Reconstruction**: Retrieves and validates complete transaction history since genesis
- **Full Blockchain Exclusive**: Compatible only with full blockchain instance
- **Parallel Sync Clusters**: Organizes downloads into concurrent clusters for maximum efficiency
- **Stream-Based**: Implements the `Stream` trait for asynchronous event processing

## How It Works

The `HistoryMacroSync` manages blockchain synchronization through parallel cluster operations. It downloads complete macro block history with transaction data, organizing work into efficient parallel streams for maximum throughput.

The `HistoryMacroSync` follows a cluster-based parallel request pattern:

1. **RequestMacroChain** → Discover available election macro block chains and epoch information
2. **RequestBatchSet** → Download macro blocks with validation metadata and history proofs
3. **RequestHistoryChunk** → Retrieve complete transaction history chunks in parallel

The complete message specifications are documented in the [Network Protocol](network-protocol) document.

## Architecture Overview

```rust
pub struct HistoryMacroSync<TNetwork: Network> {
    pub(crate) blockchain: Arc<RwLock<Blockchain>>,
    pub(crate) network: Arc<TNetwork>,
    pub(crate) network_event_rx: SubscribeEvents<TNetwork::PeerId>,
    pub(crate) peers: HashMap<TNetwork::PeerId, usize>,
    pub(crate) epoch_ids_stream:
        FuturesUnordered<BoxFuture<'static, Option<EpochIds<TNetwork::PeerId>>>>,
    pub(crate) epoch_clusters: VecDeque<SyncCluster<TNetwork>>,
    pub(crate) checkpoint_clusters: VecDeque<SyncCluster<TNetwork>>,
    pub(crate) active_cluster: Option<SyncCluster<TNetwork>>,
    pub(crate) job_queue: VecDeque<Job<TNetwork>>,
    pub(crate) waker: Option<Waker>,
}
```

## Step-by-Step Process

### 1. Macro Chain Discovery

- The node sends `RequestMacroChain` to peers to discover epoch IDs and identify checkpoint blocks.
- Block locators help find the highest common block between the node and its peers.

### 2. Parallel Batch Set Downloads per Cluster

- The node creates one or more `SyncCluster`s instances responsible for specific epoch ranges.
- It sends `RequestBatchSet` messages to retrieve macro blocks along with metadata.
- Macro blocks are stored but not yet applied until their history is complete.

### 3. History Chunks Downloads

- The node sends `RequestHistoryChunk` messages to download transaction history in manageable chunks.
- Each `SyncCluster` manages its own queue, allowing multiple history chunks to be retrieved in parallel.
- History chunks are verified using Merkle proofs against the macro block's history root.

### 4. Block Application

- Once all required history is downloaded and verified, the node applies macro blocks using `push_history_sync()`.
- This process updates the blockchain state without replaying every transaction.

### 5. Sync Completion

- If the peer has no new epochs → Emit as `Good`.
- If missing epochs are found → Continue processing.
- If validation fails → Emit as `Outdated` or `Incompatible`.

This cycle continues until all clusters complete and peers are fully synchronized.

## **Concurrency Management**

History Macro Sync uses multiple levels of parallelism to improve performance:

- **Cluster-Level**: Multiple clusters process different epoch ranges simultaneously.
- **Request-Level**: Batch set and history chunk requests proceed independently.
- **Chunk-Level**: Multiple history chunks are downloaded in parallel per cluster.

### Cluster Architecture

```rust
pub struct SyncCluster<TNetwork: Network> {
    pub id: usize,
    pub epoch_ids: Vec<Blake2bHash>,
    pub first_epoch_number: usize,
    pub first_block_number: usize,

    // Both batch_set_queue and the history_queue share the same peers.
    pub(crate) batch_set_queue:
        SyncQueue<TNetwork, Blake2bHash, BatchSetInfo, HistoryRequestError, BatchSetVerifyState>,
    history_queue: SyncQueue<
        TNetwork,
        HistoryChunkRequest,
        (HistoryChunkRequest, HistoryTreeChunk),
        HistoryRequestError,
        (),
    >,

    pending_batch_sets: VecDeque<PendingBatchSet>,
    num_epochs_finished: usize,

    blockchain: Arc<RwLock<Blockchain>>,
    network: Arc<TNetwork>,
}
```

### Parallel Processing Limits

- **Batch Sets**: 5 concurrent downloads per cluster
- **History Chunks**: 12 concurrent downloads per cluster
- **Max Clusters**: 100 total active clusters
- **Job Queue**: 4 maximum queued completion jobs

## Event Processing

History Macro Sync emits structured events for different peer synchronization scenarios:

**Sync Events:**

- `MacroSyncReturn::Good(peer_id)` - Peer successfully synchronized, no new epochs available.
- `MacroSyncReturn::Outdated(peer_id)` - Peer validation failed or provided outdated information.
- `MacroSyncReturn::Incompatible(peer_id)` - Peer doesn't provide required services for synchronization; _Example: A full node cannot serve a history node because it does not store the full transaction history from genesis, making it incompatible for history sync requests._

**Progress Events:**

- Cluster completion notifications for parallel download tracking
- Batch set download completion per epoch range
- History chunk application progress within clusters

This event system enables the consensus layer to track synchronization progress across multiple peers and make informed decisions about when sufficient peers have achieved macro sync completion.

## **Transition to Live Sync**

When History Macro Sync emits `MacroSyncReturn::Good` for sufficient peers, the consensus layer initiates the transition to **Live Sync**. The node transitions to [Block Live Sync](../live-sync/block-live-sync) to follow new micro blocks in real time.

This two-phase approach (macro sync → live sync) ensures nodes can quickly reach consensus state then maintain real-time synchronization with minimal overhead.
