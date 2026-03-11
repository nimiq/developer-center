# Supply Calculator

Calculates total Proof-of-Stake supply at specific times considering supply decay.

## Usage

### Basic usage

```typescript
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

const timestamp = Date.now()
const supply = posSupplyAt(timestamp)
console.log(`Current PoS supply: ${supply}`)
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
        posSupplyAt(timestamp)
      </code>
    </td>
    
    <td>
      Returns PoS supply at given timestamp
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        supplyAfter(blocks)
      </code>
    </td>
    
    <td>
      Returns supply after specified number of blocks
    </td>
  </tr>
</tbody>
</table>
