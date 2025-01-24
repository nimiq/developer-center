# Nimiq Utils JS

Simple helper library for Nimiq in JavaScript.{.nq-subline}

## Installation

```bash
npm install @nimiq/utils
```

## Usage

The library is composed of multiple small modules:

### AddressBook

Provides a mapping of addresses to their corresponding labels, including mainnet pools, services, exchanges, and testnet resources.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/address-book/AddressBook.ts" />

```typescript
import { AddressBook } from '@nimiq/utils/address-book'

// Retrieve a label for a known address
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const label = AddressBook.getLabel(address)
console.log(label) // Output: 'Skypool'
```

### Albatross Policy

This module defines various constants and utility functions related to the blockchain's configuration, supply, and block calculations.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/albatross-policy/albatross-policy.ts" />

```typescript
import { epochIndexAt, isElectionBlockAt, isMacroBlockAt, TOTAL_SUPPLY, /* Other constants */ } from '@nimiq/utils/albatross-policy'

// Example: Retrieve the total supply
console.log(TOTAL_SUPPLY) // Output: 210000000000000

// Example: Check the epoch index for a block
const blockNumber = 5000
const genesisBlockNumber = 1000
const blocksPerEpoch = 200
const epochIndex = epochIndexAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
const isMacro = isMacroBlockAt(blockNumber, genesisBlockNumber, 10)
const isElection = isElectionBlockAt(blockNumber, genesisBlockNumber, blocksPerEpoch)
```

### BrowserDetection

A utility module for detecting browser details, including browser type, version, whether it's running in private mode, and if it's mobile or iOS.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/browser-detection/BrowserDetection.ts" />

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

// Example: Get browser info
const browserInfo = BrowserDetection.getBrowserInfo()
console.log(browserInfo)
// Output:
// {
//   browser: 'chrome',
//   version: { versionString: '70.0.3538.77', major: 70, minor: 0, build: 3538, patch: 77 },
//   isMobile: false
// }

// Example: Check if the browser is Chrome
const isChrome = BrowserDetection.isChrome()
console.log(isChrome) // Output: true or false

// Example: Detect private mode
BrowserDetection.isPrivateMode().then((isPrivate) => {
  console.log(isPrivate) // Output: true or false
})
```

### Clipboard

Provides a utility method for copying text to the clipboard. This implementation ensures compatibility with mobile devices and restores the original text selection after copying.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/clipboard/Clipboard.ts" />

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

// Example: Copy text to clipboard
const text = 'Hello, World!'
const success = Clipboard.copy(text)
console.log(success) // Output: true if the text was successfully copied, false otherwise
```

### Cookie Utilities

Provides utility functions for managing cookies, including getting, setting, and unsetting cookies.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/cookie/Cookie.ts" />

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

// Example: Get a cookie
const cookieValue = getCookie('session')
console.log(cookieValue) // Output: The value of the 'session' cookie, or null if not found

// Example: Set a cookie
const cookieString = setCookie('session', 'abc123', { path: '/', maxAge: 3600, secure: true })
console.log(cookieString) // Output: 'session=abc123;path=/;max-age=3600;secure'

// Example: Unset a cookie
unsetCookie('session')
console.log(getCookie('session')) // Output: null
```

### CurrencyInfo

Provides a comprehensive utility for handling currency information, including details like code, symbol, name, and decimal precision. It includes curated data and functionality for auto-detecting properties based on locale and browser compatibility.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/currency-info/CurrencyInfo.ts" />

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

// Example: Create a CurrencyInfo instance
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

// Example: Specify a locale
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

### Fiat API

The `FiatApi` class provides a unified interface for accessing fiat rates from various APIs.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/fiat-api/FiatApi.ts" />

**Supported APIs:**

- **CryptoCompare**: High rate limits, supports historical rates. Uses both `min-api` and `data-api` endpoints. Supports per-second, per-minute, and per-hour limits.
- **CoinGecko**: Limited rate limits, historical rates restricted to last 365 days. Dynamic limits (~5/min).

**Supported cryptocurrencies:**

- NIM
- BTC
- ETH
- USDC
- USDT

**Supported currencies:**

You can check the [`FiatCurrency enum`](https://github.com/nimiq/nimiq-utils/blob/master/src/fiat-api/FiatApi.ts). Additionally, you might use bridging options:

- CPL Bridgeable: For currencies indirectly supported.
- Historical Bridging: Allows fetching rates for currencies like CRC.

```ts
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

