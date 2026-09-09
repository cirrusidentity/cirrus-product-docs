---
title: API Access
description: Delegating credentials for the Identities API.
---

The Cirrus Identities API supports complex identity creation requests with safe and automatic rollback in the event that a component of a request cannot be fulfilled. This API grants access to manage user data persisted within Managed Identities.
 
## Create An API Credential

:::info
After you create the credential, it may take up to 15 minutes before it can be used.
:::

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index).
   Once signed in, select your organization from the list under “My Organizations”.
2. Select the “Cirrus API Access” menu item.
   Depending on your subscription, you may see more than one API listed. Select the "Identities API" option.
3. Choose “New Credential”.
   The description you enter will appear in the UI so that you can identify the credential.
4. Identify the permissions you would like the credential to have.
   There is a "test" & "prod" environment for Managed Identities; verify which environment you want the credential to have permission for.
5. Click "Create" and securely store your credential.
   After creation, you will not be able to access the password. Save it somewhere safe!
:::
