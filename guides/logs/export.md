---
title: Log Export Via File
description: Using the export event logs tool in Cirrus Console.
---

Cirrus offers two options for accessing product event logs:

- **Export**: On-demand download of event log information for products in your subscription. Included in base subscription of any Cirrus Identity product.
- **Stream**: A log API for organizations who wish to stream Cirrus event log information to an enterprise log management system, such as a SIEM.
 
While there is some variation in log processing time, an event will generally be complete and available in an export within 10 minutes of its occurrance.

Exported reports are CSVs, and can be imported into any number of applications for further analysis or reporting.

## Download the Event Logs

:::steps
1. Navigate to your organization page in the console.
   You must be signed in as an organizational administrator.
2. Submit the log file request.
   Select the “Event Logs” page from the left menu.
3. The request will display under "report requests". 
   Requests are queued as part of a batch process and display "RUNNING" until it is complete.

### Reporting Customizations

The “Report Time Range” can be relative from the current date and time, with a default of 1 hour. By selecting “Custom”, an absolute range can be selected. Times are in UTC and the maximum available history for download is 90 days from the current date.

The “Service” – this is the specific Cirrus Identity product. Event logs are currently available for:

- Cirrus Proxy (proxy)
- Cirrus Bridge (bridge)
- Cirrus Gateway (gateway)
- Cirrus OrgBrandedID (idp)
 
## Working With Event Log Files

Once the download is generated, you will receive an email sent to the account you logged into the Cirrus Console with. The message will include a link to download the report. The link is only valid for 24 hours; once the link expires, you must run the report again.

If there is no data in your report, then it typically indicates that there were no log events for the time selected. 

The files are traditional CSV formatted text files, and can be imported into any number of applications for further analysis or reporting such as Google Sheets or Microsoft Excel.
