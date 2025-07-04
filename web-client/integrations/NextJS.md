# Nimiq Web Client Next.js Integration

Complete guide to integrate Nimiq Web Client with Next.js. Build modern React blockchain applications with Next.js and Nimiq. {.nq-subline}

## Overview

**Next.js + Nimiq = Enterprise Blockchain Apps**

Next.js is the production-ready React framework that's perfect for building scalable blockchain applications with Nimiq. Whether you're building client-side dApps or full-stack blockchain platforms, Next.js provides the tools you need.

### Why Next.js + Nimiq?

- **🚀 Production Ready**: Built-in optimizations and performance
- **🔧 Full-Stack**: API routes for server-side blockchain operations
- **⚡ Fast**: Automatic code splitting and optimizations
- **🎯 Flexible**: SSR, SSG, and SPA modes

---

## Installation

### Quick Start

Install the Nimiq Web Client package:

<!--@include: ./_installation.md-->

## Configuration

### Next.js Config

Next.js supports WebAssembly out of the box, but you need to configure it for optimal Nimiq integration:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable WebAssembly
  webpack: (config, { isServer }) => {
    // Enable WebAssembly
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

    // Handle .wasm files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    })

    // Optimize for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },
  // Enable experimental features
  experimental: {
    // Enable WebAssembly
    esmExternals: true,
  },
}

module.exports = nextConfig
```

### TypeScript Configuration

For TypeScript projects, update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "esnext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Usage Examples

### Client-Side Application

Build a client-side wallet application:

```tsx
import { Client, ClientConfiguration } from '@nimiq/core'
// pages/wallet.tsx
import { useEffect, useState } from 'react'

export default function Wallet() {
  const [client, setClient] = useState<Client | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [blockHeight, setBlockHeight] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const initializeNimiq = async () => {
      setIsConnecting(true)
      setError(null)

      try {
        const config = new ClientConfiguration()
        const nimiqClient = await Client.create(config.build())

        await nimiqClient.waitForConsensusEstablished()

        if (mounted) {
          setClient(nimiqClient)
          setIsConnected(true)
          setBlockHeight(await nimiqClient.getBlockNumber())
        }
      }
      catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to connect')
        }
      }
      finally {
        if (mounted) {
          setIsConnecting(false)
        }
      }
    }

    initializeNimiq()

    return () => {
      mounted = false
    }
  }, [])

  if (isConnecting) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Nimiq Wallet</h1>
          <p>Connecting to blockchain...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Connection Error</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto p-4 container">
      <h1 className="text-3xl font-bold mb-6">Nimiq Wallet</h1>

      {isConnected && (
        <div className="bg-green-100 text-green-700 mb-6 px-4 py-3 border border-green-400 rounded">
          ✅ Connected to Nimiq blockchain!
        </div>
      )}

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 rounded-lg bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Network Status</h2>
          <div className="space-y-2">
            <p>
              <strong>Block Height:</strong>
              {' '}
              {blockHeight.toLocaleString()}
            </p>
            <p>
              <strong>Network:</strong>
              {' '}
              {client?.getNetworkId()}
            </p>
            <p>
              <strong>Status:</strong>
              {' '}
              {isConnected ? 'Connected' : 'Disconnected'}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Wallet Actions</h2>
          <div className="space-y-3">
            <button className="hover:bg-blue-700 text-white font-bold px-4 py-2 rounded bg-blue-500 w-full">
              Create Wallet
            </button>
            <button className="hover:bg-green-700 text-white font-bold px-4 py-2 rounded bg-green-500 w-full">
              Import Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### API Routes

Create server-side blockchain APIs:

```typescript
// pages/api/blockchain/status.ts
import type { NextApiRequest, NextApiResponse } from 'next'
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const nimiqClient = await getClient()

    const [blockHeight, networkId] = await Promise.all([
      nimiqClient.getBlockNumber(),
      Promise.resolve(nimiqClient.getNetworkId())
    ])

    res.status(200).json({
      status: 'connected',
      blockHeight,
      networkId,
      timestamp: Date.now()
    })
  }
  catch (error) {
    console.error('Blockchain API error:', error)
    res.status(500).json({
      message: 'Failed to connect to blockchain',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
```

### Account Balance API

