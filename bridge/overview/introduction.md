---
title: Introduction
description: What is Cirrus Bridge?
---

Cirrus Bridge makes it easy to use your modern authentication provider, like Entra ID or Okta, in a federation (such as with [InCommon](https://incommon.org)) or finally migrate your legacy applications to them. Cirrus Bridge is implemented between your organization’s primary provider (any SAML-supporting IdP) and SAML or CAS-enabled applications.

<img src="https://i.imgur.com/7di1FyY.png" width="600em" />

## Types of Bridges

**Enterprise Bridge**: If your primary authentication provider is Entra ID, Okta, or Duo SSO, this provides greater control over configuration, managing security controls in a central, authoritative source via an API integration with that provider.

**Standalone Bridge**: Available with any SAML-based identity provider that can generate metadata, such as Google, Ping, or RapidSSO. It does not require that you grant API access. However, it does require application behavior configuration be done using Cirrus Console.

## DNS Add-On: The Trust Triad

The DNS Add-On for Cirrus Bridge supports migrating authentication from an existing SAML or CAS deployment (such as Shibboleth or Apereo CAS) to the Cirrus Bridge without changes to the configured applications (including federated apps).

:::steps
1. TLS Handshake (Public Web Certificate)
   When you change your DNS to point sso.university.edu to Cirrus (CNAME), the Bridge needs a valid TLS certificate for that domain name. Without this, users would see a "Not Secure" warning in their browser immediately upon redirection.
2. Enterprise Validation (SAML Signing Certificate: Public Key)
   The Bridge acts as a service provider to your enterprise authentication provider. When the authentication provider sends a "Login Success" package, it signs it. The Bridge uses this certificate to verify the package hasn't been tampered with before processing it.
3. Legacy Signing (SAML Signing Certificate: Private Key)
   You export the private signing key from your retiring IdP (e.g. Shibboleth) and upload it to the Bridge. When the Bridge sends the final package to the integrated application, it signs it with this key. The application sees the same URL (via DNS) and the same signature (via this key), so it accepts the login without needing any updates.
:::

:::tip
In the case of TLS, Cirrus takes over the management of the TLS certificate for your Bridge's CNAME. We ask you to perform domain validation so that our infrastructure in AWS can issue the certificate and automatically manage renewal.
:::

## Authentication Flow Diagram

Bridge with DNS Add-On relies on a "chain of trust" where the Bridge acts as translator between the old environment (application expectations) and the new environment (your enterprise authentication provider, such as Entra ID).

<img src="https://i.imgur.com/GtKUTUl.png" width="600em" />
