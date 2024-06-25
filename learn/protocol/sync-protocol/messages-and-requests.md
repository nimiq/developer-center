# Messages and Requests

Nodes communicate in two ways:

- One-to-one communication with messages and requests
- One-to-many communication by gossiping

Nodes identify each message or request by the `TYPE_ID` and their `RequestKind`. Messages have a `MessageMarker` and don’t require a response, and requests have a `RequestMarker` and always require a response. For simplicity, we will focus on the interactions of messages and requests between node A and node B.

## Validator Message/Request
These messages and requests are specific to validators.

### `10_199` Request Proposal

Tendermint proposals are gossiped among validators so they can vote on them. However, validators can miss a proposal and notice it by witnessing other validators vote on it. In this specific context, the validator missing the proposal can send this request and receive the proposal in question.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `validator_id` | `u16` | Identifies the validator sending the request. This allows the receiver to quickly verify that the validator ID matches the sender |
| `block_number` | `u32` | The corresponding block of the proposal |
| `round_number` | `u32` | The round number of the round the node is missing |
| `proposal_hash` | `Blake2sHash` | The hash of the block proposal |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `proposal` | `MacroHeader` | The macro block header proposal |
| `round` | `u32` | The round number of the corresponding proposal |
| `valid_round` | `Option<u32>` | Indicates if it is a valid proposal |
| `signature` | SchnorrSignature | The signature of the block’s leader |
| `signer` | u16 | The signer of the sender of the request |

### `10_124` Tendermint Update - Message

| Field | Type | Description |
| --- | --- | --- |
| `message` | `TaggedAggregationMessage<AggregateMessage>` | The aggregated message containing validator signatures |
| `height` | `u32` | The height of the Tendermint proposal |

### `10_123` Skip Block Update - Message

| Field | Type | Description |
| --- | --- | --- |
| `level_update` | `LevelUpdate<SignedSkipBlockMessage>` | The level update containing the signed skip block message |
| `info` | `SkipBlockInfo` | Contains information about the skip block |

Messages are used to notify other nodes about votes for skip blocks and Tendermint proposals. The Handel aggregation protocol facilitates this process by aggregating small sets of votes into a single signature. These votes are processed in levels, with aggregated signatures passed from one level to the next until a single aggregated signature is obtained. This final signature determines whether the conditions for producing a skip block or a macro block are met.

## Requests

Requests guide nodes in the blockchain, whether for sync, resync, to subscribe for addresses, or to locate a node in the chain. Node A requests and node B provides the data requested.

