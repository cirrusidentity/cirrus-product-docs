---
title: Introduction
description: What is Managed Identities?
---

Cirrus Managed Identities makes it easy to adapt credentials from many authentication providers, enrich them with attributes from many sources of truth, and translate the result into a standardized authentication transaction any app can understand. 

It's the lightweight data layer for authentication you've been looking for.

<img src="https://i.imgur.com/pHiuMwA.png" width="600em" />

## Common Implementation Patterns

Managed Identities is flexible by design, and can be used in many different configurations.

:::accordion{title="Assert Standard Identifier To Applications"}
If you have an application that needs multiple authentication providers, but aren't able to store and sync a standard unique user identifier between them. 
:::
:::accordion{title="Multi-Proxy Deployment"}
Using multiple Cirrus Proxy deployments allows for a unique login experience for different sets of applications with Managed Identities powering a lightweight attribute store with distributed governance.
:::
:::accordion{title="Central Retiree or Alumni Attribute Management"}
If you have many apps you want to allow your connected affiliate network to continue to access, but you have distributed sources of truth about them. 
:::
