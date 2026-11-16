---
title: Bridge contract on Nimiq
description: The state, transactions and logs of the bridge contract on Nimiq.
icon: i-tabler-file-code
navigation:
  title: Bridge contract
  order: 1
---

# Bridge contract (Nimiq)

The bridge contract is the Nimiq account type that holds [locked](/bridge/how-it-works/lock-and-mint) NIM and pays it out when a [burn](/bridge/how-it-works/burn-and-release) on the other network is proven. Each bridge contract serves one other network, described by its [chain configuration](/bridge/reference/nimiq/chain-config), and checks every release against one [oracle contract](/bridge/reference/nimiq/oracle-contract) on Nimiq.

## Account state

```rust
pub struct BridgeContract {
    pub owner: Address,
    pub oracle_address: Address,
    pub balance: Coin,
    pub source_chain_id: u32,
    pub chain_config: ChainConfig,
    pub transaction_count: u64,
}
```

| Field | Type | Description |
| --- | --- | --- |
| `owner` | `Address` | Set at creation. Gives no authority over the contract. No check reads it and no transaction changes it |
| `oracle_address` | `Address` | The oracle contract every release proof is checked against. Fixed at creation |
| `balance` | `Coin` | The NIM the contract holds, made up of the creation deposit and every lock, minus every release |
| `source_chain_id` | `u32` | The chain id of the other network. Every record a release carries must name it |
| `chain_config` | `ChainConfig` | How the contract reads the other network's records. See [Chain configuration](/bridge/reference/nimiq/chain-config) |
| `transaction_count` | `u64` | Starts at 0 and increases by one with every lock and every release. No check reads it |

Read through RPC, a bridge account shows its balance, `owner`, `oracleAddress`, `sourceChainId` and `transactionCount`. It does not show the chain configuration, which is only in the transaction that created the contract.

## Release nonces

For every address it has released NIM to, the contract stores the last nonce released to that address. These values are kept in the accounts tree under the contract's address, alongside the account rather than inside it.

An address with no stored value counts as 0, so the first release to it carries nonce 1. A release must carry exactly one more than the stored value, and on success it replaces it. Reverting the block restores the previous value.

`getBridgeNonce(bridgeAddress, address)` returns the stored value. It is answered by full nodes only. A node that is still syncing its accounts tree, and has not yet synced the contract's nonces, returns a no-consensus error rather than a value.

## Creating a bridge contract

A bridge contract is created by a transaction with the contract creation flag, sent to the address the protocol derives for the new contract. Its `value` is the creation deposit and goes into the contract's balance. Its `recipient_data` holds the creation data:

```rust
pub struct CreationTransactionData {
    pub owner: Address,
    pub oracle_address: Address,
    pub source_chain_id: u32,
    pub chain_config: ChainConfig,
}
```

The transaction is rejected unless it passes the [creation checks](/bridge/reference/nimiq/chain-config#creation-checks). Everything it sets is permanent. No transaction changes a bridge contract's oracle, source chain id or chain configuration afterward.

`createNewBridgeTransaction` and `sendNewBridgeTransaction` build this transaction on a node, signed by a wallet unlocked on that node. They take the chain configuration as a hex-encoded serialized `ChainConfig`.

## Locks

Any ordinary transaction to a bridge contract is a lock. Its value is added to the balance, and the transaction count increases by one. Nimiq does not read a lock's `recipient_data`. The layout the EVM bridge contract expects is described in [Lock and mint](/bridge/how-it-works/lock-and-mint), and it is only enforced when the mint is attempted.

Signaling transactions to a bridge contract are invalid.

## Releases

A release is a transaction sent from the bridge contract to the target of a burn:

| Field | Value |
| --- | --- |
| `sender` | The bridge contract |
| `recipient` | The target address named in the burn record |
| `value` | The NIM the target receives. Must not be zero |
| `fee` | Taken from the burned amount. `value` plus `fee` must equal the burned amount exactly |
| `sender_data` | The release data |

```rust
pub struct OutgoingBridgeTransactionData {
    pub burn_proof: OutgoingTransaction,
    pub proof: SignatureProof,
}

pub struct OutgoingTransaction {
    pub burn_transaction_data: Vec<u8>,
    pub merkle_proof: AnyMerkleProof,
    pub oracle_state_index: u64,
}
```

| Field | Description |
| --- | --- |
| `burn_transaction_data` | The burn record, as the relayer committed it. The [validation program](/bridge/reference/nimiq/chain-config#the-validation-program) reads it |
| `merkle_proof` | A Merkle path from the record to the current value of the oracle slot, in the configuration's hash function |
| `oracle_state_index` | The oracle index the root of the record tree was written at |
| `proof` | The target's signature over the transaction, made with `proof` left empty |

A release is accepted only if it passes every check in [what the contract checks](/bridge/how-it-works/burn-and-release#what-the-contract-checks). If one fails, the release is [invalid rather than failed](/bridge/how-it-works/burn-and-release#a-release-either-succeeds-or-is-invalid). A block containing it is invalid, and nobody pays for it.

When a release succeeds:

- The balance decreases by the burned amount, `value` plus `fee`.
- The target receives `value`, and the fee goes to the block reward.
- The burn's nonce is stored for the target.
- The transaction count increases by one.

The mempool reserves `value` plus `fee` against the contract's balance, as it does for any sender.

## Logs

Each log appears in RPC responses with the `type` and fields below.

| `type` | Emitted on | Fields |
| --- | --- | --- |
| `bridge-create` | Creation | `contractAddress`, `owner`, `oracleAddress`, `sourceChainId`, `deposit` |
| `bridge-incoming` | Every lock | `contractAddress`, `sender`, `value` |
| `bridge-outgoing` | Every release | `contractAddress`, `recipient`, `value` |

`value` in `bridge-outgoing` is the amount the target receives, without the fee. A release also emits a `pay-fee` log for its fee.
