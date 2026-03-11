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

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        getExchangeRates(from, to)
      </code>
    </td>
    
    <td>
      Gets current exchange rates from one currency to others
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getHistoricExchangeRatesByRange(currency, from, to)
      </code>
    </td>
    
    <td>
      Gets historic rates for date range
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        supportedFiatCurrencies
      </code>
    </td>
    
    <td>
      Array of supported fiat currency codes
    </td>
  </tr>
</tbody>
</table>
