import type { IncomingMessage, ServerResponse } from 'node:http'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { encode } from '@toon-format/toon'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  if (getHeader(event, 'accept')?.includes('text/html')) {
    return sendRedirect(event, 'https://nimiq.com/developers/working-with-ai/mcp')
  }

  const server = new McpServer({
    name: 'nimiq',
    version: '1.0.0',
  })

  // RESOURCES
  server.registerResource(
    'nimiq-documentation-pages',
    'resource://nimiq/documentation-pages',
    {
      title: 'Nimiq Documentation Page Index',
      description:
        'TOON-formatted list of all available Nimiq documentation pages across 6 modules (web-client, rpc, protocol, hub, nodes, nimiq-utils). Each entry includes title, URL, description, and module. Use to discover available documentation or find specific topics. Returns comprehensive metadata for all ~50+ documentation pages in token-efficient TOON format.',
    },
    async (uri) => {
      const docs = await $fetch('/api/mcp/list-documentation-pages')
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/plain',
            text: encode(docs),
          },
        ],
      }
    },
  )

  server.registerResource(
    'nimiq-tutorials',
    'resource://nimiq/tutorials',
    {
      title: 'Nimiq Tutorial Catalog',
      description: 'TOON-formatted list of hands-on tutorials for Nimiq blockchain development. Each entry includes title, URL, description, difficulty, and topics covered. Use when users need step-by-step guided learning (not just concept explanations). Returns structured tutorial metadata for discovery and selection in token-efficient TOON format.',
    },
    async (uri) => {
      const tutorials = await $fetch('/api/mcp/list-tutorials')
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/plain',
            text: encode(tutorials),
          },
        ],
      }
    },
  )

  server.registerResource(
    'nimiq-open-rpc-specification-document',
    'resource://nimiq/open-rpc-specification-document',
    {
      title: 'Nimiq JSON-RPC API Specification',
      description: 'Complete OpenRPC specification document containing all 125 Nimiq JSON-RPC methods with schemas, parameters, return types, examples, and error codes. Use to understand available RPC methods, their exact parameter schemas, or generate type-safe API clients. Returns full OpenRPC 1.3 specification in TOON format for token efficiency.',
    },
    async (uri) => {
      const spec = await $fetch('/api/mcp/open-rpc-specification-document')
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/plain',
            text: encode(spec),
          },
        ],
      }
    },
  )

  // TOOLS
  server.registerTool(
    'search_documentation',
    {
      title: 'Search Documentation by Topic',
      description: 'Search documentation to find pages about a topic. Use when user asks "how does X work", "explain Y", or describes a concept. Returns matching page URLs.',
      argsSchema: z.object({
        topic: z.string().describe('Topic to search for'),
        module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all'),
      }),
    },
    async ({ topic, module = 'all' }) => {
      const allPages = await $fetch('/api/mcp/list-documentation-pages', { query: { module } })
      const prompt = `Find documentation pages about "${topic}" from: ${JSON.stringify(allPages)}`
      return {
        content: [{ type: 'text', text: prompt }],
      }
    },
  )

  server.registerTool(
    'search_tutorials',
    {
      title: 'Search Tutorials by Topic',
      description: 'Search tutorials to find hands-on learning content. Use when user wants "tutorial", "walkthrough", or wants to build something. Returns matching tutorial URLs.',
      argsSchema: z.object({
        topic: z.string().describe('What user wants to learn'),
      }),
    },
    async ({ topic }) => {
      const tutorials = await $fetch('/api/mcp/list-tutorials')
      const prompt = `Find tutorials about "${topic}" from: ${JSON.stringify(tutorials)}`
      return {
        content: [{ type: 'text', text: prompt }],
      }
    },
  )

  server.registerTool(
    'search_rpc_methods',
    {
      title: 'Search RPC Methods by Task',
      description: 'Search RPC methods to find which one performs a task. Use when user asks "which method", "what endpoint", or describes blockchain operation. Returns method names.',
      argsSchema: z.object({
        task: z.string().describe('Blockchain operation to perform'),
      }),
    },
    async ({ task }) => {
      const spec = await $fetch('/api/mcp/open-rpc-specification-document')
      const methods = spec.methods.map((m: any) => ({ name: m.name, summary: m.summary }))
      const prompt = `Find RPC method for "${task}" from: ${JSON.stringify(methods)}`
      return {
        content: [{ type: 'text', text: prompt }],
      }
    },
  )

  // TOOLS
  server.registerTool(
    'list_documentation_pages',
    {
      title: 'List Nimiq Documentation Pages',
      description: 'Returns index of docs for specific module. ONLY use when user explicitly names the module ("web-client", "protocol", etc). For finding docs on topic, use find_documentation_for_topic prompt. DO NOT use for questions like "how does X work" - that requires the prompt.',
      argsSchema: z.object({
        module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all').describe('Filter by documentation module. Default: all modules.'),
      }),
    },
    async ({ module = 'all' }) => {
      try {
        const docs = await $fetch('/api/mcp/list-documentation-pages', { query: { module } })
        return {
          content: [{ type: 'text', text: encode(docs) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `Error fetching documentation pages: ${error.message}` }],
          isError: true,
        }
      }
    },
  )

  server.registerTool(
    'get_documentation_page',
    {
      title: 'Read Full Documentation Page Content',
      description: 'Fetches complete markdown content of specific doc page. Returns full implementation guides, API references, concept explanations. REQUIRES exact path from list_documentation_pages or find_documentation_for_topic prompt. Use when: 1) You have exact path and need full content, 2) User asks to "read" or "show me" specific page, 3) Answering detailed how-to questions. DO NOT guess paths - always get from list/prompt first. Path format: /module/page',
      argsSchema: z.object({
        path: z.string().min(1).describe('Exact path from list_documentation_pages or find_documentation_for_topic (e.g., /web-client/getting-started, /protocol/validators/staking)'),
      }),
    },
    async ({ path }) => {
      try {
        const doc = await $fetch('/api/mcp/get-documentation-page', { query: { path } })
        return {
          content: [{ type: 'text', text: JSON.stringify(doc, null, 2) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `Error fetching documentation page "${path}": ${error.message}. Try using list_documentation_pages first to find valid paths.` }],
          isError: true,
        }
      }
    },
  )

  server.registerTool(
    'list_tutorials',
    {
      title: 'List Available Nimiq Tutorials',
      description: 'Returns catalog of all tutorials (title/description/slug). ONLY use when user wants to browse all tutorials. For finding specific tutorial, use find_tutorial_for_topic prompt instead. DO NOT use for questions like "I want tutorial on X" - that requires the prompt.',
      argsSchema: z.object({}),
    },
    async () => {
      try {
        const tutorials = await $fetch('/api/mcp/list-tutorials')
        return {
          content: [{ type: 'text', text: encode(tutorials) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `Error fetching tutorials: ${error.message}` }],
          isError: true,
        }
      }
    },
  )

  server.registerTool(
    'get_tutorial',
    {
      title: 'Read Complete Tutorial Content',
      description: 'Fetch full content of a specific Nimiq tutorial by slug. Returns title, description, type, complete tutorial content, and URL. Use after list_tutorials to access step-by-step instructions for hands-on blockchain development learning. Tutorials include code examples and practical exercises.',
      argsSchema: z.object({
        slug: z.string().min(1).describe('Tutorial slug from list_tutorials (e.g., first-transaction, wallet-integration)'),
      }),
    },
    async ({ slug }) => {
      try {
        const tutorial = await $fetch('/api/mcp/get-tutorial', { query: { slug } })
        return {
          content: [{ type: 'text', text: JSON.stringify(tutorial, null, 2) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `Error fetching tutorial "${slug}": ${error.message}. Try using list_tutorials first to find valid slugs.` }],
          isError: true,
        }
      }
    },
  )

  server.registerTool(
    'list_rpc_methods',
    {
      title: 'List Nimiq JSON-RPC Methods',
      description: 'Returns RPC method metadata filtered by tags. ONLY use when you already know the tag/category. For finding which method to use, use find_rpc_method_for_task prompt instead. Available tags: consensus, wallet, validator, blockchain, mempool, network, zkp. DO NOT use this for questions like "which method does X" - that requires the prompt.',
      argsSchema: z.object({
        tags: z.string().optional().describe('Comma-separated tags to filter methods (e.g., "consensus,wallet" or "validator"). Available tags: consensus, wallet, validator, blockchain, mempool, network, zkp. Omit to list all methods.'),
      }),
    },
    async ({ tags }) => {
      try {
        const methods = await $fetch('/api/mcp/list-rpc-methods', { query: { tags } })
        return {
          content: [{ type: 'text', text: encode(methods) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `Error fetching RPC methods: ${error.message}` }],
          isError: true,
        }
      }
    },
  )

  server.registerTool(
    'call_rpc_method',
    {
      title: 'Execute Nimiq Mainnet RPC Call',
      description: 'Executes live RPC call against Nimiq mainnet (rpc.pos.nimiq.com). Returns REAL blockchain data (blocks, accounts, validators, staking). Use when: 1) User needs current/live data, 2) Verifying behavior, 3) Building examples with actual results. REQUIRES exact method name from list_rpc_methods or find_rpc_method_for_task. DO NOT guess method names or params - always verify schema first. This hits production network.',
      argsSchema: z.object({
        method: z.string().min(1).describe('Exact RPC method name from list_rpc_methods (e.g., getBlockByNumber, getAccountByAddress, getValidatorByAddress)'),
        params: z.array(z.any()).optional().default([]).describe('Parameters array matching method signature. Get schema from list_rpc_methods. Example: [100, true] for getBlockByNumber(blockNumber, includeTransactions).'),
      }),
    },
    async ({ method, params = [] }) => {
      try {
        const result = await $fetch('/api/mcp/call-rpc', {
          method: 'POST',
          body: { method, params },
        })
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }
      catch (error: any) {
        return {
          content: [{ type: 'text', text: `RPC call failed for method "${method}": ${error.message}. Verify method name and parameters using list_rpc_methods.` }],
          isError: true,
        }
      }
    },
  )

  const transport: StreamableHTTPServerTransport
    = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined })

  if (event.node?.res) {
    event.node.res.on('close', () => {
      transport.close()
      server.close()
    })
  }

  await server.connect(transport)

  const body = event.method === 'POST' ? await readBody(event) : undefined

  await transport.handleRequest(
    event.node?.req as IncomingMessage,
    event.node?.res as ServerResponse,
    body,
  )
})
