import { z } from 'zod'

export default defineMcpTool({
  description: 'Executes live RPC call against Nimiq mainnet (rpc.pos.nimiq.com). Returns REAL blockchain data (blocks, accounts, validators, staking). Use when: 1) User needs current/live data, 2) Verifying behavior, 3) Building examples with actual results. REQUIRES exact method name from list_rpc_methods or search_rpc_methods. This hits production network.',
  inputSchema: {
    method: z.string().min(1).describe('Exact RPC method name (e.g., getBlockByNumber, getAccountByAddress)'),
    params: z.array(z.any()).optional().default([]).describe('Parameters array matching method signature'),
  },
  handler: async ({ method, params }) => {
    const result = await $fetch('/api/mcp/call-rpc', { method: 'POST', body: { method, params } })
    return jsonResult(result)
  },
})
