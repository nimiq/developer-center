---
outline: deep
description: Get free NIM for development and testing on Nimiq Testnet.
---

<script setup>
import FaucetPlayground from '../.vitepress/theme/components/Faucet/FaucetPlayground.vue'
</script>

# Faucet

The Nimiq Faucet provides **testnet NIM only** and is intended for development and testing purposes.

Accessible via a web interface or a simple API, it ensures you have the resources to deploy contracts and simulate real-world scenarios cost-free.

## Interactive Playground

Paste a **testnet** Nimiq address in the interface below to request funds.

<FaucetPlayground />

## Network Details

The faucet currently supports the Nimiq Testnet, offering unlimited requests to facilitate continuous integration and development workflows.

| Feature | Testnet |
| :--- | :--- |
| **URL** | `https://faucet.pos.nimiq-testnet.com` |
| **Max Amount** | 10,000 NIM |
| **Rate Limit** | Unlimited |
| **Intended Use** | Development, CI/CD, Stress Testing |

## API Reference

Developers can interact with the faucet programmatically via HTTP requests. This is particularly useful for automated testing pipelines.

**Endpoint:** `POST https://faucet.pos.nimiq-testnet.com/tapit`

### Parameters

The endpoint accepts a `application/x-www-form-urlencoded` body with the following parameters:

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `address` | `string` | **Yes** | The recipient's Nimiq address in User-Friendly format (e.g., `NQ...`). |
| `amount` | `number` | No | The amount of NIM to request. Defaults to `10000`. <br>Max: `110000`. |

### Response

The API returns a JSON object indicating the result of the operation.

```json
{
  "success": true,
  "msg": "Sent 10000 NIM to NQ07 0000..."
}
```

## Integration Examples

Implement the faucet in your application or scripts using standard HTTP clients.

::: code-group

```ts [TypeScript]
interface FaucetResponse {
  success: boolean
  msg: string
}

async function requestFunds(address: string, amount: number = 10000): Promise<FaucetResponse> {
  const params = new URLSearchParams({
    address,
    amount: amount.toString()
  })

  const response = await fetch('https://faucet.pos.nimiq-testnet.com/tapit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })

  return await response.json()
}

// Usage
const result = await requestFunds('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')
console.log(result)
```

```js [JavaScript]
async function requestFunds(address, amount = 10000) {
  const params = new URLSearchParams({
    address,
    amount: amount.toString()
  })

  const response = await fetch('https://faucet.pos.nimiq-testnet.com/tapit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })

  return await response.json()
}

// Usage
const result = await requestFunds('NQ07 0000 0000 0000 0000 0000 0000 0000 0000')
console.log(result)
```

```python [Python]
import requests

def request_funds(address, amount=10000):
    url = "https://faucet.pos.nimiq-testnet.com/tapit"
    data = {
        "address": address,
        "amount": amount
    }
    response = requests.post(url, data=data)
    return response.json()

# Usage
result = request_funds("NQ07 0000 0000 0000 0000 0000 0000 0000 0000")
print(result)
```

```sh [curl]
curl -X POST https://faucet.pos.nimiq-testnet.com/tapit \
     -d "address=NQ07 0000 0000 0000 0000 0000 0000 0000 0000" \
     -d "amount=10000"
```

:::

<details>
<summary>Faucet Status</summary>

You can query the faucet's current status, including its balance and configuration limits.

**Endpoint:** `GET https://faucet.pos.nimiq-testnet.com/info`

::: code-group

```ts [TypeScript]
async function getFaucetInfo() {
  const response = await fetch('https://faucet.pos.nimiq-testnet.com/info')
  return await response.json()
}

// Usage
const info = await getFaucetInfo()
console.log(info)
```

```js [JavaScript]
async function getFaucetInfo() {
  const response = await fetch('https://faucet.pos.nimiq-testnet.com/info')
  return await response.json()
}

// Usage
const info = await getFaucetInfo()
console.log(info)
```

```python [Python]
import requests

def get_faucet_info():
    url = "https://faucet.pos.nimiq-testnet.com/info"
    response = requests.get(url)
    return response.json()

# Usage
info = get_faucet_info()
print(info)
```

```sh [curl]
curl -s https://faucet.pos.nimiq-testnet.com/info
```

:::

### Response Data

| Field | Type | Description |
| :--- | :--- | :--- |
| `network` | `string` | The network identifier (e.g., `test`). |
| `address` | `string` | The Nimiq address of the faucet itself. |
| `balance` | `number` | The current NIM balance available in the faucet. |
| `dispenseAmount` | `number` | The default dispense amount in NIM. |
| `dispensesRemaining` | `number` | Estimated number of dispenses remaining based on current balance. |
| `availableInRegion` | `boolean` | Whether the faucet is available in the requester's geographical region. |

**Example Response:**

```json
{
  "network": "test",
  "address": "NQ...",
  "balance": 123456.78,
  "dispenseAmount": 110,
  "dispensesRemaining": 1122,
  "availableInRegion": true
}
```

</details>
