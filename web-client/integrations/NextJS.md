---
pageFooterLeftText: 'Page inspired by [DovAzencot](https://github.com/DovAzencot/nimiq-nextjs/)'
---

# Nimiq Web Client Next.js Integration

Integrate Nimiq Web Client with Next.js for production-ready React blockchain applications.

## Quick Start with Template

Get started instantly with our pre-configured Next.js starter:

```bash
npx degit onmax/nimiq-starter/starters/next-js my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

> [!NOTE] Community Contribution
> The Next.js starter is based on the original implementation by [DovAzencot](https://github.com/DovAzencot/nimiq-nextjs/).

## Installation

### Quick Start

Install the Nimiq Web Client package:

::: code-group

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

:::

## Configuration & Usage

::: code-group

```javascript [next.config.js]
import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
    }

    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    })

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
      extensions: [...(config.resolve?.extensions || []), '.js', '.mjs'],
    }

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

```tsx [hooks/useNimiq.ts]
import { Client, ClientConfiguration } from '@nimiq/core'
import { useEffect, useState } from 'react'

export function useNimiq() {
  const [client, setClient] = useState<Client | null>(null)
  const [blockHeight, setBlockHeight] = useState(0)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function init() {
      setIsConnecting(true)
      try {
        const config = new ClientConfiguration()
        const nimiqClient = await Client.create(config.build())
        await nimiqClient.waitForConsensusEstablished()

        if (mounted) {
          setClient(nimiqClient)
          setBlockHeight(await nimiqClient.getBlockNumber())
        }
      }
      catch (err) {
        if (mounted)
          setError(err instanceof Error ? err.message : 'Failed to connect')
      }
      finally {
        if (mounted)
          setIsConnecting(false)
      }
    }

    init()
    return () => {
      mounted = false
    }
  }, [])

  return { client, blockHeight, isConnecting, error }
}
```

```tsx [pages/wallet.tsx]
import { useNimiq } from '../hooks/useNimiq'

export default function Wallet() {
  const { client, blockHeight, isConnecting, error } = useNimiq()

  if (isConnecting)
    return <p>Connecting to blockchain...</p>
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    )
  }

  return (
    <div>
      <h1>Nimiq Wallet</h1>
      <p>
        Block Height:
        {blockHeight.toLocaleString()}
      </p>
      <p>
        Network:
        {client?.getNetworkId()}
      </p>
    </div>
  )
}
```

:::
