import { data } from '../.vitepress/data/nimiq-utils.data'

export default {
  paths() {
    // Get all internal module paths with full content data
    const moduleKeys = Object.keys(data.content)
    return moduleKeys.map((key) => {
      const moduleContent = data.content[key]
      return {
        params: {
          module: key,
          title: moduleContent.title,
          description: moduleContent.description,
          usageExamples: moduleContent.usageExamples,
          api: moduleContent.api,
        },
      }
    })
  },
}
