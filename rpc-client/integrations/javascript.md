# Nimiq RPC with JavaScript

Pure JavaScript using fetch API and WebSocket - runtime agnostic.

Use standard JavaScript APIs for RPC calls without additional dependencies.

> [!NOTE] Using Open RPC Servers
> The examples below use `rpc.nimiqwatch.com`, an open RPC server for testing and development. [Learn more about available open servers and their limitations](../open-servers).

---

## Basic Request

```javascript
const response = await fetch('https://rpc.nimiqwatch.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'getAccount',
    params: ['NQ07_0000_0000_0000_0000_0000_0000_0000_0000'],
    id: 1
  })
})

const { result } = await response.json()
console.log('Balance:', result.balance)
```

---

## WebSocket Subscription

```javascript
const ws = new WebSocket('wss://rpc.nimiqwatch.com/ws')

ws.onopen = () => {
  ws.send(JSON.stringify({
    jsonrpc: '2.0',
    method: 'subscribeForLogsByAddresses',
    params: [['NQ07_0000_0000_0000_0000_0000_0000_0000_0000']],
    id: 1
  }))
}

ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  console.log('New transaction:', data.params)
}
```
