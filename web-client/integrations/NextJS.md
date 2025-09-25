# Nimiq Web Client Next.js Integration

Integrate Nimiq Web Client with Next.js for production-ready React blockchain applications.

## Quick Start with Template

Get started instantly with our pre-configured Next.js starter:

```bash
npx degit onmax/nimiq-starter/starters/next-js my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

## Installation

### Quick Start

Install the Nimiq Web Client package:

<!--@include: ./_installation.md-->

## Configuration

### Next.js Config

Next.js supports WebAssembly out of the box, but you need to configure it for optimal Nimiq integration:

```javascript
// next.config.js
import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Enable WebAssembly
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
    }

    // Configure module rules for WebAssembly
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    })

    // Enhanced module resolution for @nimiq/core
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@nimiq/core': path.resolve('./node_modules/@nimiq/core/bundler/index.js'),
      },
      fallback: {
        ...config.resolve?.fallback,
        path: false,
        fs: false,
      },
      // Add .js extension for ESM imports
      extensions: [...(config.resolve?.extensions || []), '.js', '.mjs'],
    }

    // Exclude @nimiq/core from optimization
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            ...(config.optimization?.splitChunks)?.cacheGroups,
            nimiq: {
              test: /@nimiq/,
              name: 'nimiq',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }

    return config
  },
}

module.exports = nextConfig
```

## Usage Example

```tsx
// pages/wallet.tsx
import { Client, ClientConfiguration } from '@nimiq/core'
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
    </div>
  )
}
```
