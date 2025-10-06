# Validation Utils

Utility class for validating, normalizing, and checking Nimiq addresses and hashes.

## Usage

### Validate addresses

```typescript
import { ValidationUtils } from '@nimiq/utils/validation-utils'

// Validate addresses
const address1 = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const address2 = 'invalid-address'
console.log(ValidationUtils.isValidAddress(address1)) // true
console.log(ValidationUtils.isValidAddress(address2)) // false
```

### Normalize formatting

```typescript
// Normalize formatting
const lowercase = 'nq48 8ckh ba24 2vr3 n249 n8mn j5xx 74db 5xj8'
const normalized = ValidationUtils.normalizeAddress(lowercase)
console.log(normalized) // 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
```

### Check format validation

```typescript
// Check format (throws if invalid)
try {
  ValidationUtils.isUserFriendlyAddress(address1)
  console.log('Valid user-friendly format')
}
catch (error) {
  console.error('Invalid format:', error.message)
}
```

## API

| Method | Description |
| --- | --- |
| `isValidAddress(address: string)` | Returns true if address is valid |
| `normalizeAddress(address: string)` | Returns normalized address with proper formatting |
| `isUserFriendlyAddress(address: string)` | Throws error if address is not user-friendly format |
