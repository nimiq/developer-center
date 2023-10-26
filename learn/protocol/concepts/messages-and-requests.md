# Messages and requests

Nodes communicate in two ways:

- One-to-one with messages or requests
- One-to-many with gossiping

<br/>

This document explores direct communication from node A to node B. The following are the messages or requests nodes can make.

<br/>

In Albatross, we feature two types of communication:

- Messages: a message from one node to another that doesn’t require an answer.
- Requests: a request from one node to another that requires an answer.

<br/>

Nodes identify each message or request by the `TYPE_ID`. For instance, node B knows what data to send when node A asks for the request `TYPE_ID: u16 = 207`.

<br/>

# Messages

Messages are a one-way operation. Node A sends the message to node B, and node A doesn't expect a message back.

<br/>

We support two messages sent at specific times when aggregating signatures for skip blocks and Tendermint proposals. Validators are expected to vote for a skip block and a Tendermint proposal. The message consists of node A sending a portion of his signature to node B for signature aggregation. Node B can produce the aggregated signature given node A's signature portion (and other nodes' signature portions).

<br/>

The proof for either a skip block message or a Tendermint contribution is complete once it reaches at least 2*f*+1 signatures.

<br/>

The main difference between these two message types is that anyone can vote for a skip block, whereas in a macro block proposal, a validator is elected to propose. Tendermint constantly listens to proposals on which the rest of the validators can vote. The protocol allows multiple proposals by mapping them so that validators can vote or vote _nil_ for a proposal and stop listening to proposals once the first one gets 2*f*+1 precommit votes.

<br/>

# Requests

Node A requests data from node B. These requests are based on a request-response mechanism. If node B doesn’t know the information that node A is asking, node A can ask another node until node A finds a response.

<br/>

| ID Type | Identifier           |
| ------- | -------------------- |
| 200     | RequestMacroChain    |
| 202     | RequestBatchSet      |
| 204     | RequestHistoryChunk  |
| 207     | RequestBlock         |
| 209     | RequestMissingBlocks |
| 210     | RequestHead          |
| 211     | RequestZKP           |

<br/>

## Consensus related

The following requests are consensus-related and are used to guide nodes through the state, identify another node’s state, or fetch missing blocks.

<br/>

### Macro chain

| Request     | Description                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `locators`  | a vector of hashes of the blocks node A knows; given these locators, node B knows from where to start to send data |
| `max_epoch` | the maximum amount of election macro blocks node A knows + the last checkpoint macro block                         |

| Response     | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `epochs`     | a vector of hashes the last epochs node B knows                 |
| `checkpoint` | the last checkpoint macro block (the `block_number` and `hash`) |

Suppose node A is out of sync or just joined consensus. This request results in node B providing the macro chain corresponding to the locator's node A provides, so node A can confirm at which point of the chain is and move forward accordingly.

<br/>

If node B doesn’t recognize the locators given by node A, node B responds with an empty chain, and node A can ask another node for the macro chain. Node A can use part of the response from this request to make the following one.

<br/>

### Batch Set

| Request | Description                                             |
| ------- | ------------------------------------------------------- |
| `hash`  | the hash of the previous response (macro chain request) |

| Response      | Description                                             |
| ------------- | ------------------------------------------------------- |
| `macro_block` | the election macro block of the corresponding epoch     |
| `history_len` | the amount of history items that that epoch consists of |

<br/>

Node A provides the data received from the previous request and asks for the most recent batch information. This will also give node A an idea of how many history items it has to fetch.

<br/>

### History Chunk

| Request        | Description                                               |
| -------------- | --------------------------------------------------------- |
| `epoch_number` | the epoch number of the last epoch node A knows           |
| `block_number` | the last macro block from the corresponding `chunk_index` |
| `chunk_index`  | a range of history items                                  |

| Response | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| `chunk`  | history tree chunk that will prove that are more history chunks from that point on |

<br/>

The response to this request is the proof node A needs to compute the `history_root` hash out of the information node A has plus the information that was given. Node A can now compare the macro block `history_root` with the `history_root` node A is building.

<br/>

There are multiple history items within an epoch. A history chunk is a fixed number of history items stored in the history tree. A chunk will include _x_ amount of blocks with multiple checkpoint macro blocks in between. The `block_number` will be the closing macro block of the corresponding `chunk_index`, which isn’t necessarily an election macro block.

<br/>

For this request, node A can ask for chunks of history items from many other nodes. If there are 10000 history items to download, node A can request node B the `chunk_index` of 1 that comprises history items from 1 to 999; then node A asks node C the `chunk_index` of 2 that will include history items from 1000 to 1999, and so on until it has the `chunk` node A needs. By compiling all the chunks from multiple nodes, node A can compute the `history_root`.

<br/>

### Block

| Request | Description                                   |
| ------- | --------------------------------------------- |
| `hash`  | the hash of the last macro block node A knows |

| Response | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| `blocks` | a vector of hashes of the blocks preceding the given macro block |

<br/>

If node B doesn’t know that hash, it will provide an empty response, and node A can ask another node. This request is used to verify at which point the chain node A is.

<br/>

### Missing Blocks

| Request    | Description                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------- |
| `locators` | a vector of hashes of all blocks of the current epoch node A knows, including the last macro block |

| Response | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `blocks` | a vector of hashes of all the blocks that make up the blocks that are missing |

<br/>

The blocks node A is requesting are, most likely, all micro blocks. Node A has been syncing, and it is closer to node B's state, so there should be only micro blocks to fetch. Still, node A must include the last macro block in that request in case it has to revert blocks, considering a lower chain was built.

<br/>

This request is particularly useful when syncing to the state. Based on the last request, node A knows it is near node B's state. But, requesting the blocks from node B's state isn’t feasible as by the time node A receives the blocks he requested and applies them to his chain, the state has progressed, and node A will be out of the state again as the state moves forward.

<br/>

Node A can manage to get to the node’s B state by starting listening blocks as they arrive (it will be in the same state as node B), and node B can use node A’s locators to respond with the blocks that are missing.

<br/>

When node A receives the missing blocks, it can apply those to its chain and continue to listen to new blocks and add those as well. This way, node A guarantees it is in the same state as node B and that there aren’t missing blocks in between.

<br/>

### Block Head

| Request         | Description   |
| --------------- | ------------- |
| `RequestHead{}` | empty request |

| Response | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `head`   | the block identifier; either micro, checkpoint, or election macro block |

<br/>

This request serves the sole purpose of node A to know if it is in the same state as node B. It is an empty request that node A can send to know whether it is in the same state as node B or how ahead it is from node B. If node B sends a block head node A doesn’t know about, node A can request block requests and sync accordingly.

<br/>

Requesting the block’s head is particularly useful and is recurrently used to pinpoint where other clients are in the chain and whether the node asking is in the same state.

<br/>

### ZKP

| Request                  | Description                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block_number`           | the block that node A has a proof                                                                                                                  |
| `request_election_block` | consists of a boolean: if true, node A is requesting the proof and the corresponding election block; if false, node A is requesting only the proof |

| Response     | Description                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| `ZKProof`    | the proof that consists of a block strictly greater than the `block_number` specified in the request |
| `MacroBlock` | the corresponding election macro block                                                               |

<br/>

This is the request for zero-knowledge proof for light clients. By sending this request, the client will receive a small proof of the blockchain state without downloading the entire state.
