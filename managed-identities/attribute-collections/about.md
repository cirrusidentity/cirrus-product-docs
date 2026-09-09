---
title: Attribute Collections
description: What is an attribute collection?
---

An attribute collection is a bundle of attributes about a person nested under a named **attribute collection authority**.

We recommend you establish a primary attribute authority that's managed by your institution's central Identity & Access Management (IAM) or IT Security team, depending on your organizational structure. This authority's attributes should be set by the central IAM system.

<img src="https://i.imgur.com/j6L18cb.png" width="600em" />

## Governance

Other attribute collection authorities should correspond to other systems of record managed by other teams. 

For example, an "alumni" attribute collection could be managed by IT staff supporting the development offices, or a "housing" attribute attribute collection could be governed by your residence life team.

The authority is used for determining permissions. You can grant permissions to the Identities API that are scoped to a specific attribute collection authority to maintain the principle of least privilege.
