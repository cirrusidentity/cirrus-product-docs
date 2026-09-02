---
title: Register Proxy With InCommon
description: How to register your Cirrus Proxy with the federation.
---

## Requirements

To register the Cirrus Proxy as an InCommon Service Provider, you will need:

- Access to [InCommon Federation Manager](https://service1.internet2.edu/siteadmin/) as a “Site Administrator” (SA)
- Parameters specific to your organization’s Cirrus Proxy deployment
- Contact, policy, & branding information for your organization

:::tip
To get access to Federation Manager, follow the **[Federation Manager Guide](https://spaces.at.internet2.edu/display/federation/federation-manager-requirements)**.
:::

### Cirrus Proxy Parameters for InCommon Registration

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| Entity ID | The unique ID for the service provider. It must be in your domain. |
| ACS URL | The Proxy uses only POST binding: `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` |
| Discovery Response URL | Redirects users to the appropriate service or login endpoint: `https://$TENANT.proxy.cirrusidentity.com/module.php/saml/sp/discoresp.php` |
| Certificate | The certificate Proxy will use with assertions: `https://$TENANT.proxy.cirrusidentity.com/module.php/saml/idp/certs.php/idp.crt` |

### Contact, Policy, & Branding

Before registering, the Site Administrator should also have the following information ready:

|     |     |     |
| --- | --- | --- |
| **Setting** | **Example** | **Description** |
| Contacts | Administrative: alice@example.edu<br>Technical: iam@example.edu<br>Security: iso@example.edu | Contacts for the service provider. All should be for your organization. |
| Display Name | “Example University App” | The display name for the service provider. |
| Description | An application for Example University. | A short description for the service provider. |
| Information URL | https://www.example.edu | Required if your service is a part of the REFEDS Research & Scholarship entity category. |
| Privacy URL | https://www.example.edu/privacy | A link to a privacy policy that covers the identities asserted by your organization. |
| Logo | https://branding.example.edu/logo.png | An organizational logo hosted on a website & directly available from a URL (redirects are not supported by InCommon). Cirrus Proxy does not support hosting a logo. |
| Assert R&S Support | N/A | Cirrus recommends asserting R&S support if applicable. See [Declare R&S Support](https://spaces.at.internet2.edu/spaces/federation/pages/168691940/Service+provider+-+apply+for+Research+and+Scholarship+category) for details. |
| Assert SIRTFI Compliance | N/A | The provder cannot be registered without SIRTFI compliance. See [Declare SIRTFI Compliance](https://spaces.at.internet2.edu/display/federation/Declare+Sirtfi+compliance) for details. |
| Export Metadata | N/A | Cirrus recommends exporting metadata to eduGAIN. See [Metadata Export Options](https://spaces.at.internet2.edu/display/federation/saml-metadata-export-options) for details. |
