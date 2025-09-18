# Nimiq RPC Raw HTTP/WebSocket Requests

Direct calls using curl, wget, or any HTTP client - no dependencies required.

Perfect for quick testing, shell scripts, or integrating with any programming language that supports HTTP requests.

For better UX, we recommend you to use [ARPL](./arpl.md), a tool to interact with Nimiq RPC servers from the command line.

> [!NOTE] Using Open RPC Servers
> The examples below use `rpc.nimiqwatch.com`, an open RPC server for testing and development. [Learn more about available open servers and their limitations](../open-servers).

## Request

```bash
curl -X POST https://rpc.nimiqwatch.com \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "getTransactionsByAddress",
    "params": ["NQ07_0000_0000_0000_0000_0000_0000_0000_0000", 500],
    "id": 1
  }'
```

---

## WebSocket Subscription

```bash
# Install websocat: brew install websocat (or download from GitHub)
echo '{"jsonrpc":"2.0","method":"subscribeForHeadBlockHash","params":[],"id":1}' | \
  websocat wss://rpc.nimiqwatch.com/ws
```
