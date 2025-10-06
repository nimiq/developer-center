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

| Method | Description |
| --- | --- |
| `isChrome()` | Returns true if Chrome browser |
| `isFirefox()` | Returns true if Firefox browser |
| `isSafari()` | Returns true if Safari browser |
| `isEdge()` | Returns true if Edge browser |
| `isMobile()` | Returns true if mobile device |
| `isIOS()` | Returns true if iOS device |
| `isPrivateMode()` | Returns promise that resolves to true if private mode |
| `getBrowserInfo()` | Returns object with browser name and version |
