# Why Choose Nimiq Utils?

Discover why Nimiq Utils is the go-to choice for building robust, efficient, and maintainable blockchain applications.

## Built for Real-World Applications

Nimiq Utils powers production applications across the Nimiq ecosystem, from the official Nimiq Wallet to third-party integrations. Every utility has been battle-tested in real-world scenarios.

### Production-Proven Reliability

- **Nimiq Wallet**: Handles millions of transactions
- **Nimiq Hub**: Powers seamless crypto experiences
- **Partner Integrations**: Trusted by exchanges and services
- **Community Projects**: Adopted by developers worldwide

## Key Advantages

### 🏎️ Performance First

Built with performance in mind, Nimiq Utils delivers exceptional speed without compromising functionality.

```typescript
// Optimized validation - blazing fast
const isValid = ValidationUtils.isValidAddress(address) // < 1ms

// Efficient number formatting - precision without overhead
const formatted = new FormattableNumber('1234567.89').toString()

// Smart caching - results cached for repeated operations
const label = AddressBook.getLabel(address) // Cached lookups
```

### 📦 Tree-Shakable Architecture

Import only what you need. Our modular design ensures your bundle stays lean.

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number' // ~3KB

// After: Only what you use
import { ValidationUtils } from '@nimiq/utils/validation-utils' // ~2KB
// Before: Large bundle with everything
import NimiqUtils from 'some-large-library' // 500KB+
// Total: ~5KB instead of 500KB+
```

### 🔒 Type-Safe by Design

Written in TypeScript with comprehensive type definitions. Catch errors at compile time, not runtime.

```typescript
// Full IntelliSense and type checking
const result: StakingResult = calculateStakingRewards({
  stakedSupplyRatio: 0.5, // number (0-1)
  amount: 100000, // number (in NIM)
  days: 365, // number (positive)
  autoRestake: true, // boolean
  network: 'main-albatross', // specific string literal
  fee: 0.02 // number (0-1)
})

// TypeScript prevents runtime errors
result.totalAmount // ✅ number
result.invalidProp // ❌ TypeScript error
```

### 🌐 Universal Compatibility

Works everywhere JavaScript runs - browsers, Node.js, serverless functions, and more.

```typescript
// Browser
import { Clipboard } from '@nimiq/utils/clipboard'

// Edge Runtime / Serverless
import { getExchangeRates } from '@nimiq/utils/fiat-api'

// Node.js / Server
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

Clipboard.copy('NQ48 8CKH BA24...')
const supply = posSupplyAt(Date.now())
const rates = await getExchangeRates(['nim'], ['usd'])
```

## Developer Experience

### 📚 Comprehensive Documentation

Every utility is thoroughly documented with examples, API references, and real-world use cases.

### 🧪 Well-Tested

Extensive test suite ensures reliability and catches regressions before they reach production.

- **Unit Tests**: Every function tested
- **Integration Tests**: Real-world scenarios covered
- **Snapshot Testing**: RPC compatibility maintained
- **Continuous Integration**: Automated testing on every change

### 🔄 Actively Maintained

Regular updates, security patches, and new features. Backed by the Nimiq core team.

## Comparison with Alternatives

| Feature | Nimiq Utils | Generic Crypto Libs | Custom Implementation |
|---------|-------------|--------------------|-----------------------|
| **Nimiq-Specific** | ✅ Native support | ❌ Generic only | ⚠️ Manual work |
| **Bundle Size** | ✅ Tree-shakable | ❌ Monolithic | ✅ Custom size |
| **Type Safety** | ✅ Full TypeScript | ⚠️ Varies | ❌ Manual types |
| **Testing** | ✅ Comprehensive | ⚠️ Varies | ❌ Manual testing |
| **Maintenance** | ✅ Active team | ⚠️ Community | ❌ Your responsibility |
| **Documentation** | ✅ Detailed guides | ⚠️ Basic docs | ❌ Self-documented |

## Real-World Impact

### Faster Development

```typescript
// Without Nimiq Utils: 50+ lines of validation code
function validateNimiqAddress(address) {
  // Complex checksum validation...
  // Format normalization...
  // Error handling...
}

// With Nimiq Utils: 1 line
const isValid = ValidationUtils.isValidAddress(address)
```

### Reduced Bugs

```typescript
// Potential floating-point precision issues
const amount = 0.1 + 0.2 // 0.30000000000000004

// Precise arithmetic with FormattableNumber
const amount = new FormattableNumber('0.1')
  .add('0.2')
  .toString() // '0.3'
```

### Better User Experience

```typescript
// Enhanced clipboard operations with fallbacks
const success = Clipboard.copy(address)
if (!success) {
  // Automatic fallback UI for unsupported browsers
  showManualCopyDialog(address)
}

// Smart browser detection for optimal UX
if (BrowserDetection.isMobile()) {
  // Mobile-optimized interface
}
else {
  // Desktop-optimized interface
}
```

## Getting Started

Ready to streamline your Nimiq development?

1. **[📦 Install Nimiq Utils](./installation)** - Get up and running in minutes
2. **[🔍 Browse Modules](./index#available-modules)** - Find the perfect utility for your needs
3. **[🚀 See Examples](https://github.com/nimiq/nimiq-utils/tree/master/examples)** - Learn from real implementations

## Community & Support

- **[GitHub Repository](https://github.com/nimiq/nimiq-utils)** - Source code and issues
- **[Nimiq Discord](https://discord.gg/cMHemg8)** - Community support
- **[Developer Forum](https://forum.nimiq.community/)** - Technical discussions
- **[Documentation](./index)** - Comprehensive guides and API reference

---

*Nimiq Utils: The essential toolkit for Nimiq developers. Build faster, ship sooner, scale confidently.* ⚡
