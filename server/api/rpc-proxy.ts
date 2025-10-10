// Nitro API route for proxying RPC requests
export default defineEventHandler(async (event) => {
  // Enable CORS for all requests
  appendCorsHeaders(event, {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
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
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing target parameter',
      data: {
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Missing target parameter' },
        id: null,
      },
    })
  }

  try {
    // Get request body (already parsed by Nitro)
    const body = event.method !== 'GET' ? await readBody(event) : undefined

    // Forward the request
    const response = await $fetch.raw(targetUrl, {
      method: event.method,
      headers: {
        'Content-Type': 'application/json',
        ...(getHeader(event, 'authorization') && {
          Authorization: getHeader(event, 'authorization') as string,
        }),
      },
      body, // $fetch handles JSON stringification
    })

    return response._data
  }
  catch (error: any) {
    console.error('RPC Proxy Error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'RPC Proxy Error',
      data: {
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: `Proxy error: ${error?.message || error?.statusMessage || 'Unknown error'}`,
        },
        id: null,
      },
    })
  }
})
