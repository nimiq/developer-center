---
title: API Reference
icon: i-tabler:book
navigation:
  title: API Reference
  order: 0
description: API reference for the Nimiq Web Client (@nimiq/core) — classes, interfaces, enumerations, and type aliases grouped by domain.
---

# API Reference

Full reference for the `@nimiq/core` package. The entries below are auto-generated from the TypeScript definitions.

<!-- TODO: Improve individual auto-generated reference pages with better descriptions, examples, and cross-links. -->

## Client and Configuration

The main entry points for connecting to the network and configuring the client.

| Class | Description |
| :--- | :--- |
| [Client](./classes/Client) | Core class — connect to the network, query state, send transactions, subscribe to events. |
| [ClientConfiguration](./classes/ClientConfiguration) | Builder for configuring network, sync mode, peers, and logging before creating a client. |
| [Policy](./classes/Policy) | Protocol constants — epoch length, batch size, staking parameters, supply calculations. |

## Accounts and Addresses

Working with on-chain accounts and Nimiq addresses.

| Class / Type | Description |
| :--- | :--- |
| [Address](./classes/Address) | Create, parse, format, and compare Nimiq addresses. |
| [PlainBasicAccount](./interfaces/PlainBasicAccount) | Shape of a basic account returned by `getAccount()`. |
| [PlainStakingContract](./interfaces/PlainStakingContract) | Shape of the staking contract account. |
| [PlainVestingContract](./interfaces/PlainVestingContract) | Shape of a vesting contract account. |
| [PlainHtlcContract](./interfaces/PlainHtlcContract) | Shape of an HTLC (hashed time-locked contract) account. |
| [AccountType](./type-aliases/AccountType) | Enum of account types: basic, vesting, HTLC, staking. |
| [PlainAccount](./type-aliases/PlainAccount) | Union type of all plain account shapes. |

## Transactions

Building, signing, and inspecting transactions.

| Class / Type | Description |
| :--- | :--- |
| [TransactionBuilder](./classes/TransactionBuilder) | Static methods for creating all transaction types — basic transfers, staking, vesting, HTLCs. |
| [Transaction](./classes/Transaction) | Transaction object — sign, serialize, verify, and inspect. |
| [PlainTransaction](./interfaces/PlainTransaction) | Shape of a serialized transaction. |
| [PlainTransactionDetails](./interfaces/PlainTransactionDetails) | Transaction with inclusion state, block hash, and confirmations. |
| [PlainTransactionReceipt](./interfaces/PlainTransactionReceipt) | Lightweight receipt (transaction hash + block height). |
| [TransactionFlag](./type-aliases/TransactionFlag) | Transaction flags (contract creation, signaling). |
| [TransactionFormat](./type-aliases/TransactionFormat) | Transaction format (basic, extended). |
| [TransactionState](./type-aliases/TransactionState) | Transaction lifecycle states (pending, included, etc.). |

## Transaction Data and Proofs

Typed data and proof structures attached to transactions.

| Type | Description |
| :--- | :--- |
| [PlainRawData](./interfaces/PlainRawData) | Raw transaction data payload. |
| [PlainAddStakeData](./interfaces/PlainAddStakeData) | Data for add-stake transactions. |
| [PlainCreateStakerData](./interfaces/PlainCreateStakerData) | Data for create-staker transactions. |
| [PlainCreateValidatorData](./interfaces/PlainCreateValidatorData) | Data for create-validator transactions. |
| [PlainUpdateStakerData](./interfaces/PlainUpdateStakerData) | Data for update-staker transactions. |
| [PlainUpdateValidatorData](./interfaces/PlainUpdateValidatorData) | Data for update-validator transactions. |
| [PlainRetireStakeData](./interfaces/PlainRetireStakeData) | Data for retire-stake transactions. |
| [PlainSetActiveStakeData](./interfaces/PlainSetActiveStakeData) | Data for set-active-stake transactions. |
| [PlainVestingData](./interfaces/PlainVestingData) | Data for vesting contract creation. |
| [PlainHtlcData](./interfaces/PlainHtlcData) | Data for HTLC creation. |
| [PlainRawProof](./interfaces/PlainRawProof) | Raw transaction proof. |
| [PlainStandardProof](./interfaces/PlainStandardProof) | Standard signature proof. |
| [PlainHtlcRegularTransferProof](./interfaces/PlainHtlcRegularTransferProof) | HTLC regular transfer proof (with pre-image). |
| [PlainHtlcEarlyResolveProof](./interfaces/PlainHtlcEarlyResolveProof) | HTLC early resolve proof. |
| [PlainHtlcTimeoutResolveProof](./interfaces/PlainHtlcTimeoutResolveProof) | HTLC timeout resolve proof. |
| [PlainTransactionProof](./type-aliases/PlainTransactionProof) | Union type of all proof shapes. |
| [PlainTransactionRecipientData](./type-aliases/PlainTransactionRecipientData) | Union type of all recipient data shapes. |
| [PlainTransactionSenderData](./type-aliases/PlainTransactionSenderData) | Union type of all sender data shapes. |

## Blocks

Block structures returned by the client.

