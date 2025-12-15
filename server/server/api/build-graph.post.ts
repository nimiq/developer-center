import type { VectorizeIndex } from '@cloudflare/workers-types'
import type { Collections } from '@nuxt/content'
import { openai } from '@ai-sdk/openai'
import { queryCollectionSearchSections } from '@nuxt/content/server'
import { embedMany } from 'ai'
import { eq, inArray } from 'drizzle-orm'
import { db, schema as tables } from 'hub:db'

const modules: (keyof Collections)[] = ['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub']

async function hash(text: string, length = 64): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, length)
}

interface Stats {
  sectionsProcessed: number
  sectionsSkipped: number
  entitiesCreated: number
  entitiesUpdated: number
  relationshipsCreated: number
  mentionsCreated: number
}

export default defineEventHandler(async (event) => {
  const vectorize = (event.context.cloudflare?.env as Record<string, unknown> | undefined)?.VECTORIZE as VectorizeIndex | undefined
  const query = getQuery(event)
  const limit = query.limit ? Number(query.limit) : undefined

  let sections = (await Promise.all(
    modules.map(m => queryCollectionSearchSections(event, m, { ignoredTags: ['code'] })),
  )).flat()

  if (limit)
    sections = sections.slice(0, limit)

  if (!sections.length)
    return { success: true, stats: { sectionsProcessed: 0, sectionsSkipped: 0, entitiesCreated: 0, entitiesUpdated: 0, relationshipsCreated: 0, mentionsCreated: 0 } }

  const stats: Stats = { sectionsProcessed: 0, sectionsSkipped: 0, entitiesCreated: 0, entitiesUpdated: 0, relationshipsCreated: 0, mentionsCreated: 0 }

  // Get existing mentions to check for changes
  const existingMentions = await db.select({ sectionId: tables.entityMentions.sectionId, contentHash: tables.entityMentions.contentHash }).from(tables.entityMentions)
  const mentionHashes = new Map(existingMentions.map(m => [m.sectionId, m.contentHash]))

  // Get existing entities for deduplication
  const existingEntities = await db.select({ id: tables.entities.id, name: tables.entities.name, type: tables.entities.type }).from(tables.entities)
  const entityMap = new Map(existingEntities.map(e => [e.id, e]))

  // Aggregate entities and relationships across all sections
  const allEntities = new Map<string, { name: string, type: string, description: string, sources: string[] }>()
  const allRelationships = new Map<string, { source: string, target: string, type: string, description: string, weight: number }>()
  const allMentions: { entityId: string, sectionId: string, sectionPath: string, contentHash: string }[] = []

  for (const section of sections) {
    const content = `${section.titles.join(' ')} ${section.title} ${section.content}`
    const contentHash = await hash(content)
    const path = section.id.split('#')[0]!

    // Skip if content unchanged
    if (mentionHashes.get(section.id) === contentHash) {
      stats.sectionsSkipped++
      continue
    }

    stats.sectionsProcessed++

    // Extract entities and relationships
    const extracted = await extractEntities(content, { title: section.titles[0] || section.title, path })

    // Aggregate entities
    for (const entity of extracted.entities) {
      const id = entityId(entity.name, entity.type)
      const existing = allEntities.get(id)
      if (existing) {
        if (!existing.description.includes(entity.description))
          existing.description = `${existing.description} ${entity.description}`.trim()
        existing.sources.push(section.id)
      }
      else {
        allEntities.set(id, { name: entity.name, type: entity.type, description: entity.description, sources: [section.id] })
      }
    }

    // Aggregate relationships
    for (const rel of extracted.relationships) {
      const sourceId = entityId(rel.source, extracted.entities.find(e => normalizeEntityName(e.name) === normalizeEntityName(rel.source))?.type || 'concept')
      const targetId = entityId(rel.target, extracted.entities.find(e => normalizeEntityName(e.name) === normalizeEntityName(rel.target))?.type || 'concept')
      const id = relationshipId(rel.source, rel.target, rel.type)
      const existing = allRelationships.get(id)
      if (existing) {
        existing.weight += 1
      }
      else {
        allRelationships.set(id, { source: sourceId, target: targetId, type: rel.type, description: rel.description, weight: 1 })
      }
    }

    // Track mentions
    for (const entity of extracted.entities) {
      allMentions.push({ entityId: entityId(entity.name, entity.type), sectionId: section.id, sectionPath: path, contentHash })
    }
  }

  // Batch insert/update entities
  for (const [id, entity] of allEntities) {
    if (entityMap.has(id)) {
      await db.update(tables.entities).set({ description: entity.description, updatedAt: new Date() }).where(eq(tables.entities.id, id))
      stats.entitiesUpdated++
    }
    else {
      await db.insert(tables.entities).values({ id, name: entity.name, type: entity.type, description: entity.description })
      stats.entitiesCreated++
    }
  }

  // Insert relationships (delete existing first to handle updates)
  if (allRelationships.size > 0) {
    await db.delete(tables.relationships)
    for (const [id, rel] of allRelationships) {
      if (allEntities.has(rel.source) && allEntities.has(rel.target)) {
        await db.insert(tables.relationships).values({
          id,
          sourceEntityId: rel.source,
          targetEntityId: rel.target,
          type: rel.type,
          description: rel.description,
          weight: rel.weight,
        })
        stats.relationshipsCreated++
      }
    }
  }

  // Update mentions (delete old, insert new)
  if (allMentions.length > 0) {
    const processedSections = [...new Set(allMentions.map(m => m.sectionId))]
    await db.delete(tables.entityMentions).where(inArray(tables.entityMentions.sectionId, processedSections))

    for (const mention of allMentions) {
      await db.insert(tables.entityMentions).values({
        entityId: mention.entityId,
        sectionId: mention.sectionId,
        sectionPath: mention.sectionPath,
        contentHash: mention.contentHash,
      }).onConflictDoNothing()
      stats.mentionsCreated++
    }
  }

  // Generate entity embeddings if vectorize available
  if (vectorize && allEntities.size > 0) {
    const entitiesToEmbed = Array.from(allEntities.entries())
    const texts = entitiesToEmbed.map(([_, e]) => `${e.name}: ${e.description}`)
    const { embeddings } = await embedMany({ model: openai.embedding('text-embedding-3-small'), values: texts })

    const vectors = entitiesToEmbed.map(([id, _], i) => ({
      id: `entity:${id}`.slice(0, 64),
      values: embeddings[i]!,
      metadata: { type: 'entity', entityId: id },
    }))

    const batchSize = 20
    for (let i = 0; i < vectors.length; i += batchSize)
      await vectorize.upsert(vectors.slice(i, i + batchSize))
  }

  // Detect and save communities
  const detectedCommunities = await detectCommunities(3)
  const communityStats = await saveCommunities(vectorize, detectedCommunities)

  return { success: true, stats: { ...stats, communitiesCreated: communityStats.created } }
})
