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
        createRequestLink(uri)
      </code>
    </td>
    
    <td>
      Creates request link from URI string
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        parseRequestLink(link)
      </code>
    </td>
    
    <td>
      Parses request link into components
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        Currency.NIMIQ/BITCOIN/ETHEREUM
      </code>
    </td>
    
    <td>
      Supported currency constants
    </td>
  </tr>
</tbody>
</table>
