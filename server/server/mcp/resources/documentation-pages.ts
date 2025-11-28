import { encode } from '@toon-format/toon'

export default defineMcpResource({
  description: 'TOON-formatted list of all available Nimiq documentation pages across 6 modules (web-client, rpc, protocol, hub, nodes, nimiq-utils). Each entry includes title, URL, description, and module. Use to discover available documentation or find specific topics. Returns comprehensive metadata for all ~50+ documentation pages in token-efficient TOON format.',
  uri: 'resource://nimiq/documentation-pages',
  metadata: { title: 'Nimiq Documentation Page Index' },
  cache: '1h',
  handler: async (uri) => {
    const docs = await $fetch('/api/mcp/list-documentation-pages')
    return { contents: [{ uri: uri.href, mimeType: 'text/plain', text: encode(docs) }] }
  },
})
