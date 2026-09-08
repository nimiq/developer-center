/**
 * docus 5.13.0 reads `AppConfig['seo']['schema']` in its own `useSeo` composable
 * (nuxt-content/docus#1433) but only declares that field in an `AppConfig`
 * augmentation that loses against the `AppConfig` Nuxt generates from the
 * resolved app.config values, so `nuxi typecheck` fails inside the layer.
 * Re-declare the shape on `CustomAppConfig`, which Nuxt merges in.
 * Drop this once docus ships `seo.schema` in its own app.config defaults.
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
