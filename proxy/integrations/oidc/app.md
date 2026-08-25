---
title: OIDC Applications
description: Add or edit OIDC app configuration for Proxy.
---

To request a new OIDC application, or modify an existing registration, please [submit a support ticket](https://cirrusidentity.freshdesk.com/) with your desired client configuration.

## Registration Details

1. Client Name (e.g. "FinAid Dashboard")
2. Client Description (e.g. "Management console for financial aid resources.")
3. Technical Contact (Person authorized to securely receive credential information)
4. OIDC Scopes (Supported: `openid`, `email`, `profile`)
5. Confidential Client? (Yes/No) 
6. Allowed Origins (For non-confidential clients: domains permitted to interact with this registration)
7. Redirect URIs (Where Proxy may send user after successful sign-in)
8. Post-Logout Redirect URIs (Optional)

### Important Notes

- "Confidential" refers to an application capable of securing client secrets, like a traditional server-side application. Javascript-based (also called "SPA" or "Single Page Apps") are not considered confidential.
- Post-Logout Redirect URIs are a list of URLs where Proxy may send the user after logout. 
- If your application opts to perform OIDC logout via the `end_session_endpoint` URL (located in the `.well-known` metadata) you may provide a value from this list in the `post_logout_redirect_uri` parameter.

:::info
If this is a new registration, Cirrus will securely provide credentials to the named technical contact outside of the support ticket. The technical contact will need both this client credential as well as the `.well-known` configuration file to integrate the application to use the Cirrus Proxy for authentication.
:::
