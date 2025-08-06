# Architecture

Nimiq's consensus architecture centers on a **two-phase synchronization model** that separates epoch-level state synchronization from real-time block processing. This design enables efficient sync strategies tailored to different node capabilities while maintaining cryptographic security guarantees.

## Two-Phase Sync Architecture

**Macro Sync Phase**: Establishes current network state efficiently by downloading and verifying macro blocks (epoch and checkpoint blocks). Different strategies optimize for various resource constraints:

- [History Macro Sync](macro-sync/history-macro-sync): Complete historical verification for history nodes
- [Light Macro Sync](macro-sync/light-macro-sync): ZKP-based verification for resource efficiency
- [Pico Macro Sync](macro-sync/pico-macro-sync): Trust-based approach with automatic security fallback

**Live Sync Phase**: Maintains real-time synchronization with ongoing micro block production:

- [State Live Sync](live-sync/state-live-sync): Complete state maintenance for full nodes
- [Block Live Sync](live-sync/block-live-sync): Header-only sync for light clients

```
┌─────────────────┐     ┌─────────────────┐
│   Application   │     │   Network       │
│   Layer         │     │   Layer         │
└─────────┬───────┘     └─────────┬───────┘
          │                       │
          v                       v
┌─────────────────────────────────────────┐
│           Consensus Component           │
│  ┌─────────────┐  ┌─────────────────┐   │
│  │ Consensus   │  │ ConsensusProxy  │   │
│  │ (Core)      │  │ (Async Access)  │   │
│  └─────────────┘  └─────────────────┘   │
└─────────┬───────────────────────────────┘
          │
          v
┌─────────────────────────────────────────┐
│            Syncer Component             │
│  ┌─────────────┐  ┌─────────────────┐   │
│  │ Syncer      │  │ SyncerProxy     │   │
│  │ (Strategy)  │  │ (Multi-variant) │   │
│  └─────────────┘  └─────────────────┘   │
└─────────┬───────────────────────────────┘
          │
          v
┌─────────────────────────────────────────┐
│          Sync Strategies                │
│ ┌─────────┐ ┌──────────┐ ┌──────────┐   │
│ │ History │ │  Light   │ │   Pico   │   │
│ │ Macro   │ │  Macro   │ │  Macro   │   │
│ └─────────┘ └──────────┘ └──────────┘   │
│ ┌─────────┐ ┌──────────┐                │
│ │ Block   │ │  State   │                │
│ │ Live    │ │  Live    │                │
│ └─────────┘ └──────────┘                │
└─────────────────────────────────────────┘
```

## System Components

### Coordination Layer

**Consensus Component**: Acts as the central orchestrator, analyzing peer agreement and sync progress to determine network consensus state. Emits `ConsensusEvent::Established` and `ConsensusEvent::Lost` to coordinate system behavior.

**Syncer Component**: Manages the macro sync → live sync lifecycle, selecting appropriate strategies based on node configuration and coordinating peer state transitions.

**Proxy Architecture**: Both components use proxy patterns (`ConsensusProxy`, `SyncerProxy`) to provide thread-safe async interfaces while maintaining clear separation between coordination logic and external access.

**`RemoteDataStore` and Event Dispatcher**: Supporting components as `RemoteDataStore` and `RemoteEventDispatcher` provide remote access to account, validator, and staker data, and enable address-based event subscriptions.

### Strategy Implementation Layer

**Sync Strategies**: Implement `MacroSync` and `LiveSync` traits to enable different verification approaches and resource optimization patterns. See [Traits and Abstractions](traits-and-abstractions) for detailed interface specifications.

**Trait-Based Design**: The sync system is built around trait-based abstractions, such as `MacroSync`, `LiveSync`, and `LiveSyncQueue`. This approach allows for pluggable sync strategies, making it straightforward to extend or adapt the system for new node types or future requirements.

**Queue Architecture**: The core of peer request coordination is the generic `SyncQueue` abstraction, which manages requests, retries, and peer rotation for all sync strategies.

## Communication Architecture

**Peer Classification Systems**: Different sync phases use specialized peer classification approaches.

**Macro Sync Classification**:

