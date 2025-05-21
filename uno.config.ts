import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { presetNimiq } from 'nimiq-css/unocss'
import { defineConfig, presetIcons } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  content: {
    filesystem: [
      '.vitepress/config.ts',
      '**/**.md',
      '.vitepress/theme/components/**/*.vue',
      '.vitepress/theme.config.ts',
      '.vitepress/rpc/utils.ts',
    ],
  },

  presets: [
    presetOnmax(),
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
    }),
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/tabler'),
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        ...createExternalPackageIconLoader('@iconify-json/nimiq'),
      },
    }),
  ],
  // rules: [
  //   [/^rounded-([.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  // ],

  shortcuts: [
    { columns: 'flex gap-32 flex-wrap children:flex-1' },
  ],
})
