---
title: Credential
description: What is a credential?
---

Within Managed Identities, a credential is a record which contains a set of attributes that were provided by an authentication provider upon sign-in.

An credential represents a known sign-in by a person from a given authentication provider. An identity may have several credential records linked to it.

## Remote Credentials

Managed Identities considers credentials from authentication providers which are not powered by Cirrus infrastructure to be "remote credentials".

These are typically credentials which come from an authentication provider operated by the customer (such as a workforce identity platform like Entra ID or Okta), or a federated provider from a federation such as InCommon.
