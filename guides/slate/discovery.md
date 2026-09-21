---
title: Discovery & Attribute Mapping
description: Map your attributes first to ensure smooth integration.
---

Attribute mapping is critical for ensuring that downstream applications receive the correct user data for authorization.

## Key Concepts

- Proxy can: Assign new names to attribute values, perform transformations, and assign values & formats to a NameID.
- Proxy cannot: Add new data. All attribute values must originate from the authentication providers.

## Discovery Process

You'll need to identify all attributes required for downstream applications (whether they use CAS, SAML, or OIDC) early in the process. Verify that this data exists within your integrated authentication providers to prevent delays.

|     |     |
| --- | --- |
| **Application Type** | **Attribute Requirements** |
| SAML | Requires specific attribute names and a defined NameID format/value. The Proxy defaults to a transient NameID, but many applications require an explicit override (e.g., mapping to an email address or persistent ID). |
| CAS | Always requires a user identifier expected as cas:user. Additional attributes may be required for authorization, which must be identified and verified. |
| OIDC | Requests scopes (short-hand for bundles of attributes), such as `profile`. While less common in current implementations, authentication providers must still be verified to ensure they send data needed to support these. |

### Mapping Templates

To streamline the implementation process, you should complete a mapping template for each application. This exercise helps identify discrepancies early, such as an authentication provider releasing email when the application expects something like `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`.

#### Example Mapping Structure

|     |     |
| --- | --- |
| **Expectation** | **Example** |
| Application Name & Protocol | Dashboard - SAML |
| Required Application Attributes | The exact names expected by the app. |
| Authentication Provider Source Attribute | The name of the attribute as released by the authentication provider. |
| Transformation Required | Rename, NameID Override, etc. |

Next, Customer Success will help you configure your authentication providers with Proxy and edit your Proxy's end-user interface.
