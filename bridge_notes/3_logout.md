---
title: Handling Logout
description: Notes on logout for Cirrus Bridge.
---

Authenticated users that sign out of Cirrus Enterprise Bridge are also sent to their authentication provider to sign out, and are not returned to their initial application.

## Applications Initiating Logout

Bridge-integrated applications should perform local logout as appropriate (e.g., revoking local application sessions) before making a standard logout request to the Cirrus Bridge.

If an application sets its own session cookie, it is **not** revoked by initiating a logout request to Bridge.

### SAML Applications

SAML applications can initiate a SAML `LogoutRequest` to any of the following supported endpoints:

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

### CAS Applications

CAS applications can initiate a CAS `LogoutRequest` to either of the following supported endpoints:

:::tabs
::tab{title="Option 1"}
`$BRIDGE_URL/cas/logout`
::
::tab{title="Option 2"}
`$BRIDGE_URL/idp/profile/cas/logout`
::
:::

## Expected Behavior For Enterprise Bridge

Once Cirrus Bridge receives the logout request from the application, it will terminate its own session and then send a logout request to the upstream authentication provider. Behavior of logout by the upstream provider may vary slightly depending on your upstream provider's settings. 

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

If an application makes a logout request to Bridge for a user who does not have an active authentication session, the user will either be shown a message saying they have been signed out, or are returned to the application making the logout request.
