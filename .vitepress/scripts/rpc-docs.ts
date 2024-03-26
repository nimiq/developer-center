import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import json2md from 'json2md'
import { consola } from 'consola'

export async function generateRpcDocs() {
  let content: Response

  try {
    // Request the latest release information
    const latestRelease = await fetch('https://github.com/nimiq/core-rs-albatross/releases/latest', { redirect: 'follow' })
    if (latestRelease.status !== 200) {
      const e = new Error(`HTTP code for fetching release ${latestRelease.status}`)
      consola.error(e)
      throw e
    }

    // Request OpenRPC document from the latest Albatross release on Github
    const releaseVersion = latestRelease.url.split('/').pop()
    content = await fetch(`https://github.com/nimiq/core-rs-albatross/releases/download/${releaseVersion}/openrpc-document.json`)
    if (content.status !== 200) {
      const e = new Error(`HTTP code for fetching content ${content.status}`)
      consola.error(e)
      throw e
    }
  }
  catch (error) {
    consola.error(new Error(`Failed to fetch OpenRPC specification from GitHub: ${error}`))
    return
  }

  // Read request body and parse the body text as JSON
  const spec = await content.json()
  const packageVersion = spec.info.version

  // Build folder
  const buildFolder = join(__dirname, '../../build/rpc-docs')
  // Read package version of generated docs, if already built
  const versionFile = join(buildFolder, '/_version')

  if (existsSync(versionFile)) {
    const generatedVersion = readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      consola.info(`RPC specification docs ${packageVersion} already generated`)
      return
    }
  }

  consola.info(`Generating RPC specification docs ${packageVersion} ...`)

  // Methods section
  const methodsMd = []

  methodsMd.push(addHeader('h2', `Version: ${spec.info.version}`))
  methodsMd.push(`[Download RPC definition](https://github.com/nimiq/core-rs-albatross/releases/latest)`)

  methodsMd.push(addHeader('h2', 'Methods'))
  for (const method of spec.methods) {
    methodsMd.push(addHeader('h3', method.name))

    // Method parameters
    methodsMd.push(addParagraph('Parameters:'))
    if (method.params.length === 0)
      methodsMd.push(addParagraph('*None*'))
    else
      methodsMd.push(methodParamsToTable(method))

    // Method result
    if ('$ref' in method.result.schema) {
      const ref = method.result.schema.$ref.split('/').pop()
      methodsMd.push(addParagraph(`Returns: [${ref}](#${ref.toLowerCase()})`))
    }
    else {
      if (method.result.schema.type !== 'array') {
        methodsMd.push(addParagraph(`Returns: ${firstCharToUpper(method.result.schema.type)}`))
      }
      else {
        if ('$ref' in method.result.schema.items) {
          const ref = method.result.schema.items.$ref.split('/').pop()
          methodsMd.push(addParagraph(`Returns: Array< [${ref}](#${ref.toLowerCase()}) >`))
        }
        else {
          methodsMd.push(addParagraph(`Returns: Array< ${firstCharToUpper(method.result.schema.items.type)} >`))
        }
      }
    }
  }

  // Schemas section
  const schemasMd = []
  schemasMd.push(addHeader('h2', 'Schemas'))
  for (const schema of Object.values(spec.components.schemas)) {
    schemasMd.push(addHeader('h3', (schema as any).title))
    schemasMd.push(schemaPropertiesToTable(schema))
  }

  // Verify that destination folder exists
  if (!existsSync(buildFolder))
    mkdirSync(buildFolder)

  writeFileSync(join(__dirname, '../../build/rpc-docs/methods.md'), json2md(methodsMd))
  writeFileSync(join(__dirname, '../../build/rpc-docs/schemas.md'), json2md(schemasMd))
}

function addHeader(size: string, text: string) {
  return { [size]: text }
}

function addParagraph(text: string) {
  return { p: text }
}

function firstCharToUpper(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function schemaPropertiesToTable(schema: any) {
  const table = { table: { headers: ['Name', 'Type', 'Required'], rows: [] } }
  const requiredProps = Object.entries(schema.required).map(prop => prop[1])

  Object.entries(schema.properties)
    .map(obj => obj[1])
    .forEach((prop: any) => {
      // Check if we are dealing with a type or a reference to a schema
      let type: string
      if (!prop.type && prop.$ref) {
        const ref = prop.$ref.split('/').pop()
        type = `[${ref}](#${ref.toLowerCase()})`
      }
      else { type = prop.type }

      const isPropRequired = requiredProps.find(reqProp => reqProp === prop.title)
      table.table.rows.push([prop.title, firstCharToUpper(type), isPropRequired ? 'Yes' : 'No'])
    })
  return table
}

function methodParamsToTable(method: any) {
  const table = { table: { headers: ['Name', 'Type', 'Required'], rows: [] } }
  method.params.forEach((param: any) => {
    table.table.rows.push([param.name, firstCharToUpper(param.schema.type), param.required ? 'Yes' : 'No'])
  })
  return table
}
