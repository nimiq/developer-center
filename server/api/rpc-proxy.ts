import { defineEventHandler, getQuery, readBody, setHeaders, setResponseStatus } from 'h3'

// Nitro API route for proxying RPC requests
export default defineEventHandler(async (event) => {
  // Set CORS headers for all requests
  setHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  })

  // Handle CORS preflight
  if (event.method === 'OPTIONS') {
    setResponseStatus(event, 204)
    return ''
  }

  // Get target URL from query parameter
  const query = getQuery(event)
  const targetUrl = query.target as string

  if (!targetUrl) {
    setResponseStatus(event, 400)
    return {
      jsonrpc: '2.0',
      error: { code: -32600, message: 'Missing target parameter' },
      id: null,
    }
  }

  try {
    // Get request body
    const body = await readBody(event).catch(() => undefined)

    // Forward the request using fetch directly
    const targetResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await targetResponse.json()
    return data
  }
  catch (error: any) {
    console.error('[RPC Proxy] Error:', error, error.stack)
    setResponseStatus(event, 500)
    return {
      jsonrpc: '2.0',
      error: {
        code: -32603,
        message: `Proxy error: ${error?.message || String(error)}`,
      },
      id: null,
    }
  }
})
