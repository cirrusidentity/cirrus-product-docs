---
title: Introduction
description: What is Cirrus Bridge?
---

Cirrus Bridge makes it easy to use your modern authentication provider, like Entra ID or Okta, in a federation (such as with [InCommon](https://incommon.org)) or finally migrate your legacy applications to them. Cirrus Bridge is implemented between your organization’s primary provider (any SAML-supporting IdP) and SAML or CAS-enabled applications.

<img src="https://i.imgur.com/7di1FyY.png" width="600em" />

## Types of Bridges

**Enterprise Bridge**: If your primary authentication provider is Entra ID, Okta, or Duo SSO, this provides greater control over configuration, managing security controls in a central, authoritative source via an API integration with that provider.

**Standalone Bridge**: Available with any SAML-based identity provider that can generate metadata, such as Google, Ping, or RapidSSO. It does not require that you grant API access. However, it does require application behavior configuration be done using Cirrus Console.
