# Browser Detection

Utility for detecting browser details including type, version, private mode, and device information.

## Usage

### Detect browser type

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

// Detect browser type
if (BrowserDetection.isChrome()) {
  console.log('Chrome browser detected')
}
```

### Detect device type

```typescript
// Detect device type
if (BrowserDetection.isMobile()) {
  console.log('Mobile device')
}
```

### Get detailed info

```typescript
// Get detailed info
const info = BrowserDetection.getBrowserInfo()
console.log(`${info.name} version ${info.version}`)
```

### Check private mode

```typescript
// Check private mode (async)
const isPrivate = await BrowserDetection.isPrivateMode()
if (isPrivate) {
  console.log('Private browsing detected')
}
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
        isChrome()
      </code>
    </td>
    
    <td>
      Returns true if Chrome browser
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isFirefox()
      </code>
    </td>
    
    <td>
      Returns true if Firefox browser
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isSafari()
      </code>
    </td>
    
    <td>
      Returns true if Safari browser
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isEdge()
      </code>
    </td>
    
    <td>
      Returns true if Edge browser
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isMobile()
      </code>
    </td>
    
    <td>
      Returns true if mobile device
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isIOS()
      </code>
    </td>
    
    <td>
      Returns true if iOS device
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isPrivateMode()
      </code>
    </td>
    
    <td>
      Returns promise that resolves to true if private mode
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getBrowserInfo()
      </code>
    </td>
    
    <td>
      Returns object with browser name and version
    </td>
  </tr>
</tbody>
</table>
