# ValidationUtils

A utility class that provides methods to validate, normalize, and check the format of Nimiq addresses and hashes.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Validate if an address is valid
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const isValid = ValidationUtils.isValidAddress(address)
console.log(isValid) // Output: true or false

// Normalize an address
const normalizedAddress = ValidationUtils.normalizeAddress(address)
console.log(normalizedAddress) // Output: 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'

// Check if an address is user-friendly
try {
  ValidationUtils.isUserFriendlyAddress(address)
  console.log('The address is user-friendly.')
}
catch (e) {
  console.error(e.message) // Output: error message if the address is invalid
}
```

## API Reference

### Methods

#### `isValidAddress(address: string): boolean`

Validates whether a given string is a valid Nimiq address.

**Parameters:**
- `address` - The address string to validate

**Returns:**
- `boolean` - `true` if the address is valid, `false` otherwise

**Example:**
```typescript
const validAddress = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const invalidAddress = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ9'

console.log(ValidationUtils.isValidAddress(validAddress)) // Output: true
console.log(ValidationUtils.isValidAddress(invalidAddress)) // Output: false
```

#### `normalizeAddress(address: string): string`

Normalizes an address to a consistent format with proper spacing and capitalization.

**Parameters:**
- `address` - The address string to normalize

**Returns:**
- `string` - The normalized address

**Example:**
```typescript
const address = 'nq48 8ckh ba24 2vr3 n249 n8mn j5xx 74db 5xj8'
const normalized = ValidationUtils.normalizeAddress(address)
console.log(normalized) // Output: 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
```

#### `isUserFriendlyAddress(address: string): void`

Checks if an address is in user-friendly format and throws an error if not.

**Parameters:**
- `address` - The address string to check

**Throws:**
- `Error` - If the address is not in user-friendly format

**Example:**
```typescript
try {
  ValidationUtils.isUserFriendlyAddress('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8')
  console.log('Address is user-friendly')
}
catch (error) {
  console.error('Invalid address format:', error.message)
}
```

## Address Formats

Nimiq supports two address formats:

### User-Friendly Format
- Uses Base32 encoding with checksum
- Includes spaces for readability
- Example: `NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8`

### Hex Format
- Raw hexadecimal representation
- No spaces or special characters
- Example: `ad25610feb43d75307763b49da24804786c10808`

## Validation Features

- **Checksum validation** - Ensures address integrity
- **Format detection** - Automatically handles both user-friendly and hex formats
- **Case normalization** - Converts to standard uppercase format
- **Space handling** - Adds or removes spaces as needed

## Use Cases

- **Form validation** - Validate user input in wallet applications
- **Address parsing** - Normalize addresses from various sources
- **Data integrity** - Ensure addresses are valid before processing
- **User experience** - Provide clear feedback on address format

## Related Modules

- [AddressBook](./address-book) - Look up labels for validated addresses
- [Request Link Encoding](./request-link-encoding) - Create payment links with validated addresses
- [FormattableNumber](./formattable-number) - Format amounts for transactions

## Next Steps

- Learn about [AddressBook](./address-book) for address labeling
- Explore [Request Link Encoding](./request-link-encoding) for payment links
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
