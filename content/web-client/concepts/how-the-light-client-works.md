---
icon: i-tabler:cpu
navigation:
  title: How the Light Client Works
  order: 3
description: What the Nimiq light client is, how it syncs with the network, what data it can access, and what its limitations are.
---

# How the Light Client Works

The Nimiq Web Client is a light client — a node that participates in the blockchain network without storing the full chain history. It connects directly to other peers, syncs enough state to verify the current chain tip, and gives your application access to account balances, recent transactions, and real-time block events. It runs as WebAssembly in browsers and as a native module in Node.js.

## Sync modes

The client supports two sync modes. You choose one at configuration time via `ClientConfiguration.syncMode()`.

| Mode | How it syncs | Trust model | Best for |
| :--- | :--- | :--- | :--- |
| **Light** (default) | Downloads and verifies the chain of election block headers using the validators' signatures, then follows subsequent micro block headers in real time. | Cryptographically verified — no trust in individual peers required. | Production applications where security matters. |
| **Pico** | Downloads only the latest election block and trusts connected peers optimistically. Falls back to light sync automatically if a conflicting peer is detected. | Trust-based with automatic fallback to trustless sync. | Development, testing, and fast prototyping where startup speed matters more than cryptographic verification. |

Both modes transition to [block live sync](/protocol/node-sync/live-sync/block-live-sync) once the initial sync is complete, following new blocks as they are produced.

For a deeper look at the sync protocols, see the [node sync documentation](/protocol/node-sync/).

## Consensus

"Consensus established" means the client is confident it has an accurate view of the current chain state. For a light client, this requires:

- At least **3 connected peers**
- Initial sync completed (macro sync phase finished)
- One of:
  - **Network activity**: the client has accepted 5 or more block announcements that extend its local chain
  - **Peer agreement**: the client knows the head block of at least 2/3 of its connected peers, and they agree

Once consensus is established, `waitForConsensusEstablished()` resolves and the client is ready to serve queries and broadcast transactions. If the client loses enough peers or detects a chain reorganization, consensus can be lost and re-established.

You can monitor consensus state changes with `addConsensusChangedListener()`.

## What the client can access

A light client stores micro block **headers only** — no block bodies, no transaction payloads for past blocks. This determines what data your application can and cannot query.

**Available:**

- Current account state — balances, account types, nonces — via `getAccount()` and `getAccounts()`
- Current validator and staker data via `getValidator()` and `getStaker()`
- Recent transactions involving a specific address via `getTransactionsByAddress()`
- The current head block height and hash
- Real-time events: new blocks, consensus changes, peer changes, and transactions for watched addresses
- Network state: peer count, connection status

**Not available:**

- Block bodies (transactions) for past blocks — the client only has headers
- Arbitrary historical blocks — `getBlock()` fails if the block is not in local memory
- Past account state at a specific block height — only the current state is queryable
- Full transaction history from genesis — queries are bounded by `sinceBlockHeight`

If your application needs full historical data or block bodies, use the [RPC interface](/rpc/) with a full node or history node instead. See [Web Client vs RPC](./web-client-vs-rpc) for a comparison.

## How it connects to the network

The client is a peer in the Nimiq network — not a consumer of a server API. It establishes direct WebSocket connections to other nodes and participates in the peer-to-peer protocols:

- **Bootstrap**: connects to seed nodes on startup to discover initial peers
- **Peer discovery**: learns about additional peers from connected nodes and maintains an address book
- **Block gossip**: receives block announcements as they are produced
- **Transaction broadcast**: sends signed transactions directly to the network

You can configure peer behaviour through `ClientConfiguration`:

| Setting | Default | What it controls |
| :--- | :--- | :--- |
| `desiredPeerCount()` | 12 | Target number of connected peers |
| `peerCountMax()` | 50 | Maximum number of peer connections |
| `onlySecureWsConnections()` | `true` | Require WSS (secure WebSocket) connections |
| `seedNodes()` | Network defaults | Override the default seed nodes (Multiaddr format) |

## Further reading

- [Node sync architecture](/protocol/node-sync/) — the full sync protocol specification
- [Light macro sync](/protocol/node-sync/macro-sync/light-macro-sync) — the trustless light macro sync protocol
- [Pico macro sync](/protocol/node-sync/macro-sync/pico-macro-sync) — the trust-based fast sync protocol
- [Browser vs Server](./browser-vs-server) — runtime-specific differences when using the client
