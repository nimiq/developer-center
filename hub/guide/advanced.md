---
title: Advanced Features
description: Cashlinks, atomic swaps, and multi-chain support
---

# Advanced Features

The Hub API provides advanced features beyond basic transactions: cashlinks for easy value transfer, atomic swaps for trustless cross-chain trading, and multi-chain support for Bitcoin and Polygon.

## Cashlinks

Cashlinks are shareable links that contain claimable value. Anyone with the link can claim the funds — perfect for gifts, promotions, or easy fund transfers without knowing the recipient's address.

### Creating Cashlinks

Use `createCashlink()` to create a new cashlink:

```ts
const cashlink = await hubApi.createCashlink({
  appName: 'My App',
  value: 1000000, // 0.01 NIM in Luna
})

console.log('Cashlink address:', cashlink.address)
console.log('Share this link:', `https://wallet.nimiq.com/cashlink/${cashlink.address}`)
```

### Request Options

```ts
interface CreateCashlinkRequest {
  appName: string
  value: number // Amount in Luna
  message?: string // Message to recipient
  theme?: CashlinkTheme // Visual theme
  returnLink?: string // Return URL after claiming
  skipSharing?: boolean // Skip the sharing screen
}

enum CashlinkTheme {
  UNSPECIFIED = 0,
  STANDARD = 1,
  CHRISTMAS = 2,
  LUNAR_NEW_YEAR = 3,
  EASTER = 4,
  GENERIC = 5,
  BIRTHDAY = 6,
}
```

### Response

```ts
interface Cashlink {
  address: string // Cashlink address (NQ...)
  message?: string // Message to recipient
  value: number // Amount in Luna
  status: CashlinkState // Current state
  theme: CashlinkTheme // Visual theme
  link: string // Full cashlink URL
}

enum CashlinkState {
  UNKNOWN = -1,
  UNCHARGED = 0,
  CHARGING = 1,
  UNCLAIMED = 2,
  CLAIMING = 3,
  CLAIMED = 4,
}
```

### Example: Gift Cashlink

```ts
async function createGiftCashlink(amountNim: number, recipientName: string) {
  try {
    const cashlink = await hubApi.createCashlink({
      appName: 'Gift App',
      value: amountNim * 100000, // Convert NIM to Luna
      message: `A gift for ${recipientName}!`,
      theme: HubApi.CashlinkTheme.BIRTHDAY,
      returnLink: 'https://myapp.com/gift-sent',
    })

    // Share the link
    const shareUrl = `https://wallet.nimiq.com/cashlink/${cashlink.address}`

    await navigator.share({
      title: 'Nimiq Gift',
      text: `You received ${amountNim} NIM!`,
      url: shareUrl,
    })

    showSuccess('Gift cashlink created!')
    return cashlink
  }
  catch (error) {
    showError('Failed to create cashlink')
  }
}
```

### Managing Cashlinks

Use `manageCashlink()` to view or cancel existing cashlinks:

```ts
const cashlink = await hubApi.manageCashlink({
  appName: 'My App',
  cashlinkAddress: 'NQ07 CASH LINK ADDR ESS0 0000 0000 0000 0000',
})

console.log('Cashlink status:', cashlink.status)
```

### Request Options

```ts
interface ManageCashlinkRequest {
  appName: string
  cashlinkAddress: string // Address of existing cashlink
}
```

Users can view the cashlink status and cancel it if unclaimed (funds return to sender).

### Example: Promotional Campaign

```ts
async function createPromoCashlinks(count: number, amountEach: number) {
  const cashlinks = []

  for (let i = 0; i < count; i++) {
    const cashlink = await hubApi.createCashlink({
      appName: 'Promo Campaign',
      value: amountEach * 100000,
      message: 'Welcome to Nimiq! Claim your reward.',
      theme: HubApi.CashlinkTheme.GENERIC,
      skipSharing: true, // We'll handle sharing ourselves
    })

    cashlinks.push({
      code: `PROMO${i.toString().padStart(4, '0')}`,
      link: `https://wallet.nimiq.com/cashlink/${cashlink.address}`,
      address: cashlink.address,
    })
  }

  // Store or distribute the cashlinks
  await saveCashlinksToDatabase(cashlinks)
  return cashlinks
}
```

### Checking Cashlink Status

Cashlinks progress through these states:

1. **UNCHARGED** - Created but not funded yet
2. **CHARGING** - Funding transaction pending
3. **UNCLAIMED** - Funded and ready to claim
4. **CLAIMING** - Being claimed (transaction pending)
5. **CLAIMED** - Successfully claimed

## Atomic Swaps

Atomic swaps enable trustless, peer-to-peer exchanges between Nimiq and other chains (Bitcoin, Polygon) without intermediaries.

### Setting Up a Swap

Use `setupSwap()` to initiate a swap:

```ts
const swapData = await hubApi.setupSwap({
  appName: 'Swap Platform',

  // Assets being swapped
  swapAsset: {
    type: 'NIM',
    amount: 100000000, // 1,000 NIM in Luna
    sender: 'NQ07 MY A DDRE SS00 0000 0000 0000 0000 0000',
  },

  // Assets being received
  receiveAsset: {
    type: 'BTC',
    amount: 5000000, // 0.05 BTC in Satoshi
    recipient: 'bc1q...', // Your Bitcoin address
  },

  // Swap details
  direction: 'NIM-BTC',
})

