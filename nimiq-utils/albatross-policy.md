# Albatross Policy

This module defines various constants and utility functions related to the blockchain's configuration, supply, and block calculations.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import {
  epochIndexAt,
  isElectionBlockAt,
  isMacroBlockAt,
  TOTAL_SUPPLY
} from '@nimiq/utils/albatross-policy'

// Retrieve the total supply
console.log(TOTAL_SUPPLY) // Output: 210000000000000

// Check the epoch index for a block
const blockNumber = 5000
const genesisBlockNumber = 1000
const blocksPerEpoch = 200
const epochIndex = epochIndexAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
const isMacro = isMacroBlockAt(blockNumber, genesisBlockNumber, 10)
const isElection = isElectionBlockAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
```

## API Reference

### Constants

#### `TOTAL_SUPPLY: number`

The total supply of Nimiq tokens in Luna (1 NIM = 100,000 Luna).

**Value:** `210000000000000` (21 billion NIM in Luna)

### Functions

#### `epochIndexAt(blockNumber: number, genesisBlockNumber: number, blocksPerEpoch: number): number`

Calculates the epoch index for a given block number.

**Parameters:**
- `blockNumber` - The block number to calculate the epoch for
- `genesisBlockNumber` - The genesis block number
- `blocksPerEpoch` - Number of blocks per epoch

**Returns:**
- `number` - The epoch index

**Example:**
```typescript
const blockNumber = 5000
const genesisBlockNumber = 1000
const blocksPerEpoch = 200
const epochIndex = epochIndexAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
console.log(epochIndex) // Output: 20
```

#### `isMacroBlockAt(blockNumber: number, genesisBlockNumber: number, blocksPerBatch: number): boolean`

Determines if a block at a given height is a macro block.

**Parameters:**
- `blockNumber` - The block number to check
- `genesisBlockNumber` - The genesis block number
- `blocksPerBatch` - Number of blocks per batch

**Returns:**
- `boolean` - `true` if the block is a macro block, `false` otherwise

**Example:**
```typescript
const blockNumber = 1060
const genesisBlockNumber = 1000
const blocksPerBatch = 60
const isMacro = isMacroBlockAt(blockNumber, genesisBlockNumber, blocksPerBatch)
console.log(isMacro) // Output: true
```

#### `isElectionBlockAt(blockNumber: number, genesisBlockNumber: number, blocksPerEpoch: number): boolean`

Determines if a block at a given height is an election block.

**Parameters:**
- `blockNumber` - The block number to check
- `genesisBlockNumber` - The genesis block number
- `blocksPerEpoch` - Number of blocks per epoch

**Returns:**
- `boolean` - `true` if the block is an election block, `false` otherwise

**Example:**
```typescript
const blockNumber = 1200
const genesisBlockNumber = 1000
const blocksPerEpoch = 200
const isElection = isElectionBlockAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
console.log(isElection) // Output: true
```

## Blockchain Structure

The Nimiq blockchain follows a specific structure:

### Block Types

- **Micro blocks** - Regular blocks containing transactions
- **Macro blocks** - Produced at the end of each batch, provide finality
- **Election blocks** - Special macro blocks that elect validators for the next epoch

### Timing

- **Blocks per second** - Approximately 1 block per second
- **Blocks per batch** - 60 blocks (~1 minute)
- **Batches per epoch** - 720 batches (~12 hours)
- **Blocks per epoch** - 43,200 blocks (~12 hours)

## Use Cases

- **Block explorers** - Determine block types and epoch information
- **Validators** - Calculate election and macro block timing
- **Analytics** - Track blockchain structure and timing
- **Applications** - Understand transaction finality timing

## Related Modules

- [Supply Calculator](./supply-calculator) - Calculate supply at specific times
- [Staking Rewards Calculator](./staking-rewards-calculator) - Calculate staking rewards
- [ValidationUtils](./validation-utils) - Validate blockchain data

## Next Steps

- Learn about [Supply Calculator](./supply-calculator) for supply calculations
- Explore [Staking Rewards Calculator](./staking-rewards-calculator) for rewards
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
