# AddressBook

Provides a mapping of addresses to their corresponding labels, including mainnet pools, services, exchanges, and testnet resources.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { AddressBook } from '@nimiq/utils/address-book'

// Retrieve a label for a known address
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const label = AddressBook.getLabel(address)
console.log(label) // Output: 'Skypool'
```

## API Reference

### Methods

#### `getLabel(address: string): string | null`

Returns the human-readable label for a given Nimiq address if it exists in the address book.

**Parameters:**
- `address` - The Nimiq address to look up (can be user-friendly or hex format)

**Returns:**
- `string` - The label associated with the address
- `null` - If no label is found for the address

**Example:**
```typescript
const poolAddress = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const poolLabel = AddressBook.getLabel(poolAddress)
console.log(poolLabel) // Output: 'Skypool'

const unknownAddress = 'NQ01 2345 6789 0123 4567 8901 2345 6789 0123'
const unknownLabel = AddressBook.getLabel(unknownAddress)
console.log(unknownLabel) // Output: null
```

## Supported Addresses

The AddressBook includes labels for:

- **Mainnet pools** - Major staking pools and validators
- **Services** - Nimiq services and official addresses
- **Exchanges** - Cryptocurrency exchanges that support Nimiq
- **Testnet resources** - Known addresses on the testnet

## Use Cases

- **Wallet applications** - Display friendly names for known addresses
- **Block explorers** - Show recognizable labels for common addresses
- **Analytics tools** - Categorize transactions by known entities
- **User interfaces** - Improve user experience with familiar names

## Related Modules

- [ValidationUtils](./validation-utils) - Validate addresses before looking them up
- [FormattableNumber](./formattable-number) - Format amounts associated with addresses
- [CurrencyInfo](./currency-info) - Display currency information for transactions

## Next Steps

- Learn about [ValidationUtils](./validation-utils) for address validation
- Explore [Request Link Encoding](./request-link-encoding) for payment links
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
