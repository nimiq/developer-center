> **default**(`module_or_path?`): `Promise`\<[`InitOutput`](../interfaces/InitOutput.md)\>

Defined in: @nimiq/core/types/wasm/web.d.ts:2624

If `module_or_path` is {RequestInfo} or {URL}, makes a request and
for everything else, calls `WebAssembly.instantiate` directly.

## Parameters

### module\_or\_path?

Passing `InitInput` directly is deprecated.

\{ `module_or_path`: InitInput \| Promise\<InitInput\>; \} | [`InitInput`](../type-aliases/InitInput.md) | `Promise`\<[`InitInput`](../type-aliases/InitInput.md)\>

## Returns

`Promise`\<[`InitOutput`](../interfaces/InitOutput.md)\>
