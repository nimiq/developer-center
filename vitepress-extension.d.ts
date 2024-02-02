import 'vitepress'

declare module 'vitepress' {
  interface PageData {
    updatedCommitHash: string
  }
}

export {}
