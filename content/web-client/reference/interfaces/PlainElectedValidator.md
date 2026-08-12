[@nimiq/core](../globals.md) / PlainElectedValidator

# Interface: PlainElectedValidator

Defined in: @nimiq/core/types/wasm/web.d.ts:173

JSON-compatible and human-readable format of a validator that is elected for the current
epoch, together with the number of validator slots assigned to it.

Unlike [PlainValidator](PlainValidator.md), this reflects the slot distribution that was fixed at the most
recent election block. The number of slots is the metric used on-chain to evaluate support for
protocol upgrades.

## Properties

### address

> **address**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:177

The validator\'s address, in user-friendly format.

***

### numSlots

> **numSlots**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:181

The number of validator slots assigned to this validator in the current epoch.
