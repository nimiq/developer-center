export const LANGUAGE_LABELS: Record<string, string> = {
  rust: 'Rust',
  rs: 'Rust',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  tsx: 'TSX',
  js: 'JavaScript',
  javascript: 'JavaScript',
  jsx: 'JSX',
  mjs: 'JavaScript',
  cjs: 'JavaScript',
  py: 'Python',
  python: 'Python',
  vue: 'Vue',
  svelte: 'Svelte',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  toml: 'TOML',
  md: 'Markdown',
  markdown: 'Markdown',
  bash: 'Shell',
  sh: 'Shell',
  shell: 'Shell',
  zsh: 'Shell',
  curl: 'curl',
  diff: 'Diff',
}

export const LANGUAGE_ICONS: Record<string, string> = {
  rust: 'i-vscode-icons-file-type-rust',
  rs: 'i-vscode-icons-file-type-rust',
  ts: 'i-vscode-icons-file-type-typescript',
  typescript: 'i-vscode-icons-file-type-typescript',
  tsx: 'i-vscode-icons-file-type-typescript',
  js: 'i-vscode-icons-file-type-js',
  javascript: 'i-vscode-icons-file-type-js',
  jsx: 'i-vscode-icons-file-type-js',
  mjs: 'i-vscode-icons-file-type-js',
  cjs: 'i-vscode-icons-file-type-js',
  py: 'i-vscode-icons-file-type-python',
  python: 'i-vscode-icons-file-type-python',
  vue: 'i-vscode-icons-file-type-vue',
  svelte: 'i-vscode-icons-file-type-svelte',
  html: 'i-vscode-icons-file-type-html',
  css: 'i-vscode-icons-file-type-css',
  scss: 'i-vscode-icons-file-type-scss',
  json: 'i-vscode-icons-file-type-json',
  yaml: 'i-vscode-icons-file-type-yaml',
  yml: 'i-vscode-icons-file-type-yaml',
  toml: 'i-vscode-icons-file-type-light-toml',
  md: 'i-vscode-icons-file-type-markdown',
  markdown: 'i-vscode-icons-file-type-markdown',
  bash: 'i-lucide-terminal',
  sh: 'i-lucide-terminal',
  shell: 'i-lucide-terminal',
  zsh: 'i-lucide-terminal',
  curl: 'i-lucide-terminal',
}

const PLAINTEXT = new Set(['', 'text', 'plaintext', 'txt', 'plain'])

export function isPlaintextLanguage(language?: string): boolean {
  return PLAINTEXT.has((language ?? '').toLowerCase())
}

export function languageLabel(language?: string): string | undefined {
  if (isPlaintextLanguage(language))
    return undefined
  const key = language!.toLowerCase()
  return LANGUAGE_LABELS[key] ?? language
}

export function languageIcon(language?: string): string | undefined {
  if (isPlaintextLanguage(language))
    return undefined
  return LANGUAGE_ICONS[language!.toLowerCase()]
}

/**
 * Maps a `[Label]` string to a language icon when the label matches a known
 * language name (e.g. `[TypeScript]`, `[Python]`, `[curl]`). Returns undefined
 * for actual filenames so the framework's filename/extension lookup wins.
 */
export function labelLanguageIcon(label?: string): string | undefined {
  if (!label || label.includes('.'))
    return undefined
  return LANGUAGE_ICONS[label.toLowerCase()]
}
