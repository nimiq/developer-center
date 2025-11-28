import { experimental_createMCPClient as createMCPClient } from '@ai-sdk/mcp'
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { evalite } from 'evalite'
import { wrapAISDKModel } from 'evalite/ai-sdk'
import { toolCallAccuracy } from 'evalite/scorers'

const SYSTEM_PROMPT = 'You are a helpful assistant. Today\'s date is 2024-04-27.'
const MCP_URL = 'http://localhost:3000/mcp'
const model = wrapAISDKModel(openai('gpt-4o-mini'))

evalite('MCP Tools - Documentation Discovery', {
  data: async () => [
    {
      input: 'Show me all documentation pages in the web-client module',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'webClient' } }],
    },
    {
      input: 'List all RPC documentation pages',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'rpc' } }],
    },
    {
      input: 'What pages are in the protocol docs?',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'protocol' } }],
    },
    {
      input: 'Browse validator documentation index',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'nodes' } }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Tools - Reading Documentation (requires path from list/prompt)', {
  data: async () => [
    {
      input: 'Show me the content of /web-client/getting-started',
      expected: [{ toolName: 'get-documentation-page', args: { path: '/web-client/getting-started' } }],
    },
    {
      input: 'Fetch page /protocol/validators/staking',
      expected: [{ toolName: 'get-documentation-page', args: { path: '/protocol/validators/staking' } }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Tools - Tutorial Discovery', {
  data: async () => [
    {
      input: 'What tutorials are available?',
      expected: [{ toolName: 'list-tutorials' }],
    },
    {
      input: 'Show me all Nimiq tutorials',
      expected: [{ toolName: 'list-tutorials' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Tools - Reading Tutorials', {
  data: async () => [
    {
      input: 'Show me the first-transaction tutorial content',
      expected: [{ toolName: 'get-tutorial' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Tools - RPC Method Discovery', {
  data: async () => [
    {
      input: 'What RPC methods are available for consensus operations?',
      expected: [{ toolName: 'list-rpc-methods', args: { tags: 'consensus' } }],
    },
    {
      input: 'List all wallet-related RPC methods',
      expected: [{ toolName: 'list-rpc-methods', args: { tags: 'wallet' } }],
    },
    {
      input: 'Show me all validator RPC methods',
      expected: [{ toolName: 'list-rpc-methods', args: { tags: 'validator' } }],
    },
    {
      input: 'What RPC methods are available?',
      expected: [{ toolName: 'list-rpc-methods' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Tools - RPC Method Execution', {
  data: async () => [
    {
      input: 'Get block number 100 from Nimiq mainnet',
      expected: [{ toolName: 'call-rpc-method', args: { method: 'getBlockByNumber', params: [100] } }],
    },
    {
      input: 'What is the current block number on mainnet?',
      expected: [{ toolName: 'call-rpc-method', args: { method: 'getBlockNumber' } }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Multi-Step Workflows - Discovery then Read', {
  data: async () => [
    {
      input: 'List web-client docs, then read the getting-started page',
      expected: [
        { toolName: 'list-documentation-pages', args: { module: 'webClient' } },
        { toolName: 'get-documentation-page' },
      ],
    },
    {
      input: 'Find validator RPC methods and call getValidators',
      expected: [
        { toolName: 'list-rpc-methods', args: { tags: 'validator' } },
        { toolName: 'call-rpc-method', args: { method: 'getValidators' } },
      ],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Edge Cases - Ambiguous Queries (tests search vs list choice)', {
  data: async () => [
    {
      input: 'Tell me about transactions',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'I want to learn about staking',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'Show me how to send my first payment',
      expected: [{ toolName: 'search-tutorials' }],
    },
    {
      input: 'I need to query the current epoch',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Edge Cases - Should NOT use prompts when module specified', {
  data: async () => [
    {
      input: 'Show me protocol documentation',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'protocol' } }],
    },
    {
      input: 'What\'s in the hub module?',
      expected: [{ toolName: 'list-documentation-pages', args: { module: 'hub' } }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Edge Cases - Should use list-rpc-methods when tag known', {
  data: async () => [
    {
      input: 'What wallet methods are available?',
      expected: [{ toolName: 'list-rpc-methods', args: { tags: 'wallet' } }],
    },
    {
      input: 'Show me consensus RPC methods',
      expected: [{ toolName: 'list-rpc-methods', args: { tags: 'consensus' } }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Search - Finding Documentation (ambiguous conceptual queries)', {
  data: async () => [
    {
      input: 'How do I create a transaction?',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'Explain how Albatross consensus works',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'How does staking work in Nimiq?',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'What are the different transaction types?',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'Tell me about validator rewards',
      expected: [{ toolName: 'search-documentation' }],
    },
    {
      input: 'How do fees work?',
      expected: [{ toolName: 'search-documentation' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Search - Finding Tutorials (explicit tutorial requests)', {
  data: async () => [
    {
      input: 'I want a tutorial on sending payments',
      expected: [{ toolName: 'search-tutorials' }],
    },
    {
      input: 'Guide me through building a dApp step by step',
      expected: [{ toolName: 'search-tutorials' }],
    },
    {
      input: 'Show me a walkthrough for wallet integration',
      expected: [{ toolName: 'search-tutorials' }],
    },
    {
      input: 'I need a beginner tutorial for Nimiq',
      expected: [{ toolName: 'search-tutorials' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})

evalite('MCP Search - Finding RPC Methods (need method name)', {
  data: async () => [
    {
      input: 'Which RPC method gets a block by hash?',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
    {
      input: 'What endpoint do I use to send a transaction?',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
    {
      input: 'Which API call queries account balance?',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
    {
      input: 'What method retrieves validator information?',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
    {
      input: 'How do I check if a transaction was confirmed?',
      expected: [{ toolName: 'search-rpc-methods' }],
    },
  ],
  task: async (input) => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await generateText({
      system: SYSTEM_PROMPT,
      model,
      prompt: input,
      tools: await mcpClient.tools(),
    })
    return result.toolCalls
  },
  scorers: [
    async ({ output, expected }) =>
      await toolCallAccuracy({
        actualCalls: output,
        expectedCalls: expected,
      }),
  ],
})
