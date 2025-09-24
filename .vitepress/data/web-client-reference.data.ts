import type { NimiqVitepressSidebar } from 'nimiq-vitepress-theme/types.js'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface ReferenceItem {
  text: string
  link: string
}

interface ReferenceCategory {
  text: string
  icon: string
  items: ReferenceItem[]
}

// @unocss-include

// Icon mapping for each reference category
const categoryIcons: Record<string, string> = {
  'classes': 'i-tabler:container',
  'enumerations': 'i-tabler:list-numbers',
  'functions': 'i-tabler:function',
  'interfaces': 'i-tabler:layout-2',
  'type-aliases': 'i-tabler:tags',
  '@nimiq': 'i-tabler:layout-board-split',
}

// Category display names
const categoryNames: Record<string, string> = {
  'type-aliases': 'Type Aliases',
  '@nimiq': '@nimiq Namespaces',
}

function getDisplayName(categoryName: string): string {
  return categoryNames[categoryName] || categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
}

function collectFilesRecursively(dirPath: string, basePath: string): ReferenceItem[] {
  const files: ReferenceItem[] = []

  try {
    const items = readdirSync(dirPath)

    for (const item of items) {
      const itemPath = join(dirPath, item)
      const stats = statSync(itemPath)

      if (stats.isDirectory()) {
        // Recursively collect files from subdirectories
        files.push(...collectFilesRecursively(itemPath, basePath))
      }
      else if (item.endsWith('.md') && item !== 'index.md' && item !== 'README.md') {
        // Calculate relative path from base reference directory
        const relativePath = itemPath.replace(`${basePath}/`, '').replace('.md', '')
        const name = item.replace('.md', '')

        files.push({
          text: name,
          link: `/web-client/reference/${relativePath}`,
        })
      }
    }
  }
  catch (error) {
    console.warn(`Could not read directory ${dirPath}:`, error)
  }

  return files
}

function generateReferenceItems(referenceDir: string): ReferenceCategory[] {
  const categories: ReferenceCategory[] = []

  try {
    const items = readdirSync(referenceDir)

    for (const item of items) {
      const itemPath = join(referenceDir, item)
      const stats = statSync(itemPath)

      // Skip non-directories and hidden directories
      if (!stats.isDirectory() || item.startsWith('.')) {
        continue
      }

      let categoryFiles: ReferenceItem[] = []

      if (item.startsWith('@')) {
        // Handle @nimiq namespace - flatten all nested files
        categoryFiles = collectFilesRecursively(itemPath, referenceDir)
      }
      else {
        // Handle regular categories - only direct children
        categoryFiles = readdirSync(itemPath)
          .filter(file => file.endsWith('.md') && file !== 'index.md' && file !== 'README.md')
          .map((file) => {
            const name = file.replace('.md', '')
            return {
              text: name,
              link: `/web-client/reference/${item}/${name}`,
            }
          })
      }

      // Sort alphabetically
      categoryFiles.sort((a, b) => a.text.localeCompare(b.text))

      if (categoryFiles.length > 0) {
        categories.push({
          text: getDisplayName(item),
          icon: categoryIcons[item] || 'i-tabler:file',
          items: categoryFiles,
        })
      }
    }
  }
  catch (error) {
    console.warn('Could not read web-client reference directory:', error)
    return []
  }

  return categories
}

function loadWebClientReference() {
  const referenceDir = join(__dirname, '../../web-client/reference')
  const categories = generateReferenceItems(referenceDir)

  // Check if overview/index file exists
  const hasOverview = (() => {
    try {
      const indexPath = join(referenceDir, 'index.md')
      const readmePath = join(referenceDir, 'README.md')
      return existsSync(indexPath) || existsSync(readmePath)
    }
    catch {
      return false
    }
  })()

  // Check if globals file exists
  const hasGlobals = (() => {
    try {
      const globalsPath = join(referenceDir, 'globals.md')
      return existsSync(globalsPath)
    }
    catch {
      return false
    }
  })()

  // Build the complete API Reference section
  const items = []

  // Add overview if it exists
  if (hasOverview) {
    items.push({ text: 'Overview', link: '/web-client/reference/', icon: 'i-tabler:layout-grid' })
  }

  // Add all categories
  items.push(...categories)

  // Add globals if it exists
  if (hasGlobals) {
    items.push({ text: 'Globals', link: '/web-client/reference/globals', icon: 'i-tabler:world' })
  }

  const apiReferenceSection: NimiqVitepressSidebar['items'][number] = {
    label: 'API Reference',
    items,
  }

  return {
    apiReferenceSection,
    categories,
  }
}

// Export for compatibility with theme config
export const data = loadWebClientReference()

// VitePress data loader
export default {
  load() {
    return data
  },
}
