# Utf8 Tools

Utility class for UTF-8 string and byte array conversions, validation, and truncation.

## Usage

### Basic usage

```typescript
import { Utf8Tools } from '@nimiq/utils/utf8-tools'

const bytes = Utf8Tools.stringToUtf8ByteArray('Hello, 世界!')
const string = Utf8Tools.utf8ByteArrayToString(bytes)
console.log(string) // 'Hello, 世界!'
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
        stringToUtf8ByteArray(str)
      </code>
    </td>
    
    <td>
      Converts string to UTF-8 byte array
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        utf8ByteArrayToString(bytes)
      </code>
    </td>
    
    <td>
      Converts UTF-8 byte array to string
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isValidUtf8(bytes)
      </code>
    </td>
    
    <td>
      Checks if byte array is valid UTF-8
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        truncateToUtf8ByteLength(str, maxBytes)
      </code>
    </td>
    
    <td>
      Truncates string to fit in specified byte length
    </td>
  </tr>
</tbody>
</table>
