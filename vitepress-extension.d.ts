import 'vitepress'

declare module 'vitepress' {
  interface PageData {
    updatedCommitHash: string
  }

  interface SidebarItem {
    icon: string
  }
}

export {}
