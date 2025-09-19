# Install Nimiq Utils

A comprehensive JavaScript/TypeScript utility library for the Nimiq blockchain ecosystem.

::: code-group

```bash [pnpm]
pnpm add @nimiq/utils
```

```bash [npm]
npm install @nimiq/utils
```

```bash [yarn]
yarn add @nimiq/utils
```

```bash [bun]
bun add @nimiq/utils
```

:::

## Basic Usage

Nimiq Utils is designed with tree-shaking in mind. Import only the modules you need to keep your bundle size optimized.

```typescript
import { AddressBook } from '@nimiq/utils/address-book'
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Use the utilities
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
const label = AddressBook.getLabel(address)
const amount = new FormattableNumber('1234.56').toString({ maxDecimals: 2 })

// Calculate staking rewards
const rewards = calculateStakingRewards({
  stakedSupplyRatio: 0.5,
  amount: 100000,
  days: 365
})

console.log({ isValid, label, amount, rewards })
```

## TypeScript Support

Nimiq Utils is written in TypeScript and includes full type definitions out of the box. No additional `@types` packages needed.

```typescript
import type { CalculateStakingRewardsParams, CalculateStakingRewardsResult } from '@nimiq/utils/rewards-calculator'
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const params: CalculateStakingRewardsParams = {
  stakedSupplyRatio: 0.5,
  amount: 100000,
  days: 365,
  autoRestake: true,
  network: 'main-albatross',
  fee: 0.02
}

const result: CalculateStakingRewardsResult = calculateStakingRewards(params)
```

## Framework Integration

::: code-group

```typescript [Vue.js / Nuxt]
// composables/useNimiqUtils.ts
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { ValidationUtils } from '@nimiq/utils/validation-utils'

export function useNimiqUtils() {
  const validateAddress = (address: string) => {
    return ValidationUtils.isValidAddress(address)
  }

  const formatAmount = (amount: string | number, decimals: number = 2) => {
    return new FormattableNumber(amount).toString({
      maxDecimals: decimals,
      useGrouping: true
    })
  }

  return {
    validateAddress,
    formatAmount
  }
}
```

```typescript [React / Next.js]
// hooks/useNimiqUtils.ts
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { ValidationUtils } from '@nimiq/utils/validation-utils'
import { useCallback } from 'react'

export function useNimiqUtils() {
  const validateAddress = useCallback((address: string) => {
    return ValidationUtils.isValidAddress(address)
  }, [])

  const formatAmount = useCallback((amount: string | number, decimals: number = 2) => {
    return new FormattableNumber(amount).toString({
      maxDecimals: decimals,
      useGrouping: true
    })
  }, [])

  return {
    validateAddress,
    formatAmount
  }
}
```

```html [Vanilla JavaScript]
<!DOCTYPE html>
<html>
<head>
  <title>Nimiq Utils Example</title>
</head>
<body>
  <script type="module">
    import { ValidationUtils } from 'https://cdn.skypack.dev/@nimiq/utils/validation-utils'
    import { AddressBook } from 'https://cdn.skypack.dev/@nimiq/utils/address-book'

    const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
    const isValid = ValidationUtils.isValidAddress(address)
    const label = AddressBook.getLabel(address)

    console.log(`Address: ${address}`)
    console.log(`Valid: ${isValid}`)
    console.log(`Label: ${label}`)
  </script>
</body>
</html>
```

```html [CDN Usage]
<script type="module">
  import { ValidationUtils } from 'https://cdn.skypack.dev/@nimiq/utils/validation-utils'
  // Use ValidationUtils...
</script>
```

:::

## Bundle Size Optimization

Nimiq Utils is designed for optimal tree-shaking. Only import what you need:

```typescript
// ❌ Avoid - Imports entire library
import * as NimiqUtils from '@nimiq/utils'

// ✅ Good - Import from specific modules for best tree-shaking
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'
import { ValidationUtils } from '@nimiq/utils/validation-utils'
```
