[@nimiq/core](../globals.md) / PlainSetSignalDataData

# Interface: PlainSetSignalDataData

Defined in: @nimiq/core/types/wasm/web.d.ts:344

JSON-compatible and human-readable format of set signal data (warm-key) data.

## Properties

### mode

> **mode**: [`PlainSignalDataUpdateMode`](../type-aliases/PlainSignalDataUpdateMode.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:351

Whether this transaction replaces the entire signal data (`full`) or only updates the
protocol-version bytes (`version`).

***

### newSignalData

> **newSignalData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:356

For `full` mode: the new signal data as a hex string, or `null` to clear it. Always `null`
in `version` mode.

***

### raw

> **raw**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:345

***

### validator

> **validator**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:346

***

### version

> **version**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:360

For `version` mode: the signaled protocol version; `null` in `full` mode.
