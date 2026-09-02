---
title: Discovery
description: Configure the Proxy's sign-in user interface.
---

## What Is Discovery?

"Discovery" refers to both a [protocol](https://www.oasis-open.org/standard/saml-ipd/) and a friendly name for the user interface where your users will select an authentication provider they want to use to sign into your Cirrus Proxy deployment.

Cirrus Discovery is integrated with InCommon and other federations from eduGAIN, giving you access to these global metadata resources though an easy-to-use interface. You can also add [non-federated providers](./non-federated.md) to Discovery, or integrations with Cirrus Gateway such as Google, Facebook, Microsoft, and LinkedIn.

## Planning Your Discovery Deployment

:::tip Reminder
A member of your organization must have access to the Cirrus Console to configure Discovery.
:::

### Determine Proxy's Audience

You will need to determine what authentication providers should be available in Discovery based on the audience for this Proxy deployment:

- Does it need to support your organization’s primary authentication provider?
- What about non-federated providers?
- Should it support providers from InCommon or other eduGAIN federations?
- Do you want to use Cirrus OrgBrandedID?
- Do users need the options configured in Cirrus Gateway?

### Determine End User Experience

There are two possible experiences you can utilize:

1. End users are directed to the application.
   Discovery will appear when they are asked to sign in.
2. Users bypass Discovery via a custom link.
   A static link can be used to sign the user in (if the authentication provider is known in advance).

These options are not mutually exclusive. Some users may use one or the other.

### Select Discovery Style

Cirrus Discovery operates in two basic modes: “List Style” and “Button Style”. Each style supports different kinds of UI customizations:

| Feature | Button Style | List Style |
|---|---|---|
| Recommended Number of Identity Providers | Ten Or Fewer | Large Numbers |
| Supports Federated IdPs | Yes | Yes |
| Supports Gateway | Yes | Yes |
| Supports Custom IdPs | Yes | Yes |
| Control Display Order of IdPs | Yes | Yes |
| Add Header/Footer Text | Yes | Yes |
| Customize Authentication Provider Branding | Yes | No |
| Add Text Between Providers | Yes | No |
| Put Providers on Different Tabs | No | Yes |
| Search Box for Providers | No | Yes |
 
## Configuring Authentication Providers

The top of the Discovery Service page is where you will configure which authentication providers are allowed. There are lists for different federations as well as custom tabs for any configured Proxy Connectors.
 
To add an authentication provider to Discovery, simply check the box to the left of it. The provider will appear in the "Selected IdPs" list. To draw attention to specific providers in the Discovery UI, drag them to the “Preferred Providers” list. Preferred providers are listed in the order presented and can be placed on a separate tab in Discovery if desired.

If Cirrus Gateway is also being used, any associated configured providers will also appear in the "Selected IdPs". As with other providers, these can placed on the left to appear in a preferred position.

<img src="https://i.imgur.com/ngJwDOw.png" width="600em" />

### Configuring List Style Discovery

List style discovery is the default. Unless providers are moved to the “Preferred Providers” column, they are listed in alphabetical order when presented.

<img src="https://i.imgur.com/h8mGY0b.png" width="600em" />

:::tip
The “Preferred Providers” can be put on their own tab, by checking the associated box.
:::
 
### Configuring Button Style Discovery

The Discovery style can be changed to Button Style by selecting the option in the configuration UI.
 
The order of buttons is controlled by putting authentication providers in the “Preferred Providers” column. Button Style does allow organizations to control presentation format for most authentication providers.

Text can also be inserted between buttons of traditional Identity Providers.

<img src="https://i.imgur.com/qL1Dhix.png" width="600em" />

:::note
Button Style has a fixed format for any Gateway providers.
:::
 
### Headers & Footers

Text headers with associated formatting can be added, and a footer beneath the providers listecan also be added. Both the header and footer can also be configured to take on a wider format.
