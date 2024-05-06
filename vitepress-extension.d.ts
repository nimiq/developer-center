import 'vitepress'
import type { NavigationType } from './.vitepress/theme/components/header/navigation-types'

declare module 'vitepress' {
  interface PageData {
    updatedCommitHash: string
  }

  namespace DefaultTheme {
    interface SidebarItem {
      icon?: string
      prefix?: string
    }

    interface Config {
      navigation: NavigationType

      footerItems: {
        link: string
        icon: string
        text: string
        social: string
      }[]
    }
  }
}

export {}
