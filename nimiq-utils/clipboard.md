# Clipboard

Provides a utility method for copying text to the clipboard with mobile compatibility.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

// Copy text to clipboard
const text = 'Hello, World!'
const success = Clipboard.copy(text)
console.log(success) // Output: true if successful, false otherwise
```

## API Reference

### Methods

#### `copy(text: string): boolean`

Copies the specified text to the clipboard.

**Parameters:**
- `text` - The text string to copy to the clipboard

**Returns:**
- `boolean` - `true` if the copy operation was successful, `false` otherwise

**Example:**
```typescript
const address = 'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8'
const copied = Clipboard.copy(address)

if (copied) {
  console.log('Address copied to clipboard!')
}
else {
  console.log('Failed to copy address')
}
```

## Examples

### Basic Copy Operation

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

function copyToClipboard(text: string) {
  const success = Clipboard.copy(text)

  if (success) {
    showNotification('Copied to clipboard!')
  }
  else {
    showNotification('Copy failed. Please try again.')
  }

  return success
}

function showNotification(message: string) {
  console.log(message)
  // Show user notification
}

// Usage
copyToClipboard('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8')
```

### Copy with User Feedback

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

class CopyButton {
  private button: HTMLButtonElement
  private originalText: string

  constructor(buttonElement: HTMLButtonElement) {
    this.button = buttonElement
    this.originalText = this.button.textContent || 'Copy'
    this.setupClickHandler()
  }

  private setupClickHandler() {
    this.button.addEventListener('click', () => {
      const textToCopy = this.button.dataset.copyText || ''
      this.copyWithFeedback(textToCopy)
    })
  }

  private copyWithFeedback(text: string) {
    const success = Clipboard.copy(text)

    if (success) {
      this.button.textContent = 'Copied!'
      this.button.disabled = true

      // Reset after 2 seconds
      setTimeout(() => {
        this.button.textContent = this.originalText
        this.button.disabled = false
      }, 2000)
    }
    else {
      this.button.textContent = 'Failed'

      // Reset after 1 second
      setTimeout(() => {
        this.button.textContent = this.originalText
      }, 1000)
    }
  }
}

// Usage
const copyButton = document.querySelector('#copy-btn') as HTMLButtonElement
const copyButtonInstance = new CopyButton(copyButton)
```

### Fallback for Unsupported Browsers

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

function copyWithFallback(text: string): boolean {
  const success = Clipboard.copy(text)

  if (!success) {
    // Fallback: Select text for manual copying
    showManualCopyDialog(text)
    return false
  }

  return true
}

function showManualCopyDialog(text: string) {
  // Create a modal or dialog with selectable text
  const dialog = document.createElement('div')
  dialog.innerHTML = `
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: white; padding: 20px; border: 1px solid #ccc; z-index: 1000;">
      <p>Copy failed. Please manually copy the text below:</p>
      <textarea readonly style="width: 100%; height: 60px;">${text}</textarea>
      <button onclick="this.parentElement.remove()">Close</button>
    </div>
  `
  document.body.appendChild(dialog)

  // Select the text for easy copying
  const textarea = dialog.querySelector('textarea') as HTMLTextAreaElement
  textarea.select()
}

// Usage
copyWithFallback('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8')
```

### Async Copy with Promise

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

function copyAsync(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    // Use a small delay to ensure the operation completes
    setTimeout(() => {
      const success = Clipboard.copy(text)
      resolve(success)
    }, 0)
  })
}

// Usage with async/await
async function handleCopy(text: string) {
  try {
    const success = await copyAsync(text)

    if (success) {
      console.log('Successfully copied:', text)
    }
    else {
      console.log('Copy operation failed')
    }
  }
  catch (error) {
    console.error('Copy error:', error)
  }
}

