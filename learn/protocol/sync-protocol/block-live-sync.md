# Block Live Sync

The block live sync method applies to both light nodes and history nodes. The syncing process is similar for both nodes, but what the nodes fetches differ by node type. The mechanism involves fetching micro blocks from the current epoch immediately after the last election block.

After the node has synced with the macro chain, it must begin to sync with the micro blocks from the current epoch by listening for the blocks as they are produced. However, there is a caveat in downloading the micro blocks:

- **Light nodes**, which do not require transaction history, only the headers of the micro blocks are downloaded. This streamlined approach significantly reduces the storage requirements for the light client.
- **History nodes** need all the historical data to download the entire micro block, so they download the entire micro block.

Once the node receives the micro block, it can add and update its copy of the blockchain. Nodes then wait for the next micro block to be produced and repeat the process of applying the micro header or the micro block to the local copy of the blockchain.
