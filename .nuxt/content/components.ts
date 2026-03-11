const pickExport = (mod, exportName, componentName, path) => {
  const resolved = exportName === 'default' ? mod?.default : mod?.[exportName]
  if (!resolved) {
    throw new Error(`[nuxt-content] Missing export "${exportName}" for component "${componentName}" in "${path}".`)
  }
  return resolved
}
export const localComponentLoaders = {
}
export const globalComponents: string[] = ["ProseA","ProseAccordion","ProseAccordionItem","ProseBadge","ProseBlockquote","ProseCallout","ProseCard","ProseCardGroup","ProseCode","ProseCodeCollapse","ProseCodeGroup","ProseCodeIcon","ProseCodePreview","ProseCodeTree","ProseCollapsible","ProseEm","ProseField","ProseFieldGroup","ProseH1","ProseH2","ProseH3","ProseH4","ProseHr","ProseIcon","ProseImg","ProseKbd","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseSteps","ProseStrong","ProseTable","ProseTabs","ProseTabsItem","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","ProseCaution","ProseNote","ProseTip","ProseWarning","ProseH5","ProseH6","Icon"]
export const localComponents: string[] = []