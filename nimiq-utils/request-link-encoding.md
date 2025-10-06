# Request Link Encoding

Creates and parses request links for multiple cryptocurrencies including Nimiq, Bitcoin, and Ethereum.

## Usage

### Basic usage

```typescript
import { createRequestLink, parseRequestLink } from '@nimiq/utils/request-link-encoding'

const link = createRequestLink('nimiq:NQ48...5XJ8?amount=100&message=Payment')
const parsed = parseRequestLink(link)
console.log(parsed.recipient) // 'NQ48...5XJ8'
```

## API

| Method | Description |
| --- | --- |
| `createRequestLink(uri)` | Creates request link from URI string |
| `parseRequestLink(link)` | Parses request link into components |
| `Currency.NIMIQ/BITCOIN/ETHEREUM` | Supported currency constants |
