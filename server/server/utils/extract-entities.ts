import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

export const entityTypes = ['concept', 'api', 'component', 'protocol', 'library', 'tool', 'method', 'parameter', 'example'] as const
export type EntityType = typeof entityTypes[number]

export const relationshipTypes = ['uses', 'requires', 'implements', 'related_to', 'part_of', 'returns', 'accepts'] as const
export type RelationshipType = typeof relationshipTypes[number]

export interface ExtractedEntity {
  name: string
  type: EntityType
  description: string
}

export interface ExtractedRelationship {
  source: string
  target: string
  type: RelationshipType
  description: string
}

export interface ExtractionResult {
  entities: ExtractedEntity[]
  relationships: ExtractedRelationship[]
}

const extractionSchema = z.object({
  entities: z.array(z.object({
    name: z.string().describe('Canonical name of the entity'),
    type: z.enum(entityTypes).describe('Category of the entity'),
    description: z.string().describe('Brief description of what this entity is/does'),
  })),
  relationships: z.array(z.object({
    source: z.string().describe('Name of source entity'),
    target: z.string().describe('Name of target entity'),
    type: z.enum(relationshipTypes).describe('Type of relationship'),
    description: z.string().describe('Brief description of the relationship'),
  })),
})

/**
 * Extract entities and relationships from documentation content using LLM
 */
export async function extractEntities(content: string, context: { title: string, path: string }): Promise<ExtractionResult> {
  if (!content.trim())
    return { entities: [], relationships: [] }

  try {
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: extractionSchema,
      system: `Extract knowledge graph entities and relationships from Nimiq blockchain documentation.

<entity_types>
- concept: Core ideas, patterns, mechanisms (e.g., "Proof of Stake", "Consensus", "Block")
- api: API classes, interfaces, endpoints (e.g., "Client", "Transaction")
- component: System components, modules (e.g., "Mempool", "Validator")
- protocol: Protocol specs, standards (e.g., "Albatross", "JSON-RPC")
- library: External or internal libraries (e.g., "@nimiq/core", "Web Client")
- tool: Developer tools, utilities (e.g., "RPC Proxy", "Faucet")
- method: Functions, methods (e.g., "sendTransaction", "getBlockByNumber")
- parameter: Configuration options, params (e.g., "gasLimit", "fee")
- example: Code snippets, sample implementations, demos (e.g., "Send Transaction Example", "Staking Setup")
</entity_types>

<relationship_types>
- uses: Entity A uses/calls Entity B
- requires: Entity A requires/depends on Entity B
- implements: Entity A implements/extends Entity B
- related_to: General association
- part_of: Entity A is part of Entity B
- returns: Method returns entity type
- accepts: Method accepts entity type as input
</relationship_types>

<rules>
- Extract ONLY entities clearly defined or explained in the content
- Use canonical names (e.g., "Client" not "the client class")
- Prefer specific over generic names
- Include relationships only between extracted entities
- Keep descriptions concise (1 sentence)
</rules>`,
      prompt: `Document: ${context.title}
Path: ${context.path}

<content>
${content.slice(0, 4000)}
</content>`,
    })

    return {
      entities: object.entities,
      relationships: object.relationships.filter(r =>
        object.entities.some(e => e.name === r.source)
        && object.entities.some(e => e.name === r.target),
      ),
    }
  }
  catch (error) {
    console.error(`Entity extraction failed for ${context.path}:`, error)
    return { entities: [], relationships: [] }
  }
}

/**
 * Normalize entity name for deduplication
 */
export function normalizeEntityName(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, ' ')
}

/**
 * Generate a stable ID for an entity
 */
export function entityId(name: string, type: EntityType): string {
  return `${type}:${normalizeEntityName(name)}`
}

/**
 * Generate a stable ID for a relationship
 */
export function relationshipId(source: string, target: string, type: RelationshipType): string {
  return `${normalizeEntityName(source)}--${type}-->${normalizeEntityName(target)}`
}
