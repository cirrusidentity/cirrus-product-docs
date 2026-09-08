---
title: Identity
description: What is an identity record?
---

Within Managed Identities, an identity is a parent record which contains a set of credentials linked to it along with a set of associated attribute collections.

An identity should represent a single (real) person. A person might have several credentials (an institutional credential, OrgBrandedID, Google). They might also have several attribute collections tied to different attribute authorities.

<img src="https://i.imgur.com/ZKdKy5v.png" width="600em" />

## Design Considerations

Identities within the Managed Identities environment are not by themselves authoritative. 

Data about people that is persisted within Cirrus platforms should be based on a source of truth that resides elsewhere, such as a student information system, CRM, or ticketing platform, and kept synchronized by a customer-managed process.
