import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

export interface SearchQueries {
  keywords: string[]
  searchQuery: string
}

/**
 * Generate optimized search queries from user message
 * - keywords: for BM25 exact terminology matching
 * - searchQuery: for semantic embedding search (broader terms)
 */
export async function generateSearchQueries(messages: { role: string, content: string }[]): Promise<SearchQueries> {
  try {
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: `Extract search terms from the user's Nimiq blockchain question.

<task>
Generate two query types:
1. keywords: exact technical terms for BM25 (expand abbreviations, include synonyms)
2. searchQuery: natural language description for semantic search
</task>

<examples>
User: "How do I stake NIM?"
keywords: ["staking", "stake", "validator", "NIM", "delegation", "proof of stake"]
searchQuery: "how to stake NIM tokens and become a validator or delegate"
</examples>`,
      schema: z.object({
        keywords: z.array(z.string()).describe('Keywords for BM25 search. Use exact terminology, technical terms, abbreviations expanded.'),
        searchQuery: z.string().describe('Semantic search query. Broader, natural language description of what the user is looking for.'),
      }),
      messages: messages.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
    })
    return object
  }
  catch (error) {
    console.error('Query generation failed, using fallback:', error)
    const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content || ''
    return {
      keywords: lastUserMsg.toLowerCase().split(/\s+/).filter(Boolean),
      searchQuery: lastUserMsg,
    }
  }
}
