---
next: ./installation/
---

# What's Nimiq?

Nimiq is an open source crypto designed for simplicity and ease of use. With our browser-first approach, Nimiq works directly within web browsers without the need for additional software, allowing developers easy integration and users seamless interaction.

The protocol is based on the [Albatross consensus algorithm](/learn/), a proof-of-stake system renowned for its speed, security and low power consumption. Albatross supports high transaction throughput, capable of handling thousands of transactions per second.

## The Nimiq Web Client

The Nimiq Web Client is a JavaScript library that allows you to interact with the Nimiq PoS blockchain directly in your browser. It provides a simple interface to create wallets, send transactions and interact with the blockchain.

Reaching consensus with the network is easy:

<figure>

<!--@include: ./_demo.md-->

<figcaption mt--16 mb-32 op-80 mx-0>

This is a simple example using `web` integration. For other environments, be sure to modify the import statement accordingly.

</figcaption>

</figure>

Then, you can start interacting with the blockchain:

```js
client.addHeadChangedListener((head) => {
  console.log('New head:', head)
})
```

## Issues, bugs and feedback

This is an early version of the client code compiled to WebAssembly, and as such there might be issues and friction, especially now that more people are trying it in more environments than we could ever test ourselves.

If you encounter problems or find a bug, please open an issue in our [Github repository](https://github.com/nimiq/core-rs-albatross).

If you want to provide feedback or have questions about the client, our Nimiq Coders Dojo [Telegram](https://t.me/nimiq) and [Community Forum](https://forum.nimiq.community/) are the places to go.
