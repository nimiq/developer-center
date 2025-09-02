---
next: ./installation/
---

# What is Nimiq?

Nimiq is an open-source cryptocurrency designed for simplicity and ease of use. With our browser-first approach, Nimiq works directly within web browsers without the need for additional software, providing easy integration for developers and seamless interaction for users.

The protocol is based on the [Albatross consensus algorithm](/protocol/index), a Proof-of-Stake system renowned for its speed, security, and low power consumption. Albatross supports high transaction throughput and can handle thousands of transactions per second.

## The Nimiq Web Client

The Nimiq Web Client is a JavaScript library that allows you to participate in the Nimiq PoS blockchain directly in your browser. No intermediaries, no servers.

The Web Client provides a simple interface to build consensus with other nodes, create wallets, send transactions, and interact with the blockchain.

Reaching consensus with the network is easy:

<figure>

<!--@include: ./_demo.web.md-->

<figcaption mt--16 mb-32 op-80 mx-0>

This is a simple example using the `web` integration. For other environments, be sure to modify the import statement accordingly.

</figcaption>

</figure>

Then, you can start interacting with the blockchain:

```js
client.addHeadChangedListener((head) => {
  console.log('New head:', head)
})
```

## Using Your Private Node

Although the Web Client already offers extensive functionality, you can also set up your own private node for full control and advanced customization. [Find out more about their differences](./web-client-vs-rpc.md).

## Issues, Bugs, and Feedback

This is an early version of the client code compiled to WebAssembly, and as such there might be issues and friction, especially now that more people are trying it in more environments than we could ever test ourselves.

If you encounter problems or find a bug, please open an issue in our [GitHub repository](https://github.com/nimiq/core-rs-albatross).

If you want to provide feedback or have questions about the client, our Nimiq Coders Dojo [Telegram](https://t.me/nimiq) and [Community Forum](https://forum.nimiq.community/) are the places to go.
