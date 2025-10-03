# Exposing a Nimiq Node over JSON-RPC

This guide walks through enabling the built-in JSON-RPC server that comes with the Nimiq client. Follow the steps in order.

## Prerequisites

- Rust toolchain installed (for `cargo run` / `cargo build`).
- A synced or syncing Nimiq node (follow the [core-rs-albatross configuration guide](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration) if you still need to set one up).
- A second terminal window so you can keep the node running while you send RPC calls.

## Build the client binary

```bash
cargo build --release --bin nimiq-client
```

## Run once to create the config folder

Start the client briefly to scaffold `~/.nimiq` and the example config:

```bash
cargo run --release --bin nimiq-client
```

On a fresh setup the binary terminates with a `Config file not found` error after writing `~/.nimiq/client.example.toml`; that message is expected. Once you create a configuration for your node, the same command keeps the node running.

## Create a config file that enables RPC

Copy the template that was just generated and rename it to `client.toml`:

```bash
cp ~/.nimiq/client.example.toml ~/.nimiq/client.toml
```

Edit the file with:

```bash
nano ~/.nimiq/client.toml
```

Locate the `[rpc-server]` section, uncomment it, and replace the placeholders in this minimal configuration with your actual values:

```toml
[rpc-server]
bind = "127.0.0.1" # Use "0.0.0.0" to listen on every interface
port = 8648 # Change if the port is taken
methods = [] # Empty list = expose every RPC method
username = "rpc-user" # Replace with your username
password = "super-secret" # Replace with a strong password
cors_domains = [] # Needed only when browser apps access the node
```

**Need a quick tour of the RPC surface?** Run the helper CLI from the repository root:

```bash
cargo run --release --bin nimiq-rpc -- -h
```

## Start the node with the config

Launch the client and keep it running in its own terminal:

```bash
cargo run --release --bin nimiq-client -- --config ~/.nimiq/client.toml
```

## Test the RPC endpoint from another terminal

Replace the placeholders with your real host, port, and the credentials you configured.

```bash
curl http://<host>:<port> \
  -u <rpc-username>:<strong-password> \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"getPeerCount","params":[],"id":1}'
```

A successful response looks like:

```json
{ "jsonrpc": "2.0", "result": { "data": 49, "metadata": null }, "id": 1 }
```

## Quick Reference

**Terminal 1**

- Build once (optional): `cargo build --release --bin nimiq-client`
- Start and keep running: `cargo run --release --bin nimiq-client -- --config ~/.nimiq/client.toml`

**Terminal 2**

- Send RPC calls while Terminal 1 keeps the node alive:

    ```bash
    curl http://127.0.0.1:8648 -u rpc-user:super-secret -H 'Content-Type: application/json' -d '{"jsonrpc":"2.0","method":"getPeerCount","params":[],"id":1}'
    ```

- Repeat with other methods as desired. Browse the full list at [RPC Methods](./methods/index.md).

## Example RPC calls

The examples below assume the node is running and syncing Mainnet. Update the placeholders before executing the commands.

1. **Peer count**

   ```bash
   curl http://127.0.0.1:8648 \
     -u rpc-user:super-secret \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","method":"getPeerCount","params":[],"id":1}'
   ```

   Example response:

   ```json
   { "jsonrpc": "2.0", "result": { "data": 49, "metadata": null }, "id": 1 }
   ```

2. **Latest block header**

   ```bash
   curl http://127.0.0.1:8648 \
     -u rpc-user:super-secret \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","method":"getLatestBlock","params":[true],"id":2}'
   ```

   Example response:

   ```json
   {
     "jsonrpc": "2.0",
     "result": {
       "data": {
         "hash": "446cd813...d8ee27d",
         "number": 31232849,
         "timestamp": 1759491166072,
         "producer": { "validator": "NQ00 0123 ..." },
         "transactions": []
       },
       "metadata": null
     },
     "id": 2
   }
   ```

3. **Account information**

   ```bash
   curl http://127.0.0.1:8648 \
     -u rpc-user:super-secret \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","method":"getAccountByAddress","params":["NQ00 0123 ..."],"id":3}'
   ```

   Example response:

   ```json
   {
     "jsonrpc": "2.0",
     "result": {
       "data": {
         "address": "NQ00 0123 ...",
         "balance": 62294498429,
         "type": "basic"
       },
       "metadata": {
         "blockNumber": 31232842,
         "blockHash": "ebcfc8d8...5393cb1"
       }
     },
     "id": 3
   }
   ```

Replace the placeholder credentials (`rpc-user` / `super-secret`) in the examples with the values you set in `client.toml` before running the commands.

## Troubleshooting

- **`Config file not found`** – Ensure `~/.nimiq/client.toml` exists and the path passed to `--config` is correct.
- **`Method not allowed`** – Add the method name to the `methods` list or leave it empty to expose every RPC call.
- HTTP 401 – Username/password mismatch. Update the credentials in your request or in `client.toml` and restart the node.
