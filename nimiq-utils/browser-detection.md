# BrowserDetection

A utility module for detecting browser details, including browser type, version, whether it's running in private mode, and if it's mobile or iOS.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

// Get browser info
const browserInfo = BrowserDetection.getBrowserInfo()
console.log(browserInfo)
// Output:
// {
//   browser: 'chrome',
//   version: { versionString: '70.0.3538.77', major: 70, minor: 0, build: 3538, patch: 77 },
//   isMobile: false
// }

// Check if the browser is Chrome
const isChrome = BrowserDetection.isChrome()
console.log(isChrome) // Output: true or false

// Detect private mode
BrowserDetection.isPrivateMode().then((isPrivate) => {
  console.log(isPrivate) // Output: true or false
})
```

## API Reference

### Methods

#### `getBrowserInfo(): BrowserInfo`

Returns comprehensive information about the current browser.

**Returns:**
- `BrowserInfo` - Object containing browser details

#### `isChrome(): boolean`

Checks if the current browser is Chrome.

**Returns:**
- `boolean` - `true` if Chrome, `false` otherwise

#### `isFirefox(): boolean`

Checks if the current browser is Firefox.

**Returns:**
- `boolean` - `true` if Firefox, `false` otherwise

#### `isSafari(): boolean`

Checks if the current browser is Safari.

**Returns:**
- `boolean` - `true` if Safari, `false` otherwise

#### `isEdge(): boolean`

Checks if the current browser is Microsoft Edge.

**Returns:**
- `boolean` - `true` if Edge, `false` otherwise

#### `isOpera(): boolean`

Checks if the current browser is Opera.

**Returns:**
- `boolean` - `true` if Opera, `false` otherwise

#### `isMobile(): boolean`

Checks if the browser is running on a mobile device.

**Returns:**
- `boolean` - `true` if mobile, `false` otherwise

#### `isIOS(): boolean`

Checks if the browser is running on iOS.

**Returns:**
- `boolean` - `true` if iOS, `false` otherwise

#### `isPrivateMode(): Promise<boolean>`

Detects if the browser is running in private/incognito mode.

**Returns:**
- `Promise<boolean>` - Resolves to `true` if private mode, `false` otherwise

### Types

#### `BrowserInfo`

```typescript
interface BrowserInfo {
  browser: string // Browser name (e.g., 'chrome', 'firefox')
  version: BrowserVersion // Version information
  isMobile: boolean // Whether running on mobile
}
```

#### `BrowserVersion`

```typescript
interface BrowserVersion {
  versionString: string // Full version string
  major: number // Major version number
  minor: number // Minor version number
  build: number // Build number
  patch: number // Patch number
}
```

## Examples

### Feature Detection

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

function checkBrowserCompatibility() {
  const browserInfo = BrowserDetection.getBrowserInfo()

  // Check minimum version requirements
  const minVersions = {
    chrome: 60,
    firefox: 55,
    safari: 12,
    edge: 79
  }

  const minVersion = minVersions[browserInfo.browser]
  if (minVersion && browserInfo.version.major < minVersion) {
    console.warn(`Your browser version is outdated. Minimum ${browserInfo.browser} version required: ${minVersion}`)
    return false
  }

  console.log('Browser is compatible!')
  return true
}

checkBrowserCompatibility()
```

### Platform-Specific Logic

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

function initializeApp() {
  if (BrowserDetection.isMobile()) {
    console.log('Initializing mobile interface')
    // Load mobile-specific components
  }
  else {
    console.log('Initializing desktop interface')
    // Load desktop-specific components
  }

  if (BrowserDetection.isIOS()) {
    console.log('Applying iOS-specific optimizations')
    // Handle iOS-specific behavior
  }
}

initializeApp()
```

### Browser-Specific Optimizations

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

function applyBrowserOptimizations() {
  if (BrowserDetection.isChrome()) {
    // Chrome-specific optimizations
    console.log('Applying Chrome optimizations')
    // Enable hardware acceleration features
  }
  else if (BrowserDetection.isFirefox()) {
    // Firefox-specific optimizations
    console.log('Applying Firefox optimizations')
    // Use Firefox-specific APIs
  }
  else if (BrowserDetection.isSafari()) {
    // Safari-specific workarounds
    console.log('Applying Safari workarounds')
    // Handle Safari quirks
  }
}

applyBrowserOptimizations()
```

### Private Mode Detection

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

async function handlePrivateMode() {
  const isPrivate = await BrowserDetection.isPrivateMode()

  if (isPrivate) {
    console.log('Private mode detected')
    // Adjust functionality for private browsing
    // Some features might be limited
    showPrivateModeNotice()
  }
  else {
    console.log('Normal browsing mode')
    // Full functionality available
    enableAllFeatures()
  }
}