| ID Type | Name | Description |
| --- | --- | --- |
| `200` | [Request Macro Chain](messages-and-requests#_200-request-macro-chain) | Request for all the election blocks and the last checkpoint blocks of the latest batch |
| `202` | [Request Batch Set](messages-and-requests#_202-request-batch-set) | Request for the information of a batch |
| `204` | [Request History Chunk](messages-and-requests#_204-request-history-chunk) | Request the history chunk of a specific index |
| `207` | [Request Block](messages-and-requests#_207-request-block) | Request for a block given a block hash |
| `209` | [Request Missing Blocks](messages-and-requests#_209-request-missing-blocks) | Request any missing blocks given a block hash |
| `210` | [Request Head](messages-and-requests#_210-request-head) | Request the block header of a given block hash |
| `211` | [Request ZKP](messages-and-requests#_211-request-zkp) | Request a zkp for sync or resync |
| `212` | [Request Chunk](messages-and-requests#_212-request-chunk) | Request for a specific part of the the state trie |
| `213` | [Request Transactions Proof](messages-and-requests#_213-request-transactions-proof) | Request for a proof on a specific transaction |
| `214` | [Request Transaction Receipts by Address](messages-and-requests#_214-request-transaction-receipts-by-address) | Request for a set of receipts of a specific address |
| `215` | [Request Trie Proof](messages-and-requests#_215-request-trie-proof) | Request for a proof of a specific address balance |
| `216` | [Request Blocks Proof](messages-and-requests#_216-request-blocks-proof) | Request for a proof on a specific block |
| `217` | [Request Subscribe to Address](messages-and-requests#_217-request-subscribe-to-address) | Request for a specific address subscription |
| `218` | [Request Trie Diff](messages-and-requests#_218-request-trie-diff) | Request for differences in the trie to complete a partial trie based on a block hash |

### `200` Request Macro Chain

This request guides a node within the macro chain. If the node is far from the desired point and `max_epochs` is set low, it may need multiple requests to different peers.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `locators` | `Vec<Blake2bHash>` | A vector block hashes that the node knows to guide the network to identify the position of the node |
| `max_epochs` | `u16` | The maximum number of epochs the node wishes to receive in response per request. The node can send this request to multiple peers if necessary |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `epochs` | `Option<Vec<Blake2bHash>>` | A list of hashes of the election blocks following the provided locators. If the `max_epochs` limit is not sufficient to reach the most recent election block, the node may need to send additional requests |
| `checkpoint` | `Option<Checkpoint>` | The last checkpoint block of the most recent epoch included in the response |

### `202` Request Batch Set

Given the hash from the last request, node A can request node B's information about the given batch. This request follows the response from request `200`, where the vector of hashes received is used to feed into this request.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `hash` | `Blake2bHash` | The hash of the last response from request `200`; this request should be made for each hash received in the `200` response |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `election_macro_block` | `Option<MacroBlock>` | The election block of the given batch |
| `batch_sets` | `Vec<BatchSet>` | A vector of batch sets |

Each `BatchSet` includes the following:

| Field | Type | Description |
| --- | --- | --- |
| `macro_block` | `Option<MacroBlock>` | The closing macro block of the given batch |
| `history_len` | `u32` | The total history length of the given macro block |

### `204` Request History Chunk

Transactions are stored in the history tree, and nodes that want to know parts of the transaction history must request it in chunks. Each history chunk has around 1000 items, so the node can request several chunks from multiple other nodes to build its history tree and, in the end, calculate its history root hash against the chain’s history root hash.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `epoch_number` | `u32` | The epoch number for which the node wants to receive history items |
| `block_number` | `u32` | The block number of the last macro block of the corresponding chunk index |
| `chunk_index` | `u64` | The range of history items the node wants to receive. For example, if set to 2, the history items from 1000 to 1999 are requested |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `chunk` | `Option<HistoryTreeChunk>` | The requested chunk of history items, if available |

The `HistoryTreeChunk` provides both the proof and the actual history of transactions within the requested chunk. This ensures the integrity and completeness of the historical data being requested.

### `207` Request Block

This request allows a node to obtain a specific block by its hash, optionally including the body of a micro block.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `hash` | `Blake2bHash` | The hash of the block that is being requested |
| `include_micro_bodies` | `bool` | Indicates whether to include the body if the requested block is a micro block |

**Response**

The node receives either a `MicroBlock` or a `MacroBlock`.

### `209` Request Missing Blocks

This request allows node A to fetch any blocks that it misses, using known block hashes as locators to identify the blocks it needs.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `target_hash` | `Blake2bHash` | The hash of the block that is being targeted; the nodes knows this hash because of previous requests |
| `include_micro_bodies` | `bool` | Indicates whether to include bodies for micro blocks |
| `locators` | `Vec<Blake2bHash>`| A set of hashes of blocks known to the requester, ordered from newest to oldest |
| `direction` | `Direction` | The direction indicates whether to search **forward** (main chain blocks only) or **backward** (including blocks from inferior chains, more resource-intensive) |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `Option<Vec<Block>>` | An optional vector of blocks. If the request is successful, this field contains the blocks that were requested |

### `210` Request Head

This request has no fields and serves to check if the node is synced with others.

**Request**

| Request | Description |
| --- | --- |
| `RequestHead{}` | empty request |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `micro` | `Blake2bHash` | The hash of the current micro block |
| `r#macro` | `Blake2bHash` | The hash of the current macro block |
| `election` | `Blake2bHash` | The hash of the current election block |

### `211` Request ZKP

Light and full nodes use this request to sync with the blockchain by obtaining a light proof instead of downloading all blocks.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `block_number` | `u32` | Specifies the block number the node already has (can be the Genesis block if it is first connecting). |
| `request_election_block` | `bool` | Indicates whether the node wants only the proof or the proof along with the corresponding election block. |

**Response**

The node receives a `RequestZKPResponse` enum, which can be one of the following:

| Variant | Type | Description |
| --- | --- | --- |
| `Proof` | `(ZKProof, Option<MacroBlock>)` | Contains a `ZKProof` and an optional `MacroBlock` |
| `Outdated` | `u32` | Indicates that the node's given block number is outdated |

### `212` Request Chunk

This request is used by full nodes to sync with the blockchain state by requesting chunks of data as the blockchain progresses. Nodes can request one chunk at a time, using the data received in the previous request to make the subsequent request, until they are up-to-date and their local state matches the network state.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `start_key` | `KeyNibbles` | The last part of the state tree the node knows (from the previous response) |
| `limit` | `u32` | The maximum size of the chunk per request |

**Response**

The node receives a `ResponseChunk` enum, which can be one of the following:

| Variant | Type | Description |
| --- | --- | --- |
| `Chunk` | `Chunk` | Contains the chunk of the state tree that the node needs to add to its partial trie |
| `IncompleteState` | None | Indicates that the node's state is incomplete and needs further chunks |

Fields of `Chunk`:

| Field | Type | Description |
| --- | --- | --- |
| `block_number` | u32 | The block number corresponding to the chunk |
| `block_hash` | Blake2bHash | The block hash corresponding to the chunk |
| `chunk` | `TrieChunk` | The chunk of the state tree that the node needs |

### `213` Request Transactions Proof

This request is specific for light nodes that want a proof of a specific transaction. Only history and full nodes respond to this request.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `hashes` | `Vec<Blake2bHash>`| The hashes of the transactions |
| `block_number` | `Option<u32>` | The block number of the corresponding transactions (optional) |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `proof` | `Option<HistoryTreeProof>` | The proof that includes the extended transactions (optional) |
| `block` | `Option<Block>` | The complete block (optional) |

### `214` Request Transaction Receipts by Address

This request is used to obtain transaction receipts for a specific address. Only history nodes can respond to this request.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `address` | `Address` | The address for which the node wants to obtain receipts |
| `max` | `Option<u16>` | The maximum number of receipts per request (optional) |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `receipts` | `Vec<(Blake2bHash, u32)>` | A vector of tuples containing the transaction hashes and corresponding block numbers |

### `215` Request Trie Proof

This request is used to prove the balance of specific addresses.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `keys` | `Vec<KeyNibbles>` | Addresses for which the accounts trie proof is requested. This consists of an internal representation of the address |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `proof` | `Option<TrieProof>` | The accounts’ trie proof (optional) |
| `block_hash` | `Option<Blake2bHash>` | The hash of the block corresponding to the proof (optional) |

### `216` Request Blocks Proof

This request is used to obtain a list of election macro blocks that reference each other. It is used to prove that a block is in the blockchain.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `election_head` | u32 | The block number of the corresponding election macro block header |
| `blocks` | `Vec<u32>` | A vector of block numbers for which proof is requested |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `proof` | `Option<BlockInclusionProof>` | The proof consists of an interlink chain from the current election head down to the target block (optional) |

### `217` Request Subscribe to Address

This request is used to subscribe or unsubscribe to updates for specific addresses.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `operation` | `AddressSubscriptionOperation` | The type of subscription operation: subscribe or unsubscribe |
| `addresses` | `Vec<Address>` | A list of addresses that are of interest to the peer |

**Response**

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Result<(), SubscribeToAddressesError>` | The result of the subscription request. This indicates success or provides an error if the request failed |

### `218` Request Trie Diff

This request is used by nodes that are building their partial trie and may need to download the missing parts to complete their trie. It helps nodes to synchronize their state by obtaining the necessary differences for a specific block, especially when they depend on parts that have not been downloaded yet.

**Request**

| Field | Type | Description |
| --- | --- | --- |
| `block_hash` | `Blake2bHash` | The hash of the block for which the trie differences are requested |

**Response**

The node receives a `ResponseTrieDiff` enum, which can be one of the following:

| Variant | Description |
| --- | --- |
| `PartialDiff(TrieDiff)` | Contains the differences in the trie needed to complete the partial trie |
| `UnknownBlockHash` | Indicates that the provided block hash is unknown |
| `IncompleteState` | Indicates that the node's state is incomplete and further differences are needed |
