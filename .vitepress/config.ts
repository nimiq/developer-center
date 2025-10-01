import { copyFileSync, mkdirSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { env } from 'node:process'
import consola from 'consola'
import { defineNimiqVitepressConfig } from 'nimiq-vitepress-theme'
import { readPackageJSON } from 'pkg-types'
import { themeConfig } from './theme.config.js'

// https://vitepress.dev/reference/site-config
export default async () => {
  const { title, description, homepage } = await readPackageJSON()
  const basesUrl: Record<string, string> = {
    production: '/developers',
    development: '/developer-center',
    staging: '/',
  }
  const base = basesUrl[env.DEPLOYMENT_MODE!] || ''
  consola.info(`Building for ${env.DEPLOYMENT_MODE}. The base URL is ${base}`)

  const faviconUrl = `${base}${base.endsWith('/') ? '' : '/'}favicons`

  return defineNimiqVitepressConfig({
    base,
    title,
    srcExclude: ['**/README.md', '**/CLAUDE.md'],
    description,
    lastUpdated: true,
    cleanUrls: true,

    themeConfig,

    vite: {
      configFile: '.vitepress/vite.config.ts',
    },

    markdown: {
      math: true, // Allow latex math
    },

    buildEnd(siteConfig) {
      const srcDir = siteConfig.srcDir
      const outDir = siteConfig.outDir

      function copyMarkdownFiles(dir: string) {
        const entries = readdirSync(dir, { withFileTypes: true })

        for (const entry of entries) {
          const fullPath = join(dir, entry.name)

          if (entry.isDirectory()) {
            copyMarkdownFiles(fullPath)
          }
          else if (entry.isFile() && entry.name.endsWith('.md')) {
            const relativePath = relative(srcDir, fullPath)
            const destPath = join(outDir, relativePath)
            const destDir = join(destPath, '..')

            mkdirSync(destDir, { recursive: true })
            copyFileSync(fullPath, destPath)
          }
        }
      }

      consola.info('Copying markdown files to build output...')
      copyMarkdownFiles(srcDir)
      consola.success('Markdown files copied successfully')
    },

    head: [
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${faviconUrl}/apple-touch-icon.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${faviconUrl}/favicon-32x32.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${faviconUrl}/favicon-16x16.png` }],
      // ['link', { rel: 'manifest', href: `${faviconUrl}/site.webmanifest` }],
      ['link', { rel: 'mask-icon', href: `${faviconUrl}/safari-pinned-tab.svg`, color: '#eaaf0c' }],
      ['link', { rel: 'shortcut icon', href: `${faviconUrl}/favicon.ico` }],
      ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: homepage }],
      ['meta', { property: 'og:image', content: `${base}og-image.png` }],
      ['meta', { property: 'og:site_name', content: title }],
      ['meta', { property: 'og:determiner', content: 'the' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],
      ['meta', { property: 'og:type', content: 'website' }],

      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@nimiq' }],
      ['meta', { name: 'twitter:creator', content: '@nimiq' }],
      ['meta', { name: 'twitter:title', content: title }],
    ],

    sitemap: {
      hostname: 'https://nimiq.com/developers',
    },

  })
}
