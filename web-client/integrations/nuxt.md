# Nimiq Web Client Nuxt Integration

Integrate Nimiq Web Client with Nuxt 3 for full-stack blockchain applications.

## Installation

### Quick Start

Install the Nimiq Web Client and required Vite plugins:

::: code-group

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

:::

## Configuration

### Basic Nuxt Setup

Update your `nuxt.config.ts`:

```typescript
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineNuxtConfig({
  vite: { // [!code ++]
    build: { target: 'esnext' }, // [!code ++]
    plugins: [wasm()], // [!code ++]
    worker: { plugins: () => [wasm()] }, // [!code ++]
    optimizeDeps: { // [!code ++]
      exclude: ['@nimiq/core'], // [!code ++]
    }, // [!code ++]
  }, // [!code ++]

  // Only if you are using SSR or @nimiq/core in the server,
  // otherwise use `ssr: false` or `<ClientOnly />`
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
