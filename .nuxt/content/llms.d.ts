
import type { SQLOperator, PageCollections, PageCollectionItemBase } from '@nuxt/content'
declare module 'nuxt-llms' {
  interface ModuleOptions {
    contentRawMarkdown?: false | {
      /**
       * Whether to rewrite the LLMs.txt file to use the raw markdown endpoint
       * @default true
       */
      rewriteLLMSTxt?: boolean
      /**
       * Whether to exclude specific collections from the raw markdown endpoint
       * @default []
       */
      excludeCollections?: string[]
    }
  }
  interface LLMsSection {
    contentCollection?: string | keyof PageCollections
    contentFilters?: Array<{
      field: string
      operator: SQLOperator
      value?: string
    }>
  }
}

declare module 'nitropack/types' {
  interface NitroRuntimeHooks {
    'content:llms:generate:document': (event: H3Event, doc: PageCollectionItemBase, options: ModuleOptions) => void
  }
}
        