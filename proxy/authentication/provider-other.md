---
title: Other Configuration
description: Adjust Proxy behavior for specific scenarios.
---

## Discovery Bypass

In some situations, your application may already know the upstream authentication provider that Proxy should use, and you want the user to bypass the discovery normally performed. 

To do so, we will construct a URL for the Proxy that contains the following information:

1. The application's Entity ID
2. Relay State (the path on the app side where a user should end up after authenticating)
3. The upstream authentication provider's EntityID

Once these parameters have been [URL encoded](https://www.samltool.com/url.php), they will be [query parameters](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Query) for the `HTTP-Redirect` binding URL for the Proxy. 

### URL Construction

Final construction will look like this:

:::code-group
``` title="Constructed URL Example"
$bindingUrl?spentityid=$SPEntityID&RelayState=$RelayState&IDPList=$IdpEntityID
```
:::

Sending a user to the below example will tell a Cirrus proxy to use Google as the upstream authentication provider and return the user to a Cirrus test application which will display some attributes.

:::code-group
``` title="Live Constructed URL"
https://support.proxy.cirrusidentity.com/saml2/idp/SSOService.php?spentityid=https%3A%2F%2Fstandard.monitor.cirrusidentity.com&RelayState=%2Fmodule.php%2Fcore%2Fauthenticate.php%3Fas%3Dmonitor-standard&IDPList=https%3A%2F%2Fgoogle.cirrusidentity.com%2Fgateway
```
:::

## Scope Checking

In a federation, each authentication provider has certain scopes that it can use when asserting user attributes to avoid name collisions. 

For example, if two authentication providers had a user called "John" they would need a way to distinguish which "John" is from which provider. Using scoping, the first provider can assert the identifier as **john@orgA.com** and the second as **john@orgB.com**, where orgA and orgB are the domain names for the organizations associated with each provider.

:::tip
All of these scope checking features are configurable upon request. Changing defaults requires a support ticket.
:::

### Exact Scope Checking

The Proxy will check that the scope asserted from an authentication provider matches the allowed scope for the authentication provider. If a provider asserts a scope that it is not allowed, Proxy will remove that assertion.

This is enabled by default for these attributes: 

- eduPersonPrincipalName
- eduPersonScopedAffilitation

### Ends With Scope Checking

In some scenarios, an application uses email address as its internal identifier; Proxy can perform scope checking on the email address. In some organizations, the user's email addresses may contain subdomains. "Example University" may have a scope of `example.edu` but email address domains like `org.example.edu`. 

If enabled, this feature performs scope checking by ensuring the scope ends with the appropriate domain.

### Ignore Scope Checking

If you intend to use an authentication provider that does not have a fixed scope, you may opt to disable scope checking for that provider. For example, Google provides email for many enterprises. If you use Google via the Cirrus Gateway as a provider **and** use email address for `eduPersonPrincipalName` then that provider may assert a scope for any business that uses Google for email.

In this example, you would likely want to disable scope checking for that provider, and continue checking other providers. 

:::tip
Because of this common issue, ignoring scope checking is enabled by default for Cirrus Gateway providers which provide email service for multiple domains.
:::

### Scope Rewrite

Your use case may require you to re-write the scope of certain attributes. This feature has Proxy change scoped attributes in one of two ways:

1. Change scope: A scoped value of student@example.edu will be changed to student@newscope.com.
2. Change scope and de-scoped value: A scoped value of `user@example.edu` will be changed to `user+example.edu@newscope.com`. This is useful when you want to preserve the old scope in some fashion during the rewrite.

The changed scope is configurable upon request.

:::info
This feature is disabled by default. If enabled, it can be applied to specific attributes, to specific scopes, or to a combination of the two.
:::
