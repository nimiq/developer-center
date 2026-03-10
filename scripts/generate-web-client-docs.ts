import { execSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readPackageJSON } from 'pkg-types'

interface ReferenceItem {
  text: string
  link: string
}

interface ReferenceCategory {
  text: string
  icon: string
  items: ReferenceItem[]
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const categoryIcons: Record<string, string> = {
  'classes': 'i-tabler:container',
  'enumerations': 'i-tabler:list-numbers',
  'functions': 'i-tabler:function',
  'interfaces': 'i-tabler:layout',
  'type-aliases': 'i-tabler:tags',
  '@nimiq': 'i-tabler:layout-board-split',
}

const categoryNames: Record<string, string> = {
  'type-aliases': 'Type Aliases',
  '@nimiq': '@nimiq Namespaces',
}

export async function generateWebClientDocs() {
  console.info('Generating Web-Client docs...')
  const webClientFolder = join(__dirname, '../content/web-client')
  const generatedDocsFolder = join(webClientFolder, 'reference')
  const versionFile = join(webClientFolder, '.version')
  const fallbackVersion = existsSync(versionFile) ? readFileSync(versionFile, 'utf-8').trim() : ''
  let packageVersion = fallbackVersion

  try {
    packageVersion = await readPackageJSON(join(__dirname, '../node_modules/@nimiq/core')).then(pkg => pkg.version || fallbackVersion)
  }
  catch {
    packageVersion = fallbackVersion
  }

  if (!packageVersion) {
    throw new Error('Could not determine @nimiq/core version')
  }

  // Read package version of generated docs, if already built
  if (existsSync(versionFile)) {
    const generatedVersion = readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      if (existsSync(generatedDocsFolder)) {
        writeWebClientReferenceData(generatedDocsFolder)
      }
      console.info(`Web-Client docs ${packageVersion} already generated`)
      return
    }
  }

  // Rebuild docs. They are built in the folder `web-client/tmp` and then we selectively copy them to `web-client`
  console.info(`Generating Web-Client docs ${packageVersion}...`)
  execSync('pnpm run build:web-client', { stdio: 'inherit' })

  // get all the README.md files in the generated docs folder and rename them to index.md
  // then go to ./globals.md and change the links to the README.md files to index.md
  lsFiles(generatedDocsFolder)
    .filter(file => file.endsWith('README.md'))
    .forEach(file => execSync(`mv ${file} ${file.replace('README.md', 'index.md')}`))

  lsFiles(generatedDocsFolder).forEach((file) => {
    const content = readFileSync(file, 'utf-8')
    const updatedContent = content.replace(/README.md/g, 'index.md')
    writeFileSync(file, updatedContent, 'utf-8')
  })

  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)

  // Remove the first four lines of all files in the generated docs folder
  removeFirstFourLines(generatedDocsFolder)
  writeWebClientReferenceData(generatedDocsFolder)
}

function lsFiles(folderPath: string): string[] {
  // recursively list all files in a folder
  const items = readdirSync(folderPath)
  const files: string[] = []
  for (const item of items) {
    const itemPath = join(folderPath, item)
    const stats = statSync(itemPath)
    if (stats.isDirectory()) {
      // Recurse into subdirectory
      files.push(...lsFiles(itemPath))
    }
    else if (stats.isFile()) {
      files.push(itemPath)
    }
  }
  return files
}

function removeFirstFourLines(folderPath: string) {
  const items = readdirSync(folderPath)

  for (const item of items) {
    const itemPath = join(folderPath, item)
    const stats = statSync(itemPath)

    if (stats.isDirectory()) {
      // Recurse into subdirectory
      removeFirstFourLines(itemPath)
    }
    else if (stats.isFile()) {
      const lines = readFileSync(itemPath, 'utf-8').split('\n')
      if (lines.length > 4) {
        writeFileSync(itemPath, lines.slice(4).join('\n'))
      }
      else {
        console.warn(`File ${itemPath} has less than 4 lines, skipping.`)
      }
    }
  }
}

function getDisplayName(categoryName: string): string {
  return categoryNames[categoryName] || categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
}

function collectFilesRecursively(dirPath: string, basePath: string): ReferenceItem[] {
  const files: ReferenceItem[] = []
  const items = readdirSync(dirPath)

  for (const item of items) {
    const itemPath = join(dirPath, item)
    const stats = statSync(itemPath)

    if (stats.isDirectory()) {
      files.push(...collectFilesRecursively(itemPath, basePath))
    }
    else if (item.endsWith('.md') && item !== 'index.md' && item !== 'README.md') {
      const relativePath = itemPath.replace(`${basePath}/`, '').replace('.md', '')
      const name = item.replace('.md', '')

      files.push({
        text: name,
        link: `/web-client/reference/${relativePath.toLowerCase()}`,
      })
    }
  }

  return files
}

function generateReferenceCategories(referenceDir: string): ReferenceCategory[] {
  const categories: ReferenceCategory[] = []
  const items = readdirSync(referenceDir)

  for (const item of items) {
    const itemPath = join(referenceDir, item)
    const stats = statSync(itemPath)

    if (!stats.isDirectory() || item.startsWith('.')) {
      continue
    }

    let categoryFiles: ReferenceItem[] = []

    if (item.startsWith('@')) {
      categoryFiles = collectFilesRecursively(itemPath, referenceDir)
    }
    else {
      categoryFiles = readdirSync(itemPath)
        .filter(file => file.endsWith('.md') && file !== 'index.md' && file !== 'README.md')
        .map((file) => {
          const name = file.replace('.md', '')
          return {
            text: name,
            link: `/web-client/reference/${item}/${name.toLowerCase()}`,
          }
        })
    }

    categoryFiles.sort((a, b) => a.text.localeCompare(b.text))

    if (categoryFiles.length > 0) {
      categories.push({
        text: getDisplayName(item),
        icon: categoryIcons[item] || 'i-tabler:file',
        items: categoryFiles,
      })
    }
  }

  return categories
}

function writeWebClientReferenceData(referenceDir: string) {
  const categories = generateReferenceCategories(referenceDir)
  const dataFile = join(__dirname, '../data/web-client-reference.ts')
  const hasOverview = existsSync(join(referenceDir, 'index.md')) || existsSync(join(referenceDir, 'README.md'))
  const hasGlobals = existsSync(join(referenceDir, 'globals.md'))

  const items: Array<ReferenceCategory | { text: string, link: string, icon: string }> = []

  if (hasOverview) {
    items.push({ text: 'Overview', link: '/web-client/reference/', icon: 'i-tabler:layout-grid' })
  }

  items.push(...categories)

  if (hasGlobals) {
    items.push({ text: 'Globals', link: '/web-client/reference/globals', icon: 'i-tabler:world' })
  }

  writeFileSync(
    dataFile,
    `export default ${JSON.stringify(
      {
        apiReferenceSection: {
          label: 'API Reference',
          items,
        },
        categories,
      },
      null,
      2,
    )} as const\n`,
  )
}

generateWebClientDocs().catch((error) => {
  console.error(error)
  throw error
})
