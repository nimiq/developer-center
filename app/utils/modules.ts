export const DOC_MODULES = [
  { label: 'Web Client', icon: 'i-custom-nimiq-web-client', to: '/web-client/', segment: 'web-client' },
  { label: 'Hub', icon: 'i-custom-nimiq-hub', to: '/hub/', segment: 'hub' },
  { label: 'RPC', icon: 'i-custom-nimiq-rpc', to: '/rpc/', segment: 'rpc' },
  { label: 'Mini Apps', icon: 'i-custom-nimiq-tutorial', to: '/mini-apps/', segment: 'mini-apps' },
  { label: 'Nimiq Utils', icon: 'i-custom-nimiq-utils', to: '/nimiq-utils/', segment: 'nimiq-utils' },
  { label: 'AI', icon: 'i-lucide-bot', to: '/ai/', segment: 'ai' },
  { label: 'Nodes & Validators', icon: 'i-custom-nimiq-dev', to: '/nodes/', segment: 'nodes' },
  { label: 'Protocol', icon: 'i-custom-nimiq-albatross', to: '/protocol/', segment: 'protocol' },
  { label: 'Migration', icon: 'i-tabler-git-merge', to: '/migration/', segment: 'migration' },
] as const

export function isDocModulePath(path: string) {
  return DOC_MODULES.some(module => path === module.to.slice(0, -1) || path.startsWith(module.to))
}
