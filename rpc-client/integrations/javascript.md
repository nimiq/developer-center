# JavaScript Native

Pure JavaScript using fetch API and WebSocket - works in browsers and Node.js. {.nq-subline}

Use standard JavaScript APIs for RPC calls without additional dependencies.

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

## Complex Request (Batch)

```javascript
const batchRequest = [
  { jsonrpc: '2.0', method: 'getBlockNumber', id: 1 },
  { jsonrpc: '2.0', method: 'getActiveValidators', id: 2 },
  { jsonrpc: '2.0', method: 'getAccount', params: ['NQ07_...'], id: 3 }
]

const response = await fetch('https://rpc.nimiqwatch.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(batchRequest)
})

const results = await response.json()
console.log('Block:', results[0].result, 'Validators:', results[1].result.length)
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

---

## Need More Examples?

For comprehensive documentation and all available methods:

- **[Browse all RPC methods →](../methods/)**
- **[Try the interactive playground →](../playground)**
