import { openai } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { z } from 'zod'

export async function extractKeywords(query: string): Promise<string[]> {
  try {
    const { object } = await generateObject({
      model: openai('gpt-5-nano'),
      output: 'array',
      schema: z.string(),
      system: `<role>Search keyword extractor for Nimiq blockchain documentation</role>
<task>Extract search terms from user query. Include synonyms and expand abbreviations.</task>
<format>Lowercase single words or short phrases. No duplicates.</format>`,
      prompt: query,
    })
    return object
  }
  catch {
    return query.toLowerCase().split(/\s+/).filter(Boolean)
  }
}
