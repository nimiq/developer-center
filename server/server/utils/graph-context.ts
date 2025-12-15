import type { Community, Entity, Relationship } from '../db/schema'
import { eq } from 'drizzle-orm'
import { db, schema } from 'hub:db'

export interface GraphContext {
  entities: Entity[]
  relationships: Relationship[]
  communities: Community[]
  sectionPaths: string[]
}

/**
 * Get graph context via BFS traversal from seed entities
 */
export async function getGraphContext(seedEntityIds: string[], hops = 2): Promise<GraphContext> {
  if (seedEntityIds.length === 0)
    return { entities: [], relationships: [], communities: [], sectionPaths: [] }

  // BFS to find connected entities within N hops
  const visited = new Set<string>(seedEntityIds)
  const queue = [...seedEntityIds]
  const collectedRels: Relationship[] = []

  for (let hop = 0; hop < hops && queue.length > 0; hop++) {
    const currentBatch = [...queue]
    queue.length = 0

    for (const entityId of currentBatch) {
      // Get outgoing relationships
      const outgoing = await db.select().from(schema.relationships).where(eq(schema.relationships.sourceEntityId, entityId))
      for (const rel of outgoing) {
        collectedRels.push(rel)
        if (!visited.has(rel.targetEntityId)) {
          visited.add(rel.targetEntityId)
          queue.push(rel.targetEntityId)
        }
      }

      // Get incoming relationships
      const incoming = await db.select().from(schema.relationships).where(eq(schema.relationships.targetEntityId, entityId))
      for (const rel of incoming) {
        collectedRels.push(rel)
        if (!visited.has(rel.sourceEntityId)) {
          visited.add(rel.sourceEntityId)
          queue.push(rel.sourceEntityId)
        }
      }
    }
  }

  // Fetch all visited entities
  const entityIds = [...visited]
  const fetchedEntities: Entity[] = []

  for (const id of entityIds) {
    const result = await db.select().from(schema.entities).where(eq(schema.entities.id, id))
    if (result[0])
      fetchedEntities.push(result[0])
  }

  // Deduplicate relationships
  const uniqueRels = [...new Map(collectedRels.map(r => [r.id, r])).values()]

  // Get section paths for all entities (for context fetching)
  const sectionPaths = new Set<string>()
  for (const entityId of entityIds) {
    const mentions = await db.select({ sectionPath: schema.entityMentions.sectionPath }).from(schema.entityMentions).where(eq(schema.entityMentions.entityId, entityId))
    for (const m of mentions) {
      if (m.sectionPath)
        sectionPaths.add(m.sectionPath)
    }
  }

  // Get communities for seed entities
  const fetchedCommunities: Community[] = []
  for (const entityId of seedEntityIds) {
    const result = await db
      .select({ id: schema.communities.id, name: schema.communities.name, summary: schema.communities.summary, keyEntities: schema.communities.keyEntities, createdAt: schema.communities.createdAt, updatedAt: schema.communities.updatedAt })
      .from(schema.communities)
      .innerJoin(schema.entityCommunities, eq(schema.communities.id, schema.entityCommunities.communityId))
      .where(eq(schema.entityCommunities.entityId, entityId))

    for (const c of result) {
      if (!fetchedCommunities.some(existing => existing.id === c.id))
        fetchedCommunities.push(c)
    }
  }

  return {
    entities: fetchedEntities,
    relationships: uniqueRels,
    communities: fetchedCommunities,
    sectionPaths: [...sectionPaths],
  }
}

/**
 * Format graph context as text for LLM consumption
 */
export function formatGraphContext(context: GraphContext): string {
  const parts: string[] = []

  if (context.communities.length > 0) {
    parts.push('## Related Topics')
    for (const c of context.communities)
      parts.push(`- **${c.name}**: ${c.summary}`)
  }

  if (context.entities.length > 0) {
    parts.push('\n## Key Entities')
    for (const e of context.entities)
      parts.push(`- **${e.name}** (${e.type}): ${e.description}`)
  }

  if (context.relationships.length > 0) {
    parts.push('\n## Relationships')
    for (const r of context.relationships)
      parts.push(`- ${r.sourceEntityId.split(':').pop()} ${r.type} ${r.targetEntityId.split(':').pop()}`)
  }

  return parts.join('\n')
}
