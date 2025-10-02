---
title: Core Concepts
description: Understand the Hub architecture, request behaviors, and security model
---

# Core Concepts

Understanding how the Hub works will help you integrate it effectively and choose the right request behavior for your application.

## Architecture Overview

The Nimiq Hub ecosystem consists of three main components:

```lh-1
                  ┌──────────────────┐
                  │ Your Application │
                  └────────┬─────────┘
                           │
                  Hub API Requests
                           │
                           ▼
                      ┌────────┐
              ┌───────┤  Hub   │───────┐
              │       └────────┘       │
       Key Management              Results
              │                        │
              ▼                        │
         ┌──────────┐                  │
         │ Keyguard │                  │
         └────┬─────┘                  │
              └─── Signatures ─────────┘

    ┌──────────────────┐
    │ Your Application │──── Transactions ────► Nimiq Blockchain
    └──────────────────┘
```

- **Your Application**: The frontend application that integrates the Hub API to request wallet operations. This could be a dApp, payment platform, or any web application.

- **Hub**: The user-facing interface that displays transaction details, manages accounts, and coordinates between your app and the Keyguard. The Hub validates requests and presents them to users in a friendly UI.

- **Keyguard**: The secure, isolated component that holds private keys and performs all cryptographic operations. It's designed with maximum security in mind and never exposes private keys to the Hub or your application.

> [!NOTE] Security by Design
> The Keyguard runs in a separate origin and iframe with strict security policies. Private keys are encrypted with user passwords and never leave the Keyguard environment. Even if the Hub or your app is compromised, private keys remain safe.


## Request Behaviors

The Hub API supports three different request behaviors to accommodate different application needs:

| Feature | Popup (Default) | Redirect | IFrame (Restricted) |
|---------|-------------------|-------------|------------------------|
| **User stays on page** | ✅ Yes | ❌ No | ✅ Yes |
| **Works on mobile** | ✅ Yes (new tab) | ✅ Yes | ✅ Yes |
| **Requires HTTPS** | ❌ No | ⚠️ Yes (production) | ❌ No |
| **Popup blocker risk** | ⚠️ Possible | ✅ Never | ✅ Never |
| **State preservation** | ✅ Automatic | ⚠️ Manual | ✅ Automatic |
| **Third-party access** | ✅ Yes | ✅ Yes | ❌ Nimiq domains only |
| **Setup complexity** | 🟢 Low | 🟡 Medium | 🟢 Low |
| **Best for** | Web apps, dApps | Mobile-first, PWAs | Official Nimiq apps |
| **Recommended** | ⭐⭐⭐ | ⭐⭐ | ⭐ (restricted) |

### Popup (Default)

Requests open in a centered popup window. Users stay on your page while the Hub opens in a separate window.

::: code-group

```ts [popup-behavior.ts]
const hubApi = new HubApi('https://hub.nimiq.com')
// Or explicitly use popup behavior
const popupBehavior = new HubApi.PopupRequestBehavior()
const hubApi = new HubApi('https://hub.nimiq.com', popupBehavior)

const result = await hubApi.checkout(options)
```

:::

> [!TIP] When to use
> Use Popup for most web applications and dApps. It provides the best user experience by keeping users on your page while they complete Hub interactions.

### Redirect

Redirects the entire browser tab to the Hub, then back to your app when complete.

::: code-group

```ts [redirect-behavior.ts]
const redirectBehavior = new HubApi.RedirectRequestBehavior()
const hubApi = new HubApi('https://hub.nimiq.com', redirectBehavior)

const result = await hubApi.checkout(options) // Will redirect
```

:::

> [!TIP] When to use
> Use Redirect for mobile-first applications, PWAs, or when you encounter popup blocker issues. Works great on mobile devices with simpler navigation.

> [!WARNING] HTTPS Required
> Top-level redirects only work over HTTPS (except on localhost for development). Make sure your production app uses HTTPS before implementing redirect flows.

### IFrame (Restricted)

Some methods can be called via iframe for privileged origins (Nimiq domains only).

::: code-group

```ts [iframe-behavior.ts]
const iframeBehavior = new HubApi.IFrameRequestBehavior()

// Only available for specific methods from trusted origins
const accounts = await hubApi.list(iframeBehavior)
```

:::

> [!NOTE] Restricted to Nimiq Domains
> IFrame behavior is **only available from Nimiq domains** (e.g., `*.nimiq.com`) and limited to specific methods: `list()`, `cashlinks()`, `addBtcAddresses()`. Third-party applications should use **Popup** or **Redirect** behaviors.

#### Handling Redirect Responses

When using redirects, you need to listen for the Hub's return:

::: code-group

