---
title: Trusting Authentication Providers
description: Setting up Slate to trust Proxy.
---

Integrating authentication providers is a core component of Proxy setup. This process involves configuring both the applicant system (Slate) and the campus authentication provider to communicate effectively with Proxy.

## Slate Configuration

Slate administrators are sometimes unfamiliar with configuring Slate as an authentication provider using CAS protocol. A dedicated configuration working session with Customer Success is highly recommended to walk through the setup and validate the connection.

### Key Configuration Within Slate

- **Allowed Service Domains List**: This must be configured to match the value found under Service Domain in the Configure Provider section of the Cirrus Console.
- **Service CAS Use ID**: The value assigned here will be passed as `cas:user` in the assertion from Slate to the Slate Proxy Connector. This is often critical for downstream application authorization.
- **Service CAS Attributes**: These are the attributes passed from Slate to the Slate Proxy Connector. It is best to align these with the requirements identified during the attribute mapping exercise.

## Incommon Authentication Provider Integration

When integrating with a campus authentication provider (such as Entra ID, Okta, or Duo) via InCommon, trust must be established between the Proxy and the customer’s authentication provider.

### Establishing Trust

The authentication provider usually will not automatically have access to the Proxy metadata. Customer Success will provide the Proxy (SP) metadata to the customer.

:::note
If your campus authentication provider uses a Cirrus Bridge registered in InCommon, the Proxy must be added as a bilaterally integrated SAML application to the Bridge. Customer Sucess will assist with this.
:::
