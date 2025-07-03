# Staking Rewards Calculator

Calculates potential wealth accumulation through staking in a cryptocurrency network, taking into account factors such as reward decay, compounding, staking fees, and network configuration.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

// Calculate staking rewards for a specific scenario
const stakingParams = {
  stakedSupplyRatio: 0.5, // 50% of the total supply is staked
  amount: 100000, // Staking 100,000 NIM
  days: 365, // Staking duration: 1 year
  autoRestake: true, // Enable compounding
  network: 'main-albatross', // Mainnet
  fee: 0.02, // Pool fee: 2%
}

const result = calculateStakingRewards(stakingParams)
console.log(result)
// Output:
// {
//   totalAmount: 105123.45, // Total after staking
//   gain: 5123.45,          // Gain from staking
//   gainRatio: 0.05123      // Gain as a percentage
// }
```

## API Reference

### Functions

#### `calculateStakingRewards(params: StakingParams): StakingResult`

Calculates the potential rewards from staking over a specified period.

**Parameters:**
- `params` - Configuration object for staking calculation

**Returns:**
- `StakingResult` - Object containing the calculated rewards and totals

### Types

#### `StakingParams`

```typescript
interface StakingParams {
  stakedSupplyRatio: number // Ratio of total supply that is staked (0-1)
  amount: number // Amount to stake (in NIM)
  days: number // Duration of staking in days
  autoRestake: boolean // Whether to compound rewards
  network: string // Network identifier ('main-albatross' or 'test-albatross')
  fee: number // Pool fee percentage (0-1)
}
```

#### `StakingResult`

```typescript
interface StakingResult {
  totalAmount: number // Total amount after staking period
  gain: number // Total gain from staking
  gainRatio: number // Gain as a percentage of initial amount
}
```

## Examples

### Basic Staking Calculation

```typescript
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const basicStaking = {
  stakedSupplyRatio: 0.3, // 30% of supply staked
  amount: 50000, // 50,000 NIM
  days: 180, // 6 months
  autoRestake: false, // No compounding
  network: 'main-albatross',
  fee: 0.05, // 5% pool fee
}

const result = calculateStakingRewards(basicStaking)
console.log(`Initial: ${result.totalAmount - result.gain} NIM`)
console.log(`Final: ${result.totalAmount} NIM`)
console.log(`Gain: ${result.gain} NIM (${(result.gainRatio * 100).toFixed(2)}%)`)
```

### Compound vs Simple Staking

```typescript
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const stakingConfig = {
  stakedSupplyRatio: 0.4,
  amount: 100000,
  days: 365,
  network: 'main-albatross',
  fee: 0.03,
}

// Simple staking (no compounding)
const simple = calculateStakingRewards({ ...stakingConfig, autoRestake: false })

// Compound staking
const compound = calculateStakingRewards({ ...stakingConfig, autoRestake: true })

console.log('Simple staking:')
console.log(`  Gain: ${simple.gain} NIM (${(simple.gainRatio * 100).toFixed(2)}%)`)

console.log('Compound staking:')
console.log(`  Gain: ${compound.gain} NIM (${(compound.gainRatio * 100).toFixed(2)}%)`)

const compoundAdvantage = compound.gain - simple.gain
console.log(`Compound advantage: ${compoundAdvantage} NIM`)
```

### Different Network Conditions

```typescript
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const baseConfig = {
  amount: 75000,
  days: 365,
  autoRestake: true,
  network: 'main-albatross',
  fee: 0.02,
}

// Low staking participation (higher rewards)
const lowStaking = calculateStakingRewards({
  ...baseConfig,
  stakedSupplyRatio: 0.2, // 20% staked
})

// High staking participation (lower rewards)
const highStaking = calculateStakingRewards({
  ...baseConfig,
  stakedSupplyRatio: 0.8, // 80% staked
})

console.log('Low staking participation:')
console.log(`  APY: ${(lowStaking.gainRatio * 100).toFixed(2)}%`)

console.log('High staking participation:')
console.log(`  APY: ${(highStaking.gainRatio * 100).toFixed(2)}%`)
```

## Factors Affecting Rewards

### Network Factors

- **Staked supply ratio** - Higher participation reduces individual rewards
- **Network configuration** - Different networks have different reward rates
- **Epoch timing** - Rewards are distributed at regular intervals

### Staking Parameters

- **Amount staked** - Larger stakes earn proportionally more rewards
- **Duration** - Longer staking periods accumulate more rewards
- **Compounding** - Reinvesting rewards increases total returns
- **Pool fees** - Fees reduce net rewards

### Economic Factors

- **Inflation rate** - Network inflation affects reward distribution
- **Supply decay** - Emission rate decreases over time
- **Validator performance** - Validator uptime affects rewards

## Use Cases

- **Staking calculators** - Help users estimate potential returns
- **Portfolio planning** - Plan long-term staking strategies
- **Pool comparison** - Compare different staking pools
- **Economic modeling** - Understand network economics

## Related Modules

- [Supply Calculator](./supply-calculator) - Calculate total supply for context
- [Albatross Policy](./albatross-policy) - Blockchain configuration constants
- [FormattableNumber](./formattable-number) - Format reward amounts

## Next Steps

- Learn about [Supply Calculator](./supply-calculator) for supply calculations
- Explore [Albatross Policy](./albatross-policy) for blockchain constants
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
