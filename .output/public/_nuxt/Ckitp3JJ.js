const o = { or: "nebo", error: { title: "Str\xE1nka nenalezena", description: "Je n\xE1m l\xEDto, ale str\xE1nka, kterou hled\xE1te, nebyla nalezena." } }, a = { copy: { page: "Kop\xEDrovat str\xE1nku", link: "Kop\xEDrovat Markdown str\xE1nku", view: "Zobrazit jako Markdown", gpt: "Otev\u0159\xEDt v ChatGPT", claude: "Otev\u0159\xEDt v Claude" }, links: "Komunita", toc: "Na t\xE9to str\xE1nce", report: "Nahl\xE1sit probl\xE9m", edit: "Upravit tuto str\xE1nku" }, r = { copyLogo: "Kop\xEDrovat logo", copyWordmark: "Kop\xEDrovat wordmark", downloadLogo: "St\xE1hnout logo", downloadWordmark: "St\xE1hnout wordmark", brandAssets: "Materi\xE1ly zna\u010Dky", logoCopied: "Logo zkop\xEDrov\xE1no", wordmarkCopied: "Wordmark zkop\xEDrov\xE1n", logoDownloaded: "Logo sta\u017Eeno", wordmarkDownloaded: "Wordmark sta\u017Een", copyLogoFailed: "Kop\xEDrov\xE1n\xED loga selhalo", copyWordmarkFailed: "Kop\xEDrov\xE1n\xED wordmarku selhalo" }, t = { common: o, docs: a, logo: r };
export {
  o as common,
  t as default,
  a as docs,
  r as logo
};
