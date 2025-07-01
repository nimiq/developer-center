# Nimiq Utils

A comprehensive JavaScript utility library that complements the Nimiq Web Client with helper functions for addresses, validation, formatting, and more. {.nq-subline}

## Installation

```bash
pnpm add @nimiq/utils
```

The library is composed of multiple small modules that you can import individually to keep your bundle size optimized.

## Core Utilities

### AddressBook

Provides a mapping of addresses to their corresponding labels, including mainnet pools, services, exchanges, and testnet resources.

```typescript
import { AddressBook } from '@nimiq/utils/address-book'

// Retrieve a label for a known address
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const label = AddressBook.getLabel(address)
console.log(label) // Output: 'Skypool'
```

### ValidationUtils

A utility class that provides methods to validate, normalize, and check the format of Nimiq addresses and hashes.

```typescript
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Validate if an address is valid
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
console.log(isValid) // Output: true or false

// Normalize an address
const normalizedAddress = ValidationUtils.normalizeAddress(address)
console.log(normalizedAddress) // Output: 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'

// Check if an address is user-friendly
try {
  ValidationUtils.isUserFriendlyAddress(address)
  console.log('The address is user-friendly.')
}
catch (e) {
  console.error(e.message) // Output: error message if the address is invalid
}
```

## Blockchain Utilities

### Albatross Policy

This module defines various constants and utility functions related to the blockchain's configuration, supply, and block calculations.

```typescript
import {
  epochIndexAt,
  isElectionBlockAt,
  isMacroBlockAt,
  TOTAL_SUPPLY
} from '@nimiq/utils/albatross-policy'

// Retrieve the total supply
console.log(TOTAL_SUPPLY) // Output: 210000000000000

// Check the epoch index for a block
const blockNumber = 5000
const genesisBlockNumber = 1000
const blocksPerEpoch = 200
const epochIndex = epochIndexAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
const isMacro = isMacroBlockAt(blockNumber, genesisBlockNumber, 10)
const isElection = isElectionBlockAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
```

### Supply Calculator

Provides functionality to calculate the total Proof-of-Stake (PoS) supply of a cryptocurrency at a specific time, considering the supply decay over time.

```typescript
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

// Calculate PoS supply at a specific timestamp
const timestampMs = Date.now() // Current timestamp
const supply = posSupplyAt(timestampMs)
console.log(supply) // Output: 105432.5678 (example value)
```

### Staking Rewards Calculator

Calculates potential wealth accumulation through staking in a cryptocurrency network, taking into account factors such as reward decay, compounding, staking fees, and network configuration.

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

## Formatting & Display

### FormattableNumber

Formats and converts numbers without precision loss. It supports a variety of input types and allows operations like rounding, moving the decimal separator, and custom formatting options.

```typescript
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils/formattable-number'

// Format a number to a string
const number = new FormattableNumber('12345.6789')
const formatted = number.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ','
})
console.log(formatted) // Output: '12,345.68'

// Convert a number to a non-scientific string
const nonScientific = toNonScientificNumberString('1.23e4')
console.log(nonScientific) // Output: '12300'

// Round a number
const roundedNumber = new FormattableNumber(123.45678)
roundedNumber.round(2)
console.log(roundedNumber.toString()) // Output: '123.46'

// Check equality
const num1 = new FormattableNumber('123.45')
const num2 = new FormattableNumber(123.45)
console.log(num1.equals(num2)) // Output: true
```

### CurrencyInfo

Provides a comprehensive utility for handling currency information, including details like code, symbol, name, and decimal precision.

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

// Create a CurrencyInfo instance
const usdInfo = new CurrencyInfo('USD')
console.log(usdInfo)
// Output:
// {
//   code: 'USD',
//   symbol: '$',
//   name: 'US Dollar',
//   decimals: 2,
//   locale: 'en-US'
// }

// Specify a locale
const euroInfo = new CurrencyInfo('EUR', 'de-DE')
console.log(euroInfo)
// Output:
// {
//   code: 'EUR',
//   symbol: '€',
//   name: 'Euro',
//   decimals: 2,
//   locale: 'de-DE'
// }
```

## Payment & Links

### Request Link Encoding

Provides utility functions for creating and parsing request links for multiple cryptocurrencies, including Nimiq, Bitcoin, and Ethereum.

```typescript
import {
  createRequestLink,
  Currency,
  parseRequestLink,
} from '@nimiq/utils/request-links-encoding'

// Create a Nimiq request link
const nimiqLink = createRequestLink('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', {
  currency: Currency.NIM,
  amount: 1000, // in Luna
  message: 'Thanks for your support!',
  type: NimiqRequestLinkType.URI,
})

console.log(nimiqLink)
// Output: "nimiq:NQ488CKHBA242VR3N249N8MNJ5XX74DB5XJ8?amount=1000&message=Thanks%20for%20your%20support!"

// Parse a request link
const parsedLink = parseRequestLink(nimiqLink, { currencies: [Currency.NIM] })
console.log(parsedLink)
/* Output:
{
    currency: 'nim',
    recipient: 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8',
    amount: 1000,
    message: 'Thanks for your support!',
}
*/
```

## Data & API Utilities

### Fiat API

The `FiatApi` class provides a unified interface for accessing fiat rates from various APIs.

**Supported APIs:**
- **CryptoCompare**: High rate limits, supports historical rates
- **CoinGecko**: Limited rate limits, historical rates restricted to last 365 days

**Supported cryptocurrencies:** NIM, BTC, ETH, USDC, USDT

```typescript
import { getExchangeRates, getHistoricExchangeRatesByRange } from '@nimiq/utils/fiat-api'

