---
title: Bridge contract on the EVM network
description: The state, configuration, functions, revert messages and events of the bridge contract on the EVM network.
icon: i-tabler-file-code
navigation:
  title: Bridge contract
  order: 1
---

# Bridge contract (EVM)

`PolygonBridge` is the bridge contract on the EVM network. It is also the wNIM token itself: wNIM balances are kept in this contract, and its address is the token's address. It mints wNIM when a lock on Nimiq is proven against the [EVM oracle](/bridge/reference/evm/oracle-contract), and it burns wNIM and forwards each burn through that oracle to Nimiq. The contract is named after Polygon, the first network it runs on, but it works on any EVM network that supports Blake2b hashing. To understand how a transfer works end to end, read [Lock and mint](/bridge/how-it-works/lock-and-mint) and [Burn and release](/bridge/how-it-works/burn-and-release).

## Token

The contract is an OpenZeppelin ERC-20 named `WrappedNIM`, with the symbol `wNIM`. `decimals()` returns 5, the same as NIM, so one base unit of wNIM is one luna and amounts move between the networks [without conversion](/bridge/how-it-works/lock-and-mint#units). The standard ERC-20 functions and events apply unchanged.

## State

| Variable | Type | Description |
| --- | --- | --- |
| `oracle` | `address` | The oracle contract every mint proof is checked against and every burn is forwarded through |
| `nimiqBridgeAddress` | `address` | The Nimiq bridge contract, its 20 bytes held as an EVM address. A lock must be sent to it, and a burn names it as the account allowed to release |
| `nimiqNetworkId` | `uint8` | The Nimiq network locks must come from. 0 means not set |
| `lockParsers` | `mapping(uint16 => address)` | The lock parser for each Nimiq protocol version |
| `mintNonces` | `mapping(address => uint64)` | The last mint nonce each destination has used |
| `MINT_AUTHORIZATION_TYPEHASH` | `bytes32` | The EIP-712 type hash of `MintAuthorization(bytes32 leaf)` |

Each one has a public getter of the same name.

## Deploying

Deploying `PolygonBridge` takes no arguments. The account that deploys it becomes its owner, the only account that can configure it. During deployment, the contract checks that the network has the EIP-152 `blake2f` precompile, which it needs to verify mint proofs. On a network without it, deployment fails with `blake2f unavailable`.

A new deployment does nothing until it is [configured](#configuration). `burn` works once the owner has set the oracle and the Nimiq bridge address. `mint` and `mintWithSignature` also need the Nimiq network id and a lock parser for the protocol version the locks were written under.

## Configuration

Only the owner can call these functions. Each setting can be changed at any time, with no delay, which is what makes the owner a [trusted role](/bridge/security-and-trust#the-evm-bridge-contract-owner).

| Function | Sets | Rule | Event |
| --- | --- | --- | --- |
| `setOracle(address _oracle)` | `oracle` | None. An oracle that replaces another must be anchored at or before the oldest lock not yet minted, because a lock before the anchor can never be proven | `OracleSet` |
| `setNimiqBridgeAddress(address _nimiqBridgeAddress)` | `nimiqBridgeAddress` | None | `NimiqBridgeAddressSet` |
| `setNimiqNetworkId(uint8 _nimiqNetworkId)` | `nimiqNetworkId` | Must not be 0. Reverts with `Invalid network id` | `NimiqNetworkIdSet` |
| `setLockParser(uint16 version, address parser)` | `lockParsers[version]` | `parser` must be a contract, or the zero address to remove it. Reverts with `Lock parser is not a contract` | `LockParserSet` |

## Lock parsers

A lock parser reads a Nimiq history record and returns the lock in it. It implements `ILockParser`:

```solidity
interface ILockParser {
    function parseLock(bytes calldata historicTx, bytes20 nimiqBridge)
        external
        view
        returns (NimiqUtils.Lock memory);
}
```

`LockParser` reads the history record encoding the bridge launched with. At deployment, the owner sets it for the current protocol version, and again for every later version that keeps that encoding. A version that changes the encoding needs a new parser. A version without a parser mints nothing, and its locks wait until one is set.

`lockParserFor(uint16 version, uint32 height)` returns the parser for the locks a header commits, because [locks are read by protocol version](/bridge/how-it-works/lock-and-mint#locks-are-read-by-protocol-version). That is the parser of the header's own version, except on the election block that activated the version, whose history is from an epoch of the previous version. It reverts with `No lock parser for the protocol version` if that version has none.

## Ownership

Ownership comes from OpenZeppelin's `Ownable2Step`, and is transferred in two steps.

| Function | Who can call it | Effect |
| --- | --- | --- |
| `owner()` | Anyone | Returns the current owner |
| `pendingOwner()` | Anyone | Returns the nominated owner, or the zero address |
| `transferOwnership(address newOwner)` | Owner | Nominates `newOwner`. Nominating the zero address cancels a pending transfer |
| `acceptOwnership()` | Nominated owner | Makes the caller the owner |
| `renounceOwnership()` | Owner | Sets the owner to the zero address, for good |

After `renounceOwnership`, no configuration function can be called again. The oracle, the Nimiq bridge address, the network id and the lock parsers stay as they are, and a parser for a new protocol version can never be set.

A call from an account without permission reverts with `OwnableUnauthorizedAccount`. The ownership functions emit OpenZeppelin's `OwnershipTransferStarted` and `OwnershipTransferred`.

## Minting

```solidity
function mint(
    bytes calldata historicTx,
    MmrVerifier.MmrProof calldata mmrProof,
    bytes calldata header,
    uint256 index,
    bytes32[] calldata ring
) external;

function mintWithSignature(
    bytes calldata historicTx,
    MmrVerifier.MmrProof calldata mmrProof,
    bytes calldata header,
    uint256 index,
    bytes32[] calldata ring,
    bytes calldata signature
) external;
```

Both take the same [five arguments](/bridge/how-it-works/lock-and-mint#_4-mint-on-the-evm-network) for the proof, and the history tree proof has this structure:

```solidity
struct MmrProof {
    uint64 mmrSize;
    uint64 leafIndex;
    bytes32[] nodes;
}
```

`mint` must be called by the lock's destination. `mintWithSignature` can be called by anyone, with the destination's authorization in `signature`. Either way, the wNIM goes to the destination.

### The mint authorization

The destination authorizes one lock by signing the EIP-712 struct `MintAuthorization(bytes32 leaf)`, where `leaf` is the lock's history tree leaf. The domain is:

| Field | Value |
| --- | --- |
| `name` | `Nimiq Bridge` |
| `version` | `1` |
| `chainId` | The chain the contract is deployed on |
| `verifyingContract` | The contract's address |

`mintAuthorizationDigest(bytes32 leaf)` returns the digest to sign. The contract first tries to recover an ECDSA signer from it, which covers an ordinary account, including one whose code is delegated under EIP-7702. If that does not match the destination, it asks the destination to validate the signature under EIP-1271, which covers a contract wallet.

### When a mint succeeds

A mint is accepted only if it passes every check in [what the contract checks](/bridge/how-it-works/lock-and-mint#what-the-contract-checks). When it succeeds:

- The lock's nonce becomes the destination's entry in `mintNonces`
- The lock's value is minted to the destination, in luna
- `Minted` is emitted

### Revert messages

| Message | Cause |
| --- | --- |
| `Oracle not set`, `Nimiq Bridge address not set`, `Network id not set` | The owner has not configured that setting |
| `EvmOracle: unsupported header version` | The oracle has no header format for the header's version |
| `NimiqUtils: wrong header length` | The header is not the length its version's format gives |
| `MmrVerifier: invalid proof`, `MmrVerifier: invalid leaf` | The history tree proof is malformed |
| `History proof does not match the header` | The history tree proof does not lead to the header's history root |
| `Empty ring proof` | `ring` is empty |
| `EvmOracle: index not written yet` | The oracle has not reached `index` |
| `Header is not in the oracle` | The ring segment does not lead to the oracle's current value for that slot |
| `No lock parser for the protocol version` | The owner has not set a parser for the version the lock was written under |
| A message starting with `NimiqUtils:` | The record is not a successful lock to this bridge. `LockParser` names the reason, for example `NimiqUtils: recipient data is not 56 bytes` |
| `Recipient is not the bridge`, `Sender is the bridge` | The transaction was not sent to the Nimiq bridge, or was sent by it |
| `Wrong Nimiq network` | The header, the record or the transaction is from a different Nimiq network |
| `Lock names another chain`, `Lock names another bridge` | The lock is for a different EVM network or a different bridge contract |
| `Caller is not the destination` | `mint` was called by an account other than the destination |
| `Invalid mint authorization` | `signature` is not the destination's authorization of this lock |
| `Wrong nonce` | The lock's nonce is not one higher than the destination's entry in `mintNonces` |

## Burning

```solidity
function burn(bytes memory target, uint256 nimiq_nonce, uint256 amount) external;
```

| Parameter | Description |
| --- | --- |
| `target` | The 20-byte Nimiq address that receives the NIM and signs the release |
| `nimiq_nonce` | The target's [next release nonce](/bridge/how-it-works/burn-and-release#the-nonce-has-to-be-right) on Nimiq. Only its range is checked here. Whether it is the right one is checked on Nimiq, at release |
| `amount` | The wNIM to burn, in luna |

`burn` destroys `amount` of the caller's wNIM, [forwards the burn](/bridge/how-it-works/burn-and-release#_1-burn-wnim) to the oracle's `forward`, and emits `TokensBurned`.

The forwarded data is 136 bytes, packed in this order:

| Bytes | Field |
| --- | --- |
| 0 to 19 | `target` |
| 20 to 51 | `nimiq_nonce`, as a `uint256` |
| 52 to 83 | `amount`, as a `uint256` |
| 84 to 115 | The chain id of the EVM network, as a `uint256` |
| 116 to 135 | `nimiqBridgeAddress` |

### Revert messages

| Message | Cause |
| --- | --- |
| `Oracle not set`, `Nimiq Bridge address not set` | The owner has not configured that setting |
| `Target must be 20 bytes` | `target` is not 20 bytes long |
| `Nimiq cannot release to this target` | `target` is the Nimiq bridge itself or the zero address, neither of which can sign a release |
| `Nonce must be a positive u64` | `nimiq_nonce` is 0 or above 2^64 − 1, so no release could carry it |
| `Amount must be positive` | `amount` is 0 |
| `Amount exceeds a Nimiq transaction` | `amount` is above 2^53 − 1 luna, the most a Nimiq transaction can carry |
| `ERC20InsufficientBalance` | The caller holds less than `amount` |

## Events

| Event | Emitted on | Fields |
| --- | --- | --- |
| `Minted` | Every mint | `destination` (indexed), `nonce`, `leaf` (indexed), `amount` |
| `TokensBurned` | Every burn | `to` (indexed), `nimiq_nonce`, `amount`, `chain_id` |
| `OracleSet` | `setOracle` | `oracle` (indexed) |
| `NimiqBridgeAddressSet` | `setNimiqBridgeAddress` | `nimiqBridgeAddress` (indexed) |
| `NimiqNetworkIdSet` | `setNimiqNetworkId` | `nimiqNetworkId` |
| `LockParserSet` | `setLockParser` | `version` (indexed), `parser` |

`leaf` in `Minted` is the lock's history tree leaf, so the mint of a given lock can be found by filtering on it. `chain_id` in `TokensBurned` is the chain id of the EVM network the burn was made on.
