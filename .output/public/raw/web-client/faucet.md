# Faucet

The Nimiq Faucet provides **testnet NIM only** and is intended for development and testing purposes.

Accessible via a web interface or a simple API, it ensures you have the resources to deploy contracts and simulate real-world scenarios cost-free.

## Interactive Playground

Paste a **testnet** Nimiq address in the interface below to request funds.

<faucet-playground>

## Network Details

The faucet currently supports the Nimiq Testnet, offering unlimited requests to facilitate continuous integration and development workflows.

<table>
<thead>
  <tr>
    <th align="left">
      Feature
    </th>
    
    <th align="left">
      Testnet
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td align="left">
      <strong>
        URL
      </strong>
    </td>
    
    <td align="left">
      <code>
        https://faucet.pos.nimiq-testnet.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <strong>
        Max Amount
      </strong>
    </td>
    
    <td align="left">
      10,000 NIM
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <strong>
        Rate Limit
      </strong>
    </td>
    
    <td align="left">
      Unlimited
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <strong>
        Intended Use
      </strong>
    </td>
    
    <td align="left">
      Development, CI/CD, Stress Testing
    </td>
  </tr>
</tbody>
</table>

## API Reference

Developers can interact with the faucet programmatically via HTTP requests. This is particularly useful for automated testing pipelines.

**Endpoint:** `POST https://faucet.pos.nimiq-testnet.com/tapit`

### Parameters

The endpoint accepts a `application/x-www-form-urlencoded` body with the following parameters:

<table>
<thead>
  <tr>
    <th align="left">
      Parameter
    </th>
    
    <th align="left">
      Type
    </th>
    
    <th align="left">
      Required
    </th>
    
    <th align="left">
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td align="left">
      <code>
        address
      </code>
    </td>
    
    <td align="left">
      <code>
        string
      </code>
    </td>
    
    <td align="left">
      <strong>
        Yes
      </strong>
    </td>
    
    <td align="left">
      The recipient's Nimiq address in User-Friendly format (e.g., <code>
        NQ...
      </code>
      
      ).
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        amount
      </code>
    </td>
    
    <td align="left">
      <code>
        number
      </code>
    </td>
    
    <td align="left">
      No
    </td>
    
    <td align="left">
      The amount of NIM to request. Defaults to <code>
        10000
      </code>
      
      . <br />
      
      Max: <code>
        110000
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

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

<code-group>

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

</code-group>

<details>
<summary>

Faucet Status

</summary>

You can query the faucet's current status, including its balance and configuration limits.

**Endpoint:** `GET https://faucet.pos.nimiq-testnet.com/info`

<code-group>

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

</code-group>

### Response Data

<table>
<thead>
  <tr>
    <th align="left">
      Field
    </th>
    
    <th align="left">
      Type
    </th>
    
    <th align="left">
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td align="left">
      <code>
        network
      </code>
    </td>
    
    <td align="left">
      <code>
        string
      </code>
    </td>
    
    <td align="left">
      The network identifier (e.g., <code>
        test
      </code>
      
      ).
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        address
      </code>
    </td>
    
    <td align="left">
      <code>
        string
      </code>
    </td>
    
    <td align="left">
      The Nimiq address of the faucet itself.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        balance
      </code>
    </td>
    
    <td align="left">
      <code>
        number
      </code>
    </td>
    
    <td align="left">
      The current NIM balance available in the faucet.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        dispenseAmount
      </code>
    </td>
    
    <td align="left">
      <code>
        number
      </code>
    </td>
    
    <td align="left">
      The default dispense amount in NIM.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        dispensesRemaining
      </code>
    </td>
    
    <td align="left">
      <code>
        number
      </code>
    </td>
    
    <td align="left">
      Estimated number of dispenses remaining based on current balance.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <code>
        availableInRegion
      </code>
    </td>
    
    <td align="left">
      <code>
        boolean
      </code>
    </td>
    
    <td align="left">
      Whether the faucet is available in the requester's geographical region.
    </td>
  </tr>
</tbody>
</table>

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
</faucet-playground>
