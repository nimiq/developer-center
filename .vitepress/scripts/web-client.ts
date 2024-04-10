import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { consola } from 'consola'

export async function generateWebClientDocs() {
  // Read installed package version of @nimiq/core-web
  const packageVersion = JSON.parse(readFileSync(join(__dirname, '../../node_modules/@nimiq/core-web/package.json'), 'utf-8')).version as string

  // Read package version of generated docs, if already built
  const versionFile = join(__dirname, '../../build/web-client/.version')
  if (existsSync(versionFile)) {
    const generatedVersion = readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      consola.info(`Web-Client docs ${packageVersion} already generated`)
      return
    }
  }

  // Rebuild docs

  consola.info(`Generating Web-Client docs ${packageVersion} ...`)
  execSync('pnpm run build:web-client', { stdio: 'inherit' })

  // Update entry file with frontmatter to disable the "next" footer button
  const entryFile = join(__dirname, '../../build/web-client/index.md')
  consola.info(`Web-Client docs entry file: ${entryFile}`)

  let entryFileContent = readFileSync(entryFile, 'utf-8')
  entryFileContent = `---\ndocFooter: false\n---\n${entryFileContent}`
  writeFileSync(entryFile, entryFileContent)

  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)
}
