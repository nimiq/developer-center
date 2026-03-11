const o = { or: "eller", error: { title: "Side ikke fundet", description: "Vi beklager, men siden du leder efter kunne ikke findes." } }, e = { copy: { page: "Kopier side", link: "Kopier Markdown side", view: "Vis som Markdown", gpt: "\xC5bn i ChatGPT", claude: "\xC5bn i Claude" }, links: "F\xE6llesskab", toc: "P\xE5 denne side", report: "Rapporter et problem", edit: "Rediger denne side" }, d = { copyLogo: "Kopi\xE9r logo", copyWordmark: "Kopi\xE9r wordmark", downloadLogo: "Download logo", downloadWordmark: "Download wordmark", brandAssets: "Brandmaterialer", logoCopied: "Logo kopieret", wordmarkCopied: "Wordmark kopieret", logoDownloaded: "Logo downloadet", wordmarkDownloaded: "Wordmark downloadet", copyLogoFailed: "Kunne ikke kopiere logo", copyWordmarkFailed: "Kunne ikke kopiere wordmark" }, r = { common: o, docs: e, logo: d };
export {
  o as common,
  r as default,
  e as docs,
  d as logo
};
