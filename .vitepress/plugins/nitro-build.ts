import type { Plugin } from 'vite'
import { execSync } from 'node:child_process'
import { consola } from 'consola'

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

        // Build Nitro
        execSync('pnpm exec nitro build --config .vitepress/nitro.config.ts', {
          stdio: 'inherit',
        })

        // Copy worker and routes to dist
        execSync('cp -r dist/_worker.js dist/_routes.json .vitepress/dist/', {
          stdio: 'inherit',
        })

        consola.success('[Nitro] Server build complete')
      }
      catch (error) {
        consola.error('[Nitro] Build failed:', error)
        throw error
      }
    },
  }
}
