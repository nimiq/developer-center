# Connecting to the Network

## Overview

- Nimiq is a censorship-resistant, privacy-oriented, and decentralized blockchain-based payment protocol
- A blockchain is a shared digital ledger that is kept up-to-date across all users in the network through a process called establishing consensus
- Compared to most other blockchain systems, it allows a direct connection to the network using a light node, even in the browser
- These light nodes use Zero Knowledge Proofs (ZKPs) to efficiently verify blockchain transactions and states

## Learning

Nimiq is a blockchain-based payment protocol. This technology offers several key benefits:

- **Censorship-resistant:** No one can prevent you from using it
- **Privacy-oriented:** You don’t need to provide any personal information to open an account
- **Decentralized:** It’s not controlled by any single person but by all its users

A blockchain is like a shared digital ledger. Keeping this ledger up to date across all users in the network is called establishing consensus. Traditionally, most blockchain systems require you to connect through a third party to avoid downloading the entire blockchain, which can be over 100 GB in size. This approach necessitates trusting the third party.

Nimiq allows direct connection to the network with Zero Knowledge Proofs (ZKPs) for both light and full nodes. Unlike history nodes, which download and verify the entire blockchain, light and full nodes only download the necessary data to verify the [macro chain's](/learn/protocol/ZKP-and-recursive-SNARKs.md) validity. This approach significantly reduces storage and computational requirements, making light nodes ideal for devices with limited resources, such as browsers or mobile devices, and making full nodes much lighter.

In Nimiq, these light nodes use Zero Knowledge Proofs (ZKPs) to efficiently verify blockchain transactions and states, providing a secure and user-friendly experience.

<div dark:bg-gray-300 bg-gray-100 p-16 my-48 rounded-6>
    <img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/tutorials/nimiq-network.svg" alt="Illustration of the nimiq network compared to most other blockchains" />
</div>

### Using `@nimiq/core` to Establish Consensus

You have the option to interact with the Nimiq blockchain using either a web browser or Node.js through the @nimiq/core npm module. The import instructions vary based on the environment and project setup. Check out the [integrations](/developers/build/web-client/integrations) section to find the right setup for your project.

In order to connect to the network and establish consensus, you need to import the Nimiq Web package and configure the client.

```js
import * as Nimiq from '@nimiq/core'
```

- To create a client configuration, use the `ClientConfiguration()` constructor
- To configure the client to use the Nimiq Testnet use `config.network('TestAlbatross')`, for the mainnet use `'MainAlbatross'`
- To create an instance of the Client call `Client.create(config.build())`

```js
// Create a configuration builder
const config = new Nimiq.ClientConfiguration()

// Select Testnet
config.network('TestAlbatross')

// Instantiate and launch the client
const client = await Nimiq.Client.create(config.build())
```

These three lines are all you need to connect to the network and establish consensus. All you have to do is wait until the consensus is established, which you can do by using `client.waitForConsensusEstablished()`.

```js
await client.waitForConsensusEstablished()
```

Great! You just learned how to configure a client and establish consensus. Now let's practice what you just learned!

## Practice

In this example, you will create a simple Node.js application that uses the `@nimiq/core` package to connect to the Nimiq test network and establish consensus.

Create a new directory and install the `@nimiq/core` package and esrun:

```bash
mkdir nimiq-tutorial
cd nimiq-tutorial
npm init -y
npm install @nimiq/core@next esrun
```

Specify the module type by adding `"type": "module"` to your package.json.

```json
{
  "name": "nimiq-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@nimiq/core": "^2.0.0-next.22.1",
    "esrun": "^3.2.26"
  }
}
```

Create a new file `index.js` and configure the client:

```js
import * as Nimiq from '@nimiq/core'

async function main() {
  // Create a configuration builder
  const config = new Nimiq.ClientConfiguration()

  // Select Testnet
  config.network('TestAlbatross')

  // Instantiate and launch the client
  const client = await Nimiq.Client.create(config.build())

  // wait for consensus to be established
  await client.waitForConsensusEstablished()

  console.log('✅ Consensus Established!')
}

main()
```

When you run `node index.js`, you should see a bunch of outputs, and `✅ Consensus Established!` as soon as the consensus is established.

You’ve now created a simple Node.js application that uses the `@nimiq/core` package to connect to the Nimiq test network and establish consensus. In the next tutorial, you will learn how to create a Nimiq wallet.

---

## Completed the Tutorial?

[Share your achievement on Twitter](https://twitter.com/intent/tweet?text=I%20just%20learned%20how%20to%20establish%20consensus%20using%20the%20%40nimiq%20web%20client%21%20Check%20it%20out%20here%3A%20https%3A%2F%2Fwww.nimiq.com%2Fdevelopers%2Fbuild%2Fweb-client%2Ftutorials%2Fconnecting-to-the-network) and join the friendly Nimiq Community on [Telegram](https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw) and [Discord](https://discord.gg/cMHemg8), fellow devs are keen to help.
