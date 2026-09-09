---
title: Create Attribute Collection
description: How to create an attribute authority & collection.
---

Before you can create an attrbute collection on an identity, you must have an attribute collection authority to associate it with. 

## Creating An Attribute Collection Authority

Choose a name that is descriptive and meaningful, which can be easily identified as belonging to a specific internal team responsible for the data in the collections within it. 

Once you have chosen a name, contact Cirrus Customer Success. At this time, attribute collection authorities can only be created by Cirrus Engineering. 

## Creating An Attribute Collection

After your authority has been created, you can use API permissions that were granted access to that authority to [create attribute collections & values](../../identities-api.html#operation-attributecollections-create-cirrusuid-post) for any identity in Managed Identities. 

:::tip Heads Up!
Avoid creating attribute collections with duplicative attribute names. This can cause confusion and conflicts.
:::
