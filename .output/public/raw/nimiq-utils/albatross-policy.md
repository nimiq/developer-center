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

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        epochIndexAt(blockNumber)
      </code>
    </td>
    
    <td>
      Returns epoch index for given block number
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        batchIndexAt(blockNumber)
      </code>
    </td>
    
    <td>
      Returns batch index for given block number
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        SLOTS_PER_EPOCH
      </code>
    </td>
    
    <td>
      Number of slots in each epoch
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        BATCHES_PER_EPOCH
      </code>
    </td>
    
    <td>
      Number of batches in each epoch
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        BLOCKS_PER_BATCH
      </code>
    </td>
    
    <td>
      Number of blocks in each batch
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        TOTAL_SUPPLY
      </code>
    </td>
    
    <td>
      Total supply in smallest units
    </td>
  </tr>
</tbody>
</table>
