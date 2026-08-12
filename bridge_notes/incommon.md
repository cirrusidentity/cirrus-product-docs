---
title: Register Bridge With InCommon
description: How to register your Cirrus Bridge with the federation.
---

## Requirements

To register the Cirrus Bridge as an InCommon Identity Provider, you will need:

- Access to [InCommon Federation Manager](https://service1.internet2.edu/siteadmin/) as a “Site Administrator” (SA)
- Parameters specific to your organization’s Cirrus Bridge deployment
- Contact, policy, & branding information for your organization

:::tip
To get access to Federation Manager, follow the **[Federation Manager Guide](https://spaces.at.internet2.edu/display/federation/federation-manager-requirements)**.
:::

For those organizations that have previously registered with InCommon, it is generally recommended that you update your IdP instead of registering a new one. Changing your Entity ID with InCommon can be very disruptive.

### Cirrus Bridge Parameters for InCommon Registration

Once the Cirrus Bridge instance is provisioned, Cirrus will provide parameters to register the identity provider with InCommon.

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| EntityID | The unique ID for the identity provider. It must be in your domain. |
| Attribute Scope | Generally the root domain for the organization. |
| SAML SSO Binding Endpoint | The Bridge supports both HTTP-Redirect and HTTP-POST for performing SSO. |
| SAML SLO Binding Endpoint | The Bridge supports advertising a single-logout endpoint, but SLO must also be configured between the source authentication provider and the Bridge. |
| Certificate | The certificate Bridge will use to sign and encrypt assertions. |
| Error URL | The errorURL can either be the default page provided by Cirrus Bridge, or a static URL hosted by the organization. |

:::tip
The default error URL provided by the Cirrus Bridge supports the basic functionality specified by [REFEDS](https://refeds.org/specifications/errorurl-v1).
:::

### Contact, Policy, and Branding

Before registering, the Site Administrator should also have the following information ready:

|     |     |     |
| --- | --- | --- |
| **Setting** | **Example** | **Description** |
| Contacts | Administrative: alice@example.edu<br>Technical: iam@example.edu<br>Security: iso@example.edu | Contacts for the identity provider. All should be for your organization. |
| Display Name | “Example University” | The display name for the identity provider. |
| Description | The main identity provider for Example University. | A short description for the identity provider. |
| Information URL | https://www.example.edu | A link to provide information about the Identity Provider. Many organizations will use their primary website. |
| Privacy URL | https://www.example.edu/privacy | A link to a privacy policy that covers the identities asserted by your organization. |
| Logo | https://branding.example.edu/logo.png | An organizational logo hosted on a website & directly available from a URL (redirects are not supported by InCommon). Cirrus Bridge does not support hosting a logo. |
| Assert R&S Support | Check Box | Cirrus recommends asserting R&S support. See [Declare R&S Support](https://spaces.at.internet2.edu/display/federation/Declare+R+and+S+support+for+an+identity+provider) for details. |
| Assert SIRTFI Compliance | Check Box | The provder cannot be registered without SIRTFI compliance. See [Declare SIRTFI Compliance](https://spaces.at.internet2.edu/display/federation/Declare+Sirtfi+compliance) for details. |
| Export Metadata | Check Box | Cirrus recommends exporting metadata to eduGAIN. See [Metadata Export Options](https://spaces.at.internet2.edu/display/federation/saml-metadata-export-options) for details. |

## Registration Process

After logging into Federation Manager, you should see a button to add an identity provider.

This will start a wizard that will ask you for the values needed to register (noted above). Many of these values are required as set by [InCommon Baseline Requirements](https://www.incommon.org/federation/baseline/).

### Submission

Once all data has been entered, review & submit your registration to InCommon. 

Depending on the time of day the submission takes place, the metadata will be published by InCommon within 24 to 72 business hours. It can take an additional 24 to 48 hours for metadata to propagate to applications reliant on the global eduGAIN metadata service. 

See [Metadata Service](https://spaces.at.internet2.edu/display/federation/Metadata+Service) for the latest information on the submission & publishing process.
