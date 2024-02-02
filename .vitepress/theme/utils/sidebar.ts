import fs from 'node:fs'
import path from 'node:path'

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
      <div ${large ? 'w-24 h-24' : 'w-20 h-20'} class="${icon}"></div>
      <span text="${large ? '24' : '20'} darkblue-80 dark:white/80">${text}</span>
    </div>
  `
}

// Wraps a text with a label class.
export const Label = (text: string) => `<span class="label">${text}</span>`

/**
 * Creates an accordion for the sidebar.
 */
export function Accordion({ path }: { path: string, label?: string, collapsed?: boolean, sort?: string[] }) {
  const text = (path.split('/').at(-1) || path).replace(/-/g, ' ')
  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
  return {
    text: capitalize(text),
    items: getFilesItemsFromFolder(path),
    collapsed: true,
  }
}

/**
 * Retrieves file items from a specified folder, sorted by a given order.
 */
export function getFilesItemsFromFolder(folder: string) {
  const basePath = path.join(__dirname, `../../../${folder}`)

  // Get all files in the folder. Exclude ignored files, directories, and non-markdown files.
  const files = fs.readdirSync(basePath)
    .filter(file => !fs.lstatSync(path.join(basePath, file)).isDirectory()) // Exclude directories
    .filter(file => path.extname(file) === '.md') // Exclude non-markdown files
    .map((file) => {
      const filePath = path.basename(file, path.extname(file))
      const text = filePath.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()) // Capitalize file name
      const link = `/${folder}/${file}`
      return { file, filePath, text, link }
    })

  return files
}
