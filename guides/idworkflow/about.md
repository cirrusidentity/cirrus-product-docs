---
title: About IDWorkflow
description: Using IDWorkflow & Cirrus Proxy to present custom content.
---

IDWorkflow is designed for organizations that need a customized user interface for content presented to their users during the authentication process. It allows you to build and customize publicly accessible informational and redirect flows which Org Admins can maintain.

Each workflow inherits institutional branding, supports Markdown and a text editor. A workflow can have as many nodes as desired.

## Example Use Cases

IDWorkflow can support several kinds of use cases, but it is not limited to only these examples.

:::card-group{cols="3"}
::card{title="Help & Support Link" icon="book-open"}
A help link on the Proxy to walk a user through information about how to get a guest account.
::
::card{title="Acknowledgement" icon="pencil"}
Require a user to acknowledge a policy or other limitations before moving forward.
::
::card{title="Migration Support" icon="link"}
A consistent link that can change destination as your infrastructure changes.
::
::: 

### Not Supported

- **Consent With Recorded Decision**: The typical consent workflow where a decision is recorded is not currently supported.
- **Authenticated or Private Workflows**: IDWorkflow does not support content protected by authentication, so any workflow content is public. It is designed to provide content _before_ authentication.
- **API Integrations**: IDWorkflow is not capable of interacting with infrastructure beyond simple web redirects.
