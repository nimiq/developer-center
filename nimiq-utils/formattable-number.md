# FormattableNumber

Formats and converts numbers without precision loss. It supports a variety of input types and allows operations like rounding, moving the decimal separator, and custom formatting options.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils/formattable-number'

// Format a number to a string
const number = new FormattableNumber('12345.6789')
const formatted = number.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ','
})
console.log(formatted) // Output: '12,345.68'

// Convert a number to a non-scientific string
const nonScientific = toNonScientificNumberString('1.23e4')
console.log(nonScientific) // Output: '12300'

// Round a number
const roundedNumber = new FormattableNumber(123.45678)
roundedNumber.round(2)
console.log(roundedNumber.toString()) // Output: '123.46'

// Check equality
const num1 = new FormattableNumber('123.45')
const num2 = new FormattableNumber(123.45)
console.log(num1.equals(num2)) // Output: true
```

## API Reference

### Constructor

#### `new FormattableNumber(value: string | number | FormattableNumber)`

Creates a new FormattableNumber instance.

**Parameters:**
- `value` - The initial value (string, number, or another FormattableNumber)

**Example:**
```typescript
const num1 = new FormattableNumber('123.456')
const num2 = new FormattableNumber(789.012)
const num3 = new FormattableNumber(num1)
```

### Methods

#### `toString(options?: FormatOptions): string`

Converts the number to a formatted string.

**Parameters:**
- `options` - Optional formatting configuration

**Returns:**
- `string` - The formatted number string

**Example:**
```typescript
const number = new FormattableNumber('12345.6789')

// Default formatting
console.log(number.toString()) // Output: '12345.6789'

// Custom formatting
console.log(number.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ','
})) // Output: '12,345.68'
```

#### `round(decimals: number): FormattableNumber`

Rounds the number to the specified number of decimal places.

**Parameters:**
- `decimals` - Number of decimal places to round to

**Returns:**
- `FormattableNumber` - The same instance for method chaining

**Example:**
```typescript
const number = new FormattableNumber(123.456789)
number.round(2)
console.log(number.toString()) // Output: '123.46'
```

#### `equals(other: FormattableNumber): boolean`

Checks if this number equals another FormattableNumber.

**Parameters:**
- `other` - The FormattableNumber to compare with

**Returns:**
- `boolean` - `true` if equal, `false` otherwise

**Example:**
```typescript
const num1 = new FormattableNumber('123.45')
const num2 = new FormattableNumber(123.45)
const num3 = new FormattableNumber('123.46')

console.log(num1.equals(num2)) // Output: true
console.log(num1.equals(num3)) // Output: false
```

#### `moveDecimalSeparator(places: number): FormattableNumber`

Moves the decimal separator left or right by the specified number of places.

**Parameters:**
- `places` - Number of places to move (positive for right, negative for left)

**Returns:**
- `FormattableNumber` - The same instance for method chaining

**Example:**
```typescript
const number = new FormattableNumber('123.45')

// Move decimal right (multiply by 100)
number.moveDecimalSeparator(2)
console.log(number.toString()) // Output: '12345'

// Move decimal left (divide by 1000)
const number2 = new FormattableNumber('12345')
number2.moveDecimalSeparator(-3)
console.log(number2.toString()) // Output: '12.345'
```

### Static Functions

#### `toNonScientificNumberString(value: string | number): string`

Converts a number to a non-scientific notation string.

**Parameters:**
- `value` - The number to convert

**Returns:**
- `string` - The number in non-scientific notation

**Example:**
```typescript
console.log(toNonScientificNumberString('1.23e4')) // Output: '12300'
console.log(toNonScientificNumberString('5.67e-3')) // Output: '0.00567'
console.log(toNonScientificNumberString(123.45)) // Output: '123.45'
```

### Types

#### `FormatOptions`

```typescript
interface FormatOptions {
  maxDecimals?: number // Maximum number of decimal places
  useGrouping?: boolean // Whether to use grouping separators
  groupSeparator?: string // Character to use for grouping (default: ',')
  decimalSeparator?: string // Character to use for decimal point (default: '.')
}
```

## Examples

### Currency Formatting

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number'

const amount = new FormattableNumber('1234567.89')

// US Dollar format
const usd = amount.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: ',',
  decimalSeparator: '.'
})
console.log(`$${usd}`) // Output: '$1,234,567.89'

// European format
const eur = amount.toString({
  maxDecimals: 2,
  useGrouping: true,
  groupSeparator: '.',
  decimalSeparator: ','
})
console.log(`€${eur}`) // Output: '€1.234.567,89'
```

### Crypto Amount Formatting

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number'

// Convert Luna to NIM (1 NIM = 100,000 Luna)
const lunaAmount = new FormattableNumber('12345678900') // Luna
const nimAmount = new FormattableNumber(lunaAmount)
nimAmount.moveDecimalSeparator(-5) // Convert to NIM

console.log(`${nimAmount.toString({
  maxDecimals: 5,
  useGrouping: true
})} NIM`) // Output: '123,456.78900 NIM'
```

### Precision Calculations

```typescript
import { FormattableNumber } from '@nimiq/utils/formattable-number'

// Avoid floating point precision issues
const a = new FormattableNumber('0.1')
const b = new FormattableNumber('0.2')

// This would be imprecise with regular numbers
console.log(0.1 + 0.2) // Output: 0.30000000000000004

// FormattableNumber maintains precision
const sum = new FormattableNumber('0.1')
// Note: Addition/subtraction would need to be implemented
// This is just demonstrating the precision handling
```

## Use Cases

- **Financial calculations** - Avoid floating point precision issues
- **Currency display** - Format amounts with proper grouping and decimals
- **Crypto amounts** - Handle large numbers and decimal conversions
- **User interfaces** - Display numbers in user-friendly formats
- **Data processing** - Maintain precision in calculations

## Related Modules

- [CurrencyInfo](./currency-info) - Get currency formatting information
- [Staking Rewards Calculator](./staking-rewards-calculator) - Format reward amounts
- [Supply Calculator](./supply-calculator) - Format supply numbers

## Next Steps

- Learn about [CurrencyInfo](./currency-info) for currency-specific formatting
- Explore [Staking Rewards Calculator](./staking-rewards-calculator) for rewards
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
