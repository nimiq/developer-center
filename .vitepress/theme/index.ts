import { createHead } from '@unhead/vue/client'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme/theme'
import 'virtual:uno.css'
import './main.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'

export default defineNimiqThemeConfig({
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)
  },
})
