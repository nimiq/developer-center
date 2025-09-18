# Nimiq Web Client Webpack Integration

Complete guide to integrate Nimiq Web Client with Webpack. Build production-ready blockchain applications with Webpack bundler and Nimiq.

## Overview

**Webpack + Nimiq = Complete Control**

Webpack provides maximum flexibility and control for building complex blockchain applications with Nimiq. Perfect for enterprise applications, custom bundling requirements, and advanced optimization needs.

### Why Webpack + Nimiq?

- **🔧 Complete Control**: Fine-tune every aspect of your build
- **📦 Advanced Bundling**: Code splitting, tree shaking, and optimization
- **🎯 Enterprise Ready**: Battle-tested for large-scale applications
- **🚀 Performance**: Optimized builds for production

---

## Installation

### Quick Start

Install the Nimiq Web Client package:

<!--@include: ./_installation.md-->

## Configuration

### Basic Webpack Setup

Update your `webpack.config.js` to enable WebAssembly support:

```javascript
const path = require('node:path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  experiments: { // [!code ++]
    asyncWebAssembly: true, // [!code ++]
  }, // [!code ++]
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.wasm'],
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 8080
  }
}
```

### Advanced Configuration

For production builds with optimization:

```javascript
const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    nimiq: './src/nimiq.js' // Separate entry for Nimiq
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    clean: true
  },
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true // Enable top-level await
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['> 1%', 'last 2 versions']
                }
              }]
            ],
            plugins: [
              '@babel/plugin-syntax-top-level-await'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.wasm'],
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        nimiq: {
          test: /[\\/]node_modules[\\/]@nimiq/,
          name: 'nimiq',
          priority: 10,
          reuseExistingChunk: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  mode: 'production'
}
```

### TypeScript Configuration

For TypeScript projects:

```javascript
const path = require('node:path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.wasm'],
  },
  mode: 'development'
}
```

## Usage Examples

### Basic Implementation

```javascript
// src/index.js
import { Client, ClientConfiguration } from '@nimiq/core'

async function initializeNimiq() {
  try {
    // Show loading state
    document.getElementById('status').textContent = 'Connecting to Nimiq...'

    // Initialize Nimiq client
    const config = new ClientConfiguration()
    const client = await Client.create(config.build())

    // Wait for consensus
    await client.waitForConsensusEstablished()

    // Update UI
    document.getElementById('status').textContent = 'Connected to Nimiq!'
    document.getElementById('block-height').textContent = await client.getBlockNumber()
    document.getElementById('network').textContent = client.getNetworkId()
  }
  catch (error) {
    document.getElementById('status').textContent = `Error: ${error.message}`
  }
}

// Initialize when page loads
window.addEventListener('load', initializeNimiq)
```

### Advanced Application Structure

```javascript
// src/nimiq.js - Dedicated Nimiq module
import { Client, ClientConfiguration } from '@nimiq/core'

class NimiqService {
  constructor() {
    this.client = null
    this.isConnected = false
    this.listeners = []
  }

  async initialize() {
    if (this.client)
      return this.client

    const config = new ClientConfiguration()
    this.client = await Client.create(config.build())

    await this.client.waitForConsensusEstablished()
    this.isConnected = true

    this.notifyListeners('connected')
    return this.client
  }

  async getBlockHeight() {
    if (!this.client)
      throw new Error('Client not initialized')
    return await this.client.getBlockNumber()
  }

  async getAccount(address) {
    if (!this.client)
      throw new Error('Client not initialized')
    return await this.client.getAccount(address)
  }

  onStatusChange(callback) {
    this.listeners.push(callback)
  }

  notifyListeners(status) {
    this.listeners.forEach(callback => callback(status))
  }
}

export const nimiqService = new NimiqService()
```

```javascript
// src/wallet.js - Wallet functionality
import { nimiqService } from './nimiq.js'

export class Wallet {
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.render()
    this.initialize()
  }

  render() {
    this.container.innerHTML = `
      <div class="wallet">
        <h2>Nimiq Wallet</h2>
        <div class="status" id="wallet-status">Initializing...</div>
        <div class="info" id="wallet-info" style="display: none;">
          <p><strong>Block Height:</strong> <span id="block-height">-</span></p>
          <p><strong>Network:</strong> <span id="network">-</span></p>
        </div>
        <div class="actions" id="wallet-actions" style="display: none;">
          <button id="create-wallet">Create Wallet</button>
          <button id="import-wallet">Import Wallet</button>
        </div>
      </div>
    `
  }

  async initialize() {
    try {
      await nimiqService.initialize()

      // Update UI
      document.getElementById('wallet-status').textContent = 'Connected!'
      document.getElementById('block-height').textContent = await nimiqService.getBlockHeight()
      document.getElementById('network').textContent = nimiqService.client.getNetworkId()

      // Show info and actions
      document.getElementById('wallet-info').style.display = 'block'
      document.getElementById('wallet-actions').style.display = 'block'
    }
    catch (error) {
      document.getElementById('wallet-status').textContent = `Error: ${error.message}`
    }
  }
}
```

