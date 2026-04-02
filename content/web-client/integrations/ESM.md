---
icon: i-logos:javascript
description: Use the Nimiq Web Client with native ES modules in modern browsers without a bundler.
navigation:
  title: ESM
  order: 4
---

# Nimiq Web Client ESM Integration

Use this approach when you're serving JavaScript directly to the browser without a bundler — for example, from a plain HTML file, a CDN, or a static site. If you're using Vite, Nuxt, or Next.js, use their dedicated integration instead.

The ESM build (`@nimiq/core/web`) requires a manual `init()` call to load the WebAssembly module. See [Browser vs Server](../concepts/browser-vs-server) for details on the different build targets.

## Installation

::code-group

```bash [pnpm]
pnpm add @nimiq/core
```

```bash [npm]
npm install @nimiq/core
```

```bash [yarn]
yarn add @nimiq/core
```

```bash [bun]
bun add @nimiq/core
```

::

## Configuration

No additional configuration needed! ESM works out of the box in modern browsers and bundlers that support ES modules.

## Usage Example

```js
import init, { Client, ClientConfiguration } from '@nimiq/core/web'

await init()

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```

## Next steps

Once your client is connected, see the [guides](../guides/query-the-blockchain) to start building. For other integration options, see [Vite](./vite), [Nuxt](./nuxt), [Next.js](./NextJS), or [CommonJS](./CommonJS).
