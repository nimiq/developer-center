import type { Plugin } from 'vite'
import { execSync } from 'node:child_process'
import { cpSync, existsSync } from 'node:fs'
import process from 'node:process'
import { consola } from 'consola'
import { resolve } from 'pathe'

export function NitroBuildPlugin(): Plugin {
  let isBuilding = false

  return {
    name: 'nitro-build',
    apply: 'build',
    closeBundle() {
      if (isBuilding)
        return
      isBuilding = true

      try {
        consola.info('[Nitro] Building server...')

        // Build Nitro with cloudflare_pages preset
        execSync('NITRO_PRESET=cloudflare_pages pnpm exec nitro build --config .vitepress/nitro.config.ts', {
          stdio: 'inherit',
        })

        // Copy worker and routes from dist to .vitepress/dist
        const nitroDistDir = resolve(process.cwd(), 'dist')
        const distDir = resolve(process.cwd(), '.vitepress/dist')

        const workerDirPath = resolve(nitroDistDir, '_worker.js')
        const workerFilePath = resolve(workerDirPath, 'index.js')
        const routesPath = resolve(nitroDistDir, '_routes.json')

        // Cloudflare Pages expects _worker.js as a single file, not a directory
        if (existsSync(workerFilePath)) {
          cpSync(workerFilePath, resolve(distDir, '_worker.js'))
          consola.success('[Nitro] Copied _worker.js')
        }

        if (existsSync(routesPath)) {
          cpSync(routesPath, resolve(distDir, '_routes.json'))
          consola.success('[Nitro] Copied _routes.json')
        }

        consola.success('[Nitro] Server build complete')
      }
      catch (error) {
        consola.error('[Nitro] Build failed:', error)
        throw error
      }
    },
  }
}
