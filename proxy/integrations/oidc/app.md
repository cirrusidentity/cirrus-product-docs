---
title: OIDC Applications
description: Add or edit OIDC app configuration for Proxy.
---

Each OIDC integration is between your tenant and an application that uses OIDC for authentication.

Each one is managed independently. Changes affect only that specific integration, and determine how authentication is processed for the associated application.

:::warning
Use caution when modifying configuration. Updates are applied to the tenant as soon as possible & may disrupt authentication if configured incorrectly. We recommend saving a copy of existing configuration before making changes.
:::

## Add OIDC Application To Proxy

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index). 
   Once signed in, select the gear next to the tenant you want to update.
2. Scroll to the “Applications” section. 
   You will be able to adjust your view to only your OIDC applications.
3. Use the “+ Add OIDC Application” option under “Configuration”.
   You'll need a name, description, scopes, redirect URI's, etc.
4. Input the required configuration data.
   Once finished, save your configuration.
:::

:::tip
If this is a new registration, Cirrus will securely display credentials exactly _once_. You'll need the `.well-known` configuration file to integrate the application with Proxy for authentication.
:::

### Important Notes

- "Confidential" refers to an application capable of securing client secrets, like a traditional server-side application. Javascript-based (also called "SPA" or "Single Page Apps") are not considered confidential.
- OIDC supported scopes are: `openid`, `email`, `profile`.
- Post-Logout Redirect URIs are a list of URLs where Proxy may send the user after logout. 
- If your application opts to perform OIDC logout via the `end_session_endpoint` URL (located in the `.well-known` metadata) you may provide a value from this list in the `post_logout_redirect_uri` parameter.
