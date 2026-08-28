---
title: CAS Protocol Enablement
description: Configure authentication profiles for CAS.
---

:::info Enterprise Bridge Only
The instructions below **apply only to Enterprise Bridge**. Each unique CAS authentication profile is equivalent to its own application in your SAML authentication provider.
:::

## Default Profile (Required)

You must identify the matching attribute which will be sent with the name `cas:user` and the value in your primary authentication provider you prefer.

For example, `cas:user` may send the same value as eduPersonPrincipalName: `username@institution.edu`

Then, collect all of the CAS service URLs which will use the default attribute release and create an application in your authentication provider, using the steps in the relevant authentication profile setup instructions.

:::note
For the default CAS Bridge, you will be provided with the Entity ID by your implementation lead. It be in the format of `https://$BRIDGE_FQDN/cas-bridge`.
:::

## Additional Profiles (Optional)

In additional profiles, you must identify the matching attribute which will be sent with the name `cas:user` and the value in your primary authentication provider you prefer. Again, collect all of the CAS service URLs you expect to include in this profile. 

Entity IDs for addtional profiles should represent a grouping of CAS services with alternate attribute requirements.

Choose an Entity ID of the form `https://$BRIDGE_FQDN/cas-bridge/$APP_ID` where `$APP_ID` is a label meaningful to you (e.g. "Banner").
