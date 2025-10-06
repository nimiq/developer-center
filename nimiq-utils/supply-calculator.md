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

| Method | Description |
| --- | --- |
| `posSupplyAt(timestamp)` | Returns PoS supply at given timestamp |
| `supplyAfter(blocks)` | Returns supply after specified number of blocks |
