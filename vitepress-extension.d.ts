// rewrite the PageData type from 'vitepress' to add the field `updatedCommitHash`
declare module 'vitepress' {
  interface PageData {
    updatedCommitHash: string
  }
}

export {}
