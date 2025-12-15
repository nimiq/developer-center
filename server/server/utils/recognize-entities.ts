import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

/**
 * Recognize entity names from a user query using fuzzy matching against DB
 */
export async function recognizeEntitiesFast(query: string): Promise<string[]> {
  const allEntities = await db.select({ id: schema.entities.id, name: schema.entities.name, type: schema.entities.type }).from(schema.entities)

  if (allEntities.length === 0)
    return []

  // Simple word-based matching (case-insensitive)
  const queryWords = query.toLowerCase().split(/\s+/)
  const matched: string[] = []

  for (const entity of allEntities) {
    const entityWords = entity.name.toLowerCase().split(/\s+/)
    const isMatch = entityWords.some(ew => queryWords.some(qw => qw.includes(ew) || ew.includes(qw)))
    if (isMatch)
      matched.push(entity.id)
  }

  return matched
}

/**
 * Recognize entity names from a user query using LLM (more accurate)
 */
export async function recognizeEntitiesAccurate(query: string): Promise<string[]> {
  const allEntities = await db.select({ id: schema.entities.id, name: schema.entities.name, type: schema.entities.type }).from(schema.entities)

  if (allEntities.length === 0)
    return []

  try {
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: z.object({
        entityNames: z.array(z.string()).describe('Names of entities mentioned or implied in the query'),
      }),
      system: `Identify Nimiq blockchain entities mentioned or implied in the user query.
Available entities: ${allEntities.map(e => e.name).join(', ')}

Return ONLY entity names from the available list that are directly referenced or strongly implied.`,
      prompt: query,
    })

    // Match recognized names to entity IDs
    const matched: string[] = []
    for (const name of object.entityNames) {
      const entity = allEntities.find(e => e.name.toLowerCase() === name.toLowerCase())
      if (entity)
        matched.push(entity.id)
    }

    return matched
  }
  catch (error) {
    console.error('Entity recognition failed, falling back to fuzzy match:', error)
    return recognizeEntitiesFast(query)
  }
}

/**
 * Recognize entities using hybrid approach (fast + accurate merge)
 */
export async function recognizeEntities(query: string, useLLM = true): Promise<string[]> {
  const fastMatches = await recognizeEntitiesFast(query)

  if (!useLLM)
    return fastMatches

  const accurateMatches = await recognizeEntitiesAccurate(query)

  return [...new Set([...fastMatches, ...accurateMatches])]
}
