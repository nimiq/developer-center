# Fiat API

The `FiatApi` class provides a unified interface for accessing fiat rates from various APIs.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

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

## API Reference

### Functions

#### `getExchangeRates(cryptos: string[], fiats: string[], provider: Provider): Promise<ExchangeRates>`

Gets current exchange rates for specified cryptocurrencies and fiat currencies.

**Parameters:**
- `cryptos` - Array of cryptocurrency symbols (e.g., ['btc', 'eth', 'nim'])
- `fiats` - Array of fiat currency codes (e.g., ['usd', 'eur', 'gbp'])
- `provider` - API provider to use

**Returns:**
- `Promise<ExchangeRates>` - Exchange rates object

#### `getHistoricExchangeRatesByRange(crypto: string, fiat: string, fromTimestamp: number, toTimestamp: number, provider?: Provider): Promise<HistoricalRate[]>`

Gets historical exchange rates for a specific period.

**Parameters:**
- `crypto` - Cryptocurrency symbol
- `fiat` - Fiat currency code
- `fromTimestamp` - Start timestamp (milliseconds)
- `toTimestamp` - End timestamp (milliseconds)
- `provider` - Optional API provider (defaults to CryptoCompare)

**Returns:**
- `Promise<HistoricalRate[]>` - Array of historical rates

### Types

#### `ExchangeRates`

```typescript
interface ExchangeRates {
  [crypto: string]: {
    [fiat: string]: number
  }
}
```

#### `HistoricalRate`

```typescript
interface HistoricalRate {
  timestamp: number // Unix timestamp
  rate: number // Exchange rate
}
```

#### `Provider`

```typescript
enum Provider {
  CryptoCompare = 'CryptoCompare',
  CoinGecko = 'CoinGecko'
}
```

## Supported APIs

### CryptoCompare

- **Rate limits**: High (generous limits)
- **Historical data**: Full historical data available
- **Supported assets**: Wide range of cryptocurrencies
- **Update frequency**: Real-time updates

### CoinGecko

- **Rate limits**: Limited (300 requests/minute for free tier)
- **Historical data**: Last 365 days for free tier
- **Supported assets**: Extensive cryptocurrency database
- **Update frequency**: Regular updates

## Supported Cryptocurrencies

- **NIM** - Nimiq
- **BTC** - Bitcoin
- **ETH** - Ethereum
- **USDC** - USD Coin
- **USDT** - Tether

## Examples

### Current Exchange Rates

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

// Get current rates for multiple cryptocurrencies
const rates = await getExchangeRates(
  ['nim', 'btc', 'eth'],
  ['usd', 'eur'],
  Provider.CryptoCompare
)

console.log('Current Rates:')
console.log(`NIM/USD: $${rates.nim.usd}`)
console.log(`NIM/EUR: €${rates.nim.eur}`)
console.log(`BTC/USD: $${rates.btc.usd}`)
console.log(`ETH/USD: $${rates.eth.usd}`)
```

### Historical Data Analysis

```typescript
import { getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils/fiat-api'

// Get last 30 days of BTC/USD rates
const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)
const rates = await getHistoricExchangeRatesByRange(
  'btc',
  'usd',
  thirtyDaysAgo,
  Date.now(),
  Provider.CryptoCompare
)

// Calculate average rate
const average = rates.reduce((sum, rate) => sum + rate.rate, 0) / rates.length
console.log(`Average BTC/USD over last 30 days: $${average.toFixed(2)}`)

// Find highest and lowest rates
const highest = Math.max(...rates.map(r => r.rate))
const lowest = Math.min(...rates.map(r => r.rate))
console.log(`Highest: $${highest}`)
console.log(`Lowest: $${lowest}`)
```

### Portfolio Valuation

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

interface Portfolio {
  [crypto: string]: number
}

async function calculatePortfolioValue(portfolio: Portfolio, fiat: string = 'usd') {
  const cryptos = Object.keys(portfolio)
  const rates = await getExchangeRates(cryptos, [fiat], Provider.CryptoCompare)

  let totalValue = 0
  const breakdown: { [crypto: string]: number } = {}

  for (const crypto of cryptos) {
    const amount = portfolio[crypto]
    const rate = rates[crypto][fiat]
    const value = amount * rate

    breakdown[crypto] = value
    totalValue += value
  }

  return { totalValue, breakdown }
}

// Example portfolio
const myPortfolio = {
  nim: 100000, // 100,000 NIM
  btc: 0.5, // 0.5 BTC
  eth: 2.0 // 2 ETH
}

const valuation = await calculatePortfolioValue(myPortfolio)
console.log(`Total Portfolio Value: $${valuation.totalValue.toFixed(2)}`)
console.log('Breakdown:', valuation.breakdown)
```

