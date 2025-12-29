---
creation date: 2025-12-22 22:53
modified: 2025-12-28 19:30
tags:
  - cyber/dfd
---
# Windows Logs
when investigating windows log, it is important that we look for the right log and look for the parrent process. There are two Log in Windows: 1. Event Log 2. Sysmon Log


## 2.1 Windows Event Log

| **Event ID** | **Category** | **Meaning**                       | **SOC Analyst Perspective**                                                            |
| ------------ | ------------ | --------------------------------- | -------------------------------------------------------------------------------------- |
| **4624**     | Logon        | Successful Logon                  | Look at the **Logon Type** to see if it's remote (10) or local (2). **Initial Access** |
| **4625**     | Logon        | Failed Logon                      | **Brute Force**,  **Password Spraying**, **DDoS**, **Initial Access**                  |
| **4688**     | Process      | New Process Created               | Essential for seeing what programs were opened. **Initial Access**, **Discovery**      |
| **4720**     | User Mgmt    | User created                      | Red flag if created outside of a Helpdesk ticket window. **Persistence**               |
| **4722**     | User Mgmt    | User Enabled                      | **Persistence**                                                                        |
| **4725**     | User Mgmt    | User Disabled                     | **Persistence**                                                                        |
| **4738**     | User Mgmt    | User Changed                      | **Persistence**                                                                        |
| **4726**     | User Mgmt    | User Deleted                      | **Persistence**                                                                        |
| **4723**     | User Mgmt    | Password Changed                  | **Persistence**                                                                        |
| **4724**     | User Mgmt    | Password Reset                    | **Persistence**                                                                        |
| **4732**     | Group Mgmt   | User added to Group               | **Privilege Escalation**                                                               |
| **4733**     | Group Mgmt   | User removed from Group           | **Privilege Escalation**                                                               |
| **4798**     | Group Mgmt   | User's local group was enumerated | **Discover**                                                                           |
| **4697**     |              | service creation                  | **Persistence**                                                                        |
| **4698**     |              | scehduled task creation           | **Persistence**                                                                        |


## 2.2 Sysmon

| **Event ID** | **Category** | **Meaning**           | **SOC Analyst Perspective**                                                  |
| ------------ | ------------ | --------------------- | ---------------------------------------------------------------------------- |
| **1**        | Process      | Process Creation      | Shows the **Command Line** (e.g., `powershell.exe -enc...`) and File Hashes. |
| **3**        | Network      | Network Connection    | Connects a specific process (PID) to a destination IP/Port.                  |
| **7**        | Image Load   | DLL Loaded by process | Detects "DLL Injection" where malware hides inside a legitimate app.         |
| **11**       | File Event   | File Created          | Tracks when an attacker drops a tool (like `mimikatz.exe`) onto the disk.    |
| **12/13/14** | Registry     | Registry Key Change   | Detects **Persistence** (e.g., malware adding itself to "Run" keys).         |
| **22**       | DNS          | DNS Query             | See exactly what domains a virus is trying to contact (C2 hunting).          |

## Logon Type
For 4624 and 4625, we can further investigate the logon type to determin how user log in. 
- Logon 10 - RDP (Remote Desktop)
- Logon 3 - RPC calls


## Limitation
PowerShell, on the other hand, is a powerful all-in-one tool for managing the system. Once you launch powershell.exe, you can run hundreds of different commands within the same terminal session without creating new processes for each action. This is why Sysmon is not very helpful here, and you'll need to find an alternative logging approach.
Luckily for the defenders, most of the launched commands are logged as new processes. This means that even though an attacker is _inside_ a shell (like PowerShell, CMD, or Bash), many of the "tools" they use aren't built into the shell itself—they are separate executable files located in folders like `C:\Windows\System32\` or `/usr/bin/`.

When the attacker types one of these commands, the shell has to "spawn" a **New Process**. This is a massive win for defenders because it creates a clear **Process Tree** and triggers **Sysmon ID 1** or **Windows Event 4688**.


Command Line Tools (Powershell)
```plaintext
	C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```


### Where to Find Sysmon?
Event Viewer > Appliction and Service Log > Microsoft > Windows > Sysmon 

>This is important if you don't want to spend 1 hour and realized you have been cheking the wrong file this whole time (Don't ask me how I know: )) 


## Resources
- [Microsoft Doc Sysmon ID](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- [Microsoft Doc Logon Type](https://learn.microsoft.com/en-us/windows-server/identity/securing-privileged-access/reference-tools-logon-types)
- [Bo Cyber Logbook - Parent Page - Windows Security Monitoring](windows-security-monitoring.md)


---
Last Modified: 2025-12-28 \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


