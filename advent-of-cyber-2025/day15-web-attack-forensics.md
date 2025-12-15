---
creation date: 2025-12-15 11:35
modified: 2025-12-15 11:35
tags:
---
# Day 15 Web Attack Forensics

## Overview
This exercise we are analyzing a case where attacks execute OS commands on a web server, which, if successful, leads to system compromise.

## 2. Description
### 2.1 Check the HTTP Request Log 
- `index=windows_apache_access (cmd.exe OR powershell OR "powershell.exe" OR "Invoke-Expression") | table _time host clientip uri_path uri_query status`

### 2.2 Check  Server Side Error
- Looks for any HTTP access logs (`index=windows_apache_access`) where the request URL (`uri_path` or `uri_query`) contains keywords associated with **Windows command interpreters** (`cmd.exe` or `powershell`).

- `index=windows_apache_error ("cmd.exe" OR "powershell" OR "Internal Server Error")`

### 2.3 Look for 500 Internal Error 
- If a request like /cgi-bin/hello.bat?cmd=powershell triggers a 500 “Internal Server Error,” it often means the attacker’s input was processed by the server but failed during execution, a key sign of exploitation attempts.
- Checking these results helps confirm whether the attack reached the backend or remained blocked at the web layer.
- Typically, Apache should only spawn worker threads, not system processes like cmd.exe or powershell.exe.

### 2.3 Confirm Attacker Enumeration Activity
- post exploitation IoC: whoami 




>last modified: 2025-12-15 11:35