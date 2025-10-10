# RPC Proxy Worker

This Cloudflare Worker provides a CORS proxy for RPC requests, allowing the Developer Center RPC playground to connect to custom RPC nodes without CORS issues.

## Deployment

### Option 1: Deploy to Cloudflare Workers

```bash
cd workers
npx wrangler deploy
```

After deployment, update `.vitepress/theme/components/Rpc/playground.ts` with your worker URL:

```ts
const proxyBaseUrl = isDev
  ? (typeof window !== 'undefined' ? window.location.origin : 'http://localhost')
  : 'https://YOUR-WORKER.workers.dev' // Update this
```

### Option 2: Add to Existing Nimiq Website Worker

If you're using the existing `nimiq-website.je-cf9.workers.dev` worker, add the proxy endpoint to it:

1. Add the proxy logic to the worker's fetch handler
2. Handle `/api/rpc-proxy` route with the target parameter
3. Forward requests with CORS headers

The proxy is already configured to use `https://nimiq-website.je-cf9.workers.dev` in production.

## How It Works

**Development:**
- Requests go through Vite dev server at `/api/rpc-proxy`
- Handled by `.vitepress/plugins/rpc-proxy.ts`

**Production:**
- Requests go to the Cloudflare Worker
- Worker proxies to the target RPC URL with CORS headers

## Usage

Users can toggle the proxy in the RPC Config popover. When enabled:
- Custom RPC URLs are proxied through the worker
- Default Cloudflare Worker URL connects directly
- Proxy is bypassed if disabled

## API

```
GET/POST https://proxy-url.workers.dev/api/rpc-proxy?target=<rpc-url>
Authorization: Basic <base64>  (optional)
Content-Type: application/json
```

Returns the proxied RPC response with CORS headers.
