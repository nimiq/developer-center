---
title: Sync and Network Consensus
description: Design-level overview of how Nimiq nodes synchronize with the blockchain, across all node types and sync modes.
links:
  - title: Architecture
    label: Overview & Diagrams
    href: architecture
    description: Core components, data flow, and design patterns that enable efficient sync coordination.
    span: 4
  - title: Traits & Abstractions
    label: Technical Reference
    href: traits-and-abstractions
    description: Core traits, components, and architectural patterns in the sync system.
    span: 4
  - title: Network Protocol
    label: Requests & Messages
    href: network-protocol
    description: Node requests and responses for syncing.
    span: 4
---

# Node Sync System

Nimiq implements a **two-phase synchronization architecture** that separates epoch-level state synchronization from real-time block processing. This design enables efficient sync strategies tailored to different node capabilities.

All nodes follow a **two-phase synchronization pattern**: **macro sync** followed by **live sync**. During macro sync, nodes download and verify macro blocks (checkpoints/epochs) to reach the current network state efficiently. Once macro sync completes, nodes transition to live sync to receive and validate the latest micro blocks in real-time. This modular approach allows each node type to optimize for its specific use case.

## Sync Comparison Table

|  | **History Node** | **Full Node** | **Light Node** | **Pico Node** |
| --- | --- | --- | --- | --- |
| **Verification** | Entire history | Full blocks and uses ZKP | Uses ZKPs | No ZKPs |
| **Macro Sync Method** | [History Macro Sync](macro-sync/history-macro-sync) | [Light Macro Sync](macro-sync/light-macro-sync) | [Light Macro Sync](macro-sync/light-macro-sync) | [Pico Macro Sync](macro-sync/pico-macro-sync)* |
| **Live Sync Method** | [Block Live Sync](live-sync/block-live-sync) | [State Live Sync](live-sync/state-live-sync) | [Block Live Sync](live-sync/block-live-sync) | [Block Live Sync](live-sync/block-live-sync) |
| **Consensus Level** | Fully verified | Verified | Verified | Trust-based |
| **Fallback** | N/A | N/A | N/A | *Falls back to [Light Macro Sync](macro-sync/light-macro-sync) |
| **Sync Speed** | Slower, full chain from genesis | Efficient, grows with chain length | Fast, includes proof verification | Faster, based on peer responses |
| **Web Client** | Not supported | Not supported | Supported | Supported |

### History Nodes

- Complete blockchain history from genesis
- Deep chain queries, historical analysis, and serving data to other nodes
- Can act as validators and provide historical data to the network
- Rely on other history nodes for initial sync

### Full Nodes

- Complete current state with pruned history - maintains full validation capability
- Serve data to other nodes, generate and verify ZKPs, validate transactions and produce blocks (if validator)
- Can serve as prover nodes (ZKP generation) and validators
- Rely on full or history nodes for initial sync

### Light Nodes

- Latest election block with ZKP and subsequent micro block headers only
- Transaction verification and sending with cryptographic security guarantees
- Browser/mobile deployment, web client integration (WASM support)
- Rely on full or history nodes for data availability and ZKP proofs

### Pico Nodes

- Sync with the latest election block only (no historical data or ZKP verification)
- Ultra-fast startup with trust-based consensus and automatic fallback to secure sync
- Development environments, testing, and trusted network scenarios
- Rely on full or history nodes for data availability and fallback verification

### Service Nodes

**[Prover Nodes](/learn/protocol/prover-node.md)**:
Generate [zero-knowledge proofs](/learn/protocol/ZKP-and-recursive-SNARKs.md) for light and full node sync. Require significant computational resources.

**[Validator Nodes](/learn/protocol/validators/validators.md)**:
Produce blocks and participate in consensus. Any node with a minimum of 100'000 NIM deposit that runs a full or history client can become a validator.

## Architecture Components

**Coordination Layer**: `Consensus` and `Syncer` components manage sync lifecycle and peer relationships, enabling seamless transitions between sync phases.

**Pluggable Strategies**: `MacroSync` and `LiveSync` trait implementations allow optimization for different resource constraints.

**Network Layer**: Request/response and gossip protocols with async streams for efficient concurrent peer processing.

**Queue Architecture**: Automatic peer rotation, retry logic, and backpressure control ensure reliable data retrieval.

<Grid class="nq-raw" :items="$frontmatter.links" mt-64 />

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
- [Light Macro Sync](macro-sync/light-macro-sync) - ZKP-verified state sync for full nodes
- [Pico Macro Sync](macro-sync/pico-macro-sync) - Optimistic sync with automatic fallback

*Live Sync Strategies:*

- [Block Live Sync](live-sync/block-live-sync) - Real-time block synchronization
- [State Live Sync](live-sync/state-live-sync) - Complete state maintenance for full nodes

## Sync Lifecycle

When a node starts, it follows this coordination pattern:

1. **Peer Discovery** through the network layer
2. **Macro Sync Strategy Sync** based on node configuration
3. **Consensus Detection** through peer agreement analysis
4. **Live Sync Transition** to maintain real-time synchronization

The `Consensus` component orchestrates this process, while the `Syncer` manages strategy-specific implementations through pluggable trait interfaces.

::: tip Developer Focus
This documentation targets developers working on sync logic and node implementations.

For node operation, see the [Node Setup Guide](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#README).
:::
