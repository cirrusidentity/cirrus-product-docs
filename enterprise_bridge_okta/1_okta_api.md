---
title: API Access
description: How to grant read-only permissions.
---

## Readying Your Okta Tenant

:::note
You must be an Okta Admin with access to the Okta Administrator interface.
:::

### Create A Group 

The Okta apps you want Cirrus Bridge to use must be assigned to a group. The Okta API will only engage with the Okta apps assigned to the group, filtering out the applications you don’t want to use with Cirrus.

:::steps
1. Create your first group.
   Choose a name like "Cirrus InCommon Applications".
2. Record the group’s unique ID, which can be found in the URL. 
   For example, the uniqueid associated with the group `https://dev-000000-admin.oktapreview.com/admin/group/00gz4dm9srbl1TuYu0h7` would be `00gz4dm9srbl1TuYu0h7`.
:::

### Create Service Account 

Okta API credentials must be assigned to a specific user, so we'll create a service account for the Cirrus Bridge. 

:::steps
1. In the Okta Admin interface, create a user with "Add Person". 
   Choose a name like “Cirrus Bridge Service”.
2. Add the required information for the account.
   When finished, click "Save".
3. Assign the service account a role.
   To limit permissions appropriately, choose “Read Only Administrator”.
:::

### Create API Credentials

Next you will create a set of credentials for the API. 

:::steps
1. Log in as the service account.
   Use the "person" you just created and sign into Okta.
2. Create an API token.
   This can be found under Security -> API -> Tokens.
:::

### Notify Implementation Lead

Once these steps are completed, notify your Cirrus Implementation Lead that the API access has been granted and provide the following:

- The Okta admin domain (e.g. `dev-000000-admin.oktapreview.com`)
- The unique ID of the group you created (e.g. `00gz4dm9srbl1TuYu0h7`)
- The API token you created

:::warning
Do not use email to communicate the token. There are several options to transfer the token to Cirrus securely; choose the option based on your organization’s security best practices.
:::
