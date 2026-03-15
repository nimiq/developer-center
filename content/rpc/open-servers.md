---
icon: i-tabler:server
navigation:
  title: Open RPC Servers
  order: 2
---

# Open RPC Servers

Public Nimiq RPC servers available for testing, development, and prototyping.

## Available Open Servers

> For current information about rate limits, uptime, supported methods, and service status, visit each server's status page.

<RpcOpenServers />

::callout{icon="i-lucide-users" color="info"}
**Share Your Node with the Community**

Set up your own Nimiq node and consider making it available as an open RPC server to help other developers in the ecosystem. [Setup Guide](../nodes/validators/becoming-a-validator)
::

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

_Open servers are community-provided resources. Always verify data independently for critical applications._
