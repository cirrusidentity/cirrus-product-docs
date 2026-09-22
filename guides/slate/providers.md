---
title: Trusting Authentication Providers
description: Setting up trust between Proxy, Providers, & Slate.
---

Integrating authentication providers is a core component of Proxy setup. This process involves configuring both the applicant system (Slate) and the campus authentication provider to communicate effectively with Proxy.

## InCommon Authentication Provider Integration

When integrating with a campus authentication provider (such as Entra ID, Okta, or Duo) via InCommon, trust must be established between the Proxy and the customer’s authentication provider.

### Establishing Trust

The authentication provider usually will not automatically have access to the Proxy metadata. Customer Success will provide the Proxy (SP) metadata to the you.

You will need to configure an application in your authentication provider to release to the Proxy all the attributes that are required for all your downstream applications; this list of attributes should be the result of your attribute mapping exercise.

## Slate Configuration

Slate administrators are sometimes unfamiliar with configuring Slate as an authentication provider using CAS protocol. A dedicated configuration working session with Customer Success is highly recommended to walk through the setup and validate the connection.

### Key Configuration Within Slate

- **Allowed Service Domains List**: This must be configured to match the value found under Service Domain in the Configure Provider section of the Cirrus Console.
- **Service CAS Use ID**: The value assigned here will be passed as `cas:user` in the assertion from Slate to the Slate Proxy Connector. This is often critical for downstream application authorization.
- **Service CAS Attributes**: These are the attributes passed from Slate to the Slate Proxy Connector. It is best to align these with the requirements identified during the attribute mapping exercise.

### A Note On Slate Dashboards

You may want your applicants to access applications from a Slate dashboard. _Only SAML applications can be accessed this way._ 

To do so, you can [create a bypass link](../../proxy/authentication/provider-other.md) for what's called "IdP-initiated" access.
