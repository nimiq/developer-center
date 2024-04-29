# Nimiq Albatross Light Client

A very light Nimiq Proof-of-Stake client for browsers and NodeJS, compiled from Rust to WebAssembly.

> **Note**
> This light client is intended to be used in web browsers or NodeJS only (no WASI support either). Other webworker-enabled environments are not yet supported.

## 📦 Installation

You need to install this package from the `next` tag:

```sh
npm install @nimiq/core-web@next
```

or

```sh
yarn add @nimiq/core-web@next
```

## 🛠️ Usage

This package contains the WASM file bundled for three [targets](https://rustwasm.github.io/wasm-pack/book/commands/build.html#target): `bundler`, `web` and `node`.

### With Bundlers

If you use any bundler for your project, like Webpack or Vite, you should probably use the `bundler` target exported from the package root. If that doesn't work, or you require the `web` target for your use-case, jump to the [With ES Modules](#with-es-modules) section.

> [!IMPORTANT]
> For Webpack 5:
> - Enable the [`asyncWebAssembly`](https://webpack.js.org/configuration/experiments/#asyncWebAssembly) experiment in your config.
> - Dynamically import the package with `await import()`.

> [!IMPORTANT]
> For Vite:
> - Use the [`vite-plugin-wasm`](https://www.npmjs.com/package/vite-plugin-wasm) plugin.
> - Exclude this package from Vite's dependency optimization:
> ```ts
> // vite.config.ts
> optimizeDeps: {
>    exclude: ['@nimiq/core-web'],
> }
> ```

> [!IMPORTANT]
> For Nuxt:
> - Use the [`vite-plugin-wasm`](https://www.npmjs.com/package/vite-plugin-wasm) plugin.
> - Exclude this package from Vite's dependency optimization:
> ```ts
> // nuxt.config.ts
> vite: {
>   optimizeDeps: {
>      exclude: ['@nimiq/core-web'],
>   }
> }
> ```
> - Ensure the package is only run client-side: either set [`ssr: false`](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) in your Nuxt config, import this package only in client-side plugins, or wrap it in [`<ClientOnly>`](https://nuxt.com/docs/api/components/client-only).

```js
// With Webpack: import the package asynchronously:
const Nimiq = await import('@nimiq/core-web');
// With Vite, import at the top of your file:
import * as Nimiq from '@nimiq/core-web';

// Create a configuration builder:
const config = new Nimiq.ClientConfiguration();

// Change the config, if necessary:
// --------------------------------
// Specify the network to use:
// Optional, default is 'testalbatross'
config.network('testalbatross');
// Specify the seed nodes to initially connect to:
// Optional, default is ['/dns4/seed1.pos.nimiq-testnet.com/tcp/8443/wss']
config.seedNodes(['/dns4/seed1.pos.nimiq-testnet.com/tcp/8443/wss']);
// Change the lowest log level that is output to the console:
// Optional, default is 'info'
config.logLevel('debug');

// Instantiate and launch the client:
const client = await Nimiq.Client.create(config.build());
```

### With ES Modules

```js
// Import the loader and package from the /web path:
import init, * as Nimiq from '@nimiq/core-web/web';

// Load and initialize the WASM file
init().then(() => {
    // Create a configuration builder:
    const config = new Nimiq.ClientConfiguration();

    // Change the config as shown above, if necessary
    // ...

    // Instantiate and launch the client:
    const client = await Nimiq.Client.create(config.build());
});
```

### NodeJS

For NodeJS, this package includes both CommonJS and ESM builds. You can either `require()` the package or `import` it.

```js
// Import as CommonJS module
const Nimiq = require("@nimiq/core-web");
// Or import as ESM module
import * as Nimiq from "@nimiq/core-web";

// In ESM modules you can use await at the top-level and do not need an async wrapper function.
async function main() {
    // Create a configuration builder:
    const config = new Nimiq.ClientConfiguration();

    // Change the config as shown above, if necessary
    // ...

    // Instantiate and launch the client:
    const client = await Nimiq.Client.create(config.build());
}
main();
```

## 🐛 Issues, Bugs and Feedback

This is an early version of the client code compiled to WebAssembly and as such there can be problems and friction, especially now that more people try it out in more environments than we could ever test ourselves.

If you encounter issues or you find a bug, please open an issue in our Github at https://github.com/nimiq/core-rs-albatross.

If you want to provide feedback or have questions about the client, our "Nimiq Coders Dojo" Telegram group and the [Community Forum](https://forum.nimiq.community/) are the right places for that.
