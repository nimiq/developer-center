# Light Macro Sync

Light Macro Sync is a robust, ZKP-based synchronization mechanism designed for secure blockchain state verification. It operates with both full and light blockchain instances and provides cryptographically verified synchronization by leveraging Zero-Knowledge Proofs (ZKPs) to verify the macro chain validity before application to the local blockchain.

## Key Characteristics

- **Peer-to-Peer Operation**: Each peer is handled independently with separate request queues
- **ZKP-Based Security**: Verifies macro chain correctness with recursive zk-SNARKs without needing full block history
- **Dual Blockchain Support**: Compatible with both full and light blockchain instances
- **Validity Window Sync**: Full nodes perform additional history chunk validation
- **Robust Fallback**: Serves as the fallback mechanism for Pico Macro Sync
- **Stream-Based**: Implements the `Stream` trait for asynchronous event processing

## How It Works

The `LightMacroSync` manages ZKP-verified macro block synchronization for each peer individually. It requests and validates ZKPs before applying any blockchain state changes, ensuring cryptographic integrity throughout the sync process.

The `LightMacroSync` follows a ZKP-secured request pattern:

1. **RequestZKP** → Request and validate ZKPs from [prover nodes](/protocol/zkp/prover-node)
2. **RequestMacroChain** → Request epoch IDs using known block locators
3. **RequestBlock** → Retrieve specific macro blocks with verified hashes
4. **RequestHistoryChunk** → Validate transaction history within the validity window (full nodes only)

The complete message specifications are documented in the [Network Protocol](../network-protocol) document.

## Architecture Overview

::: details Light Macro Sync Struct (click to expand)

```rust
pub struct LightMacroSync<TNetwork: Network> {
    /// The blockchain
    pub(crate) blockchain: BlockchainProxy,
    /// Reference to the network
    pub(crate) network: Arc<TNetwork>,
    /// Stream for peer joined and peer left events
    pub(crate) network_event_rx: SubscribeEvents<TNetwork::PeerId>,
    /// Used to track the macro requests on a per peer basis
    pub(crate) peer_requests: HashMap<TNetwork::PeerId, PeerMacroRequests>,
    /// The stream for epoch ids requests
    pub(crate) epoch_ids_stream:
        FuturesUnordered<BoxFuture<'static, Option<EpochIds<TNetwork::PeerId>>>>,
    /// Reference to the ZKP proxy used to interact with the ZKP component
    pub(crate) zkp_component_proxy: ZKPComponentProxy<TNetwork>,
    /// ZKP related requests (proofs)
    pub(crate) zkp_requests:
        FuturesUnordered<BoxFuture<'static, (Result<ZKPRequestEvent, Error>, TNetwork::PeerId)>>,
    /// Block requests
    pub(crate) block_headers: FuturesUnordered<
        BoxFuture<
            'static,
            (
                Result<Result<Block, BlockError>, RequestError>,
                TNetwork::PeerId,
            ),
        >,
    >,

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

:::

## Step-by-Step Process

### 1. ZKP Request

Request the latest ZKP from the peer:

- If valid → Apply to blockchain
- If outdated → Skip application, but continue to epoch ID requests
- If invalid → Disconnect peer

### 2. Epoch Discovery

- Send a `RequestMacroChain` with known block locators
- Peer responds with epoch IDs and checkpoint info

### 3. Block Retrieval

- Request any missing macro blocks using `RequestBlock`
- Apply blocks only if they match the expected sequence

### 4. Validity Window Sync (Full Nodes Only)

For full nodes, the Light Macro Sync includes an additional step to synchronize and validate historical transaction data within the blockchain’s **validity window**.

- The node requests history chunks associated with recently applied macro blocks. These chunks include the historical transactions necessary to maintain full state validity without storing the entire chain history
- Chunks are applied to the local blockchain to ensure that transaction history within the validity window is complete and consistent

### 5. Sync Completion

1. **Macro State Synchronized**: All election and checkpoint blocks up to the network's current state have been applied:
    - If the peer has no new blocks → Emit as `Good`
    - If missing blocks are found → Emit as `Outdated`
2. **ZKP Validation Complete**: ZKPs have verified the cryptographic integrity of the macro chain
3. **Validity Window Satisfied** (full nodes only): Transaction history within the validity window has been downloaded and validated

## ZKP Integration

The ZKP component provides cryptographic security with:

- **Proof Generation**: Prover nodes generate proofs for their latest macro state
- **Proof Verification**: Local verification before applying any state changes

Learn more about ZKP and Nimiq’s use of recursive zk-SNARKs [here](/protocol/zkp/ZKP-and-recursive-SNARKs).

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

- `MacroSyncReturn::Good(peer_id)` - Peer successfully synchronized with ZKP verification complete
- `MacroSyncReturn::Outdated(peer_id)` - Peer provided outdated blocks or failed validation
- `MacroSyncReturn::Incompatible(peer_id)` - Peer doesn't provide required services for synchronization; _Example: A light node cannot serve a full node because it does not store the vallidity window, making it incompatible for full nodes sync requests._

**ZKP Events:**

- `ZKPRequestEvent::Applied` - ZKP successfully verified and applied
- `ZKPRequestEvent::Outdated` - ZKP is outdated but sync continues with epoch IDs
- `ZKPRequestEvent::Invalid` - ZKP verification failed, peer disconnected

## **Transition to Live Sync**

When Light Macro Sync emits `MacroSyncReturn::Good` for sufficient peers, the consensus layer transitions the node to **Live Sync** for ongoing micro block synchronization and real-time state updates. Full nodes follow the [State Live Sync](../live-sync/state-live-sync.md) and light nodes follow the [Block Live Sync](../live-sync/block-live-sync.md).

The node maintains synchronization through live micro block announcements and continuous state updates. This two-phase approach (macro sync → live sync) ensures nodes can quickly reach consensus state then maintain real-time synchronization with minimal overhead.
