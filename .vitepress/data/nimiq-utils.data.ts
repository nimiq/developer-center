// @unocss-include

export interface NimiqUtilModule {
  text: string
  link: string
  icon: string
  description?: string
  popular?: boolean
}

export interface NimiqUtilModuleGroup {
  text: string
  items: NimiqUtilModule[]
}

// For sidebar compatibility
export interface NimiqUtilSidebarGroup {
  label: string
  items: NimiqUtilModule[]
}

export const nimiqUtilsModules: NimiqUtilModuleGroup[] = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Overview', link: '/nimiq-utils/', icon: 'i-tabler:layout-grid', description: 'Essential developer utilities for Nimiq blockchain development' },
      { text: 'Installation', link: '/nimiq-utils/installation', icon: 'i-tabler:download', description: 'How to install and setup Nimiq Utils in your project' },
    ],
  },
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
  {
    text: 'Resources',
    items: [
      { text: 'GitHub Repository', link: 'https://github.com/nimiq/nimiq-utils', icon: 'i-tabler:brand-github', description: 'View source code and contribute to Nimiq Utils' },
      { text: 'Report Issues', link: 'https://github.com/nimiq/nimiq-utils/issues', icon: 'i-tabler:bug', description: 'Report bugs and request features' },
    ],
  },
]

// Convert to sidebar format (uses 'label' instead of 'text')
export const nimiqUtilsSidebar: NimiqUtilSidebarGroup[] = nimiqUtilsModules.map(group => ({
  label: group.text,
  items: group.items,
}))

interface UsageExample {
  title: string
  code: string
}

interface ApiItem {
  method: string
  description: string
}

interface ModuleContent {
  title: string
  description: string
  usageExamples: UsageExample[]
  api: ApiItem[]
}

type ModuleContentMap = Record<string, ModuleContent>

