# Installation

Learn how to install and set up Nimiq Utils in your project with different package managers and bundlers. {.nq-subline}

## Package Manager Installation

### pnpm (Recommended)

```bash
pnpm add @nimiq/utils
```

### npm

```bash
npm install @nimiq/utils
```

### yarn

```bash
yarn add @nimiq/utils
```

## Basic Usage

Nimiq Utils is designed with tree-shaking in mind. Import only the modules you need to keep your bundle size optimized.

```typescript
import { AddressBook } from '@nimiq/utils/address-book'
import { FormattableNumber } from '@nimiq/utils/formattable-number'
// Import specific modules
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Use the utilities
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
const label = AddressBook.getLabel(address)
const amount = new FormattableNumber('1234.56').toString({ maxDecimals: 2 })

console.log({ isValid, label, amount })
```

## TypeScript Support

Nimiq Utils is written in TypeScript and includes full type definitions out of the box. No additional `@types` packages needed.

```typescript
import type { StakingParams, StakingResult } from '@nimiq/utils/rewards-calculator'
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const params: StakingParams = {
  stakedSupplyRatio: 0.5,
  amount: 100000,
  days: 365,
  autoRestake: true,
  network: 'main-albatross',
  fee: 0.02
}

const result: StakingResult = calculateStakingRewards(params)
```

## Framework Integration

### Vue.js / Nuxt

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number'
// composables/useNimiqUtils.ts
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

### React / Next.js

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { ValidationUtils } from '@nimiq/utils/validation-utils'
// hooks/useNimiqUtils.ts
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

### Vanilla JavaScript

```html
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

## Bundle Size Optimization

Nimiq Utils is designed for optimal tree-shaking. Only import what you use:

```typescript
// ❌ Avoid - Imports entire library
import * as NimiqUtils from '@nimiq/utils'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

// ✅ Good - Only imports specific modules
import { ValidationUtils } from '@nimiq/utils/validation-utils'
```

## Environment Requirements

- **Node.js**: 16.0 or higher
- **Browser**: Modern browsers with ES2020 support
- **TypeScript**: 4.5 or higher (optional)

## CDN Usage

For quick prototyping or legacy environments:

```html
<script type="module">
  import { ValidationUtils } from 'https://cdn.skypack.dev/@nimiq/utils/validation-utils'
  // Use ValidationUtils...
</script>
```

## Troubleshooting

### Module Resolution Issues

If you encounter module resolution issues, ensure your bundler supports ES modules:

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### Vite Configuration

For Vite projects, no additional configuration is needed. Nimiq Utils works out of the box.

### Webpack Configuration

For older Webpack versions, you might need to ensure ES module support:

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    extensionAlias: {
      '.js': ['.ts', '.js']
    }
  }
}
```

## Next Steps

- **[📖 Why Nimiq Utils?](./why)** - Learn about the benefits
- **[🚀 Browse Modules](./index#available-modules)** - Explore all available utilities
- **[💡 Examples](https://github.com/nimiq/nimiq-utils/tree/master/examples)** - See real-world usage examples
