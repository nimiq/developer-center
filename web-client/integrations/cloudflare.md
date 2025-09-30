# Nimiq Web Client Cloudflare Workers Integration

Integrate Nimiq Web Client with Cloudflare Workers for serverless blockchain applications at the edge with WebAssembly support and cryptographic capabilities.

## Quick Start with Template

Get started instantly with our pre-configured Cloudflare Workers starter:

```bash
npx degit onmax/nimiq-starter/starters/cloudflare-d1 my-nimiq-worker
cd my-nimiq-worker && pnpm install && pnpm dev
```

## Installation

### Quick Start

Install the Nimiq Web Client and Cloudflare Workers tools:

::: code-group

```bash [pnpm]
pnpm add @nimiq/core
pnpm add -D @cloudflare/workers-types wrangler
```

```bash [npm]
npm install @nimiq/core
npm install -D @cloudflare/workers-types wrangler
```

```bash [yarn]
yarn add @nimiq/core
yarn add -D @cloudflare/workers-types wrangler
```

```bash [bun]
bun add @nimiq/core
bun add -D @cloudflare/workers-types wrangler
```

:::

## Configuration

### Wrangler Configuration

Create `wrangler.toml` in your project root:

```toml
name = "nimiq-cloudflare-worker"
compatibility_date = "2024-12-25"
compatibility_flags = [ "nodejs_compat" ]

[build]
command = "npm run build"

[[build.upload.rules]]
type = "ESModule"
globs = [ "**/*.js" ]
```

## Usage Example

```typescript
// src/index.ts
import * as Nimiq from '@nimiq/core'

export default {
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/block-number' && request.method === 'GET') {
      try {
        const config = new Nimiq.ClientConfiguration()
        config.syncMode('pico')
        const client = await Nimiq.Client.create(config.build())

        const headBlock = await client.getHeadBlock()
        const blockNumber = headBlock ? headBlock.height : 0

        return Response.json({
          blockNumber,
          success: true
        })
      }
      catch (error) {
        return Response.json({
          error: error instanceof Error ? error.message : 'Unknown error',
          success: false
        }, { status: 500 })
      }
    }

    return new Response('Not Found', { status: 404 })
  },
} satisfies ExportedHandler<Env>

interface Env {}
```

## Development

### Local Development

```bash
# Start development server
pnpm dev

# Or with wrangler directly
wrangler dev
```

### Testing

```bash
# Test your worker locally
curl http://localhost:8787/block-number
```

## Deployment

### Deploy to Cloudflare

```bash
# Deploy to Cloudflare Workers
pnpm deploy

# Or with wrangler directly
wrangler deploy
```
