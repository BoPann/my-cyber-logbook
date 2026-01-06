---
creation date: 2025-12-23 16:43
modified: 2025-12-28 19:29
tags:
  - cyber/dfd
  - cyber/sys
  - cyber/windows
---
# Windows Security Monitoring
## 1. Overview
Here, we walk through the different stages of the Cyber Kill Chain and show how to investigate each stage using indicators

For details in windows logs ID, see [Bo Cyber Logbook - Windows Logs IDs](windows-logs-id.md)\
For different windows event log types, see [Bo Cyber Logbook - Windows Event Log Types](../../tcm-practical-help-desk/windows-log-types.md)

Analyzing Windows Log can be daunting. Aside from SIEM, there are some handy tools for this job. We explored those tools in TryHackMe Tempest Room - [https://tryhackme.com/room/tempestincident](https://tryhackme.com/room/tempestinciden)
- Timeline Explorer (allows as to view the events in one place. Similar to Event Viewer but with better view. Need to transfer log to .csv first.)
- Sysmon View (allows us to view log in a process view and see what happened in a timeline. Need to transfer log to .xml first)


## 2.1 Indicators - Initial Access
**Instant Attacks:** Research shows that an exposed RDP port is usually discovered by automated botnets and hit with brute-force attempts within **one minute** of going online.
### Indicators - Remote Logon
- RDP (Logon Type 10)
- Network access (type 3)
- successful logon (eventID 4624)
- Failed Logon (enentID 4625)

## 2.2 Indicators - Phishing and USB
usually involves open files

- Sysmon Event ID 1: Web browser is launched
	- Image: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe 
	- ParentImage: C:\Windows\Explorer.EXE

- Sysmon Event ID 11: A file (usually archive) appears in Downloads 
	- Image: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe 
	- TargetFilename: C:\Users\User\Downloads\invoice.zip*

- Sysmon Event ID 11: Optionally, the user unarchives files to some folder 
	- Image: C:\Windows\Explorer.EXE (or C:\Program Files\7-Zip\7zG.exe) 
	- TargetFilename: C:\Users\User\Downloads\invoice.pdf.exe

- Sysmon Event ID 1: The user double-clicks the unarchived file 
	- Image: C:\Users\User\Downloads\invoice.pdf.exe 
	- ParentImage: C:\Windows\Explorer.EXE

## 2.3 Indicators - Discovery
The first task to detect a potential Discovery is to find a Discovery command, or better, a sequence of commands run during a short period of time. You will see them as process creation events tracked by Sysmon event ID 1 or as new rows in the PowerShell history file. ID 4663 File Access

## 2.4 Indicators - Collection
In Collection, threat actors don't just check a system configuration but rather look for specific files and folders such as password, secrect, .pdf, .csv, .temp basically any folder that can store valuable data. 

## 2.5 Indicators - Persistence
Once inside, the attack will want to maintain persistence. Ways including C2, creating new users 

#### New Users
- GUI
- `lusrmgr.msc`
- ID 4720 - user creation
- ID 4697 - service creation 
- ID 4698 - scheduled task creation


## Extended Readings
- [Bo Cyber Logbook - Windows Logs](windows-logs-id.md)
- [Bo Cyber Logbook - Web Monitoring](../web-monitoring/web-monitoring.md)
- [Bo Cyber Logbook - Linux Monitoring](../linux-monitoring/linux-monitoring.md)
- [Bo Cyber Logbook - Network Analysis](../network-analysis/network-analysis.md)
- [Bo Cyber Logbook - Phishing Analysis](../phishing-analysis/phishing.md)


---
Last Modified: 2025-12-28


