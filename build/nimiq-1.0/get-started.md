---
search: false
---

# Get started with Nimiq 1.0

Build your own Nimiq-enabled app. Step by step with code snippets and a full running example at the end of each tutorial.

## Quick Start

You can set up a Nimiq node within your browser that will connect to the Nimiq network and reach consensus in basically three lines of JavaScript code:

```html
<script src="https://cdn.nimiq.com/latest/nimiq.js"></script>
<script>
    Nimiq.load().then(async function() {

        // Configure for Testnet. For Mainnet, use main().
        Nimiq.GenesisConfig.test();

        // Instantiate a config builder.
        const configBuilder = Nimiq.Client.Configuration.builder();

        // Create a client based on your configuration,
        // it will automatically connect to the network.
        const client = configBuilder.instantiateClient();
    });
</script>
```

**But there is more!** Learn in the [tutorials](https://www.nimiq.com/developers/#tutorials) below how to build a small webapp with JavaScript, HTML, and CSS that manages a wallet, sends and receives transactions, and looks neat using Nimiq's CSS framework.

### App Starter Kit
Just clone the App-Starter Kit repo on GitHub and get the entire infrastructure for creating a Nimiq-enabled app with Vue.js setup, and the Nimiq client, Identicons, custom Nimiq components for Vue.js, the Hub API, Nimiq Style and more. Checkout the readme and the demo to see what it's capable of! To understand better how to use each part, have a look at the tutorials below.

### Tutorials

1. [Establishing Consensus](https://nimiq.github.io/tutorials/basics-1-consensus). Set up a node in a website, connect to the Nimiq network and reach consensus.
2. [Blockchain Events and User Interface](https://nimiq.github.io/tutorials/basics-2-events-and-ui). Use Nimiq Style to add UI to the basic client.
3. [Transactions](https://nimiq.github.io/tutorials/basics-3-transactions). Send and receive transactions directly from within the browser.
4. [Extended Transactions](https://nimiq.github.io/tutorials/basics-4-extended-tx). Add a message to your transactions using extended transactions.
5. [Nimiq Identicons](https://nimiq.github.io/tutorials/basics-5-identicons). Use Nimiq Identicons to help user identify and verify addresses.

### Nimiq Checkout

[Receive NIM in your web shop](https://nimiq.github.io/tutorials/nimiq-checkout). Set up a simple web shop and receive payments in NIM.

### Nimiq Payment Plugin

[Installation](https://nimiq.github.io/tutorials/wordpress-payment-plugin-installation.html). Setup an online shop with WordPress + WooCommerce and configure the Nimiq Payment Plugin to receive payments in NIM.

### Run a node on Nimiq 1.0

**The minimum example**: On Linux and Mac, all you need is an IP and an open or forwarded port to run a full node.

```
git clone https://github.com/nimiq/core-js.git nimiq && cd nimiq
yarn && yarn build
clients/nodejs/nimiq --host=IP --port=PORT --protocol=ws
```

Note: For further details and instructions for Windows users, refer to the [Nimiq Core Documentation](https://github.com/nimiq/core-js).

Run a miner: just add configuration for threads and address

```bash
--miner=auto --wallet-address=ADDRESS
```

For more details, see:

- [Node.js client](https://github.com/nimiq/core-js/blob/master/doc/nodejs-client.md). Details and all parameters for full, light, and nano clients.
- [JSON-RPC client](https://github.com/nimiq/core-js/blob/master/doc/json-rpc-client.md). Run a node that exposes APIs to connect to via the JSON-RPC client.
- Use [Docker](https://github.com/nimiq/core-js/blob/master/doc/docker.md). How to setup Nimiq to run in a Docker image.

### Integrate Checkout

- [Nimiq Checkout for WooCommerce](https://wordpress.org/plugins/woo-nimiq-gateway). A plugin for WordPress WooCommerce to handle payments in the Nimiq cryptocurrency.
- [Checkout API](https://nimiq.github.io/hub/api-reference/checkout). Integrate with the Nimiq Hub Checkout API directly from your custom e-commerce system or app.
- [Nimiq Checkout Tutorial](https://nimiq.github.io/tutorials/nimiq-checkout). Follow this tutorial and learn how to set up a simple web shop and receive payments in NIM.

## API Documentation

Nuts and bolts of Nimiq. Detailed documentation of front-end, core and community-provided APIs and frameworks.

### Front-end

- [Nimiq Hub API](https://nimiq.github.io/hub). The Nimiq Hub provides a unified interface for all Nimiq accounts, addresses, and contracts. It is the primary UI for Nimiq users to manage their accounts and provides websites and apps with a concise API to interact with their users’ Nimiq addresses.
- [Front-end Documentation](https://nimiq.github.io/). Start using Nimiq in your webapp and website. Detailed documentation on the Hub, Checkout, Nimiq Style, and more.

### Protocol

-[Protocol Reference](https://nimiq-network.github.io/developer-reference/). An in-depth look at the bits and bytes of the Nimiq Protocol. Reference for messages with their fields and types on the network level.
- [Nimiq Core Documentation](https://doc.esdoc.org/github.com/nimiq/core-js/). Full Nimiq Core ES6 source code documentation.

### More

- [Nimiq 1.0 Whitepaper](https://www.nimiq.com/whitepaper-1/). Better understand the technical aspects and goals of the current Nimiq 1.0 Blockchain.
- [Nimiq 2.0 Whitepaper](https://www.nimiq.com/whitepaper/). Get insights on the upcoming Nimiq 2.0 release.
Community Tools and APIs. Useful tools and APIs developed by the Nimiq Community.

## Assets

** Bits and bytes**. Browse through Nimiq's source code. New to Nimiq's look & feel? Checkout Nimiq's Style Guide and download brand assets such as logos and signets.

### Nimiq Style

The Nimiq CSS framework to give your webapp or website the Nimiq look & feel.

- [Examples](https://nimiq.github.io/submodules/style/demo.html). Buttons, labels, boxes, and colors of the Nimiq Style.
- [GitHub Repository](https://github.com/nimiq/nimiq-style). The source code and basic instructions.
- [Nimiq Style Guide](https://nimiq.com/styleguide/). A general introduction to the concepts, colors, and typography.
- [Logos and Signets](https://www.dropbox.com/sh/83v08gr5ej9zvy4/AACHryG7umH9oKQXpFkdBI0Sa?dl=0). All resources, in color and monochrome, for print and digital use.

## Source Code
The Nimiq Source Code (Blockchain, node, core library, Nimiq apps, CSS, Vue.js components…) is hosted on [GitHub](https://github.com/nimiq).
