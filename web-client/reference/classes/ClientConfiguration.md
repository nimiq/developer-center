[@nimiq/core](../globals.md) / ClientConfiguration

# Class: ClientConfiguration

Defined in: @nimiq/core/types/wasm/web.d.ts:967

Use this to provide initialization-time configuration to the Client.
This is a simplified version of the configuration that is used for regular nodes,
since not all configuration knobs are available when running inside a browser.

## Constructors

### Constructor

> **new ClientConfiguration**(): `ClientConfiguration`

Defined in: @nimiq/core/types/wasm/web.d.ts:974

Creates a default client configuration that can be used to change the client's configuration.

Use its `instantiateClient()` method to launch the client and connect to the network.

#### Returns

`ClientConfiguration`

## Methods

### build()

> **build**(): [`PlainClientConfiguration`](../interfaces/PlainClientConfiguration.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1029

Returns a plain configuration object to be passed to `Client.create`.

#### Returns

[`PlainClientConfiguration`](../interfaces/PlainClientConfiguration.md)

***

### desiredPeerCount()

> **desiredPeerCount**(`desired_peer_count`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1004

Sets the desired number of peers the client should try to connect to.
Default is `12`.

#### Parameters

##### desired\_peer\_count

`number`

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:968

#### Returns

`void`

***

### logLevel()

> **logLevel**(`log_level`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:994

Sets the log level that is used when logging to the console.

Possible values are `'trace' | 'debug' | 'info' | 'warn' | 'error'`.
Default is `'info'`.

#### Parameters

##### log\_level

`string`

#### Returns

`void`

***

### network()

> **network**(`network`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:981

Sets the network ID the client should use. Input is case-insensitive.

Possible values are `'MainAlbatross' | 'TestAlbatross' | 'DevAlbatross'`.
Default is `'MainAlbatross'`.

#### Parameters

##### network

`string`

#### Returns

`void`

***

### onlySecureWsConnections()

> **onlySecureWsConnections**(`only_secure_ws_connections`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:999

Sets whether the client should only connect to secure WebSocket connections.
Default is `true`.

#### Parameters

##### only\_secure\_ws\_connections

`boolean`

#### Returns

`void`

***

### peerCountMax()

> **peerCountMax**(`peer_count_max`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1009

Sets the maximum number of peers the client should connect to.
Default is `50`.

#### Parameters

##### peer\_count\_max

`number`

#### Returns

`void`

***

### peerCountPerIpMax()

> **peerCountPerIpMax**(`peer_count_per_ip_max`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1014

Sets the maximum number of peers the client should connect to per IP address.
Default is `10`.

#### Parameters

##### peer\_count\_per\_ip\_max

`number`

#### Returns

`void`

***

### peerCountPerSubnetMax()

> **peerCountPerSubnetMax**(`peer_count_per_subnet_max`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1019

Sets the maximum number of peers the client should connect to per subnet.
Default is `10`.

#### Parameters

##### peer\_count\_per\_subnet\_max

`number`

#### Returns

`void`

***

### seedNodes()

> **seedNodes**(`seeds`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:987

Sets the list of seed nodes that are used to connect to the Nimiq Albatross network.

Each array entry must be a proper Multiaddr format string.

#### Parameters

##### seeds

`any`[]

#### Returns

`void`

***

### syncMode()

> **syncMode**(`sync_mode`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1025

Sets the sync mode that shoud be used.
Only "light" and "pico" are supported for web clients
Default is "light"

#### Parameters

##### sync\_mode

`string`

#### Returns

`void`
