[@nimiq/core](../globals.md) / PlainPeerInfo

# Interface: PlainPeerInfo

Defined in: @nimiq/core/types/wasm/web.d.ts:255

Information about a networking peer.

## Properties

### address

> **address**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:263

Address of the peer in `Multiaddr` format

***

### peerId

> **peerId**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:259

A libp2p peer ID

***

### services

> **services**: [`PlainService`](../type-aliases/PlainService.md)[]

Defined in: @nimiq/core/types/wasm/web.d.ts:271

List of services the peer is providing

***

### type

> **type**: `"full"` \| `"history"` \| `"light"`

Defined in: @nimiq/core/types/wasm/web.d.ts:267

Node type of the peer
