# Mini Apps

Build mini apps that run inside Nimiq Pay, with optional access to Nimiq and Ethereum wallet features.

## What are Mini Apps?

Mini apps are web applications that run inside the Nimiq Pay app. They can support a wide range of in-app experiences, from general web tools to apps that interact with Nimiq and Ethereum wallets.

Think of it like a specialized web browser embedded within Nimiq Pay. Your mini app loads in the Nimiq Pay app and, when needed, can request wallet operations like listing accounts, signing messages, or sending payments, all while the user stays within the Nimiq Pay app. The wallet handles all the cryptographic operations securely, and users approve every sensitive action through native confirmation dialogs.

## How It Works

Mini apps run in a WebView and talk to Nimiq Pay through injected providers.

To use an injected provider, read it from `window`, confirm it is available, and then call its methods as in this example:

```javascript
const nimiq = window.nimiq

if (!nimiq) {
  throw new Error('Nimiq provider not available')
}

const [accounts, consensus, blockNumber] = await Promise.all([
  nimiq.listAccounts(),
  nimiq.isConsensusEstablished(),
  nimiq.getBlockNumber(),
])
```

### Components

<table>
<thead>
  <tr>
    <th>
      Component
    </th>
    
    <th>
      Lives in
    </th>
    
    <th>
      What it does
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Injected Provider (<code>
        window.ethereum
      </code>
      
      , <code>
        window.nimiq
      </code>
      
      )
    </td>
    
    <td>
      WebView (injected by Nimiq Pay)
    </td>
    
    <td>
      Exposes wallet APIs and sends requests to the host
    </td>
  </tr>
  
  <tr>
    <td>
      Host-side API
    </td>
    
    <td>
      Nimiq Pay (native)
    </td>
    
    <td>
      Receives requests, validates them, shows approval dialogs, executes actions
    </td>
  </tr>
  
  <tr>
    <td>
      Mini App SDK (optional)
    </td>
    
    <td>
      WebView (your app or injected)
    </td>
    
    <td>
      Typed Nimiq-native APIs + <code>
        Result<T, E>
      </code>
      
       patterns; uses its own message format
    </td>
  </tr>
</tbody>
</table>

Your mini app uses standard Web3 APIs via `window.ethereum` and Nimiq-specific APIs via `window.nimiq`.

### Request lifecycle

1. Your mini app calls a provider method (for example, request accounts or sign a message)
2. The injected provider forwards a message to the Nimiq Pay app
3. The Nimiq Pay app validates the request and shows a native confirmation dialog (when required)
4. If approved, Nimiq Pay executes the wallet operation (keys never leave the wallet)
5. The result is returned to your mini app through the provider

## Supported Networks

The framework supports two blockchain ecosystems:

**Nimiq**

- Native support for NIM payments, message signing, and consensus checks
- Direct integration with Nimiq Pay's core wallet features

**Ethereum + Layer 2 networks** (EVM-compatible)

- Ethereum Mainnet
- Polygon
- Arbitrum One
- Optimism
- Base
- BNB Smart Chain (formerly Binance Smart Chain)
- Sepolia (testnet for developers)

Any EVM-compatible chain supported by our RPC provider can be added; the list above reflects what we currently expose in Nimiq Pay. Additional EVM networks can be added over time via configuration updates.

## Security and Permissions

Every sensitive action requires explicit user approval through native dialogs that mini apps cannot bypass. Your app runs in a secure sandbox with no direct access to private keys. The Nimiq Pay app mediates all wallet operations.

Here's how security works:

- **User consent is always required**: Viewing accounts, signing messages, and sending NIM payments trigger native confirmation dialogs
- **Sandboxed execution**: Mini apps run in an isolated WebView with no access to the wallet's internal state or private keys
- **Host app controls everything**: Your app can only *request* actions. The Nimiq Pay app decides whether to fulfill them, always with user approval
- **Wallet requests are mediated**: Nimiq Pay handles wallet-related provider requests, while other RPC calls use the configured endpoint or your mini app's own RPC
