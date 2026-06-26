---
icon: i-tabler:feather
navigation:
  title: Light Macro Sync
  order: 2
---

# Light Macro Sync

Light Macro Sync is the macro block synchronization mechanism for full and light nodes, and the trustless fallback for [Pico Macro Sync](pico-macro-sync). It brings a node to the current macro state by requesting and verifying the chain of election and checkpoint blocks, without the full block history. Macro block requests run through a bounded, ordered **`SyncQueue`**, which prevents a node that is many epochs behind from flooding its peers with requests.

## Key Characteristics

- **Multi-Peer Fetching**: Macro blocks are fetched from multiple peers through a shared, bounded queue with per-block failover
- **Signature-Verified**: Each election and checkpoint block is verified against the current validator set before it is applied
- **Dual Blockchain Support**: Compatible with both full and light blockchain instances
- **Validity Window Sync**: Full nodes perform additional history chunk validation
- **Trustless Fallback**: Serves as the fallback mechanism for Pico Macro Sync
- **Stream-Based**: Implements the `Stream` trait for asynchronous event processing

## How It Works

The `LightMacroSync` discovers the macro chain from its peers, then fetches and applies the missing election and checkpoint blocks in epoch order. Block fetches are routed through the `macro_block_queue` so that requests stay bounded and responses are applied in order.

The `LightMacroSync` follows this request pattern:

1. **RequestMacroChain** → Request epoch IDs using known block locators
2. **RequestBlock** → Fetch the missing macro blocks by hash, through the `macro_block_queue`
3. **RequestHistoryChunk** → Validate transaction history within the validity window (full nodes only)

