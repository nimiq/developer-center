# Pico Macro Sync

Pico Macro Sync is a lightweight sync mechanism designed for resource-constrained environments. It operates exclusively with light blockchain instances and provides fast initial synchronization by requesting only essential macro blocks (election and checkpoint blocks) from peers on a per-peer basis. Pico Macro Sync takes an optimistic approach by accepting macro blocks with minimal validation, then falling back to a more robust sync method if conflicts are detected.

## Key Characteristics

- **Peer-to-Peer Operation**: Each peer is handled independently with separate request queues
- **Optimistic Approach**: Accepts blocks with minimal validation
- **Minimal State**: Only tracks essential information needed for the sync process
- **Fast Fallback**: Can quickly transition to Light Macro Sync when conflicts are detected
- **Stream-Based**: Implements the `Stream` trait for asynchronous event processing

## How It Works

The `PicoMacroSync` manages macro block synchronization for each peer individually. It handles peer communication, requests block headers, tracks active synchronization peers, and detects conflicts that may require falling back to a more robust sync mechanism.

The `PicoMacroSync` follows a minimal request pattern optimized for light clients:

1. **RequestHead** → Ask peer's current head state and verifies `macro_hash`and `election_hash`
2. **RequestMacroChain** → Selectively download macro blocks using hash locators
3. **RequestBlock** → Retrieve individual election/checkpoint blocks as needed

The complete message specifications are documented in the [Network Protocol](network-protocol) document.

## Architecture Overview

::: details Pico Macro Sync Struct (click to expand)

```rust
pub struct PicoMacroSync<TNetwork: Network> {
    /// The blockchain
    pub(crate) blockchain: BlockchainProxy,
    /// Reference to the network
    pub(crate) network: Arc<TNetwork>,
    /// Stream for peer joined and peer left events
    pub(crate) network_event_rx: SubscribeEvents<TNetwork::PeerId>,
    /// Used to track the macro requests on a per peer basis
    pub(crate) peer_requests: HashMap<TNetwork::PeerId, PeerMacroRequests>,
    /// The stream for head requests
    pub(crate) head_stream:
        FuturesUnordered<BoxFuture<'static, Option<(ResponseHead, TNetwork::PeerId)>>>,
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
    /// Collection of peers we are currently pico macro syncing with
    pub(crate) syncing_peers: HashSet<TNetwork::PeerId>,
    /// Reference to the ZKP proxy used to interact with the ZKP component
    /// It is not used by the pico consensus itself, but we need the reference
    /// as part of the fallback mechanism
    pub(crate) zkp_component_proxy: ZKPComponentProxy<TNetwork>,
}
```

:::

## Step-by-Step Process

### 1. Head Request

The node sends a RequestHead message to the peer to obtain its current macro and election block hashes. Then, it extract the macro and election block hashes to determine the peer’s macro state and guide the next request.

### 2. State Comparison

Compare peer's head with local blockchain state:

- **Match** → Mark as `Good`
- **Different hashes** → Continue to block requests

### 3. Targeted Block Requests

Request only the specific blocks needed:

- **Starting from genesis** → Request peer's latest election block (trusted)
- **Have election block** → Request only the next macro block in sequence

### 4. Optimistic Block Application

Apply blocks with simple validation rules:

- **Election block**: Only accepted if local blockchain is at genesis
- **Macro block**: Only accepted if it's the immediate next epoch
- **Any other case**: Mark peer as `Conflicting`, fall back to Light Macro Sync

### 5. Verify Completion

Re-request the peer's head to check if more blocks are needed:

- **Hashes match** → Mark peer as `Good`, sync complete
- **Still different** → Repeat from step 3
- **Validation failed** → Fallback to `LightMacroSync`

## Fallback Mechanism

### Conflicting Peer

The Pico Macro Sync operates with minimal validation, accepting blocks optimistically to maximize speed.
It only accepts a new election block if the local chain is at genesis, since it cannot fully validate election blocks without full history.

If the node is not at genesis and receives an unknown election block, it cannot verify its validity.
Accepting such a block could allow a malicious or faulty peer to inject an alternate chain or fork, risking the node’s security and consensus.

When a peer provides a block that cannot be optimistically and safely applied, the node marks the peer as **conflicting**. This triggers a fallback to Light Macro Sync, which uses ZKPs to securely verify the chain state and resolve discrepancies.

Fallback to `LightMacroSync` is triggered when:

- Block validation fails during push operations
- Peer provides blocks from wrong epoch
- Network errors or malicious peer behavior detected

The `EitherSyncer` enum allows transitions between sync mechanisms:

```rust
pub enum EitherSyncer<N: Network> {
    Normal(PicoMacroSync<N>),       // Fast optimistic sync
    Fallback(LightMacroSync<N>),    // ZKP-based sync
}
```

## Event Processing

Pico Macro Sync emits structured events for different synchronization scenarios:

**Sync Events:**

- `MacroSyncReturn::Good(peer_id)` - Peer successfully synchronized with optimistic validation
- `MacroSyncReturn::Outdated(peer_id)` - Peer provided outdated blocks or failed basic validation
- `MacroSyncReturn::Incompatible(peer_id)` - Peer doesn't provide required services for synchronization; _Example: A pico node cannot serve another pico node because it does not provide fully verifiable or authenticated data, making it incompatible for pico sync requests._
- `MacroSyncReturn::Conflicting(peer_id)` - Peer provided conflicting blocks, triggering fallback to Light Macro Sync

**Fallback Events:**

- Fallback trigger detection when block validation fails
- Transition from `PicoMacroSync` to `LightMacroSync` via `EitherSyncer`
- Peer transfer to ZKP-based verification system

## Transition to Live Sync

When the Pico Macro Sync emits `MacroSyncReturn::Good` for sufficient peers, the consensus layer initiates the transition to **Live Sync**. The node transitions to [Block Live Sync](../live-sync/block-live-sync) to follow new micro blocks in real time.

This two-phase approach (macro sync → live sync) ensures nodes can quickly reach consensus state then maintain real-time synchronization with minimal overhead.
