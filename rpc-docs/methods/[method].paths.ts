import $RefParser from '@apidevtools/json-schema-ref-parser'
import openRpcJson from '../../.vitepress/rpc/openrpc-document.json'

import { slugify, toHumanReadable } from '../../.vitepress/utils'

export default {
  async paths() {
    // Create a deep clone of the openRpcJson to avoid modifying the original
    const rpcDocument = JSON.parse(JSON.stringify(openRpcJson))

    let methods
    try {
      // Dereference the JSON Schema references
      methods = (await $RefParser.dereference(rpcDocument) as typeof openRpcJson).methods
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (_err) {
      // If dereferencing fails, use the original document
      methods = rpcDocument.methods
    }
    return methods.map((method: any) => ({
      params: {
        method: slugify(method.name),
        humanReadableName: toHumanReadable(method.name),
        ...method,
        input: parseInput(method.params),
        output: parseOutput(method.result),
      },
    }))
  },
}

function parseInput(params: any[]) {
  const isParamRequired = (param: string) => params.find(p => p.name === param)?.required || false
  const input = params.map(param => ({
    key: param.name,
    type: param.schema.type,
    required: isParamRequired(param.name),
    label: param.humanReadableName,
  }))
  return input
}

function parseOutput(result: any) {
  let output: { key: string, type: string, required: boolean, label: string }[] = []
  if ('properties' in result.schema) {
    const isResultRequired = (param: string) => (result.schema as any).required.includes(param)
    const schema = (result.schema as any).properties || []
    const properties = Object.keys(schema)
    output = properties.map((prop: string) => ({
      key: prop,
      type: schema[prop].type,
      required: isResultRequired(prop),
      label: schema[prop].humanReadableName,
    }))
  }
  else if ('type' in result.schema) {
    output = [{ key: result.name, type: result.schema.type, required: true, label: result.humanReadableName }]
  }
  return output
}
