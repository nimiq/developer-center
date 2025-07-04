# Nimiq Web Client Nuxt Integration

Complete guide to integrate Nimiq Web Client with Nuxt 3. Build server-side rendered blockchain applications with Nuxt and Nimiq. {.nq-subline}

## Overview

**Nuxt 3 + Nimiq = Full-Stack Blockchain Apps**

Nuxt 3 is the perfect framework for building full-stack blockchain applications with Nimiq. Whether you're building client-side dApps or server-side blockchain APIs, Nuxt provides the flexibility you need.

### Why Nuxt + Nimiq?

- **🎯 Universal**: Works in browser and server environments
- **⚡ Performance**: Built-in optimizations and code splitting
- **🔧 Developer Experience**: Auto-imports and type safety
- **🚀 Production Ready**: SSR, SSG, and SPA modes

---

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

### Advanced Configuration

For production applications with advanced features:

```typescript
export default defineNuxtConfig({
  vite: {
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
      target: 'esnext',
    }
  },
  nitro: {
    experimental: {
      wasm: true
    },
  },
  // Enable TypeScript strict mode
  typescript: {
    strict: true
  },
  // Configure CSS framework
  css: ['~/assets/css/main.css'],
  // Runtime config for environment variables
  runtimeConfig: {
    // Server-side only
    nimiqNodeUrl: process.env.NIMIQ_NODE_URL,
    // Public (client-side)
    public: {
      nimiqNetwork: process.env.NIMIQ_NETWORK || 'main'
    }
  }
})
```

## Usage Examples

### Client-Side Only (Browser)

For pure client-side blockchain applications:

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

### Server-Side API

Create blockchain APIs with Nuxt server routes:

```typescript
// server/api/blockchain/status.get.ts
import { Client, ClientConfiguration } from '@nimiq/core'

let client: Client | null = null

// Initialize client once
async function getClient() {
  if (!client) {
    const config = new ClientConfiguration()
    client = await Client.create(config.build())
    await client.waitForConsensusEstablished()
  }
  return client
}

export default defineEventHandler(async (event) => {
  try {
    const nimiqClient = await getClient()

    const [blockHeight, networkId] = await Promise.all([
      nimiqClient.getBlockNumber(),
      Promise.resolve(nimiqClient.getNetworkId())
    ])

    return {
      status: 'connected',
      blockHeight,
      networkId,
      timestamp: Date.now()
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to connect to blockchain'
    })
  }
})
```

### Account Balance API

```typescript
// server/api/account/[address].get.ts
import { Address, Client, ClientConfiguration } from '@nimiq/core'

let client: Client | null = null

async function getClient() {
  if (!client) {
    const config = new ClientConfiguration()
    client = await Client.create(config.build())
    await client.waitForConsensusEstablished()
  }
  return client
}

export default defineEventHandler(async (event) => {
  const address = getRouterParam(event, 'address')

  if (!address) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Address parameter is required'
    })
  }

  try {
    const nimiqClient = await getClient()
    const nimiqAddress = Address.fromUserFriendlyAddress(address)
    const account = await nimiqClient.getAccount(nimiqAddress)

    return {
      address,
      balance: account.balance.toString(),
      nonce: account.nonce,
      type: account.type
    }
  }
  catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid address or account not found'
    })
  }
})
```

### Hybrid Application

Combine client-side and server-side features:

