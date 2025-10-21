import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetNimiq } from 'nimiq-css/unocss'
import { defineConfig, presetIcons, presetWebFonts } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  content: {
    filesystem: [
      '.vitepress/config.ts',
      '**/**.md',
      '.vitepress/theme/components/**/*.vue',
      '.vitepress/theme.config.ts',
      '.vitepress/rpc/utils.ts',
      '.vitepress/data/nimiq-utils.data.ts',
      '.vitepress/data/web-client-reference.data.ts',
      'node_modules/nimiq-vitepress-theme/dist/**/*.mjs',
    ],
  },

  safelist: [
    'i-local:openai',
    'i-local:claude',
  ],

  presets: [
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
      fonts: false, // Disable fonts in preset, we configure them separately with longer timeout
    }),
    presetOnmax(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Mulish:400,600,700',
        mono: 'Fira Code:400',
      },
      timeouts: {
        warning: 5000, // 5 seconds before warning
        failure: 30000, // 30 seconds before failing
      },
    }),
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/tabler'),
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        ...createExternalPackageIconLoader('@iconify-json/vscode-icons'),
        ...createExternalPackageIconLoader('@iconify-json/carbon'),
        local: FileSystemIconLoader('./public/assets/icons'),
      },
    }),
  ],

  shortcuts: [
    { columns: 'flex gap-32 flex-wrap children:flex-1' },
  ],

})
