import type { DefaultTheme } from 'vitepress/theme'
import { useData as useData$ } from 'vitepress'

// copied from https://github.com/vuejs/vitepress/blob/main/src/client/app/data.ts

// useData with types
export const useData: typeof useData$<DefaultTheme.Config> = useData$
