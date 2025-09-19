# Nimiq Web Client Vite Integration

Integrate Nimiq Web Client with Vite for fast blockchain development with minimal configuration.

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
    topLevelAwait(), // [!code ++]
  ],
  worker: { // [!code ++]
    plugins: () => [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ] // [!code ++]
  }, // [!code ++]

  optimizeDeps: { // [!code ++]
    exclude: ['@nimiq/core'], // [!code ++]
  }, // [!code ++]
})
```

## Usage Example

<!--@include: ../_demo.bundler.md-->
