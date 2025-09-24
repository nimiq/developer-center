# Nimiq Web Client Nuxt Integration

Integrate Nimiq Web Client with Nuxt 3 for full-stack blockchain applications.

## Installation

### Quick Start

Install the Nimiq Web Client and required Vite plugins:

<!--@include: ./_installation-vite.md-->

## Configuration

### Basic Nuxt Setup

Update your `nuxt.config.ts`:

```typescript
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineNuxtConfig({
  vite: { // [!code ++]
    plugins: [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ], // [!code ++]
    worker: { // [!code ++]
      plugins: () => [ // [!code ++]
        wasm(), // [!code ++]
        topLevelAwait(), // [!code ++]
      ] // [!code ++]
    }, // [!code ++]

    optimizeDeps: { // [!code ++]
      exclude: ['@nimiq/core'], // [!code ++]
    }, // [!code ++]
  }, // [!code ++]

  // Only if you are using SSR or @nimiq/core in the server,
  // otherwise use `ssr: false` or `<ClientOnly />`
  // Check https://github.com/unjs/nitro/issues/1952 for more info
  nitro: { // [!code ++]
    experimental: { // [!code ++]
      wasm: true // [!code ++]
    }, // [!code ++]
  }, // [!code ++]
})
```

## Usage Example

::: warning Client-Side Only
The Nimiq Web Client must run in the browser. Use one of these approaches:
- Wrap components with `<ClientOnly>`
- Use `.client.ts` filename suffix
- Set `ssr: false` in page meta
:::

<!--@include: ../_demo.bundler.md-->

### With Client-Only Wrapper

```vue
<template>
  <ClientOnly>
    <NimiqWallet />
  </ClientOnly>
</template>
```
