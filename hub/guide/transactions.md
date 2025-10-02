---
title: Transaction Methods
description: Request payments, sign transactions, and interact with the blockchain
---

# Transaction Methods

The Hub API provides several methods for transaction-related operations, from simple payments to complex staking operations.

## checkout()

The `checkout()` method is the easiest way to request a payment from a user. It displays a friendly payment UI, signs the transaction, and automatically broadcasts it to the network.

### Basic Usage

```ts
const result = await hubApi.checkout({
  appName: 'My Shop',
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 1000000, // 0.01 NIM (in Luna: 1 NIM = 100,000 Luna)
})

console.log('Transaction hash:', result.hash)
console.log('Transaction sent!')
```

### Request Options

```ts
interface CheckoutRequest {
  // Required
  appName: string // Name shown to user (keep it short)
  recipient: string // NIM address (human-readable: NQ...)
  value: number // Amount in Luna (1 NIM = 100,000 Luna)

  // Optional
  sender?: string // Pre-select sender address
  forceSender?: boolean // Require specific sender (throws if insufficient balance)
  fee?: number // Transaction fee in Luna (default: 0)
  extraData?: string | Uint8Array // Extra data to include
  validityDuration?: number // Validity in blocks (max/default: 120)
  shopLogoUrl?: string // Square logo, min 146x146px, same origin
  flags?: number // Transaction flags for contract creation
  recipientType?: number // Account type for contract creation
}
```

### Response

```ts
interface SignedTransaction {
  hash: string // Transaction hash (hex)
  serializedTx: string // Serialized signed transaction (hex)

  raw: {
    signerPublicKey: Uint8Array
    signature: Uint8Array
    sender: string // Human-readable address
    senderType: number
    recipient: string
    recipientType: number
    value: number // Luna
    fee: number // Luna
    validityStartHeight: number
    extraData: Uint8Array
    flags: number
    networkId: number
  }
}
```

### Example: E-commerce Checkout

```ts
async function processCheckout(orderId: string, totalNim: number) {
  try {
    const result = await hubApi.checkout({
      appName: 'Acme Store',
      recipient: 'NQ07 ACME STOR E000 0000 0000 0000 0000 0000',
      value: totalNim * 100000, // Convert NIM to Luna
      extraData: `Order #${orderId}`, // Include order reference
      shopLogoUrl: '/logo-square.png',
    })

    // Transaction is already broadcast by Hub
    await confirmOrder(orderId, result.hash)
    showSuccessMessage('Payment complete!')

    return result
  }
  catch (error) {
    if (error.message === 'Request was cancelled') {
      showMessage('Payment cancelled')
    }
    else {
      showError('Payment failed')
    }
    throw error
  }
}
```

### Setting Fees

```ts
// Standard transaction (no fee required on Nimiq)
await hubApi.checkout({
  appName: 'My App',
  recipient: recipientAddress,
  value: 1000000,
  fee: 0, // Default
})

// Custom fee (optional, for faster processing)
await hubApi.checkout({
  appName: 'My App',
  recipient: recipientAddress,
  value: 1000000,
  fee: 1380, // Small fee for prioritization
})
```

## signTransaction()

Unlike `checkout()`, the `signTransaction()` method signs a transaction but does **not** broadcast it. Use this when you want to submit the transaction yourself or sign offline.

### Differences from checkout()

- **Requires `sender` address** - Must specify who is sending
- **Requires `validityStartHeight`** - Must specify starting block height
- **Does not broadcast** - You handle submission to the network
- **Different UI** - Focused on signing, not payment flow

### Basic Usage

```ts
const currentHeight = await getCurrentBlockHeight() // Get from RPC or Web Client

const result = await hubApi.signTransaction({
  appName: 'My App',
  sender: 'NQ07 USER ADDR ESS0 0000 0000 0000 0000 0000',
  recipient: 'NQ07 DEST ADDR ESS0 0000 0000 0000 0000 0000',
  value: 1000000,
  validityStartHeight: currentHeight,
})

// Now broadcast it yourself
await client.sendRawTransaction(result.serializedTx)
```

### Request Options

```ts
interface SignTransactionRequest {
  // Required
  appName: string
  sender: string // Must specify sender address
  recipient: string
  value: number // Luna
  validityStartHeight: number // Current or future block height

  // Optional
  fee?: number
  extraData?: string | Uint8Array
  flags?: number
  recipientType?: number
}
```

::: warning Validity Window
Transactions are only valid for **120 blocks** after `validityStartHeight`. A transaction with a future `validityStartHeight` will be rejected until that height is reached. Plan accordingly!
:::

### Example: Offline Signing

```ts
import { Client } from '@nimiq/core'

