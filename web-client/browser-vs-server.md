# Using the Nimiq Web Client Across JavaScript Runtimes

Learn how to integrate the Nimiq Albatross light client in any JavaScript environment – from browsers to servers to edge runtimes.

## Overview

The Nimiq Albatross light client is distributed as `@nimiq/core` on npm and comes with three optimized WebAssembly builds, each tailored for different JavaScript environments:

| Build Target | Import Path | Best For | Key Features |
|-------------|-------------|----------|--------------|
| **`bundler`** | `@nimiq/core` | Webpack, Vite, Rollup, esbuild | Automatic WebAssembly loading via bundler |
| **`web`** | `@nimiq/core/web` | Vanilla browsers, Cloudflare Workers, Deno | Manual initialization with `init()` |
| **`nodejs`** | `@nimiq/core` | Node.js ≥ 16, Bun | Synchronous loading, no initialization needed |

> **Why multiple builds?** Each JavaScript runtime handles WebAssembly differently. These builds ensure optimal loading and performance for your specific environment.

---

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

> [!NOTE]
> The `await init()` call is mandatory with the web build.

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
import * as Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration().build()
const client = await Nimiq.Client.create(config)
```

## Server Environments

### Node.js (v24+)

Node.js uses the synchronous build – no initialization needed:

```js
import * as Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration().build()
const client = await Nimiq.Client.create(config)
```

> [!NOTE] Why no `init()`?
> The Node.js build reads the WebAssembly file directly from disk synchronously.

<script setup lang="ts">
import Banner from '../.vitepress/theme/components/Banner.vue'
</script>

<Banner
  label="Another runtime?"
  headline="Need help with a different environment?"
  subline="We're here to help you integrate Nimiq with any JavaScript runtime or deployment platform."
  linkHref="https://github.com/nimiq/developer-center/issues"
  linkLabel="Open an issue"
/>

<!-- ### Bun Runtime

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

This enables proper typing for the `init()` function and WebAssembly loader utilities. -->

## Additional Resources

- [Nimiq Core Package on npm](https://www.npmjs.com/package/@nimiq/core)
- [WebAssembly Build Targets Documentation](https://rustwasm.github.io/wasm-pack/book/commands/build.html#target)
- [Node.js WebAssembly Documentation](https://nodejs.org/api/wasi.html)
