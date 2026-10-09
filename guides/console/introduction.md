---
title: Beginner's Guide to Cirrus Console
description: An introduction to the various configuration possible in the Console.
---

Think of the Console as your central control panel for all Cirrus Identity products. It’s a self-service admin interface where you can manage integrations, configure providers, update branding, and add team members.

Everything you see in the console is tailored to your organization's subscription. If a product or feature looks unavailable, it means it isn't currently part of your subscription.

## Getting Started

Before you dive in, you'll need to set up a trust relationship between the Cirrus Console and your enterprise authentication provider (sometimes called "IdP"). Because you'll log in using your own institutional credentials, complete these three steps first:

:::steps
1. Configure Your Institutional Provider
   Ask your authentication provider admin to release both the `mail` and `eduPersonPrincipalName` attributes to our Console application (`https://apps.cirrusidentity.com/shibboleth`)
2. Confirm Admin Provisioning
   When your organization onboards, your initial team members will be set up as administrators.
3. Log Into Cirrus Console
   Once attributes are released and your admin account is ready, go to the [Cirrus Identity Website](https://www.cirrusidentity.com) and click **Cirrus Console** in the top navigation bar.
:::

## Your Dashboard

Once you're in, you'll see a unified view of all your organization’s tenants.

- **Tenant Management**: View high-level details for each tenant or click the **gear icon** to the left of a tenant to tweak its specific settings.
- **Organization Settings**: Head over to the **Organization** section to manage team-wide console access or pull event logs. If you're an Organization Administrator, this area will be highlighted for you.

## Managing Administrators

The **Admins** page is where you build & manage your admin team.

### Adding New Administrators

:::steps
1. Go to the Admins page and click New Admin.
2. Fill in their First Name, Last Name, Email, and `ePPN`.
3. Choose their access level.
   This will be Org Admin (all access) or Tenant Admin (access to a specific tenant).
4. Click Add Admin.
:::

## Bridge Tenants

The **Bridge Tenant Details** page handles your tenant configuration, authentication providers, and connected apps (both SAML & CAS).

### Key Fields & Actions

| Feature | What it Does |
| --- | --- |
| **Tenant Type** | Shows the provisioned Bridge model (e.g., *Standalone Bridge*). |
| **Tenant Name** | Displays both the internal ID and friendly display name. |
| **Created / Updated** | Timestamps showing when the tenant was built and last modified. |
| **Test Implementation** | Runs a test workflow so you can verify settings before going live. |
| **Enhanced Diagnostics** | A two-step authorization screen showing plain-text auth attributes prior to encryption. Super helpful when troubleshooting new setups! |
| **Register with Federation** | Gives you tools to publish your Bridge metadata to external federations. |

### Authentication Provider Settings

- **SAML Provider Entity ID:** The unique ID for your configured SAML authentication provider.
- **Configure Provider:** Click here to review or update your authentication provider settings.

### Applications

Applications are organized into simple tabs by protocol:

- **SAML Applications**
- **CAS Applications**

Select a tab, click an application to review it, or use the **Edit (Pencil) Icon** to update settings.

## Proxy Tenants

The **Proxy Tenant Details** page gives you full administrative control over your Proxy setup, including multi-provider configurations.

### Admin Summary

- **Organization & Tenant Name:** Identifies the owner and unique ID.
- **Tenant Type:** Shows your proxy setup (e.g., *Non-Automated Proxy*).
- **Test URL:** Use this endpoint to safely test auth flows before switching to production.
- **SP Registration Details:** View key Service Provider details needed when connecting to federations.

### Authentication Providers

Proxies let you connect multiple authentication providers at once (such as Google, Microsoft Entra ID, Okta, or Shibboleth).

- **Display Name:** Lists all configured identity options.
- **Configure Discovery:** Customize how users search for and select their login provider when signing in.
- **Authentication Settings:** Apply global login policies across the entire proxy tenant.
- **Configure Provider:** Edit individual provider settings.

### Applications

Just like Bridge tenants, Proxy applications are grouped into **SAML** and **CAS** tabs. Select the right protocol tab to create, edit, or manage your app integrations.

## User Interface & Branding

Make the experience feel like home for your users! 

On the **User Interface** page, you can customize global design elements across your Cirrus products. Most teams upload their official logo and match the top banner and footer colors to their brand guidelines.

## Event Logs & API Access

Need to track activity? The **Event Logs** page lets you download on-demand log data for any active product in your subscription.

If your organization subscribes to the **Log API**, you can also manage your API credentials and explore our interactive API documentation directly from this section.
