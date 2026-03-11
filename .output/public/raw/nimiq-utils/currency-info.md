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
        new CurrencyInfo(code, locale?)
      </code>
    </td>
    
    <td>
      Creates currency info for given code and optional locale
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        code
      </code>
    </td>
    
    <td>
      Three-letter currency code (e.g., 'USD')
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        symbol
      </code>
    </td>
    
    <td>
      Currency symbol (e.g., '$')
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        name
      </code>
    </td>
    
    <td>
      Full currency name (e.g., 'US Dollar')
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        decimals
      </code>
    </td>
    
    <td>
      Number of decimal places for currency
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        locale
      </code>
    </td>
    
    <td>
      Locale string for formatting
    </td>
  </tr>
</tbody>
</table>
