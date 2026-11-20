---
title: Configure Cirrus Bridge For REFEDS Assurance
description: Setting up proper attribute release for REFEDS Assurance Framework.
---

Customers of Cirrus Enterprise Bridge may need to configure REFEDS Assurance Framework (RAF) support for accessing United States federal government services, such as ones operated by the National Institutes of Health (NIH).

## Background

REFEDS has published a [specification for signaling identity assurance in trust federations](https://refeds.org/assurance). An [implementation guide](https://spaces.at.internet2.edu/spaces/TI/pages/350159280/TI.180.1) for this specification was authored by InCommon to assist US-based universities.

The REFEDS Assurance Framework (RAF) V2 signals the identity vetting of an individual by an organization using the `eduPersonAssurance` attribute. RAF establishes a number of defined values for the multivalued `eduPersonAssurance`, and sets the expectation that an organization will assert a number of values from the InCommon registered identity provider (IdP).

Some of these values are uniform for a given organization (such as supported RAF version) and the practices around how identity is managed. Other values are tied to procedures & level of proofing an individual has gone through to verify their identity.

## Prerequisites

1. A Cirrus Identity Enterprise Bridge for Entra ID, Okta, or Duo SSO
2. A working understanding of the [recommendations for REFEDS Assurance Framework 2.0 Implementation for InCommon Identity Providers](https://spaces.at.internet2.edu/spaces/TI/pages/350159280/TI.180.1)
3. **(Optional)** To the extent that the identity assurance profile (IAP) will vary by individual, some digital representation of the IAP for the individual that is accessible from Entra ID, Okta, or Duo SSO.

## Setup

In this example, the following steps assume the organization:

* Is using Entra ID for their Cirrus Enterprise Bridge
* Is making the assertion according to RAF V2
* Identities are unique (a requirement for InCommon IdPs)
* Practices ensure the `eduPersonPrincipalName` (ePPN) is uniquely asserted for all time
* Practices reflect the user’s affiliation(s) in associated systems of record within the previous 31 calendar days
* End users all have an IAP of `local-enterprise` (see 5.2.2 of the [RAF 2.0 Final Version](https://refeds.org/wp-content/uploads/2023/12/RAF-2.0-Final-version.pdf)

### Define Attributes

A series of attributes (“claims” in Entra ID) for RAF V2 will be grouped together inside `eduPersonAssurance`. First, the values of each individual value must be defined in a series of temporary attributes. For Entra ID, this is done in the Enterprise App configuration for the Cirrus Enterprise Bridge. Each of the attributes should have a consistent name that starts with `cirrus.temp.raf.`.

For example, the initial attribute will be `cirrus.temp.raf.main` and will indicate base RAF V2 support with a statically defined value of `https://refeds.org/assurance`.

:::note
Consult the [RAF V2 Specification](https://refeds.org/wp-content/uploads/2023/12/RAF-2.0-Final-version.pdf) and/or the [InCommon recommendations](https://spaces.at.internet2.edu/spaces/TI/pages/350159280/TI.180.1) for values needed in other scenarios.
:::

Six temporary attributes are needed for the assumed scenario:

| Attribute Name | Attribute Value |
| --- | --- |
| `cirrus.temp.raf.main` | `https://refeds.org/assurance` |
| `cirrus.temp.raf.version` | `https://refeds.org/assurance/version/2` |
| `cirrus.temp.raf.id` | `https://refeds.org/assurance/ID/unique` |
| `cirrus.temp.raf.id-eppn` | `https://refeds.org/assurance/ID/eppn-unique-no-reassign` |
| `cirrus.temp.raf.atp` | `https://refeds.org/assurance/ATP/ePA-1m` |
| `cirrus.temp.raf.iap` | `https://refeds.org/assurance/IAP/local-enterprise` |

### Merge Attributes

To construct the multivalued attribute `eduPersonAssurance` (asserted as `urn:oid:1.3.6.1.4.1.5923.1.1.1.11`), the Cirrus Bridge rule `cirrus.rule.merge` will be used. To add the rule, an additional claim should be added to the Entra ID Enterprise App with:

* A claim name of `cirrus.rule.merge` (no quotes)
* A value of `attributes=cirrus.temp.raf.*, dest=urn:oid:1.3.6.1.4.1.5923.1.1.1.11` (no quotes)

The merge rule syntax is indicating that all attributes starting with `cirrus.temp.raf.` should be combined into a multivalue attribute and asserted as the `urn:oid:1.3.6.1.4.1.5923.1.1.1.11` attribute name.

## Testing

Testing this will only validate the Bridge configuration is generating an assertion for `eduPersonAssurance` that matches what you have configured for Entra ID, Okta, or Duo SSO. Individual applications (also called service providers) may have differing requirements for what `eduPersonAssurance` must be set to now or in the future. Consult your target application for the specific identity assurance signaling that is expected.

### CILogon Test Page

The Service Provider CILogon provides a [comprehensive test page for IdPs](https://cilogon.org/testidp) that are engaged with their service. It is one of the best validation tools for IdPs that plan to engage in US-based research. 

When you navigate to the page, you will need to select your IdP from the selection dialog. Unless you configure the RAF parameters on your default attribute release, you will need to make sure they are configured for an Enterprise Application associated with the CILogon Entity ID (`https://cilogon.org/shibboleth`). 

### NIH Test Page

The NIH also provides a [test page for IdPs](https://authdev.nih.gov/CertAuthV3/forms/compliancecheck.aspx) that are engaged with their service.

When you navigate to the page, you will need to select your IdP from the selection dialog. Unless you configure the RAF parameters on your default attribute release, you will need to make sure they are configured for an Enterprise Application associated with the NIH Entity ID (`https://federationdev.nih.gov/FederationGateway`).