### FormattableNumber

Formats and converts numbers without precision loss. It supports a variety of input types and allows operations like rounding, moving the decimal separator, and custom formatting options.

- Handles various input types: string, number, bigint, and BigInteger.
- Converts numbers from scientific notation to a readable format.
- Allows custom formatting with options like grouping and decimal precision.
- Rounds numbers with proper handling of carry-over.
- Compares numbers for equality with normalization.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/formattable-number/FormattableNumber.ts" />

```ts
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils/formattable-number'

// Example: Format a number to a string
const number = new FormattableNumber('12345.6789')
const formatted = number.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ','
})
console.log(formatted) // Output: '12,345.68'

// Example: Convert a number to a non-scientific string
const nonScientific = toNonScientificNumberString('1.23e4')
console.log(nonScientific) // Output: '12300'

// Example: Round a number
const roundedNumber = new FormattableNumber(123.45678)
roundedNumber.round(2)
console.log(roundedNumber.toString()) // Output: '123.46'

// Example: Check equality
const num1 = new FormattableNumber('123.45')
const num2 = new FormattableNumber(123.45)
console.log(num1.equals(num2)) // Output: true
```

### RateLimitScheduler

Provides a way to control and limit task execution based on defined rate limits for different time periods and parallel task limits. It is useful for managing resource usage in systems that require rate-limited operations, such as APIs.

- Flexible Rate Limits: Supports multiple time periods (second, minute, hour, day) and a parallel limit.
- Priority Management: Tasks can be scheduled with LOW or HIGH priority.
- Safety Buffer: Accounts for clock differences and ensures rate limits are respected even at boundaries.
- Dynamic Updates: Allows updating rate limits and usage statistics at runtime.
- Pause and Resume: Tasks can be paused for a specified duration.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/rate-limit-scheduler/RateLimitScheduler.ts" />

```ts
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

(async () => {
  // Schedule tasks with normal priority
  for (let i = 0; i < 10; i++) {
    scheduler.schedule(task)
  }

  // Schedule a high-priority task
  scheduler.schedule(
    async () => {
      console.log('High-priority task executed!')
    },
    Priority.HIGH,
  )
})()
```

#### Key Methods

- `setRateLimits(rateLimits: RateLimits)`: Updates rate limits dynamically.
- `getRateLimits()`: RateLimits: Retrieves the current rate limits.
- `setUsages(usages: RateLimitPeriodUsages, mode: 'overwrite' | 'increase-only' | 'decrease-only')`: Adjusts current usages for specific periods.
- `getUsages(): Required<RateLimits>`: Retrieves current usage statistics.
- `triggerRateLimit(period: RateLimitPeriod)`: Manually trigger a rate limit for a specific period.
- `pause(duration: number)`: Pauses execution for a specified duration.
- `schedule<T>(task: () => T, priority = Priority.LOW): Promise<T>`: Schedules a task to run as soon as rate limits allow.

**Notes**

1. Time periods are based on fixed durations starting from the UNIX epoch (e.g., days reset at midnight UTC).
2. Safety buffers help avoid discrepancies caused by async tasks or clock differences.

### Request Link Encoding

Provides utility functions for creating and parsing request links for multiple cryptocurrencies, including Nimiq, Bitcoin, and Ethereum.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/request-link-encoding/RequestLinkEncoding.ts" />

```typescript
import {
  createRequestLink,
  Currency,
  GeneralRequestLinkOptions,
  parseRequestLink,
} from '@nimiq/utils/request-links-encoding'

// Example: Create a Nimiq request link
const nimiqLink = createRequestLink('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', {
  currency: Currency.NIM,
  amount: 1000, // in Luna
  message: 'Thanks for your support!',
  type: NimiqRequestLinkType.URI,
})

console.log(nimiqLink)
// Output: "nimiq:NQ488CKHBA242VR3N249N8MNJ5XX74DB5XJ8?amount=1000&message=Thanks%20for%20your%20support!"

// Example: Parse a request link
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

**Ethereum-Specific Utilities**

The module also includes specialized functions for Ethereum-based currencies, including support for ERC-20 tokens like USDC and USDT on different chains.

```ts
import {
  createEthereumRequestLink,
  Currency,
  EthereumChain,
  parseEthereumRequestLink,
} from '@nimiq/utils/request-links-encoding'

