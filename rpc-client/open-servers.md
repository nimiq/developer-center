# Open RPC Servers

Public Nimiq RPC servers available for testing, development, and prototyping.

## Available Open Servers

> For current information about rate limits, uptime, supported methods, and service status, visit each server's status page.

### Mainnet

| Server | HTTP Endpoint | Maintainer | Status & Limits |
|---|---|---|---|
| **NimiqWatch** | `https://rpc.nimiqwatch.com` | [@sisou](https://github.com/sisou) | [More details](https://rpc.nimiqwatch.com/){.nq-arrow} |

### Testnet

| Server | HTTP Endpoint | Maintainer | Status & Limits |
|---|---|---|---|
| **NimiqWatch** | `https://rpc.testnet.nimiqwatch.com/` | [@sisou](https://github.com/sisou) | [More details](https://rpc.testnet.nimiqwatch.com/){.nq-arrow} |

<script setup lang="ts">
  import Banner from '../.vitepress/theme/components/Banner.vue'
</script>

<Banner
  label="Community"
  headline="Share Your Node with the Community"
  subline="Set up your own Nimiq node and consider making it available as an open RPC server to help other developers in the ecosystem."
  linkHref="/validators/becoming-a-validator"
  linkLabel="Setup Guide"
/>

## General considerations for open servers

### Production usage
- Not suitable for production applications.
- No uptime guarantees or service level agreements.
- May experience throttling during peak usage.
- Method availability may change without notice.

### Data privacy
- All requests _may_ be logged for monitoring purposes.
- Do not send sensitive information through open servers.
- Consider IP addresses and request data as potentially visible to operators.

---

*Open servers are community-provided resources. Always verify data independently for critical applications.*
