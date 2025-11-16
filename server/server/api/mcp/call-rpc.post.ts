import { z } from 'zod'

const MAINNET_RPC_URL = 'https://rpc.pos.nimiq.com'

const bodySchema = z.object({
  method: z.string().min(1).describe('RPC method name (e.g., getBlockByNumber)'),
  params: z.array(z.any()).optional().default([]).describe('Array of parameters for the RPC method'),
})

export default defineEventHandler(async (event) => {
  const { method, params } = await readValidatedBody(event, bodySchema.parse)

  try {
    const response = await $fetch(MAINNET_RPC_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        jsonrpc: '2.0',
        id: 1,
        method,
        params: params || [],
      },
    })

    return response
  }
  catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: `RPC call failed: ${error.message || 'Unknown error'}`,
    })
  }
})
