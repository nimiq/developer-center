# Nimiq Web Client in Webpack

The Nimiq Web Client ships with support for Webpack.

---

<!--@include: ./_installation.md-->

Update your `webpack.config.js`:

```javascript
module.exports = {
  experiments: { // [!code ++]
    asyncWebAssembly: true, // [!code ++]
  }, // [!code ++]
};
```

Now you are ready to go!

```js
const Nimiq = await import('nimiq/core-web/web') // You need to use await import() to load the WebAssembly module

await Nimiq()

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished​()
```

<Callout type='warning'>

You need to use `await import()` to load the WebAssembly module.

</Callout>

<!--@include: ./_contribute.md-->
