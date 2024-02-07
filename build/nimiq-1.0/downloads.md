---
search: false
---

# Downloads

::: warning
This page describes the installation and usage of the precompiled packages linked below. For better performance, you might also consider to compile the miner [source code](https://github.com/nimiq/core-js) on the machine where it is intended to be used.
:::

## Packages

## Ubuntu

[Download](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.2-1_amd64.deb)

Also works in Debian-Based Distributions:

- Ubuntu 22.04 LTS
- Ubuntu 20.04 LTS
- Debian 12
- Debian 11

[Hash](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.2-1_amd64.deb.sha256sum) - [Signature](https://repo.nimiq.com/deb/pool/stable/main/n/nimiq/nimiq_1.6.2-1_amd64.deb.asc) - [Signing Key](https://www.nimiq.com/nimiq-signing-key.pub)

### Debian

```bash
dpkg -i nimiq_1.6.2-1_amd64.deb
```

## Fedora

```bash
yum install nimiq-1.6.2-1.x86_64.rpm
```

[Download](https://www.nimiq.com/nimiq-signing-key.pub)

Also works in Red Hat-Based Distributions:

- Fedora 37
- Fedora 38

[Hash](https://repo.nimiq.com/rpm/stable/x86_64/nimiq-1.6.2-1.x86_64.rpm.sha256sum) - [Signature](https://repo.nimiq.com/rpm/stable/x86_64/nimiq-1.6.2-1.x86_64.rpm.asc) - [Signing Key](https://www.nimiq.com/nimiq-signing-key.pub)

## Windows

[Download]()

Double click the downloaded MSI file ([`nimiq-v*.x64.msi`](https://repo.nimiq.com/win/x64/nimiq-v1.6.2-1.x64.msi)) and follow the instructions during the installation process.

For Microsoft Windows operating systems

- Windows 10
- Windows 11

[Hash](https://repo.nimiq.com/win/x64/nimiq-v1.6.2-1.x64.msi.sha256sum) - [Signature](https://repo.nimiq.com/win/x64/nimiq-v1.6.2-1.x64.msi.asc) - [Signing Key](https://www.nimiq.com/nimiq-signing-key.pub)

## Configuration

::: warning
To run a Nimiq Full Node and receive connections from other peers you need a valid domain name and SSL certificate.
:::

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

### Windows

Start the Nimiq Application from the Windows Start Menu. If the miner is enabled in the configuration file, mining will start automatically.
