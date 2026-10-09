---
title: Setting Up One-Time Code MFA
description: How to configure OTC MFA in the Cirrus Console.
---

The Cirrus One-Time Code MFA product gives you a lightweight option for step-up multi-factor authentication (MFA). A common use case is enabling MFA for the Cirrus Proxy when using applicant logins to Slate, financial aid, or housing portals prior to full admission.

This solution relies on an email assertion from your authentication provider to know where to deliver validation codes.

## Requirements

Before getting started, make sure your setup meets the following criteria:

- **Cirrus Proxy:** You must be actively running a Cirrus Proxy.
- **Email Assertion:** Your provider must assert an email address as an OID: `urn:oid:0.9.2342.19200300.100.1.3`.
- **Policy Compliance:** Email MFA must be an acceptable authentication method according to your campus security policies.

### How It Works

This product acts as an add-on to augment your authentication provider's behavior. You can require MFA for any SAML provider implemented on your Proxy.

When a user signs in through an MFA-augmented provider, Cirrus automatically emails a passcode to the email address asserted by that provider and prompts the user to verify it before granting access.

## Base Configuration

Collect the following details before starting setup:

- **MFA-Enabled IdPs:** A list of provider(s) you want to enable with One-Time Code MFA.
- **Custom From Email:** An institutional email address to send codes from.
- **Help URL (Optional):** A custom help link to guide users to campus-specific support pages.

### Configure the Email Handler

To use a custom "From" address for your institution, set up an email handler by [following our setup instructions](../../managed-identities/administration/email-handler.md).

### Schedule Your Go-Live

One-Time Code MFA goes live as soon as our team completes the configuration. Send your collected details to your **Technical Implementation Lead**, and they will work with you to coordinate a scheduled go-live window.

## Verification & Testing

Before launching, verify performance using both an **internal domain email account** and an **external email address**. Test both **on-campus** and **off-campus** network locations to confirm your email server settings and routing function as expected.

:::steps
1. Log in to an application Through an MFA-Enabled provider.
   Navigate to one of your applications integrated with a provider configured for One-Time Code MFA. Complete the standard login prompt to reach the passcode entry screen.
2. Retrieve the passcode.
  Check the inbox for the account used during login and copy the received MFA passcode.
3. Enter the passcode.
   Return to the screen from Step 1, enter the verification code, and submit to complete sign-in.
4. Verify application access.
   Confirm that your login was successful and that you are redirected to the target application homepage.
:::
