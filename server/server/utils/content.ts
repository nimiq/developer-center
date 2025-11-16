interface MarkdownNode {
  tag?: string
  children?: MarkdownNode[]
  value?: string
}

interface MarkdownBody {
  children?: MarkdownNode[]
}

export function extractH1FromBody(body: MarkdownBody | undefined): string {
  if (!body?.children)
    return 'Untitled'
  const h1 = body.children.find(n => n.tag === 'h1')
  return h1?.children?.[0]?.value || 'Untitled'
}

export function extractFirstParagraph(body: MarkdownBody | undefined): string | undefined {
  if (!body?.children)
    return undefined
  const p = body.children.find(n => n.tag === 'p')
  return p?.children?.[0]?.value
}
