---
title: Create Identity
description: How to create an identity record.
---

You can create an identity using two primary methods: 

- Manually using [IDAdmin](https://idadmin.cirrusidentity.com)
- Writing code using the [Identities API](../../identities-api.html)

:::tip
If you don't yet have access to IDAdmin, you'll need to contact one of your institution's organizational administrators.
:::

## Using IDAdmin

:::steps
1. Sign into IDAdmin.
   You can access it at [idadmin.cirrusidentity.com](https://idadmin.cirrusidentity.com).
2. Click on the menu icon at the upper left.
   This should open a panel of menu items.
3. Choose "Add New".
   This is under "Identities".
4. Enter the three required attributes (Given Name, Surname, Email).
   You'll need to decide whether to provision an OrgBrandedID account.
:::


## Using The API

If using the Identities API, send a `POST` request to the "Create Identity" endpoint. Refer to the [Identities API documentation](../../identities-api.html) for details.
