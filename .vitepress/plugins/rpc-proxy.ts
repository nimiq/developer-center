import type { Plugin } from 'vite'
import { Buffer } from 'node:buffer'
import { consola } from 'consola'

export function RpcProxyPlugin(): Plugin {
  return {
    name: 'rpc-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/rpc-proxy'))
          return next()

        const url = new URL(req.url, 'http://localhost')
        const targetUrl = url.searchParams.get('target') || 'https://nimiq-website.je-cf9.workers.dev/'

        consola.info(`[RPC Proxy] Forwarding request to: ${targetUrl}`)

        try {
          // Read request body
          let body: string | undefined
          if (req.method === 'POST') {
            const chunks: Buffer[] = []
            for await (const chunk of req)
              chunks.push(chunk)
            body = Buffer.concat(chunks).toString()
          }

          // Forward to target
          const response = await fetch(targetUrl, {
            method: req.method || 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(req.headers.authorization && {
                Authorization: req.headers.authorization as string,
              }),
            },
            body,
          })

          const data = await response.text()

          // Send response with CORS headers
          res.writeHead(response.status, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          })
          res.end(data)
        }
        catch (error) {
          consola.error('[RPC Proxy] Error:', error)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({
            jsonrpc: '2.0',
            error: {
              code: -32603,
              message: `Proxy error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
            id: null,
          }))
        }
      })
    },
  }
}
