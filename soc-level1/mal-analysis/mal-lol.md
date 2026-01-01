---
creation date: 2025-12-31 18:02
modified: 2025-12-31 18:02
tags:
---
# Living Off the Land Malware

## Overview
Intruders use legitimate, pre-installed system tools (like PowerShell or WMI) to perform malicious actions instead of downloading custom malware.


## Description
- **PowerShell:** The "Swiss Army Knife." Used to execute code directly in memory (fileless), download malware via `Invoke-WebRequest`, or bypass execution policies with `-ExecutionPolicy Bypass`. `IEX`, `DownloadString`, `EncodedCommand`, `Bypass`
    
- **WMIC (Windows Management Instrumentation Command-line):** Used for **lateral movement** and reconnaissance. Attackers use it to list running processes, delete Shadow Copies (to stop data recovery), or remotely start processes on other machines. `process call create`
    
- **Certutil:** Built for managing certificates, but misused to **download and decode** malicious files. A common command is `certutil -urlcache -f [URL] [File]` to pull a payload from the web.`encode`, `decode`, `urlcache`, `-f`
    
- **Mshta:** Executes HTML Applications (.hta). Attackers use it to run malicious JavaScript or VBScript hidden inside a link or a fake document. see [day21-malware-analysis](my-cyber-logbook/advent-of-cyber-2025/day21-malware-analysis.md) `javascript` in command line, `mshta.exe + external URL`
    
- **Rundll32:** Used to run functions within a DLL. Attackers use it to "proxy" the execution of a malicious DLL so it looks like a legitimate Windows process is doing the work.
    
- **Scheduled Tasks:** The king of **persistence**. Attackers use `schtasks.exe` to ensure their script runs every time the computer reboots or at a specific time (e.g., 3:00 AM). `/tmp`, `/public`, `/AppData` 



---
Last Modified: 2025-12-31


