export const checksums = {}
export const checksumsStructure = {}

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