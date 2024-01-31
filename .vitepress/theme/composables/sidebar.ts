import type { DefaultTheme } from 'vitepress'

export interface SidebarLink {
  text: string
  link: string
  docFooterText?: string
}

type SidebarItem = DefaultTheme.SidebarItem

export function getSidebar(
  _sidebar: DefaultTheme.Sidebar | undefined,
  path: string,
): SidebarItem[] {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar)
  if (_sidebar == null)
    return []

  path = ensureStartingSlash(path)

  const dir = Object.keys(_sidebar)
    .sort((a, b) => {
      return b.split('/').length - a.split('/').length
    })
    .find((dir) => {
      // make sure the multi sidebar key starts with slash too
      return path.startsWith(ensureStartingSlash(dir))
    })

  const sidebar = dir ? _sidebar[dir] : []
  return Array.isArray(sidebar)
    ? addBase(sidebar)
    : addBase(sidebar.items, sidebar.base)
}

function addBase(items: SidebarItem[], _base?: string): SidebarItem[] {
  return [...items].map((_item) => {
    const item = { ..._item }
    const base = item.base || _base
    if (base && item.link)
      item.link = base + item.link
    if (item.items)
      item.items = addBase(item.items, base)
    return item
  })
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function getFlatSideBarLinks(sidebar: SidebarItem[]): SidebarLink[] {
  const links: SidebarLink[] = []

  function recursivelyExtractLinks(items: SidebarItem[]) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText,
        })
      }

      if (item.items)
        recursivelyExtractLinks(item.items)
    }
  }

  recursivelyExtractLinks(sidebar)

  return links
}
