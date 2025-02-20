import { getSvg, getSvgSymbol, SvgToJSX, SvgToTSX, SvgToVue } from './icon'

export async function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  a.remove()
}

export async function LoadIconSvgs(icons: string[]) {
  return await Promise.all(
    icons
      .filter(Boolean)
      .sort()
      .map(async (name) => {
        return {
          name,
          svg: await getSvg(name),
        }
      }),
  )
}

export async function downloadSVGSprite(icons: string[], options: any = {}) {
  if (!icons.length)
    return
  const data = await LoadIconSvgs(icons)

  let symbols = ''
  for (const { name } of data)
    symbols += `${await getSvgSymbol(name, options.size, options.color)}\n`

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
${symbols}
</defs>
</svg>`

  const blob = new Blob([svg], { type: 'image/svg+xml' })
  downloadBlob(blob, 'sprite.svg')
}

export async function downloadIconFont(icons: string[]) {
  if (!icons.length)
    return
  const data = await LoadIconSvgs(icons)

  // @ts-expect-error - SvgPacker is not typed
  const result = await window.SvgPacker({
    fontName: 'Nimiq Icons',
    fileName: 'nimiq-icons',
    cssPrefix: 'i',
    icons: data,
  })

  downloadBlob(result.zip.blob, result.zip.name)
}

export type PackType = 'svg' | 'tsx' | 'jsx' | 'vue' | 'json'

export async function downloadZip(
  icons: string[],
  name: string,
  type: PackType = 'svg',
) {
  if (!icons.length)
    return
  const data = await LoadIconSvgs(icons)

  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()

  const zipActions: Record<PackType, (name: string, svg: string) => void | (() => void)> = {
    vue(name: string, svg: string) {
      zip.file(`${name}.vue`, SvgToVue(svg, name))
    },
    jsx(name: string, svg: string) {
      zip.file(`${name}.jsx`, SvgToJSX(svg, name, false))
    },
    tsx(name: string, svg: string) {
      zip.file(`${name}.tsx`, SvgToTSX(svg, name, false))
    },
    svg(name: string, svg: string) {
      zip.file(`${name}.svg`, svg)
    },
    json() {
      zip.file(`${name}.json`, JSON.stringify(data, null, 2))
    },
  }

  const action = zipActions[type]
  if (type === 'json') {
    (action as () => void)()
  }
  else {
    for (const { name, svg } of data)
      action(name.replace(':', '-'), svg)
  }
  const blob = await zip.generateAsync({ type: 'blob' })
  downloadBlob(blob, `${name}-${type}.zip`)
}

export function dataUriToBlob(dataUri: string) {
  const byteString = atob(dataUri.split(',')[1])
  const mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0]
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++)
    ia[i] = byteString.charCodeAt(i)

  return new Blob([ab], { type: mimeString })
}
