import fs from 'node:fs'
import path from 'node:path'
import { IGNORED_FILES } from '../../config'
import micromatch from 'micromatch'

// @unocss-include

/**
 * Generates a section header for the sidebar.
 *
 * @param {object} params - The parameters for the section header.
 * @param {string} params.icon - The icon for the section header.
 * @param {string} params.text - The text for the section header.
 * @param {string} [params.prefix] - The prefix for the section header.
 * @returns {string} The HTML string for the section header.
 */
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
    text: icon
      ? `<div flex items-center gap-x-8 mb-4>${icon ? `<div ${icon} h-16 w-16 text-white></div>` : ''} ${text}</div>`
      : text,
    link
  }
}


// Wraps a text with a label class.
export const Label = (text: string) => `<span class="label">${text}</span>`


/**
 * Creates an accordion for the sidebar.
 *
 * @param {object} params - The parameters for the accordion.
 * @param {string} params.path - The path for the accordion.
 * @param {string} [params.label] - The label for the accordion.
 * @param {boolean} [params.collapsed=true] - Whether the accordion is collapsed by default.
 * @param {string[]} [params.order=[]] - The order of the items in the accordion.
 * @returns {object} The accordion with its text, items, and collapsed state.
 */
export function Accordion({ path, label, collapsed = true, order = [] }: { path: string, label?: string, collapsed?: boolean, order?: string[] }) {
  const text = Label(label || path.split('/').at(-1) || path).replace(/-/g, ' ')
  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
  return {
    text: capitalize(text),
    items: getFilesItemsFromFolder(path, { order }),
    collapsed
  }
}

interface GetFilesItemsFromFolder {
  // The order in which to arrange the retrieved file items.
  order?: string[]

  // The files to show. If not specified, all files are shown. If specified, only the specified files are shown
  // and the order option is not used, the order of the files is the order in which they are specified.
  include?: string[]

}

/**
 * Retrieves file items from a specified folder, ordered by a given order.
 *
 * @param {string} folder - The folder from which to retrieve file items.
 * @param {object} params - The parameters for the file items.
 * @returns {object[]} An array of file items from the specified folder, ordered by the given order.
 */
export function getFilesItemsFromFolder(folder: string, { order, include }: GetFilesItemsFromFolder = {}) {
  const basePath = path.join(__dirname, `../../../${folder}`)

  // Get all files in the folder. Exclude ignored files, directories, and non-markdown files.
  let files = fs.readdirSync(basePath)
    .filter(file => !micromatch.isMatch(path.join(basePath, file), IGNORED_FILES)) // Exclude ignored files
    .filter(file => !fs.lstatSync(path.join(basePath, file)).isDirectory()) // Exclude directories
    .filter(file => path.extname(file) === '.md') // Exclude non-markdown files
    .map(file => {
      const filePath = path.basename(file, path.extname(file));
      const text = filePath.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()); // Capitalize file name
      const link = `/${folder}/${file}`;
      return { file, filePath, text, link };
    })
    .filter(({ file }) => !include || include.some(includeFile => file.startsWith(includeFile)))
    
  // Sort files by order
  const sortBy = order && order.length > 0 ? order : (include || [])
  files.sort(({filePath: fileA}, {filePath: fileB}) => sortBy.indexOf(fileA) - sortBy.indexOf(fileB)); // Sort by order
  return files
}
