> **initSync**(`module`): [`InitOutput`](../interfaces/InitOutput.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2614

Instantiates the given `module`, which can either be bytes or
a precompiled `WebAssembly.Module`.

## Parameters

### module

Passing `SyncInitInput` directly is deprecated.

\{ `module`: [`SyncInitInput`](../type-aliases/SyncInitInput.md); \} | [`SyncInitInput`](../type-aliases/SyncInitInput.md)

## Returns

[`InitOutput`](../interfaces/InitOutput.md)
