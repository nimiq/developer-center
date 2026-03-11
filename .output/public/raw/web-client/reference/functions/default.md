# Default

> @nimiq/core / default

[@nimiq/core](../globals) / default

# Function: default()

> **default**(`module_or_path?`): `Promise`<[`InitOutput`](../interfaces/InitOutput)>

Defined in: @nimiq/core/types/wasm/web.d.ts:2649

If `module_or_path` is {RequestInfo} or {URL}, makes a request and
for everything else, calls `WebAssembly.instantiate` directly.

## Parameters

### module_or_path?

Passing `InitInput` directly is deprecated.

{ `module_or_path`: InitInput | Promise<InitInput>; } | [`InitInput`](../type-aliases/InitInput) | `Promise`<[`InitInput`](../type-aliases/InitInput)>

## Returns

`Promise`<[`InitOutput`](../interfaces/InitOutput)>
