// Remark plugin: extracts title from first h1 and description from first paragraph,
// sets them as frontmatter, then removes both from the AST to avoid duplication with
// Docus's UPageHeader.
export default function remarkExtractTitle() {
  return (tree, file) => {
    const children = tree.children
    const h1Idx = children.findIndex(n => n.type === 'heading' && n.depth === 1)
    if (h1Idx === -1)
      return

    // Extract title text from h1
    const h1 = children[h1Idx]
    const title = extractText(h1)

    // Set title in frontmatter data (only if not already set)
    if (file.data && title) {
      if (!file.data.title)
        file.data.title = title
      // Also try the vfile.data.matter route used by some parsers
      if (!file.data.matter)
        file.data.matter = {}
      if (!file.data.matter.title)
        file.data.matter.title = title
    }

    // Remove h1
    children.splice(h1Idx, 1)

    // Extract and remove first paragraph after h1 position (description)
    const pIdx = children.findIndex((n, i) => i >= h1Idx && n.type === 'paragraph')
    if (pIdx !== -1) {
      const description = extractText(children[pIdx])
      if (file.data && description) {
        if (!file.data.description)
          file.data.description = description
        if (file.data.matter && !file.data.matter.description)
          file.data.matter.description = description
      }
      children.splice(pIdx, 1)
    }
  }
}

function extractText(node) {
  if (!node)
    return ''
  if (node.type === 'text')
    return node.value || ''
  if (node.children)
    return node.children.map(extractText).join('')
  return ''
}
