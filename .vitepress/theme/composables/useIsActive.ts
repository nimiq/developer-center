import { inBrowser } from "vitepress"

export const HASH_RE = /#.*$/
export const EXT_RE = /(index)?\.(md|html)$/

export function normalize(path: string): string {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '')
}

export function isActive(currentPath: string, matchPath?: string, asRegex: boolean = false): boolean {
  if (matchPath === undefined)
    return false
  if (matchPath.endsWith('/index'))
    matchPath = matchPath.replace('/index', '/')

  currentPath = normalize(`/${currentPath}`)

  if (asRegex)
    return new RegExp(matchPath).test(currentPath)

  if (normalize(matchPath) !== currentPath)
    return false

  const hashMatch = matchPath.match(HASH_RE)

  if (hashMatch)
    return (inBrowser ? location.hash : '') === hashMatch[0]

  return true
}
