// Remark plugin: extracts title from first h1 and sets it as frontmatter,
// then removes the h1 from the AST to avoid duplication with Docus's UPageHeader.
// Description comes from frontmatter only — the first paragraph stays in the body.
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