const rates = await getExchangeRates(['btc'], ['usd'], Provider.CryptoCompare)
console.log(rates)
// Output: { btc: { usd: 23000.5 } }

const historicalRates = await getHistoricExchangeRatesByRange(
  'btc',
  'usd',
  Date.now() - 7 * 24 * 60 * 60 * 1000,
  Date.now()
)
console.log(historicalRates)
```

### RateLimitScheduler

Provides a way to control and limit task execution based on defined rate limits for different time periods and parallel task limits.

```typescript
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

// Define rate limits
const rateLimits = {
  second: 5, // Max 5 tasks per second
  minute: 100, // Max 100 tasks per minute
  parallel: 2, // Max 2 tasks running in parallel
}

// Initialize the RateLimitScheduler
const scheduler = new RateLimitScheduler(rateLimits)

// Schedule tasks
async function task() {
  console.log(`Task started at ${new Date().toISOString()}`)
  await new Promise(resolve => setTimeout(resolve, 200)) // Simulate async work
}

// Schedule tasks with normal priority
for (let i = 0; i < 10; i++) {
  scheduler.schedule(task)
}

// Schedule a high-priority task
scheduler.schedule(
  async () => console.log('High-priority task executed!'),
  Priority.HIGH,
)
```

## Browser & Environment

### BrowserDetection

A utility module for detecting browser details, including browser type, version, whether it's running in private mode, and if it's mobile or iOS.

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

// Get browser info
const browserInfo = BrowserDetection.getBrowserInfo()
console.log(browserInfo)
// Output:
// {
//   browser: 'chrome',
//   version: { versionString: '70.0.3538.77', major: 70, minor: 0, build: 3538, patch: 77 },
//   isMobile: false
// }

// Check if the browser is Chrome
const isChrome = BrowserDetection.isChrome()
console.log(isChrome) // Output: true or false

// Detect private mode
BrowserDetection.isPrivateMode().then((isPrivate) => {
  console.log(isPrivate) // Output: true or false
})
```

### Clipboard

Provides a utility method for copying text to the clipboard with mobile compatibility.

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

// Copy text to clipboard
const text = 'Hello, World!'
const success = Clipboard.copy(text)
console.log(success) // Output: true if successful, false otherwise
```

### Cookie Utilities

Provides utility functions for managing cookies, including getting, setting, and unsetting cookies.

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

// Get a cookie
const cookieValue = getCookie('session')
console.log(cookieValue) // Output: The value or null if not found

// Set a cookie
const cookieString = setCookie('session', 'abc123', {
  path: '/',
  maxAge: 3600,
  secure: true
})
console.log(cookieString) // Output: 'session=abc123;path=/;max-age=3600;secure'

// Unset a cookie
unsetCookie('session')
console.log(getCookie('session')) // Output: null
```

## Advanced Utilities

### Utf8Tools

A utility class for handling UTF-8 string and byte array conversions, validation, and truncation.

```typescript
import { Utf8Tools } from '@nimiq/utils/utf8-tools'

// Convert a string to a UTF-8 byte array
const utf8Bytes = Utf8Tools.stringToUtf8ByteArray('Hello, world!')
console.log(utf8Bytes) // Output: Uint8Array of UTF-8 bytes

// Convert a UTF-8 byte array back to a string
const utf8String = Utf8Tools.utf8ByteArrayToString(utf8Bytes)
console.log(utf8String) // Output: 'Hello, world!'

// Validate if a byte array is valid UTF-8
const isValid = Utf8Tools.isValidUtf8(utf8Bytes)
console.log(isValid) // Output: true

// Truncate a string to a specific byte length with an ellipsis
const { result, didTruncate } = Utf8Tools.truncateToUtf8ByteLength('This is a long string.', 10)
console.log(result) // Output: 'This is…'
console.log(didTruncate) // Output: true
```

### Tweenable

Allows you to handle tween animations with customizable easing functions.

```typescript
import Tweenable from '@nimiq/utils/tweenable'

// Create a Tweenable instance
const tween = new Tweenable(100, 0, 2000) // Target value: 100, Start value: 0, Tween time: 2000ms

// Retrieve the current value during animation
setInterval(() => {
  console.log(`Current Value: ${tween.currentValue}`)
  if (tween.finished)
    console.log('Animation complete!')
}, 100)

// Update the target value and restart the tween
tween.tweenTo(200, 1500) // Tween to 200 over 1500ms

// Use a custom easing function
const customEasing = (t: number) => t * t // Quadratic easing
const tweenWithCustomEasing = new Tweenable(50, 0, 3000, Date.now(), customEasing)
```

## GitHub Repository

For complete documentation, source code, and additional examples, visit the [Nimiq Utils GitHub repository](https://github.com/nimiq/nimiq-utils).

## Next Steps

- Explore the [Web Client Getting Started](/web-client/getting-started) guide
- Check out [framework integrations](/web-client/integrations) for your preferred development setup
- Browse the [Nimiq UI components](https://onmax.github.io/nimiq-ui/) for ready-to-use interface elements
