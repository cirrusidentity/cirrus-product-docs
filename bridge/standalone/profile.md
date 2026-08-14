---
title: Create Authentication Profile
description: Integrate any SAML authentication provider.
---

Standalone Bridge supports a single authentication profile, which is equivalent to an application integration in your SAML authentication provider.

:::info Definition
An authentication profile includes a NameID format and value, set of attributes, and signing & encryption settings. A typical implementation will include a default profile for SAML and one for CAS. Additional profiles can be created if required.
:::

## Create SAML Application

:::steps
1. Launch the admin UI for your primary authentication provider.
   Create a new SAML Application called "Cirrus Default Bridge".
2. Export the SAML metadata from that application.
   This metadata will be provided to your implementation lead.
:::

Your implementation lead will provide you with any metadata or values needed to complete the trust relationship for the application in your primary authentication provider.

## Configure Attribute Release

Next, we will configure attributes for the application.

### Default Profile: Research & Scholarship Attributes 

To meet the REFEDS research & scholarship entity category requirements used by InCommon, you must configure the following attributes. We typically recommend you configure them on the default application.

| Attribute (friendlyName) | OID | Typical Value |
|---|---|---|
| Surname (sn) | urn:oid:2.5.4.4 | Last Name |
| Given Name (givenName) | urn:oid:2.5.4.42 | First Name |
| Display Name (displayName) | urn:oid:2.16.840.1.113730.3.1.241 | Display Name |
| Email address (mail) | urn:oid:0.9.2342.19200300.100.1.3 | Email Address |
| eduPersonPrincipalName* | urn:oid:1.3.6.1.4.1.5923.1.1.1.6 | Username |

### Asserting MFA

For the REFEDS MFA context, your institution can assert that MFA is required for all users by sending a custom attribute:

- **Name**: `cirrus.rule.authnContext`
- **Value**: `https://refeds.org/profile/mfa`
