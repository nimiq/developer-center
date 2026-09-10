---
icon: i-logos:nuxt-icon
description: Set up the Nimiq Web Client with Nuxt for full-stack blockchain applications.
navigation:
  title: Nuxt
  order: 2
---

# Nimiq Web Client Nuxt Integration

Integrate Nimiq Web Client with Nuxt for full-stack blockchain applications.

## Installation

Install the Nimiq Web Client:

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

The Nimiq Web Client includes a Vite plugin that automatically configures WebAssembly support and all required optimizations.

> [!TIP]
> View the [plugin source code](https://github.com/nimiq/core-rs-albatross/blob/albatross/web-client/dist/vite.js) for implementation details.

Update your `nuxt.config.ts`:

::code-group

```ts [nuxt.config.ts]
import nimiq from '@nimiq/core/vite' // [!code ++]

export default defineNuxtConfig({
  vite: { // [!code ++]
    plugins: [nimiq()], // [!code ++]
  }, // [!code ++]

  // Only if you are using SSR or @nimiq/core in the server,
  // otherwise use `ssr: false` or `<ClientOnly />`
  nitro: { // [!code ++]
    experimental: { // [!code ++]
      wasm: true, // [!code ++]
    }, // [!code ++]
  }, // [!code ++]
})
```

::

The plugin automatically configures:
- WebAssembly support with `vite-plugin-wasm`
- Worker configuration for WASM modules (opt-out via `{ worker: false }`)
- Build target optimizations (`esnext`)
- Dependency exclusions for `@nimiq/core`

<details>
<summary>Legacy Browser Support</summary>

Modern browsers (Chrome 89+, Firefox 89+, Safari 15+, Edge 89+) support top-level await natively. If you need to support older browsers, install `vite-plugin-top-level-await`:

::code-group

```bash [pnpm]
pnpm add -D vite-plugin-top-level-await
```

```bash [npm]
npm install -D vite-plugin-top-level-await
```

```bash [yarn]
yarn add -D vite-plugin-top-level-await
```

```bash [bun]
bun add -D vite-plugin-top-level-await
```

::

Then add it to your Nuxt config:

::code-group

```ts [nuxt.config.ts]
import nimiq from '@nimiq/core/vite'
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]

export default defineNuxtConfig({
  vite: {
    plugins: [
      nimiq(),
      topLevelAwait(), // [!code ++]
    ],
  },
})
```

::

> [!NOTE]
> Top-level await is required for ES modules when using dynamic WASM imports. The plugin transforms top-level await to work in older browsers.

</details>

## Usage Example

::callout{icon="i-tabler-alert-triangle" color="warning"}
**Client-Side Only**

The Nimiq Web Client must run in the browser. Use one of these approaches:
- Wrap components with `<ClientOnly>`
- Use `.client.ts` filename suffix
- Set `ssr: false` in page meta
::

```js
import { Client, ClientConfiguration } from '@nimiq/core'

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```

### With Client-Only Wrapper

```vue
<template>
  <ClientOnly>
    <NimiqWallet />
  </ClientOnly>
</template>
```

## Next steps

Once your client is connected, see the [guides](/web-client/guides/query-the-blockchain) to start building. For other integration options, see [Vite](/web-client/integrations/vite), [Next.js](/web-client/integrations/nextjs), [ESM](/web-client/integrations/esm), or [CommonJS](/web-client/integrations/commonjs).
