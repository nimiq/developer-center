const o = { or: "o", error: { title: "P\xE0gina no trobada", description: "Ho sentim, per\xF2 la p\xE0gina que cerques no existeix." } }, a = { copy: { page: "Copiar p\xE0gina", link: "Copiar p\xE0gina Markdown", view: "Veure com a Markdown", gpt: "Obrir a ChatGPT", claude: "Obrir a Claude" }, links: "Comunitat", toc: "En aquesta p\xE0gina", report: "Informar d'un problema", edit: "Editar aquesta p\xE0gina" }, r = { copyLogo: "Copiar el logotip", copyWordmark: "Copiar el wordmark", downloadLogo: "Descarregar el logotip", downloadWordmark: "Descarregar el wordmark", brandAssets: "Recursos de marca", logoCopied: "Logotip copiat", wordmarkCopied: "Wordmark copiat", logoDownloaded: "Logotip descarregat", wordmarkDownloaded: "Wordmark descarregat", copyLogoFailed: "No s'ha pogut copiar el logotip", copyWordmarkFailed: "No s'ha pogut copiar el wordmark" }, e = { common: o, docs: a, logo: r };
export {
  o as common,
  e as default,
  a as docs,
  r as logo
};
