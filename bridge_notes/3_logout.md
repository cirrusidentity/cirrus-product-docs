---
title: Logout Behavior
description: Notes on logout behavior for Cirrus Bridge.
---

Authenticated users that sign out of Cirrus Enterprise Bridge are also sent to their authentication provider to sign out, and are not returned to their initial application.

## Expected Behavior From Application Requesting Logout

The application integrated with Cirrus Bridge must send a correctly-constructed logout request via the SAML or CAS protocol to Cirrus Bridge in order to initiate the process.

If an app sets its own session cookie, it is **not** revoked by initiating a logout request to Bridge.

### Bridge SAML Logout Endpoints

:::tabs
::tab{title="Option 1"}
`$BRIDGE_URL/saml2/idp/SingleLogoutService.php`
::
::tab{title="Option 2"}
`$BRIDGE_URL/idp/profile/SAML2/Redirect/SLO`
::
::tab{title="Option 3"}
`$BRIDGE_URL/idp/profile/SAML2/POST/SLO`
::
:::

### Bridge CAS Logout Endpoints

:::tabs
::tab{title="Option 1"}
`$BRIDGE_URL/cas/logout`
::
::tab{title="Option 2"}
`$BRIDGE_URL/idp/profile/cas/logout`
::
:::

## Expected Behavior For Enterprise Bridge

Once Cirrus Bridge receives the logout request from the application, it will terminate its own session and then send a logout request to the upstream authentication provider. Behavior of logout by the upstream provider may vary slightly depending on your integrated provider's settings. 

:::info
If an application is integrated with Bridge via multi-lateral federation (i.e. metadata exchange facilitated by InCommon or another federation), you **must publish the Bridge's SLO endpoint** to your federation metadata for the app to be able to correctly initiate logout.
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
