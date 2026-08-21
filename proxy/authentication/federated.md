---
title: Federated Providers
description: Using federated authentication providers with Proxy.
---

## What Are Federated Providers?

A federated authentication provider is any provider which participates in a supported Cirrus federation integration. Cirrus Proxy supports adding authentication providers as sign-in options via our participation in InCommon and eduGAIN.

**Supported Federations:**

- InCommon (United States)
- UK Access Management Federation (United Kingdom)
- Canadian Access Federation (Canada)
- Switch AAI (Switzerland)
- Fédération Éducation-Recherche (France)
- eduGAIN (International Aggregate)

:::info Important
You may use any providers registered in your national federation as well as others within eduGAIN, but **only if you are a member** of your national federation.
:::

### Adding Authentication Providers From Federations

To make an authentication provider available to your users of Cirrus Proxy, you must add the provider using the [Discovery](./provider-discovery.md) settings within the Cirrus Console.

Once you have added a provider, no additional action is required if the provider changes its metadata; Cirrus services process those changes automatically. 

### Attribute Releases From Federated Providers

Federated authentication providers may release different attributes depending on your Proxy's registration. If your Proxy signals that it is part of the Research & Scholarship category, you might receive additional attributes beyond a name and email address.