```javascript
// src/index.js - Main application
import { Wallet } from './wallet.js'
import './styles.css'

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  const wallet = new Wallet('app')
  // Use wallet if needed
})
```

### Web Worker Integration

For performance-critical applications:

```javascript
// src/nimiq-worker.js
import { Client, ClientConfiguration } from '@nimiq/core'

let client = null

globalThis.onmessage = async function (e) {
  const { type, data } = e.data

  try {
    switch (type) {
      case 'initialize': {
        if (!client) {
          const config = new ClientConfiguration()
          client = await Client.create(config.build())
          await client.waitForConsensusEstablished()
        }
        globalThis.postMessage({ type: 'initialized', success: true })
        break
      }

      case 'getBlockHeight': {
        const height = await client.getBlockNumber()
        globalThis.postMessage({ type: 'blockHeight', data: height })
        break
      }

      case 'getAccount': {
        const account = await client.getAccount(data.address)
        globalThis.postMessage({ type: 'account', data: account })
        break
      }

      default:
        globalThis.postMessage({ type: 'error', error: `Unknown message type: ${type}` })
    }
  }
  catch (error) {
    globalThis.postMessage({ type: 'error', error: error.message })
  }
}
```

```javascript
// src/main.js - Using the worker
const worker = new Worker('./nimiq-worker.js')

worker.onmessage = function (e) {
  const { type, data, error } = e.data

  if (error) {
    console.error('Worker error:', error)
    return
  }

  switch (type) {
    case 'initialized':
      console.log('Nimiq initialized in worker')
      worker.postMessage({ type: 'getBlockHeight' })
      break

    case 'blockHeight':
      console.log('Block height:', data)
      break

    case 'account':
      console.log('Account:', data)
      break
  }
}

// Initialize Nimiq in worker
worker.postMessage({ type: 'initialize' })
```

## Development vs Production

### Development Configuration

```javascript
// webpack.dev.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  },
  optimization: {
    splitChunks: false // Disable splitting in development
  }
})
```

### Production Configuration

```javascript
const TerserPlugin = require('terser-webpack-plugin')
// webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        nimiq: {
          test: /[\\/]node_modules[\\/]@nimiq/,
          name: 'nimiq',
          priority: 10
        }
      }
    }
  }
})
```

## Important Notes

> [!WARNING]
> **WebAssembly Loading**: You need to use `await import()` to load the WebAssembly module dynamically:

```javascript
// ❌ This won't work
import BadNimiq from '@nimiq/core'

// ✅ This will work
const GoodNimiq = await import('@nimiq/core')
```

> [!NOTE]
> **Experiments Configuration**: The `experiments.asyncWebAssembly` option is required for WebAssembly support in Webpack 5.

## Common Issues & Solutions

### WebAssembly Loading Issues

If you encounter WASM loading problems:

```javascript
// Add to webpack.config.js
module.exports = {
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  }
}
```

### Cross-Origin Issues

For development servers:

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
}
```

### Bundle Size Optimization

To reduce bundle size:

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        nimiq: {
          test: /[\\/]node_modules[\\/]@nimiq/,
          name: 'nimiq',
          priority: 10,
          chunks: 'async' // Load Nimiq as separate chunk
        }
      }
    }
  }
}
```

## Performance Tips

- **Code Splitting**: Separate Nimiq into its own chunk
- **Tree Shaking**: Import only what you need
- **Web Workers**: Use workers for heavy blockchain operations
- **Caching**: Enable long-term caching with content hashes
- **Lazy Loading**: Load blockchain client only when needed

## Next Steps

Ready to build sophisticated blockchain applications with Webpack and Nimiq!

<div flex="~ gap-16 items-center" class="nq-raw" mt-16>
  <a href="/web-client/browser-vs-server" nq-arrow nq-pill-sm nq-pill-blue>Browser vs Server</a>
  <a href="/web-client/reference/" nq-arrow nq-pill-sm nq-pill-green>API Reference</a>
  <a href="https://webpack.js.org/concepts/" nq-arrow nq-pill-sm nq-pill-tertiary>Webpack Docs</a>
</div>

<!--@include: ./_contribute.md-->
