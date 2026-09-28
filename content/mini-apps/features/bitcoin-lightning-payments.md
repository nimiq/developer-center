---
title: Bitcoin Lightning Payments in Mini Apps
description: Pay a Bitcoin Lightning invoice from a Mini App with NIM or USDT
icon: i-tabler:bolt
navigation:
  title: Bitcoin Lightning Payments
  order: 4
---

# Bitcoin Lightning Payments in Mini Apps

Use `payLightningInvoice()` when a merchant gives your Mini App a Bitcoin Lightning payment request. The user spends NIM or USDT, and the merchant receives BTC through Lightning. Nimiq Pay handles the self-custodial atomic swap and asks the user to approve the payment.

## Send a payment

Get a fixed-amount BOLT11 invoice or fixed-amount LNURL from the merchant, then pass it to the Nimiq provider. The payment request must match the network selected in Nimiq Pay. In this example, `merchantInvoice` is the string supplied by the merchant.

```ts
import { init } from '@nimiq/mini-app-sdk'

const nimiq = await init()
const { hash, swapId } = await nimiq.payLightningInvoice({ invoice: merchantInvoice })
```

Nimiq Pay asks for access before checking this wallet's Lightning invoice history, lets the user choose NIM or USDT on Polygon, shows the swap amount and fees, and asks for final approval. The Mini App does not choose the spending asset or submit a transaction directly.

`hash` identifies the submitted NIM or Polygon transaction. `swapId` identifies the atomic swap. A resolved call means the spending transaction was submitted; it does not mean the merchant has received BTC. Keep the payment pending until your merchant backend confirms Lightning settlement.

## Handle duplicate or uncertain payments

The same resolved invoice cannot be submitted again while an earlier attempt is recorded. The SDK rejects with a `NimiqProviderError` whose `type` is `DUPLICATE_PAYMENT`. If the host cannot determine whether submission succeeded, the type is `TRANSACTION_OUTCOME_UNKNOWN`. In either case, check the merchant's payment status before asking for another invoice. Do not retry the same invoice automatically.

`error.data` may contain a `hash` and `swapId` if Nimiq Pay knows them. For duplicate attempts, those identifiers are returned only to the same Mini App and wallet that made the earlier attempt.

```ts
import { NimiqProviderError } from '@nimiq/mini-app-sdk'

try {
  const result = await nimiq.payLightningInvoice({ invoice: merchantInvoice })
  console.log('Payment submitted:', result.hash, result.swapId)
}
catch (error) {
  if (NimiqProviderError.is(error)
    && (error.type === 'DUPLICATE_PAYMENT' || error.type === 'TRANSACTION_OUTCOME_UNKNOWN')) {
    console.warn('Check merchant payment status before another attempt', error.data)
  }
  else {
    throw error
  }
}
```

The [Nimiq Provider API reference](/mini-apps/api-reference/nimiq-provider#paylightninginvoice) lists the method parameters, return type, and other errors.
