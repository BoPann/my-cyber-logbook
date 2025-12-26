# SIEM
## Full Name
Security Information and Event Management system

## What does it do? 
- A SIEM pulls logs from a bunch of different sources into one platform.
	- For example, Linux OS stores all the related logs, such as events, errors, warnings, etc. These are then ingested into SIEM for continuous monitoring. See [linux-Log](../linux-Log.md)
- Since every device and app logs things differently, SIEM normalizes the data so everything follows the same format
- SIEM correlates the logs of different sources and finds any relationship between them. This helps to identify malicious activity by analyzing its pattern
	- Here is a example given from THM
		- Haris logs in via VPN from an IP that he never has previously used
		- Haris accesses some documents on a shared drive
		- Haris executed a PowerShell script
		- The system makes an outbound network connection

- Most importantly, it visualize the log data and alert the analyst in real-time. 


