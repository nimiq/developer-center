declare const __REPO_LAST_COMMIT_URL__: string
declare const __REPO_LAST_COMMIT_HASH__: string
declare const __ALBATROSS_COMMIT_HASH__: string
declare const __ALBATROSS_COMMIT_DATE__: string
declare const __REPO_URL__: string
declare const __DEVELOPER_CENTER_VERSION__: string
declare const __BUILD_ENVIRONMENT__: string
declare const __BUILD_TIME__: string

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