// Example: Create an Ethereum request link
const ethereumLink = createEthereumRequestLink(
  '0x1234567890abcdef1234567890abcdef12345678',
  Currency.ETH,
  {
    amount: BigInt(1e18), // 1 ETH in Wei
    chainId: EthereumChain.ETHEREUM_MAINNET,
  },
)
console.log(ethereumLink) // Output: "ethereum:0x1234567890abcdef1234567890abcdef12345678?value=1e18"

// Example: Parse an Ethereum request link
const parsedEthereumLink = parseEthereumRequestLink(ethereumLink)
console.log(parsedEthereumLink)
/* Output:
{
    currency: 'eth',
    recipient: '0x1234567890abcdef1234567890abcdef12345678',
    amount: 1000000000000000000n, // 1 ETH in Wei
    chainId: 1, // Ethereum Mainnet
}
*/
```

### Staking Rewards Calculator

Calculates potential wealth accumulation through staking in a cryptocurrency network, taking into account factors such as reward decay, compounding, staking fees, and network configuration.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/rewards-calculator/rewards-calculator.ts" />

```ts
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

// Example: Calculate staking rewards for a specific scenario
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

### Supply Calculator

Provides functionality to calculate the total Proof-of-Stake (PoS) supply of a cryptocurrency at a specific time, considering the supply decay over time.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/supply-calculator/pos.ts" />

```ts
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

// Example: Calculate PoS supply at a specific timestamp
const timestampMs = Date.now() // Current timestamp
const supply = posSupplyAt(timestampMs)

console.log(supply)
// Output: 105432.5678 (example value based on current timestamp and network)
```

You can also compute the supply for the `pow` network.

### Tweenable

Allows you to handle tween animations with customizable easing functions.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/tweenable/Tweenable.ts" />

```ts
import Tweenable from '@nimiq/utils/tweenable'

// Example: Create a Tweenable instance
const tween = new Tweenable(100, 0, 2000) // Target value: 100, Start value: 0, Tween time: 2000ms

// Example: Retrieve the current value during animation
setInterval(() => {
  console.log(`Current Value: ${tween.currentValue}`)
  if (tween.finished)
    console.log('Animation complete!')
}, 100)

// Example: Update the target value and restart the tween
tween.tweenTo(200, 1500) // Tween to 200 over 1500ms

// Example: Use a custom easing function
const customEasing = (t: number) => t * t // Quadratic easing
const tweenWithCustomEasing = new Tweenable(50, 0, 3000, Date.now(), customEasing)

// Example: Access built-in easing functions
const easeInOutValue = Tweenable.Easing.EASE_IN_OUT_CUBIC(0.5) // Calculate easing at progress = 0.5
console.log(`Eased Value (0.5 progress): ${easeInOutValue}`)
```

### Utf8Tools

A utility class for handling UTF-8 string and byte array conversions, validation, and truncation.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/utf8-tools/Utf8Tools.ts" />

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

### ValidationUtils

A utility class that provides methods to validate, normalize, and check the format of Nimiq addresses and hashes.

<GithubSource href="https://github.com/nimiq/nimiq-utils/blob/master/src/validation-utils/ValidationUtils.ts" />

```ts
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Example: Validate if an address is valid
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
console.log(isValid) // Output: true or false

// Example: Normalize an address
const normalizedAddress = ValidationUtils.normalizeAddress(address)
console.log(normalizedAddress) // Output: 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'

// Example: Check if an address is user-friendly
try {
  ValidationUtils.isUserFriendlyAddress(address)
  console.log('The address is user-friendly.')
}
catch (e) {
  console.error(e.message) // Output: error message if the address is invalid
}

// Example: Validate a hash
const hash = 'aGVsbG93b3JsZG5pbWlx'
const isHashValid = ValidationUtils.isValidHash(hash)
console.log(isHashValid) // Output: true or false

// Example: Retrieve the Nimiq Base32 alphabet
const alphabet = ValidationUtils.NIMIQ_ALPHABET
console.log(alphabet) // Output: '0123456789ABCDEFGHJKLMNPQRSTUVXY'
```

## Issues

You can suggest improvements, or report bugs for this library directly on the [GitHub Issues Page](https://github.com/nimiq/nimiq-utils/issues).
