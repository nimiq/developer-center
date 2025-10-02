---
title: API Reference
description: Complete reference for all Hub API methods, types, and constants
---

# API Reference

Complete reference documentation for the Nimiq Hub API.

## Methods Overview

| Method | Description | Accessibility |
|--------|-------------|---------------|
| [`checkout()`](#checkout) | Request payment and broadcast transaction | Public |
| [`chooseAddress()`](#chooseaddress) | Get user's address selection | Public |
| [`signTransaction()`](#signtransaction) | Sign transaction offline | Public |
| [`signStaking()`](#signstaking) | Sign staking operations | Public |
| [`signMessage()`](#signmessage) | Sign message for authentication | Public |
| [`createCashlink()`](#createcashlink) | Create shareable cashlink | Public |
| [`manageCashlink()`](#managecashlink) | View/cancel cashlink | Public |
| [`setupSwap()`](#setupswap) | Setup atomic swap | Public |
| [`refundSwap()`](#refundswap) | Refund failed swap | Public |
| [`signBtcTransaction()`](#signbtctransaction) | Sign Bitcoin transaction | Public |
| [`signPolygonTransaction()`](#signpolygontransaction) | Sign Polygon transaction | Public |
| [`onboard()`](#onboard) | Onboard new users | Restricted |
| [`signup()`](#signup) | Create new account | Restricted |
| [`login()`](#login) | User login | Restricted |
| [`logout()`](#logout) | User logout | Restricted |
| [`export()`](#export) | Export account | Restricted |
| [`rename()`](#rename) | Rename account/address | Restricted |
| [`addAddress()`](#addaddress) | Add new address | Restricted |
| [`changePassword()`](#changepassword) | Change password | Restricted |
| [`activateBitcoin()`](#activatebitcoin) | Activate Bitcoin | Restricted |
| [`activatePolygon()`](#activatepolygon) | Activate Polygon | Restricted |
| [`list()`](#list) | List all accounts | IFrame only |
| [`cashlinks()`](#cashlinks) | List all cashlinks | IFrame only |
| [`addBtcAddresses()`](#addbtcaddresses) | Add Bitcoin addresses | IFrame only |

## Transaction Methods

### checkout()

Request a payment from the user. Transaction is signed and automatically broadcast to the network.

```ts
async checkout<R extends CheckoutRequest>(
  request: R,
  requestBehavior?: RequestBehavior
): Promise<SignedTransaction>
```

**Request:**
```ts
interface CheckoutRequest {
  appName: string
  recipient: string
  value: number
  sender?: string
  forceSender?: boolean
  fee?: number
  extraData?: string | Uint8Array
  validityDuration?: number
  shopLogoUrl?: string
  flags?: number
  recipientType?: number
}
```

**Response:** [`SignedTransaction`](#signedtransaction)

[See detailed guide →](/hub/guide/transactions#checkout)

---

### chooseAddress()

Let user select one of their addresses.

```ts
async chooseAddress(
  request: ChooseAddressRequest,
  requestBehavior?: RequestBehavior
): Promise<ChooseAddressResult>
```

**Request:**
```ts
interface ChooseAddressRequest {
  appName: string
}
```

**Response:**
```ts
interface ChooseAddressResult {
  address: string
  label: string
}
```

[See detailed guide →](/hub/guide/transactions#chooseaddress)

---

### signTransaction()

Sign a transaction without broadcasting it.

```ts
async signTransaction(
  request: SignTransactionRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedTransaction>
```

**Request:**
```ts
interface SignTransactionRequest {
  appName: string
  sender: string
  recipient: string
  value: number
  validityStartHeight: number
  fee?: number
  extraData?: string | Uint8Array
  flags?: number
  recipientType?: number
}
```

**Response:** [`SignedTransaction`](#signedtransaction)

[See detailed guide →](/hub/guide/transactions#signtransaction)

---

### signStaking()

Sign staking-related transactions.

```ts
async signStaking(
  request: SignStakingRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedTransaction[]>
```

**Request:**
```ts
interface SignStakingRequest {
  appName: string
  sender: string
  validatorAddress: string
  value: number
  operation: 'stake' | 'unstake' | 'create_validator' | 'update_validator'
  validityStartHeight: number
  signingKey?: string
  votingKey?: string
  rewardAddress?: string
  fee?: number
  extraData?: string | Uint8Array
}
```

**Response:** Array of [`SignedTransaction`](#signedtransaction)

[See detailed guide →](/hub/guide/transactions#signstaking)

---

### signMessage()

Sign an arbitrary message for authentication.

```ts
async signMessage(
  request: SignMessageRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedMessage>
```

**Request:**
```ts
interface SignMessageRequest {
  appName: string
  message: string | Uint8Array
  signer?: string
}
```

**Response:**
```ts
interface SignedMessage {
  signer: string
  signerPublicKey: Uint8Array
  signature: Uint8Array
}
```

**Message Prefix:** `\x16Nimiq Signed Message:\n`

[See detailed guide →](/hub/guide/transactions#signmessage)

## Cashlink Methods

### createCashlink()

Create a new cashlink with claimable funds.

```ts
async createCashlink(
  request: CreateCashlinkRequest,
  requestBehavior?: RequestBehavior
): Promise<Cashlink>
```

**Request:**
```ts
interface CreateCashlinkRequest {
  appName: string
  value: number
  message?: string
  theme?: CashlinkTheme
  returnLink?: string
  skipSharing?: boolean
}
```

**Response:** [`Cashlink`](#cashlink)

[See detailed guide →](/hub/guide/advanced#cashlinks)

---

### manageCashlink()

Manage an existing cashlink (view status, cancel if unclaimed).

```ts
async manageCashlink(
  request: ManageCashlinkRequest,
  requestBehavior?: RequestBehavior
): Promise<Cashlink>
```

**Request:**
```ts
interface ManageCashlinkRequest {
  appName: string
  cashlinkAddress: string
}
```

**Response:** [`Cashlink`](#cashlink)

## Swap Methods

### setupSwap()

Setup an atomic swap between chains.

```ts
async setupSwap(
  request: SetupSwapRequest,
  requestBehavior?: RequestBehavior
): Promise<SetupSwapResult>
```

**Request:**
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
}
```

**Response:**
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

[See detailed guide →](/hub/guide/advanced#atomic-swaps)

---

### refundSwap()

Refund a failed or expired swap.

```ts
async refundSwap(
  request: RefundSwapRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedTransaction | SignedBtcTransaction | SignedPolygonTransaction>
```

**Request:**
```ts
interface RefundSwapRequest {
  appName: string
  swapId: string
}
```

**Response:** Depends on swap type

## Multi-Chain Methods

### signBtcTransaction()

Sign a Bitcoin transaction.

```ts
async signBtcTransaction(
  request: SignBtcTransactionRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedBtcTransaction>
```

**Request:**
```ts
interface SignBtcTransactionRequest {
  appName: string
  inputs: Array<{
    address: string
    transactionHash: string
    outputIndex: number
    outputScript: string
    value: number
    witnessScript?: string
    sequence?: number
  }>
  output: {
    address: string
    value: number
    label?: string
  }
  changeOutput?: {
    address: string
    value: number
  }
}
```

**Response:**
```ts
interface SignedBtcTransaction {
  serializedTx: string
  hash: string
}
```

[See detailed guide →](/hub/guide/advanced#multi-chain-bitcoin-support)

---

### signPolygonTransaction()

Sign a Polygon (EVM) transaction.

```ts
async signPolygonTransaction(
  request: SignPolygonTransactionRequest,
  requestBehavior?: RequestBehavior
): Promise<SignedPolygonTransaction>
```

**Request:**
```ts
interface SignPolygonTransactionRequest {
  appName: string
  recipientAddress: string
  value: string
  gasLimit: string
  gasPrice?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
  nonce: number
  data?: string
}
```

**Response:**
```ts
interface SignedPolygonTransaction {
  message: Uint8Array
  signature: Uint8Array
  signer: string
}
```

[See detailed guide →](/hub/guide/advanced#multi-chain-polygon-support)

---

### activateBitcoin()

Activate Bitcoin support for user's account.

```ts
async activateBitcoin(
  request: SimpleRequest,
  requestBehavior?: RequestBehavior
): Promise<Account>
```

**Request:** [`SimpleRequest`](#simplerequest)

**Response:** [`Account`](#account)

---

### activatePolygon()

Activate Polygon support for user's account.

```ts
async activatePolygon(
  request: SimpleRequest,
  requestBehavior?: RequestBehavior
): Promise<Account>
```

**Request:** [`SimpleRequest`](#simplerequest)

**Response:** [`Account`](#account)

## Account Management Methods

::: warning Restricted Access
These methods are only accessible from Nimiq domains (`*.nimiq.com`) in production. Third-party apps should use `signMessage()` for authentication.
:::

### onboard()

Guide new users through account creation.

```ts
async onboard(
  request: OnboardRequest,
  requestBehavior?: RequestBehavior
): Promise<Account[]>
```

**Request:**
```ts
interface OnboardRequest {
  appName: string
  disableBack?: boolean
}
```

**Response:** Array of [`Account`](#account)

---

### signup()

Create a new account.

```ts
async signup(
  request: BasicRequest,
  requestBehavior?: RequestBehavior
): Promise<Account[]>
```

**Request:** [`BasicRequest`](#basicrequest)

**Response:** Array of [`Account`](#account)

---

### login()

User login with account selection.

```ts
async login(
  request: BasicRequest,
  requestBehavior?: RequestBehavior
): Promise<Account[]>
```

**Request:** [`BasicRequest`](#basicrequest)

**Response:** Array of [`Account`](#account)

---

### logout()

Log out user.

```ts
async logout(
  request: SimpleRequest,
  requestBehavior?: RequestBehavior
): Promise<SimpleResult>
```

**Request:** [`SimpleRequest`](#simplerequest)

**Response:** [`SimpleResult`](#simpleresult)

---

### export()

Export account (backup).

```ts
async export(
  request: ExportRequest,
  requestBehavior?: RequestBehavior
): Promise<ExportResult>
```

**Request:**
```ts
interface ExportRequest {
  appName: string
  accountId: string
}
```

**Response:**
```ts
interface ExportResult {
  success: boolean
}
```

---

### rename()

Rename account or address.

```ts
async rename(
  request: RenameRequest,
  requestBehavior?: RequestBehavior
): Promise<Account>
```

**Request:**
```ts
interface RenameRequest {
  appName: string
  accountId: string
  address?: string
}
```

**Response:** [`Account`](#account)

---

### addAddress()

Add new address to account.

```ts
async addAddress(
  request: SimpleRequest,
  requestBehavior?: RequestBehavior
): Promise<Address>
```

**Request:** [`SimpleRequest`](#simplerequest)

**Response:** [`Address`](#address)

---

### changePassword()

Change Keyguard password.

```ts
async changePassword(
  request: SimpleRequest,
  requestBehavior?: RequestBehavior
): Promise<SimpleResult>
```

**Request:** [`SimpleRequest`](#simplerequest)

**Response:** [`SimpleResult`](#simpleresult)

## IFrame-Only Methods

::: warning IFrame Only
These methods are only available via IFrame behavior from privileged origins.
:::

### list()

Get all user accounts.

```ts
async list(
  requestBehavior?: IFrameRequestBehavior
): Promise<Account[]>
```

**Response:** Array of [`Account`](#account)

---

### cashlinks()

Get all user cashlinks.

```ts
async cashlinks(
  requestBehavior?: IFrameRequestBehavior
): Promise<Cashlink[]>
```

**Response:** Array of [`Cashlink`](#cashlink)

---

### addBtcAddresses()

Add Bitcoin addresses to account.

```ts
async addBtcAddresses(
  request: AddBtcAddressesRequest,
  requestBehavior?: IFrameRequestBehavior
): Promise<AddBtcAddressesResult>
```

**Request:**
```ts
interface AddBtcAddressesRequest {
  accountId: string
  chain: 'bitcoin' | 'testnet'
  firstKeyId: number
}
```

**Response:**
```ts
interface AddBtcAddressesResult {
  addresses: string[]
}
```

## Common Types

### SignedTransaction

```ts
interface SignedTransaction {
  serializedTx: string
  hash: string
  raw: {
    signerPublicKey: Uint8Array
    signature: Uint8Array
    sender: string
    senderType: number
    recipient: string
    recipientType: number
    value: number
    fee: number
    validityStartHeight: number
    extraData: Uint8Array
    flags: number
    networkId: number
  }
}
```

### Account

```ts
interface Account {
  accountId: string
  label: string
  type: AccountType
  addresses: Address[]
}
```

### Address

```ts
interface Address {
  address: string
  label: string
}
```

### Cashlink

```ts
interface Cashlink {
  address: string
  message?: string
  value: number
  status: CashlinkState
  theme: CashlinkTheme
  link: string
}
```

### BasicRequest

```ts
interface BasicRequest {
  appName: string
}
```

### SimpleRequest

```ts
interface SimpleRequest {
  appName: string
}
```

### SimpleResult

```ts
interface SimpleResult {
  success: boolean
}
```

## Enums

### AccountType

```ts
enum AccountType {
  BIP39 = 1,
  LEGACY = 2,
  LEDGER = 3,
}
```

### CashlinkState

```ts
enum CashlinkState {
  UNKNOWN = -1,
  UNCHARGED = 0,
  CHARGING = 1,
  UNCLAIMED = 2,
  CLAIMING = 3,
  CLAIMED = 4,
}
```

### CashlinkTheme

```ts
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

### RequestType

```ts
enum RequestType {
  CHECKOUT = 'checkout',
  CHOOSE_ADDRESS = 'choose-address',
  SIGN_TRANSACTION = 'sign-transaction',
  SIGN_MESSAGE = 'sign-message',
  SIGN_STAKING = 'sign-staking',
  CREATE_CASHLINK = 'create-cashlink',
  MANAGE_CASHLINK = 'manage-cashlink',
  // ... and more
}
```

## Constants

### MSG_PREFIX

Message prefix used in `signMessage()`:

```ts
HubApi.MSG_PREFIX = '\x16Nimiq Signed Message:\n'
```

This prefix ensures signed messages cannot be confused with transaction signatures.

## Request Behaviors

### PopupRequestBehavior

Default behavior. Opens Hub in a popup window.

```ts
const behavior = new HubApi.PopupRequestBehavior(
  'left=100,top=100,width=800,height=850'
)

const hubApi = new HubApi('https://hub.nimiq.com', behavior)
```

### RedirectRequestBehavior

Redirects to Hub and back to your app.

```ts
const behavior = new HubApi.RedirectRequestBehavior(
  'https://myapp.com/return', // Return URL
  { orderId: '123' } // State to preserve
)

const hubApi = new HubApi('https://hub.nimiq.com', behavior)
```

### IFrameRequestBehavior

For privileged origins only.

```ts
const behavior = new HubApi.IFrameRequestBehavior()
const accounts = await hubApi.list(behavior)
```

## Error Handling

All Hub API methods can throw errors. Common error messages:

| Error Message | Meaning |
|--------------|---------|
| `Request was cancelled` | User closed popup or clicked Cancel |
| `Insufficient balance` | Not enough funds |
| `Invalid address` | Malformed address |
| `Network error` | Hub unreachable |
| `popup` (in message) | Popup blocked |

Always wrap Hub calls in try-catch:

```ts
try {
  const result = await hubApi.checkout(options)
}
catch (error) {
  console.error('Hub API error:', error.message)
}
```

## See Also

- [Getting Started Guide](/hub/getting-started)
- [Integration Guide](/hub/guide/integration)
- [Practical Examples](/hub/examples)
- [GitHub Repository](https://github.com/nimiq/hub)
