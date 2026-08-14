---
title: Duo API Integration
description: How to grant read-only permissions.
---

## Readying Your Duo Tenant

:::note
You must be an Duo Administrator with the "Owner" role to complete these steps.
:::

### Create API Credentials

:::steps
1. In the Duo SSO Admin portal, create a new application.
   Choose the type "Admin API". 
2. Under Details, record the API information listed.
   You'll need all three entries.
3. Under Settings, name your application.
   Select only the "Read" checkbox under "Grant Resource".
:::

### Notify Implementation Lead

Once the previous steps are completed, notify your Cirrus Implementation Lead that the API access has been granted and securely provide the following information:

- Integration Key
- Secret Key
- API Hostname

:::warning
Do not use email to communicate the token. There are several options to transfer the token to Cirrus securely; choose the option based on your organization’s security best practices.
:::
