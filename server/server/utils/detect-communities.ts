import type { VectorizeIndex } from '@cloudflare/workers-types'
import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { embedMany, generateObject } from 'ai'
import { z } from 'zod'
import { db, schema as tables } from 'hub:db'

interface CommunityData { id: string, name: string, summary: string, entityIds: string[] }

/**
 * Union-Find data structure for community detection
 */
class UnionFind {
  private parent: Map<string, string> = new Map()
  private rank: Map<string, number> = new Map()

  find(x: string): string {
    if (!this.parent.has(x)) {
      this.parent.set(x, x)
      this.rank.set(x, 0)
    }
    if (this.parent.get(x) !== x)
      this.parent.set(x, this.find(this.parent.get(x)!))
    return this.parent.get(x)!
  }

  union(x: string, y: string): void {
    const px = this.find(x)
    const py = this.find(y)
    if (px === py)
      return
    const rx = this.rank.get(px) || 0
    const ry = this.rank.get(py) || 0
    if (rx < ry) {
      this.parent.set(px, py)
    }
    else if (rx > ry) {
      this.parent.set(py, px)
    }
    else {
      this.parent.set(py, px)
      this.rank.set(px, rx + 1)
    }
  }

  getGroups(): Map<string, string[]> {
    const groups = new Map<string, string[]>()
    for (const [node] of this.parent) {
      const root = this.find(node)
      if (!groups.has(root))
        groups.set(root, [])
      groups.get(root)!.push(node)
    }
    return groups
  }
}

/**
 * Detect communities using Union-Find on weighted relationships
 */
export async function detectCommunities(minSize = 3): Promise<CommunityData[]> {
  // Get all entities and relationships using Drizzle
  const allEntities = await db.select().from(tables.entities)
  const entityMap = new Map(allEntities.map(e => [e.id, e]))

  const allRelationships = await db.select().from(tables.relationships).orderBy(tables.relationships.weight)

  if (allEntities.length === 0)
    return []

  // Build communities using Union-Find
  const uf = new UnionFind()

  // Initialize all entities
  for (const entity of allEntities)
    uf.find(entity.id)

  // Union entities connected by relationships (weight >= 0.5 threshold)
  for (const rel of allRelationships) {
    if ((rel.weight ?? 0) >= 0.5)
      uf.union(rel.sourceEntityId, rel.targetEntityId)
  }

  // Get groups and filter by min size
  const groups = uf.getGroups()
  const detectedCommunities: CommunityData[] = []

  for (const [_, memberIds] of groups) {
    if (memberIds.length < minSize)
      continue

    const members = memberIds.map(id => entityMap.get(id)!).filter(Boolean)
    if (members.length < minSize)
      continue

    // Generate community name and summary via LLM
    try {
      const { object } = await generateObject({
        model: google('gemini-2.5-flash'),
        schema: z.object({
          name: z.string().describe('Short descriptive name for this community (2-4 words)'),
          summary: z.string().describe('Executive summary of what this community represents (1-2 sentences)'),
        }),
        system: 'Generate a concise name and summary for a community of related entities from Nimiq blockchain documentation.',
        prompt: `Entities in this community:
${members.map(m => `- ${m.name} (${m.type}): ${m.description}`).join('\n')}`,
      })

      detectedCommunities.push({
        id: `community:${memberIds[0]}`,
        name: object.name,
        summary: object.summary,
        entityIds: memberIds,
      })
    }
    catch (error) {
      console.error('Failed to generate community summary:', error)
      detectedCommunities.push({
        id: `community:${memberIds[0]}`,
        name: members[0]?.name || 'Unnamed Community',
        summary: `Group of ${members.length} related entities`,
        entityIds: memberIds,
      })
    }
  }

  return detectedCommunities
}

/**
 * Save communities to DB and generate embeddings
 */
export async function saveCommunities(vectorize: VectorizeIndex | undefined, communityList: CommunityData[]): Promise<{ created: number }> {
  // Clear existing communities
  await db.delete(tables.entityCommunities)
  await db.delete(tables.communities)

  if (communityList.length === 0)
    return { created: 0 }

  // Insert communities
  for (const community of communityList) {
    await db.insert(tables.communities).values({
      id: community.id,
      name: community.name,
      summary: community.summary,
      keyEntities: JSON.stringify(community.entityIds.slice(0, 10)),
    })

    for (const entityId of community.entityIds) {
      await db.insert(tables.entityCommunities).values({
        entityId,
        communityId: community.id,
      }).onConflictDoNothing()
    }
  }

  // Generate community embeddings if vectorize available
  if (vectorize && communityList.length > 0) {
    const texts = communityList.map(c => `${c.name}: ${c.summary}`)
    const { embeddings } = await embedMany({ model: openai.embedding('text-embedding-3-small'), values: texts })

    const vectors = communityList.map((c, i) => ({
      id: c.id.slice(0, 64),
      values: embeddings[i]!,
      metadata: { type: 'community', communityId: c.id, name: c.name },
    }))

    const batchSize = 20
    for (let i = 0; i < vectors.length; i += batchSize)
      await vectorize.upsert(vectors.slice(i, i + batchSize))
  }

  return { created: communityList.length }
}
