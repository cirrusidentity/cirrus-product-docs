---
title: SAML Applications
description: Add or edit SAML app configuration for Bridge & Proxy.
---

Each SAML Application represents an integration between your tenant and an application (sometimes called "Service Provider", or "SP") that uses SAML for authentication.

SAML Applications are configured using metadata, which is provided by the application owner. This metadata defines how the application and your tenant communicate and trust one another, including details such as the application’s Entity ID, Assertion Consumer Service (ACS) URL, supported bindings, & certificates used to secure authentication responses.

Each SAML application is managed independently. Changes affect only that specific integration, and determine how authentication is processed for the associated application.

:::warning
Use caution when modifying metadata. Changes are immediately applied to the tenant & may disrupt authentication if configuration is incorrect. We recommend saving a copy of existing metadata before making changes.
:::

## Add SAML Application To Bridge Or Proxy

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index). 
   Once signed in, select the gear next to the tenant you want to update.
2. Scroll to the “Applications” section. 
   You will be able to adjust your view to only your SAML applications.
3. Use the “+ Add SAML Application” option under “Configuration”.
   Select the appropriate metadata source (Remote or Managed by Cirrus).
4. Provide the required metadata.
   Once finished, save your configuration.
:::

## Configure Application To Trust Bridge Or Proxy

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index). 
   Once signed in, select the gear next to the tenant you want to view.
2. Use the “Configure Application” option under “Configuration”.
   This will open a view of SAML configuration details for your tenant.
3. Save these values for use with your application.
   Apply the values in your app's configuration, or pass it the Bridge/Proxy metadata URL.
:::

:::note
The available configuration options for SAML application metadata vary by tenant type. Depending on the tenant you are managing, your view may include different configuration settings than those in this guide.
:::
