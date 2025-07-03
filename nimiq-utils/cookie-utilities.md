# Cookie Utilities

Provides utility functions for managing cookies, including getting, setting, and unsetting cookies.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

// Get a cookie
const cookieValue = getCookie('session')
console.log(cookieValue) // Output: The value or null if not found

// Set a cookie
const cookieString = setCookie('session', 'abc123', {
  path: '/',
  maxAge: 3600,
  secure: true
})
console.log(cookieString) // Output: 'session=abc123;path=/;max-age=3600;secure'

// Unset a cookie
unsetCookie('session')
console.log(getCookie('session')) // Output: null
```

## API Reference

### Functions

#### `getCookie(name: string): string | null`

Retrieves the value of a cookie by name.

**Parameters:**
- `name` - The name of the cookie to retrieve

**Returns:**
- `string` - The cookie value if found
- `null` - If the cookie doesn't exist

#### `setCookie(name: string, value: string, options?: CookieOptions): string`

Sets a cookie with the specified name, value, and options.

**Parameters:**
- `name` - The name of the cookie
- `value` - The value to set
- `options` - Optional cookie configuration

**Returns:**
- `string` - The formatted cookie string

#### `unsetCookie(name: string, options?: CookieOptions): void`

Removes a cookie by setting its expiration date to the past.

**Parameters:**
- `name` - The name of the cookie to remove
- `options` - Optional cookie configuration (path and domain should match the original cookie)

### Types

#### `CookieOptions`

```typescript
interface CookieOptions {
  path?: string // Cookie path (default: current path)
  domain?: string // Cookie domain
  maxAge?: number // Maximum age in seconds
  expires?: Date // Expiration date
  secure?: boolean // HTTPS only
  httpOnly?: boolean // HTTP only (not accessible via JavaScript)
  sameSite?: 'Strict' | 'Lax' | 'None' // SameSite attribute
}
```

## Examples

### Basic Cookie Operations

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

// Set a simple cookie
setCookie('username', 'john_doe')

// Get the cookie value
const username = getCookie('username')
console.log(username) // Output: 'john_doe'

// Remove the cookie
unsetCookie('username')
console.log(getCookie('username')) // Output: null
```

### Session Management

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

class SessionManager {
  private sessionKey = 'user_session'

  setSession(sessionId: string, rememberMe: boolean = false) {
    const options: CookieOptions = {
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    }

    if (rememberMe) {
      // Remember for 30 days
      options.maxAge = 30 * 24 * 60 * 60
    }
    else {
      // Session cookie (expires when browser closes)
      // No maxAge or expires means session cookie
    }

    setCookie(this.sessionKey, sessionId, options)
  }

  getSession(): string | null {
    return getCookie(this.sessionKey)
  }

  clearSession() {
    unsetCookie(this.sessionKey, { path: '/' })
  }

  isLoggedIn(): boolean {
    return this.getSession() !== null
  }
}

// Usage
const session = new SessionManager()
session.setSession('abc123', true) // Remember me
console.log(session.isLoggedIn()) // Output: true
```

### User Preferences

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

interface UserPreferences {
  theme: 'light' | 'dark'
  language: string
  currency: string
  notifications: boolean
}

class PreferencesManager {
  private prefsKey = 'user_preferences'

  setPreferences(prefs: UserPreferences) {
    const prefsString = JSON.stringify(prefs)
    setCookie(this.prefsKey, prefsString, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1 year
      secure: true,
      sameSite: 'Lax'
    })
  }

  getPreferences(): UserPreferences | null {
    const prefsString = getCookie(this.prefsKey)
    if (!prefsString)
      return null

    try {
      return JSON.parse(prefsString)
    }
    catch (error) {
      console.error('Failed to parse preferences:', error)
      return null
    }
  }

  updatePreference<K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) {
    const currentPrefs = this.getPreferences() || {
      theme: 'light',
      language: 'en',
      currency: 'usd',
      notifications: true
    }

    currentPrefs[key] = value
    this.setPreferences(currentPrefs)
  }

  clearPreferences() {
    unsetCookie(this.prefsKey, { path: '/' })
  }
}

// Usage
const prefs = new PreferencesManager()
prefs.updatePreference('theme', 'dark')
prefs.updatePreference('currency', 'eur')

const userPrefs = prefs.getPreferences()
console.log(userPrefs?.theme) // Output: 'dark'
```

### Cookie Consent Management

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

class CookieConsent {
  private consentKey = 'cookie_consent'
  private analyticsKey = 'analytics_consent'
  private marketingKey = 'marketing_consent'

  setConsent(analytics: boolean, marketing: boolean) {
    const consentData = {
      analytics,
      marketing,
      timestamp: Date.now(),
      version: '1.0'
    }

    setCookie(this.consentKey, JSON.stringify(consentData), {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1 year
      secure: true,
      sameSite: 'Lax'
    })

    // Set individual consent cookies for easy checking
    setCookie(this.analyticsKey, analytics.toString(), {
      path: '/',
      maxAge: 365 * 24 * 60 * 60
    })

    setCookie(this.marketingKey, marketing.toString(), {
      path: '/',
      maxAge: 365 * 24 * 60 * 60
    })
  }

