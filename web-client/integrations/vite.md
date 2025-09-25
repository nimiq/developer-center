# Nimiq Web Client Vite Integration

Integrate Nimiq Web Client with Vite for fast blockchain development with minimal configuration.

## Quick Start with Templates

Get started instantly with our pre-configured starter templates:

::: code-group
```bash [Vue 3 + TypeScript]
npx degit onmax/nimiq-starter/starters/vue-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

```bash [React + TypeScript]
npx degit onmax/nimiq-starter/starters/react-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```
:::

## Installation

### Quick Start

Install the Nimiq Web Client and required Vite plugins:

<!--@include: ./_installation-vite.md-->

## Configuration

### Basic Vite Setup

Update your `vite.config.js` or `vite.config.ts`:

```javascript
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineConfig({
  plugins: [
    wasm(), // [!code ++]
    topLevelAwait({ // [!code ++]
      // The module that contains the top-level await // [!code ++]
      promiseExportName: '__tla', // [!code ++]
      // The function to generate the promise export name // [!code ++]
      promiseImportName: i => `__tla_${i}`, // [!code ++]
    }), // [!code ++]
  ],
  worker: { // [!code ++]
    format: 'es', // [!code ++]
    plugins: () => [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait({ // [!code ++]
        promiseExportName: '__tla', // [!code ++]
        promiseImportName: i => `__tla_${i}`, // [!code ++]
      }), // [!code ++]
    ] // [!code ++]
  }, // [!code ++]

  optimizeDeps: { // [!code ++]
    exclude: ['@nimiq/core'], // [!code ++]
  }, // [!code ++]

  // Additional build configuration for Nimiq // [!code ++]
  build: { // [!code ++]
    target: 'esnext', // [!code ++]
    rollupOptions: { // [!code ++]
      output: { // [!code ++]
        format: 'es', // [!code ++]
      }, // [!code ++]
    }, // [!code ++]
  }, // [!code ++]
})
```

## Usage Example

<!--@include: ../_demo.bundler.md-->
