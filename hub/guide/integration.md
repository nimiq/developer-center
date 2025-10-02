---
title: Integration Guide
description: Best practices for integrating the Nimiq Hub API into your application
---

# Integration Guide

This guide covers best practices, common patterns, and troubleshooting tips for integrating the Hub API into your application.

## Basic Setup

### TypeScript Setup

For TypeScript projects, the Hub API provides full type definitions:

```ts
import type {
  CheckoutRequest,
  ChooseAddressRequest,
  ChooseAddressResult,
  SignedTransaction,
} from '@nimiq/hub-api'
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

// TypeScript knows the request and response types
const request: CheckoutRequest = {
  appName: 'My App',
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 1000000,
}

const result: SignedTransaction = await hubApi.checkout(request)
```

### Vue/React Setup

Create a Hub API instance that can be reused across your application:

::: code-group

```ts [Vue 3 Composable]
import HubApi from '@nimiq/hub-api'
// composables/useHub.ts
import { ref } from 'vue'

const hubApi = new HubApi('https://hub.nimiq.com')

export function useHub() {
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function checkout(request: CheckoutRequest) {
    isLoading.value = true
    error.value = null

    try {
      const result = await hubApi.checkout(request)
      return result
    }
    catch (err) {
      error.value = err as Error
      throw err
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    hubApi,
    isLoading,
    error,
    checkout,
  }
}
```

```ts [React Hook]
import HubApi from '@nimiq/hub-api'
// hooks/useHub.ts
import { useCallback, useState } from 'react'

const hubApi = new HubApi('https://hub.nimiq.com')

export function useHub() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const checkout = useCallback(async (request: CheckoutRequest) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await hubApi.checkout(request)
      return result
    }
    catch (err) {
      setError(err as Error)
      throw err
    }
    finally {
      setIsLoading(false)
    }
  }, [])

  return {
    hubApi,
    isLoading,
    error,
    checkout,
  }
}
```

:::

## Response Handling

### Success Handling

All Hub API methods return promises that resolve with method-specific results:

```ts
try {
  const result = await hubApi.checkout({
    appName: 'My Shop',
    recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
    value: 1000000,
  })

  // Result is a SignedTransaction
  console.log('Transaction hash:', result.hash)
  console.log('Serialized tx:', result.serializedTx)
  console.log('Sender:', result.raw.sender)
  console.log('Value:', result.raw.value, 'Luna')

  // Show success message to user
  showToast('Payment successful!')

  // Optional: Wait for confirmation on-chain
  await waitForConfirmation(result.hash)
}
catch (error) {
  // Handle errors (see next section)
}
```

### Error Handling

Hub API errors should be caught and handled appropriately:

```ts
try {
  const result = await hubApi.checkout(options)
}
catch (error) {
  if (error.message === 'Request was cancelled') {
    // User closed the popup or clicked "Cancel"
    console.log('User cancelled payment')
    showToast('Payment cancelled')
  }
  else if (error.message.includes('Insufficient balance')) {
    // User doesn't have enough funds
    console.log('Insufficient balance')
    showToast('Not enough NIM to complete payment')
  }
  else if (error.message.includes('popup')) {
    // Popup was blocked by browser
    console.error('Popup blocked')
    showToast('Please allow popups for this site')
  }
  else {
    // Other errors
    console.error('Hub API error:', error)
    showToast('Payment failed. Please try again.')
  }
}
```

### Common Error Messages

| Error Message | Meaning | Solution |
|--------------|---------|----------|
| `Request was cancelled` | User closed popup or clicked Cancel | Normal flow, inform user |
| `Insufficient balance` | User doesn't have enough funds | Ask user to fund their account |
| `popup` (in message) | Popup blocked by browser | Ensure call is in user action, ask user to allow popups |
| `Invalid address` | Malformed recipient address | Validate address format before calling Hub |
| `Network error` | Hub couldn't be reached | Check network connection, Hub status |

## Loading States

Always provide feedback while the Hub is processing:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useHub } from '@/composables/useHub'

const { checkout } = useHub()
const isLoading = ref(false)

