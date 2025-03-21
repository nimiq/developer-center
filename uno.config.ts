import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { presetNimiq } from 'nimiq-css/unocss'
import { defineConfig, presetIcons, presetWind3 } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'
import { presetScalePx } from 'unocss-preset-scale-px'

export default defineConfig({
  content: {
    filesystem: [
      '.vitepress/config.ts',
      '**/**.md',
      '.vitepress/theme/components/**/*.vue',
      '.vitepress/theme.config.ts',
    ],
  },

  presets: [
    presetWind3(),
    presetOnmax({ presets: { wind4: false } }),
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
    }),
    presetScalePx(),
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/tabler'),
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        ...createExternalPackageIconLoader('@iconify-json/nimiq'),
      },
    }),
  ],
  theme: {
    breakpoints: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      md2: '960px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  rules: [
    [/^rounded-([.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  ],

  shortcuts: [
    { columns: 'flex gap-32 flex-wrap children:flex-1' },
  ],
})
