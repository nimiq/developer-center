---
icon: i-tabler:network
title: Sync and Network Consensus
description: Design-level overview of how Nimiq nodes synchronize with the blockchain, across all node types and sync modes.
navigation:
  title: Sync and Network Consensus
  order: 1
---

# Node Sync System

Nimiq implements a **two-phase synchronization architecture** that separates epoch-level state synchronization from real-time block processing. This design enables efficient sync strategies tailored to different node capabilities.

All nodes follow a **two-phase synchronization pattern**: **macro sync** followed by **live sync**. During macro sync, nodes download and verify macro blocks (checkpoints/epochs) to reach the current network state efficiently. Once macro sync completes, nodes transition to live sync to receive and validate the latest micro blocks in real-time. This modular approach allows each node type to optimize for its specific use case.

## Sync Comparison Table

|  | **History Node** | **Full Node** | **Light Node** | **Pico Node** |
| --- | --- | --- | --- | --- |
| **Verification** | Entire chain + full history | Full blocks and state | Election-header chain (validator BLS signatures) | Trust-based (peer-reported state) |
| **Macro Sync Method** | [History Macro Sync](macro-sync/history-macro-sync) | [Light Macro Sync](macro-sync/light-macro-sync) | [Light Macro Sync](macro-sync/light-macro-sync) | [Pico Macro Sync](macro-sync/pico-macro-sync)* |
| **Live Sync Method** | [Block Live Sync](live-sync/block-live-sync) | [State Live Sync](live-sync/state-live-sync) | [Block Live Sync](live-sync/block-live-sync) | [Block Live Sync](live-sync/block-live-sync) |
| **Consensus Level** | Fully verified | Verified | Verified | Trust-based |
| **Fallback** | N/A | N/A | N/A | *Falls back to [Light Macro Sync](macro-sync/light-macro-sync) |
| **Sync Speed** | Slower, full chain from genesis | Efficient, grows with chain length | Fast, election headers only | Fastest, based on peer responses |
| **Web Client** | Not supported | Not supported | Supported | Supported |

### History Nodes

- Complete blockchain history from genesis
- Deep chain queries, historical analysis, and serving data to other nodes
- Can act as validators and provide historical data to the network
- Serve data to other nodes, validate transactions and produce blocks (if validator)
- Rely on other history nodes for initial sync

### Full Nodes

- Complete current state with pruned history - maintains full validation capability
- Serve data to other nodes, validate transactions and produce blocks (if validator)
- Rely on full or history nodes for initial sync

### Light Nodes

- Election block headers (verified via validator BLS signatures) and subsequent micro block headers only
- Transaction verification and sending with cryptographic security guarantees
- Browser/mobile deployment, web client integration (WASM support)
- Rely on full or history nodes for data availability

### Pico Nodes

- Sync with the latest election block only (no historical data; trust-based)
- Ultra-fast startup with trust-based consensus and automatic fallback to verified sync
- Development environments, testing, and trusted network scenarios
- Rely on full or history nodes for data availability and fallback verification

### Service Nodes

**[Validator Nodes](/protocol/validators/validators)**:
Produce blocks and participate in consensus. Any node with a minimum of 100'000 NIM deposit that runs a full or history client can become a validator.

## Architecture Components

**Coordination Layer**: `Consensus` and `Syncer` components manage sync lifecycle and peer relationships, enabling seamless transitions between sync phases.

**Pluggable Strategies**: `MacroSync` and `LiveSync` trait implementations allow optimization for different resource constraints.

**Network Layer**: Request/response and gossip protocols with async streams for efficient concurrent peer processing.

**Queue Architecture**: Automatic peer rotation, retry logic, and backpressure control ensure reliable data retrieval.

:::u-page-grid
  ::::u-page-card
  ---
  title: Architecture
  description: Core components, data flow, and design patterns that enable efficient sync coordination.
  icon: i-lucide-layout-dashboard
  to: architecture
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Traits & Abstractions
  description: Core traits, components, and architectural patterns in the sync system.
  icon: i-lucide-puzzle
  to: traits-and-abstractions
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Network Protocol
  description: Node requests and responses for syncing.
  icon: i-lucide-network
  to: network-protocol
  variant: outline
  ---
  ::::
:::

## Further Reading

**Understanding the System**

- [Architecture](architecture) - Core components, data flow, and design patterns
- [Node Sync System](#node-sync-system) - Node lifecycles and sync mode selection

**Implementation Details**

- [Traits and Abstractions](traits-and-abstractions) - System design and component coordination
- [Network Protocol](network-protocol) - Message specifications and communication patterns

**Sync Strategy Deep Dives**

*Macro Sync Strategies:*

- [History Macro Sync](macro-sync/history-macro-sync) - Full chain download for history nodes
- [Light Macro Sync](macro-sync/light-macro-sync) - Verified macro sync for full and light nodes
- [Pico Macro Sync](macro-sync/pico-macro-sync) - Optimistic sync with automatic fallback

*Live Sync Strategies:*

- [Block Live Sync](live-sync/block-live-sync) - Real-time block synchronization
- [State Live Sync](live-sync/state-live-sync) - Complete state maintenance for full nodes

## Sync Lifecycle

When a node starts, it follows this coordination pattern:

1. **Peer Discovery** through the network layer
2. **Macro Sync Strategy Sync** based on node configuration
3. **Live Sync Transition** to maintain real-time synchronization
4. **Consensus Detection** through peer agreement analysis

The `Consensus` component orchestrates this process, while the `Syncer` manages strategy-specific implementations through pluggable trait interfaces.

::callout{icon="i-tabler-bulb"}
**Developer Focus**

This documentation targets developers working on sync logic and node implementations.

For node operation, see the [Node Setup Guide](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#README).
::
