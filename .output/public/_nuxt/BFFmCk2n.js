const o = { or: "o", error: { title: "P\xE1gina no encontrada", description: "Lo sentimos, no se pudo encontrar esta p\xE1gina." } }, a = { copy: { page: "Copiar p\xE1gina", link: "Copiar p\xE1gina en Markdown", view: "Ver como Markdown", gpt: "Abrir en ChatGPT", claude: "Abrir en Claude" }, links: "Comunidad", toc: "En esta p\xE1gina", report: "Reportar un problema", edit: "Editar esta p\xE1gina" }, r = { copyLogo: "Copiar logo", copyWordmark: "Copiar wordmark", downloadLogo: "Descargar logo", downloadWordmark: "Descargar wordmark", brandAssets: "Recursos de marca", logoCopied: "Logo copiado", wordmarkCopied: "Wordmark copiado", logoDownloaded: "Logo descargado", wordmarkDownloaded: "Wordmark descargado", copyLogoFailed: "No se pudo copiar el logo", copyWordmarkFailed: "No se pudo copiar el wordmark" }, d = { common: o, docs: a, logo: r };
export {
  o as common,
  d as default,
  a as docs,
  r as logo
};
