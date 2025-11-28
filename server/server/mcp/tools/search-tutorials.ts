import { z } from 'zod'

export default defineMcpTool({
  description: 'Search tutorials to find hands-on learning content. Use when user wants "tutorial", "walkthrough", or wants to build something. Returns matching tutorial URLs.',
  inputSchema: {
    topic: z.string().describe('What user wants to learn'),
  },
  handler: async ({ topic }) => {
    const tutorials = await $fetch('/api/mcp/list-tutorials')
    return textResult(`Find tutorials about "${topic}" from: ${JSON.stringify(tutorials)}`)
  },
})