```vue
<!-- pages/explorer.vue -->
<script setup lang="ts">
// Server-side data fetching
const { data } = await $fetch('/api/blockchain/status')

// Client-side reactive data
const lookupAddress = ref('')
const accountInfo = ref(null)
const isLoading = ref(false)

async function lookupAccount() {
  if (!lookupAddress.value)
    return

  isLoading.value = true
  try {
    accountInfo.value = await $fetch(`/api/account/${lookupAddress.value}`)
  }
  catch (error) {
    console.error('Failed to lookup account:', error)
    accountInfo.value = null
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h1>Nimiq Block Explorer</h1>

    <!-- Server-rendered initial data -->
    <div v-if="data">
      <h2>Latest Block</h2>
      <p><strong>Height:</strong> {{ data.blockHeight }}</p>
      <p><strong>Network:</strong> {{ data.networkId }}</p>
    </div>

    <!-- Client-side address lookup -->
    <div class="address-lookup">
      <h2>Address Lookup</h2>
      <input v-model="lookupAddress" placeholder="Enter address">
      <button :disabled="isLoading" @click="lookupAccount">
        {{ isLoading ? 'Loading...' : 'Lookup' }}
      </button>

      <div v-if="accountInfo">
        <h3>Account Info</h3>
        <p><strong>Balance:</strong> {{ accountInfo.balance }} NIM</p>
        <p><strong>Nonce:</strong> {{ accountInfo.nonce }}</p>
      </div>
    </div>
  </div>
</template>
```

## Nuxt Composables

### useNimiq Composable

Create a reusable composable for Nimiq client:

```typescript
// composables/useNimiq.ts
import { Client, ClientConfiguration } from '@nimiq/core'

export function useNimiq() {
  const client = ref<Client | null>(null)
  const isConnected = ref(false)
  const isConnecting = ref(false)
  const error = ref<Error | null>(null)

  const connect = async () => {
    if (client.value)
      return client.value

    isConnecting.value = true
    error.value = null

    try {
      const config = new ClientConfiguration()
      client.value = await Client.create(config.build())
      await client.value.waitForConsensusEstablished()
      isConnected.value = true
      return client.value
    }
    catch (err) {
      error.value = err as Error
      throw err
    }
    finally {
      isConnecting.value = false
    }
  }

  const getBlockHeight = async () => {
    const nimiqClient = await connect()
    return await nimiqClient.getBlockNumber()
  }

  const getAccount = async (address: string) => {
    const nimiqClient = await connect()
    return await nimiqClient.getAccount(address)
  }

  return {
    client: readonly(client),
    isConnected: readonly(isConnected),
    isConnecting: readonly(isConnecting),
    error: readonly(error),
    connect,
    getBlockHeight,
    getAccount
  }
}
```

Use it in your components:

```vue
<script setup lang="ts">
const { isConnected, isConnecting, connect, getBlockHeight } = useNimiq()

const blockHeight = ref(0)

onMounted(async () => {
  await connect()
  blockHeight.value = await getBlockHeight()
})
</script>
```

## Deployment

### Static Site Generation (SSG)

For static hosting with client-side Nimiq:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/wallet', '/explorer']
    }
  },
  // Generate static site
  ssr: false // or use <ClientOnly> components
})
```

### Server-Side Rendering (SSR)

For full SSR with server-side Nimiq:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    experimental: {
      wasm: true
    }
  },
  // Enable SSR (default)
  ssr: true
})
```

## Common Issues & Solutions

### WASM in Server Context

If you encounter WASM issues on the server:

```typescript
// Use process.client to check environment
if (process.client) {
  // Browser-only code
  const { Client } = await import('@nimiq/core')
}
```

### Hydration Mismatch

For hydration issues, use `<ClientOnly>`:

```vue
<template>
  <div>
    <ClientOnly>
      <NimiqWallet />
      <template #fallback>
        <div>Loading wallet...</div>
      </template>
    </ClientOnly>
  </div>
</template>
```

## Performance Tips

- **Lazy Loading**: Use dynamic imports for Nimiq components
- **Code Splitting**: Leverage Nuxt's automatic code splitting
- **Caching**: Use Nuxt's built-in caching for API routes
- **Preloading**: Preload Nimiq client on route transitions

## Next Steps

Ready to build full-stack blockchain applications with Nuxt and Nimiq!

<div flex="~ gap-16 items-center" class="nq-raw" mt-16>
  <a href="/web-client/browser-vs-server" nq-arrow nq-pill-sm nq-pill-blue>Browser vs Server</a>
  <a href="/web-client/reference/" nq-arrow nq-pill-sm nq-pill-green>API Reference</a>
  <a href="https://nuxt.com/docs" nq-arrow nq-pill-sm nq-pill-tertiary>Nuxt Docs</a>
</div>

<!--@include: ./_contribute.md-->
