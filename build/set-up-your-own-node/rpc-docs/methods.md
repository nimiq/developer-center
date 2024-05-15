### Wallet

#### `createAccount`

Generates a new account and store it.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>passphrase</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>publicKey</span>*: `string`
- <span font-mono>privateKey</span>*: `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createAccount",
    "params": ["passphrase"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createAccount",
    "params": ["passphrase"],
    "id": 1
  }'
```
:::

</section>

#### `importRawKey`

Import an account by its private key, in hexadecimal format, and lock it with the passphrase.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>keyData</span>*: `string`
- <span font-mono>passphrase</span>*: `string`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "importRawKey",
    "params": ["keyData", "passphrase"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "importRawKey",
    "params": ["keyData", "passphrase"],
    "id": 1
  }'
```
:::

</section>

#### `isAccountImported`

Returns if an account has been imported.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isAccountImported",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isAccountImported",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `isAccountUnlocked`

Returns if the account currently is unlocked.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isAccountUnlocked",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isAccountUnlocked",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `listAccounts`

Returns the accounts that have been imported.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "listAccounts",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "listAccounts",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `lockAccount`

Locks the account to prevent further usage.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- `null`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "lockAccount",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "lockAccount",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `sign`

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>message</span>*: `string`
- <span font-mono>address</span>*: `string`
- <span font-mono>passphrase</span>*: `string`
- <span font-mono>isHex</span>*: `boolean`

<h4 label>Returns</h4>

- <span font-mono>publicKey</span>*: `string`
- <span font-mono>signature</span>*: `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sign",
    "params": ["message", "address", "passphrase", false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sign",
    "params": ["message", "address", "passphrase", false],
    "id": 1
  }'
```
:::

</section>

#### `unlockAccount`

Unlocks the account.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>passphrase</span>*: `string`
- <span font-mono>duration</span>*: `number`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "unlockAccount",
    "params": ["address", "passphrase", 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "unlockAccount",
    "params": ["address", "passphrase", 0],
    "id": 1
  }'
```
:::

</section>

#### `verifySignature`

Verifies the signature based on the provided public key and message.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>message</span>*: `string`
- <span font-mono>publicKey</span>*: `string`
- <span font-mono>signature</span>*: `string`
- <span font-mono>isHex</span>*: `boolean`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "verifySignature",
    "params": ["message", "publicKey", "signature", false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "verifySignature",
    "params": ["message", "publicKey", "signature", false],
    "id": 1
  }'
```
:::

</section>

### Consensus

#### `createBasicTransaction`

Returns a serialized basic transaction.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createBasicTransaction",
    "params": ["wallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createBasicTransaction",
    "params": ["wallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createBasicTransactionWithData`

