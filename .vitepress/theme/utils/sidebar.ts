import fs from 'node:fs'
import path from 'node:path'

// @unocss-include

export function SidebarSectionHeader({ icon, text, prefix }: { icon: string, text: string, prefix?: string }) {
  const large = !prefix
  return `
    ${prefix ? `<div text="14 darkblue/50 dark:white/50" pt-20>${prefix}</div>` : ''}
    <div mt-8 flex gap-x-8 mb-24 items-center>
      <div ${large ? 'w-24 h-24' : 'w-20 h-20'} i-nimiq:${icon}></div>
      <span text="${large ? '24' : '20'} darkblue-80 dark:white/80">${text}</span>
    </div>
  `
}

export function getItem({ text, link, icon }: { text: string, link: string, icon?: string }) {
  return {
    text: `<div flex items-center gap-x-8 mb-4>${icon ? `<div ${icon} h-16 w-16 text-white></div>` : ''} ${text}</div>`,
    link
  }
}

export const Label = (text: string) => `<span class="label">${text}</span>`


export function Accordion({ path, label, collapsed = true, order = [] }: { path: string, label?: string, collapsed?: boolean, order?: string[] }) {
  const text = Label(label || path.split('/').at(-1) || path).replace(/-/g, ' ')
  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
  return {
    text: capitalize(text),
    items: getFilesItemsFromFolder(path, order),
    collapsed
  }
}

const IGNORED_FILES = ['learn/other/OASIS.md', 'learn/protocol/blocks/block-format.md']

/**
 * Retrieves file items from a specified folder, ordered by a given order.
 *
 * @param folder The folder from which to retrieve file items.
 * @param order The order in which to arrange the retrieved file items.
 * @returns An array of file items from the specified folder, ordered by the given order.
 */
export function getFilesItemsFromFolder(folder: string, order: string[] = []) {
  const files = fs.readdirSync(path.join(__dirname, `../../../${folder}`))
  const notIgnoredFiles = files.filter(file => !IGNORED_FILES.includes(`${folder}/${file}`))
  const orderedFiles = order.map(file => file.includes('.') ? file : `${file}.md`)
  const unorderedFiles = notIgnoredFiles.filter(file => !orderedFiles.includes(file))
  const items = [...orderedFiles, ...unorderedFiles].map(file => {
    const fileName = path.basename(file, path.extname(file));
    const text = fileName.replace(/-/g, ' ');
    return {
      text: text.charAt(0).toUpperCase() + text.slice(1),
      link: `/${folder}/${fileName}` // Use the original filename for the link
    }
  })
  return items
}
