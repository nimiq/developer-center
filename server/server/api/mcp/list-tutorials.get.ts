import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  const tutorials: any[] = []

  try {
    const docs = await queryCollection(event, 'tutorials').all()

    tutorials.push(...docs.map((doc: any) => ({
      title: doc.title || 'Untitled',
      description: doc.description || '',
      path: doc.stem || '',
      type: doc.type || 'lesson',
      url: `https://tutorial.nimiq.com/${doc.stem || ''}`,
    })))
  }
  catch {
    // Tutorials collection may be empty (remote repository not cloned)
  }

  return tutorials
}, { maxAge: 3600 })
