# Supply Calculator

Provides functionality to calculate the total Proof-of-Stake (PoS) supply of a cryptocurrency at a specific time, considering the supply decay over time.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

// Calculate PoS supply at a specific timestamp
const timestampMs = Date.now() // Current timestamp
const supply = posSupplyAt(timestampMs)
console.log(supply) // Output: 105432.5678 (example value)
```

## API Reference

### Functions

#### `posSupplyAt(timestampMs: number): number`

Calculates the total Proof-of-Stake supply at a given timestamp.

**Parameters:**
- `timestampMs` - The timestamp in milliseconds to calculate the supply for

**Returns:**
- `number` - The total PoS supply at the specified time

**Example:**
```typescript
// Calculate supply at genesis
const genesisTimestamp = 1634025600000 // Example genesis timestamp
const genesisSupply = posSupplyAt(genesisTimestamp)
console.log(`Genesis supply: ${genesisSupply}`)

// Calculate current supply
const currentSupply = posSupplyAt(Date.now())
console.log(`Current supply: ${currentSupply}`)

// Calculate supply at a specific date
const specificDate = new Date('2024-01-01').getTime()
const specificSupply = posSupplyAt(specificDate)
console.log(`Supply on Jan 1, 2024: ${specificSupply}`)
```

## Supply Mechanics

The Nimiq PoS supply follows a specific emission schedule:

### Supply Decay

- **Initial supply** - Starting supply at PoS genesis
- **Decay rate** - Supply emission decreases over time
- **Halving events** - Supply emission is reduced at specific intervals
- **Maximum supply** - Total supply approaches but never exceeds the cap

### Calculation Factors

- **Genesis timestamp** - The starting point for supply calculations
- **Block time** - Average time between blocks
- **Emission rate** - New tokens created per block
- **Decay function** - Mathematical function governing supply reduction

## Use Cases

- **Portfolio tracking** - Calculate total supply for market cap calculations
- **Analytics** - Track supply growth over time
- **Economic modeling** - Understand inflation and supply dynamics
- **Rewards calculation** - Used in staking reward calculations

## Examples

### Historical Supply Analysis

```typescript
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

// Calculate supply at different time periods
const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000)
const sixMonthsAgo = Date.now() - (180 * 24 * 60 * 60 * 1000)
const oneMonthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)

const supplies = {
  oneYearAgo: posSupplyAt(oneYearAgo),
  sixMonthsAgo: posSupplyAt(sixMonthsAgo),
  oneMonthAgo: posSupplyAt(oneMonthAgo),
  current: posSupplyAt(Date.now())
}

console.log('Supply History:', supplies)
```

### Supply Growth Rate

```typescript
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

function calculateSupplyGrowth(fromTimestamp: number, toTimestamp: number): number {
  const fromSupply = posSupplyAt(fromTimestamp)
  const toSupply = posSupplyAt(toTimestamp)

  return ((toSupply - fromSupply) / fromSupply) * 100
}

const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000)
const growthRate = calculateSupplyGrowth(oneYearAgo, Date.now())
console.log(`Annual supply growth: ${growthRate.toFixed(2)}%`)
```

## Related Modules

- [Albatross Policy](./albatross-policy) - Blockchain constants and configuration
- [Staking Rewards Calculator](./staking-rewards-calculator) - Calculate staking rewards
- [FormattableNumber](./formattable-number) - Format supply numbers

## Next Steps

- Learn about [Staking Rewards Calculator](./staking-rewards-calculator) for rewards
- Explore [Albatross Policy](./albatross-policy) for blockchain constants
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
