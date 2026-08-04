---
title: Logout Behavior
description: Notes on logout behavior for Cirrus Bridge.
---

Authenticated users that sign out of Cirrus Enterprise Bridge are also sent to their authentication provider to sign out, and are not returned to their initial application.

## Expected Behavior For Enterprise Bridge

:::warning
Because the logout request from Bridge is sent to upstream authentication provider, no application-level sessions are terminated (i.e. if an app sets its own session cookie, it is not revoked by initiating a logout request to the Bridge).
:::

:::tabs
::tab{title="Entra ID"}
Entra ID users are sent to the primary tenant logout URL: `https://login.microsoftonline.com/$TENANT_ID/oauth2/logout`.
::
::tab{title="Okta"}
Okta users are sent to `https://$OKTA_TENANT/login/signout` to sign out. An Okta administrator [can configure Okta’s signout page](https://help.okta.com/oie/en-us/Content/Topics/Settings/settings-configure-sign-out.htm).
::
::tab{title="Duo"}
Duo users are sent to `https://$DUO_TENANT.duosecurity.com/saml2/sp/$APP_ID/slo`.
::
:::

Unauthenticated users either see a message saying they have been signed out, or are returned to the application making the sign out request.