// Module content data
const moduleContent: ModuleContentMap = {
  'address-book': {
    title: 'AddressBook',
    description: 'Provides mapping of addresses to their corresponding labels for mainnet pools, services, and exchanges.',
    usageExamples: [
      {
        title: 'Get label for known address',
        code: `
import { AddressBook } from '@nimiq/utils/address-book'

// Get label for known address
const poolAddress = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const label = AddressBook.getLabel(poolAddress)
console.log(label) // 'Skypool'
`.trim(),
      },
      {
        title: 'Handle unknown addresses',
        code: `
// Unknown address returns null
const unknownAddress = 'NQ01 2345 6789 0123 4567 8901 2345 6789 0123'
const unknownLabel = AddressBook.getLabel(unknownAddress)
console.log(unknownLabel) // null
`.trim(),
      },
      {
        title: 'Use in UI',
        code: `
// Use in UI
function displayAddress(address) {
  const label = AddressBook.getLabel(address)
  return label ? \`\${label} (\${address})\` : address
}
`.trim(),
      },
    ],
    api: [
      {
        method: 'getLabel(address: string)',
        description: 'Returns label for address, or null if not found',
      },
    ],
  },
  'albatross-policy': {
    title: 'Albatross Policy',
    description: 'Constants and utility functions for blockchain configuration, supply, and block calculations.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { batchIndexAt, epochIndexAt, SLOTS_PER_EPOCH } from '@nimiq/utils/albatross-policy'

const currentEpoch = epochIndexAt(blockNumber)
const batch = batchIndexAt(blockNumber)
console.log(\`Block \${blockNumber} is in epoch \${currentEpoch}, batch \${batch}\`)
`.trim(),
      },
    ],
    api: [
      {
        method: 'epochIndexAt(blockNumber)',
        description: 'Returns epoch index for given block number',
      },
      {
        method: 'batchIndexAt(blockNumber)',
        description: 'Returns batch index for given block number',
      },
      {
        method: 'SLOTS_PER_EPOCH',
        description: 'Number of slots in each epoch',
      },
      {
        method: 'BATCHES_PER_EPOCH',
        description: 'Number of batches in each epoch',
      },
      {
        method: 'BLOCKS_PER_BATCH',
        description: 'Number of blocks in each batch',
      },
      {
        method: 'TOTAL_SUPPLY',
        description: 'Total supply in smallest units',
      },
    ],
  },
  'browser-detection': {
    title: 'BrowserDetection',
    description: 'Utility for detecting browser details including type, version, private mode, and device information.',
    usageExamples: [
      {
        title: 'Detect browser type',
        code: `
import BrowserDetection from '@nimiq/utils/browser-detection'

// Detect browser type
if (BrowserDetection.isChrome()) {
  console.log('Chrome browser detected')
}
`.trim(),
      },
      {
        title: 'Detect device type',
        code: `
// Detect device type
if (BrowserDetection.isMobile()) {
  console.log('Mobile device')
}
`.trim(),
      },
      {
        title: 'Get detailed info',
        code: `
// Get detailed info
const info = BrowserDetection.getBrowserInfo()
console.log(\`\${info.name} version \${info.version}\`)
`.trim(),
      },
      {
        title: 'Check private mode',
        code: `
// Check private mode (async)
const isPrivate = await BrowserDetection.isPrivateMode()
if (isPrivate) {
  console.log('Private browsing detected')
}
`.trim(),
      },
    ],
    api: [
      {
        method: 'isChrome()',
        description: 'Returns true if Chrome browser',
      },
      {
        method: 'isFirefox()',
        description: 'Returns true if Firefox browser',
      },
      {
        method: 'isSafari()',
        description: 'Returns true if Safari browser',
      },
      {
        method: 'isEdge()',
        description: 'Returns true if Edge browser',
      },
      {
        method: 'isMobile()',
        description: 'Returns true if mobile device',
      },
      {
        method: 'isIOS()',
        description: 'Returns true if iOS device',
      },
      {
        method: 'isPrivateMode()',
        description: 'Returns promise that resolves to true if private mode',
      },
      {
        method: 'getBrowserInfo()',
        description: 'Returns object with browser name and version',
      },
    ],
  },
  'clipboard': {
    title: 'Clipboard',
    description: 'Utility for copying text to the clipboard with mobile compatibility.',
    usageExamples: [
      {
        title: 'Basic copy',
        code: `
import { Clipboard } from '@nimiq/utils/clipboard'

// Basic copy
const success = Clipboard.copy('Hello, World!')
console.log(success) // true if successful
`.trim(),
      },
      {
        title: 'Copy address with feedback',
        code: `
// Copy address with feedback
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
if (Clipboard.copy(address)) {
  console.log('Address copied to clipboard!')
}
else {
  console.log('Copy failed - try again')
}
`.trim(),
      },
      {
        title: 'Copy in click handler',
        code: `
// Copy in click handler
button.addEventListener('click', () => {
  const text = button.dataset.copyText
  Clipboard.copy(text)
})
`.trim(),
      },
    ],
    api: [
      {
        method: 'copy(text: string)',
        description: 'Copies text to clipboard, returns true if successful',
      },
    ],
  },
  'cookie-utilities': {
    title: 'Cookie Utilities',
    description: 'Utility functions for managing cookies including getting, setting, and unsetting.',
    usageExamples: [
      {
        title: 'Basic cookie operations',
        code: `
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

setCookie('theme', 'dark', { expires: 7 })
const theme = getCookie('theme')
console.log(theme) // 'dark'
`.trim(),
      },
    ],
    api: [
      {
        method: 'getCookie(name: string)',
        description: 'Gets cookie value by name, returns null if not found',
      },
      {
        method: 'setCookie(name, value, options?)',
        description: 'Sets cookie with optional expiration and path',
      },
      {
        method: 'unsetCookie(name: string)',
        description: 'Removes cookie by setting expiration to past date',
      },
    ],
  },
  'currency-info': {
    title: 'CurrencyInfo',
    description: 'Provides currency information including code, symbol, name, and decimal precision.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { CurrencyInfo } from '@nimiq/utils/currency-info'

// Basic usage
const usd = new CurrencyInfo('USD')
console.log(usd.symbol) // '$'
console.log(usd.name) // 'US Dollar'
console.log(usd.decimals) // 2
`.trim(),
      },
      {
        title: 'With custom locale',
        code: `
// With custom locale
const eur = new CurrencyInfo('EUR', 'de-DE')
console.log(eur.locale) // 'de-DE'
`.trim(),
      },
      {
        title: 'Multiple currencies',
        code: `
// Multiple currencies
const currencies = ['USD', 'EUR', 'GBP'].map(code => new CurrencyInfo(code))
currencies.forEach((curr) => {
  console.log(\`\${curr.name}: \${curr.symbol}\`)
})
`.trim(),
      },
    ],
    api: [
      {
        method: 'new CurrencyInfo(code, locale?)',
        description: 'Creates currency info for given code and optional locale',
      },
      {
        method: 'code',
        description: 'Three-letter currency code (e.g., \'USD\')',
      },
      {
        method: 'symbol',
        description: 'Currency symbol (e.g., \'$\')',
      },
      {
        method: 'name',
        description: 'Full currency name (e.g., \'US Dollar\')',
      },
      {
        method: 'decimals',
        description: 'Number of decimal places for currency',
      },
      {
        method: 'locale',
        description: 'Locale string for formatting',
      },
    ],
  },
  'fiat-api': {
    title: 'Fiat API',
    description: 'Provides unified interface for accessing fiat exchange rates from various APIs.',
    usageExamples: [
      {
        title: 'Get current rates',
        code: `
import { getExchangeRates, getHistoricExchangeRatesByRange } from '@nimiq/utils/fiat-api'

// Get current rates
const rates = await getExchangeRates('USD', ['EUR', 'GBP'])
console.log(rates) // { EUR: 0.85, GBP: 0.73 }
`.trim(),
      },
      {
        title: 'Get single rate',
        code: `
// Get single rate
const eurRate = await getExchangeRates('USD', 'EUR')
console.log(eurRate) // 0.85
`.trim(),
      },
      {
        title: 'Get historic rates',
        code: `
// Get historic rates
const historic = await getHistoricExchangeRatesByRange(
  'NIM',
  new Date('2024-01-01'),
  new Date('2024-01-31')
)
console.log(historic) // Array of daily rates
`.trim(),
      },
    ],
    api: [
      {
        method: 'getExchangeRates(from, to)',
        description: 'Gets current exchange rates from one currency to others',
      },
      {
        method: 'getHistoricExchangeRatesByRange(currency, from, to)',
        description: 'Gets historic rates for date range',
      },
      {
        method: 'supportedFiatCurrencies',
        description: 'Array of supported fiat currency codes',
      },
    ],
  },
  'formattable-number': {
    title: 'FormattableNumber',
    description: 'Formats and converts numbers without precision loss with customizable formatting options.',
    usageExamples: [
      {
        title: 'Basic formatting',
        code: `
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils/formattable-number'

// Basic formatting
const number = new FormattableNumber('12345.6789')
const formatted = number.toString({ maxDecimals: 2, useGrouping: true })
console.log(formatted) // '12,345.68'
`.trim(),
      },
      {
        title: 'Math operations',
        code: `
// Math operations
const a = new FormattableNumber('100.5')
const b = new FormattableNumber('25.25')
const sum = a.plus(b)
console.log(sum.toString()) // '125.75'
`.trim(),
      },
      {
        title: 'Scientific notation conversion',
        code: `
// Scientific notation conversion
const scientific = toNonScientificNumberString('1.23e4')
console.log(scientific) // '12300'
`.trim(),
      },
      {
        title: 'Rounding',
        code: `
// Rounding
const price = new FormattableNumber('123.456789')
price.round(2)
console.log(price.toString()) // '123.46'
`.trim(),
      },
    ],
    api: [
      {
        method: 'new FormattableNumber(value)',
        description: 'Creates instance from number, string, or BigInt',
      },
      {
        method: 'toString(options?)',
        description: 'Formats number with optional decimals, grouping, separators',
      },
      {
        method: 'round(decimals)',
        description: 'Rounds to specified decimal places',
      },
      {
        method: 'equals(other)',
        description: 'Compares equality with another FormattableNumber',
      },
      {
        method: 'plus(other)',
        description: 'Adds another number and returns new instance',
      },
      {
        method: 'minus(other)',
        description: 'Subtracts another number and returns new instance',
      },
      {
        method: 'multipliedBy(other)',
        description: 'Multiplies by another number and returns new instance',
      },
      {
        method: 'dividedBy(other)',
        description: 'Divides by another number and returns new instance',
      },
      {
        method: 'toNonScientificNumberString(num)',
        description: 'Static method to convert scientific notation to regular string',
      },
    ],
  },
  'rate-limit-scheduler': {
    title: 'RateLimitScheduler',
    description: 'Controls and limits task execution based on defined rate limits and parallel task limits.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

const scheduler = new RateLimitScheduler({ maxParallel: 3, maxPerSecond: 10 })
await scheduler.schedule(() => fetch('/api/data'), Priority.HIGH)
`.trim(),
      },
    ],
    api: [
      {
        method: 'new RateLimitScheduler(config)',
        description: 'Creates scheduler with parallel and rate limits',
      },
      {
        method: 'schedule(task, priority?)',
        description: 'Schedules task with optional priority',
      },
      {
        method: 'Priority.LOW/NORMAL/HIGH/URGENT',
        description: 'Task priority levels',
      },
      {
        method: 'getStats()',
        description: 'Returns scheduler statistics',
      },
      {
        method: 'clear()',
        description: 'Clears all pending tasks',
      },
    ],
  },
  'request-link-encoding': {
    title: 'Request Link Encoding',
    description: 'Creates and parses request links for multiple cryptocurrencies including Nimiq, Bitcoin, and Ethereum.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { createRequestLink, parseRequestLink } from '@nimiq/utils/request-link-encoding'

const link = createRequestLink('nimiq:NQ48...5XJ8?amount=100&message=Payment')
const parsed = parseRequestLink(link)
console.log(parsed.recipient) // 'NQ48...5XJ8'
`.trim(),
      },
    ],
    api: [
      {
        method: 'createRequestLink(uri)',
        description: 'Creates request link from URI string',
      },
      {
        method: 'parseRequestLink(link)',
        description: 'Parses request link into components',
      },
      {
        method: 'Currency.NIMIQ/BITCOIN/ETHEREUM',
        description: 'Supported currency constants',
      },
    ],
  },
  'staking-rewards-calculator': {
    title: 'Staking Rewards Calculator',
    description: 'Calculates potential wealth accumulation through staking with reward decay, compounding, and fees.',
    usageExamples: [
      {
        title: 'Basic calculation',
        code: `
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

// Basic calculation
const result = calculateStakingRewards({
  amount: 100000, // 100k NIM
  days: 365, // 1 year
  stakedSupplyRatio: 0.5, // 50% of supply staked
  autoRestake: true // Compound rewards
})
console.log(result.totalReward) // Total rewards earned
console.log(result.finalBalance) // Final balance including rewards
`.trim(),
      },
      {
        title: 'With custom fee',
        code: `
// With custom fee
const withFee = calculateStakingRewards({
  amount: 50000,
  days: 180,
  stakedSupplyRatio: 0.6,
  fee: 0.05, // 5% validator fee
  autoRestake: false
})
`.trim(),
      },
    ],
    api: [
      {
        method: 'calculateStakingRewards(params)',
        description: 'Calculates staking rewards for given parameters',
      },
      {
        method: 'StakingParams',
        description: 'Input parameters: amount, days, stakedSupplyRatio, etc.',
      },
      {
        method: 'StakingResult',
        description: 'Result object with totalReward, finalBalance, etc.',
      },
    ],
  },
  'supply-calculator': {
    title: 'Supply Calculator',
    description: 'Calculates total Proof-of-Stake supply at specific times considering supply decay.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

const timestamp = Date.now()
const supply = posSupplyAt(timestamp)
console.log(\`Current PoS supply: \${supply}\`)
`.trim(),
      },
    ],
    api: [
      {
        method: 'posSupplyAt(timestamp)',
        description: 'Returns PoS supply at given timestamp',
      },
      {
        method: 'supplyAfter(blocks)',
        description: 'Returns supply after specified number of blocks',
      },
    ],
  },
  'tweenable': {
    title: 'Tweenable',
    description: 'Animation utility for handling tween animations with customizable easing functions.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import Tweenable from '@nimiq/utils/tweenable'

const tween = new Tweenable({ from: { x: 0 }, to: { x: 100 }, duration: 1000 })
tween.start()
`.trim(),
      },
    ],
    api: [
      {
        method: 'new Tweenable(config)',
        description: 'Creates tween with from, to, duration, and easing options',
      },
      {
        method: 'start()',
        description: 'Starts the animation',
      },
      {
        method: 'stop()',
        description: 'Stops the animation',
      },
      {
        method: 'pause()',
        description: 'Pauses the animation',
      },
      {
        method: 'resume()',
        description: 'Resumes paused animation',
      },
      {
        method: 'seek(time)',
        description: 'Jumps to specific time in animation',
      },
    ],
  },
  'utf8-tools': {
    title: 'Utf8Tools',
    description: 'Utility class for UTF-8 string and byte array conversions, validation, and truncation.',
    usageExamples: [
      {
        title: 'Basic usage',
        code: `
import { Utf8Tools } from '@nimiq/utils/utf8-tools'

const bytes = Utf8Tools.stringToUtf8ByteArray('Hello, 世界!')
const string = Utf8Tools.utf8ByteArrayToString(bytes)
console.log(string) // 'Hello, 世界!'
`.trim(),
      },
    ],
    api: [
      {
        method: 'stringToUtf8ByteArray(str)',
        description: 'Converts string to UTF-8 byte array',
      },
      {
        method: 'utf8ByteArrayToString(bytes)',
        description: 'Converts UTF-8 byte array to string',
      },
      {
        method: 'isValidUtf8(bytes)',
        description: 'Checks if byte array is valid UTF-8',
      },
      {
        method: 'truncateToUtf8ByteLength(str, maxBytes)',
        description: 'Truncates string to fit in specified byte length',
      },
    ],
  },
  'validation-utils': {
    title: 'ValidationUtils',
    description: 'Utility class for validating, normalizing, and checking Nimiq addresses and hashes.',
    usageExamples: [
      {
        title: 'Validate addresses',
        code: `
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Validate addresses
const address1 = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const address2 = 'invalid-address'
console.log(ValidationUtils.isValidAddress(address1)) // true
console.log(ValidationUtils.isValidAddress(address2)) // false
`.trim(),
      },
      {
        title: 'Normalize formatting',
        code: `
// Normalize formatting
const lowercase = 'nq48 8ckh ba24 2vr3 n249 n8mn j5xx 74db 5xj8'
const normalized = ValidationUtils.normalizeAddress(lowercase)
console.log(normalized) // 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
`.trim(),
      },
      {
        title: 'Check format validation',
        code: `
// Check format (throws if invalid)
try {
  ValidationUtils.isUserFriendlyAddress(address1)
  console.log('Valid user-friendly format')
}
catch (error) {
  console.error('Invalid format:', error.message)
}
`.trim(),
      },
    ],
    api: [
      {
        method: 'isValidAddress(address: string)',
        description: 'Returns true if address is valid',
      },
      {
        method: 'normalizeAddress(address: string)',
        description: 'Returns normalized address with proper formatting',
      },
      {
        method: 'isUserFriendlyAddress(address: string)',
        description: 'Throws error if address is not user-friendly format',
      },
    ],
  },
}

// Export for compatibility with theme config
export const data = {
  modules: nimiqUtilsModules,
  sidebar: nimiqUtilsSidebar,
  content: moduleContent,
}

// VitePress data loader
export default {
  load() {
    return data
  },
}
