# Pico Macro Sync

Pico Macro Sync is a macro sync mechanism used by pico nodes to quickly determine the canonical chain state by querying peers and comparing their responses. It does not rely on ZKPs verification but instead uses a lightweight, peer-based trust approach. After syncing with the macro chain, the syncing peers follows with the [Block Live Sync](block-live-sync.md).

The Pico Macro Sync operates on a per-peer basis. For each connected peer, the syncing node performs the following steps:

1. Request epoch IDs from the peer.
2. Request the latest election or checkpoint blocks from the peer, if available.
3. The node compares the received state with its own. If the information matches, the peer is considered consistent. If the data is inconsistent, the node [falls back](#fallback) to Light Macro Sync.

Peers are classified based on these outcomes and tracked individually. This classification helps the syncing node decide whether it can move to live sync or if it should fallback to a more robust sync mode.

### Fallback

Pico nodes do not verify ZKPs, so they cannot determine whether a peer is outdated, behaving incorrectly, or if the network state is inconsistent for another reason. As a result, any discrepancy during syncing leads to a fallback to [Light Macro Sync](light-macro-sync.md), which uses ZKPs to ensure correctness.
