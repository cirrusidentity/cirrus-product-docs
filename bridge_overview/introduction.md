---
title: Introduction
description: What is Cirrus Bridge?
---

Cirrus Bridge makes it easy to use your modern authentication provider, like Entra ID or Okta, in a federation (such as with [InCommon](https://incommon.org)) or finally migrate your legacy applications to them. Cirrus Bridge is implemented between your organization’s primary provider (any SAML-supporting IdP) and SAML or CAS-enabled applications.

<img src="https://i.imgur.com/8L3GOMI.png" width="400em" />

## Types of Bridges

**Enterprise Bridge**: If your primary identity provider is Entra ID, Okta, or Duo SSO, this provides greater control over configuration, including what attributes are released to the Bridge for different applications.

**Standalone Bridge**: Available with any SAML-based identity provider that can generate metadata, such as Google, Ping, or RapidSSO. It does not require that you grant API access, but attribute release configuration on a per-app basis is not self-service.
