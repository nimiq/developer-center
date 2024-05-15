# Nimiq JSON-RPC Specification

<script setup lang="ts">
const specUrl = __ALBATROSS_RPC_OPENRPC_URL__
const specVersion = __ALBATROSS_RPC_OPENRPC_VERSION__
</script>

<div flex="~ items-baseline gap-32 justify-start" my-32 class="raw">
  <span op-80 text-14>Version {{specVersion}}</span>
  <a :href="specUrl" pill-tertiary pill-sm cursor-pointer flex="~ gap-8 items-center" download un-text="neutral-900">
    <div i-nimiq:arrow-to-bottom op-80></div>
    Download OpenRPC.json
  </a>
</div>

Through the use of JSON-RPC, Nimiq nodes expose a set of standardized methods and endpoints that allow external applications and tools to interact, stream and control the behavior of the nodes. This includes functionalities such as retrieving information about the blockchain state, submitting transactions, managing accounts, and configuring node settings.

## Authentication

Authentication with the JSON-RPC server occurs via HTTP Basic Authentication. The username and password can be configured within the `rpc-server` section of the `client.toml` file. Authentication with the RPC server functions by adding an Authorization header to the HTTP request. The value of this header is provided in the format `Basic <credentials>` where `credentials` is a base64-encoded string containing the username and password separated by a colon.

```Shell
echo -n 'super:secret' | base64
# Output: c3VwZXI6c2VjcmV0

curl --request POST \
    --url http://127.0.0.1:8648 \
    --header 'Authorization: Basic c3VwZXI6c2VjcmV0' \
    --header 'Content-Type: application/json' \
    --data '{
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
}'
```

## Passing parameters to RPC methods

The JSON-RPC specification defines two ways of passing parameters to methods: named parameters, providing flexibility by labeling parameters, and positional parameters, relying on their order in the request. At the moment the JSON-RPC server implementation **only** supports positional parameters, meaning parameter order must match the server's expectation.

```JSON
{
    "jsonrpc": "2.0",
    "params": {"hour": 12, "minutes": 30}, // [!code --]
    "params": [12, 30], // [!code ++]
}
```

<!-- ## Examples

JSON-RPC achieves language and framework independence by leveraging JSON's simplicity for data interchange and defining a standardized protocol for remote procedure calls. This minimalist approach ensures seamless communication between diverse systems, promoting interoperability without reliance on specific programming languages or frameworks.

::: code-group

```JavaScript
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"jsonrpc":"2.0","method":"getLatestBlock","params":[false],"id":1}'
};

fetch('http://127.0.0.1:8648', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
```

```Shell
curl --request POST \
--url http://127.0.0.1:8648 \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "getLatestBlock",
    "params": [false],
    "id": 1
}'
```

::: -->

## Methods

<!--@include: ./methods.md-->

<style>
  .prose > * {
    margin: 0;
  }

  section {
    --uno: flex gap-32 items-start max-w-inherit flex-col;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .io {
      --uno: shrink basis-30ch m-0;

      h4 {
        --uno: text-12 text-neutral-800 mt-32 mb-16;
      }

      ul {
        --uno: pl-4;

        li::before {
          --uno: mr-4;
        }

        span {
          --uno: text-12;
        }
      }
    }

    .vp-code-group {
      --uno: flex-1 w-full;
      .line span { --uno: text-12 };

      @media (min-width: 768px) {
        overflow-x: auto;
      }
    }
  }
</style>
