import { encode } from '@toon-format/toon'

export default defineMcpResource({
  description: 'TOON-formatted list of hands-on tutorials for Nimiq blockchain development. Each entry includes title, URL, description, difficulty, and topics covered. Use when users need step-by-step guided learning (not just concept explanations). Returns structured tutorial metadata for discovery and selection in token-efficient TOON format.',
  uri: 'resource://nimiq/tutorials',
  metadata: { title: 'Nimiq Tutorial Catalog' },
  cache: '1h',
  handler: async (uri) => {
    const tutorials = await $fetch('/api/mcp/list-tutorials')
    return { contents: [{ uri: uri.href, mimeType: 'text/plain', text: encode(tutorials) }] }
  },
})
