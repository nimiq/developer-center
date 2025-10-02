---
title: Examples
description: Practical examples of Hub API integration patterns
---

# Practical Examples

Complete, working examples demonstrating common Hub API integration patterns.

## Payment Button

Simple payment button for e-commerce or donations.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Pay with Nimiq</title>
  <style>
    .pay-button {
      background: #1F2348;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .pay-button:hover { background: #2A2F5B; }
    .pay-button:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>
  <div>
    <h2>Product: Premium Plan</h2>
    <p>Price: 10 NIM</p>
    <button id="pay-btn" class="pay-button">Pay with Nimiq</button>
    <p id="status"></p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>
  <script>
    const hubApi = new HubApi('https://hub.nimiq.com')
    const status = document.getElementById('status')
    const button = document.getElementById('pay-btn')

    button.addEventListener('click', async () => {
      button.disabled = true
      status.textContent = 'Processing payment...'

      try {
        const result = await hubApi.checkout({
          appName: 'My Shop',
          recipient: 'NQ07 YOUR SHOP ADDR ESS0 0000 0000 0000 0000',
          value: 1000000, // 10 NIM in Luna
          extraData: `Order-${Date.now()}`,
        })

        status.textContent = `✅ Payment successful! TX: ${result.hash.slice(0, 16)}...`
        status.style.color = 'green'

        // Process order
        await fetch('/api/orders/complete', {
          method: 'POST',
          body: JSON.stringify({ txHash: result.hash }),
        })
      } catch (error) {
        if (error.message === 'Request was cancelled') {
          status.textContent = 'Payment cancelled'
        } else {
          status.textContent = `❌ Payment failed: ${error.message}`
          status.style.color = 'red'
        }
      } finally {
        button.disabled = false
      }
    })
  </script>
</body>
</html>
```

## User Authentication

Authenticate users by signing a challenge message.

### Frontend (Vue 3)

```vue
<script setup lang="ts">
import HubApi from '@nimiq/hub-api'
import { ref } from 'vue'

const hubApi = new HubApi('https://hub.nimiq.com')
const isLoading = ref(false)
const user = ref<{ address: string, label: string } | null>(null)

async function signIn() {
  isLoading.value = true

  try {
    // 1. Get authentication challenge from server
    const { challenge } = await fetch('/api/auth/challenge').then(r => r.json())

    // 2. Request user to sign the challenge
    const result = await hubApi.signMessage({
      appName: 'My App',
      message: `Sign in to My App\nChallenge: ${challenge}`,
    })

    // 3. Verify signature on server and get session token
    const response = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address: result.signer,
        signature: Array.from(result.signature),
        publicKey: Array.from(result.signerPublicKey),
        challenge,
      }),
    })

    const { token, user: userData } = await response.json()

    // 4. Store token and user data
    localStorage.setItem('authToken', token)
    user.value = userData
  }
  catch (error) {
    console.error('Sign in failed:', error)
  }
  finally {
    isLoading.value = false
  }
}

function signOut() {
  localStorage.removeItem('authToken')
  user.value = null
}
</script>

<template>
  <div>
    <div v-if="!user">
      <button :disabled="isLoading" @click="signIn">
        {{ isLoading ? 'Signing in...' : 'Sign in with Nimiq' }}
      </button>
    </div>
    <div v-else>
      <p>Welcome, {{ user.label }}!</p>
      <p>Address: {{ user.address }}</p>
      <button @click="signOut">
        Sign out
      </button>
    </div>
  </div>
</template>
```

### Backend (Node.js/Express)

```ts
import crypto from 'node:crypto'
import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

// Store active challenges (use Redis in production)
const challenges = new Map<string, { challenge: string, timestamp: number }>()

// 1. Generate authentication challenge
app.get('/api/auth/challenge', (req, res) => {
  const challenge = crypto.randomBytes(32).toString('hex')
  const timestamp = Date.now()

  challenges.set(challenge, { challenge, timestamp })

  // Clean up old challenges
  for (const [key, value] of challenges.entries()) {
    if (Date.now() - value.timestamp > 5 * 60 * 1000) { // 5 minutes
      challenges.delete(key)
    }
  }

  res.json({ challenge })
})

// 2. Verify signature and create session
app.post('/api/auth/verify', async (req, res) => {
  const { address, signature, publicKey, challenge } = req.body

  // Verify challenge is valid and recent
  const challengeData = challenges.get(challenge)
  if (!challengeData) {
    return res.status(401).json({ error: 'Invalid or expired challenge' })
  }

  challenges.delete(challenge) // Use once

  // Verify the signature
  const message = `Sign in to My App\nChallenge: ${challenge}`
  const isValid = verifyNimiqSignature(message, signature, publicKey)

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  // Create session token
  const token = jwt.sign({ address }, process.env.JWT_SECRET!, { expiresIn: '7d' })

  res.json({
    token,
    user: {
      address,
      label: 'User', // Fetch from database if available
    },
  })
})

