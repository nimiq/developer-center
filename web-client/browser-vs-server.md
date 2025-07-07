# Using the Nimiq Web Client Across JavaScript Runtimes

Learn how to integrate the Nimiq Albatross light client in any JavaScript environment – from browsers to servers to edge runtimes.{.nq-subline}

## Overview

The Nimiq Albatross light client is distributed as `@nimiq/core` on npm and comes with three optimized WebAssembly builds, each tailored for different JavaScript environments:

| Build Target | Import Path | Best For | Key Features |
|-------------|-------------|----------|--------------|
| **`bundler`** | `@nimiq/core` | Webpack, Vite, Rollup, esbuild | Automatic WebAssembly loading via bundler |
| **`web`** | `@nimiq/core/web` | Vanilla browsers, Cloudflare Workers, Deno | Manual initialization with `init()` |
| **`nodejs`** | `@nimiq/core` | Node.js ≥ 16, Bun | Synchronous loading, no initialization needed |

> **Why multiple builds?** Each JavaScript runtime handles WebAssembly differently. These builds ensure optimal loading and performance for your specific environment.

---

## Installation

Get started by installing the Nimiq core package:

:::code-group

```bash [pnpm]
pnpm add @nimiq/core
```

```bash [npm]
npm install @nimiq/core
```

```bash [yarn]
yarn add @nimiq/core
```

:::

The package includes the WebAssembly binary and TypeScript declarations – no additional build steps required.

## Browser Environments

### Vanilla JavaScript (ES Modules)

For direct browser usage without a bundler, use the `/web` export:

```html
<script type="module">
  import init, * as WebNimiq from '@nimiq/core/web';

  // Initialize the WebAssembly module
  await init();

  // Create and start the client
  const config = new WebNimiq.ClientConfiguration().logLevel('info');
  const client = await WebNimiq.Client.create(config.build());
  await client.waitForConsensusEstablished();

  console.log('Nimiq client is ready!');
</script>
```

**Important:** The `await init()` call is mandatory with the web build. This downloads and compiles the WebAssembly module asynchronously.

### Hosting the WebAssembly File

When serving your application from a CDN, ensure the `nimiq_core_bg.wasm` file is accessible:

```js
// Automatic: loads from same directory as the JS file
await init()

// Manual: specify exact URL
await init('/cdn/path/to/nimiq_core_bg.wasm')
```

Modern browsers cache WebAssembly binaries, so this only adds one network request on first load.

## Bundler Integration

### Modern Bundlers (Vite, Rollup, esbuild)

These bundlers handle WebAssembly automatically:

```js
// Vite example (supports top-level await by default)
import * as ViteNimiq from '@nimiq/core'

const config = new ViteNimiq.ClientConfiguration().build()
const client = await ViteNimiq.Client.create(config)
```

### Webpack Configuration

Webpack requires enabling WebAssembly support:

```js
// webpack.config.js
module.exports = {
  experiments: {
    asyncWebAssembly: true // Enable async WebAssembly
  }
}
```

Then in your application:

```js
// Use dynamic import for async loading
const NimiqCore = await import('@nimiq/core')

const client = await NimiqCore.Client.create(
  new NimiqCore.ClientConfiguration().build()
)
```

## Server Environments

### Node.js (v16+)

Node.js uses the synchronous build – no initialization needed:

```js
// CommonJS
// ES Modules
import * as NodeNimiqESM from '@nimiq/core'

const NodeNimiqCJS = require('@nimiq/core')

// Ready to use immediately
const client = await NodeNimiqESM.Client.create(
  new NodeNimiqESM.ClientConfiguration().build()
)
```

**Why no `init()`?** The Node.js build reads the WebAssembly file directly from disk synchronously.

### Bun Runtime

Bun supports both approaches:

```js
// Option 1: Synchronous (like Node.js)
import * as BunNimiq from '@nimiq/core'

// Option 2: Explicit web build
import init, * as BunNimiqWeb from '@nimiq/core/web'

await init()
```

