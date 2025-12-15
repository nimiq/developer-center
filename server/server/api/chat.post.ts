import type { CoreMessage } from 'ai'
import { google } from '@ai-sdk/google'
import { createUIMessageStream, createUIMessageStreamResponse, streamText } from 'ai'
import { z } from 'zod'

/**
 * RAG Chat Pipeline (Standard + GraphRAG modes)
 *
 * Standard Mode:
 *   User Message → generateSearchQueries() → BM25 + Semantic → RRF → Rerank → LLM
 *
 * GraphRAG Mode:
 *   User Message → recognizeEntities() → Graph Traversal (2 hops) → Context Assembly
 *                → + Standard Search → Combine → Rerank → LLM
 */

const bodySchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })),
  mode: z.enum(['standard', 'graphrag']).optional().default('standard'),
})

export default defineEventHandler(async (event) => {
  const { messages, mode } = await readValidatedBody(event, bodySchema.parse)
  const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content || ''

  // Start stream immediately so we can send progress updates
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      let graphContextText = ''

      // GraphRAG mode: Entity recognition + graph traversal
      if (mode === 'graphrag') {
        writer.write({ type: 'data-progress', data: { step: 'graph', message: 'Analyzing knowledge graph...' } })

        try {
          const entityIds = await recognizeEntities(lastUserMsg, true)
          if (entityIds.length > 0) {
            const graphContext = await getGraphContext(entityIds, 2)
            graphContextText = formatGraphContext(graphContext)
            writer.write({ type: 'data-progress', data: { step: 'graph', message: `Found ${graphContext.entities.length} related entities` } })
          }
        }
        catch (error) {
          console.error('GraphRAG context failed:', error)
        }
      }

      // Step 1: Generate search queries from conversation
      writer.write({ type: 'data-progress', data: { step: 'analyzing', message: 'Analyzing query...' } })
      const queries = await generateSearchQueries(messages)

      // Step 2: Search docs with dual queries
      writer.write({ type: 'data-progress', data: { step: 'searching', message: 'Searching documentation...' } })
      const searchResults = await searchDocs(event, queries, { limit: 20 })

      // Step 3: Rerank results
      writer.write({ type: 'data-progress', data: { step: 'reranking', message: `Ranking ${searchResults.length} results...` } })
      const approved = await rerankResults(lastUserMsg, searchResults, 5)

      // Step 4: Build context (combine graph context with doc context)
      writer.write({ type: 'data-progress', data: { step: 'context', message: `Found ${approved.length} relevant sections` } })
      const docContext = approved.map(r => `## ${r.title} - ${r.section}\n${r.content}`).join('\n\n---\n\n')
      const context = graphContextText ? `${graphContextText}\n\n---\n\n${docContext}` : docContext

      // Write sources
      for (const r of approved) {
        writer.write({ type: 'source-url', sourceId: r.path, url: r.url, title: r.title })
      }

      // Step 5: Generate response with Gemini 3 Pro
      writer.write({ type: 'data-progress', data: { step: 'generating', message: 'Generating response...' } })

      const result = streamText({
        model: google('gemini-3-pro-preview'),
        system: `<role>
You are a Nimiq blockchain documentation assistant helping developers build with Nimiq.
</role>

<instructions>
- Answer based ONLY on the provided documentation context
- Be concise and technically accurate
- Use markdown: code blocks for examples, headers for structure
- Reference specific sections by name when helpful
</instructions>

<constraints>
- NEVER invent features, APIs, or information not in the docs
- NEVER use training data - only the provided context
- Don't speculate about future releases
- Stick to technical information, avoid promotional language
</constraints>

<no_context_behavior>
If the context doesn't answer the question, respond:
"I don't have documentation on that. You might find relevant info in: [suggest most likely module]"

Available modules: Web Client, Protocol, RPC API, Nimiq Utils, Hub, Nodes & Validators
</no_context_behavior>

<context>
${context || 'No relevant documentation found.'}
</context>

Based on the documentation above, answer the user's question.`,
        messages: messages as CoreMessage[],
        providerOptions: {
          google: {
            thinkingConfig: {
              thinkingLevel: 'low',
              includeThoughts: true,
            },
          },
        },
      })

      // Clear progress when response starts
      writer.write({ type: 'data-progress', data: { step: 'done', message: '' } })
      writer.merge(result.toUIMessageStream({ sendReasoning: true }))
    },
  })

  return createUIMessageStreamResponse({ stream })
})
