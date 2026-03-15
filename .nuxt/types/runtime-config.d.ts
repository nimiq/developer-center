import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   llms: {
      domain: string,

      title: string,

      description: string,

      notes: Array<any>,

      sections: Array<{

      }>,

      contentRawMarkdown: {
         excludeCollections: Array<any>,
      },
   },

   assistant: {
      mcpServer: string,

      model: string,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         bindingName: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,

      componentDirs: Array<string>,
   },
  }
  interface SharedPublicRuntimeConfig {
   assistant: {
      enabled: boolean,

      apiPath: string,
   },

   mdc: {
      components: {
         prose: boolean,

         map: {
            accordion: string,

            "accordion-item": string,

            badge: string,

            callout: string,

            card: string,

            "card-group": string,

            caution: string,

            "code-collapse": string,

            "code-group": string,

            "code-icon": string,

            "code-preview": string,

            "code-tree": string,

            collapsible: string,

            field: string,

            "field-group": string,

            icon: string,

            kbd: string,

            note: string,

            steps: string,

            tabs: string,

            "tabs-item": string,

            tip: string,

            warning: string,
         },

         customElements: Array<any>,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },

      highlight: {
         noApiRoute: boolean,

         theme: {
            light: string,

            default: string,

            dark: string,
         },

         shikiEngine: string,

         langs: Array<string>,

         highlighter: string,
      },
   },

   content: {
      wsUrl: string,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }