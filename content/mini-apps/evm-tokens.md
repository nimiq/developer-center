---
title: Using EVM Tokens in Mini Apps
description: Read balances and send ERC-20 tokens like USDT on Polygon through the EVM provider in Nimiq Pay
icon: i-tabler:coins
navigation:
  title: EVM Tokens
  order: 7
---

# Using EVM Tokens in Mini Apps

The Mini Apps Framework exposes a standard EVM provider through `window.ethereum`. This provider works with any EVM-compatible chain supported by Nimiq Pay, including Polygon, Arbitrum, Base, and others. Any ERC-20 token deployed on those chains is accessible through standard contract calls, with no extra setup.

This page uses USDT on Polygon as a working example. The same pattern applies to any ERC-20 token on any supported chain.

## How it works

Nimiq Pay generates an EVM wallet from the user's entropy. This wallet uses the same address across all EVM chains. Your Polygon address, Ethereum address, and Arbitrum address are all the same. What changes is which chain you interact with and which token contract you call.

The model has three layers:

| Layer | What it is | Example |
| --- | --- | --- |
| Provider | The EVM interface injected by Nimiq Pay | `window.ethereum` |
| Chain | An EVM-compatible network | Polygon (chain ID `0x89`) |
| Token | A smart contract deployed on that chain | USDT (`0xc2132...8e8F`) |

No custom provider is needed for Polygon or any other chain. The standard `window.ethereum` provider handles everything.

## Connect and get accounts

Before interacting with any chain or token, request the user's accounts:

```javascript
const accounts = await window.ethereum.request({
  method: 'eth_requestAccounts',
})

const userAddress = accounts[0]
```

This triggers a confirmation dialog in Nimiq Pay. The returned address works on all EVM chains. There is no separate "Polygon address" or "Arbitrum address."

## Switch to Polygon

To interact with tokens on a specific chain, switch the active network:

```javascript
await window.ethereum.request({
  method: 'wallet_switchEthereumChain',
  params: [{ chainId: '0x89' }], // Polygon
})
```

No user confirmation is needed for chain switching. If the chain is not configured, the provider returns error `4902`.

The same method works for any supported chain. Swap the chain ID for the target network. See [Other chains and tokens](#other-chains-and-tokens) for the full list.

## Read a USDT balance

USDT is an ERC-20 token, which means it is a smart contract that follows a standard interface. Every ERC-20 token has a `balanceOf` method that returns how many tokens an address holds.

Calling a smart contract method requires encoding the function call. The examples on this page use [viem](https://viem.sh) for encoding:

```bash
npm install viem
```

```ts
import { encodeFunctionData, formatUnits } from 'viem'

// userAddress from eth_requestAccounts (see "Connect and get accounts")

// USDT contract address on Polygon
const USDT_ADDRESS = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'

// Encode the balanceOf call
const data = encodeFunctionData({
  abi: [{
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  }],
  functionName: 'balanceOf',
  args: [userAddress],
})

// Call the contract (read-only, no confirmation needed)
const rawBalance = await window.ethereum.request({
  method: 'eth_call',
  params: [{ to: USDT_ADDRESS, data }, 'latest'],
})

// Convert from raw units to human-readable
// USDT uses 6 decimals: 1 USDT = 1,000,000 raw units
const balance = formatUnits(BigInt(rawBalance), 6)
console.log(`USDT balance: ${balance}`)
```

**A note on decimals:** USDT and USDC use 6 decimal places, not the 18 used by most ERC-20 tokens. Always use the token's actual `decimals` value when parsing or formatting amounts. A 1 USDT balance displayed with 18 decimals would show as `0.000000000001` instead of `1.0`.

## Send a USDT transfer

To send USDT, call the `transfer` method on the token contract. This triggers the native Nimiq Pay approval dialog. The user sees the transaction details and approves it. Keys never leave the wallet.

When sending ERC-20 tokens through a mini app, the transaction goes through the EVM provider `window.ethereum`. This is different from sending USDT natively through Nimiq Pay's, which uses gas abstraction. In a mini app, standard EVM gas rules apply.

::callout{icon="i-tabler-alert-triangle" color="warning" title="Gas fees"}
The user must hold the native token of the chain to cover gas fees. On Polygon, this is POL (formerly MATIC). On Ethereum and Arbitrum, ETH. If the user has no native token balance, the transaction will fail.
::

```ts
import { encodeFunctionData, parseUnits } from 'viem'

// userAddress from eth_requestAccounts (see "Connect and get accounts")

const USDT_ADDRESS = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'

// Encode the transfer: send 10 USDT to a recipient
const data = encodeFunctionData({
  abi: [{
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
  }],
  functionName: 'transfer',
  args: [
    '0x1234567890abcdef1234567890abcdef12345678', // recipient address
    parseUnits('10', 6), // 10 USDT (6 decimals)
  ],
})

// Send the transaction
const txHash = await window.ethereum.request({
  method: 'eth_sendTransaction',
  params: [{
    from: userAddress,
    to: USDT_ADDRESS, // the contract address, not the recipient
    data,
    value: '0x0', // no native token value; this is a contract call
  }],
})
```

Two things to notice:

- The `to` field is the **token contract address**, not the recipient. The actual recipient is encoded in the `data` field as an argument to `transfer`.
- The `value` is `0x0` because you are not sending native tokens (like MATIC). You are calling a contract method that moves USDT on your behalf.

## Other libraries

The examples above use [viem](https://viem.sh) for ABI encoding. Any EVM library that accepts an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) provider works with the Mini Apps provider:

- **[ethers.js](https://docs.ethers.org)**: use `Contract` with the ERC-20 ABI and a `BrowserProvider` wrapping `window.ethereum`
- **[wagmi](https://wagmi.sh)**: use `useSendTransaction` and `useReadContract` composables with the injected provider

Pick whichever library your stack already uses. The underlying provider is the same.

## Full working example

For a complete mini app that connects to Nimiq Pay's EVM wallet and handles sends, receives, and balance tracking across all supported chains, see the reference implementation: [github.com/Albermonte/evm-mini-wallet](https://github.com/Albermonte/evm-mini-wallet)

Built with Vue, viem, and wagmi, it demonstrates wallet connection via EIP-6963, chain switching, ERC-20 balance reading with multicall, and token transfers with gas estimation.

## Other chains and tokens

The same pattern applies to any EVM-compatible chain in the [supported list](/mini-apps/#supported-networks) and any ERC-20 token on those chains. Swap the chain ID and contract address:

| Chain | Chain ID | USDT address |
| --- | --- | --- |
| Polygon | `0x89` | `0xc2132D05D31c914a87C6611C10748AEb04B58e8F` |
| Ethereum | `0x1` | `0xdAC17F958D2ee523a2206206994597C13D831ec7` |
| Arbitrum One | `0xa4b1` | `0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9` |
| Optimism | `0xa` | `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58` |

For tokens other than USDT, replace the contract address and check the token's `decimals` value. A list of well-known tokens per chain is available in the [reference implementation](https://github.com/Albermonte/evm-mini-wallet/blob/main/src/utils/well-known-tokens.ts).

For the full Ethereum provider API, see the [Ethereum Provider API reference](/mini-apps/api-reference/ethereum-provider).
