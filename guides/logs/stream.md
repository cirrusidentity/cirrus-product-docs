---
title: Fetch Logs Via API
description: Using the Cirrus Log API.
---

The Cirrus Log API is a REST-based API that retrieves event logs that can be imported into an enterprise log management system, such as a SIEM tool. Event logs are stored for the last 90 days. The Log API will be enabled for you if it is included in your subscription package. 

Log API was designed to be a generic API targeted to teams who have the development capability to integrate with their SIEM provider. Cirrus does not provide any SIEM-specific documentation.

The [Log API reference](../../log-api.html) provides detailed information on the API endpoints.

:::tip Rate Limits
You may keep querying until the `nextToken` value in the response is the same as what you supplied in the request. At that point, we recommend a 5-minute wait before the next API call.
:::

If you would like a guided implementation with one of our technical implementation leads, contact us at support@cirrusidentity.com.
 
## Query Parameters

- `logType`: filter the response to show "authentication" (SAML) or "CAS" Bridge log data.
- `logSubtype`: "request" and "success" relate to SAML Bridge authentications. "login", "samlValidate", "serviceValidate", and "validate" refer to functions used for authentication in CAS.
- `tenant`: refers to different instances of a Cirrus product. For example, each Proxy is a single tenant.
- `service`: filter by a specific Cirrus product.
 
## Response Codes 

- **403**: Not authorized to access an organization
- **422**: Validation error, likely a malformed request
- **500**: Server-side error on a Cirrus product

## Other Definitions

- `timeStampISO`: Time of the event
- `sp`: Service provider (application) generating the request
- `user`: The user who is authenticating
- `attributes`: The attributes and values in the assertion
 
:::note Can I go back to a point in time?  
The initial starting point for requesting API data will be the nextToken you receive after making your first API GET request. You cannot pick a point in the past before you started using the API to poll log data.
:::
