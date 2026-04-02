---
icon: i-logos:vitejs
description: Set up the Nimiq Web Client with Vite for fast blockchain development with minimal configuration.
navigation:
  title: Vite
  order: 1
---

# Nimiq Web Client Vite Integration

Integrate Nimiq Web Client with Vite for fast blockchain development with minimal configuration.

## Quick Start with Templates

Get started instantly with our pre-configured starter templates:

::code-group
```bash [Vue]
npx degit onmax/nimiq-starter/starters/vue-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

```bash [React]
npx degit onmax/nimiq-starter/starters/react-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```
::

## Installation

### Quick Start

Install the Nimiq Web Client and required Vite plugins:

::code-group

```bash [pnpm]
pnpm add @nimiq/core
pnpm add -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [npm]
npm install @nimiq/core
npm install -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [yarn]
yarn add @nimiq/core
yarn add -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [bun]
bun add @nimiq/core
bun add -D vite-plugin-top-level-await vite-plugin-wasm
```

::

## Configuration

### Basic Vite Setup

Update your `vite.config.js` or `vite.config.ts`:

```javascript
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineConfig({
  plugins: [
    wasm(), // [!code ++]
  ],
  worker: { // [!code ++]
    format: 'es', // [!code ++]
    plugins: () => [wasm()], // [!code ++]
  }, // [!code ++]
  optimizeDeps: { // [!code ++]
    exclude: ['@nimiq/core'], // [!code ++]
  }, // [!code ++]
})
```

## Usage Example

```js
import { Client, ClientConfiguration } from '@nimiq/core'

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```

## Next steps

Once your client is connected, see the [guides](../guides/query-the-blockchain) to start building. For other integration options, see [Nuxt](./nuxt), [Next.js](./NextJS), [ESM](./ESM), or [CommonJS](./CommonJS).
