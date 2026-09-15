---
title: Configure Email Handler
description: Setting up custom SMTP settings for Cirrus email notifications.
---

Cirrus Identity offers custom email handling as part of your subscription whenever products send email messages. The email handler configuration is the way Cirrus passes messages to a custom relay for delivery. You may want emails from Cirrus to appear as though they come from your institution so that:

- You can better diagnose end-user delivery issues
- You can apply security controls on mail delivery that meet your organizational needs

In order to configure the email handler, you'll need a relay accessible on the public internet that uses either username & password or IP-based authentication.

:::note
The configured mail relay does not need to be your primary one. A dedicated third-party mail relay, such as **[SendGrid](https://www.twilio.com/en-us/products/email-api)**, can be used for the deployment, or an existing shared relay used for other marketing purposes can be used.
:::

## Configuration

:::steps
1. Sign in to the [Cirrus Console](https://apps.cirrusidentity.com/console/auth/index).
   Once signed in, select your organization from the list under “My Organizations”.
2. Select “Email Handler” from the left menu. 
   If this option is not enabled, contact Customer Success.
3. Enter the required information and save it.
   See **[SMTP requirements](#smtp-requirements)** for details.
4. Test the configuration.
   Click “Test SMTP Config” to send a message to the email address of the admin currently logged in.
5. Enable your configuration.
   After testing is successful, check the box for “Use My SMTP”.
:::

### SMTP Requirements

:::tabs
::tab{title="SMTP Host"}
The fully qualified domain name (FQDN) of the email relay.
::
::tab{title="SMTP Port"}
The TCP/IP port number at the email relay FQDN. The default port is 587 for TLS connections.
::
::tab{title="SMTP User"}
The username of the authenticating account.
::
::tab{title="SMTP Password"}
The matching secret to the SMTP User.
::
::tab{title="SMTP From"}
The email address where any delivery failures will be sent.
::
:::

:::tip Secure Connections
Check the box for "Require StartTLS" to establish a TLS connection to the mail relay at the indicated FQDN and port.
:::
