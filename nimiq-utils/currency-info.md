# Currency Info

Provides currency information including code, symbol, name, and decimal precision.

## Usage

### Basic usage

```typescript
import { CurrencyInfo } from '@nimiq/utils/currency-info'

// Basic usage
const usd = new CurrencyInfo('USD')
console.log(usd.symbol) // '$'
console.log(usd.name) // 'US Dollar'
console.log(usd.decimals) // 2
```

### With custom locale

```typescript
// With custom locale
const eur = new CurrencyInfo('EUR', 'de-DE')
console.log(eur.locale) // 'de-DE'
```

### Multiple currencies

```typescript
// Multiple currencies
const currencies = ['USD', 'EUR', 'GBP'].map(code => new CurrencyInfo(code))
currencies.forEach((curr) => {
  console.log(`${curr.name}: ${curr.symbol}`)
})
```

## API

| Method | Description |
| --- | --- |
| `new CurrencyInfo(code, locale?)` | Creates currency info for given code and optional locale |
| `code` | Three-letter currency code (e.g., 'USD') |
| `symbol` | Currency symbol (e.g., '$') |
| `name` | Full currency name (e.g., 'US Dollar') |
| `decimals` | Number of decimal places for currency |
| `locale` | Locale string for formatting |
