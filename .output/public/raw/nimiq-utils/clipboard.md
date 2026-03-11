# Clipboard

Utility for copying text to the clipboard with mobile compatibility.

## Usage

### Basic copy

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

// Basic copy
const success = Clipboard.copy('Hello, World!')
console.log(success) // true if successful
```

### Copy address with feedback

```typescript
// Copy address with feedback
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
if (Clipboard.copy(address)) {
  console.log('Address copied to clipboard!')
}
else {
  console.log('Copy failed - try again')
}
```

### Copy in click handler

```typescript
// Copy in click handler
button.addEventListener('click', () => {
  const text = button.dataset.copyText
  Clipboard.copy(text)
})
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
        copy(text: string)
      </code>
    </td>
    
    <td>
      Copies text to clipboard, returns true if successful
    </td>
  </tr>
</tbody>
</table>
