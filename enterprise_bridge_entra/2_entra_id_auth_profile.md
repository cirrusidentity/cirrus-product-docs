---
title: Authentication Profile
description: Creating an authentication profile to integrate Bridge.
---

Each unique authentication profile is equivalent to its own Entra ID [Enterprise Application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal).

:::info Definition
An authentication profile includes a NameID format and value, set of attributes, and signing & encryption settings. A typical implementation will include a default profile for SAML and one for CAS. Additional profiles can be created if required.
:::

Your Cirrus Implementation Lead will work with you to develop additional profiles & provide support for configuration. 

## Creating An Enterprise Application

:::steps
1. Sign into the [Entra ID portal](https://entra.microsoft.com).
   Choose “Enterprise Applications” in the menu, then click “New Application”.
2. Search for “Cirrus Identity”.
   Select the “Cirrus Identity Bridge for Microsoft Entra ID” gallery app.
3. Choose a name for your application. 
   For the default application, we recommend “Cirrus Default Bridge”. 
:::

:::tip
For other InCommon applications, select a name that fits your naming conventions and the purpose of the application.
:::

### Application Visibility and Assignment

By default, Cirrus recommends that you set **Assignment Required** and **Application Visibility** to "No". 

However, if your institution’s security policies require assignment, then setting **Assignment Required** to "Yes" and add the appropriate settings under "Users and Groups".

### Set Up Single Sign-On

:::steps
1. Select ‘Single Sign-On’ from the left menu, and then select the SAML option.
2. Edit the Basic SAML Configuration.
3. Enter the Identifier (Entity ID) and Reply URL (Assertions Consumer Service URL) as provided by your Implementation Lead.
:::

### Configure Claims

Next, the attributes will be configured. Entra ID calls them claims. Entra ID also allows you to perform transformations to your attributes. Please refer to the list you created from the Authentication Profiles for Cirrus Bridge page to configure these attributes.

:::steps
1. Navigate to the claims UI.
2. Use the attribute profile you built to configure your list of attributes.
:::

### Asserting MFA

If you are using Entra ID MFA, then the Cirrus Bridge will automatically assert the REFEDS MFA authncontext to downstream service providers.

If you are using another source for MFA, such as Duo, you may need to manually assert MFA since Entra ID may not signal to the Bridge that MFA was performed for users.

In this case, add an additional attribute with the following name and value, 

- **Name**: cirrus.rule.authnContext
- **Value**: https://refeds.org/profile/mfa

:::note
By adding this attribute, you are asserting that all users that use this application have performed MFA.
:::

### Signing Settings

Entra ID signs both the SAML response & assertion. Some applications may only want one or the other signed. 

Our recommendation for the default application is to only sign the response. This configuration will match Shibboleth’s default behavior.

### Encryption Settings (Optional)

Customers moving from Shibboleth likely have a default policy to encrypt all assertions. 

To enable this, navigate to the “Token Encryption” menu, import the certificate for the Cirrus Bridge, and then activate the certificate. It can take several minutes for Entra ID to start encrypting assertions.
