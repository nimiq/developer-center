// https://vitepress.dev/guide/custom-theme
import './layers.css'
import Theme from 'vitepress/theme'
import './style.css'
import 'uno.css'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { createHead } from '@unhead/vue'
import MainLayout from './MainLayout.vue'

function initZoom() {
  mediumZoom('.nq-prose img:not(:is(.not-zoomable,[not-zoomable]))', { background: 'rgb(var(--nq-neutral-0))' })
}

export default {
  extends: Theme,
  Layout: () => {
    return h(MainLayout)
  },
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)
  },
  setup() {
    const route = useRoute()
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}
