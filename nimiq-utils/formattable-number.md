# Formattable Number

Formats and converts numbers without precision loss with customizable formatting options.

## Usage

### Basic formatting

```typescript
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils/formattable-number'

// Basic formatting
const number = new FormattableNumber('12345.6789')
const formatted = number.toString({ maxDecimals: 2, useGrouping: true })
console.log(formatted) // '12,345.68'
```

### Math operations

```typescript
// Math operations
const a = new FormattableNumber('100.5')
const b = new FormattableNumber('25.25')
const sum = a.plus(b)
console.log(sum.toString()) // '125.75'
```

### Scientific notation conversion

```typescript
// Scientific notation conversion
const scientific = toNonScientificNumberString('1.23e4')
console.log(scientific) // '12300'
```

### Rounding

```typescript
// Rounding
const price = new FormattableNumber('123.456789')
price.round(2)
console.log(price.toString()) // '123.46'
```

## API

| Method | Description |
| --- | --- |
| `new FormattableNumber(value)` | Creates instance from number, string, or BigInt |
| `toString(options?)` | Formats number with optional decimals, grouping, separators |
| `round(decimals)` | Rounds to specified decimal places |
| `equals(other)` | Compares equality with another FormattableNumber |
| `plus(other)` | Adds another number and returns new instance |
| `minus(other)` | Subtracts another number and returns new instance |
| `multipliedBy(other)` | Multiplies by another number and returns new instance |
| `dividedBy(other)` | Divides by another number and returns new instance |
| `toNonScientificNumberString(num)` | Static method to convert scientific notation to regular string |
