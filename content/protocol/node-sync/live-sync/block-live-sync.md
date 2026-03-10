# Block Live Sync

**Block Live Sync** is the real-time block synchronization mechanism, used as the second phase of synchronization after macro sync completes. It enables nodes to follow the chain tip by processing micro blocks as they are produced. This mode targets nodes that do not require state synchronization.

Block Live Sync is used by:

- **History nodes** – Download full block bodies (including transactions)
- **Light and Pico nodes** – Download block headers only

Full nodes do not use Block Live Sync. Instead, they transition to **[State Live Sync](state-live-sync)** to synchronize both blocks and complete account state simultaneously.

## **Key Characteristics**

- **Real-Time Micro Block Synchronization**: Continuously follows the latest micro blocks after macro sync.
- **Peer-Independent Processing**: The system processes each peer independently for block announcements and missing block detection.
- **Flexible Download Modes**: Supports both full block bodies and header-only modes.
- **Stream-Based**: Implements asynchronous processing via the `Stream` trait.

## **How It Works**

The `BlockLiveSync` manages real-time blockchain synchronization by processing incoming block announcements, buffering out-of-order blocks, and proactively requesting missing blocks from peers. It ensures the node maintains synchronization with the network's current state through continuous block processing.

The `BlockLiveSync` follows a reactive request pattern:

- **Block Announcements** → Process incoming blocks via gossipsub
- **RequestMissingBlocks** → Request missing blocks when gaps are detected (see Network Messages)
- **Block Buffering** → Buffer out-of-order blocks until predecessors arrive

## **Architecture Overview**

```rust
pub type BlockLiveSync<N> = LiveSyncer<N, BlockQueue<N>>;

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
```

**Key components:**

| **Component** | **Purpose** |
| --- | --- |
| `LiveSyncer` | Main sync controller implementing `Stream` |
| `BlockQueue` | Manages block buffering, ordering, and gap detection |
| `BlockRequestComponent` | Handles network requests for missing blocks |

## **Step-by-Step Process**

### **1. Block Reception**

The node receives blocks from two sources:

- **Announced blocks**: Via gossipsub block announcements from peers
- **Requested blocks**: Responses to missing block requests

Each block is classified with its source for proper validation and peer management.

### **2. Block Classification**

Each incoming block is classified by the queue as:

- **Head** – Parent known, block processed immediately
- **Buffered** – Block ahead of current state, stored temporarily
- **Missing** – Block cannot be processed due to gaps; predecessor requested

### **3. Missing Block Resolution**

When the system detects chain gaps:

- Generate block locators from current head to last macro block
- Send `RequestMissingBlocks` with target hash and locators
- Track pending requests to avoid duplicates
- Once the gaps are filled, the node processes all buffered blocks in order

### **4. Blockchain Integration**

- Validate block signatures and intrinsic properties
- Push accepted blocks to blockchain using `push()` or `push_with_chunks()`
- Process buffered blocks that become applicable
- Update BLS cache with new validator keys

## **Configuration Differences**

The behavior of Block Live Sync depends on the QueueConfig:

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

- **History Nodes** → Download full transaction data for archival purposes
- **Light/Pico Nodes** → Download headers only for efficient operation

## Event Processing

Block Live Sync emits structured events for different scenarios:

- `AcceptedAnnouncedBlock(hash)` - Live block accepted
- `AcceptedBufferedBlock(hash, buffer_size)` - Buffered block applied
- `ReceivedMissingBlocks(hashes)` - Missing blocks successfully received
- `RejectedBlock(hash)` - Block validation failed

### **Peer Events**

- `Behind(peer_id)` - Peer is behind our blockchain state
- `Ahead(peer_id)` - Peer is ahead of our blockchain state

**Peer Classification Logic:**

Peers are classified based on the block height difference and tolerance configuration:

- **Behind**: Peer's announced block is more than `tolerate_past_max` blocks behind our current head
- **Ahead**: Peer's announced block is more than `window_ahead_max` blocks ahead of our current head

**System Actions:**

- **Behind peers**: Excluded from missing block requests but remain connected for potential catch-up
- **Ahead peers**: May trigger missing block requests if the gap is bridgeable, otherwise marked for potential disconnection
- **Excessive drift**: Peers too far ahead or behind may be disconnected to maintain sync efficiency

This event-driven approach enables the consensus layer to track synchronization progress and make informed decisions about peer management and sync strategy.
