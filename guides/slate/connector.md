---
title: Connecting Slate To Proxy
description: Using Slate & Cirrus Proxy to make applicant access easy.
---

The Slate + Proxy solution design allows applicants to use their Slate credentials to access applications, eliminating the need for institutions to create accounts in their primary identity provider for applicants who may not ultimately matriculate as students. 

This guide outlines how to provision, configure, and test a Cirrus Proxy integrated with a Slate Proxy Connector.

## Provisioning Slate Connector

To provision a Slate Proxy Connector, Customer Success needs your Slate CAS authentication endpoint.

:::steps
1. Obtain the domain name for your Slate tenant.
   It's usually something like `admissions.example.edu/manage`.
2. Remove `/manage/` and add `/account/cas/login`.
   The result should be like: `https://admissions.example.edu/account/cas/login`
3. Verify the endpoint by sending a CAS login request.
   Use `https://admissions.example.edu/account/cas/login?service=https://test.com`. If it redirects to your sign-on page, you have the right endpoint.
:::

Next, Customer Success will help you begin an attribute mapping exercise to ensure integration goes smoothly.
