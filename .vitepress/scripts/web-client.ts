import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync} from 'node:fs'
import { rmdir, rename, readdir, mkdir} from 'node:fs/promises'
import { join } from 'node:path'
import { consola } from 'consola'
import { readPackageJSON } from 'pkg-types'

export async function generateWebClientDocs() {
  const packageVersion = await readPackageJSON(join(__dirname, '../../node_modules/@nimiq/core-web')).then(pkg => pkg.version)
  const webClientFolder = join(__dirname, '../../build/web-client')
  // Read package version of generated docs, if already built
  const versionFile = join(webClientFolder, '.version')
  if (existsSync(versionFile)) {
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
  const tmp = join(__dirname, 'tmp')
  consola.info(`Generated Web-Client docs at ${tmp}`)

   await moveDirectory(join(tmp, 'classes'), join(webClientFolder, 'classes'));
  await moveDirectory(join(tmp, 'enum'), join(webClientFolder, 'enum'));
  await moveDirectory(join(tmp, 'interfaces'), join(webClientFolder, 'interfaces'));
  await rename(join(tmp, 'modules.md'), join(webClientFolder, 'modules.md'));
  // execSync(`rm -rf ${tmp}`, { stdio: 'inherit' })


  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)
}


async function moveDirectory(source, destination) {
  try {
    await mkdir(destination, { recursive: true });
    const entries = await readdir(source, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = join(source, entry.name);
      const destPath = join(destination, entry.name);
      if (entry.isDirectory()) {
        await moveDirectory(srcPath, destPath);
      } else {
        await rename(srcPath, destPath);
      }
    }
    await rmdir(source);
  } catch (error) {
    consola.error(`Error moving directory from ${source} to ${destination}: ${error}`);
  }
}
