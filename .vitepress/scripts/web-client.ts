import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { consola } from 'consola'
import { readPackageJSON } from 'pkg-types'

export async function generateWebClientDocs() {
  const packageVersion = await readPackageJSON(join(__dirname, '../../node_modules/@nimiq/core-web')).then(pkg => pkg.version)

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
  execSync('pnpm run build:web-client && echo "Done"', { stdio: 'inherit' })
  consola.log('done 2')

  // Update entry file with frontmatter to disable the "next" footer button
  const entryFile = join(__dirname, '../../build/web-client/index.md')
  let entryFileContent = readFileSync(entryFile, 'utf-8')
  entryFileContent = `---\ndocFooter: false\n---\n${entryFileContent}`
  writeFileSync(entryFile, entryFileContent)

  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)
}
