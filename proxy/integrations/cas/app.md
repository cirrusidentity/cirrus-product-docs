---
title: CAS Applications
description: Creating & modifying CAS configuration for Bridge & Proxy.
---

CAS Application patterns may be entered directly as a URL or as a regular expression. Regular expressions are preferred for organizations with many CAS applications, because they allow you to map many service URLs to a single pattern.

:::warning
Use caution when modifying these patterns. Changes to CAS patterns are immediately applied to the tenant & can be disruptive. We recommend saving a copy of your CAS configuration before making any changes.
:::

## Add CAS Application To Bridge Or Proxy

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index). 
   Once signed in, select the gear next to the tenant you want to update.
2. Scroll to the “Applications” section. 
   You will be able to adjust your view to only your CAS applications.
3. Use the “+ Add CAS Application” option under “Configuration”.
   Each authentication profile will have its own Entity ID Suffix. There is no Entity ID Suffix for the default.
4. Enter the URL Pattern & Friendly Name.
   Once finished, save your configuration.
:::

:::note
For **Enterprise Bridge**, the value of `cas:user` and permitted attributes are configured in your upstream authentication provider. For **Standalone Bridge & Proxy**, these are set within the Cirrus Console.
:::

## Testing CAS Applications

Cirrus provides a debug endpoint that you can use to verify that CAS service URLs are accepted and that the correct attributes are released. The URL for testing can be found within your tenant under “Configure Application”. You will also need the Service URL for the application you want to test. 

You will need to [encode the service URL](https://www.samltool.com/url.php) and replace `https://someservice.edu` with the encoded URL. For example, if the service URL is `https://apps.campus.edu`, then your test URL for a Bridge will be:

:::code-group
``` title="Test URL"
https://$TENANT.bridge.cirrusidentity.com/cas/login?debugMode=true&service=https%3A%2F%2Fapps.campus.edu
```
:::

Use this constructed URL to validate that you are redirected to your expected sign-in screen, followed by the debug screen. On the debug screen, verify that the attributes are correct for the authentication profile you configured for the suffix on the tenant you are testing.
