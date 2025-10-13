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
    async closeBundle() {
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

        // Cloudflare Pages expects _worker.js as a single file, not a directory
        if (existsSync(workerFilePath)) {
          cpSync(workerFilePath, resolve(distDir, '_worker.js'))
          consola.success('[Nitro] Copied _worker.js')
        }

        // Create simple routes file - only route /api/* to worker, rest to static
        const routesConfig = {
          version: 1,
          include: ['/api/*'],
          exclude: [],
        }
        const { writeFileSync } = await import('node:fs')
        writeFileSync(
          resolve(distDir, '_routes.json'),
          JSON.stringify(routesConfig, null, 2),
        )
        consola.success('[Nitro] Created _routes.json')

        consola.success('[Nitro] Server build complete')
      }
      catch (error) {
        consola.error('[Nitro] Build failed:', error)
        throw error
      }
    },
  }
}
