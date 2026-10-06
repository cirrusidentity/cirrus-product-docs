---
title: Other Providers
description: Using non-federated authentication providers with Proxy.
---

A non-federated authentication provider is one which cannot be integrated using metadata from a [supported Cirrus federation](./federated.md). 

These providers can be organizations that are not eligible or otherwise able to participate in a supported federation, such as:

- Healthcare organizations attached to a higher education network
- Partner state agencies
- Customers of educational technology companies
- Certain research partner institutions

Alternatively, these can be providers from a Cirrus Gateway. Gateway enables support for public authentication providers like Apple, Google, Microsoft, and LinkedIn.

## Integrating Other Providers With Proxy Connectors

To integrate a non-federated private organizational provider, you must purchase a Proxy Connector. Each Connector supports a single integration with an authentication provider using the SAML protocol.

Please [contact Cirrus Customer Success](https://www.cirrusidentity.com/resources/support-center) for help setting up a Proxy Connector.

## Integrating Other Providers With Cirrus Gateway

Applications sometimes provide a way to enable sign-in from public authentication providers. These solutions tend to only work with a single application, but users rarely use a single application in an organization.

Cirrus Gateway is a solution for integrating many public authentication providers with any organization application or hosted service. Gateway must be used in conjunction with the Cirrus Proxy, and you must register your Gateway with each public provider. Registration generates API keys shared between the provider and Gateway.

Gateway currently supports the following public providers:

- Amazon
- Apple
- Google
- LinkedIn
- Microsoft
- ORCID

:::tip Before You Begin
You'll need to be an Org Admin within the Cirrus Console and have access to a registered developer account for each public provider to complete this integration.
:::

### Establish Shared API Key

For each provider, the following general steps will be required:

:::steps
1. Navigate to the provider developer console from the link provided in the Cirrus Console Shared API Key configuration.
   Define an application that corresponds to the Cirrus Gateway.
2. If needed, set permissions to access data. 
   For example, LinkedIn has separate permissions to release the email address.
3. If needed, establish your brand for the provider integration.
   This can include uploading a logo or providing a link to a privacy policy.
4. Create an API key with the associated secret.
   Copy those to the Cirrus Console Shared API Key configuration.
5. Set the Redirect URI provided in the Cirrus Console Shared API Key configuration.
:::
 
### Connect Your Proxy Tenant With Gateway

:::steps
1. Navigate to the relevant Cirrus Proxy tenant configuration.
   You can reach this from the list of Proxies on your dashboard.
2. Once you reach the Discovery Service, select “Gateway Service” from the menu on the left. 
   Enable the Cirrus Gateway from the Gateway Service page.
3. After enablement, configuration options for each of your chosen providers will display. 
   To configure each one, select them one at a time.
4. To configure each provider, click on the configuration item. Always select “Shared API Key” from the “API Setup Option”.
   Select a Shared API Key from the drop-down list (if you don't see one, first set one up).
5. Providers are automatically added to the authentication provider configuration for the Proxy tenant. 
   You should review the "Select Providers" configuration after adding or removing any Gateway providers.
:::
