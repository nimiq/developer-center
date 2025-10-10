// Cloudflare Worker for proxying RPC requests
// Deploy this to Cloudflare Workers and use the URL in production

export default {
  async fetch(request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    }

    // Get target URL from query parameter
    const url = new URL(request.url)
    const targetUrl = url.searchParams.get('target')

    if (!targetUrl) {
      return new Response(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Missing target parameter' },
        id: null,
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    try {
      // Forward the request
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: {
          'Content-Type': 'application/json',
          ...(request.headers.get('authorization') && {
            Authorization: request.headers.get('authorization'),
          }),
        },
        body: request.method !== 'GET' ? await request.text() : undefined,
      })

      const data = await response.text()

      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    }
    catch (error) {
      return new Response(JSON.stringify({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: `Proxy error: ${error.message}`,
        },
        id: null,
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }
  },
}
