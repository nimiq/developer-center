---
search: false
---

# Downloads

<Callout type='warning'>

This page describes the installation and usage of the precompiled packages linked below. For better performance, you might also consider to compile the miner [source code](https://github.com/nimiq/core-js) on the machine where it is intended to be used.

</Callout>

## Packages

## Ubuntu

[Download](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.4-1_amd64.deb)

Also works in Debian-Based Distributions:

- Ubuntu 24.04 LTS
- Ubuntu 22.04 LTS
- Ubuntu 20.04 LTS
- Debian 12
- Debian 11

[Hash](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.4-1_amd64.deb.sha256sum) - [Signature](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.4-1_amd64.deb.asc) - [Signing Key](https://www.nimiq.com/nimiq-signing-key.pub)

### Debian

```bash
dpkg -i nimiq_1.6.4-1_amd64.deb
```

## Fedora

```bash
yum install nimiq-1.6.4-1.x86_64.rpm
```

[Download](https://repo.nimiq.com/rpm/stable/x86_64/nimiq-1.6.4-1.x86_64.rpm)

Also works in Red Hat-Based Distributions:

- Fedora 41
- Fedora 40

[Hash](https://repo.nimiq.com/rpm/stable/x86_64/nimiq-1.6.4-1.x86_64.rpm.sha256sum) - [Signature](https://repo.nimiq.com/rpm/stable/x86_64/nimiq-1.6.4-1.x86_64.rpm.asc) - [Signing Key](https://www.nimiq.com/nimiq-signing-key.pub)

## Configuration

<Callout type='warning'>

To run a Nimiq Full Node and receive connections from other peers you need a valid domain name and SSL certificate.

</Callout>

The configuration file for Linux is located in `/etc/nimiq/nimiq.conf`

On Windows systems, to access the configuration go to the Windows Start Menu and in the Nimiq folder select "Edit Config".

### Example Configuration File

```json
// nimiq.conf
{
  "host": "example.yourdomain.com",
  "tls": {
    "cert": "PATH-TO-YOUR-CERTIFICATE",
    "key": "PATH-TO-YOUR-KEY"
  },
  "network": "main",
  "miner": {
    "enabled": "yes"
  }
}
```

## Usage

### Linux

```bash
systemctl start|stop|restart nimiq
```