```typescript
// pages/api/account/[address].ts
import type { NextApiRequest, NextApiResponse } from 'next'
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { address } = req.query

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ message: 'Address parameter is required' })
  }

  try {
    const nimiqClient = await getClient()
    const nimiqAddress = Address.fromUserFriendlyAddress(address)
    const account = await nimiqClient.getAccount(nimiqAddress)

    res.status(200).json({
      address,
      balance: account.balance.toString(),
      nonce: account.nonce,
      type: account.type
    })
  }
  catch (error) {
    console.error('Account API error:', error)
    res.status(400).json({
      message: 'Invalid address or account not found',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
```

### React Hooks

Create reusable hooks for Nimiq:

```typescript
import { Client, ClientConfiguration } from '@nimiq/core'
// hooks/useNimiq.ts
import { useCallback, useEffect, useState } from 'react'

export function useNimiq() {
  const [client, setClient] = useState<Client | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const connect = useCallback(async () => {
    if (client)
      return client

    setIsConnecting(true)
    setError(null)

    try {
      const config = new ClientConfiguration()
      const nimiqClient = await Client.create(config.build())
      await nimiqClient.waitForConsensusEstablished()

      setClient(nimiqClient)
      setIsConnected(true)
      return nimiqClient
    }
    catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to connect')
      setError(error)
      throw error
    }
    finally {
      setIsConnecting(false)
    }
  }, [client])

  const getBlockHeight = useCallback(async () => {
    const nimiqClient = await connect()
    return await nimiqClient.getBlockNumber()
  }, [connect])

  const getAccount = useCallback(async (address: string) => {
    const nimiqClient = await connect()
    return await nimiqClient.getAccount(address)
  }, [connect])

  return {
    client,
    isConnected,
    isConnecting,
    error,
    connect,
    getBlockHeight,
    getAccount
  }
}
```

### App Router (Next.js 13+)

For the new App Router:

```tsx
// app/wallet/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useNimiq } from '@/hooks/useNimiq'

export default function WalletPage() {
  const { isConnected, isConnecting, connect, getBlockHeight, error } = useNimiq()
  const [blockHeight, setBlockHeight] = useState(0)

  useEffect(() => {
    const initialize = async () => {
      try {
        await connect()
        const height = await getBlockHeight()
        setBlockHeight(height)
      }
      catch (err) {
        console.error('Failed to initialize:', err)
      }
    }

    initialize()
  }, [connect, getBlockHeight])

  if (isConnecting) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-b-2 border-blue-500 rounded-full h-32 w-32 animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-red-600 font-bold mb-4">Connection Error</h1>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto p-4 container">
      <h1 className="text-3xl font-bold mb-6">Nimiq Wallet</h1>

      {isConnected && (
        <div className="bg-green-100 text-green-700 mb-6 px-4 py-3 border border-green-400 rounded">
          ✅ Connected to Nimiq blockchain!
        </div>
      )}

      <div className="p-6 rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Network Status</h2>
        <p>
          <strong>Block Height:</strong>
          {' '}
          {blockHeight.toLocaleString()}
        </p>
        <p>
          <strong>Status:</strong>
          {' '}
          {isConnected ? 'Connected' : 'Disconnected'}
        </p>
      </div>
    </div>
  )
}
```

## Deployment

### Static Export

For static hosting:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Vercel Deployment

For Vercel with API routes:

```json
{
  "functions": {
    "pages/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## Common Issues & Solutions

### WebAssembly Loading

If you encounter WASM loading issues:

```javascript
// next.config.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    return config
  },
}
```

### Dynamic Imports

For better performance, use dynamic imports:

```typescript
// Use dynamic imports for Nimiq
async function loadNimiq() {
  const { Client, ClientConfiguration } = await import('@nimiq/core')
  return { Client, ClientConfiguration }
}
```

## Performance Tips

- **Code Splitting**: Use dynamic imports for Nimiq modules
- **Lazy Loading**: Load blockchain client only when needed
- **API Caching**: Cache API responses for better performance
- **Prefetching**: Preload critical blockchain data

## Next Steps

Ready to build production-ready blockchain applications with Next.js and Nimiq!

<div flex="~ gap-16 items-center" class="nq-raw" mt-16>
  <a href="/web-client/browser-vs-server" nq-arrow nq-pill-sm nq-pill-blue>Browser vs Server</a>
  <a href="/web-client/reference/" nq-arrow nq-pill-sm nq-pill-green>API Reference</a>
  <a href="https://nextjs.org/docs" nq-arrow nq-pill-sm nq-pill-tertiary>Next.js Docs</a>
</div>

<!--@include: ./_contribute.md-->
