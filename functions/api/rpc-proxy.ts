// Cloudflare Pages Function for RPC proxy
export async function onRequest(context: any) {
  const { request } = context

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  const url = new URL(request.url)
  const targetUrl = url.searchParams.get('target')

  if (!targetUrl) {
    return new Response(
      JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Missing target parameter' },
        id: null,
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  }

  try {
    const body = await request.text()

    const targetResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    const data = await targetResponse.text()

    return new Response(data, {
      status: targetResponse.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }
  catch (error: any) {
    return new Response(
      JSON.stringify({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: `Proxy error: ${error?.message || String(error)}`,
        },
        id: null,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  }
}
