# Address Book

Provides mapping of addresses to their corresponding labels for mainnet pools, services, and exchanges.

## Usage

### Get label for known address

```typescript
import { AddressBook } from '@nimiq/utils/address-book'

// Get label for known address
const poolAddress = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const label = AddressBook.getLabel(poolAddress)
console.log(label) // 'Skypool'
```

### Handle unknown addresses

```typescript
// Unknown address returns null
const unknownAddress = 'NQ01 2345 6789 0123 4567 8901 2345 6789 0123'
const unknownLabel = AddressBook.getLabel(unknownAddress)
console.log(unknownLabel) // null
```

### Use in UI

```typescript
// Use in UI
function displayAddress(address) {
  const label = AddressBook.getLabel(address)
  return label ? `${label} (${address})` : address
}
```

## API

| Method | Description |
| --- | --- |
| `getLabel(address: string)` | Returns label for address, or null if not found |
