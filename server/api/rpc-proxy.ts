// Nitro API route for proxying RPC requests
export default defineEventHandler(async (event) => {
  // Handle CORS preflight
  if (event.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
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
    const body = event.method !== 'GET' ? await readBody(event) : undefined

    // Forward the request
    const response = await $fetch.raw(targetUrl, {
      method: event.method as any,
      headers: {
        'Content-Type': 'application/json',
        ...(getHeader(event, 'authorization') && {
          Authorization: getHeader(event, 'authorization') as string,
        }),
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    // Set CORS headers
    setHeaders(event, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    })

    return response._data
  }
  catch (error) {
    setResponseStatus(event, 500)
    setHeaders(event, {
      'Access-Control-Allow-Origin': '*',
    })
    return {
      jsonrpc: '2.0',
      error: {
        code: -32603,
        message: `Proxy error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
      id: null,
    }
  }
})
