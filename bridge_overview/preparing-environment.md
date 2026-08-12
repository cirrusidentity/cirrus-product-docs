---
title: Getting Started
description: Preparing your authentication provider.
---

## Preparing Your Environment

To make sure you're ready to deploy Bridge, there are a few steps you can take right away.

### Gather Configuration Data

- Entity ID(s) for the applications you are configuring
- Preferred NameID format and value
- Attributes you want in assertions, including any defined transformation rules
- Information on how MFA is done for your institution 

### Prepare Existing Signing/Encryption Certificates

:::warning Heads Up!
Existing signing/encryption certificates can only be used with SAML protocol & DNS Add-On enabled.
:::

If you are porting over an existing configuration, please provide this information to your implementation lead using a secure mechanism, such as 1Password, Bitwarden, or another service.
