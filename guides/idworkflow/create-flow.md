---
title: Create Flows
description: Make your first flow and wire components together.
---

To access IDWorkflow, use the [Cirrus Console](https://apps.cirrusidentity.com).

## Instantiate Workflow

To create a new workflow, select the link for + New Workflow at the top of the page. Next, you will enter information about the new workflow and click the + Add Workflow button.

- Display Name is used by your organization to identify the purpose of the workflow.
- The URL path is used in the link to access the workflow. One is automatically populated as you create a display name.
- Description allows you to provide more information about the workflow such as audience, creators, and more.

Once the workflow has been created, it will show up in the list and is ready to be designed.

## Design Workflow

To design a new workflow or edit an existing workflow, select the edit icon next to the listed workflow you would like to design. When you first enter the design screen, you will only see the `Start` node, which is where your workflow begins.

:::tip Using The Editor
Your workflow is automatically saved as you work. To configure each node, click on the gear icon. A warning icon will appear on a node that is missing configuration.
:::

Next, add a new node to your workflow by click on the plus icon and selecting a node type from the list:

:::tabs
::tab{title="Information"}
Display information to the user. Markdown can be used to edit the display text.
::
::tab{title="Acknowledge"}
Also display information to the user and also ask the user to check a box to acknowledge the information.
::
::tab{title="Path Chooser"}
Share common content and allow you to configure 1 to 5 options with specific content and behavior. Use this type to branch your workflow into different paths.
::
::tab{title="Redirect"}
Forward the user on to a URL outside of the workflow, such as a step in the process outside of this workflow.
::
:::
 
### Connect Nodes Together

Once your nodes have been created, you can connect them by selecting the circular connector icon and dragging to connect with the left side circular node icon of the next node.
 
There are three node connection requirements:

- The connector icon to the left of the node must be connected to the previous step in your workflow.
- The connector icon to the right of the node must connect to the next step in the workflow. Even if this is the last step, every workflow must have a “Redirect” node to end the workflow.
- The red node link on the right side of the node must always connect to a redirect node in the event the user cancels the workflow on that step, so that the workflow knows where to redirect the user to. The nodes are able to all connect to the same redirect node.
