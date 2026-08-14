---
title: Conducting Testing
description: How to test integration with Cirrus Bridge.
---

Once the default authentication profile is configured, you can test the integration using the test application provided by Cirrus Identity. 

## Prepare Your Endpoint (DNS Add-On)

If you have enabled the DNS Add-On, you will need to modify your local hosts file to point the FQDN to the IP address provided by your implementation lead. 

- On Mac computers, this file can be found at `/etc/hosts`. 
- On Windows computers, it is typically found at `C:\Windows\System32\drivers\etc\hosts`.

If you're unfamiliar with editing your hosts file, [Rackspace provides an excellent primer](https://docs.rackspace.com/docs/modify-your-hosts-file).

## Using Your Cirrus Test Application 

The testing URL is unique for your Cirrus Bridge implementation and will be provided to you by your implementation lead. **In a private browser/incognito window**, navigate to the test URL.

- Example: `https://athena-bridge.cirrusidentity.com/demo.php`

:::steps
1. Click the first link.
   This should be "Test Authenticating With Cirrus".
2. Authenticate and review event details.
   You should be prompted for MFA if you have enabled it. 
3. Verify your attribute values.
   AuthnContext should be `https://refeds.org/profile/mfa`, and NameID & format are as expected. 
:::

:::note
The default NameID format is usually transient with a random value for the NameID itself.
:::
