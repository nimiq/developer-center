# Fiat API

Provides unified interface for accessing fiat exchange rates from various APIs.

## Usage

### Get current rates

```typescript
import { getExchangeRates, getHistoricExchangeRatesByRange } from '@nimiq/utils/fiat-api'

// Get current rates
const rates = await getExchangeRates('USD', ['EUR', 'GBP'])
console.log(rates) // { EUR: 0.85, GBP: 0.73 }
```

### Get single rate

```typescript
// Get single rate
const eurRate = await getExchangeRates('USD', 'EUR')
console.log(eurRate) // 0.85
```

### Get historic rates

```typescript
// Get historic rates
const historic = await getHistoricExchangeRatesByRange(
  'NIM',
  new Date('2024-01-01'),
  new Date('2024-01-31')
)
console.log(historic) // Array of daily rates
```

## API

| Method | Description |
| --- | --- |
| `getExchangeRates(from, to)` | Gets current exchange rates from one currency to others |
| `getHistoricExchangeRatesByRange(currency, from, to)` | Gets historic rates for date range |
| `supportedFiatCurrencies` | Array of supported fiat currency codes |
