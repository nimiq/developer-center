import { useData as useData$ } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

// copied from https://github.com/vuejs/vitepress/blob/main/src/client/app/data.ts

// useData with types
export const useData: typeof useData$<DefaultTheme.Config> = useData$
