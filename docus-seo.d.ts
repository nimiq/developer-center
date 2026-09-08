/**
 * docus 5.13.0 reads `AppConfig['seo']['schema']` in its own `useSeo` composable
 * (nuxt-content/docus#1433), but the only place that field is declared is
 * `docus/app/types/index.d.ts` — a module, so its `declare module 'nuxt/schema'`
 * block is a module augmentation that never applies here, because nothing pulls
 * that file into the program. `nuxi typecheck` therefore fails inside the layer.
 * Re-declaring the shape on `CustomAppConfig`, which Nuxt does merge in, is
 * enough to unblock it.
 *
 * Fixed upstream in nuxt-content/docus#1437 — drop this once that ships.
 */
interface DocusSeoOrganization {
  name: string
  url?: string
  logo?: string
  sameAs?: string[]
}

declare module 'nuxt/schema' {
  interface CustomAppConfig {
    seo?: {
      schema?: {
        type?: 'SoftwareApplication' | 'Product' | 'Organization' | 'Person'
        sameAs?: string[]
        applicationCategory?: string
        operatingSystem?: string
        price?: number
        priceCurrency?: string
        organization?: DocusSeoOrganization & {
          parentOrganization?: DocusSeoOrganization
        }
      }
    }
  }
}

export {}
