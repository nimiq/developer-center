import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import json2md from 'json2md'

export async function generateRpcDocs() {
  let schemaUrl: string | URL | Request
  let req: Response

  try {
    // Request OpenRPC specification from the latest Albatross release on Github
    schemaUrl = 'https://raw.githubusercontent.com/nimiq/core-rs-albatross/b3241f864130494fcd687adb4e3689b98cccc984/tools/src/rpc-schema/schema.json'
    req = await fetch(schemaUrl)
    if (req.status !== 200)
      throw new Error(`HTTP code ${req.status}`)
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Failed to fetch OpenRPC specification from GitHub: ${error}`)
    return
  }

  // Read request body and parse the body text as JSON
  const spec = await req.json()
  const packageVersion = spec.info.version

  // Build folder
  const buildFolder = join(__dirname, '../../build/rpc-docs')
  // Read package version of generated docs, if already built
  const versionFile = join(buildFolder, '/_version')

  if (existsSync(versionFile)) {
    const generatedVersion = readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      // eslint-disable-next-line no-console
      console.log(`RPC specification docs ${packageVersion} already generated`)
      return
    }
  }

  // eslint-disable-next-line no-console
  console.log(`Generating RPC specification docs ${packageVersion} ...`)

  const markdown = []

  // Intro section
  markdown.push(addHeader('h1', spec.info.title))
  markdown.push(addParagraph(spec.info.description))
  markdown.push(addHeader('h2', `Version: ${spec.info.version}`))
  markdown.push(addLink('View schema definition', schemaUrl))

  // Authentication section
  markdown.push(addHeader('h2', 'Authentication'))
  markdown.push(addParagraph('Authentication with the JSON-RPC server occurs via HTTP Basic Authentication. The username and password can be configured within the `rpc-server` section of the `client.toml` file. Authentication with the RPC server functions by adding an Authorization header to the HTTP request. The value of this header is provided in the format `Basic <credentials>` where `credentials` is a base64-encoded string containing the username and password separated by a colon.'))
  markdown.push(addCode('Shell', authorizationExample()))

  // Positional vs named parameters section
  markdown.push(addHeader('h2', 'Passing parameters to RPC methods'))
  markdown.push(addParagraph('The JSON-RPC specification defines two ways of passing parameters to methods: named parameters, providing flexibility by labeling parameters, and positional parameters, relying on their order in the request. At the moment the JSON-RPC server implementation **only** supports positional parameters, meaning parameter order must match the server\'s expectation.'))
  markdown.push(addCode('JSON', methodParametersExample()))

  // Code examples section
  markdown.push(addHeader('h2', 'Examples'))
  markdown.push(addParagraph('JSON-RPC achieves language and framework independence by leveraging JSON\'s simplicity for data interchange and defining a standardized protocol for remote procedure calls. This minimalist approach ensures seamless communication between diverse systems, promoting interoperability without reliance on specific programming languages or frameworks.'))

  markdown.push(addParagraph('::: code-group'))
  markdown.push(addCode('JavaScript', javascriptFetchExample()))
  markdown.push(addCode('Shell', curlFetchExample()))
  markdown.push(addParagraph(':::'))

  // Methods section
  markdown.push(addHeader('h2', 'Methods'))
  spec.methods.forEach((method: any) => {
    markdown.push(addHeader('h3', method.name))

    // Method parameters
    markdown.push(addParagraph('Parameters:'))
    if (method.params.length === 0)
      markdown.push(addParagraph('*None*'))
    else
      markdown.push(methodParamsToTable(method))

    // Method result
    if ('$ref' in method.result.schema) {
      const ref = method.result.schema.$ref.split('/').pop()
      markdown.push(addParagraph(`Returns: [${ref}](#${ref.toLowerCase()})`))
    }
    else {
      if (method.result.schema.type !== 'array') {
        markdown.push(addParagraph(`Returns: ${firstCharToUpper(method.result.schema.type)}`))
      }
      else {
        if ('$ref' in method.result.schema.items) {
          const ref = method.result.schema.items.$ref.split('/').pop()
          markdown.push(addParagraph(`Returns: Array< [${ref}](#${ref.toLowerCase()}) >`))
        }
        else {
          markdown.push(addParagraph(`Returns: Array< ${firstCharToUpper(method.result.schema.items.type)} >`))
        }
      }
    }
  })

  // Schemas section
  markdown.push(addHeader('h2', 'Schemas'))
  Object.entries(spec.components.schemas).forEach((obj) => {
    const schema = obj[1] as any
    markdown.push(addHeader('h3', schema.title))
    markdown.push(schemaPropertiesToTable(schema))
  })

  // Verify that destination folder exists
  if (!existsSync(buildFolder))
    mkdirSync(buildFolder)

  const entryFile = join(__dirname, '../../build/rpc-docs/index.md')
  writeFileSync(entryFile, json2md(markdown))
  writeFileSync(versionFile, packageVersion)
}

function addHeader(size: string, text: string) {
  return { [size]: text }
}

function addParagraph(text: string) {
  return { p: text }
}

function addLink(title: string, source: string) {
  return { link: { title, source } }
}

function addCode(language: string, content: string) {
  return { code: { language, content } }
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

function javascriptFetchExample() {
  return `const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"jsonrpc":"2.0","method":"getLatestBlock","params":[false],"id":1}'
};
      
fetch('http://127.0.0.1:8648', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));`
}

function curlFetchExample() {
  return `curl --request POST \\
--url http://127.0.0.1:8648 \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
}'`
}

function methodParametersExample() {
  return `{
    "jsonrpc": "2.0", 
    "params": [12, 30], // Correct
    ...
}

{
    "jsonrpc": "2.0", 
    "params": {"hour": 12, "minutes": 30}, // Incorrect
    ...
}`
}

function authorizationExample() {
  return `echo -n 'super:secret' | base64
# Output: c3VwZXI6c2VjcmV0
    
curl --request POST \\
    --url http://127.0.0.1:8648 \\
    --header 'Authorization: Basic c3VwZXI6c2VjcmV0' \\
    --header 'Content-Type: application/json' \\
    --data '{
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
}'`
}
