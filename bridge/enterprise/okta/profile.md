---
title: Okta Authentication Profiles
description: Creating an authentication profile to integrate Bridge.
---

Each unique authentication profile is equivalent to its own [Okta application](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm).

Your Cirrus Implementation Lead will work with you to develop additional profiles & provide support for configuration.

:::info Definition
An authentication profile includes a NameID format and value, set of attributes, and signing & encryption settings. A typical implementation will include a default profile for SAML and one for CAS. Additional profiles can be created if required.
:::

## Creating An Okta Application

:::steps
1. Log in to Okta & navigate to Applications.
   Select "Create app integration" (SAML 2.0).
2. Choose a name for your application. 
   For the default application, we recommend "Cirrus Default Bridge". 
3. Configure SAML parameters.
   Set the "Single Sign On URL" & "Audience URI (SP Entity ID)" provided by your implementation lead.
4. Signing & Encryption Settings
   In Advanced Settings, we recommend the default application only sign the response to match default Shibboleth behavior.
:::

:::note
Set the Name ID format to "transient" for the default Bridge.
:::

## Configure Attribute Release

Next, we will configure attributes for the application.

### Default Profile: Research & Scholarship Attributes 

To meet the REFEDS research & scholarship entity category requirements used by InCommon, you must configure the following attributes. We typically recommend you configure them on the default application.

| Attribute (friendlyName) | OID | Okta Value |
|---|---|---|
| Surname (sn) | urn:oid:2.5.4.4 | user.lastName |
| Given Name (givenName) | urn:oid:2.5.4.42 | user.firstName |
| Display Name (displayName) | urn:oid:2.16.840.1.113730.3.1.241 | user.displayName |
| Email address (mail) | urn:oid:0.9.2342.19200300.100.1.3 | user.email |
| eduPersonPrincipalName* | urn:oid:1.3.6.1.4.1.5923.1.1.1.6 | user.login |

### Asserting MFA

Okta can signal to the Cirrus Bridge that MFA was used if you release the “session.amr” attribute to Cirrus. 

To do this, in Attribute Statements add the following attribute:

- **Name**: session.amr 
- **Format**: Unspecified
- **Value**: session.amr 

## Assign App to Okta Group

Add the new application to the group created during the API Access setup to make it active for the Bridge.
