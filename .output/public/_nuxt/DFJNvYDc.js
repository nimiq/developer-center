const o = { or: "v\xF5i", error: { title: "Lehek\xFClge ei leitud", description: "Vabandame, kuid otsitavat lehek\xFClge ei leitud." } }, e = { copy: { page: "Kopeeri lehek\xFClg", link: "Kopeeri Markdown lehek\xFClg", view: "Vaata Markdownina", gpt: "Ava ChatGPT-s", claude: "Ava Claude'is" }, links: "Kogukond", toc: "Sellel lehel", report: "Teata probleemist", edit: "Muuda seda lehek\xFClge" }, a = { copyLogo: "Kopeeri logo", copyWordmark: "Kopeeri s\xF5nam\xE4rk", downloadLogo: "Laadi logo alla", downloadWordmark: "Laadi s\xF5nam\xE4rk alla", brandAssets: "Br\xE4ndimaterjalid", logoCopied: "Logo kopeeritud", wordmarkCopied: "S\xF5nam\xE4rk kopeeritud", logoDownloaded: "Logo allalaaditud", wordmarkDownloaded: "S\xF5nam\xE4rk allalaaditud", copyLogoFailed: "Logo kopeerimine eba\xF5nnestus", copyWordmarkFailed: "S\xF5nam\xE4rgi kopeerimine eba\xF5nnestus" }, l = { common: o, docs: e, logo: a };
export {
  o as common,
  l as default,
  e as docs,
  a as logo
};