// 1. Prepare transaction details offline
const txDetails = {
  appName: 'Offline Wallet',
  sender: userAddress,
  recipient: destinationAddress,
  value: 5000000,
  validityStartHeight: 123456, // Get from last known height
}

// 2. Sign with Hub (can be done offline if Hub is available locally)
const signedTx = await hubApi.signTransaction(txDetails)

// 3. Store or display serialized transaction
console.log('Signed transaction:', signedTx.serializedTx)
localStorage.setItem('pending-tx', signedTx.serializedTx)

// 4. Later, when online, broadcast it
const client = new Client()
await client.waitForConsensus()
await client.sendRawTransaction(signedTx.serializedTx)
```

## signStaking()

The `signStaking()` method handles complex staking operations (create validator, stake, unstake, update validator) and returns multiple signed transactions if needed.

### Basic Usage

```ts
const result = await hubApi.signStaking({
  appName: 'My Staking App',
  sender: 'NQ07 USER ADDR ESS0 0000 0000 0000 0000 0000',
  validatorAddress: 'NQ07 VALD ADDR ESS0 0000 0000 0000 0000 0000',
  value: 100000000, // 1,000 NIM minimum stake
  operation: 'stake', // 'stake' | 'unstake' | 'create_validator' | 'update_validator'
  validityStartHeight: currentHeight,
})

// Result is an array of signed transactions
for (const tx of result) {
  await client.sendRawTransaction(tx.serializedTx)
}
```

### Request Options

```ts
interface SignStakingRequest {
  appName: string
  sender: string
  validatorAddress: string
  value: number // Luna
  operation: 'stake' | 'unstake' | 'create_validator' | 'update_validator'
  validityStartHeight: number

  // For validator creation/update
  signingKey?: string // Validator signing key
  votingKey?: string // Validator voting key
  rewardAddress?: string // Address to receive rewards
  fee?: number
  extraData?: string | Uint8Array
}
```

### Response

```ts
// Returns an array of SignedTransaction objects
SignedTransaction[]
```

### Example: Staking to a Validator

```ts
async function stakeToValidator(
  userAddress: string,
  validatorAddress: string,
  amountNim: number,
) {
  const currentHeight = await client.blockNumber()

  const transactions = await hubApi.signStaking({
    appName: 'My Staking App',
    sender: userAddress,
    validatorAddress,
    value: amountNim * 100000, // Convert to Luna
    operation: 'stake',
    validityStartHeight: currentHeight,
  })

  // Submit all transactions
  for (const tx of transactions) {
    const hash = await client.sendRawTransaction(tx.serializedTx)
    console.log('Staking transaction sent:', hash)
  }

  showSuccess(`Staked ${amountNim} NIM to validator`)
}
```

### Example: Creating a Validator

```ts
async function createValidator(
  userAddress: string,
  rewardAddress: string,
  signingKey: string,
  votingKey: string,
) {
  const currentHeight = await client.blockNumber()

  const transactions = await hubApi.signStaking({
    appName: 'Validator Manager',
    sender: userAddress,
    validatorAddress: userAddress, // Same as sender for creation
    value: 100000000, // Minimum stake amount
    operation: 'create_validator',
    validityStartHeight: currentHeight,
    signingKey,
    votingKey,
    rewardAddress,
  })

  for (const tx of transactions) {
    await client.sendRawTransaction(tx.serializedTx)
  }

  showSuccess('Validator created successfully!')
}
```

## signMessage()

Sign arbitrary messages for authentication or proof-of-ownership. Perfect for login systems.

### Basic Usage

```ts
const result = await hubApi.signMessage({
  appName: 'My App',
  message: 'Sign in to My App',
})

console.log('Signed by:', result.signer)
console.log('Signature:', result.signature)
console.log('Public key:', result.signerPublicKey)
```

### Request Options

```ts
interface SignMessageRequest {
  appName: string
  message: string | Uint8Array // UTF-8 string or binary data
  signer?: string // Pre-select address (optional)
}
```

### Response

```ts
interface SignedMessage {
  signer: string // Human-readable address
  signerPublicKey: Uint8Array // Public key of signer
  signature: Uint8Array // Signature bytes
}
```

### Message Prefixing

To prevent signing malicious transaction data, the Keyguard **automatically prefixes** all messages before signing:

```js
// What actually gets signed:
sign(sha256(`\x16Nimiq Signed Message:\n${message.length}${message}`))
```

The prefix `\x16Nimiq Signed Message:\n` (23 bytes) and message length ensure the signed data can't be mistaken for a valid transaction.

### Verifying Signatures

To verify a signed message:

::: code-group

```ts [Nimiq Web Client]
import { BufferUtils, Hash, PublicKey, Signature } from '@nimiq/core'

