---
icon: i-tabler:layout-grid
title: Nimiq Utils
description: Production-ready JavaScript utilities for blockchain development. Battle-tested, type-safe, and tree-shakable.
navigation:
  title: Overview
  order: 1
---

::u-page-section
---
headline: Why Nimiq Utils
title: Built for real-world applications
description: Every utility has been battle-tested in production scenarios, from the official Nimiq Wallet to third-party integrations.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Performance First
    description: Optimized algorithms and minimal overhead
    icon: i-tabler:bolt
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Framework Agnostic
    description: Works with any JS framework & SSR safe
    icon: i-tabler:components
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Flexible & Great DX
    description: Intuitive APIs designed for developer productivity
    icon: i-tabler:adjustments
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Well-Documented
    description: Comprehensive docs with examples & real-world use cases
    icon: i-tabler:book
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Production Used
    description: Powers Nimiq Wallet & other official ecosystem apps
    icon: i-tabler:wallet
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Open Source
    description: 100% open source with community contributions welcome
    icon: i-tabler:heart
    variant: outline
    ---
    ::::
  :::
::

::u-page-section
---
title: Quick Examples
description: See Nimiq Utils in action with real-world code snippets
---

:::code-group

```ts [address-validation.ts]
import { ValidationUtils } from '@nimiq/utils'

// Validate Nimiq address format
ValidationUtils.isValidAddress('NQ48 8CKH BA24...')
// → true

// Check if it's a user-friendly address
ValidationUtils.isUserFriendlyAddress('NQ48 8CKH BA24...')
// → true
```

```ts [address-conversion.ts]
import { AddressBook } from '@nimiq/utils'

// Convert between address formats
const userFriendly = 'NQ48 8CKH BA24 Y7R5 GXM9 PQ8R HHGJ'
const hex = AddressBook.toHex(userFriendly)
// → '84c8e...'

// Convert back to user-friendly
const address = AddressBook.fromHex(hex)
// → 'NQ48 8CKH BA24 Y7R5 GXM9 PQ8R HHGJ'
```

```ts [currency-formatting.ts]
import { FormattableNumber } from '@nimiq/utils'

// Format NIM amounts
const amount = new FormattableNumber(1.5, 5)
amount.toString() // → "1.50000"
amount.toCurrency('NIM') // → "1.50 NIM"

// Auto-format with locale
amount.toLocaleString() // → "1.50000"
```

```ts [fiat-rates.ts]
import { getExchangeRates } from '@nimiq/utils'

// Get current exchange rates
const rates = await getExchangeRates(['nim'], ['usd', 'eur'])
// → { nim: { usd: 0.012, eur: 0.011 } }

// Calculate fiat value
const nimValue = 100
const usdValue = nimValue * rates.nim.usd
```

```ts [supply-calculator.ts]
import { posSupplyAt } from '@nimiq/utils'

// Get total supply at specific time
const supply = posSupplyAt(Date.now())
// → 3000000000 (in smallest unit)

// Get supply at block height
const supplyAtBlock = posSupplyAt(1000000)
```

:::

::

::u-page-section
---
title: All Modules
description: Browse all available utility modules by category
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Address Book
    to: ./address-book
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Albatross Policy
    to: ./albatross-policy
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Browser Detection
    to: ./browser-detection
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Clipboard
    to: ./clipboard
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Cookie Utilities
    to: ./cookie-utilities
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Currency Info
    to: ./currency-info
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Fiat API
    to: ./fiat-api
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Formattable Number
    to: ./formattable-number
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Installation
    to: ./installation
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Rate Limit Scheduler
    to: ./rate-limit-scheduler
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Request Link Encoding
    to: ./request-link-encoding
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Staking Rewards Calculator
    to: ./staking-rewards-calculator
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Supply Calculator
    to: ./supply-calculator
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Tweenable
    to: ./tweenable
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: UTF-8 Tools
    to: ./utf8-tools
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Validation Utils
    to: ./validation-utils
    variant: outline
    ---
    ::::
  :::
::
