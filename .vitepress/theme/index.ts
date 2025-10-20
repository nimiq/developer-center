import { createHead } from '@unhead/vue/client'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme/theme'
import { createApp } from 'vue'
import FeedbackWidget from './components/FeedbackWidget.vue'
import HeaderNavFeedback from './components/HeaderNavFeedback.vue'
import 'virtual:uno.css'
import './main.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'

// TODO zoom image

export default defineNimiqThemeConfig({
  Layout() {
    return {
      'header-nav-before-modules': HeaderNavFeedback,
    }
  },
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)

    if (typeof window !== 'undefined') {
      const container = document.createElement('div')
      document.body.appendChild(container)
      createApp(FeedbackWidget).mount(container)
    }
  },
})
