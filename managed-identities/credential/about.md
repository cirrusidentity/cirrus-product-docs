---
title: Credential
description: What is a credential?
---

A credential is a record which contains a set of attributes that were provided by an authentication provider upon sign-in.

An credential represents a known sign-in by a person from a given authentication provider. An identity may have several credential records linked to it.

## Remote Credentials

Managed Identities considers credentials from authentication providers which are not powered by Cirrus infrastructure to be "remote credentials".

These are typically credentials which come from an partner organization's authentication provider, or a federated provider from a federation such as InCommon.

### Pre-Provisioning Link To Remote Credential

Occasionally, you may want to pre-provision an identity with a link to an expected remote credential and load attributes you know in advance. 

Using the Identities API [endpoint for remote credentials](../../identities-api.html#operation-remotecredentials-create-cirrusuid-post), you can ensure this link exists before a user signs in to your application.
