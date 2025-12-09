import type { VectorizeIndex } from '@cloudflare/workers-types'
import type { Collections } from '@nuxt/content'
import { openai } from '@ai-sdk/openai'
import { queryCollectionSearchSections } from '@nuxt/content/server'
import { embedMany } from 'ai'

const modules: (keyof Collections)[] = ['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub']

async function hash(text: string, length = 64): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, length)
}

export default defineEventHandler(async (event) => {
  const vectorize = (event.context.cloudflare?.env as Record<string, unknown> | undefined)?.VECTORIZE as VectorizeIndex | undefined
  if (!vectorize)
    throw createError({ statusCode: 500, message: 'Vectorize not available' })

  const sections = (await Promise.all(
    modules.map(m => queryCollectionSearchSections(event, m, { ignoredTags: ['code'] })),
  )).flat()

  if (!sections.length)
    return { created: 0, updated: 0, deleted: 0, skipped: 0 }

  // Build section data with hashes (vectorId is shortened for Vectorize 64-byte limit)
  const sectionData = await Promise.all(sections.map(async (s) => {
    const text = `${s.titles.join(' ')} ${s.title} ${s.content}`
    return { vectorId: await hash(s.id, 32), sectionId: s.id, text, contentHash: await hash(text), path: s.id.split('#')[0]!, title: s.titles[0] || s.title }
  }))

  // Fetch existing vectors to compare hashes (batched due to 20 ID limit)
  const vectorIds = sectionData.map(s => s.vectorId)
  const batchSize = 20
  const existingBatches = await Promise.all(
    Array.from({ length: Math.ceil(vectorIds.length / batchSize) }, (_, i) =>
      vectorize.getByIds(vectorIds.slice(i * batchSize, (i + 1) * batchSize))),
  )
  const existing = existingBatches.flat()
  const existingMap = new Map(existing.map(v => [v.id, v.metadata?.contentHash as string | undefined]))

  // Find sections that need embedding (new or changed content)
  const toEmbed = sectionData.filter(s => existingMap.get(s.vectorId) !== s.contentHash)
  const skipped = sectionData.length - toEmbed.length

  // Find vectors to delete (no longer in content)
  const currentIds = new Set(sectionData.map(s => s.vectorId))
  const toDelete = existing.filter(v => !currentIds.has(v.id)).map(v => v.id)

  let created = 0
  let updated = 0

  if (toEmbed.length > 0) {
    const { embeddings } = await embedMany({
      model: openai.embedding('text-embedding-3-small'),
      values: toEmbed.map(s => s.text),
    })

    const vectors = toEmbed.map((s, i) => {
      if (existingMap.has(s.vectorId))
        updated++
      else created++
      return { id: s.vectorId, values: embeddings[i]!, metadata: { sectionId: s.sectionId, path: s.path, title: s.title, contentHash: s.contentHash } }
    })

    await vectorize.upsert(vectors)
  }

  if (toDelete.length > 0) {
    // Batch deletes due to potential ID limit
    await Promise.all(
      Array.from({ length: Math.ceil(toDelete.length / batchSize) }, (_, i) =>
        vectorize.deleteByIds(toDelete.slice(i * batchSize, (i + 1) * batchSize))),
    )
  }

  return { created, updated, deleted: toDelete.length, skipped }
})
