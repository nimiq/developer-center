---
nimiqFeatures:
  label: "Essential Toolkit"
  title: "Production-Ready Utilities"
  description: "Battle-tested components used across the Nimiq ecosystem, from the official wallet to third-party integrations."
  align: "left"
  showBorders: false
  features:
    - title: 'Production Ready'
      description: 'We use it in many production apps'
      icon: 'i-nimiq:verified-filled'
      iconColor: 'text-green'
    - title: 'Server-Side Rendering'
      description: 'Full SSR compatibility for Next.js, Nuxt, and other frameworks'
      icon: 'i-nimiq:duotone-speedmeter'
      iconColor: 'text-blue'
    - title: 'Tree-Shakable'
      description: 'Import only what you need for optimal bundle sizes'
      icon: 'i-nimiq:cubes'
      iconColor: 'text-orange'
    - title: 'TypeScript Native'
      description: 'Built with TypeScript for superior developer experience'
      icon: 'i-tabler:code'
      iconColor: 'text-purple'
    - title: 'Zero Dependencies'
      description: 'Lightweight with minimal external dependencies'
      icon: 'i-nimiq:leaf-3-filled'
      iconColor: 'text-red'
    - title: 'Comprehensive Testing'
      description: 'Extensive test suite with RPC snapshot testing'
      icon: 'i-nimiq:check'
      iconColor: 'text-gold'
---

<script setup lang="ts">
  import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
  </script>

# Nimiq Utils

A comprehensive JavaScript utility library that complements the Nimiq Web Client with helper functions for addresses, validation, formatting, and more.

<NimiqFeatures v-bind="$frontmatter.nimiqFeatures" />

## Quick Start

```bash
pnpm add @nimiq/utils
```

```typescript
import { AddressBook } from '@nimiq/utils/address-book'
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Validate and get info about an address
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
const label = AddressBook.getLabel(address)

// Format a number
const amount = new FormattableNumber('12345.6789')
const formatted = amount.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ','
})

console.log(`Address: ${address}`)
console.log(`Is Valid: ${isValid}`)
console.log(`Label: ${label}`)
console.log(`Formatted Amount: ${formatted}`)
```

## Available Modules

### Core Utilities

Core functionality for address management and validation.

- **[AddressBook](./address-book)** - Mapping of addresses to their corresponding labels
- **[ValidationUtils](./validation-utils)** - Validate, normalize, and check Nimiq addresses and hashes

### Blockchain Utilities

Utilities for blockchain-specific calculations and operations.

- **[Albatross Policy](./albatross-policy)** - Blockchain configuration constants and utility functions
- **[Supply Calculator](./supply-calculator)** - Calculate total Proof-of-Stake supply at specific times
- **[Staking Rewards Calculator](./staking-rewards-calculator)** - Calculate potential wealth accumulation through staking

### Formatting & Display

Tools for formatting numbers and currency information.

- **[FormattableNumber](./formattable-number)** - Format and convert numbers without precision loss
- **[CurrencyInfo](./currency-info)** - Comprehensive currency information handling

### Payment & Links

Utilities for payment links and request encoding.

- **[Request Link Encoding](./request-link-encoding)** - Create and parse request links for multiple cryptocurrencies

### Data & API Utilities

Tools for API interactions and data management.

- **[Fiat API](./fiat-api)** - Unified interface for accessing fiat rates from various APIs
- **[RateLimitScheduler](./rate-limit-scheduler)** - Control and limit task execution based on rate limits

### Browser & Environment

Browser-specific utilities and environment detection.

- **[BrowserDetection](./browser-detection)** - Detect browser details and capabilities
- **[Clipboard](./clipboard)** - Copy text to clipboard with mobile compatibility
- **[Cookie Utilities](./cookie-utilities)** - Manage cookies with utility functions

### Advanced Utilities

Advanced tools for specific use cases.

- **[Utf8Tools](./utf8-tools)** - Handle UTF-8 string and byte array conversions
- **[Tweenable](./tweenable)** - Handle tween animations with customizable easing functions

## Resources

- **[📦 Installation Guide](./installation)** - Set up Nimiq Utils in your project
- **[💡 Why Nimiq Utils?](./why)** - Learn about the benefits and advantages
- **[📚 GitHub Repository](https://github.com/nimiq/nimiq-utils)** - Source code, examples, and contributing
- **[🐛 Report Issues](https://github.com/nimiq/nimiq-utils/issues)** - Bug reports and feature requests
- **[📖 API Reference](https://github.com/nimiq/nimiq-utils/tree/master/docs)** - Detailed API documentation

## Next Steps

- **[🚀 Web Client Getting Started](/web-client/getting-started)** - Build with the Nimiq Web Client
- **[🔧 Framework Integrations](/web-client/integrations/)** - Vue, React, Next.js, and more
- **[🎨 UI Components](https://onmax.github.io/nimiq-ui/)** - Ready-to-use interface elements
