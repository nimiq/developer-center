---
icon: i-tabler:wallet
navigation:
  title: Create and Manage Wallets
  order: 3
description: Generate keypairs, derive addresses from mnemonics, use HD derivation paths, and manage keys entirely client-side.
---

# Create and Manage Wallets

The web client includes a full cryptographic toolkit for key management. You can generate random keypairs, derive keys from mnemonic phrases, and use HD (hierarchical deterministic) derivation — all running locally without any server interaction.

These examples assume you have initialized the Nimiq library:

```js
import init, * as Nimiq from '@nimiq/core/web'
await init()
```

## Generate a random keypair

The simplest way to create a new wallet:

```js
const keyPair = Nimiq.KeyPair.generate()

const address = keyPair.toAddress()
console.log(address.toUserFriendlyAddress()) // 'NQ07 ...'
```

The keypair contains a private key (for signing) and a public key (for verification). The address is derived from the public key.

To export and restore a keypair:

```js
// Export
const hex = keyPair.toHex()

// Restore
const restored = Nimiq.KeyPair.fromHex(hex)
```

## Derive from a mnemonic phrase

Mnemonic phrases (BIP39) provide a human-readable backup for keys. The web client supports both BIP39 and legacy Nimiq mnemonics.

```js
const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'

// Convert mnemonic to an extended private key
const extendedKey = Nimiq.MnemonicUtils.mnemonicToExtendedPrivateKey(mnemonic)

// Derive the address
const address = extendedKey.toAddress()
console.log(address.toUserFriendlyAddress())
```

You can also provide a password for additional security:

```js
const extendedKey = Nimiq.MnemonicUtils.mnemonicToExtendedPrivateKey(mnemonic, 'my-passphrase')
```

To detect whether a mnemonic is BIP39 or legacy:

```js
const type = Nimiq.MnemonicUtils.getMnemonicType(mnemonic)
// 1 = BIP39, 0 = Legacy, -1 = Unknown
```

## HD derivation

HD (hierarchical deterministic) derivation lets you generate multiple addresses from a single seed. This is useful for wallets that manage many accounts.

```js
const mnemonic = 'abandon abandon abandon ...'

// Get the seed
const seed = Nimiq.MnemonicUtils.mnemonicToSeed(mnemonic)

// Derive the master key
const masterKey = Nimiq.ExtendedPrivateKey.generateMasterKey(seed)

// Derive child keys using a path
const account0 = masterKey.derivePath("m/44'/242'/0'/0'")
const account1 = masterKey.derivePath("m/44'/242'/1'/0'")

console.log(account0.toAddress().toUserFriendlyAddress())
console.log(account1.toAddress().toUserFriendlyAddress())
```

You can also derive directly from the seed in one step:

```js
const key = Nimiq.ExtendedPrivateKey.derivePathFromSeed("m/44'/242'/0'/0'", seed)
```

To validate a derivation path before using it:

```js
Nimiq.ExtendedPrivateKey.isValidPath("m/44'/242'/0'/0'") // true
```

## Work with addresses

Addresses can be created from strings, public keys, or byte arrays:

```js
// From a user-friendly string
const addr = Nimiq.Address.fromUserFriendlyAddress('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')

// From any supported format (string, Address, Uint8Array)
const addr2 = Nimiq.Address.fromAny('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')

// Format for display
addr.toUserFriendlyAddress() // 'NQ07 0000 ...'
addr.toHex()                 // hex representation

// Compare addresses
addr.equals(addr2) // true
```

## Sign arbitrary data

Keypairs can sign any data, not just transactions:

```js
const keyPair = Nimiq.KeyPair.generate()
const data = new TextEncoder().encode('hello')

const signature = keyPair.sign(data)

// Verify with the public key
const valid = keyPair.publicKey.verify(signature, data) // true
```

## Next steps

- [Send Transactions](./send-transactions) — use your keypair to sign and broadcast NIM transfers
- [Stake NIM](./stake-nim) — delegate your NIM to a validator
- [API Reference](../reference/) — full class documentation for KeyPair, Address, MnemonicUtils, and more
