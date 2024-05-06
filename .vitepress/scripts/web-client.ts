import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { consola } from 'consola'
import { readPackageJSON } from 'pkg-types'

export async function generateWebClientDocs() {
  consola.info('Generating Web-Client docs...')
  const packageVersion = await readPackageJSON(join(__dirname, '../../node_modules/@nimiq/core-web')).then(pkg => pkg.version)
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
}
