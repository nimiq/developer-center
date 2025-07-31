# Nimiq Web Client Vite Integration

How to integrate Nimiq Web Client with Vite for modern web development. Complete setup guide for building blockchain applications with Vite and Nimiq. {.nq-subline}

## Overview

**Vite + Nimiq = Fast Blockchain Development**

Vite is the perfect build tool for Nimiq Web Client applications. With its lightning-fast hot module replacement (HMR) and native ES modules support, you can build blockchain applications quickly and efficiently.

### Why Vite + Nimiq?

- **⚡ Lightning Fast**: Vite's instant server start and HMR
- **🔧 Modern Tooling**: Native ES modules and TypeScript support
- **🎯 Zero Config**: Minimal configuration needed
- **🚀 Production Ready**: Optimized builds with tree-shaking

---

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

### Advanced Configuration

For production builds and advanced features:

```javascript
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ]
  },
  optimizeDeps: {
    exclude: ['@nimiq/core'],
  },
  build: {
    target: 'esnext', // Required for top-level await
    rollupOptions: {
      output: {
        manualChunks: {
          nimiq: ['@nimiq/core']
        }
      }
    }
  },
  server: {
    fs: {
      allow: ['..'] // Allow serving files from parent directories
    }
  }
})
```

## Usage Examples

### Basic Client Setup

<!--@include: ../_demo.bundler.md-->

### Complete Vite + Nimiq Application

```javascript
// main.js
import { Client, ClientConfiguration } from '@nimiq/core'
import './style.css'

async function initializeNimiq() {
  // Create loading indicator
  document.getElementById('app').innerHTML = `
    <div class="loading">
      <h1>Nimiq + Vite</h1>
      <p>Connecting to blockchain...</p>
    </div>
  `

  try {
    // Initialize Nimiq client
    const config = new ClientConfiguration()
    const client = await Client.create(config.build())

    // Wait for consensus
    await client.waitForConsensusEstablished()

    // Update UI
    document.getElementById('app').innerHTML = `
      <div class="app">
        <h1>🚀 Nimiq + Vite</h1>
        <p>✅ Connected to Nimiq blockchain!</p>
        <div class="info">
          <p><strong>Block Height:</strong> ${await client.getBlockNumber()}</p>
          <p><strong>Network:</strong> ${client.getNetworkId()}</p>
        </div>
      </div>
    `
  }
  catch (error) {
    document.getElementById('app').innerHTML = `
      <div class="error">
        <h1>❌ Connection Failed</h1>
        <p>${error.message}</p>
      </div>
    `
  }
}

// Initialize on page load
initializeNimiq()
```

### TypeScript Support

For TypeScript projects, create a `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ]
  },
  optimizeDeps: {
    exclude: ['@nimiq/core'],
  },
})
```

And use it in your TypeScript code:

```typescript
import type { Account } from '@nimiq/core'
// app.ts
import { Client, ClientConfiguration } from '@nimiq/core'

interface AppState {
  client: Client | null
  isConnected: boolean
}

class NimiqApp {
  private state: AppState = {
    client: null,
    isConnected: false
  }

  async initialize(): Promise<void> {
    const config = new ClientConfiguration()
    this.state.client = await Client.create(config.build())

    await this.state.client.waitForConsensusEstablished()
    this.state.isConnected = true
  }

  async getAccount(address: string): Promise<Account> {
    if (!this.state.client) {
      throw new Error('Client not initialized')
    }

    return await this.state.client.getAccount(address)
  }
}

const app = new NimiqApp()
await app.initialize()
```

## Framework Integration

### Vue 3 + Vite

```javascript
import vue from '@vitejs/plugin-vue'
// vite.config.js
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  plugins: [
    vue(),
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ]
  },
  optimizeDeps: {
    exclude: ['@nimiq/core'],
  },
})
```

### React + Vite

```javascript
import react from '@vitejs/plugin-react'
// vite.config.js
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ]
  },
  optimizeDeps: {
    exclude: ['@nimiq/core'],
  },
})
```

## Common Issues & Solutions

### WebAssembly Loading Issues

If you encounter WASM loading problems:

```javascript
// Add this to your vite.config.js
export default defineConfig({
  // ... other config
  server: {
    fs: {
      allow: ['..'] // Allow serving files from parent directories
    }
  }
})
```

### Top-Level Await Issues

Ensure your build target supports top-level await:

```javascript
export default defineConfig({
  // ... other config
  build: {
    target: 'esnext' // Required for top-level await
  }
})
```

### Worker Issues

For Web Worker compatibility:

```javascript
export default defineConfig({
  worker: {
    format: 'es', // Use ES modules in workers
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ]
  }
})
```

## Performance Tips

- **Code Splitting**: Use dynamic imports for large Nimiq operations
- **Lazy Loading**: Initialize Nimiq client only when needed
- **Caching**: Enable Vite's dependency pre-bundling
- **Tree Shaking**: Import only what you need from `@nimiq/core`

## Next Steps

Now you're ready to build amazing blockchain applications with Vite and Nimiq!

<div flex="~ gap-16 items-center" class="nq-raw" mt-16>
  <a href="/web-client/browser-vs-server" nq-arrow nq-pill-sm nq-pill-blue>Browser vs Server</a>
  <a href="/web-client/reference/" nq-arrow nq-pill-sm nq-pill-green>API Reference</a>
  <a href="https://nimiq.guide" nq-arrow nq-pill-sm nq-pill-tertiary>Interactive Tutorial</a>
</div>

<!--@include: ./_contribute.md-->
