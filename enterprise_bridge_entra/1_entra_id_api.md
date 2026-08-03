---
title: Entra ID API Access
description: How to grant read-only permissions.
---

## Readying Your Entra ID Tenant

First, we'll set up Entra ID to allow the Bridge to read configuration **only** from Entra ID "Enterprise Applications".

### Confirm Your Tenant ID

:::steps
1. Locate Entra ID Portal
   You can access it at [entra.microsoft.com](https://entra.microsoft.com).
2. Find Your Tenant ID
   Your tenant ID should be listed in the top left corner of the main panel view, underneath the institution name.
:::

### Grant API Access

Next, we'll grant Cirrus Bridge read-only access to your configured Entra ID applications by having an Entra ID admin visit this URL:

:::note
You must be a **Global Administrator** in Entra ID for this step. **$TENANT_ID** should be replaced with your tenant ID.
:::

:::code-group
``` title="Consent URL"
https://login.microsoftonline.com/$TENANT_ID/adminconsent?client_id=ea71bc49-6159-422d-84d5-6c29d7287974&state=12345&redirect_uri=https://admin.cirrusidentity.com/azure-registration
```
:::

### Notify Implementation Lead

Once these steps are completed, notify your Cirrus Implementation Lead that the API access has been granted and provide your Entra ID tenant ID.
