import { execSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { consola } from 'consola'
import { readPackageJSON } from 'pkg-types'

export async function generateWebClientDocs() {
  consola.info('Generating Web-Client docs...')
  const packageVersion = await readPackageJSON(join(__dirname, '../../node_modules/@nimiq/core')).then(pkg => pkg.version)
  const webClientFolder = join(__dirname, '../../build/web-client')
  // Read package version of generated docs, if already built
  const versionFile = join(webClientFolder, '.version')
  if (existsSync(versionFile)) {
    consola.info(`Web-Client docs ${packageVersion} already generated`)
    const generatedVersion = readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      consola.info(`Web-Client docs ${packageVersion} already generated`)
      return
    }
  }

  // Rebuild docs. They are built in the folder `web-client/tmp` and then we selectively copy them to `web-client`
  consola.info(`Generating Web-Client docs ${packageVersion}...`)
  execSync('pnpm run build:web-client', { stdio: 'inherit' })

  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)

  // Remove the first four lines of all files in the generated docs folder
  removeFirstFourLines(join(webClientFolder, 'reference'))
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
        consola.warn(`File ${itemPath} has less than 4 lines, skipping.`)
      }
    }
  }
}
