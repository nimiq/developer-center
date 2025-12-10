import type { SearchResult } from './search-docs'
import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

/**
 * Rerank search results using LLM to filter for relevance
 * @param query The user's search query
 * @param results Search results to rerank
 * @param topK Maximum number of results to return (default 5)
 * @returns Filtered array of relevant results
 */
export async function rerankResults(query: string, results: SearchResult[], topK = 5): Promise<SearchResult[]> {
  if (results.length === 0)
    return []

  if (results.length <= topK)
    return results

  try {
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: z.object({
        resultIds: z.array(z.number()).describe('IDs of the most relevant chunks that directly answer the query'),
      }),
      system: `You are a search result reranker for Nimiq blockchain documentation.
Your task is to filter search results and keep only those that directly help answer the user's query.
Be selective - exclude chunks that are only tangentially related.
Return the IDs of the most relevant chunks (maximum ${topK}).`,
      prompt: `Query: ${query}

Available chunks:
${results.map((r, i) => `## ID: ${i}
Title: ${r.title}
Section: ${r.section}
<content>
${r.content.slice(0, 500)}${r.content.length > 500 ? '...' : ''}
</content>`).join('\n\n')}`,
    })

    // Filter results by approved IDs, preserving order from LLM
    const approved = object.resultIds
      .filter(id => id >= 0 && id < results.length)
      .slice(0, topK)
      .map(id => results[id]!)

    return approved.length > 0 ? approved : results.slice(0, topK)
  }
  catch (error) {
    console.error('Reranking failed, returning top results:', error)
    return results.slice(0, topK)
  }
}
