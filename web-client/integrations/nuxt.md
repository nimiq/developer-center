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

```vue
<!-- pages/wallet.vue -->
<script setup lang="ts">
import { Client, ClientConfiguration } from '@nimiq/core'

// Client-side only
definePageMeta({
  ssr: false
})

const isConnecting = ref(true)
const isConnected = ref(false)
const blockHeight = ref(0)
const networkId = ref('')

onMounted(async () => {
  try {
    const config = new ClientConfiguration()
    const client = await Client.create(config.build())

    await client.waitForConsensusEstablished()

    blockHeight.value = await client.getBlockNumber()
    networkId.value = client.getNetworkId()

    isConnected.value = true
  }
  catch (error) {
    console.error('Failed to connect:', error)
  }
  finally {
    isConnecting.value = false
  }
})
</script>

<template>
  <div>
    <h1>Nimiq Wallet</h1>
    <div v-if="isConnecting">
      <p>Connecting to blockchain...</p>
    </div>
    <div v-else-if="isConnected">
      <p>✅ Connected to Nimiq!</p>
      <p><strong>Block Height:</strong> {{ blockHeight }}</p>
      <p><strong>Network:</strong> {{ networkId }}</p>
    </div>
    <div v-else>
      <p>❌ Connection failed</p>
    </div>
  </div>
</template>
```
