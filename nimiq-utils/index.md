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
import { data } from '../.vitepress/data/nimiq-utils.data'
const { modules: nimiqUtilsModules } = data

// Exclude getting started and resources from the grid
const moduleGroups = nimiqUtilsModules.filter(group =>
  !['Getting Started', 'Resources'].includes(group.text)
)
</script>

<Hero bg-neutral-0 v-bind="$frontmatter.hero" />

<NimiqFeatures bg-neutral-0 v-bind="$frontmatter.nimiqUtilsFeatures" />

<section bg-neutral-0>

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

<section bg-neutral-0>

<NqHeadline title="All Modules" description="Browse all available utility modules by category" f-mb-sm />

<CategoryGrid :groups="moduleGroups" />

</section>