console.log('Swap contract:', swapData.swapId)
```

### Request Options

```ts
interface SetupSwapRequest {
  appName: string

  swapAsset: {
    type: 'NIM' | 'BTC' | 'EUR'
    amount: number
    sender?: string
  }

  receiveAsset: {
    type: 'NIM' | 'BTC' | 'EUR'
    amount: number
    recipient?: string
  }

  direction: 'NIM-BTC' | 'BTC-NIM' | 'NIM-EUR' | 'EUR-NIM'

  // Optional: For custom swap protocols
  nimiqAddresses?: {
    redeem?: string
    refund?: string
  }
  bitcoinAddresses?: {
    redeem?: string
    refund?: string
  }
}
```

### Response

```ts
interface SetupSwapResult {
  swapId: string
  nimiq?: {
    transactionHash: string
    htlc: {
      address: string
      timeoutTimestamp: number
    }
  }
  bitcoin?: {
    transactionHash: string
    htlc: {
      address: string
      script: string
      timeoutTimestamp: number
    }
  }
}
```

### Refunding a Swap

If a swap fails or times out, use `refundSwap()` to recover funds:

```ts
const refundTx = await hubApi.refundSwap({
  appName: 'Swap Platform',
  swapId: 'swap-id-here',
})

console.log('Refund transaction:', refundTx.hash)
```

### Request Options

```ts
interface RefundSwapRequest {
  appName: string
  swapId: string // ID from setupSwap result
}
```

The refund transaction is signed but not broadcast — you handle submission.

### Example: NIM-BTC Swap Flow

```ts
async function swapNimForBtc(nimAmount: number, btcAmount: number) {
  try {
    // 1. Setup the swap
    const swapData = await hubApi.setupSwap({
      appName: 'NIM-BTC Swap',
      swapAsset: {
        type: 'NIM',
        amount: nimAmount * 100000,
        sender: userNimAddress,
      },
      receiveAsset: {
        type: 'BTC',
        amount: btcAmount * 100000000, // Satoshis
        recipient: userBtcAddress,
      },
      direction: 'NIM-BTC',
    })

    // 2. Share swap details with counterparty
    await shareSwapData(swapData)

    // 3. Monitor swap status
    const completed = await waitForSwapCompletion(swapData.swapId)

    if (completed) {
      showSuccess('Swap completed successfully!')
    }
    else {
      // 4. Refund if swap fails
      const refundTx = await hubApi.refundSwap({
        appName: 'NIM-BTC Swap',
        swapId: swapData.swapId,
      })

      await broadcastTransaction(refundTx)
      showMessage('Swap refunded')
    }
  }
  catch (error) {
    showError('Swap failed')
  }
}
```

::: info Swap Security
Atomic swaps use Hash Time-Locked Contracts (HTLCs) to ensure both parties either complete the swap or get refunded. Neither party can cheat or lose funds.
:::

## Multi-Chain: Bitcoin Support

The Hub can manage Bitcoin addresses and sign Bitcoin transactions.

### Activating Bitcoin

Before using Bitcoin features, users must activate Bitcoin support:

```ts
const account = await hubApi.activateBitcoin({
  appName: 'Multi-Chain Wallet',
})

console.log('Bitcoin activated for account:', account.accountId)
```

### Signing Bitcoin Transactions

Use `signBtcTransaction()` to sign Bitcoin transactions:

```ts
const signedBtcTx = await hubApi.signBtcTransaction({
  appName: 'BTC Wallet',
  inputs: [{
    address: 'bc1q...your-btc-address',
    transactionHash: 'abc123...', // Previous transaction
    outputIndex: 0,
    outputScript: '0014...', // Output script
    value: 100000, // Satoshis
  }],
  output: {
    address: 'bc1q...recipient-address',
    value: 95000, // Satoshis (minus fee)
  },
  changeOutput: {
    address: 'bc1q...your-change-address',
    value: 4000, // Remaining satoshis
  },
})

console.log('Signed BTC transaction:', signedBtcTx.serializedTx)

// Broadcast to Bitcoin network
await broadcastBitcoinTransaction(signedBtcTx.serializedTx)
```

### Request Options

```ts
interface SignBtcTransactionRequest {
  appName: string

  inputs: Array<{
    address: string // Bitcoin address
    transactionHash: string // Previous tx hash
    outputIndex: number // Output index in previous tx
    outputScript: string // Output script (hex)
    value: number // Value in satoshis
    witnessScript?: string
    sequence?: number
  }>

  output: {
    address: string // Recipient address
    value: number // Amount in satoshis
    label?: string
  }

