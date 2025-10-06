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

| Method | Description |
| --- | --- |
| `getCookie(name: string)` | Gets cookie value by name, returns null if not found |
| `setCookie(name, value, options?)` | Sets cookie with optional expiration and path |
| `unsetCookie(name: string)` | Removes cookie by setting expiration to past date |
