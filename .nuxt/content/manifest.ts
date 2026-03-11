export const checksums = {
  "docs": "v3.5.0--fS8u-LDfE9WpJx6cZsjqFMyslRxvMsT-Mfgsk9GoiyY",
  "landing": "v3.5.0--6PwhFTgRgATNdg3Ek91DFjFVTx3PaNySxHT4X90KROA"
}
export const checksumsStructure = {
  "docs": "WhSqpCmvkYqGdx62TNDrial4iL1HDGUV52p0hnM_Ld0",
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
      "links": "string",
      "meta": "json",
      "navigation": "string",
      "outline": "string",
      "path": "string",
      "seo": "json",
      "sidebar": "string",
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