### Rate Comparison

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

async function compareProviders(crypto: string, fiat: string) {
  const providers = [Provider.CryptoCompare, Provider.CoinGecko]
  const results = {}

  for (const provider of providers) {
    try {
      const rates = await getExchangeRates([crypto], [fiat], provider)
      results[provider] = rates[crypto][fiat]
    }
    catch (error) {
      results[provider] = `Error: ${error.message}`
    }
  }

  return results
}

const comparison = await compareProviders('btc', 'usd')
console.log('Provider Comparison for BTC/USD:', comparison)
```

### Price Alerts

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

class PriceAlert {
  private crypto: string
  private fiat: string
  private targetPrice: number
  private isAbove: boolean

  constructor(crypto: string, fiat: string, targetPrice: number, isAbove: boolean = true) {
    this.crypto = crypto
    this.fiat = fiat
    this.targetPrice = targetPrice
    this.isAbove = isAbove
  }

  async check(): Promise<boolean> {
    const rates = await getExchangeRates([this.crypto], [this.fiat], Provider.CryptoCompare)
    const currentRate = rates[this.crypto][this.fiat]

    const triggered = this.isAbove
      ? currentRate > this.targetPrice
      : currentRate < this.targetPrice

    if (triggered) {
      console.log(`Alert: ${this.crypto.toUpperCase()} is ${this.isAbove ? 'above' : 'below'} ${this.targetPrice} ${this.fiat.toUpperCase()}`)
      console.log(`Current price: ${currentRate}`)
    }

    return triggered
  }
}

// Set up price alerts
const alerts = [
  new PriceAlert('btc', 'usd', 50000, true), // BTC above $50,000
  new PriceAlert('eth', 'usd', 2000, false), // ETH below $2,000
  new PriceAlert('nim', 'usd', 0.01, true) // NIM above $0.01
]

// Check alerts
alerts.forEach(alert => alert.check())
```

## Error Handling

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

async function safeGetRates(cryptos: string[], fiats: string[], provider: Provider) {
  try {
    return await getExchangeRates(cryptos, fiats, provider)
  }
  catch (error) {
    console.error('Rate fetch error:', error.message)

    // Fallback to other provider
    const fallbackProvider = provider === Provider.CryptoCompare
      ? Provider.CoinGecko
      : Provider.CryptoCompare

    try {
      console.log('Trying fallback provider...')
      return await getExchangeRates(cryptos, fiats, fallbackProvider)
    }
    catch (fallbackError) {
      console.error('Fallback failed:', fallbackError.message)
      throw new Error('All providers failed')
    }
  }
}
```

## Rate Limiting

```typescript
import { getExchangeRates, Provider } from '@nimiq/utils/fiat-api'

class RateLimitedFiatApi {
  private lastRequest: number = 0
  private minInterval: number = 1000 // 1 second between requests

  async getExchangeRates(cryptos: string[], fiats: string[], provider: Provider) {
    const now = Date.now()
    const timeSinceLastRequest = now - this.lastRequest

    if (timeSinceLastRequest < this.minInterval) {
      const waitTime = this.minInterval - timeSinceLastRequest
      await new Promise(resolve => setTimeout(resolve, waitTime))
    }

    this.lastRequest = Date.now()
    return await getExchangeRates(cryptos, fiats, provider)
  }
}

const rateLimitedApi = new RateLimitedFiatApi()
```

## Use Cases

- **Portfolio tracking** - Calculate total portfolio value
- **Price alerts** - Monitor price thresholds
- **Trading applications** - Get real-time exchange rates
- **Analytics** - Historical price analysis
- **Financial reporting** - Convert crypto holdings to fiat

## Related Modules

- [CurrencyInfo](./currency-info) - Get currency information
- [FormattableNumber](./formattable-number) - Format currency amounts
- [RateLimitScheduler](./rate-limit-scheduler) - Manage API rate limits

## Next Steps

- Learn about [CurrencyInfo](./currency-info) for currency formatting
- Explore [FormattableNumber](./formattable-number) for number formatting
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
