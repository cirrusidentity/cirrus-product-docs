---
title: Duo Authentication Profiles
description: Creating an authentication profile to integrate Bridge.
---

Each unique authentication profile is equivalent to its own [Duo application](https://duo.com/docs/protecting-applications).

Your Cirrus Implementation Lead will work with you to develop additional profiles & provide support for configuration.

:::info Definition
An authentication profile includes a NameID format and value, set of attributes, and signing & encryption settings. A typical implementation will include a default profile for SAML and one for CAS. Additional profiles can be created if required.
:::

## Creating A Duo Application

:::steps
1. Log in to Duo SSO Admin & then to Applications.
   Select type "Generic SAML Service Provider - Single Sign-On".
2. Choose a name for your application. 
   For the default application, we recommend "Cirrus Default Bridge". 
3. Configure the app settings. Metadata Discovery should be set to "None (Manual Input)".
   Set the "Entity ID" & "Assertion Consumer Service URL" provided by your implementation lead.
:::

:::warning
While the default application can support multiple Entity IDs, Duo only allows a single Entity ID or Entity category per application for additional applications.
:::

## Configure Attribute Release

Next, we will configure attributes for the application.

### Default Profile: Research & Scholarship Attributes 

To meet the REFEDS research & scholarship entity category requirements used by InCommon, you must configure the following attributes. We typically recommend you configure them on the default application.

| Attribute (friendlyName) | OID | Duo Value |
|---|---|---|
| Surname (sn) | urn:oid:2.5.4.4 | Last Name |
| Given Name (givenName) | urn:oid:2.5.4.42 | First Name |
| Display Name (displayName) | urn:oid:2.16.840.1.113730.3.1.241 | Display Name |
| Email address (mail) | urn:oid:0.9.2342.19200300.100.1.3 | Email Address |
| eduPersonPrincipalName | urn:oid:1.3.6.1.4.1.5923.1.1.1.6 | Username |

:::tip
For additional authentication profiles (Duo Applications), use the Entity ID(s) or entity category URL for those application(s) and **use the ACS URL from the default profile**.
:::

### Asserting MFA

For the REFEDS MFA context, your institution can assert that MFA is required for all users by sending a custom attribute:

- **Name**: `cirrus.rule.authnContext`
- **Value**: `https://refeds.org/profile/mfa`

## Optional Settings

The Policy, Global Policy, and Settings sections may be filled out per your institution’s security and compliance policies. They affect the user experience when logging into Duo and are up to customers to implement as they see fit.
