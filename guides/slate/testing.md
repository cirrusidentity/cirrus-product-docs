---
title: Integrate & Test Applications
description: Test your Slate login with Proxy-integrated apps.
---

Integrating applications is done in a standard way for all Proxy implementations using the Cirrus Console, and thorough testing is critical to a successful implementation.

|     |     |
| --- | --- |
| **Protocol** | **Setup Guide** |
| SAML | [Integrate SAML App](../../proxy/integrations/saml/app.md) |
| CAS | [Integrate CAS App](../../proxy/integrations/cas/app.md) |
| OIDC | [Integrate OIDC App](../../proxy/integrations/oidc/app.md) |

## Testing Integration Points

:::steps
1. Slate to Slate Proxy Connector
   Use the test endpoint in the Cirrus Console to view released attributes.
2. Slate Proxy Connector to Proxy
   Use the Test Authentication link in the Proxy tenant.
3. InCommon provider to Proxy
   Use the Test Authentication link in the Proxy tenant.
4. Proxy to Applications
   Use a SAML trace (SAML) or specific service URLs (CAS) to verify attribute release.
5. End-to-End User Test
   Validate both authentication & authorization within an application using real user scenarios.
:::

:::tip
Slate does not release attributes for applicants without an active admissions application. Ensure all test users have an active application in Slate; otherwise, the integration may appear to fail.
:::
