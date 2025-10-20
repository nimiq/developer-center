# Traits and Abstractions

**Three core traits** form the foundation of the consensus system, creating a pluggable synchronization architecture:

- **`MacroSync`** - Gets nodes caught up to current network state
- **`LiveSync`** - Keeps nodes synchronized with real-time blocks
- **`LiveSyncQueue`** - Defines how the system processes and applies blocks

These traits enable the same consensus engine to work with different sync strategies while maintaining consistent coordination patterns.

## Core Trait Hierarchy

### `MacroSync`

Different node types need fundamentally different approaches to reach current state. The Macro Sync gets nodes to the latest macro block state using different strategies based on node capabilities. It feeds into `LiveSync` once the system establishes macro state. Coordinated by `Syncer` component.

**Key Implementations**:

- `HistoryMacroSync` - Downloads complete blockchain history for history nodes
- `LightMacroSync` - Uses ZKP verification for efficient sync
- `PicoMacroSync` - Optimistic sync with automatic fallback to Light Macro Sync
- `EitherSyncer` - Flexible wrapper enabling transition between Pico and Light macro sync strategies, automatically falling back to LightMacroSync when conflicts or limitations are detected during Pico Sync

### `LiveSync`

Once caught up with the macro state, all node types need to stay current, but with different data requirements. The `LiveSync` trait manages continuous block announcements and any missing blocks after the macro sync is complete.

**Key Implementations**:

- `LiveSyncer` - Generic coordinator that delegates to queue strategies. It uses `LiveSyncQueue` implementations to define processing behavior.

### `LiveSyncQueue`

Defines how the system processes, buffers, and applies incoming blocks to the blockchain for different node requirements. The same block coordination logic works for all node types, but each node type needs to process and apply the data differently. The `LiveSyncQueue` trait allows the same `LiveSyncer` coordinator to work with different processing strategies. The queue component plugs into `LiveSyncer` to define processing behavior. Determines what data gets requested and how it is applied.

**Key Implementations**:

- `BlockQueue` - Basic block processing for light/history nodes
- `StateQueue` - State chunk coordination for full nodes
- `DiffQueue` - Efficient incremental state updates

## Component Map

### Components

**`Consensus`**

- The central coordinator that determines when the system establishes consensus
- Uses `Syncer` for sync coordination, emits `ConsensusEvent` for system state

**`ConsensusProxy`**

- Thread-safe, cloneable interface to consensus functionality
- Provides transaction sending, state querying, and block resolution capabilities

**`Syncer`**

- Manages macro sync → live sync transitions and peer compatibility
- Bridges between different sync phases and handles peer state tracking
- Contains `macro_sync` and `live_sync` trait objects for different strategies

**`SyncerProxy`**

- Enum wrapper that abstracts over different node sync combinations: History/Full/Light/Pico
- Each variant contains a `Syncer` with specific `MacroSync` and `LiveSync` implementations

**`SyncQueue`**

- Generic request coordinator with peer rotation, retry logic, and response verification
- Used by all sync implementations for network requests
- Maintains ordered response processing with custom verification callbacks

**Request Components**

- `BlockRequestComponent` - Missing block requests
- `ChunkRequestComponent` - State chunk requests
- `DiffRequestComponent` - Trie diff requests

### Blockchain Services

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `RemoteDataStore<N>` | Remote staking contract queries | Merkle proof verification, validator/staker data |
| `RemoteEventDispatcher<N>` | Address-based event routing | Client subscriptions, event notifications |
| `BlsCache` | BLS key optimization | LRU cache, validator voting key storage |
| `HeadRequests<N>` | Consensus peer analysis | Head state tracking, missing block detection |

## Component Interactions

### Event-Driven Communication

Components coordinate through event streams rather than direct method calls. The consensus system emits `ConsensusEvent::Established` and `ConsensusEvent::Lost` to signal state changes, while sync components emit `LiveSyncEvent` for block processing and peer status.

### Request Coordination Pattern

All sync strategies use `SyncQueue` for reliable peer coordination. When data is needed, sync implementations coordinate requests across multiple peers with automatic retry, peer rotation, and response verification.

### Proxy Pattern Architecture

`ConsensusProxy` provides thread-safe access via channels, `SyncerProxy` is an enum wrapper for different sync strategies (History/Full/Light/Pico).

### Stream-Based Processing

Key coordination components implement `Stream` trait for async coordination: `MacroSync`, `LiveSync`, `LiveSyncQueue`, and `LiveSyncer`.

### Generic Queue Architecture

Same live sync coordination logic works with different processing strategies: `LiveSyncQueue` trait lets `BlockQueue`, `StateQueue`, and `DiffQueue` plug into `LiveSyncer`.

### Fallback Mechanisms

`EitherSyncer` enables `PicoMacroSync` → `LightMacroSync` transitions when conflicts are detected.

## TL;DR

1. **`MacroSync`** → Node-specific strategies to reach the latest macro block

2. **`LiveSync`** → Real-time synchronization phase: coordination with specialized queues (`LiveSyncQueue`) for different data requirements

3. **`Consensus`** → Analyzes peer agreement patterns and determines when the node has reached a consistent view of the network state

4. **Request Components** → Network request coordination: manages peer rotation, and retry logic for reliable data retrieval