```ts [setup-redirect-listeners.ts]
// 1. Initialize Hub with redirect behavior
const redirectBehavior = new HubApi.RedirectRequestBehavior('https://myapp.com/return')
const hubApi = new HubApi('https://hub.nimiq.com', redirectBehavior)

// 2. Set up listeners for each request type
hubApi.on(
  HubApi.RequestType.CHECKOUT,
  (result) => console.log('Payment complete:', result),
  (error) => console.error('Payment failed:', error),
)

// 3. Check for redirect response on page load
hubApi.checkRedirectResponse()

// 4. Later, trigger the request (will redirect)
button.addEventListener('click', () => {
  hubApi.checkout({ appName: 'My App', /* ... */ })
})
```

:::

#### Preserving State Across Redirects

You can pass state data that will be preserved across the redirect:

::: code-group

```ts [preserve-redirect-state.ts]
const storedData = {
  orderId: '12345',
  userId: 'user_abc',
  returnPath: '/checkout/complete',
}

const redirectBehavior = new HubApi.RedirectRequestBehavior('https://myapp.com/return', storedData)

hubApi.on(
  HubApi.RequestType.CHECKOUT,
  (result, storedData) => {
    console.log('Order ID:', storedData.orderId) // '12345'
    console.log('Transaction:', result.hash)
  }
)
```

:::

## Request Lifecycle

Understanding the request lifecycle helps you handle loading states and errors properly:

```
Your App          Hub              Keyguard         Blockchain
   │               │                   │                 │
   │──Request──────►                   │                 │
   │  (checkout)   │                   │                 │
   │               │──Validate──       │                 │
   │               │                   │                 │
   │               │──Display for──────►                 │
   │               │    approval       │                 │
   │               │                   │──Review &       │
   │               │                   │  Approve        │
   │               │                   │                 │
   │               │                   │──Sign with      │
   │               │                   │  private key    │
   │               │                   │                 │
   │               │◄──Signature───────│                 │
   │               │                   │                 │
   │               │──(Optional)───────┼─────────────────►
   │               │  Broadcast tx     │                 │
   │               │                   │                 │
   │◄──Result──────│                   │                 │
   │               │                   │                 │
   │──(Optional)───┼───────────────────┼─────────────────►
   │  Verify/watch │                   │                 │
```

1. **Request**: Your app calls a Hub API method in response to a user action
2. **Validation**: Hub validates the request parameters
3. **User Review**: Hub presents the request to the user in a clear UI
4. **Keyguard**: If approved, Keyguard signs with the private key
5. **Response**: Hub returns the result (or error) to your app
6. **Broadcast**: For some methods like `checkout()`, the transaction is broadcast automatically

## Security Model

### Trust Boundaries

```
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│   Your App   │───────►│     Hub      │───────►│   Keyguard   │
│  (Untrusted) │        │(Semi-Trusted)│        │(Fully Trusted)│
└──────────────┘        └──────────────┘        └──────────────┘
```

- **Your App (Untrusted)**: Can request operations but never access private keys
- **Hub (Semi-Trusted)**: Validates and presents requests but never handles raw keys
- **Keyguard (Fully Trusted)**: Holds encrypted keys and performs signing in isolation

### What the Hub Does NOT Know

- Your users' private keys (only Keyguard has these, encrypted)
- User passwords (only Keyguard handles these)
- Keys are never transmitted to your app or the Hub

### What Your App Cannot Do

- Access private keys directly
- Sign transactions without user approval
- Impersonate the user
- Extract seeds or recovery phrases

> [!TIP] Security Best Practice
> Always display transaction details to your users **before** calling Hub methods. While the Hub shows details again, informed users make better security decisions.

## Common Patterns

### Progressive Enhancement

Start with popups and fallback to redirects if needed:

::: code-group

```ts [progressive-enhancement.ts]
let hubApi

try {
  // Try popup first
  const popupBehavior = new HubApi.PopupRequestBehavior()
  hubApi = new HubApi('https://hub.nimiq.com', popupBehavior)
  await hubApi.checkout(options)
}
catch (error) {
  if (error.message.includes('popup')) {
    // Fallback to redirect
    const redirectBehavior = new HubApi.RedirectRequestBehavior()
    hubApi = new HubApi('https://hub.nimiq.com', redirectBehavior)
    await hubApi.checkout(options)
  }
}
```

:::

### Mobile Detection

Choose behavior based on device:

::: code-group

```ts [mobile-detection.ts]
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const behavior = isMobile
  ? new HubApi.RedirectRequestBehavior()
  : new HubApi.PopupRequestBehavior()

const hubApi = new HubApi('https://hub.nimiq.com', behavior)
```

:::

## Next Steps

- Learn [Integration Best Practices](/hub/guide/integration)
- Explore [Transaction Methods](/hub/guide/transactions)
- See [Starter Template](https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts)
