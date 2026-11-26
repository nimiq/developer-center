---
title: Chain configuration
description: How a bridge instance is configured for a specific network.
icon: i-tabler-adjustments
navigation:
  title: Chain configuration
  order: 3
---

# Chain configuration

Each bridge contract on Nimiq connects Nimiq to a single other network, and everything it knows about that network comes from its **chain configuration**. The configuration is part of the data a bridge contract is created with. It cannot be changed afterward, so the only way to fix a mistake in it is a new bridge contract.

## Why a bridge needs one

Releasing NIM means accepting a record that another network produced, in that network's format. The Nimiq protocol has no smart contracts, so a bridge contract cannot run code written for that network. Instead, the other network is described to Nimiq once, at creation, with the hash function its record tree uses, the format of its addresses, the contract whose records the bridge accepts, and a small program that reads a burn record. With that description, one account type can serve any network.

Consensus uses the configuration on every release. It reads the burn record with the validation program, and checks the record's source contract and chain id, the hash of the proof and its depth. A mistake in any of these affects every release the bridge makes.

The configuration also matters to anyone who creates or checks a bridge:

- **The creator of a bridge contract** writes it, and has to get it right the first time.
- **Anyone checking an existing bridge** reads it. A bridge account on Nimiq shows its oracle and source chain id, but not its program or the contract it accepts records from. Those are only in the transaction that created it.

## Where it lives

A bridge contract is created with its `owner`, the address of its [oracle](/bridge/how-it-works/oracles), the `source_chain_id` of the network it serves, and the `chain_config`. The owner has no authority over the contract once it exists.

```rust
pub struct ChainConfig {
    pub chain_id: u32,
    pub hash_function: AnyHash,
    pub address_format: AddressFormat,
    pub endianness: Endianness,
    pub block_time: Duration,
    pub validation_program: ValidationProgram,
    pub max_proof_depth: u32,
    pub source_contract: Vec<u8>,
}
```

