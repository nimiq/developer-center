# Block Live Sync

The block live syncing method applies to both light nodes and history nodes. While the syncing process is the same for both nodes, what results from it varies depending on the node type. This syncing mechanism fetches micro blocks from the current epoch immediately after the last election block.

<br/>

After the node has synced with the macro chain, it must begin to sync with the micro blocks from the current epoch by listening for the blocks as they are produced. However, there is a caveat in downloading the micro blocks, which lies in the node type.

- **Light nodes** don’t need the transaction history, so they only download the headers of the micro blocks. This automatically reduces the amount of storage used by the light client.
- **History nodes** need all the historical data to download the entire micro block.

<br/>

Once the node receives the micro block, it can add and update its copy of the blockchain. Nodes then wait for the next micro block to be produced and repeat the process of applying the micro header or the micro block to the local copy of the blockchain.