function verifySignedMessage(
  message: string,
  signature: Uint8Array,
  publicKey: Uint8Array,
): boolean {
  const sig = new Signature(signature)
  const pubKey = new PublicKey(publicKey)

  // Recreate the prefixed message
  const prefix = '\x16Nimiq Signed Message:\n'
  const data = prefix + message.length + message
  const dataBytes = BufferUtils.fromUtf8(data)
  const hash = Hash.computeSha256(dataBytes)

  return sig.verify(pubKey, hash)
}
```

```ts [Custom Implementation]
import { sha256 } from '@noble/hashes/sha256'

function verifySignedMessage(
  message: string,
  signature: Uint8Array,
  publicKey: Uint8Array,
): boolean {
  const prefix = '\x16Nimiq Signed Message:\n'
  const data = prefix + message.length + message

  const encoder = new TextEncoder()
  const dataBytes = encoder.encode(data)
  const hash = sha256(dataBytes)

  // Use your signature verification library
  return verifyEd25519Signature(signature, hash, publicKey)
}
```

:::

### Example: Authentication Flow

```ts
// 1. User clicks "Sign In"
async function signIn() {
  try {
    const challenge = generateRandomChallenge() // Server-provided nonce

    const result = await hubApi.signMessage({
      appName: 'My App',
      message: `Sign in to My App\nChallenge: ${challenge}`,
    })

    // 2. Send to server for verification
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

    const { token } = await response.json()

    // 3. Store auth token
    localStorage.setItem('authToken', token)
    navigateTo('/dashboard')
  }
  catch (error) {
    showError('Sign in failed')
  }
}

// Server-side verification (Node.js)
app.post('/api/auth/verify', (req, res) => {
  const { address, signature, publicKey, challenge } = req.body

  const message = `Sign in to My App\nChallenge: ${challenge}`

  if (verifySignedMessage(message, signature, publicKey)) {
    const token = generateJWT({ address })
    res.json({ token })
  }
  else {
    res.status(401).json({ error: 'Invalid signature' })
  }
})
```

## chooseAddress()

Let users select one of their addresses to provide to your app. **Not for authentication** (use `signMessage()` instead).

### Basic Usage

```ts
const result = await hubApi.chooseAddress({
  appName: 'My App',
})

console.log('Address:', result.address)
console.log('Label:', result.label)
```

### Request Options

```ts
interface ChooseAddressRequest {
  appName: string // Only required field
}
```

### Response

```ts
interface ChooseAddressResult {
  address: string // Human-readable address (NQ...)
  label: string // Address label/name
}
```

::: warning Not for Authentication
`chooseAddress()` does **not** prove the user owns the address. Anyone can provide any address. For authentication, use `signMessage()` instead.
:::

### Example: Receiving Address

```ts
async function getReceivingAddress() {
  try {
    const result = await hubApi.chooseAddress({
      appName: 'My Exchange',
    })

    // Show deposit address to user
    showDepositAddress(result.address, result.label)

    return result.address
  }
  catch (error) {
    showError('No address selected')
  }
}
```

## Method Comparison

| Method | Broadcasts? | Requires Sender? | Requires Height? | Use Case |
|--------|------------|------------------|------------------|----------|
| `checkout()` | ✅ Yes | ❌ No | ❌ No | Simple payments, e-commerce |
| `signTransaction()` | ❌ No | ✅ Yes | ✅ Yes | Offline signing, custom submission |
| `signStaking()` | ❌ No | ✅ Yes | ✅ Yes | Validator operations |
| `signMessage()` | N/A | ❌ No | N/A | Authentication, proof-of-ownership |
| `chooseAddress()` | N/A | N/A | N/A | Get user's address (no proof) |

## Luna vs NIM

All transaction values in the Hub API are specified in **Luna** (the smallest unit):

```ts
// Conversion helper
function nimToLuna(nim: number): number {
  return Math.round(nim * 100000)
}

function lunaToNim(luna: number): number {
  return luna / 100000
}

// Usage
await hubApi.checkout({
  appName: 'My App',
  recipient: address,
  value: nimToLuna(1.5), // 1.5 NIM = 150,000 Luna
})
```

## Next Steps

- Learn about [Account Management](/hub/guide/accounts)
- Explore [Advanced Features](/hub/guide/advanced) (Cashlinks, Swaps, Multi-chain)
- See [Practical Examples](/hub/examples)
- Check the complete [API Reference](/hub/api-reference)
