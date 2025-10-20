// Type definitions for custom VitePress frontmatter properties
// This provides TypeScript completion and type checking for frontmatter in markdown files

declare module 'vitepress' {
  interface PageData {
    frontmatter: {
      // Common properties
      title?: string
      description?: string
      layout?: 'default' | 'home' | 'page' | 'doc' | 'overview'

      // Hero section
      hero?: {
        title?: string
        description?: string
      }

      // Hero cards (used in overview layout)
      heroCards?: Array<{
        icon?: string
        iconClass?: string
        title: string
        description: string
        label?: string
        href?: string
        bgColor?: 'gold' | 'blue' | 'green' | 'orange' | 'purple' | 'red'
        hoverColor?: 'gold' | 'blue' | 'green' | 'orange' | 'purple' | 'red'
        class?: string
      }>

      // Features grid
      whyNimiq?: FeatureSection
      whyHub?: FeatureSection
      rpcFeatures?: FeatureSection

      // Quick start grid
      quickStartGrid?: ActionSection
      hoverableGrid?: ActionSection

      // Banners
      mcpBanner?: BannerConfig
      conceptsBanner?: BannerConfig
      browserServerBanner?: BannerConfig

      // Alternative options
      alternativeOptions?: {
        label?: string
        title?: string
        description?: string
        align?: 'left' | 'center' | 'right'
        buttons?: Array<{
          text: string
          href: string
          variant: 'primary' | 'secondary'
        }>
      }

      // Integrations
      integrationsLabel?: string
      integrationsTitle?: string
      integrationsDescription?: string
      integrationsActions?: Array<{
        title: string
        description: string
        href: string
        icon: string
        iconClass?: string
      }>

      // Direct connection section
      directConnection?: {
        align?: 'left' | 'center' | 'right'
        label?: string
        title?: string
        description?: string
        h1?: boolean
      }

      // Custom frontmatter (allow any additional properties)
      [key: string]: any
    }
  }
}

interface FeatureSection {
  label?: string
  title?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  features?: Array<{
    title: string
    description: string
    icon: string
    iconBgColor?: string
  }>
}

interface ActionSection {
  label?: string
  title?: string
  description?: string
  actions?: Array<{
    title: string
    description: string
    href: string
    icon: string
  }>
}

interface BannerConfig {
  label?: string
  headline?: string
  subline?: string
  linkHref?: string
  linkLabel?: string
}

export {}