- **Good**: Successfully synchronized to peer's macro state
- **Outdated**: Peer is behind local chain or provided outdated information
- **Incompatible**: Peer doesn't provide required services for synchronization; _Example: full node cannot serve a syncing history node_
- **Conflicting**: Peer provided conflicting blockchain data (triggers fallback in Pico Sync)

**Live Sync Classification**:

- **Behind**: Peer is too far behind our current blockchain position (exceeds tolerance threshold)
- **Ahead**: Peer is too far ahead of our current blockchain position (exceeds window limit)

**Peer Management**: Peer management is handled by the `PeerList` abstraction, which tracks active peers, supports efficient peer rotation, and notifies components when peers join or leave the network.

### Event-Driven Coordination

**Structured Event System**: All major components communicate through asynchronous event streams, implementing the `Stream` trait. This enables the system to respond promptly to network changes, peer events, and sync progress:

- `ConsensusEvent`: System-wide consensus state changes (`Established`, `Lost`)
- `LiveSyncPushEvent`: Block processing outcomes (`AcceptedAnnouncedBlock`, `AcceptedBufferedBlock`, `ReceivedMissingBlocks`, `RejectedBlock`, `AcceptedChunks`)
- `LiveSyncPeerEvent`: Peer classification (`Behind`, `Ahead`)
- `NetworkEvent`: Peer lifecycle management (`PeerJoined`, `PeerLeft`)
- `BlockchainEvent`: State transition coordination (`Extended`, `Rebranched`, `Finalized`, `EpochFinalized`, `HistoryAdopted`, `Stored`)
- `RemoteEvent`: Inter-peer notifications (`InterestingReceipts`)

**Cross-Node Communication**: `RemoteEventDispatcher` enables selective subscriptions between different node types, supporting efficient address-based notifications without full chain monitoring.

## Performance

**Async Stream Processing**: All major components implement `Stream` trait for non-blocking, event-driven processing that maintains responsiveness under load.

**Concurrency and Parallel Requests**:
The sync system frequently needs to communicate with multiple peers at once, such as when requesting blocks or proofs. To handle this efficiently, it uses Rust’s `FuturesUnordered` collection. This allows the system to manage many asynchronous tasks in parallel and process each result as soon as it becomes available, regardless of the order they were started. By doing so, the node can take advantage of the fastest responses, keep the synchronization pipeline full, and avoid delays caused by slower peers. This approach ensures high throughput and responsiveness during all phases of synchronization.

**Parallel Request Management**: Multi-peer concurrent request coordination with automatic load balancing and failure recovery ensures optimal network utilization.

**Resource Management**: Configurable buffer sizes and connection limits enable tuning for different deployment environments and resource constraints.

## Security

**Cryptographic Verification**: History and full nodes perform complete cryptographic validation of all received data.

**ZKP Security**: Full and light nodes achieve high security through zero-knowledge proof verification.

**Trust-Based Operation**: Pico nodes use optimistic trust with automatic fallback to cryptographic verification when conflicts detected.

## Error Handling

**Automatic Peer Rotation**: Network request failures trigger immediate peer failover with exponential backoff to prevent cascading failures.

**Peer Banning**: Peers that provide invalid data or misbehave are subject to banning or disconnection. This mechanism protects the node from malicious actors and helps maintain the network's integrity and security.

**State Recovery**: When errors occur pushing blocks or chunks, the system discards pending chunks and requests chunks again starting from the earliest missing key in the local accounts tree state.

**`EitherSyncer`**: This abstraction enables seamless runtime fallback between sync strategies, such as automatically switching from Pico Macro Sync to Light Macro Sync when conflicts are detected, without disrupting the overall sync process.

## Consensus Establishment

A node establishes consensus when it achieves both **peer connectivity** (minimum 3 peers) and **state synchronization** (complete required data), plus one of:

- **Network Activity**: Accepted 5+ block announcements extending the local chain
- **Peer Agreement**: Knowledge of head blocks from 2/3+ of connected peers

**Head Consensus:**

- Poll multiple peers simultaneously for chain head
- Require 2/3+ agreement on current blockchain state
- Disconnect from peers with significantly different state

**Multi-Peer Verification and Proof Validation:**

- Request proofs from multiple peers for cross-validation
- Compare responses to detect inconsistencies
- Build consensus from majority agreement
- Ban peers providing invalid data
