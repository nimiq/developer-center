import { getIcon } from '@iconify/vue'
import { buildIcon } from 'iconify-icon'
import type { BuiltInParserName } from 'prettier'

const API_ENTRY = 'https://api.iconify.design'

/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-expect-error ignore
const Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

function transformToReactJSX(jsx: string) {
  const reactJSX = jsx.replace(/(class|(\w+:\w+))=/g, (i) => {
    if (i === 'class=')
      return 'className='
    return i.split(':')
      .map((i, idx) => idx === 0
        ? i.toLowerCase()
        : i[0].toUpperCase() + i.slice(1).toLowerCase())
      .join('')
  })
  return reactJSX
}

export function HtmlToJSX(html: string, reactJSX = false) {
  const jsx = html.replace(/([\w-]+)=/g, (i) => {
    const words = i.split('-')
    if (words.length === 1 || words[0] === 'stroke')
      return i
    return words
      .map((i, idx) => idx === 0
        ? i.toLowerCase()
        : i[0].toUpperCase() + i.slice(1).toLowerCase())
      .join('')
  })
  return reactJSX ? transformToReactJSX(jsx) : jsx
}
const unsupportedPrettier = ['Vue', 'Vue TS', 'React TS', 'Qwik', 'Solid', 'Svelte', 'Astro']
export async function prettierCode(code: string, parser: BuiltInParserName) {
  if (unsupportedPrettier.includes(parser))
    return code
  return await import('prettier').then(r => r.format(code, { parser, semi: false, singleQuote: true })).catch(() => code)
}

export function getSvgLocal(icon: string, size = '1em', color = 'currentColor') {
  const data = getIcon(icon)
  if (!data)
    return
  const built = buildIcon(data, { height: size })
  if (!built)
    return
  const xlink = built.body.includes('xlink:') ? ' xmlns:xlink="http://www.w3.org/1999/xlink"' : ''
  // @ts-ignore
  return `<svg xmlns="http://www.w3.org/2000/svg"${xlink} ${Object.entries(built.attributes).map(([k, v]) => `${k}="${v}"`).join(' ')}>${built.body}</svg>`.replaceAll('currentColor', color)
}

export async function getSvg(icon: string, size = '1em', color = 'currentColor') {
  return getSvgLocal(icon, size, color)
    || await fetch(`${API_ENTRY}/${icon}.svg?inline=false&height=${size}&color=${encodeURIComponent(color)}`).then(r => r.text()) || ''
}

export async function getSvgSymbol(icon: string, size = '1em', color = 'currentColor') {
  const svgMarkup = await getSvg(icon, size, color)

  const symbolElem = document.createElementNS('http://www.w3.org/2000/svg', 'symbol')
  const node = document.createElement('div') // Create any old element
  node.innerHTML = svgMarkup

  // Grab the inner HTML and move into a symbol element
  symbolElem.innerHTML = node.querySelector('svg')!.innerHTML
  symbolElem.setAttribute('viewBox', node.querySelector('svg')!.getAttribute('viewBox')!)
  symbolElem.id = icon.replace(/\:/, '-') // Simple slugify for quick symbol lookup

  return symbolElem?.outerHTML
}

export function toComponentName(icon: string) {
  return icon.split(/:|-|_/).filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('')
}

export function ClearSvg(svgCode: string, reactJSX?: boolean) {
  const el = document.createElement('div')
  el.innerHTML = svgCode
  const svg = el.getElementsByTagName('svg')[0]
  const keep = ['viewBox', 'width', 'height', 'focusable', 'xmlns', 'xlink']
  for (const key of Object.values(svg.attributes)) {
    if (keep.includes(key.localName))
      continue
    svg.removeAttributeNode(key)
  }
  return HtmlToJSX(el.innerHTML, reactJSX)
}

export function SvgToJSX(svg: string, name: string, snippet: boolean) {
  const code = `
export function ${name}(props) {
  return (
    ${ClearSvg(svg, true).replace(/<svg (.*?)>/, '<svg $1 {...props}>')}
  )
}`
  if (snippet)
    return prettierCode(code, 'babel-ts')
  else
    return prettierCode(`import React from 'react'\n${code}\nexport default ${name}`, 'babel-ts')
}

