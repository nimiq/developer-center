# InitSync

> @nimiq/core / initSync

[@nimiq/core](../globals) / initSync

# Function: initSync()

> **initSync**(`module`): [`InitOutput`](../interfaces/InitOutput)

Defined in: @nimiq/core/types/wasm/web.d.ts:2639

Instantiates the given `module`, which can either be bytes or
a precompiled `WebAssembly.Module`.

## Parameters

### module

Passing `SyncInitInput` directly is deprecated.

{ `module`: [`SyncInitInput`](../type-aliases/SyncInitInput); } | [`SyncInitInput`](../type-aliases/SyncInitInput)

## Returns

[`InitOutput`](../interfaces/InitOutput)
