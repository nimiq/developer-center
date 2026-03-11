# Cookie Utilities

Utility functions for managing cookies including getting, setting, and unsetting.

## Usage

### Basic cookie operations

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

setCookie('theme', 'dark', { expires: 7 })
const theme = getCookie('theme')
console.log(theme) // 'dark'
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
        getCookie(name: string)
      </code>
    </td>
    
    <td>
      Gets cookie value by name, returns null if not found
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        setCookie(name, value, options?)
      </code>
    </td>
    
    <td>
      Sets cookie with optional expiration and path
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        unsetCookie(name: string)
      </code>
    </td>
    
    <td>
      Removes cookie by setting expiration to past date
    </td>
  </tr>
</tbody>
</table>