Returns a serialized basic transaction with an arbitrary data field.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>data</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createBasicTransactionWithData",
    "params": ["wallet", "recipient", "data", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createBasicTransactionWithData",
    "params": ["wallet", "recipient", "data", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createDeactivateValidatorTransaction`

Returns a serialized `deactivate_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorAddress</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createDeactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createDeactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createDeleteValidatorTransaction`

Returns a serialized `delete_validator` transaction. The transaction fee will be paid from the validator deposit that is being returned. Note in order for this transaction to be accepted fee + value should be equal to the validator deposit, which is not a fixed value: Failed delete validator transactions can diminish the validator deposit

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createDeleteValidatorTransaction",
    "params": ["validatorWallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createDeleteValidatorTransaction",
    "params": ["validatorWallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createNewHtlcTransaction`

Returns a serialized transaction creating a new HTLC contract.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>htlcSender</span>*: `string`
- <span font-mono>htlcRecipient</span>*: `string`
- <span font-mono>hashRoot</span>*: `string`
- <span font-mono>hashCount</span>*: `number`
- <span font-mono>timeout</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createNewHtlcTransaction",
    "params": ["wallet", "htlcSender", "htlcRecipient", "hashRoot", 0, 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createNewHtlcTransaction",
    "params": ["wallet", "htlcSender", "htlcRecipient", "hashRoot", 0, 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createNewStakerTransaction`

Returns a serialized `new_staker` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>delegation</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createNewStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "delegation", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createNewStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "delegation", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createNewValidatorTransaction`

Returns a serialized `new_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee and the validator deposit. Since JSON doesn't have a primitive for Option (it just has the null primitive), we can't have a double Option. So we use the following work-around for the signal data: \"\" = Set the signal data field to None. \"0x29a4b...\" = Set the signal data field to Some(0x29a4b...).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>votingSecretKey</span>*: `string`
- <span font-mono>rewardAddress</span>*: `string`
- <span font-mono>signalData</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createNewValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "signingSecretKey", "votingSecretKey", "rewardAddress", "signalData", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createNewValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "signingSecretKey", "votingSecretKey", "rewardAddress", "signalData", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createNewVestingTransaction`

Returns a serialized transaction creating a new vesting contract.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>owner</span>*: `string`
- <span font-mono>startTime</span>*: `number`
- <span font-mono>timeStep</span>*: `number`
- <span font-mono>numSteps</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createNewVestingTransaction",
    "params": ["wallet", "owner", 0, 0, 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createNewVestingTransaction",
    "params": ["wallet", "owner", 0, 0, 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createReactivateValidatorTransaction`

Returns a serialized `reactivate_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorAddress</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createReactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createReactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRedeemEarlyHtlcTransaction`

Returns a serialized transaction redeeming a HTLC contract using the `EarlyResolve` method.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>htlcSenderSignature</span>*: `string`
- <span font-mono>htlcRecipientSignature</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRedeemEarlyHtlcTransaction",
    "params": ["contractAddress", "recipient", "htlcSenderSignature", "htlcRecipientSignature", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRedeemEarlyHtlcTransaction",
    "params": ["contractAddress", "recipient", "htlcSenderSignature", "htlcRecipientSignature", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRedeemRegularHtlcTransaction`

Returns a serialized transaction redeeming a HTLC contract using the `RegularTransfer` method.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>preImage</span>*: `string`
- <span font-mono>hashRoot</span>*: `string`
- <span font-mono>hashCount</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRedeemRegularHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", "preImage", "hashRoot", 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRedeemRegularHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", "preImage", "hashRoot", 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRedeemTimeoutHtlcTransaction`

Returns a serialized transaction redeeming a HTLC contract using the `TimeoutResolve` method.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRedeemTimeoutHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRedeemTimeoutHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRedeemVestingTransaction`

Returns a serialized transaction redeeming a vesting contract.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRedeemVestingTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRedeemVestingTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRemoveStakeTransaction`

Returns a serialized `remove_stake` transaction. The transaction fee will be paid from the funds being removed.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRemoveStakeTransaction",
    "params": ["stakerWallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRemoveStakeTransaction",
    "params": ["stakerWallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRetireStakeTransaction`

Returns a serialized `retire_stake` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>retireStake</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRetireStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRetireStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createRetireValidatorTransaction`

Returns a serialized `retire_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createRetireValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createRetireValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createSetActiveStakeTransaction`

Returns a serialized `set_active_stake` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>newActiveBalance</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createSetActiveStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createSetActiveStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createStakeTransaction`

Returns a serialized `stake` transaction. The funds to be staked and the transaction fee will be paid from the `sender_wallet`.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerAddress</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createStakeTransaction",
    "params": ["senderWallet", "stakerAddress", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createStakeTransaction",
    "params": ["senderWallet", "stakerAddress", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createUpdateStakerTransaction`

Returns a serialized `update_staker` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>newDelegation</span>*: `string`
- <span font-mono>reactivateAllStake</span>*: `boolean`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createUpdateStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "newDelegation", false, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createUpdateStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "newDelegation", false, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `createUpdateValidatorTransaction`

Returns a serialized `update_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee. Since JSON doesn't have a primitive for Option (it just has the null primitive), we can't have a double Option. So we use the following work-around for the signal data: null = No change in the signal data field. \"\" = Change the signal data field to None. \"0x29a4b...\" = Change the signal data field to Some(0x29a4b...).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>newSigningSecretKey</span>*: `string`
- <span font-mono>newVotingSecretKey</span>*: `string`
- <span font-mono>newRewardAddress</span>*: `string`
- <span font-mono>newSignalData</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "createUpdateValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "newSigningSecretKey", "newVotingSecretKey", "newRewardAddress", "newSignalData", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "createUpdateValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "newSigningSecretKey", "newVotingSecretKey", "newRewardAddress", "newSignalData", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `getRawTransactionInfo`

Given a serialized transaction, it will return the corresponding transaction struct.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>rawTx</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>blockNumber</span>: `number`
- <span font-mono>timestamp</span>: `number`
- <span font-mono>confirmations</span>: `number`
- <span font-mono>from</span>*: `string`
- <span font-mono>fromType</span>*: `number`
- <span font-mono>to</span>*: `string`
- <span font-mono>toType</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>senderData</span>*: `array`
- <span font-mono>recipientData</span>*: `array`
- <span font-mono>flags</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`
- <span font-mono>proof</span>*: `array`
- <span font-mono>networkId</span>*: `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getRawTransactionInfo",
    "params": ["rawTx"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getRawTransactionInfo",
    "params": ["rawTx"],
    "id": 1
  }'
```
:::

</section>

#### `isConsensusEstablished`

Returns a boolean specifying if we have established consensus with the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isConsensusEstablished",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isConsensusEstablished",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `sendBasicTransaction`

Sends a basic transaction to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendBasicTransaction",
    "params": ["wallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendBasicTransaction",
    "params": ["wallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendBasicTransactionWithData`

Sends a basic transaction, with an arbitrary data field, to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>data</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendBasicTransactionWithData",
    "params": ["wallet", "recipient", "data", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendBasicTransactionWithData",
    "params": ["wallet", "recipient", "data", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendDeactivateValidatorTransaction`

Sends a `deactivate_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorAddress</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendDeactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendDeactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendDeleteValidatorTransaction`

Sends a `delete_validator` transaction to the network. The transaction fee will be paid from the validator deposit that is being returned.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendDeleteValidatorTransaction",
    "params": ["validatorWallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendDeleteValidatorTransaction",
    "params": ["validatorWallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendNewHtlcTransaction`

Sends a transaction creating a new HTLC contract to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>htlcSender</span>*: `string`
- <span font-mono>htlcRecipient</span>*: `string`
- <span font-mono>hashRoot</span>*: `string`
- <span font-mono>hashCount</span>*: `number`
- <span font-mono>timeout</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendNewHtlcTransaction",
    "params": ["wallet", "htlcSender", "htlcRecipient", "hashRoot", 0, 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendNewHtlcTransaction",
    "params": ["wallet", "htlcSender", "htlcRecipient", "hashRoot", 0, 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendNewStakerTransaction`

Sends a `new_staker` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>delegation</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendNewStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "delegation", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendNewStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "delegation", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendNewValidatorTransaction`

Sends a `new_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee and the validator deposit. Since JSON doesn't have a primitive for Option (it just has the null primitive), we can't have a double Option. So we use the following work-around for the signal data: \"\" = Set the signal data field to None. \"0x29a4b...\" = Set the signal data field to Some(0x29a4b...).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>votingSecretKey</span>*: `string`
- <span font-mono>rewardAddress</span>*: `string`
- <span font-mono>signalData</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendNewValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "signingSecretKey", "votingSecretKey", "rewardAddress", "signalData", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendNewValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "signingSecretKey", "votingSecretKey", "rewardAddress", "signalData", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendNewVestingTransaction`

Sends a transaction creating a new vesting contract to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>owner</span>*: `string`
- <span font-mono>startTime</span>*: `number`
- <span font-mono>timeStep</span>*: `number`
- <span font-mono>numSteps</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendNewVestingTransaction",
    "params": ["wallet", "owner", 0, 0, 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendNewVestingTransaction",
    "params": ["wallet", "owner", 0, 0, 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRawTransaction`

Sends the given serialized transaction to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>rawTx</span>*: `string`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRawTransaction",
    "params": ["rawTx"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRawTransaction",
    "params": ["rawTx"],
    "id": 1
  }'
```
:::

</section>

#### `sendReactivateValidatorTransaction`

Sends a `reactivate_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorAddress</span>*: `string`
- <span font-mono>signingSecretKey</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendReactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendReactivateValidatorTransaction",
    "params": ["senderWallet", "validatorAddress", "signingSecretKey", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRedeemEarlyHtlcTransaction`

Sends a transaction redeeming a HTLC contract, using the `EarlyResolve` method, to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>htlcSenderSignature</span>*: `string`
- <span font-mono>htlcRecipientSignature</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRedeemEarlyHtlcTransaction",
    "params": ["contractAddress", "recipient", "htlcSenderSignature", "htlcRecipientSignature", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRedeemEarlyHtlcTransaction",
    "params": ["contractAddress", "recipient", "htlcSenderSignature", "htlcRecipientSignature", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRedeemRegularHtlcTransaction`

Sends a transaction redeeming a HTLC contract, using the `RegularTransfer` method, to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>preImage</span>*: `string`
- <span font-mono>hashRoot</span>*: `string`
- <span font-mono>hashCount</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRedeemRegularHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", "preImage", "hashRoot", 0, 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRedeemRegularHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", "preImage", "hashRoot", 0, 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRedeemTimeoutHtlcTransaction`

Sends a transaction redeeming a HTLC contract, using the `TimeoutResolve` method, to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRedeemTimeoutHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRedeemTimeoutHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRedeemVestingTransaction`

Sends a transaction redeeming a vesting contract to the network.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRedeemVestingTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRedeemVestingTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRemoveStakeTransaction`

Sends a `remove_stake` transaction to the network. The transaction fee will be paid from the funds being removed.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRemoveStakeTransaction",
    "params": ["stakerWallet", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRemoveStakeTransaction",
    "params": ["stakerWallet", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRetireStakeTransaction`

Sends a `retire_stake` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>retireStake</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRetireStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRetireStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendRetireValidatorTransaction`

Sends a `retire_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendRetireValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendRetireValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendSetActiveStakeTransaction`

Sends a `set_active_stake` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>newActiveBalance</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendSetActiveStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendSetActiveStakeTransaction",
    "params": ["senderWallet", "stakerWallet", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendStakeTransaction`

Sends a `stake` transaction to the network. The funds to be staked and the transaction fee will be paid from the `sender_wallet`.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerAddress</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendStakeTransaction",
    "params": ["senderWallet", "stakerAddress", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendStakeTransaction",
    "params": ["senderWallet", "stakerAddress", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendUpdateStakerTransaction`

Sends a `update_staker` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account's balance (by not providing a sender wallet).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>stakerWallet</span>*: `string`
- <span font-mono>newDelegation</span>*: `string`
- <span font-mono>reactivateAllStake</span>*: `boolean`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendUpdateStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "newDelegation", false, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendUpdateStakerTransaction",
    "params": ["senderWallet", "stakerWallet", "newDelegation", false, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `sendUpdateValidatorTransaction`

Sends a `update_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee. Since JSON doesn't have a primitive for Option (it just has the null primitive), we can't have a double Option. So we use the following work-around for the signal data: null = No change in the signal data field. \"\" = Change the signal data field to None. \"0x29a4b...\" = Change the signal data field to Some(0x29a4b...).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>senderWallet</span>*: `string`
- <span font-mono>validatorWallet</span>*: `string`
- <span font-mono>newSigningSecretKey</span>*: `string`
- <span font-mono>newVotingSecretKey</span>*: `string`
- <span font-mono>newRewardAddress</span>*: `string`
- <span font-mono>newSignalData</span>*: `string`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "sendUpdateValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "newSigningSecretKey", "newVotingSecretKey", "newRewardAddress", "newSignalData", 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "sendUpdateValidatorTransaction",
    "params": ["senderWallet", "validatorWallet", "newSigningSecretKey", "newVotingSecretKey", "newRewardAddress", "newSignalData", 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `signRedeemEarlyHtlcTransaction`

Returns a serialized signature that can be used to redeem funds from a HTLC contract using the `EarlyResolve` method.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>wallet</span>*: `string`
- <span font-mono>contractAddress</span>*: `string`
- <span font-mono>recipient</span>*: `string`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "signRedeemEarlyHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "signRedeemEarlyHtlcTransaction",
    "params": ["wallet", "contractAddress", "recipient", 0, 0, 0],
    "id": 1
  }'
```
:::

</section>

### Blockchain

#### `getAccountByAddress`

Tries to fetch the account at the given address.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>balance</span>*: `number`
- <span font-mono>accountAdditionalFields</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getAccountByAddress",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getAccountByAddress",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `getAccounts`

Fetches all accounts in the accounts tree. IMPORTANT: This operation iterates over all accounts in the accounts tree and thus is extremely computationally expensive.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getAccounts",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getAccounts",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getActiveValidators`

Returns a collection of the currently active validator's addresses and balances.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getActiveValidators",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getActiveValidators",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getBatchNumber`

Returns the batch number for the current head.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBatchNumber",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBatchNumber",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getBlockByHash`

Tries to fetch a block given its hash. It has an option to include the transactions in the block, which defaults to false.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>includeBody</span>*: `boolean`

<h4 label>Returns</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>size</span>*: `number`
- <span font-mono>batch</span>*: `number`
- <span font-mono>epoch</span>*: `number`
- <span font-mono>network</span>*: `string`
- <span font-mono>version</span>*: `number`
- <span font-mono>number</span>*: `number`
- <span font-mono>timestamp</span>*: `number`
- <span font-mono>parentHash</span>*: `string`
- <span font-mono>seed</span>*: `string`
- <span font-mono>extraData</span>*: `array`
- <span font-mono>stateHash</span>*: `string`
- <span font-mono>bodyHash</span>: `string`
- <span font-mono>historyHash</span>*: `string`
- <span font-mono>transactions</span>: `array`
- <span font-mono>additionalFields</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBlockByHash",
    "params": ["hash", false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBlockByHash",
    "params": ["hash", false],
    "id": 1
  }'
```
:::

</section>

#### `getBlockByNumber`

Tries to fetch a block given its number. It has an option to include the transactions in the block, which defaults to false. Note that this function will only fetch blocks that are part of the main chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`
- <span font-mono>includeBody</span>*: `boolean`

<h4 label>Returns</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>size</span>*: `number`
- <span font-mono>batch</span>*: `number`
- <span font-mono>epoch</span>*: `number`
- <span font-mono>network</span>*: `string`
- <span font-mono>version</span>*: `number`
- <span font-mono>number</span>*: `number`
- <span font-mono>timestamp</span>*: `number`
- <span font-mono>parentHash</span>*: `string`
- <span font-mono>seed</span>*: `string`
- <span font-mono>extraData</span>*: `array`
- <span font-mono>stateHash</span>*: `string`
- <span font-mono>bodyHash</span>: `string`
- <span font-mono>historyHash</span>*: `string`
- <span font-mono>transactions</span>: `array`
- <span font-mono>additionalFields</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBlockByNumber",
    "params": [0, false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBlockByNumber",
    "params": [0, false],
    "id": 1
  }'
```
:::

</section>

#### `getBlockNumber`

Returns the block number for the current head.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBlockNumber",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBlockNumber",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getCurrentPenalizedSlots`

Returns information about the currently penalized slots. This includes slots that lost rewards and that were disabled.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- <span font-mono>blockNumber</span>*: `number`
- <span font-mono>disabled</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getCurrentPenalizedSlots",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getCurrentPenalizedSlots",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getEpochNumber`

Returns the epoch number for the current head.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getEpochNumber",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getEpochNumber",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getInherentsByBatchNumber`

Returns all the inherents (including reward inherents) for the given batch number. Note that this only considers blocks in the main chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>batchNumber</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getInherentsByBatchNumber",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getInherentsByBatchNumber",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getInherentsByBlockNumber`

Returns all the inherents (including reward inherents) for the given block number. Note that this only considers blocks in the main chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getInherentsByBlockNumber",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getInherentsByBlockNumber",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getLatestBlock`

Returns the block at the head of the main chain. It has an option to include the transactions in the block, which defaults to false.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>includeBody</span>*: `boolean`

<h4 label>Returns</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>size</span>*: `number`
- <span font-mono>batch</span>*: `number`
- <span font-mono>epoch</span>*: `number`
- <span font-mono>network</span>*: `string`
- <span font-mono>version</span>*: `number`
- <span font-mono>number</span>*: `number`
- <span font-mono>timestamp</span>*: `number`
- <span font-mono>parentHash</span>*: `string`
- <span font-mono>seed</span>*: `string`
- <span font-mono>extraData</span>*: `array`
- <span font-mono>stateHash</span>*: `string`
- <span font-mono>bodyHash</span>: `string`
- <span font-mono>historyHash</span>*: `string`
- <span font-mono>transactions</span>: `array`
- <span font-mono>additionalFields</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
  }'
```
:::

</section>

#### `getPreviousPenalizedSlots`

Returns information about the penalized slots of the previous batch. This includes slots that lost rewards and that were disabled.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- <span font-mono>blockNumber</span>*: `number`
- <span font-mono>disabled</span>*: `object`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getPreviousPenalizedSlots",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getPreviousPenalizedSlots",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getSlotAt`

Returns information about the proposer slot at the given block height and offset. The offset is optional, it will default to getting the offset for the existing block at the given height. We only have this information available for the last 2 batches at most.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`
- <span font-mono>offsetOpt</span>*: `number`

<h4 label>Returns</h4>

- <span font-mono>slotNumber</span>*: `number`
- <span font-mono>validator</span>*: `string`
- <span font-mono>publicKey</span>*: `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getSlotAt",
    "params": [0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getSlotAt",
    "params": [0, 0],
    "id": 1
  }'
```
:::

</section>

#### `getStakerByAddress`

Tries to fetch a staker information given its address.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>balance</span>*: `number`
- <span font-mono>delegation</span>: `string`
- <span font-mono>inactiveBalance</span>*: `number`
- <span font-mono>inactiveFrom</span>: `number`
- <span font-mono>retiredBalance</span>*: `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getStakerByAddress",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getStakerByAddress",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `getStakersByValidatorAddress`

Fetches all stakers for a given validator. IMPORTANT: This operation iterates over all stakers of the staking contract and thus is extremely computationally expensive.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getStakersByValidatorAddress",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getStakersByValidatorAddress",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionByHash`

Tries to fetch a transaction (including reward transactions) given its hash.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>hash</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>transaction</span>*: `undefined`
- <span font-mono>executionResult</span>*: `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionByHash",
    "params": ["hash"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionByHash",
    "params": ["hash"],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionHashesByAddress`

Returns the hashes for the latest transactions for a given address. All the transactions where the given address is listed as a recipient or as a sender are considered. Reward transactions are also returned. It has an option to specify the maximum number of hashes to fetch, it defaults to 500.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>max</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionHashesByAddress",
    "params": ["address", 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionHashesByAddress",
    "params": ["address", 0],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionsByAddress`

Returns the latest transactions for a given address. All the transactions where the given address is listed as a recipient or as a sender are considered. Reward transactions are also returned. It has an option to specify the maximum number of transactions to fetch, it defaults to 500.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>max</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionsByAddress",
    "params": ["address", 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionsByAddress",
    "params": ["address", 0],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionsByBatchNumber`

Returns all the transactions (including reward transactions) for the given batch number. Note that this only considers blocks in the main chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>batchNumber</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionsByBatchNumber",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionsByBatchNumber",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionsByBlockNumber`

Returns all the transactions (including reward transactions) for the given block number. Note that this only considers blocks in the main chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionsByBlockNumber",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionsByBlockNumber",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getValidatorByAddress`

Tries to fetch a validator information given its address.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>address</span>*: `string`
- <span font-mono>signingKey</span>*: `string`
- <span font-mono>votingKey</span>*: `string`
- <span font-mono>rewardAddress</span>*: `string`
- <span font-mono>signalData</span>: `string`
- <span font-mono>balance</span>*: `number`
- <span font-mono>numStakers</span>*: `number`
- <span font-mono>inactivityFlag</span>: `number`
- <span font-mono>retired</span>*: `boolean`
- <span font-mono>jailedFrom</span>: `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getValidatorByAddress",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getValidatorByAddress",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

#### `getValidators`

Fetches all validators in the staking contract. IMPORTANT: This operation iterates over all validators in the staking contract and thus is extremely computationally expensive.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getValidators",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getValidators",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `subscribeForHeadBlock`

Subscribes to new block events (retrieves the full block).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>includeBody</span>*: `boolean`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "subscribeForHeadBlock",
    "params": [false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "subscribeForHeadBlock",
    "params": [false],
    "id": 1
  }'
```
:::

</section>

#### `subscribeForHeadBlockHash`

Subscribes to new block events (only retrieves the block hash).

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "subscribeForHeadBlockHash",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "subscribeForHeadBlockHash",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `subscribeForLogsByAddressesAndTypes`

Subscribes to log events related to a given list of addresses and of any of the log types provided. If addresses is empty it does not filter by address. If log_types is empty it won't filter by log types. Thus the behavior is to assume all addresses or log_types are to be provided if the corresponding vec is empty.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>addresses</span>*: `string`
- <span font-mono>logTypes</span>*: `array`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "subscribeForLogsByAddressesAndTypes",
    "params": ["addresses", ""],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "subscribeForLogsByAddressesAndTypes",
    "params": ["addresses", ""],
    "id": 1
  }'
```
:::

</section>

#### `subscribeForValidatorElectionByAddress`

Subscribes to pre epoch validators events.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>address</span>*: `string`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "subscribeForValidatorElectionByAddress",
    "params": ["address"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "subscribeForValidatorElectionByAddress",
    "params": ["address"],
    "id": 1
  }'
```
:::

</section>

### Validator

#### `getAddress`

Returns our validator address.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getAddress",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getAddress",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getSigningKey`

Returns our validator signing key.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getSigningKey",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getSigningKey",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getVotingKey`

Returns our validator voting key.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getVotingKey",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getVotingKey",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `isValidatorElected`

Returns if our validator is currently elected.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isValidatorElected",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isValidatorElected",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `isValidatorSynced`

Returns if our validator is currently synced.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isValidatorSynced",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isValidatorSynced",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `setAutomaticReactivation`

Updates the configuration setting to automatically reactivate our validator.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>automaticReactivate</span>*: `boolean`

<h4 label>Returns</h4>

- `null`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "setAutomaticReactivation",
    "params": [false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "setAutomaticReactivation",
    "params": [false],
    "id": 1
  }'
```
:::

</section>

### Policy

#### `getBatchAt`

Returns the batch number at a given `block_number` (height).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBatchAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBatchAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getBatchIndexAt`

Returns the batch index at a given block number. The batch index is the number of a block relative to the batch it is in. For example, the first block of any batch always has an batch index of 0.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBatchIndexAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBatchIndexAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getBlockAfterJail`

Returns the first block after the jail period of a given block number has ended.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBlockAfterJail",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBlockAfterJail",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getBlockAfterReportingWindow`

Returns the first block after the reporting window of a given block number has ended.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getBlockAfterReportingWindow",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getBlockAfterReportingWindow",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getElectionBlockAfter`

Returns the number (height) of the next election macro block after a given block number (height).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getElectionBlockAfter",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getElectionBlockAfter",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getElectionBlockBefore`

Returns the number block (height) of the preceding election macro block before a given block number (height). If the given block number is an election macro block, it returns the election macro block before it.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getElectionBlockBefore",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getElectionBlockBefore",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getElectionBlockOf`

Returns the block number of the election macro block of the given epoch (which is always the last block).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>epoch</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getElectionBlockOf",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getElectionBlockOf",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getEpochAt`

Returns the epoch number at a given block number (height).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getEpochAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getEpochAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getEpochIndexAt`

Returns the epoch index at a given block number. The epoch index is the number of a block relative to the epoch it is in. For example, the first block of any epoch always has an epoch index of 0.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getEpochIndexAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getEpochIndexAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getFirstBatchOfEpoch`

Returns a boolean expressing if the batch at a given block number (height) is the first batch of the epoch.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getFirstBatchOfEpoch",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getFirstBatchOfEpoch",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getFirstBlockOf`

Returns the block number of the first block of the given epoch (which is always a micro block).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>epoch</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getFirstBlockOf",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getFirstBlockOf",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getFirstBlockOfBatch`

Returns the block number of the first block of the given batch (which is always a micro block).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>batch</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getFirstBlockOfBatch",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getFirstBlockOfBatch",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getLastElectionBlock`

Returns the block number (height) of the last election macro block at a given block number (height). If the given block number is an election macro block, then it returns that block number.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getLastElectionBlock",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getLastElectionBlock",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getLastMacroBlock`

Returns block the number (height) of the last macro block at a given block number (height). If the given block number is a macro block, then it returns that block number.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getLastMacroBlock",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getLastMacroBlock",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getMacroBlockAfter`

Returns the block number (height) of the next macro block after a given block number (height).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getMacroBlockAfter",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getMacroBlockAfter",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getMacroBlockBefore`

Returns the block number (height) of the preceding macro block before a given block number (height). If the given block number is a macro block, it returns the macro block before it.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getMacroBlockBefore",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getMacroBlockBefore",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getMacroBlockOf`

Returns the block number of the macro block (checkpoint or election) of the given batch (which is always the last block).

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>batch</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getMacroBlockOf",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getMacroBlockOf",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `getPolicyConstants`

Returns a bundle of policy constants.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- <span font-mono>stakingContractAddress</span>*: `string`
- <span font-mono>coinbaseAddress</span>*: `string`
- <span font-mono>transactionValidityWindow</span>*: `number`
- <span font-mono>maxSizeMicroBody</span>*: `number`
- <span font-mono>version</span>*: `number`
- <span font-mono>slots</span>*: `number`
- <span font-mono>blocksPerBatch</span>*: `number`
- <span font-mono>batchesPerEpoch</span>*: `number`
- <span font-mono>blocksPerEpoch</span>*: `number`
- <span font-mono>validatorDeposit</span>*: `number`
- <span font-mono>minimumStake</span>*: `number`
- <span font-mono>totalSupply</span>*: `number`
- <span font-mono>blockSeparationTime</span>*: `number`
- <span font-mono>jailEpochs</span>*: `number`
- <span font-mono>genesisBlockNumber</span>*: `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getPolicyConstants",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getPolicyConstants",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getSupplyAt`

Returns the supply at a given time (as Unix time) in Lunas (1 NIM = 100,000 Lunas). It is calculated using the following formula: Supply (t) = Genesis_supply + Initial_supply_velocity / Supply_decay * (1 - e^(- Supply_decay * t)) Where e is the exponential function, t is the time in milliseconds since the genesis block and Genesis_supply is the supply at the genesis of the Nimiq 2.0 chain.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>genesisSupply</span>*: `number`
- <span font-mono>genesisTime</span>*: `number`
- <span font-mono>currentTime</span>*: `number`

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getSupplyAt",
    "params": [0, 0, 0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getSupplyAt",
    "params": [0, 0, 0],
    "id": 1
  }'
```
:::

</section>

#### `isElectionBlockAt`

Returns a boolean expressing if the block at a given block number (height) is an election macro block.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isElectionBlockAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isElectionBlockAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `isMacroBlockAt`

Returns a boolean expressing if the block at a given block number (height) is a macro block.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isMacroBlockAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isMacroBlockAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

#### `isMicroBlockAt`

Returns a boolean expressing if the block at a given block number (height) is a micro block.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>blockNumber</span>*: `number`

<h4 label>Returns</h4>

- `boolean`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "isMicroBlockAt",
    "params": [0],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "isMicroBlockAt",
    "params": [0],
    "id": 1
  }'
```
:::

</section>

### Mempool

#### `getMinFeePerByte`

Obtains the minimum fee per byte as per mempool configuration.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getMinFeePerByte",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getMinFeePerByte",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getTransactionFromMempool`

Tries to obtain the given transaction (using its hash) from the mempool.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>hash</span>*: `string`

<h4 label>Returns</h4>

- <span font-mono>hash</span>*: `string`
- <span font-mono>blockNumber</span>: `number`
- <span font-mono>timestamp</span>: `number`
- <span font-mono>confirmations</span>: `number`
- <span font-mono>from</span>*: `string`
- <span font-mono>fromType</span>*: `number`
- <span font-mono>to</span>*: `string`
- <span font-mono>toType</span>*: `number`
- <span font-mono>value</span>*: `number`
- <span font-mono>fee</span>*: `number`
- <span font-mono>senderData</span>*: `array`
- <span font-mono>recipientData</span>*: `array`
- <span font-mono>flags</span>*: `number`
- <span font-mono>validityStartHeight</span>*: `number`
- <span font-mono>proof</span>*: `array`
- <span font-mono>networkId</span>*: `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getTransactionFromMempool",
    "params": ["hash"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getTransactionFromMempool",
    "params": ["hash"],
    "id": 1
  }'
```
:::

</section>

#### `mempool`

Obtains the mempool content in fee per byte buckets.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- <span font-mono>0</span>: `number`
- <span font-mono>1</span>: `number`
- <span font-mono>2</span>: `number`
- <span font-mono>5</span>: `number`
- <span font-mono>10</span>: `number`
- <span font-mono>20</span>: `number`
- <span font-mono>50</span>: `number`
- <span font-mono>100</span>: `number`
- <span font-mono>200</span>: `number`
- <span font-mono>500</span>: `number`
- <span font-mono>1000</span>: `number`
- <span font-mono>2000</span>: `number`
- <span font-mono>5000</span>: `number`
- <span font-mono>10000</span>: `number`
- <span font-mono>total</span>*: `number`
- <span font-mono>buckets</span>*: `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "mempool",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "mempool",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `mempoolContent`

Obtains the list of transactions that are currently in the mempool.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>includeTransactions</span>*: `boolean`

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "mempoolContent",
    "params": [false],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "mempoolContent",
    "params": [false],
    "id": 1
  }'
```
:::

</section>

#### `pushHighPriorityTransaction`

Pushes a raw transaction into the mempool with high priority.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>rawTx</span>*: `string`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "pushHighPriorityTransaction",
    "params": ["rawTx"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "pushHighPriorityTransaction",
    "params": ["rawTx"],
    "id": 1
  }'
```
:::

</section>

#### `pushTransaction`

Pushes a raw transaction into the mempool, it will be assigned a default priority.

<section>
  <div class="io">

<h4 label>Parameters</h4>

- <span font-mono>rawTx</span>*: `string`

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "pushTransaction",
    "params": ["rawTx"],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "pushTransaction",
    "params": ["rawTx"],
    "id": 1
  }'
```
:::

</section>

### Network

#### `getPeerCount`

Returns the number of peers.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `number`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getPeerCount",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getPeerCount",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getPeerId`

Returns the peer ID for our local peer.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getPeerId",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getPeerId",
    "params": [],
    "id": 1
  }'
```
:::

</section>

#### `getPeerList`

Returns a list with the IDs of all our peers.

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- `array`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getPeerList",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getPeerList",
    "params": [],
    "id": 1
  }'
```
:::

</section>

### Zkp component

#### `getZkpState`

Returns the current ZKP state (proof with its related block hash and block number).

<section>
  <div class="io">

<h4 label>Parameters</h4>

<h4 label>Returns</h4>

- <span font-mono>latestBlock</span>*: `undefined`
- <span font-mono>latestProof</span>: `string`

</div>

::: code-group

```JavaScript
const res = await fetch('http://127.0.0.1:8648', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    "jsonrpc": "2.0",
    "method": "getZkpState",
    "params": [],
    "id": 1
  }
});
const data = await res.json();
```

```Shell
curl --request POST --url http://127.0.0.1:8648
  --header 'Content-Type: application/json'
  --data '{
    "jsonrpc": "2.0",
    "method": "getZkpState",
    "params": [],
    "id": 1
  }'
```
:::

</section>
