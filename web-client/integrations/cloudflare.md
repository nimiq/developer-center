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

<!--@include: ./_installation.md-->

### Development Dependencies

```bash
# Install Cloudflare Workers development tools
pnpm add -D @cloudflare/workers-types wrangler
```

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

### TypeScript Configuration

Update your `tsconfig.json` for Cloudflare Workers:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "WebWorker"],
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["@cloudflare/workers-types"]
  },
  "include": ["src/**/*"]
}
```

## Usage Examples

### Basic Blockchain API

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

### Advanced Crypto Operations

```typescript
// src/crypto-api.ts
import * as Nimiq from '@nimiq/core'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)

    // Handle CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }

    try {
      if (url.pathname === '/generate-keypair' && request.method === 'POST') {
        // Generate a new Nimiq keypair
        const keypair = Nimiq.KeyPair.generate()
        const privateKey = keypair.privateKey.toHex()
        const publicKey = keypair.publicKey.toHex()
        const address = keypair.publicKey.toAddress().toUserFriendlyAddress()

        return Response.json({
          privateKey,
          publicKey,
          address,
          success: true
        }, { headers: corsHeaders })
      }

      if (url.pathname === '/validate-address' && request.method === 'POST') {
        const { address } = await request.json()

        try {
          const nimiqAddress = Nimiq.Address.fromUserFriendlyAddress(address)
          return Response.json({
            valid: true,
            address: nimiqAddress.toUserFriendlyAddress(),
            success: true
          }, { headers: corsHeaders })
        }
        catch {
          return Response.json({
            valid: false,
            success: true
          }, { headers: corsHeaders })
        }
      }

      if (url.pathname === '/network-info' && request.method === 'GET') {
        const config = new Nimiq.ClientConfiguration()
        config.syncMode('pico')
        const client = await Nimiq.Client.create(config.build())

        const headBlock = await client.getHeadBlock()
        const networkId = client.getNetworkId()

        return Response.json({
          blockHeight: headBlock?.height || 0,
          networkId,
          timestamp: headBlock?.timestamp || 0,
          success: true
        }, { headers: corsHeaders })
      }

      return Response.json({
        error: 'Endpoint not found',
        success: false
      }, {
        status: 404,
        headers: corsHeaders
      })
    }
    catch (error) {
      return Response.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false
      }, {
        status: 500,
        headers: corsHeaders
      })
    }
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

# Test crypto endpoints
curl -X POST http://localhost:8787/generate-keypair
curl -X POST http://localhost:8787/validate-address \
  -H "Content-Type: application/json" \
  -d '{"address":"NQ07 0000 0000 0000 0000 0000 0000 0000 0000"}'
```

## Deployment

### Deploy to Cloudflare

```bash
# Deploy to Cloudflare Workers
pnpm deploy

# Or with wrangler directly
wrangler deploy
```

### Environment Variables

For production deployments, you can set environment variables:

```toml
# wrangler.toml
[vars]
NIMIQ_NETWORK = "main"
API_VERSION = "v1"

# For secrets
# Use: wrangler secret put SECRET_NAME
```

## Key Features

### ✨ Edge Computing
- **Global Distribution**: Deploy to Cloudflare's edge network for low latency
- **Automatic Scaling**: Handle traffic spikes without configuration
- **WebAssembly Support**: Full Nimiq Web Client functionality at the edge

### 🔐 Cryptographic Operations
- **Key Generation**: Generate Nimiq keypairs securely
- **Address Validation**: Validate Nimiq addresses
- **Digital Signatures**: Sign transactions and messages
- **Hash Functions**: Access to Nimiq's cryptographic primitives

### 🚀 Lightweight Sync
- **Pico Sync Mode**: Minimal blockchain data synchronization
- **Fast Startup**: Quick initialization for serverless functions
- **Low Memory Usage**: Optimized for Cloudflare Workers limits

### 📡 API Endpoints
- **RESTful Design**: Clean HTTP API for blockchain interactions
- **JSON Responses**: Structured data format
- **CORS Support**: Cross-origin requests enabled
- **Error Handling**: Comprehensive error responses

## Best Practices

### Performance Optimization

```typescript
// Cache client instances when possible
let clientInstance: Nimiq.Client | null = null

async function getClient(): Promise<Nimiq.Client> {
  if (!clientInstance) {
    const config = new Nimiq.ClientConfiguration()
    config.syncMode('pico')
    clientInstance = await Nimiq.Client.create(config.build())
  }
  return clientInstance
}
```

### Error Handling

```typescript
// Comprehensive error handling
try {
  // Nimiq operations
}
catch (error) {
  console.error('Nimiq error:', error)

  if (error instanceof Nimiq.Client.ConsensusError) {
    return Response.json({
      error: 'Consensus not established',
      type: 'consensus_error',
      success: false
    }, { status: 503 })
  }

  return Response.json({
    error: 'Internal server error',
    success: false
  }, { status: 500 })
}
```

### Security Considerations

- Never expose private keys in responses
- Validate all input parameters
- Use HTTPS only (enforced by Cloudflare)
- Implement rate limiting if needed
- Consider authentication for sensitive operations

## Limitations

- **Memory Limit**: Cloudflare Workers have memory constraints
- **Execution Time**: Maximum 30 seconds per request
- **Cold Starts**: Initial requests may be slower
- **Storage**: No persistent storage without Cloudflare D1/KV

## Learn More

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)
- [Nimiq Web Client API](/web-client/)
