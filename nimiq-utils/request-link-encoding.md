# Request Link Encoding

Provides utility functions for creating and parsing request links for multiple cryptocurrencies, including Nimiq, Bitcoin, and Ethereum.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

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

## API Reference

### Functions

#### `createRequestLink(recipient: string, options: CreateRequestLinkOptions): string`

Creates a request link for a cryptocurrency payment.

**Parameters:**
- `recipient` - The recipient address
- `options` - Configuration object for the request link

**Returns:**
- `string` - The generated request link

#### `parseRequestLink(link: string, options?: ParseRequestLinkOptions): ParsedRequestLink`

Parses a request link to extract payment information.

**Parameters:**
- `link` - The request link to parse
- `options` - Optional parsing configuration

**Returns:**
- `ParsedRequestLink` - The parsed payment information

### Types

#### `CreateRequestLinkOptions`

```typescript
interface CreateRequestLinkOptions {
  currency: Currency // Target currency
  amount?: number // Amount to request
  message?: string // Optional message
  type?: RequestLinkType // Link type (URI, QR, etc.)
  label?: string // Optional label for the request
  fee?: number // Optional fee amount
}
```

#### `ParsedRequestLink`

```typescript
interface ParsedRequestLink {
  currency: string // Currency code
  recipient: string // Recipient address
  amount?: number // Requested amount
  message?: string // Optional message
  label?: string // Optional label
  fee?: number // Optional fee
}
```

#### `Currency`

```typescript
enum Currency {
  NIM = 'nim',
  BTC = 'btc',
  ETH = 'eth',
  USDC = 'usdc',
  USDT = 'usdt'
}
```

## Examples

### Nimiq Request Links

```typescript
import { createRequestLink, Currency } from '@nimiq/utils/request-links-encoding'

// Basic Nimiq request
const basicLink = createRequestLink('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', {
  currency: Currency.NIM,
  amount: 50000, // 0.5 NIM in Luna
})

// Request with message and label
const detailedLink = createRequestLink('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', {
  currency: Currency.NIM,
  amount: 100000, // 1 NIM in Luna
  message: 'Payment for services',
  label: 'John Doe',
})

console.log(basicLink)
console.log(detailedLink)
```

### Bitcoin Request Links

```typescript
import { createRequestLink, Currency } from '@nimiq/utils/request-links-encoding'

// Bitcoin request
const bitcoinLink = createRequestLink('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', {
  currency: Currency.BTC,
  amount: 100000, // 0.001 BTC in satoshis
  message: 'Coffee payment',
})

console.log(bitcoinLink)
// Output: "bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.001&message=Coffee%20payment"
```

### Ethereum Request Links

```typescript
import { createRequestLink, Currency } from '@nimiq/utils/request-links-encoding'

// Ethereum request
const ethereumLink = createRequestLink('0x742d35Cc6634C0532925a3b8D867b9E9A4e3A6d2', {
  currency: Currency.ETH,
  amount: 1000000000000000000, // 1 ETH in wei
  message: 'Smart contract payment',
})

console.log(ethereumLink)
// Output: "ethereum:0x742d35Cc6634C0532925a3b8D867b9E9A4e3A6d2?amount=1&message=Smart%20contract%20payment"
```

### Parsing Request Links

```typescript
import { Currency, parseRequestLink } from '@nimiq/utils/request-links-encoding'

// Parse various types of request links
const links = [
  'nimiq:NQ488CKHBA242VR3N249N8MNJ5XX74DB5XJ8?amount=1000&message=Thanks',
  'bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.001',
  'ethereum:0x742d35Cc6634C0532925a3b8D867b9E9A4e3A6d2?amount=1'
]

links.forEach((link) => {
  try {
    const parsed = parseRequestLink(link)
    console.log(`${parsed.currency.toUpperCase()}:`)
    console.log(`  Recipient: ${parsed.recipient}`)
    console.log(`  Amount: ${parsed.amount}`)
    console.log(`  Message: ${parsed.message || 'None'}`)
  }
  catch (error) {
    console.error(`Failed to parse link: ${link}`)
  }
})
```

### QR Code Integration

```typescript
import { createRequestLink, Currency } from '@nimiq/utils/request-links-encoding'

// Create request link for QR code
const qrLink = createRequestLink('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', {
  currency: Currency.NIM,
  amount: 250000, // 2.5 NIM in Luna
  message: 'Scan to pay',
  label: 'Merchant Name',
})

// The qrLink can be used to generate QR codes
console.log('QR Code Data:', qrLink)
```

### Batch Request Processing

```typescript
import { parseRequestLink } from '@nimiq/utils/request-links-encoding'

const requestLinks = [
  'nimiq:NQ488CKHBA242VR3N249N8MNJ5XX74DB5XJ8?amount=1000',
  'bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.001',
  'ethereum:0x742d35Cc6634C0532925a3b8D867b9E9A4e3A6d2?amount=1'
]

const parsedRequests = requestLinks.map((link) => {
  try {
    return parseRequestLink(link)
  }
  catch (error) {
    console.error(`Invalid link: ${link}`)
    return null
  }
}).filter(Boolean)

console.log('Parsed Requests:', parsedRequests)
```

## Supported Currencies

The module supports major cryptocurrencies:

- **Nimiq (NIM)** - Native support with Luna precision
- **Bitcoin (BTC)** - Satoshi precision
- **Ethereum (ETH)** - Wei precision
- **USDC** - Standard token precision
- **USDT** - Standard token precision

## Link Format Standards

The module follows established standards for cryptocurrency request links:

- **BIP 21** - Bitcoin URI scheme
- **EIP 681** - Ethereum URI scheme
- **Nimiq URI** - Nimiq-specific URI scheme

## Use Cases

- **Payment requests** - Generate payment links for invoices
- **QR code generation** - Create QR codes for mobile payments
- **Deep linking** - Navigate to wallet apps with pre-filled data
- **E-commerce integration** - Support multiple payment methods
- **Invoice systems** - Generate payment links for billing

## Related Modules

- [ValidationUtils](./validation-utils) - Validate addresses before creating links
- [FormattableNumber](./formattable-number) - Format amounts in links
- [CurrencyInfo](./currency-info) - Get currency information

## Next Steps

- Learn about [ValidationUtils](./validation-utils) for address validation
- Explore [FormattableNumber](./formattable-number) for number formatting
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
