# Using the Nimiq Web Client Across JavaScript Runtimes

Learn how to integrate the Nimiq Albatross light client in any JavaScript environment – from browsers to servers to edge runtimes.

## Overview

The Nimiq Albatross light client is distributed as `@nimiq/core` on npm and comes with three optimized WebAssembly builds, each tailored for different JavaScript environments:

<table>
<thead>
  <tr>
    <th>
      Build Target
    </th>
    
    <th>
      Import Path
    </th>
    
    <th>
      Best For
    </th>
    
    <th>
      Key Features
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        <code>
          bundler
        </code>
      </strong>
    </td>
    
    <td>
      <code>
        @nimiq/core
      </code>
    </td>
    
    <td>
      Webpack, Vite, Rollup, esbuild
    </td>
    
    <td>
      Automatic WebAssembly loading via bundler
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        <code>
          web
        </code>
      </strong>
    </td>
    
    <td>
      <code>
        @nimiq/core/web
      </code>
    </td>
    
    <td>
      Vanilla browsers, Cloudflare Workers, Deno
    </td>
    
    <td>
      Manual initialization with <code>
        init()
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        <code>
          nodejs
        </code>
      </strong>
    </td>
    
    <td>
      <code>
        @nimiq/core
      </code>
    </td>
    
    <td>
      Node.js ≥ 16, Bun
    </td>
    
    <td>
      Synchronous loading, no initialization needed
    </td>
  </tr>
</tbody>
</table>

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

<callout icon="i-tabler-info-circle" color="info">

The `await init()` call is mandatory with the web build.

</callout>

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

<callout icon="i-tabler-info-circle" color="info">

**Why no init()?**

The Node.js build reads the WebAssembly file directly from disk synchronously.

</callout>

<callout icon="i-tabler:help-circle" to="https://github.com/nimiq/developer-center/issues">

**Need help with a different environment?** — We're here to help you integrate Nimiq with any JavaScript runtime or deployment platform.

</callout>

## Additional Resources

- [Nimiq Core Package on npm](https://www.npmjs.com/package/@nimiq/core)
- [WebAssembly Build Targets Documentation](https://rustwasm.github.io/wasm-pack/book/commands/build.html#target)
- [Node.js WebAssembly Documentation](https://nodejs.org/api/wasi.html)
