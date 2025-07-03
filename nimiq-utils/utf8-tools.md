# Utf8Tools

A utility class for handling UTF-8 string and byte array conversions, validation, and truncation.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { Utf8Tools } from '@nimiq/utils/utf8-tools'

// Convert a string to a UTF-8 byte array
const utf8Bytes = Utf8Tools.stringToUtf8ByteArray('Hello, world!')
console.log(utf8Bytes) // Output: Uint8Array of UTF-8 bytes

// Convert a UTF-8 byte array back to a string
const utf8String = Utf8Tools.utf8ByteArrayToString(utf8Bytes)
console.log(utf8String) // Output: 'Hello, world!'

// Validate if a byte array is valid UTF-8
const isValid = Utf8Tools.isValidUtf8(utf8Bytes)
console.log(isValid) // Output: true

// Truncate a string to a specific byte length with an ellipsis
const { result, didTruncate } = Utf8Tools.truncateToUtf8ByteLength('This is a long string.', 10)
console.log(result) // Output: 'This is…'
console.log(didTruncate) // Output: true
```

## API Reference

### Methods

#### `stringToUtf8ByteArray(str: string): Uint8Array`

Converts a string to UTF-8 byte array.

#### `utf8ByteArrayToString(bytes: Uint8Array): string`

Converts UTF-8 byte array to string.

#### `isValidUtf8(bytes: Uint8Array): boolean`

Validates if byte array is valid UTF-8.

#### `truncateToUtf8ByteLength(str: string, maxBytes: number): { result: string, didTruncate: boolean }`

Truncates string to specified byte length.

## Use Cases

- **Data encoding** - Convert strings for network transmission
- **Validation** - Ensure UTF-8 compliance
- **Text processing** - Handle international characters
- **Storage optimization** - Manage text data efficiently

## Related Modules

- [ValidationUtils](./validation-utils) - Validate text data
- [RateLimitScheduler](./rate-limit-scheduler) - Batch process text data

## Next Steps

- Learn about [ValidationUtils](./validation-utils) for data validation
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
