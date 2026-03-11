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
        new FormattableNumber(value)
      </code>
    </td>
    
    <td>
      Creates instance from number, string, or BigInt
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        toString(options?)
      </code>
    </td>
    
    <td>
      Formats number with optional decimals, grouping, separators
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        round(decimals)
      </code>
    </td>
    
    <td>
      Rounds to specified decimal places
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        equals(other)
      </code>
    </td>
    
    <td>
      Compares equality with another FormattableNumber
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        plus(other)
      </code>
    </td>
    
    <td>
      Adds another number and returns new instance
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        minus(other)
      </code>
    </td>
    
    <td>
      Subtracts another number and returns new instance
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        multipliedBy(other)
      </code>
    </td>
    
    <td>
      Multiplies by another number and returns new instance
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dividedBy(other)
      </code>
    </td>
    
    <td>
      Divides by another number and returns new instance
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        toNonScientificNumberString(num)
      </code>
    </td>
    
    <td>
      Static method to convert scientific notation to regular string
    </td>
  </tr>
</tbody>
</table>
