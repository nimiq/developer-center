import { encode } from '@toon-format/toon'

export default defineMcpTool({
  description: 'Returns catalog of all tutorials (title/description/slug). ONLY use when user wants to browse all tutorials. For finding specific tutorial, use search_tutorials instead.',
  cache: '1h',
  handler: async () => {
    const tutorials = await $fetch('/api/mcp/list-tutorials')
    return { content: [{ type: 'text', text: encode(tutorials) }] }
  },
})
