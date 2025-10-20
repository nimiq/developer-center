# Staking Rewards Calculator

Calculates potential wealth accumulation through staking with reward decay, compounding, and fees.

## Usage

### Basic calculation

```typescript
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

// Basic calculation
const result = calculateStakingRewards({
  amount: 100000, // 100k NIM
  days: 365, // 1 year
  stakedSupplyRatio: 0.5, // 50% of supply staked
  autoRestake: true // Compound rewards
})
console.log(result.totalReward) // Total rewards earned
console.log(result.finalBalance) // Final balance including rewards
```

### With custom fee

```typescript
// With custom fee
const withFee = calculateStakingRewards({
  amount: 50000,
  days: 180,
  stakedSupplyRatio: 0.6,
  fee: 0.05, // 5% validator fee
  autoRestake: false
})
```

## API

| Method | Description |
| --- | --- |
| `calculateStakingRewards(params)` | Calculates staking rewards for given parameters |
| `StakingParams` | Input parameters: amount, days, stakedSupplyRatio, etc. |
| `StakingResult` | Result object with totalReward, finalBalance, etc. |
