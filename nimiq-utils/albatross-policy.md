# Albatross Policy

Constants and utility functions for blockchain configuration, supply, and block calculations.

## Usage

### Basic usage

```typescript
import { batchIndexAt, epochIndexAt, SLOTS_PER_EPOCH } from '@nimiq/utils/albatross-policy'

const currentEpoch = epochIndexAt(blockNumber)
const batch = batchIndexAt(blockNumber)
console.log(`Block ${blockNumber} is in epoch ${currentEpoch}, batch ${batch}`)
```

## API

| Method | Description |
| --- | --- |
| `epochIndexAt(blockNumber)` | Returns epoch index for given block number |
| `batchIndexAt(blockNumber)` | Returns batch index for given block number |
| `SLOTS_PER_EPOCH` | Number of slots in each epoch |
| `BATCHES_PER_EPOCH` | Number of batches in each epoch |
| `BLOCKS_PER_BATCH` | Number of blocks in each batch |
| `TOTAL_SUPPLY` | Total supply in smallest units |
