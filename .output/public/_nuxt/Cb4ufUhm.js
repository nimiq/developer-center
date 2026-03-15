const o = { or: "tai", error: { title: "Sivua ei l\xF6ytynyt", description: "Pahoittelut, etsim\xE4\xE4si sivua ei l\xF6ytynyt." } }, a = { copy: { page: "Kopioi sivu", link: "Kopioi Markdown-sivu", view: "N\xE4yt\xE4 Markdownina", gpt: "Avaa ChatGPT:ss\xE4", claude: "Avaa Claudessa" }, links: "Yhteis\xF6", toc: "T\xE4ll\xE4 sivulla", report: "Ilmoita ongelmasta", edit: "Muokkaa t\xE4t\xE4 sivua" }, i = { copyLogo: "Kopioi logo", copyWordmark: "Kopioi sanamerkki", downloadLogo: "Lataa logo", downloadWordmark: "Lataa sanamerkki", brandAssets: "Br\xE4ndimateriaalit", logoCopied: "Logo kopioitu", wordmarkCopied: "Sanamerkki kopioitu", logoDownloaded: "Logo ladattu", wordmarkDownloaded: "Sanamerkki ladattu", copyLogoFailed: "Logon kopiointi ep\xE4onnistui", copyWordmarkFailed: "Sanamerkin kopiointi ep\xE4onnistui" }, t = { common: o, docs: a, logo: i };
export {
  o as common,
  t as default,
  a as docs,
  i as logo
};
