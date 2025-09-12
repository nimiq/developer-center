import type { MethodObject, OpenrpcDocument, TagObject } from '@open-rpc/meta-schema'
import type { NimiqVitepressSidebar } from 'nimiq-vitepress-theme/types.js'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import { capitalizeFirstLetter, slugify, toHumanReadable } from '../utils'

// Define types for RPC methods
export type RpcMethodTag = typeof tagOrder[number]

export interface RpcMethodOption {
  name: string
  tag: RpcMethodTag
  link: string
}

export interface RpcMethodGroup {
  name: string
  icon: string
  children: RpcMethodOption[]
}

async function deferredMethods(openRpcJson: OpenrpcDocument): Promise<MethodObject[]> {
  const rpcDocument = JSON.parse(JSON.stringify(openRpcJson))

  let methods
  try {
    // Dereference the JSON Schema references
    methods = (await $RefParser.dereference(rpcDocument) as OpenrpcDocument).methods
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (_err) {
    // If dereferencing fails, use the original document
    methods = rpcDocument.methods
  }

  return methods
}

// Helper function to generate RPC method items
const tagOrder = ['validator', 'blockchain', 'consensus', 'wallet', 'policy', 'mempool', 'network', 'zkp_component'] as const
const rpcAccordionIcons: Record<typeof tagOrder[number], string> = {
  validator: 'i-nimiq:verified-filled',
  blockchain: 'i-nimiq:nodes',
  consensus: 'i-tabler:network',
  wallet: 'i-tabler:wallet',
  policy: 'i-nimiq:verified',
  mempool: 'i-nimiq:cubes',
  network: 'i-nimiq:duotone-network',
  zkp_component: 'i-tabler:lock',
}

export interface NimiqRpcMethod {
  method: string
  link: string
  humanReadableName: string
  name: string
  description?: string
  tags?: { name: string }[]
  input: MethodIO[]
  output: MethodIO[]
}

export interface MethodIO {
  key: string
  type: string
  required: boolean
  label: string
}

export type NimiqRpcMethods = NimiqVitepressSidebar['items'][number] & {
  methods: NimiqRpcMethod[]
}

export async function loadMethods(openRpcJson: OpenrpcDocument): Promise<NimiqRpcMethods[]> {
  const methods = await deferredMethods(openRpcJson)

  const enhancedMethods = methods.map(method => ({
    ...method,
    method: slugify(method.name),
    humanReadableName: toHumanReadable(method.name),
    input: parseInput(method.params),
    output: parseOutput(method.result),
    link: `/rpc-client/methods/${slugify(method.name)}`,
  })) as NimiqRpcMethod[]

  const result: NimiqRpcMethods[] = []
  for (const tag of tagOrder) {
    const methodsByTag = enhancedMethods.filter(method => (method.tags as TagObject[])?.map(t => t.name).includes(tag))
    result.push({
      icon: rpcAccordionIcons[tag],
      methods: methodsByTag,
      text: capitalizeFirstLetter(tag),
      items: methodsByTag.map(method => ({
        text: `\`${method.name}\``,
        link: `/rpc-client/methods/${slugify(method.name)}`,
      })),

    })
  }

  return result
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
