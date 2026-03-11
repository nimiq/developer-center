const o = { or: "\u6216", error: { title: "\u9875\u9762\u672A\u627E\u5230", description: "\u5F88\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u672A\u627E\u5230\u3002" } }, d = { copy: { page: "\u590D\u5236\u9875\u9762", link: "\u590D\u5236\u9875\u9762\uFF08Markdown\uFF09", view: "\u4EE5 Markdown \u683C\u5F0F\u67E5\u770B", gpt: "\u5728 ChatGPT \u4E2D\u6253\u5F00", claude: "\u5728 Claude \u4E2D\u6253\u5F00" }, links: "\u793E\u533A", toc: "\u5728\u6B64\u9875\u9762\u4E0A", report: "\u63D0\u4EA4\u95EE\u9898\u62A5\u544A", edit: "\u7F16\u8F91\u6B64\u9875\u9762" }, r = { copyLogo: "\u590D\u5236\u56FE\u6807", copyWordmark: "\u590D\u5236\u6587\u5B57\u6807\u8BC6", downloadLogo: "\u4E0B\u8F7D\u56FE\u6807", downloadWordmark: "\u4E0B\u8F7D\u6587\u5B57\u6807\u8BC6", brandAssets: "\u54C1\u724C\u8D44\u6E90", logoCopied: "\u56FE\u6807\u5DF2\u590D\u5236", wordmarkCopied: "\u6587\u5B57\u6807\u8BC6\u5DF2\u590D\u5236", logoDownloaded: "\u56FE\u6807\u5DF2\u4E0B\u8F7D", wordmarkDownloaded: "\u6587\u5B57\u6807\u8BC6\u5DF2\u4E0B\u8F7D", copyLogoFailed: "\u590D\u5236\u56FE\u6807\u5931\u8D25", copyWordmarkFailed: "\u590D\u5236\u6587\u5B57\u6807\u8BC6\u5931\u8D25" }, a = { common: o, docs: d, logo: r };
export {
  o as common,
  a as default,
  d as docs,
  r as logo
};
