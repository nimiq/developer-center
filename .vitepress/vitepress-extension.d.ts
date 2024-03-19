import 'vitepress'
import type { NavigationType } from './theme/components/header/navigation-types'

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
    }
  }
}

export {}
