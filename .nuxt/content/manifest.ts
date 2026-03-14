export const checksums = {
  "docs": "v3.5.0--gM1wTTu4ikueJFJ8BFVI0Lyp5W7s7tlYh1thXIXbO54",
  "landing": "v3.5.0--X6H8TJEndwP1K9hVQAifwFFV1akp2bImhb0E3c-MQdI"
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