  hasConsent(): boolean {
    return getCookie(this.consentKey) !== null
  }

  hasAnalyticsConsent(): boolean {
    return getCookie(this.analyticsKey) === 'true'
  }

  hasMarketingConsent(): boolean {
    return getCookie(this.marketingKey) === 'true'
  }

  getConsentData() {
    const consentString = getCookie(this.consentKey)
    if (!consentString)
      return null

    try {
      return JSON.parse(consentString)
    }
    catch (error) {
      return null
    }
  }

  revokeConsent() {
    unsetCookie(this.consentKey, { path: '/' })
    unsetCookie(this.analyticsKey, { path: '/' })
    unsetCookie(this.marketingKey, { path: '/' })
  }
}

// Usage
const consent = new CookieConsent()
consent.setConsent(true, false) // Allow analytics, deny marketing

if (consent.hasAnalyticsConsent()) {
  // Initialize analytics
  console.log('Analytics enabled')
}
```

### Secure Cookie Helper

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

class SecureCookieManager {
  private isSecureContext(): boolean {
    return window.location.protocol === 'https:'
      || window.location.hostname === 'localhost'
  }

  setSecureCookie(name: string, value: string, options: CookieOptions = {}) {
    const secureOptions: CookieOptions = {
      ...options,
      secure: this.isSecureContext(),
      sameSite: 'Lax',
      path: options.path || '/'
    }

    return setCookie(name, value, secureOptions)
  }

  setHttpOnlyCookie(name: string, value: string, options: CookieOptions = {}) {
    const httpOnlyOptions: CookieOptions = {
      ...options,
      httpOnly: true,
      secure: this.isSecureContext(),
      sameSite: 'Strict'
    }

    return setCookie(name, value, httpOnlyOptions)
  }

  setSessionCookie(name: string, value: string) {
    return this.setSecureCookie(name, value)
  }

  setPersistentCookie(name: string, value: string, days: number = 30) {
    return this.setSecureCookie(name, value, {
      maxAge: days * 24 * 60 * 60
    })
  }

  clearCookie(name: string, path: string = '/') {
    unsetCookie(name, { path })
  }
}

// Usage
const secureManager = new SecureCookieManager()
secureManager.setSessionCookie('session_id', 'abc123')
secureManager.setPersistentCookie('remember_token', 'def456', 7) // 7 days
```

### Cookie Debugging

```typescript
import { getCookie, setCookie, unsetCookie } from '@nimiq/utils/cookie'

class CookieDebugger {
  getAllCookies(): Record<string, string> {
    const cookies: Record<string, string> = {}

    document.cookie.split(';').forEach((cookie) => {
      const [name, value] = cookie.trim().split('=')
      if (name && value) {
        cookies[name] = decodeURIComponent(value)
      }
    })

    return cookies
  }

  logAllCookies() {
    const cookies = this.getAllCookies()
    console.table(cookies)
  }

  cookieExists(name: string): boolean {
    return getCookie(name) !== null
  }

  getCookieSize(name: string): number {
    const value = getCookie(name)
    return value ? value.length : 0
  }

  getTotalCookieSize(): number {
    return document.cookie.length
  }

  clearAllCookies() {
    const cookies = this.getAllCookies()
    Object.keys(cookies).forEach((name) => {
      unsetCookie(name, { path: '/' })
      unsetCookie(name, { path: '/', domain: window.location.hostname })
    })
  }
}

// Usage
const cookieDebugger = new CookieDebugger()
cookieDebugger.logAllCookies()
console.log('Total cookie size:', cookieDebugger.getTotalCookieSize(), 'bytes')
```

## Cookie Limitations

### Size Limits
- **Per cookie**: ~4KB (4096 bytes)
- **Total per domain**: ~4KB for all cookies combined
- **Number limit**: ~300 cookies total, ~20 per domain

### Browser Differences
- Different browsers may have varying limits
- Some browsers are stricter about cookie security
- Mobile browsers may have additional restrictions

### Security Considerations
- Use `secure` flag for HTTPS-only cookies
- Use `httpOnly` flag to prevent JavaScript access
- Use `sameSite` to prevent CSRF attacks
- Be mindful of sensitive data in cookies

## Use Cases

- **Session management** - Store user session tokens
- **User preferences** - Save user settings and preferences
- **Shopping carts** - Persist cart items across sessions
- **Analytics tracking** - Store analytics and tracking data
- **Cookie consent** - Manage user consent preferences
- **Authentication tokens** - Store authentication state

## Related Modules

- [BrowserDetection](./browser-detection) - Detect cookie support
- [FormattableNumber](./formattable-number) - Format numeric cookie values
- [ValidationUtils](./validation-utils) - Validate cookie data

## Next Steps

- Learn about [BrowserDetection](./browser-detection) for browser-specific cookie handling
- Explore [ValidationUtils](./validation-utils) for data validation
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
