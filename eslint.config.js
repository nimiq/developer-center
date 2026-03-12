import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  typescript: true,
  vue: true,
  ignores: ['.nuxt/', '.output/', '.pnpm-patch-docus/', '.wrangler/', '*.woff2', 'content/web-client/reference/'],
}, {
  files: ['**/*.md'],
  rules: {
    'no-irregular-whitespace': 'off',
  },
}, {
  rules: {
    'vue/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
  },
}))
