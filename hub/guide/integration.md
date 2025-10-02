---
title: Integration Guide
description: Best practices for integrating the Nimiq Hub API into your application
---

# Integration Guide

This guide distills the key practices that make Hub API integrations reliable and user-friendly. Cross-reference it with
[Getting Started](/hub/getting-started) and the [API Reference](/hub/api-reference) for method details.

## 1. Centralise HubApi usage

Create a single `HubApi` instance for your app and expose thin helpers. This keeps permissions, behaviours, and error
handling in one place.

```ts [request-payment.ts]
// hub.ts
import HubApi, { CheckoutRequest, SignedTransaction } from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

export async function requestPayment(request: CheckoutRequest): Promise<SignedTransaction> {
  try {
    return await hubApi.checkout(request)
  } catch (error) {
    handleHubError(error as Error)
    throw error
  }
}
```

## 2. Call methods synchronously inside user actions

Browsers block popups opened outside direct interactions. Never await another promise before invoking a Hub method.

```ts [notify-success.ts]
button.addEventListener('click', async () => {
  const result = await requestPayment({
    appName: 'My Shop',
    recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
    value: 1_000, // 0.01 NIM
  })

  notifySuccess(result.hash)
})
```

## 3. Handle success and failure explicitly

Wrap calls in `try/catch` and branch on user cancellation versus genuine errors.

::: code-group

```ts [handle-hub-error.ts]
function handleHubError(error: Error) {
  if (error.message === 'Request was cancelled') 
    showToast('Action cancelled by the user')
  else if (error.message.includes('popup'))
    showToast('Enable popups or switch to redirect mode')
  else
    console.error(error)
    showToast('Hub request failed')
}
```

:::

## 4. Manage UI state

- Disable the triggering button while the Hub popup is open.
- Surface progress indicators ("Waiting for confirmation…").
- For checkout results, forward the signed transaction to your backend immediately if you need server-side confirmations.

## 5. Use redirects for mobile or kiosk setups

Popups are convenient on desktop, but redirect flows avoid blocker dialogs on mobile. Instantiate the API with a redirect
behaviour when needed:

::: code-group

```ts [setup-redirect-behavior.ts]
const redirectBehavior = new HubApi.RedirectRequestBehavior(window.location.href, { orderId })
const hubApi = new HubApi('https://hub.nimiq.com', redirectBehavior)

hubApi.on(HubApi.RequestType.CHECKOUT, (result, state) => {
  completeOrder(state.orderId, result.hash)
})

hubApi.checkRedirectResponse()
```

:::

## 6. Troubleshooting checklist

- **Popup blocked:** ensure the call happens synchronously in the event handler; fall back to redirects if necessary.
- **Hub not loading:** check network connectivity, CORS, and that no COOP/COEP headers are set.
- **"Invalid request":** verify addresses, units (Luna), and required fields before sending the request.
- **Stale validity heights:** fetch the latest block height from your [RPC endpoint](/rpc-client/) before calling `signTransaction`.

## 7. Testing strategy

- Point your app at `https://hub.nimiq-testnet.com` during development.
- Use the [testnet faucet](https://faucet.nimiq-testnet.com) to obtain NIM for testing.
- Mock the Hub API in unit tests by stubbing the methods you use, returning realistic payloads.

## 8. Keep dependencies up to date

Pin Hub API versions in production (`@nimiq/hub-api@1.10.0`) and upgrade periodically to benefit from bug fixes. The
package includes TypeScript definitions—leverage them to catch integration mistakes during development.

## Further resources

- [Quick Start](../getting-started)
- [Transactions Guide](./transactions)
- [Cashlinks & Advanced Features](./advanced)
- [Practical Examples](../examples)
