# CurrencyInfo

Provides a comprehensive utility for handling currency information, including details like code, symbol, name, and decimal precision.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

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

## API Reference

### Constructor

#### `new CurrencyInfo(code: string, locale?: string)`

Creates a new CurrencyInfo instance for the specified currency.

**Parameters:**
- `code` - The three-letter currency code (e.g., 'USD', 'EUR', 'GBP')
- `locale` - Optional locale string (e.g., 'en-US', 'de-DE', 'fr-FR')

**Example:**
```typescript
const usd = new CurrencyInfo('USD')
const euro = new CurrencyInfo('EUR', 'de-DE')
const pound = new CurrencyInfo('GBP', 'en-GB')
```

### Properties

#### `code: string`
The three-letter currency code.

#### `symbol: string`
The currency symbol (e.g., '$', '€', '£').

#### `name: string`
The full currency name (e.g., 'US Dollar', 'Euro').

#### `decimals: number`
The number of decimal places typically used for this currency.

#### `locale: string`
The locale string used for formatting.

## Examples

### Basic Usage

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

const currencies = [
  new CurrencyInfo('USD'),
  new CurrencyInfo('EUR'),
  new CurrencyInfo('GBP'),
  new CurrencyInfo('JPY'),
  new CurrencyInfo('CHF')
]

currencies.forEach((currency) => {
  console.log(`${currency.name}: ${currency.symbol} (${currency.code})`)
})
// Output:
// US Dollar: $ (USD)
// Euro: € (EUR)
// British Pound: £ (GBP)
// Japanese Yen: ¥ (JPY)
// Swiss Franc: CHF (CHF)
```

### Formatting with Locale

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

const amount = 1234.56

// US formatting
const usd = new CurrencyInfo('USD', 'en-US')
console.log(`${usd.symbol}${amount.toLocaleString(usd.locale, {
  minimumFractionDigits: usd.decimals,
  maximumFractionDigits: usd.decimals
})}`) // Output: $1,234.56

// German formatting
const eur = new CurrencyInfo('EUR', 'de-DE')
console.log(`${amount.toLocaleString(eur.locale, {
  minimumFractionDigits: eur.decimals,
  maximumFractionDigits: eur.decimals
})} ${eur.symbol}`) // Output: 1.234,56 €
```

### Currency Comparison

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

function compareCurrencies(code1: string, code2: string) {
  const curr1 = new CurrencyInfo(code1)
  const curr2 = new CurrencyInfo(code2)

  console.log(`${curr1.name} vs ${curr2.name}`)
  console.log(`Symbols: ${curr1.symbol} vs ${curr2.symbol}`)
  console.log(`Decimals: ${curr1.decimals} vs ${curr2.decimals}`)
}

compareCurrencies('USD', 'JPY')
// Output:
// US Dollar vs Japanese Yen
// Symbols: $ vs ¥
// Decimals: 2 vs 0
```

### Integration with FormattableNumber

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

function formatCurrency(amount: number | string, currencyCode: string, locale?: string) {
  const currency = new CurrencyInfo(currencyCode, locale)
  const formattedAmount = new FormattableNumber(amount)

  return `${currency.symbol}${formattedAmount.toString({
    maxDecimals: currency.decimals,
    useGrouping: true,
    groupSeparator: ','
  })}`
}

console.log(formatCurrency(1234.567, 'USD')) // Output: $1,234.57
console.log(formatCurrency(1234.567, 'EUR')) // Output: €1,234.57
console.log(formatCurrency(1234.567, 'JPY')) // Output: ¥1,235
```

## Supported Currencies

The CurrencyInfo class supports all major world currencies including:

- **Major Currencies**: USD, EUR, GBP, JPY, CHF, CAD, AUD, NZD
- **Asian Currencies**: CNY, KRW, HKD, SGD, INR, THB
- **European Currencies**: SEK, NOK, DKK, PLN, CZK, HUF
- **Other Currencies**: BRL, MXN, ZAR, RUB, TRY
- **Cryptocurrencies**: BTC, ETH, and others

## Locale Support

CurrencyInfo automatically determines appropriate locales for currencies but also accepts custom locales:

```typescript
// Automatic locale detection
const usd = new CurrencyInfo('USD') // Uses 'en-US'
const eur = new CurrencyInfo('EUR') // Uses 'en-US' by default

// Custom locale
const eurDE = new CurrencyInfo('EUR', 'de-DE') // German formatting
const eurFR = new CurrencyInfo('EUR', 'fr-FR') // French formatting
```

## Use Cases

- **E-commerce applications** - Display prices in multiple currencies
- **Financial dashboards** - Show currency symbols and formatting
- **International applications** - Handle multiple locales and currencies
- **Portfolio trackers** - Display assets in different currencies
- **Payment systems** - Format amounts according to currency standards

## Related Modules

- [FormattableNumber](./formattable-number) - Format currency amounts
- [Fiat API](./fiat-api) - Get exchange rates for currencies
- [Staking Rewards Calculator](./staking-rewards-calculator) - Format reward amounts

## Next Steps

- Learn about [FormattableNumber](./formattable-number) for number formatting
- Explore [Fiat API](./fiat-api) for exchange rates
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
