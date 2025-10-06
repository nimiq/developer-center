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

| Method | Description |
| --- | --- |
| `stringToUtf8ByteArray(str)` | Converts string to UTF-8 byte array |
| `utf8ByteArrayToString(bytes)` | Converts UTF-8 byte array to string |
| `isValidUtf8(bytes)` | Checks if byte array is valid UTF-8 |
| `truncateToUtf8ByteLength(str, maxBytes)` | Truncates string to fit in specified byte length |
