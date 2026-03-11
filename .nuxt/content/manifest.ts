export const checksums = {
  "docs": "v3.5.0--Y_uL27_8EHKhyxK15KOPOhM0XLHI9TNfCT43w5V7GPo",
  "landing": "v3.5.0--6PwhFTgRgATNdg3Ek91DFjFVTx3PaNySxHT4X90KROA"
}
export const checksumsStructure = {
  "docs": "L-cue8lpfCcbrsOyK1iUgSmH6rJbEYAyEFmxq_KEzNM",
  "landing": "tZyOKbtBW1Y6jgOgyl3rm-ghuJUJsbLCHIgBPzIXDfk"
}

export const tables = {
  "docs": "_content_docs",
  "landing": "_content_landing",
  "info": "_content_info"
}

export default {
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "icon": "string",
      "layout": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "landing": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}