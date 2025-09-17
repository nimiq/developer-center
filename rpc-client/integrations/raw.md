# Raw HTTP/WebSocket Requests

Direct calls using curl, wget, or any HTTP client - no dependencies required. {.nq-subline}

Perfect for quick testing, shell scripts, or integrating with any programming language that supports HTTP requests.

---

## Basic Request

```bash
curl https://rpc.nimiqwatch.com/account/NQ07_0000_0000_0000_0000_0000_0000_0000_0000
```

---

## Complex Request (JSON-RPC)

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

---

## Need More Examples?

For comprehensive documentation and all available methods:

- **[Browse all RPC methods →](../methods/)**
- **[Try the interactive playground →](../playground)**