Choose the approach that best fits your application architecture.

## Edge Runtime Environments

### Cloudflare Workers

Workers pre-compile WebAssembly modules. Configure your `wrangler.toml`:

```toml
[build.upload.wasm_modules]
nimiq = "./node_modules/@nimiq/core/web/nimiq_core_bg.wasm"
```

Then use the pre-compiled module:

```js
import init, * as WorkerNimiq from '@nimiq/core/web'
import nimiqWasm from 'nimiq' // Matches wrangler.toml name

export default {
  async fetch(request, env, ctx) {
    // Initialize with pre-compiled module
    await init(nimiqWasm)

    const client = await WorkerNimiq.Client.create(
      new WorkerNimiq.ClientConfiguration().build()
    )

    return new Response('Nimiq client ready')
  }
}
```

### Deno

Use the web build with Deno's fetch-style loading:

```js
import init, * as DenoNimiq from '@nimiq/core/web'

await init()
const client = await DenoNimiq.Client.create(
  new DenoNimiq.ClientConfiguration().build()
)
```

## TypeScript Integration

The package includes complete TypeScript definitions. For advanced usage with the web build:

```jsonc
{
  "compilerOptions": {
    "types": ["@nimiq/core/web"] // Adds init() and wasm-bindgen types
  }
}
```

This enables proper typing for the `init()` function and WebAssembly loader utilities.

## Troubleshooting

### Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **`TypeError: WebAssembly.instantiate(): buffer source must be of type ArrayBuffer`** | Pass correct type to `init()`: `ArrayBuffer`, `Response`, or `WebAssembly.Module` |
| **404 error on `nimiq_core_bg.wasm`** | Ensure WebAssembly file is accessible at the same URL as your JS bundle, or specify absolute path in `init()` |
| **Client hangs at `waitForConsensusEstablished()`** | Verify correct network (`mainalbatross` or `testalbatross`) and seed node connectivity |
| **"Cannot use import statement outside a module" in Node.js** | Use `.mjs` extension or add `"type": "module"` to `package.json` |

### Network Connectivity

The client needs to connect to Nimiq seed nodes. If you're behind a corporate firewall or restrictive network:

1. Check that WebSocket connections are allowed
2. Verify the correct network configuration
3. Consider using custom seed nodes if needed

### Performance Tips

- **Browsers**: WebAssembly is cached after first load
- **Bundlers**: Consider code splitting for large applications
- **Edge**: Pre-compile WebAssembly when possible (like Cloudflare Workers)

## Quick Start Guide

Choose your path based on your environment:

### I'm building a web app with a bundler
→ Use `import * as Nimiq from '@nimiq/core'`

### I'm writing vanilla JavaScript for browsers
→ Use `import init, * as Nimiq from '@nimiq/core/web'` + `await init()`

### I'm building a Node.js application
→ Use `import * as Nimiq from '@nimiq/core'` (no init needed)

### I'm deploying to Cloudflare Workers
→ Use the web build with pre-compiled modules

## Additional Resources

- [Nimiq Core Package on npm](https://www.npmjs.com/package/@nimiq/core)
- [WebAssembly Build Targets Documentation](https://rustwasm.github.io/wasm-pack/book/commands/build.html#target)
- [Nimiq Webpack Integration Guide](https://nimiq.com/developers/build-with-nimiq/web-client/webpack)
- [Node.js WebAssembly Documentation](https://nodejs.org/api/wasi.html)

**Ready to build with Nimiq?** 🚀

You now have everything you need to integrate the Nimiq light client into any JavaScript environment. Each build target is optimized for its specific runtime, ensuring the best performance and developer experience.

Need help? Join us in the [#nimiq-coders-dojo](https://t.me/nimiq_coders_dojo) Telegram channel or open an issue on GitHub.