function showPrivateModeNotice() {
  console.log('Some features may be limited in private browsing mode')
}

function enableAllFeatures() {
  console.log('All features enabled')
}

handlePrivateMode()
```

### Comprehensive Browser Analysis

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

async function analyzeBrowserEnvironment() {
  const browserInfo = BrowserDetection.getBrowserInfo()
  const isPrivate = await BrowserDetection.isPrivateMode()

  const analysis = {
    browser: browserInfo.browser,
    version: browserInfo.version.versionString,
    majorVersion: browserInfo.version.major,
    isMobile: browserInfo.isMobile,
    isIOS: BrowserDetection.isIOS(),
    isPrivateMode: isPrivate,
    userAgent: navigator.userAgent
  }

  console.log('Browser Environment Analysis:', analysis)

  // Send analytics (respecting privacy)
  if (!isPrivate) {
    sendBrowserAnalytics(analysis)
  }

  return analysis
}

function sendBrowserAnalytics(data: any) {
  // Send anonymized browser data for analytics
  console.log('Sending browser analytics:', data)
}

analyzeBrowserEnvironment()
```

### Conditional Feature Loading

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

async function loadFeaturesBasedOnBrowser() {
  const browserInfo = BrowserDetection.getBrowserInfo()
  const features = []

  // Load features based on browser capabilities
  if (BrowserDetection.isChrome() && browserInfo.version.major >= 80) {
    features.push('webGL2')
    features.push('webWorkers')
  }

  if (BrowserDetection.isFirefox() && browserInfo.version.major >= 70) {
    features.push('webAssembly')
  }

  if (BrowserDetection.isSafari()) {
    // Safari has some limitations
    features.push('basicWebGL')
  }

  if (!BrowserDetection.isMobile()) {
    features.push('fileSystemAccess')
    features.push('fullscreen')
  }

  // Check for private mode limitations
  const isPrivate = await BrowserDetection.isPrivateMode()
  if (!isPrivate) {
    features.push('localStorage')
    features.push('indexedDB')
  }

  console.log('Available features:', features)
  return features
}

loadFeaturesBasedOnBrowser()
```

### Error Handling and Fallbacks

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

function getBrowserInfoSafely() {
  try {
    return BrowserDetection.getBrowserInfo()
  }
  catch (error) {
    console.warn('Browser detection failed:', error)

    // Fallback browser info
    return {
      browser: 'unknown',
      version: {
        versionString: 'unknown',
        major: 0,
        minor: 0,
        build: 0,
        patch: 0
      },
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
  }
}

async function isPrivateModeSafely() {
  try {
    return await BrowserDetection.isPrivateMode()
  }
  catch (error) {
    console.warn('Private mode detection failed:', error)
    return false // Assume not private mode if detection fails
  }
}
```

### User Agent Analysis

```typescript
import BrowserDetection from '@nimiq/utils/browser-detection'

function analyzeUserAgent() {
  const browserInfo = BrowserDetection.getBrowserInfo()
  const userAgent = navigator.userAgent

  const analysis = {
    detectedBrowser: browserInfo.browser,
    detectedVersion: browserInfo.version.versionString,
    isMobileDetected: browserInfo.isMobile,
    isIOSDetected: BrowserDetection.isIOS(),
    rawUserAgent: userAgent,

    // Additional checks
    hasTouch: 'ontouchstart' in window,
    screenSize: {
      width: screen.width,
      height: screen.height
    },
    viewportSize: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  console.log('User Agent Analysis:', analysis)
  return analysis
}

analyzeUserAgent()
```

## Detection Methods

The module uses various techniques for browser detection:

### User Agent Parsing
- Analyzes the `navigator.userAgent` string
- Identifies browser type and version
- Detects mobile devices and operating systems

### Feature Detection
- Tests for browser-specific APIs and behaviors
- More reliable than user agent strings
- Used for private mode detection

### Version Extraction
- Parses version numbers from user agent
- Provides major, minor, build, and patch numbers
- Handles different version formats across browsers

## Use Cases

- **Feature polyfilling** - Load polyfills based on browser capabilities
- **Performance optimization** - Apply browser-specific optimizations
- **Bug workarounds** - Handle browser-specific issues
- **Analytics** - Track browser usage patterns
- **Progressive enhancement** - Enhance features based on browser support
- **Privacy handling** - Adjust behavior for private browsing

## Related Modules

- [RateLimitScheduler](./rate-limit-scheduler) - May need different limits per browser
- [Clipboard](./clipboard) - Browser-specific clipboard handling
- [Cookie Utilities](./cookie-utilities) - Cookie support varies by browser

## Next Steps

- Learn about [Clipboard](./clipboard) for browser-specific clipboard operations
- Explore [Cookie Utilities](./cookie-utilities) for browser cookie management
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
