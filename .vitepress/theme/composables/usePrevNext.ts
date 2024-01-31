import { computed } from 'vue'
import { getFlatSideBarLinks, getSidebar } from './sidebar'
import { isActive } from './useIsActive'
import { useData } from './useData'

interface PrevNext { text?: string, link?: string }
export function usePrevNext() {
  const { page, theme, frontmatter } = useData()

  function getItem(direction: 'prev' | 'next') {
    const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath)
    const candidates = getFlatSideBarLinks(sidebar)

    const index = candidates.findIndex(link => isActive(page.value.relativePath, link.link))
    const t = (theme.value as { prev?: string | PrevNext, next?: string | PrevNext })[direction]

    const hideFromFrontmatter = frontmatter.value.docFooter === false
    const hide = hideFromFrontmatter || (theme.value.docFooter?.[direction] === false && !frontmatter.value[direction]) || frontmatter.value[direction] === false
    if (!hide) {
      if (typeof t === 'string')
        return { text: t, link: undefined }
      else if (typeof t === 'object')
        return t
      else
        return { text: candidates[index + 1]?.docFooterText ?? candidates[index + 1]?.text, link: candidates[index + 1]?.link }
    }
  }

  const next = computed(() => getItem('next'))
  const prev = computed(() => getItem('prev'))

  return {
    next,
    prev,
    hasNext: computed(() => !!next.value?.text),
    hasPrev: computed(() => !!prev.value?.text),
  }
}
