export default async (request: Request) => {
  // Get the target URL from query parameter or use default
  const url = new URL(request.url)
  const targetUrl = url.searchParams.get('target') || 'https://nimiq-website.je-cf9.workers.dev/'

  try {
    // Forward the request to the target RPC server
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        // Forward authorization header if present
        ...(request.headers.get('authorization') && {
          Authorization: request.headers.get('authorization')!,
        }),
      },
      body: request.method !== 'GET' ? await request.text() : undefined,
    })

    // Get response body
    const data = await response.text()

    // Return with CORS headers
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
        message: `Proxy error: ${error instanceof Error ? error.message : 'Unknown error'}`,
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
}
