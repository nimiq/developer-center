---
layout: overview

hero:
  title: Nimiq Utils
  description: Production-ready JavaScript utilities for blockchain development. Battle-tested, type-safe, and tree-shakable.

nimiqUtilsFeatures:
  label: Why Nimiq Utils
  title: Built for real-world applications
  description: Every utility has been battle-tested in production scenarios, from the official Nimiq Wallet to third-party integrations.
  features:
    - title: Performance First
      description: Optimized algorithms and minimal overhead
      icon: i-tabler:bolt
      iconBgColor: bg-gradient-orange
    - title: Framework Agnostic
      description: Works with any JS framework & SSR safe
      icon: i-tabler:components
      iconBgColor: bg-purple
    - title: Flexible & Great DX
      description: Intuitive APIs designed for developer productivity
      icon: i-tabler:adjustments
      iconBgColor: bg-gradient-gold
    - title: Well‑Documented
      description: Comprehensive docs with examples & real‑world use cases
      icon: i-tabler:book
      iconBgColor: bg-gradient-blue
    - title: Production Used
      description: Powers Nimiq Wallet & other official ecosystem apps
      icon: i-tabler:wallet
      iconBgColor: bg-gradient-green
    - title: Open Source
      description: 100% open source with community contributions welcome
      icon: i-tabler:heart
      iconBgColor: bg-gradient-red

---

<script setup lang="ts">
import Hero from '../.vitepress/theme/components/Hero.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import CategoryGrid from '../.vitepress/theme/components/CategoryGrid.vue'

// Module groups for the category grid
const moduleGroups = [
  {
    text: 'Blockchain Utilities',
    items: [
      { text: 'AddressBook', link: '/nimiq-utils/address-book', icon: 'i-nimiq:contact-book', description: 'Manage and validate Nimiq addresses with built-in address book functionality', popular: true },
      { text: 'ValidationUtils', link: '/nimiq-utils/validation-utils', icon: 'i-nimiq:verified', description: 'Utilities for validating addresses, transactions, and other blockchain data', popular: true },
      { text: 'Albatross Policy', link: '/nimiq-utils/albatross-policy', icon: 'i-nimiq:nodes', description: 'Constants and utilities related to Nimiq\'s Albatross consensus protocol' },
      { text: 'Supply Calculator', link: '/nimiq-utils/supply-calculator', icon: 'i-tabler:calculator', description: 'Calculate Nimiq supply at different blocks and times' },
      { text: 'Staking Rewards Calculator', link: '/nimiq-utils/staking-rewards-calculator', icon: 'i-nimiq:digital-gold', description: 'Calculate staking rewards and yields for validators and stakers' },
    ],
  },
  {
    text: 'Formatting & Display',
    items: [
      { text: 'FormattableNumber', link: '/nimiq-utils/formattable-number', icon: 'i-tabler:hash', description: 'Format and display numbers with proper localization and units', popular: true },
      { text: 'CurrencyInfo', link: '/nimiq-utils/currency-info', icon: 'i-tabler:currency-dollar', description: 'Get currency information, symbols, and formatting rules' },
    ],
  },
  {
    text: 'Data & API Utilities',
    items: [
      { text: 'Fiat API', link: '/nimiq-utils/fiat-api', icon: 'i-tabler:api', description: 'Fetch fiat currency exchange rates and price data', popular: true },
      { text: 'Rate Limit Scheduler', link: '/nimiq-utils/rate-limit-scheduler', icon: 'i-tabler:clock', description: 'Schedule and throttle API requests with rate limiting' },
    ],
  },
  {
    text: 'Browser & Environment',
    items: [
      { text: 'Browser Detection', link: '/nimiq-utils/browser-detection', icon: 'i-tabler:browser', description: 'Detect browser capabilities and features for optimal user experience' },
      { text: 'Clipboard', link: '/nimiq-utils/clipboard', icon: 'i-tabler:clipboard', description: 'Cross-browser clipboard operations with fallback support' },
      { text: 'Cookie Utilities', link: '/nimiq-utils/cookie-utilities', icon: 'i-tabler:cookie', description: 'Manage browser cookies with type safety and expiration handling' },
    ],
  },
  {
    text: 'Miscellaneous',
    items: [
      { text: 'Request Link Encoding', link: '/nimiq-utils/request-link-encoding', icon: 'i-tabler:link', description: 'Encode and decode Nimiq request links and payment URIs' },
      { text: 'Utf8Tools', link: '/nimiq-utils/utf8-tools', icon: 'i-tabler:code', description: 'UTF-8 string manipulation and encoding utilities' },
      { text: 'Tweenable', link: '/nimiq-utils/tweenable', icon: 'i-tabler:timeline', description: 'Animation and tweening utilities for smooth UI transitions' },
    ],
  },
]
</script>

<Hero v-bind="$frontmatter.hero" />

<NimiqFeatures v-bind="$frontmatter.nimiqUtilsFeatures" />

<section>

<NqHeadline title="Quick Examples" description="See Nimiq Utils in action with real-world code snippets" f-mb-sm />

::: code-group

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

</section>

<section>

<NqHeadline title="All Modules" description="Browse all available utility modules by category" f-mb-sm />

<CategoryGrid :groups="moduleGroups" />

</section>
