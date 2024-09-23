# Nimiq Web Client in Webpack

The Nimiq Web Client ships with support for Webpack.

---

<!--@include: ./_installation.md-->

Update your `webpack.config.js` to enable the [`asyncWebAssembly`](https://webpack.js.org/configuration/experiments/#asyncWebAssembly) :

```javascript
module.exports = {
  experiments: { // [!code ++]
    asyncWebAssembly: true, // [!code ++]
  }, // [!code ++]
}
```

Now you are ready to go!

<!-- eslint-disable antfu/no-top-level-await -->
```js
const Nimiq = await import('@nimiq/core') // You need to use await import() to load the WebAssembly module

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

<Callout type='warning'>

You need to use `await import()` to load the WebAssembly module and also experiment in your config.

</Callout>

<!--@include: ./_contribute.md-->