function verifyNimiqSignature(
  message: string,
  signature: number[],
  publicKey: number[],
): boolean {
  // Use @nimiq/core or crypto library to verify Ed25519 signature
  const prefix = '\x16Nimiq Signed Message:\n'
  const data = prefix + message.length + message
  // ... verification logic
  return true // Simplified for example
}

app.listen(3000)
```

## Shopping Cart Checkout

Complete e-commerce checkout flow with cart management.

```ts
// cart.ts
import HubApi from '@nimiq/hub-api'

interface CartItem {
  id: string
  name: string
  price: number // NIM
  quantity: number
}

class ShoppingCart {
  private hubApi: HubApi
  private items: CartItem[] = []

  constructor() {
    this.hubApi = new HubApi('https://hub.nimiq.com')
  }

  addItem(item: CartItem) {
    const existing = this.items.find(i => i.id === item.id)
    if (existing) {
      existing.quantity += item.quantity
    }
    else {
      this.items.push(item)
    }
  }

  removeItem(itemId: string) {
    this.items = this.items.filter(i => i.id !== itemId)
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  async checkout(shopAddress: string) {
    const totalNim = this.getTotal()
    const totalLuna = Math.round(totalNim * 100000)

    try {
      const result = await this.hubApi.checkout({
        appName: 'My Shop',
        recipient: shopAddress,
        value: totalLuna,
        extraData: JSON.stringify({
          orderId: crypto.randomUUID(),
          items: this.items.map(i => ({ id: i.id, quantity: i.quantity })),
          timestamp: Date.now(),
        }),
        shopLogoUrl: '/logo-square.png',
      })

      // Clear cart after successful payment
      this.items = []

      return {
        success: true,
        txHash: result.hash,
        orderId: result.raw.extraData,
      }
    }
    catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }
}

// Usage
const cart = new ShoppingCart()

cart.addItem({ id: '1', name: 'T-Shirt', price: 15, quantity: 2 })
cart.addItem({ id: '2', name: 'Mug', price: 8, quantity: 1 })

console.log('Total:', cart.getTotal(), 'NIM')

const result = await cart.checkout('NQ07 SHOP ADDR ESS0 0000 0000 0000 0000 0000')

if (result.success) {
  console.log('Order placed! TX:', result.txHash)
}
else {
  console.error('Checkout failed:', result.error)
}
```

## Staking Interface

Allow users to stake to validators.

```vue
<script setup lang="ts">
import { Client } from '@nimiq/core'
import HubApi from '@nimiq/hub-api'
import { computed, ref } from 'vue'

const hubApi = new HubApi('https://hub.nimiq.com')
const client = new Client()

const userAddress = ref('')
const validatorAddress = ref('')
const stakeAmount = ref(1000)
const isStaking = ref(false)
const currentHeight = ref(0)

// Get current block height
client.waitForConsensus().then(async () => {
  currentHeight.value = await client.blockNumber()
})

const stakeAmountLuna = computed(() => stakeAmount.value * 100000)

async function selectAddress() {
  const result = await hubApi.chooseAddress({ appName: 'Staking App' })
  userAddress.value = result.address
}

async function stakeToValidator() {
  if (!userAddress.value || !validatorAddress.value || stakeAmount.value < 1000) {
    alert('Please fill all fields. Minimum stake: 1,000 NIM')
    return
  }

  isStaking.value = true

  try {
    const transactions = await hubApi.signStaking({
      appName: 'Staking App',
      sender: userAddress.value,
      validatorAddress: validatorAddress.value,
      value: stakeAmountLuna.value,
      operation: 'stake',
      validityStartHeight: currentHeight.value,
    })

    // Broadcast all transactions
    const hashes = []
    for (const tx of transactions) {
      const hash = await client.sendRawTransaction(tx.serializedTx)
      hashes.push(hash)
    }

    alert(`✅ Staked ${stakeAmount.value} NIM successfully!\nTransactions: ${hashes.length}`)
  }
  catch (error) {
    if (error.message === 'Request was cancelled') {
      alert('Staking cancelled')
    }
    else {
      alert(`❌ Staking failed: ${error.message}`)
    }
  }
  finally {
    isStaking.value = false
  }
}
</script>

<template>
  <div class="staking-interface">
    <h2>Stake to Validator</h2>

    <div class="form-group">
      <label>Your Address</label>
      <div class="input-group">
        <input v-model="userAddress" readonly placeholder="Select your address">
        <button @click="selectAddress">
          Select
        </button>
      </div>
    </div>

    <div class="form-group">
      <label>Validator Address</label>
      <input v-model="validatorAddress" placeholder="NQ...">
    </div>

    <div class="form-group">
      <label>Stake Amount (NIM)</label>
      <input v-model.number="stakeAmount" type="number" min="1000">
      <small>Minimum: 1,000 NIM</small>
    </div>

