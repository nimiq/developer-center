# Migration Guide for Web Developers

With our shift from Proof of Work (PoW) to Proof of Stake (PoS), significant updates have been made to the [Nimiq Web Client](/build/web-client/). This comparison page is meticulously crafted to guide you through the enhancements implemented in the new version. We'll highlight critical changes in configuration, client instantiation, wallet creation, transaction handling, and more.

## Nimiq.Wallet

The Wallet class has been removed and thus the following functions, too. Here is how you can now create and manage a KeyPair:

### Create a new wallet

The *Wallet* class is no longer available. Now you generate a wallet by generating a key pair and use the address.

#### Previous (PoW)

```JavaScript
const wallet = Nimiq.Wallet.generate();

const address = wallet.address;
```

#### Now (PoS)

```JavaScript
const keyPair = Nimiq.KeyPair.generate();

const address = keyPair.toAddress();
```

### Load a wallet from a plain private key
Previously, loading a wallet from a plain private key involved using the ```Wallet.loadPlain()``` function. Now, you derive the key pair from the private key.

#### Previous (PoW)

```JavaScript
const wallet = Nimiq.Wallet.loadPlain(privateKeyHex);

const address = wallet.address;
```

#### Now (PoS)

```JavaScript
const privateKey = Nimiq.PrivateKey.fromHex(privateKeyHex);
const keyPair = Nimiq.KeyPair.derive(privateKey);

const address = keyPair.toAddress();
```

### Load a wallet from an encrypted private key
Previously, you could use the `Wallet.loadEncrypted()` function to derive a wallet from an encrypted private key. This function is no longer available.

#### Previous (PoW)

```JavaScript
const wallet = await Wallet.loadEncrypted(encryptedHex, password);
```

#### Now (PoS)

```JavaScript
// No equivalent yet
```

### Export the key pair or private key as a plain `Uint8Array`
To export the key pair or private key as a plain `Uint8Array`, you need to serialize the key pair or private key.

#### Previous (PoW)

```JavaScript
const keypairBytes = wallet.exportPlain(); // [privatekey, publickey]
const privatekeyBytes = wallet.keyPair.privateKey.serialize();
```

#### Now (PoS)

```JavaScript
const keypairBytes = keyPair.serialize(); // [publickey, privatekey] - to be reversed in 0.22.0
const privatekeyBytes = keyPair.privateKey.serialize();
```

### Export the private key as an encrypted Uint8Array
Previously, you could export the private key as an encrypted Uint8Array with the ```Wallet.exportEncrypted()``` function. This function is no longer available.

#### Previous (PoW)

```JavaScript
const encryptedKey = await wallet.exportEncrypted(password);
```

#### Now (PoS)

```JavaScript
// No equivalent yet
```

### Create and send transactions
In order to send a transaction, you need to create a transaction builder and sign it with the key pair.

#### Previous (PoW)

```JavaScript
const transaction = wallet.createTransaction(
    Nimiq.Address.fromString(recipient),
    Nimiq.Policy.coinsToLunas(amount), // Convert from NIM to luna
    0, // Fee, optional
    await client.getHeadHeight() // Current blockchain height
);

const txDetails = await client.sendTransaction(transaction);
```

#### Now (PoS)

```JavaScript
const transaction = Nimiq.TransactionBuilder.newBasic(
    keyPair.toAddress(),
    Nimiq.Address.fromString(recipient),
    BigInt(amount * 1e5), // Convert from NIM to luna
    BigInt(0), // Fee, optional
    await client.getHeadHeight(),
    await client.getNetworkId(),
);
transaction.sign(keyPair);

const txDetails = await client.sendTransaction(transaction);
```

### Convert keys
Convert the public and private keys to their hexadecimal string representations.

#### Previous (PoW)

```JavaScript
const publickeyHex = wallet.publicKey.toHex(); // or wallet.keyPair.publicKey.toHex()
const privatekeyHex = wallet.keyPair.privateKey.toHex();
```

#### Now (PoS)

```JavaScript
const publickeyHex = keyPair.publicKey.toHex();
const privatekeyHex = keyPair.privateKey.toHex();
```

## Nimiq.Client
The Client class is a central component of the Nimiq's new web client framework and is essential for interacting with the Nimiq blockchain network under the PoS consensus model.

### Initialization

#### Previous (PoW)

```JavaScript
import Nimiq from '@nimiq/core-web';

await Nimiq.init();
Nimiq.GenesisConfig.test(); // Select testnet
const configBuilder = Nimiq.Client.Configuration.builder();
const client = configBuilder.instantiateClient();
```

#### Now (PoS)

When using the /web package export, you need to manually call the init function:

```JavaScript
// When using the /web package export
import init, * as Nimiq from '@nimiq/core-web/web';
await init();
```

Then for all package exports, this is how you start a client:
```JavaScript
// When using the /web package export
const config = new Nimiq.ClientConfiguration();
config.network('TestAlbatross'); // Select testnet
const client = await Nimiq.Client.create(config.build());
```

### Removed

- ```public resetConsensus()```
- ```public getBlockTemplate(minerAddress: Address | string, extraData?: Uint8Array | string)```
- ```public submitBlock(block: Block)```
- ```public getTransactionReceipt(hash: Hash | string)```
- ```public getTransactionReceiptsByHashes(hashes: Array<Hash | string>)```
- ```public addBlockListener(listener: BlockListener)```

## Nimiq.Account

In addition to the existing account types ```basic (0)```, ```vesting (1)```, and ```htlc (2)```, Nimiq now has a fourth account type ```staking (3)```. Only the staking contract can be type ```staking```, no other account can have this type.

### User-friendly addresses
The new library doesn’t yet support the `withSpaces` parameter. User-friendly addresses are always returned with spaces.

#### Previous (PoW)

```JavaScript
public toUserFriendlyAddress(withSpaces?: boolean): string;
```

#### Now (PoS)

```JavaScript
toUserFriendlyAddress(): string;
```

### Luna to NIM conversion

#### Previous (PoW)

```JavaScript
Nimiq.Policy.lunasToCoins(account.balance);
```

#### Now (PoS)
You now have to manually divide any amount in luna by 10.000 to get NIM:

```JavaScript
function lunasToCoins(lunas: number): number {
  return lunas / 1e5;
}
```

## Other

### Send transactions
**New capability:** Can now handle UintArray

### Transaction state
```MINED``` is replace by ```INCLUDED```

## Timestamps
Timestamps of transactions and blocks are now in milliseconds, where they were in seconds (UNIX) before. That means you no longer have to multiply them by 1000 to use with new Date() in Javascript:

#### Previous (PoW)

```JavaScript
const txDate = new Date(transaction.timestamp * 1000);
```

#### Now (PoS)

```JavaScript
const txDate = new Date(transaction.timestamp);
```

<style>
  h4 {
    --uno: text-16 text-neutral-800 mt-32;
  }
</style>
