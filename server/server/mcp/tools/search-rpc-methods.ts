import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { z } from 'zod'

export default defineMcpTool({
  description: 'Search RPC methods to find which one performs a task. Use when user asks "which method", "what endpoint", or describes blockchain operation. Returns method names.',
  inputSchema: {
    task: z.string().describe('Blockchain operation to perform'),
  },
  handler: async ({ task }) => {
    const specPath = resolve(process.cwd(), '../.vitepress/rpc/openrpc-document.json')
    const spec = JSON.parse(await readFile(specPath, 'utf-8'))
    const methods = spec.methods.map((m: any) => ({ name: m.name, summary: m.summary }))
    return textResult(`Find RPC method for "${task}" from: ${JSON.stringify(methods)}`)
  },
})
