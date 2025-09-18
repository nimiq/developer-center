# Nimiq Web Client Framework Integrations

Complete integration guides for popular JavaScript frameworks and build tools. Learn how to integrate Nimiq blockchain into your Vite, Next.js, Nuxt, and Webpack projects.

## Overview

**Nimiq Works with Your Favorite Framework**

The Nimiq Web Client is designed to work seamlessly with modern JavaScript development environments. Whether you're building with React, Vue, Svelte, or vanilla JavaScript, we have comprehensive guides to help you integrate blockchain functionality into your applications.

### Why Choose Nimiq for Your Framework?

- **🔧 Zero Config**: Most frameworks work out-of-the-box
- **⚡ Fast Setup**: Get blockchain features in minutes
- **🎯 Framework Agnostic**: Works with all major JavaScript frameworks
- **📱 Universal**: Browser, server, and mobile support

---

## Popular Framework Integrations

### Modern Build Tools & Development Servers

<div grid="~ cols-1 md:cols-2 gap-24" mt-32>
  <a href="./vite" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:vitejs text-32></div>
      <h3 text="f-lg" font-bold mb-0>Vite Integration</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Lightning-fast development with Vite's modern build system. Perfect for Vue, React, and vanilla JS projects.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#vite</span>
      <span>#hmr</span>
      <span>#webpack-alternative</span>
    </div>
  </a>

  <a href="./webpack" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:webpack text-32></div>
      <h3 text="f-lg" font-bold mb-0>Webpack Integration</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Production-ready bundling with advanced optimization. Enterprise-grade configuration for complex applications.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#webpack</span>
      <span>#bundler</span>
      <span>#enterprise</span>
    </div>
  </a>
</div>

### React Ecosystem

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./NextJS" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:nextjs-icon text-32></div>
      <h3 text="f-lg" font-bold mb-0>Next.js Integration</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Full-stack React applications with SSR, API routes, and optimized blockchain integration. Perfect for production apps.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#nextjs</span>
      <span>#react</span>
      <span>#ssr</span>
      <span>#api-routes</span>
    </div>
  </a>
</div>

### Vue Ecosystem

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./nuxt" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:nuxt-icon text-32></div>
      <h3 text="f-lg" font-bold mb-0>Nuxt Integration</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Vue.js framework with server-side rendering, static generation, and auto-imports. Build full-stack blockchain apps.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#nuxt</span>
      <span>#vue</span>
      <span>#ssr</span>
      <span>#composables</span>
    </div>
  </a>
</div>

### JavaScript Module Systems

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./ESM" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:javascript text-32></div>
      <h3 text="f-lg" font-bold mb-0>ES Modules (ESM)</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Modern JavaScript modules with tree-shaking and optimal bundle sizes. Native browser support.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#esm</span>
      <span>#tree-shaking</span>
      <span>#browser</span>
    </div>
  </a>

  <a href="./CommonJS" nq-card p-24 no-underline hover:shadow-lg transition-shadow>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:nodejs-icon text-32></div>
      <h3 text="f-lg" font-bold mb-0>CommonJS (Node.js)</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-16>
      Traditional Node.js module system for server-side blockchain applications and APIs.
    </p>
    <div text="f-xs neutral-500" flex="~ gap-8 wrap">
      <span>#commonjs</span>
      <span>#nodejs</span>
      <span>#server</span>
    </div>
  </a>
</div>

## Integration Comparison

| Framework | Setup Complexity | Features | Best For |
|-----------|------------------|----------|----------|
| **Vite** | ⭐ Easy | Fast dev, HMR | Modern development |
| **Next.js** | ⭐⭐ Medium | SSR, API routes | Production React apps |
| **Nuxt** | ⭐⭐ Medium | SSR, composables | Production Vue apps |
| **Webpack** | ⭐⭐⭐ Advanced | Complete control | Enterprise applications |
| **ESM** | ⭐ Easy | Native browser | Simple projects |
| **CommonJS** | ⭐ Easy | Node.js compat | Server-side apps |

## Quick Start Guide

### 1. Installation

Choose your package manager and install Nimiq Web Client:

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

### 2. Basic Integration

```javascript
// For most frameworks
import { Client, ClientConfiguration } from '@nimiq/core'

// Initialize Nimiq client
const config = new ClientConfiguration()
const client = await Client.create(config.build())

// Wait for blockchain connection
await client.waitForConsensusEstablished()

console.log('Connected to Nimiq!')
```

### 3. Framework-Specific Setup

Each framework may need specific configuration:

- **Vite/Webpack**: WebAssembly and worker plugins
- **Next.js**: Webpack configuration for WASM
- **Nuxt**: Nitro experimental WASM support
- **Node.js**: Direct import without additional config

## Common Search Terms & Solutions

### "Nimiq Vite Integration"
✅ **[Complete Vite guide](./vite)** with configuration, examples, and troubleshooting

### "Nimiq Next.js Setup"
✅ **[Next.js integration guide](./NextJS)** covering App Router, API routes, and deployment

