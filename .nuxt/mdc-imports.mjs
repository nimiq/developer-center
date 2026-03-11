import _RemarkEmoji from 'remark-emoji'
import _RemarkMdc from 'remark-mdc'
import _RemarkMath from 'remark-math'
import _RehypeKatex from 'rehype-katex'
import _Highlight from '/Users/maxi/nimiq/developer-center/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-mdc': { instance: _RemarkMdc, options: {"autoUnwrap":true} },
  'remark-math': { instance: _RemarkMath },
}

export const rehypePlugins = {
  'rehype-katex': { instance: _RehypeKatex },
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}