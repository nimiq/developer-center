import type { CoreMessage } from 'ai'
import { google } from '@ai-sdk/google'
import { createUIMessageStream, createUIMessageStreamResponse, streamText } from 'ai'
import { z } from 'zod'
import { rerankResults } from '../utils/rerank'
import { searchDocs } from '../utils/search-docs'

const bodySchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })),
})

export default defineEventHandler(async (event) => {
  const { messages } = await readValidatedBody(event, bodySchema.parse)
  const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content || ''

  // Start stream immediately so we can send progress updates
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      // Step 1: Search docs
      writer.write({ type: 'data-progress', data: { step: 'searching', message: 'Searching documentation...' } })
      const searchResults = await searchDocs(event, lastUserMsg, { limit: 20 })

      // Step 2: Rerank results
      writer.write({ type: 'data-progress', data: { step: 'reranking', message: `Ranking ${searchResults.length} results...` } })
      const approved = await rerankResults(lastUserMsg, searchResults, 5)

      // Step 3: Build context
      writer.write({ type: 'data-progress', data: { step: 'context', message: `Found ${approved.length} relevant sections` } })
      const context = approved.map(r => `## ${r.title} - ${r.section}\n${r.content}`).join('\n\n---\n\n')

      // Write sources
      for (const r of approved) {
        writer.write({ type: 'source-url', sourceId: r.path, url: r.url, title: r.title })
      }

      // Step 4: Generate response
      writer.write({ type: 'data-progress', data: { step: 'generating', message: 'Generating response...' } })

      const result = streamText({
        model: google('gemini-2.5-flash'),
        system: `You are a helpful Nimiq blockchain documentation assistant. Answer questions based on the provided documentation context.

Guidelines:
- Be concise and accurate
- Reference specific documentation sections when relevant
- If the context doesn't contain enough information, say so
- Use markdown formatting for code examples and structure

Documentation context:
${context || 'No relevant documentation found.'}`,
        messages: messages as CoreMessage[],
        providerOptions: {
          google: {
            thinkingConfig: {
              thinkingBudget: 8192,
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