| Field | Type | What it does |
| --- | --- | --- |
| `chain_id` | `u32` | Identifies the other network. Must equal `source_chain_id`, and every record a release carries must name the same chain id |
| `hash_function` | `AnyHash` | The hash function of the relayer's record tree, used for the leaf and every node of a release proof. `Blake2b`, `Sha256` or `Keccak256`. Must match the oracle's hash function |
| `address_format` | `AddressFormat` | The address format of the other network, one of `Nimiq` or `Ethereum` (20 bytes), `Bitcoin` (20 to 64 bytes), or `Custom`. Used to check `source_contract` at creation |
| `endianness` | `Endianness` | The byte order of the other network's encodings, `BigEndian` or `LittleEndian`. Informational only. No check reads it. The validation program's `LoadU64` and `LoadU32` operations name the byte order they read in |
| `block_time` | `Duration` | The average time between blocks on the other network. Informational only. No check depends on it |
| `validation_program` | `ValidationProgram` | The program that reads a burn record. See [The validation program](#the-validation-program) |
| `max_proof_depth` | `u32` | The maximum number of record-tree levels in a release proof. Levels added later as the oracle reuses its slots do not count, so a proof [never expires](/bridge/how-it-works/oracles#proofs-grow-and-nothing-is-discarded) |
| `source_contract` | `Vec<u8>` | The one contract on the other network whose records this bridge releases, in that network's address format |

`source_contract` matters because the relayer commits every record the [forwarder](/bridge/how-it-works/oracles#the-outbound-forwarder) emits, from any contract. A record is releasable only if the source it names equals this value byte for byte.

## The validation program

A burn record reaches Nimiq as bytes. The validation program turns those bytes into the values a release needs. It runs inside consensus, on every release, and whenever a node decides whether to admit a release to its mempool.

The program only **extracts**. It reads values and stores them under fixed names; it never decides whether a release is valid. Consensus makes that decision afterward, by checking the stored values against the bridge contract and the release transaction.

### What a program must store

| Name | Type | What consensus does with it |
| --- | --- | --- |
| `source_contract` | bytes | Must equal `source_contract` in the configuration |
| `amount` | integer, in luna | Must not be zero and must be a valid NIM amount. The release's value and fee must add up to exactly this amount |
| `target_address` | 20 bytes | The release must be signed by this address and pay it |
| `target_nonce` | integer | Must be exactly one higher than the last nonce released to `target_address` |
| `burn_block_height` | integer | Required, but not used by any check |
| `target_chain_id` | integer | Must equal `source_chain_id` |
| `bridge_address` | 20 bytes | Must be the address of the bridge contract executing the release |

A program that leaves out any of these, or stores a value of the wrong type, makes every release invalid.

The last two names bind a record to one network and one bridge. `target_chain_id` stops a record from the same contract address on a different network from being accepted. `bridge_address` stops a second bridge that accepts the same source contract from releasing every past burn a second time, starting from empty nonce counters.

### How a program runs

A program is a list of operations that run in order on a stack. Values on the stack are 64-bit integers, 32-bit integers or byte strings.

- **Reads are bounds-checked.** Every read names an offset into the record, and a read that falls outside it fails.
- **Programs always finish.** The only jump moves forward, so there are no loops.
- **Arithmetic is checked.** Overflow, underflow and division by zero fail instead of wrapping around.
- **Values are stored by name.** `Store` saves the top of the stack under a name; `Load` reads it back.

Any failure, whether a read out of range, an overflow, an empty stack or a missing name, ends the program, and the release is [invalid rather than failed](/bridge/how-it-works/burn-and-release#a-release-either-succeeds-or-is-invalid). The bridge is not debited and nobody pays a fee.

### Operations

Stack effects are written as before and after, with the top of the stack on the right. In `[a, b]`, `b` is on top.

| Group | Operations | Purpose |
| --- | --- | --- |
| [Loading](#loading) | `PushConst`, `LoadBytes`, `LoadU64`, `LoadU32`, `LoadAddress`, `LoadEvmU64`, `LoadEvmU64Scaled` | Push a constant, or read bytes, integers or a 20-byte address from the record |
| [Arithmetic](#arithmetic) | `Add`, `Sub`, `Mul`, `Div`, `Mod` | Calculate with values read from the record |
| [Comparison](#comparison) | `Eq`, `Lt`, `Gt`, `IsZero` | Compare two values, or one with zero, producing 1 or 0 |
| [Logic](#logic) | `And`, `Or`, `Not` | Combine conditions, producing 1 or 0 |
| [Stack](#stack) | `Dup`, `Swap`, `Pop` | Arrange values for the next operation |
| [Control flow](#control-flow) | `JumpIfZero` | Skip a number of operations, forward only |
| [Named values](#named-values) | `Store`, `Load` | Save a value under a name, or read it back |

#### Loading

| Operation | Stack | What it does |
| --- | --- | --- |
| `PushConst(value)` | `[] → [value]` | Pushes a 64-bit constant |
| `LoadBytes` | `[offset, length] → [bytes]` | Reads `length` bytes from the record at `offset` |
| `LoadU64(byte order)` | `[offset] → [integer]` | Reads an 8-byte integer in the given byte order |
| `LoadU32(byte order)` | `[offset] → [integer]` | Reads a 4-byte integer in the given byte order |
| `LoadAddress` | `[offset] → [bytes]` | Reads 20 bytes |
| `LoadEvmU64` | `[offset] → [integer]` | Reads a 32-byte big-endian EVM word. Fails if the value does not fit in 64 bits |
| `LoadEvmU64Scaled(divisor)` | `[offset] → [integer]` | Reads a 32-byte big-endian EVM word and divides it by `divisor` at full width, dropping any remainder. Fails if the result does not fit in 64 bits |

`LoadEvmU64Scaled` is for a token with more decimals than NIM. Dividing before narrowing to 64 bits keeps large amounts readable, where narrowing first would cap them.

#### Arithmetic

| Operation | Stack | What it does |
| --- | --- | --- |
| `Add` | `[a, b] → [a + b]` | Fails on overflow |
| `Sub` | `[a, b] → [a - b]` | Fails if `b` is greater than `a` |
| `Mul` | `[a, b] → [a × b]` | Fails on overflow |
| `Div` | `[a, b] → [a ÷ b]` | Drops any remainder. Fails if `b` is zero |
| `Mod` | `[a, b] → [a mod b]` | Fails if `b` is zero |

#### Comparison

| Operation | Stack | What it does |
| --- | --- | --- |
| `Eq` | `[a, b] → [1 or 0]` | 1 if `a` equals `b` |
| `Lt` | `[a, b] → [1 or 0]` | 1 if `a` is less than `b` |
| `Gt` | `[a, b] → [1 or 0]` | 1 if `a` is greater than `b` |
| `IsZero` | `[a] → [1 or 0]` | 1 if `a` is zero |

#### Logic

These treat any non-zero value as true and produce 1 or 0. They are logical, not bitwise, so `And` cannot be used to mask bits.

| Operation | Stack | What it does |
| --- | --- | --- |
| `And` | `[a, b] → [1 or 0]` | 1 if both are non-zero |
| `Or` | `[a, b] → [1 or 0]` | 1 if either is non-zero |
| `Not` | `[a] → [1 or 0]` | 1 if `a` is zero |

#### Stack

| Operation | Stack | What it does |
| --- | --- | --- |
| `Dup` | `[a] → [a, a]` | Copies the top value |
| `Swap` | `[a, b] → [b, a]` | Swaps the top two values |
| `Pop` | `[a] → []` | Discards the top value |

#### Control flow

| Operation | Stack | What it does |
| --- | --- | --- |
| `JumpIfZero(n)` | `[condition] → []` | If the condition is zero, skips the next `n` operations |

#### Named values

| Operation | Stack | What it does |
| --- | --- | --- |
| `Store(name)` | `[value] → []` | Saves the value under `name` |
| `Load(name)` | `[] → [value]` | Pushes the value saved under `name`. Fails if nothing was saved |

The code defines five more operations, `Assert` and four `PushExpected` operations. A bridge contract whose program uses any of them is [rejected at creation](#creation-checks).

## Creation checks

Consensus rejects a bridge contract at creation if its configuration could accept deposits but never release them. A rejected configuration can be corrected and submitted again; an accepted one cannot be fixed at all.

| Check | What it prevents |
| --- | --- |
| `source_chain_id` is not zero, and `chain_id` equals it | Records that can never name the right chain |
| `source_contract` is a valid address in `address_format`, and not all zero bytes | A bridge that accepts records from no real contract |
| `hash_function` is `Blake2b`, `Sha256` or `Keccak256` | A hash function the release path does not support. `Sha512` is rejected |
| The oracle exists, is an oracle contract, and uses the same hash function | Proofs that can never match what the oracle stores |
| The program contains no `Assert` and no `PushExpected` operation | Operations that exist for a validation mode releases never use, and that make every release fail |

The checks catch the mistakes that are visible in the configuration itself. They cannot catch a program that reads the wrong offsets, or a `source_contract` that is a real address but the wrong one. Such a bridge can fail to release burns, or read them incorrectly, and its configuration can never be corrected.
