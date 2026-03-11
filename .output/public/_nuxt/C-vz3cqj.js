const o = { or: "ou", error: { title: "P\xE1gina n\xE3o encontrada", description: "Desculpe, mas esta p\xE1gina n\xE3o p\xF4de ser encontrada." } }, a = { copy: { page: "Copiar p\xE1gina", link: "Copiar p\xE1gina em Markdown", view: "Visualizar como Markdown", gpt: "Abrir no ChatGPT", claude: "Abrir no Claude" }, links: "Comunidade", toc: "Nesta p\xE1gina", report: "Reportar um erro", edit: "Editar esta p\xE1gina" }, r = { copyLogo: "Copiar logo", copyWordmark: "Copiar wordmark", downloadLogo: "Baixar logo", downloadWordmark: "Baixar wordmark", brandAssets: "Recursos da marca", logoCopied: "Logo copiado", wordmarkCopied: "Wordmark copiado", logoDownloaded: "Logo baixado", wordmarkDownloaded: "Wordmark baixado", copyLogoFailed: "Falha ao copiar o logo", copyWordmarkFailed: "Falha ao copiar o wordmark" }, d = { common: o, docs: a, logo: r };
export {
  o as common,
  d as default,
  a as docs,
  r as logo
};
