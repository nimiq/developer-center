import type { VectorizeIndex } from '@cloudflare/workers-types'
import type { Collections } from '@nuxt/content'
import type { H3Event } from 'h3'
import type { BMDocument } from 'okapibm25'
import { openai } from '@ai-sdk/openai'
import { queryCollectionSearchSections } from '@nuxt/content/server'
import { embed } from 'ai'
import _BM25 from 'okapibm25'

// Handle CJS/ESM interop - Nitro wraps CommonJS default exports
const BM25 = typeof _BM25 === 'function' ? _BM25 : (_BM25 as { default: typeof _BM25 }).default

export interface SearchResult {
  path: string
  title: string
  section: string
  content: string
  url: string
}

export interface SearchOptions {
  module?: keyof Collections | 'all'
  limit?: number
}

/**
 * Search documentation using BM25 + Vectorize + RRF fusion
 */
export async function searchDocs(event: H3Event, query: string, opts: SearchOptions = {}): Promise<SearchResult[]> {
  const { module = 'all', limit = 10 } = opts

  const modules: (keyof Collections)[] = module === 'all'
    ? ['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub']
    : [module]

  const allSections = (await Promise.all(
    modules.map(m => queryCollectionSearchSections(event, m, { ignoredTags: ['code'] })),
  )).flat()

  if (!allSections.length)
    return []

  // Build corpus and section map
  const corpus = allSections.map(s => `${s.titles.join(' ')} ${s.title} ${s.content}`)
  const sectionById = new Map(allSections.map(s => [s.id.split('#')[0], s]))

  // BM25 keyword search
  const keywords = await extractKeywords(query)
  const bm25Scored = BM25(corpus, keywords, { k1: 1.5, b: 0.75 }, (a, b) => b.score - a.score) as BMDocument[]
  const bm25Paths: string[] = []
  const seenBm25 = new Set<string>()
  for (const item of bm25Scored) {
    if (item.score <= 0)
      continue
    const idx = corpus.indexOf(item.document)
    if (idx === -1)
      continue
    const path = allSections[idx]!.id.split('#')[0]!
    if (seenBm25.has(path))
      continue
    seenBm25.add(path)
    bm25Paths.push(path)
    if (bm25Paths.length >= limit * 2)
      break
  }

  // Semantic search via Vectorize
  const vectorize = (event.context.cloudflare?.env as Record<string, unknown> | undefined)?.VECTORIZE as VectorizeIndex | undefined
  const semanticPaths: string[] = []

  if (vectorize) {
    const { embedding } = await embed({ model: openai.embedding('text-embedding-3-small'), value: query })
    const matches = await vectorize.query(embedding, { topK: limit * 2 })
    const seenSemantic = new Set<string>()
    for (const match of matches.matches) {
      const path = (match.metadata?.path as string) || match.id.split('#')[0]!
      if (!path || seenSemantic.has(path))
        continue
      seenSemantic.add(path)
      semanticPaths.push(path)
    }
  }

  // RRF fusion of both rankings
  const fusedPaths = rrf([bm25Paths, semanticPaths])

  // Build results from fused ranking
  const results: SearchResult[] = []
  for (const path of fusedPaths) {
    const section = sectionById.get(path) || allSections.find(s => s.id.split('#')[0] === path)
    if (!section)
      continue
    results.push({
      path,
      title: section.titles[0] || section.title,
      section: section.title,
      content: section.content,
      url: `https://nimiq.com/developers${path}`,
    })
    if (results.length >= limit)
      break
  }

  return results
}