async function handlePayment() {
  isLoading.value = true

  try {
    await checkout({
      appName: 'My App',
      recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
      value: 1000000,
    })
    // Success handling
  }
  catch (error) {
    // Error handling
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <button :disabled="isLoading" @click="handlePayment">
    <span v-if="isLoading">Processing...</span>
    <span v-else>Pay with Nimiq</span>
  </button>
</template>
```

## Critical Configuration Requirements

### COOP/COEP Headers Must NOT Be Set

::: danger IMPORTANT
The Hub API **requires cross-origin communication** to function. Do not set `Cross-Origin-Embedder-Policy` or `Cross-Origin-Opener-Policy` headers in your development or production servers, as they will prevent Hub popups from communicating with your application.

```js
// ❌ DO NOT SET these headers when using Hub API:
{
  headers: {
    // 'Cross-Origin-Embedder-Policy': 'require-corp',  // BREAKS HUB
    // 'Cross-Origin-Opener-Policy': 'same-origin',     // BREAKS HUB
  }
}
```
:::

**Why this matters:**
- Hub uses popup windows to display the wallet UI
- These headers prevent the popup from communicating back to your application
- The Hub API will fail silently or throw CORS errors if these are enabled
- These headers are sometimes added for `SharedArrayBuffer` or WASM features

**If you need SharedArrayBuffer:**

If your application requires `SharedArrayBuffer` for WebAssembly or other features, you have two options:

1. **Don't use Hub on the same page** - Load Hub integration on separate pages without COOP/COEP
2. **Use redirect behavior** - Redirect flow works with these headers (but user leaves your page)

**Checking your headers:**

```bash
# Check if your server sets these headers
curl -I https://yourapp.com

# Look for these headers (they should NOT be present):
# Cross-Origin-Embedder-Policy: require-corp
# Cross-Origin-Opener-Policy: same-origin
```

### Vite Example

```ts
// vite.config.ts
export default defineConfig({
  server: {
    headers: {
      // ❌ Keep these commented when using Hub:
      // 'Cross-Origin-Embedder-Policy': 'require-corp',
      // 'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
})
```

### Next.js Example

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // ❌ Do NOT include these headers:
          // { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          // { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
}
```

## Best Practices

### 1. Validate Inputs Before Calling Hub

Validate addresses and amounts client-side to catch errors early:

```ts
import { Address } from '@nimiq/utils' // or your validation library

function isValidNimAddress(address: string): boolean {
  try {
    Address.fromString(address)
    return true
  }
  catch {
    return false
  }
}

async function handlePayment(recipient: string, amount: number) {
  // Validate before calling Hub
  if (!isValidNimAddress(recipient)) {
    showError('Invalid recipient address')
    return
  }

  if (amount <= 0) {
    showError('Amount must be greater than 0')
    return
  }

  // Now call Hub
  const result = await hubApi.checkout({
    appName: 'My App',
    recipient,
    value: amount,
  })
}
```

### 2. Call Hub Methods in User Actions

To avoid popup blockers, always call Hub methods **synchronously** within user actions:

```ts
// ✅ Good
button.addEventListener('click', async () => {
  const result = await hubApi.checkout(options)
})

// ❌ Bad - popup will be blocked
button.addEventListener('click', async () => {
  await fetchUserData() // Async operation first
  const result = await hubApi.checkout(options) // Too late!
})

// ✅ Good - prepare data first, then call in user action
let userData = null

async function prepareData() {
  userData = await fetchUserData()
}

button.addEventListener('click', async () => {
  if (!userData)
    await prepareData()
  const result = await hubApi.checkout({
    ...options,
    sender: userData.address,
  })
})
```

### 3. Display Transaction Details

Show users what they're about to sign:

```vue
<script setup lang="ts">
function formatNim(luna: number): string {
  return (luna / 100000).toFixed(2)
}

async function confirmPayment() {
  const result = await hubApi.checkout({
    appName: 'My Shop',
    recipient,
    value: amount,
    fee,
  })
}
</script>

<template>
  <div class="payment-summary">
    <h3>Payment Summary</h3>
    <dl>
      <dt>Recipient</dt>
      <dd>{{ recipient }}</dd>

      <dt>Amount</dt>
      <dd>{{ formatNim(amount) }} NIM</dd>

      <dt>Fee</dt>
      <dd>{{ formatNim(fee) }} NIM</dd>

      <dt>Total</dt>
      <dd><strong>{{ formatNim(amount + fee) }} NIM</strong></dd>
    </dl>

    <button @click="confirmPayment">
      Confirm Payment
    </button>
  </div>
</template>
```

### 4. Handle Network Issues

The Hub might be temporarily unreachable:

```ts
async function checkoutWithRetry(options: CheckoutRequest, maxRetries = 3) {
  let lastError: Error

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await hubApi.checkout(options)
    }
    catch (error) {
      lastError = error as Error

      if (error.message === 'Request was cancelled') {
        throw error // Don't retry if user cancelled
      }

      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
      }
    }
  }

  throw lastError!
}
```

### 5. Preserve Context in Redirects

When using redirect behavior, preserve important context:

```ts
const redirectBehavior = new HubApi.RedirectRequestBehavior(
  window.location.href, // Return to current page
  {
    // Preserve state
    cartId: 'cart_123',
    userId: 'user_456',
    timestamp: Date.now(),
  }
)

const hubApi = new HubApi('https://hub.nimiq.com', redirectBehavior)

hubApi.on(
  HubApi.RequestType.CHECKOUT,
  (result, state) => {
    // Restore context
    console.log('Cart ID:', state.cartId)
    console.log('Completed at:', Date.now() - state.timestamp, 'ms')

    // Process payment
    processPayment(result, state.cartId)
  }
)
```

## Troubleshooting

### Popup Blocked

**Symptom:** Hub window doesn't open, browser shows "popup blocked" icon

**Solutions:**
1. Ensure Hub method is called **synchronously** in a user action
2. Ask users to allow popups for your domain
3. Consider using redirect behavior instead
4. Check that no async operations occur before the Hub call

### Hub Not Responding

**Symptom:** Hub window opens but doesn't load or hangs

**Solutions:**
1. Check Hub status (is `https://hub.nimiq.com` accessible?)
2. Verify network connection
3. Check browser console for CORS or CSP errors
4. Ensure COOP/COEP headers are **not** set (see warning above)

### "Invalid Request" Error

**Symptom:** Hub shows error or rejects immediately

**Solutions:**
1. Validate all required fields are present
2. Check address format (use human-readable format: `NQ...`)
3. Verify amounts are in Luna (1 NIM = 100,000 Luna)
4. Ensure `validityStartHeight` is set for `signTransaction()`

### TypeScript Type Errors

**Symptom:** TypeScript complains about types

**Solutions:**
1. Ensure `@nimiq/hub-api` version is up to date
2. Import types explicitly: `import type { CheckoutRequest } from '@nimiq/hub-api'`
3. Check official TypeScript examples in the repo

### Users See "Request Expired"

**Symptom:** Hub shows "request expired" after user returns

**Solutions:**
1. Don't generate requests too far in advance
2. For `signTransaction`, ensure `validityStartHeight` is current
3. Consider regenerating the request if user takes too long

## Testing

### Development Environment

For testing, use the testnet Hub:

```ts
const hubApi = new HubApi('https://hub.nimiq-testnet.com')
```

Get free testnet NIM from the [Nimiq Testnet Faucet](https://faucet.nimiq-testnet.com).

### Mock for Unit Tests

Mock the Hub API in tests:

```ts
import { vi } from 'vitest'

vi.mock('@nimiq/hub-api', () => ({
  default: class MockHubApi {
    async checkout() {
      return {
        hash: '0xabc123...',
        serializedTx: 'abc123...',
        raw: {
          sender: 'NQ07 0000...',
          recipient: 'NQ07 0000...',
          value: 1000000,
          fee: 0,
        },
      }
    }
  },
}))
```

## Next Steps

- Explore [Transaction Methods](/hub/guide/transactions)
- Learn about [Account Management](/hub/guide/accounts)
- Check out [Advanced Features](/hub/guide/advanced)
- See [Practical Examples](/hub/examples)