When Light Macro Sync runs as the [Pico Macro Sync](pico-macro-sync) fallback, it is given a [pinned election block](/protocol/glossary#pinned-election-block) to bootstrap from: instead of syncing the election chain from genesis, it seeds the chain to that block and verifies forward. Full and light nodes do not bootstrap this way. They sync the election chain from genesis and only verify the pinned election block against their own chain.

The complete message specifications are documented in the [Network Protocol](../network-protocol) document.

## Architecture Overview

::collapsible{title="Light Macro Sync Struct (click to expand)"}

```rust
pub struct LightMacroSync<TNetwork: Network> {
    /// The blockchain
    pub(crate) blockchain: BlockchainProxy,
    /// Reference to the network
    pub(crate) network: Arc<TNetwork>,
    /// Stream for peer joined and peer left events
    pub(crate) network_event_rx: SubscribeEvents<TNetwork::PeerId>,
    /// The stream for epoch ids requests
    pub(crate) epoch_ids_stream:
        FuturesUnordered<BoxFuture<'static, Option<EpochIds<TNetwork::PeerId>>>>,

    /// Hardcoded election block to bootstrap from on the pico sync fallback path; `None` for
    /// light/full sync (which sync the election chain from genesis and only verify the checkpoint).
    /// When set and the chain is still behind it, the checkpoint election block is fetched through
    /// `macro_block_queue` and seeded via `apply_macro_block` (see `add_peer`).
    pub(crate) bootstrap_checkpoint: Option<HardcodedElection>,

    /// Bounded, ordered, failover queue for fetching macro (election) block headers:
    /// the checkpoint seed, the forward catch-up after it, and the full-node `previous_slots`
    /// recovery block all go through here. Requests are bounded, responses applied in epoch
    /// order, and a timed-out block is re-requested from another peer instead of stalling.
    pub(crate) macro_block_queue: SyncQueue<
        TNetwork,
        Blake2bHash,
        (Blake2bHash, Result<Block, BlockError>, TNetwork::PeerId),
        MacroBlockError,
        (),
    >,

    /// Macro block hashes currently queued or in flight in `macro_block_queue`. Deduplicates
    /// overlapping `epoch_ids` (and seed requests) from multiple peers; entries are removed
    /// once the block is applied or its request is exhausted.
    pub(crate) in_flight_macro_blocks: HashSet<Blake2bHash>,

    /// Peers waiting for `macro_block_queue` to advance our head to their reported target block
    /// number. Once reached they are re-queried for epoch ids (emitting `Good` when nothing is
    /// left, or enqueuing the next epochs if the tip moved). Drives the checkpoint seed and
    /// forward catch-up.
    pub(crate) waiting_macro_peers: HashMap<TNetwork::PeerId, u32>,

    /// Peers to re-query once a specific queued block resolves, keyed by that block's hash. Used
    /// for the full-node `previous_slots` recovery fetch, whose `update_previous_slots` apply does
    /// not advance the head (so `waiting_macro_peers` can't drive it).
    pub(crate) pending_followup_requests: HashMap<Blake2bHash, Vec<TNetwork::PeerId>>,

    #[cfg(feature = "full")]
    /// The validity (history chunks) queue
    pub(crate) validity_queue: SyncQueue<
        TNetwork,
        RequestHistoryChunk,
        (
            RequestHistoryChunk,
            Result<HistoryChunk, HistoryChunkError>,
            TNetwork::PeerId,
        ),
        RequestError,
        (),
    >,

    #[cfg(feature = "full")]
    /// Used to track the validity chunks we are requesting
    pub(crate) validity_requests: Option<ValidityChunkRequest>,
    #[cfg(feature = "full")]
    /// The peers we are currently syncing with
    pub(crate) syncing_peers: HashSet<TNetwork::PeerId>,
    #[cfg(feature = "full")]
    /// A vec of all the peers that we successfully synced with
    pub(crate) synced_validity_peers: Vec<TNetwork::PeerId>,
    #[cfg(feature = "full")]
    /// Minimum distance to light sync in #blocks from the peers head.
    pub(crate) full_sync_threshold: u32,
}
```

::

## Step-by-Step Process

### 1. Epoch Discovery

- Send a `RequestMacroChain` with known block locators
- Peer responds with epoch IDs and, when applicable, the metadata of the last checkpoint block

### 2. Block Retrieval

- Request the missing macro blocks by hash through the `macro_block_queue`
- The queue bounds the number of in-flight requests, applies blocks in epoch order, and re-requests a timed-out block from another peer instead of stalling
- A block whose hash does not match the request is rejected, and the responding peer is disconnected

### 3. Validity Window Sync (Full Nodes Only)

For full nodes, the Light Macro Sync includes an additional step to synchronize and validate historical transaction data within the blockchain's **validity window**.

- The node requests history chunks associated with recently applied macro blocks. These chunks include the historical transactions necessary to maintain full state validity without storing the entire chain history
- Chunks are applied to the local blockchain to ensure that transaction history within the validity window is complete and consistent

### 4. Sync Completion

1. **Macro State Synchronized**: All election and checkpoint blocks up to the network's current state have been applied:
    - If the peer has no new blocks → Emit as `Good`
    - If missing blocks are found → Emit as `Outdated`
2. **Validity Window Satisfied** (full nodes only): Transaction history within the validity window has been downloaded and validated

## Verification

Light Macro Sync builds trust forward from a known block rather than from a single proof:

- **Macro chain verification**: Each election and checkpoint block is verified against the current validator set before it is applied. Because each election block determines the next set of validators, the node extends a chain of trust block by block.
- **Pinned election block check**: When the network defines a [pinned election block](/protocol/glossary#pinned-election-block), every node verifies the committed election block at that height against it. A mismatch is logged and surfaced through the `checkpoint_mismatch` metric, but it does not stop the node. Pico nodes additionally use the pinned election block as the bootstrap anchor on this fallback path.

## Validity Window Synchronization

Full nodes perform additional validation through validity window chunks:

- **History Verification**: Downloads and validates transaction history chunks within the validity window
- **Chunk Processing**: Verifies Merkle proofs for history integrity
- **Recent History Integrity**: Ensures complete transaction history within the validity window

### Validity Request Tracking

```rust
/// Struct used to track the progress of the validity window chunk process.
pub struct ValidityChunkRequest {
    /// This corresponds to the block that should be used to verify the proof.
    pub verifier_block_number: u32,
    /// The root hash that should be used to verify the proof.
    pub root_hash: Blake2bHash,
    /// The chunk index that was requested.
    pub chunk_index: u32,
    /// Flag to indicate if there is an election block within the validity window
    pub election_in_window: bool,
    /// Number of items in the previous requested chunk (for cases where we adopt a new macro head)
    pub last_chunk_items: Option<usize>,
}
```

## Event Processing

Light Macro Sync emits structured events for different synchronization scenarios:

**Sync Events:**

- `MacroSyncReturn::Good(peer_id)` - Peer successfully synchronized and reached the most recent macro block
- `MacroSyncReturn::Outdated(peer_id)` - Peer provided outdated blocks or failed validation
- `MacroSyncReturn::Incompatible(peer_id)` - Peer does not provide required services for synchronization; _Example: A light node cannot serve a full node because it does not store the validity window, making it incompatible for full nodes sync requests_

## **Transition to Live Sync**

When Light Macro Sync emits `MacroSyncReturn::Good` for sufficient peers, the consensus layer transitions the node to **Live Sync** for ongoing micro block synchronization and real-time state updates. Full nodes follow the [State Live Sync](../live-sync/state-live-sync.md) and light nodes follow the [Block Live Sync](../live-sync/block-live-sync.md).

The node maintains synchronization through live micro block announcements and continuous state updates. This two-phase approach (macro sync → live sync) ensures nodes can quickly reach consensus state then maintain real-time synchronization with minimal overhead.
