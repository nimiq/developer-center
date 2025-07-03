# Nimiq Utils

A comprehensive JavaScript utility library that complements the Nimiq Web Client with helper functions for addresses, validation, formatting, and more. {.nq-subline}

> **📖 Comprehensive Documentation Available**
>
> The Nimiq Utils documentation has been reorganized into a dedicated section with detailed guides for each module.
>
> **[Visit the complete Nimiq Utils documentation →](/nimiq-utils/)**

## Quick Overview

The Nimiq Utils library provides essential utilities organized into several categories:

### Core Utilities
- **[AddressBook](/nimiq-utils/address-book)** - Address to label mapping
- **[ValidationUtils](/nimiq-utils/validation-utils)** - Address and data validation

### Blockchain Utilities
- **[Albatross Policy](/nimiq-utils/albatross-policy)** - Blockchain configuration
- **[Supply Calculator](/nimiq-utils/supply-calculator)** - PoS supply calculations
- **[Staking Rewards Calculator](/nimiq-utils/staking-rewards-calculator)** - Staking rewards

### Formatting & Display
- **[FormattableNumber](/nimiq-utils/formattable-number)** - Precision number formatting
- **[CurrencyInfo](/nimiq-utils/currency-info)** - Currency information

### Additional Modules
- **[Request Link Encoding](/nimiq-utils/request-link-encoding)** - Payment links
- **[Fiat API](/nimiq-utils/fiat-api)** - Exchange rates
- **[RateLimitScheduler](/nimiq-utils/rate-limit-scheduler)** - Task scheduling
- **[BrowserDetection](/nimiq-utils/browser-detection)** - Browser capabilities
- **[Clipboard](/nimiq-utils/clipboard)** - Clipboard operations
- **[Cookie Utilities](/nimiq-utils/cookie-utilities)** - Cookie management
- **[Utf8Tools](/nimiq-utils/utf8-tools)** - UTF-8 handling
- **[Tweenable](/nimiq-utils/tweenable)** - Animation utilities

## Quick Start

```bash
pnpm add @nimiq/utils
```

```typescript
import { AddressBook } from '@nimiq/utils/address-book'
import { FormattableNumber } from '@nimiq/utils/formattable-number'
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Example usage
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
const label = AddressBook.getLabel(address)
const amount = new FormattableNumber('12345.6789').toString({ maxDecimals: 2 })

console.log({ isValid, label, amount })
```

## Next Steps

- **[📚 Browse all Nimiq Utils modules →](/nimiq-utils/)**
- **[🚀 Web Client Getting Started](./getting-started)**
- **[🔧 Framework Integrations](./integrations/)**