### "Nimiq Nuxt Configuration"
✅ **[Nuxt setup guide](./nuxt)** with SSR, composables, and server routes

### "Nimiq Webpack WebAssembly"
✅ **[Webpack configuration guide](./webpack)** for WASM support and optimization

### "Nimiq React Integration"
✅ **[Next.js guide](./NextJS)** includes React hooks and components

### "Nimiq Vue Integration"
✅ **[Nuxt guide](./nuxt)** includes Vue composables and components

## Framework-Specific Features

### React/Next.js Features
- **Custom Hooks**: `useNimiq()`, `useAccount()`, `useBalance()`
- **API Routes**: Server-side blockchain operations
- **TypeScript**: Full type safety and IntelliSense
- **Performance**: Code splitting and lazy loading

### Vue/Nuxt Features
- **Composables**: `useNimiq()`, `useAccount()`, `useBalance()`
- **Server Routes**: API endpoints with auto-imports
- **Auto-imports**: No need to import composables
- **SSR Support**: Server-side blockchain connections

### Vite Features
- **Hot Module Replacement**: Instant updates during development
- **Tree Shaking**: Optimal bundle sizes
- **Plugin Ecosystem**: Rich plugin support
- **Framework Agnostic**: Works with React, Vue, Svelte, and more

### Webpack Features
- **Advanced Optimization**: Custom bundling strategies
- **Code Splitting**: Granular control over chunks
- **Web Workers**: Background blockchain operations
- **Production Ready**: Enterprise-grade builds

## Performance Optimization

### Bundle Size Optimization
- **Tree Shaking**: Import only what you need
- **Code Splitting**: Separate Nimiq into async chunks
- **Dynamic Imports**: Load blockchain features on demand
- **WebAssembly**: Efficient binary format

### Runtime Performance
- **Web Workers**: Background blockchain operations
- **Caching**: Persistent blockchain state
- **Connection Pooling**: Efficient peer connections
- **Memory Management**: Optimal resource usage

## Deployment Strategies

### Static Hosting
- **Browser-only**: Pure client-side blockchain apps
- **CDN Deployment**: Global edge distribution
- **Zero Infrastructure**: No server requirements

### Server-Side Rendering
- **Hybrid Apps**: Server + client blockchain features
- **API Integration**: Backend blockchain services
- **SEO Optimized**: Server-rendered blockchain content

### Enterprise Deployment
- **Load Balancing**: Scalable blockchain infrastructure
- **Monitoring**: Real-time blockchain metrics
- **Security**: Enterprise-grade key management

## Additional Resources

### Developer Tools & Libraries
- **[Nimiq Utils](/nimiq-utils/)** - Essential utilities for blockchain development
- **[Nimiq CSS](https://onmax.github.io/nimiq-ui/nimiq-css/)** - Styled components and CSS framework
- **[Nimiq Icons](https://onmax.github.io/nimiq-ui/nimiq-icons/)** - Complete icon library

### Development Environment
- **[Browser vs Server Guide](/web-client/browser-vs-server)** - Choose the right deployment strategy
- **[Web Client vs RPC](/web-client/web-client-vs-rpc)** - Compare integration approaches
- **[API Reference](/web-client/reference/)** - Complete API documentation

### Community & Support
- **[Developer Forum](https://forum.nimiq.community/)** - Ask questions and share knowledge
- **[Discord Community](https://discord.gg/cMHemg8)** - Real-time developer chat
- **[GitHub Discussions](https://github.com/nimiq/core-rs-albatross/discussions)** - Technical discussions

## Contributing

### Missing Your Framework?
We're always adding new integration guides! If you don't see your framework listed:

1. **Request a Guide**: Open an issue on GitHub
2. **Contribute**: Share your integration experience
3. **Community**: Help other developers in our forums

### Improve Existing Guides
Found an issue or want to add more examples?

<div flex="~ gap-16 items-center" class="nq-raw" mt-32>
  <a href="https://github.com/nimiq/developer-center" nq-arrow nq-pill-sm nq-pill-blue target="_blank">Edit on GitHub</a>
  <a href="https://forum.nimiq.community/" nq-arrow nq-pill-sm nq-pill-green target="_blank">Ask Questions</a>
  <a href="https://discord.gg/cMHemg8" nq-arrow nq-pill-sm nq-pill-tertiary target="_blank">Join Discord</a>
</div>

## Popular Integration Patterns

### Client-Side Only
Perfect for wallets and dApps:
```javascript
// Browser-only blockchain application
const client = await Client.create()
await client.waitForConsensusEstablished()
```

### Hybrid Applications
Combine client and server features:
```javascript
// Client handles user interactions
// Server provides APIs and analytics
```

### Server-Side APIs
Backend blockchain services:
```javascript
// Express.js API with Nimiq
app.get('/api/balance/:address', async (req, res) => {
  const account = await client.getAccount(req.params.address)
  res.json({ balance: account.balance })
})
```

Ready to integrate Nimiq into your project? Choose your framework above and start building!