| Type | Description |
| :--- | :--- |
| [PlainMicroBlock](./interfaces/PlainMicroBlock) | Shape of a micro block (produced by validators each slot). |
| [PlainMacroBlock](./interfaces/PlainMacroBlock) | Shape of a macro block (election and checkpoint blocks). |
| [PlainBlockCommonFields](./interfaces/PlainBlockCommonFields) | Fields shared by both block types. |
| [PlainBlock](./type-aliases/PlainBlock) | Union type of micro and macro blocks. |

## Keys and Cryptography

Key generation, signing, and cryptographic primitives.

| Class | Description |
| :--- | :--- |
| [KeyPair](./classes/KeyPair) | Generate, derive, sign, and serialize Ed25519 keypairs. |
| [PrivateKey](./classes/PrivateKey) | Private key generation and serialization. |
| [PublicKey](./classes/PublicKey) | Public key derivation, verification, and serialization. |
| [Signature](./classes/Signature) | Ed25519 signature. |
| [SignatureProof](./classes/SignatureProof) | Signature proof construction for transactions. |
| [ES256PublicKey](./classes/ES256PublicKey) | ES256 (P-256) public key — used for WebAuthn integration. |
| [ES256Signature](./classes/ES256Signature) | ES256 (P-256) signature. |
| [BLSKeyPair](./classes/BLSKeyPair) | BLS keypair — used for validator voting keys. |
| [BLSPublicKey](./classes/BLSPublicKey) | BLS public key. |
| [BLSSecretKey](./classes/BLSSecretKey) | BLS secret key. |
| [Hash](./classes/Hash) | Hashing utilities (Blake2b, SHA-256). |
| [CryptoUtils](./classes/CryptoUtils) | Shared cryptographic helpers. |
| [MerkleTree](./classes/MerkleTree) | Merkle tree construction and proof verification. |
| [Commitment](./classes/Commitment) | Schnorr commitment for multi-signature schemes. |
| [CommitmentPair](./classes/CommitmentPair) | Commitment pair (secret + commitment). |
| [PartialSignature](./classes/PartialSignature) | Partial signature for multi-signature aggregation. |
| [RandomSecret](./classes/RandomSecret) | Random secret for commitment schemes. |
| [Secret](./classes/Secret) | Base class for cryptographic secrets. |

## Wallets and HD Derivation

Mnemonic phrases, entropy, and hierarchical deterministic key derivation.

| Class | Description |
| :--- | :--- |
| [MnemonicUtils](./classes/MnemonicUtils) | Generate mnemonics, convert to keys/seeds, detect mnemonic type (BIP39 vs legacy). |
| [ExtendedPrivateKey](./classes/ExtendedPrivateKey) | HD key derivation — master key generation, child derivation, path-based derivation. |
| [Entropy](./classes/Entropy) | Entropy generation and conversion for mnemonic phrases. |

## Staking

Validator and staker data structures.

| Type | Description |
| :--- | :--- |
| [PlainValidator](./interfaces/PlainValidator) | Shape of a validator returned by `getValidator()`. |
| [PlainValidatorData](./interfaces/PlainValidatorData) | Validator configuration fields. |
| [PlainStaker](./interfaces/PlainStaker) | Shape of a staker returned by `getStaker()`. |
| [StakingContract](./classes/StakingContract) | Staking contract parsing utilities. |

## Contracts

Vesting and HTLC contract helpers.

| Class | Description |
| :--- | :--- |
| [VestingContract](./classes/VestingContract) | Parse vesting contract data from transactions. |
| [HashedTimeLockedContract](./classes/HashedTimeLockedContract) | Parse HTLC data and proofs from transactions. |

## Utilities

Serialization, formatting, and buffer helpers.

| Class | Description |
| :--- | :--- |
| [SerialBuffer](./classes/SerialBuffer) | Binary serialization buffer for reading and writing typed data. |
| [BufferUtils](./classes/BufferUtils) | Convert between hex, base64, and byte arrays. |
| [NumberUtils](./classes/NumberUtils) | Number formatting and parsing. |
| [StringUtils](./classes/StringUtils) | String utilities. |
| [ArrayUtils](./classes/ArrayUtils) | Array comparison and manipulation. |

## Network and Peers

| Type | Description |
| :--- | :--- |
| [PlainPeerInfo](./interfaces/PlainPeerInfo) | Shape of peer information from peer-change events. |
| [ConsensusState](./type-aliases/ConsensusState) | Consensus state values (connecting, syncing, established). |
| [PlainService](./type-aliases/PlainService) | Network service flags. |

## Initialization

| Type | Description |
| :--- | :--- |
| [default](./functions/default) | The `init()` function for web target — loads the WASM module. |
| [initSync](./functions/initSync) | Synchronous WASM initialization (when async is not available). |
| [InitInput](./type-aliases/InitInput) | Accepted input types for async `init()`. |
| [SyncInitInput](./type-aliases/SyncInitInput) | Accepted input types for `initSync()`. |
| [InitOutput](./interfaces/InitOutput) | Output of WASM initialization. |
| [PlainClientConfiguration](./interfaces/PlainClientConfiguration) | Shape of the built client configuration object. |
