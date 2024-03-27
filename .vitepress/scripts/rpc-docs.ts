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
  const methodFile = join(buildFolder, '/method.md')

  if (existsSync(methodFile)) {
    const re = /## Version: (\.*)/
    const content = readFileSync(methodFile, 'utf-8')
    const generatedVersion = re.exec(content)?.[1]
    consola.info(`RPC specification docs ${packageVersion} already generated`)
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

  // - <span font-mono>passphrase</span>*: `String`
  // Returns: [ReturnAccount](#returnaccount)
  const template = `
  <div grid="~ gap-32 cols-1 lg:cols-[2fr_3fr]">
    <div w-full>
  
### {{ methodName }}

Description{.label .text-12 .text-neutral-800}

{{ description }}

Parameters{.label .text-12 .text-neutral-800}

{{ parameters }}

Returns{.label .text-12 .text-neutral-800}

{{ returns }}

</div>

<div w-full>

::: code-group

\`\`\`JavaScript
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: '{"jsonrpc":"2.0","method":"{{ methodName }}","params":[{{ parametersValues }}],"id":1}'
};

fetch('http://127.0.0.1:8648', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
\`\`\`

\`\`\`Shell
curl --request POST \n
  --url http://127.0.0.1:8648 \n
  --header 'Content-Type: application/json' \n
  --data '{
    "jsonrpc": "2.0",
    "method": "{{ methodName }}",
    "params": [{{ parametersValues }}],
    "id": 1
  }'
\`\`\`
:::

</div>
</div>
`.trim()

  function paramToValue(param: any) {
    switch (param.schema.type) {
      case 'string': return `"${param.name}"`
      case 'number': return '0'
      case 'boolean': return 'false'
      default: return '""'
    }
  }

  methodsMd.push(addHeader('h2', 'Methods'))
  for (const method of spec.methods) {
    const parameters = method.params.map(param => `- <span font-mono>${param.name}</span>${param.required ? '*' : ''}: \`${param.schema.type}\``).join('\n')

    const parametersValues = method.params.map(paramToValue).join(', ')

    let resultProperties = ''
    const returnsObject = '$ref' in method.result.schema
    if (returnsObject) {
      const { /* title, description, */ required, properties } = spec.components.schemas[method.result.schema.$ref.split('/').at(-1)]
      resultProperties = Object.values(properties).map(({ title, type }) => `- <span font-mono>${title}</span>${required.includes(title) ? '*' : ''}: \`${type}\``).join('\n')
    }
    else {
      resultProperties = `- \`${method.result.schema.type}\``
    }
    const tmp = template
      .replaceAll('{{ methodName }}', method.name)
      .replaceAll('{{ description }}', method.description)
      .replaceAll('{{ parameters }}', parameters)
      .replaceAll('{{ parametersValues }}', parametersValues)
      .replaceAll('{{ returns }}', resultProperties)

    methodsMd.push(tmp)
  }

  // Method parameters
  // methodsMd.push(addParagraph('Parameters{.subline .text-neutral-800 .text-12}'))
  // if (method.params.length === 0)
  //   methodsMd.push(addParagraph('*None*'))
  // else
  //   methodsMd.push(methodParamsToTable(method))

  // Method result
  // if ('$ref' in method.result.schema) {
  //   const ref = method.result.schema.$ref.split('/').pop()
  //   methodsMd.push(addParagraph(`Returns: [${ref}](#${ref.toLowerCase()})`))
  // }
  // else {
  //   if (method.result.schema.type !== 'array') {
  //     methodsMd.push(addParagraph(`Returns: ${firstCharToUpper(method.result.schema.type)} `))
  //   }
  //   else {
  //     if ('$ref' in method.result.schema.items) {
  //       const ref = method.result.schema.items.$ref.split('/').pop()
  //       methodsMd.push(addParagraph(`Returns: Array < [${ref}](#${ref.toLowerCase()}) > `))
  //     }
  //     else {
  //       methodsMd.push(addParagraph(`Returns: Array < ${firstCharToUpper(method.result.schema.items.type)} > `))
  //     }
  //   }
  // }

  // Schemas section
  // const schemasMd = []
  // schemasMd.push(addHeader('h2', 'Schemas'))
  // for (const schema of Object.values(spec.components.schemas)) {
  //   schemasMd.push(addHeader('h3', (schema as any).title))
  //   schemasMd.push(schemaPropertiesToTable(schema))
  // }

  // Verify that destination folder exists
  if (!existsSync(buildFolder))
    mkdirSync(buildFolder)

  writeFileSync(join(__dirname, '../../build/rpc-docs/methods.md'), json2md(methodsMd))
  // writeFileSync(join(__dirname, '../../build/rpc-docs/schemas.md'), json2md(schemasMd))
}

function addHeader(size: string, text: string) {
  return { [size]: text }
}

// function addParagraph(text: string) {
//   return { p: text }
// }

// function firstCharToUpper(string: string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }

// function schemaPropertiesToTable(schema: any) {
//   const table = { table: { headers: ['Name', 'Type', 'Required'], rows: [] } }
//   const requiredProps = Object.entries(schema.required).map(prop => prop[1])

//   Object.entries(schema.properties)
//     .map(obj => obj[1])
//     .forEach((prop: any) => {
//       // Check if we are dealing with a type or a reference to a schema
//       let type: string
//       if (!prop.type && prop.$ref) {
//         const ref = prop.$ref.split('/').pop()
//         type = `[${ref}](#${ref.toLowerCase()})`
//       }
//       else { type = prop.type }

//       const isPropRequired = requiredProps.find(reqProp => reqProp === prop.title)
//       table.table.rows.push([prop.title, firstCharToUpper(type), isPropRequired ? 'Yes' : 'No'])
//     })
//   return table
// }

// function methodParamsToTable(method: any) {
//   const table = { table: { headers: ['Name', 'Type', 'Required'], rows: [] } }
//   method.params.forEach((param: any) => {
//     table.table.rows.push([param.name, firstCharToUpper(param.schema.type), param.required ? 'Yes' : 'No'])
//   })
//   return table
// }