    <button
      :disabled="!userAddress || !validatorAddress || stakeAmount < 1000 || isStaking"
      class="stake-btn"
      @click="stakeToValidator"
    >
      {{ isStaking ? 'Staking...' : `Stake ${stakeAmount} NIM` }}
    </button>
  </div>
</template>
```

## Gift Card/Cashlink Creator

Create shareable cashlinks for gifting.

```ts
import HubApi from '@nimiq/hub-api'

async function createGiftCard(
  amountNim: number,
  recipientName: string,
  occasion: 'birthday' | 'christmas' | 'generic' = 'generic',
) {
  const hubApi = new HubApi('https://hub.nimiq.com')

  const themeMap = {
    birthday: HubApi.CashlinkTheme.BIRTHDAY,
    christmas: HubApi.CashlinkTheme.CHRISTMAS,
    generic: HubApi.CashlinkTheme.GENERIC,
  }

  try {
    const cashlink = await hubApi.createCashlink({
      appName: 'Gift Cards',
      value: amountNim * 100000,
      message: `🎁 A gift for ${recipientName}!\n\nEnjoy your ${amountNim} NIM.`,
      theme: themeMap[occasion],
      returnLink: window.location.href,
    })

    const giftUrl = `https://wallet.nimiq.com/cashlink/${cashlink.address}`

    // Create shareable card
    return {
      url: giftUrl,
      address: cashlink.address,
      amount: amountNim,
      message: cashlink.message,
      qrCode: await generateQR(giftUrl),
    }
  }
  catch (error) {
    console.error('Failed to create gift card:', error)
    throw error
  }
}

async function generateQR(url: string): Promise<string> {
  // Use a QR code library like 'qrcode'
  const QRCode = await import('qrcode')
  return QRCode.toDataURL(url)
}

// Usage
const giftCard = await createGiftCard(50, 'Alice', 'birthday')

console.log('Gift card created!')
console.log('Share this link:', giftCard.url)
console.log('Or scan this QR code:')
console.log(giftCard.qrCode)
```

## Redirect Flow Example

Full redirect flow implementation for mobile-friendly apps.

```ts
// app.ts
import HubApi from '@nimiq/hub-api'

class PaymentApp {
  private hubApi: HubApi
  private redirectBehavior: HubApi.RedirectRequestBehavior

  constructor() {
    // Setup redirect behavior
    this.redirectBehavior = new HubApi.RedirectRequestBehavior(
      window.location.href,
      { returnTo: 'payment-complete' }, // Preserve state
    )

    this.hubApi = new HubApi('https://hub.nimiq.com', this.redirectBehavior)

    // Setup redirect listeners
    this.setupRedirectListeners()

    // Check for redirect response on load
    this.hubApi.checkRedirectResponse()
  }

  private setupRedirectListeners() {
    this.hubApi.on(
      HubApi.RequestType.CHECKOUT,
      (result, state) => {
        console.log('Payment successful!', result)
        console.log('Returning to:', state.returnTo)

        // Process payment
        this.onPaymentComplete(result.hash)
      },
      (error, state) => {
        console.error('Payment failed:', error)
        this.onPaymentFailed(error.message)
      },
    )
  }

  async initiatePayment(recipient: string, amount: number) {
    // This will redirect to Hub
    await this.hubApi.checkout({
      appName: 'Mobile Shop',
      recipient,
      value: amount * 100000,
    })

    // Code here won't execute until after redirect back
  }

  private onPaymentComplete(txHash: string) {
    // Show success page
    document.body.innerHTML = `
      <div class="success">
        <h1>✅ Payment Successful!</h1>
        <p>Transaction: ${txHash}</p>
        <button onclick="location.href='/'">Return to Shop</button>
      </div>
    `
  }

  private onPaymentFailed(error: string) {
    alert(`Payment failed: ${error}`)
  }
}

// Initialize app
new PaymentApp()

// Trigger payment
document.getElementById('pay-btn')?.addEventListener('click', () => {
  const app = new PaymentApp()
  app.initiatePayment('NQ07 SHOP ADDR', 10)
})
```

## Testing with Testnet

Always test your integration on testnet first:

```ts
// config.ts
const config = {
  development: {
    hubUrl: 'https://hub.nimiq-testnet.com',
    shopAddress: 'NQ07 TEST ADDR ESS0 0000 0000 0000 0000 0000',
  },
  production: {
    hubUrl: 'https://hub.nimiq.com',
    shopAddress: 'NQ07 REAL SHOP ADDR ESS0 0000 0000 0000 0000',
  },
}

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

export const hubApi = new HubApi(config[env].hubUrl)
export const shopAddress = config[env].shopAddress
```

Get free testnet NIM from the [testnet faucet](https://faucet.nimiq-testnet.com).

## Next Steps

- Check the complete [API Reference](/hub/api-reference) for all available methods
- Learn more about [Integration Best Practices](/hub/guide/integration)
- Explore the [Nimiq Wallet](https://wallet.nimiq.com) source code for real-world examples