  changeOutput?: {
    address: string // Change address
    value: number // Change amount in satoshis
  }
}
```

### Response

```ts
interface SignedBtcTransaction {
  serializedTx: string // Hex-encoded signed transaction
  hash: string // Transaction hash
}
```

### Adding Bitcoin Addresses (IFrame Only)

From privileged origins, add Bitcoin addresses to an account:

```ts
const result = await hubApi.addBtcAddresses({
  accountId: 'account-id',
  chain: 'bitcoin', // or 'testnet'
  firstKeyId: 0,
})

console.log('Added addresses:', result.addresses)
```

## Multi-Chain: Polygon Support

The Hub can also manage Polygon (MATIC) addresses and sign Polygon transactions.

### Activating Polygon

Similar to Bitcoin, activate Polygon support first:

```ts
const account = await hubApi.activatePolygon({
  appName: 'Multi-Chain Wallet',
})

console.log('Polygon activated for account:', account.accountId)
```

### Signing Polygon Transactions

Use `signPolygonTransaction()` to sign Ethereum-style transactions on Polygon:

```ts
const signedPolygonTx = await hubApi.signPolygonTransaction({
  appName: 'Polygon Wallet',
  recipientAddress: '0x742d35Cc6634C0532925a3b8...', // Ethereum-style address
  value: '1000000000000000000', // Wei (1 MATIC)
  gasLimit: '21000',
  gasPrice: '30000000000', // 30 Gwei
  nonce: 5,
})

console.log('Signed Polygon transaction:', signedPolygonTx.message)

// Broadcast to Polygon network
await web3.eth.sendSignedTransaction(signedPolygonTx.signature)
```

### Request Options

```ts
interface SignPolygonTransactionRequest {
  appName: string
  recipientAddress: string // Ethereum-style address (0x...)
  value: string // Wei (string for large numbers)
  gasLimit: string // Gas limit
  gasPrice?: string // Gas price in Wei (legacy)
  maxFeePerGas?: string // EIP-1559 max fee
  maxPriorityFeePerGas?: string // EIP-1559 priority fee
  nonce: number // Transaction nonce
  data?: string // Contract call data (hex)
}
```

### Response

```ts
interface SignedPolygonTransaction {
  message: Uint8Array // Raw transaction
  signature: Uint8Array // Transaction signature
  signer: string // Signer address (0x...)
}
```

### Example: Send MATIC

```ts
async function sendMatic(recipient: string, amount: number) {
  // Get current nonce
  const nonce = await web3.eth.getTransactionCount(userPolygonAddress)

  // Get current gas price
  const gasPrice = await web3.eth.getGasPrice()

  const signedTx = await hubApi.signPolygonTransaction({
    appName: 'MATIC Wallet',
    recipientAddress: recipient,
    value: web3.utils.toWei(amount.toString(), 'ether'),
    gasLimit: '21000',
    gasPrice: gasPrice.toString(),
    nonce,
  })

  // Broadcast
  const receipt = await web3.eth.sendSignedTransaction(
    `0x${Buffer.from(signedTx.signature).toString('hex')}`
  )

  showSuccess(`Sent ${amount} MATIC!`)
  return receipt.transactionHash
}
```

## Best Practices

### Cashlinks

1. **Set expiration expectations** - Let users know cashlinks don't expire but can be cancelled
2. **Monitor cashlink status** - Check if high-value cashlinks get claimed
3. **Theme appropriately** - Match the theme to the occasion
4. **Include messages** - Personal messages improve the user experience

### Atomic Swaps

1. **Verify exchange rates** - Ensure both parties agree on the rate before swapping
2. **Set reasonable timeouts** - Give enough time for both parties to complete
3. **Handle refunds gracefully** - Monitor swap status and refund if needed
4. **Use trusted counterparties** - Or integrate with a swap service for matching

### Multi-Chain

1. **Check activation status** - Verify Bitcoin/Polygon is activated before requesting signatures
2. **Validate addresses** - Ensure addresses match the correct chain format
3. **Calculate fees carefully** - Different chains have different fee structures
4. **Test on testnets first** - Use Bitcoin testnet and Polygon Mumbai for development

## Chain Comparison

| Feature | Nimiq | Bitcoin | Polygon |
|---------|-------|---------|---------|
| Address Format | `NQ...` | `bc1...`, `1...`, `3...` | `0x...` |
| Unit | Luna (1 NIM = 100k Luna) | Satoshi (1 BTC = 100M) | Wei (1 MATIC = 1e18) |
| Confirmation Time | ~60 seconds | ~10-60 minutes | ~2 seconds |
| Transaction Fee | Very low/free | Variable (sat/vB) | Variable (Gwei) |
| Smart Contracts | ✅ Yes | ❌ Limited | ✅ Yes (EVM) |

## Next Steps

- See [Practical Examples](/hub/examples) for complete implementations
- Check the complete [API Reference](/hub/api-reference)
- Explore the [Nimiq Wallet](https://wallet.nimiq.com) to see these features in action