handleCopy('Hello, World!')
```

### Copy Multiple Items

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

class MultiCopyManager {
  private items: string[] = []

  addItem(text: string) {
    this.items.push(text)
  }

  copyAll(separator: string = '\n'): boolean {
    const combinedText = this.items.join(separator)
    return Clipboard.copy(combinedText)
  }

  copyItem(index: number): boolean {
    if (index >= 0 && index < this.items.length) {
      return Clipboard.copy(this.items[index])
    }
    return false
  }

  clear() {
    this.items = []
  }
}

// Usage
const copyManager = new MultiCopyManager()
copyManager.addItem('First line')
copyManager.addItem('Second line')
copyManager.addItem('Third line')

// Copy all items separated by newlines
copyManager.copyAll('\n')

// Or copy individual items
copyManager.copyItem(0) // Copy first item only
```

### Copy with Validation

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'
import { ValidationUtils } from '@nimiq/utils/validation-utils'

function copyNimiqAddress(address: string): boolean {
  // Validate address before copying
  if (!ValidationUtils.isValidAddress(address)) {
    console.error('Invalid Nimiq address:', address)
    return false
  }

  // Normalize address format
  const normalizedAddress = ValidationUtils.normalizeAddress(address)

  // Copy the normalized address
  const success = Clipboard.copy(normalizedAddress)

  if (success) {
    console.log('Valid address copied:', normalizedAddress)
  }
  else {
    console.error('Failed to copy address')
  }

  return success
}

// Usage
copyNimiqAddress('nq48 8ckh ba24 2vr3 n249 n8mn j5xx 74db 5xj8')
```

### Copy with Analytics

```typescript
import { Clipboard } from '@nimiq/utils/clipboard'

class AnalyticsCopyManager {
  private copyCount: number = 0
  private copyHistory: Array<{ text: string, timestamp: number, success: boolean }> = []

  copy(text: string, category?: string): boolean {
    const timestamp = Date.now()
    const success = Clipboard.copy(text)

    // Track the copy operation
    this.copyCount++
    this.copyHistory.push({ text, timestamp, success })

    // Send analytics
    this.sendAnalytics(category || 'general', success)

    return success
  }

  private sendAnalytics(category: string, success: boolean) {
    // Send analytics data (implement based on your analytics service)
    console.log('Copy Analytics:', {
      category,
      success,
      totalCopies: this.copyCount,
      timestamp: Date.now()
    })
  }

  getStats() {
    const successful = this.copyHistory.filter(h => h.success).length
    const failed = this.copyHistory.length - successful

    return {
      total: this.copyHistory.length,
      successful,
      failed,
      successRate: this.copyHistory.length > 0 ? successful / this.copyHistory.length : 0
    }
  }
}

// Usage
const copyManager = new AnalyticsCopyManager()
copyManager.copy('NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8', 'address')
copyManager.copy('Transaction hash', 'transaction')

console.log('Copy Statistics:', copyManager.getStats())
```

## Browser Compatibility

The Clipboard utility handles various browser environments:

### Modern Browsers
- Uses the modern Clipboard API when available
- Provides immediate feedback on success/failure
- Works with async/await patterns

### Legacy Browsers
- Falls back to `document.execCommand('copy')`
- Requires text selection for copying
- May have limited functionality

### Mobile Browsers
- Optimized for mobile clipboard behavior
- Handles iOS Safari limitations
- Works with Android Chrome and Firefox

## Security Considerations

### User Interaction Required
- Most browsers require user interaction (click, touch) before allowing clipboard access
- Copy operations may fail if not triggered by user action

### HTTPS Requirement
- Modern clipboard APIs often require HTTPS
- HTTP sites may have limited clipboard functionality

### Privacy Protection
- Some browsers limit clipboard access in certain contexts
- Private/incognito mode may restrict clipboard operations

## Use Cases

- **Address copying** - Copy crypto addresses and transaction hashes
- **Share functionality** - Copy URLs and share links
- **Code snippets** - Copy code examples and configurations
- **Form data** - Copy form values and generated data
- **Export functionality** - Copy exported data for external use

## Related Modules

- [ValidationUtils](./validation-utils) - Validate data before copying
- [FormattableNumber](./formattable-number) - Format numbers before copying
- [BrowserDetection](./browser-detection) - Detect browser capabilities

## Next Steps

- Learn about [ValidationUtils](./validation-utils) for data validation
- Explore [BrowserDetection](./browser-detection) for browser-specific behavior
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
