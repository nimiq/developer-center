import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  try {
    const docs = await queryCollection(event, 'tutorials').all()
    return docs.map((doc: any) => ({
      title: doc.title || 'Untitled',
      description: doc.description || '',
      path: doc.stem || '',
      type: doc.type || 'lesson',
      url: `https://tutorial.nimiq.com/${doc.stem || ''}`,
    }))
  }
  catch {
    return [] // Tutorials collection may be empty
  }
})