export function SvgToTSX(svg: string, name: string, snippet: boolean, reactJSX = true) {
  let code = `
export function ${name}(props: SVGProps<SVGSVGElement>) {
  return (
    ${ClearSvg(svg, reactJSX).replace(/<svg (.*?)>/, '<svg $1 {...props}>')}
  )
}`

  code = snippet ? code : `import React, { SVGProps } from 'react'\n${code}\nexport default ${name}`
  return prettierCode(code, 'babel-ts')
}

export function SvgToQwik(svg: string, name: string, snippet: boolean) {
  let code = `
export function ${name}(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    ${ClearSvg(svg, false).replace(/<svg (.*?)>/, '<svg $1 {...props} key={key}>')}
  )
}`

  code = snippet ? code : `import type { QwikIntrinsicElements } from '@builder.io/qwik'\n${code}\nexport default ${name}`
  return prettierCode(code, 'babel-ts')
}

export function SvgToVue(svg: string, name: string, isTs?: boolean) {
  const content = `
<template>
  ${ClearSvg(svg)}
</template>

<script>
export default {
  name: '${name}'
}
</script>`
  const code = isTs ? content.replace('<script>', '<script lang="ts">') : content
  return prettierCode(code, 'vue')
}

export function SvgToSolid(svg: string, name: string, snippet: boolean) {
  let code = `
export function ${name}(props: JSX.IntrinsicElements['svg'], key: string) {
  return (
    ${ClearSvg(svg, false).replace(/<svg (.*?)>/, '<svg $1 {...props} key={key}>')}
  )
}`

  code = snippet ? code : `import type { JSX } from 'solid-js'\n${code}\nexport default ${name}`
  return prettierCode(code, 'babel-ts')
}

export function SvgToSvelte(svg: string) {
  return `${svg.replace(/<svg (.*?)>/, '<svg $1 {...$$$props}>')}`
}

export function SvgToAstro(svg: string) {
  return `
---
const props = Astro.props 
---

${svg.replace(/<svg (.*?)>/, '<svg $1 {...props}>')}
`
}

export async function getIconSnippet(icon: string, type: string, snippet = true, color = 'currentColor'): Promise<string | undefined> {
  if (!icon)
    return

  let url = `${API_ENTRY}/${icon}.svg`
  if (color !== 'currentColor')
    url = `${url}?color=${encodeURIComponent(color)}`

  switch (type) {
    // Snippet
    case 'SVG':
      return await getSvg(icon, '32', color)
    case 'SVG Symbol':
      return await getSvgSymbol(icon, '32', color)
    case 'Iconify':
      return `<span class="iconify" data-icon="${icon}" data-inline="false"${color === 'currentColor' ? '' : ` style="color: ${color}"`}></span>`
    case 'JSX':
      return SvgToJSX(await getSvg(icon, undefined, color), toComponentName(icon), snippet)

      // Links
    case 'URL':
      return url
    case 'Data URL':
      return `data:image/svg+xml;base64,${Base64.encode(await getSvg(icon, undefined, color))}`


    // Components
    case 'Vue':
      return SvgToVue(await getSvg(icon, undefined, color), toComponentName(icon))
    case 'Vue TS':
      return SvgToVue(await getSvg(icon, undefined, color), toComponentName(icon), true)
    case 'React':
      return SvgToJSX(await getSvg(icon, undefined, color), toComponentName(icon), snippet)
    case 'tsx':
    case 'React TS':
      return SvgToTSX(await getSvg(icon, undefined, color), toComponentName(icon), snippet)
    case 'css':
      return `background: url('${url}') no-repeat center center / contain;`
    case 'Qwik':
      return SvgToQwik(await getSvg(icon, undefined, color), toComponentName(icon), snippet)
    case 'Solid':
      return SvgToSolid(await getSvg(icon, undefined, color), toComponentName(icon), snippet)
    case 'Svelte':
      return SvgToSvelte(await getSvg(icon, undefined, color))
    case 'Astro':
      return SvgToAstro(await getSvg(icon, undefined, color))
    case 'Unplugin Icons':
      return `import ${toComponentName(icon)} from '~icons/${icon.split(':')[0]}/${icon.split(':')[1]}'`
  }
}

export function getIconDownloadLink(icon: string) {
  return `${API_ENTRY}/${icon}.svg?download=true&inline=false&height=auto`
}
