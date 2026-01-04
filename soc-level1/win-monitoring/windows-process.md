---
creation date: 2025-12-22 19:24
modified: 2026-01-03 12:59
tags:
  - cyber/sys
  - cyber/windows
---
# Windows Process

## 1.  Overview
## 1.1 Three Major Process in Windows
- apps
- background processes
- windows processes

# 1.2 Four Ways to See Them
- task manager (native)
- process hacker (better option)
- process explorer
- Command Line (tasklist, Get-Process or ps (PowerShell), and wmic.)


## Description
- system (SID 4)
	- system always has PID 4 (if not, it's suspicious!)
	- session 0

- smss.exe (Session Manager Subsystem)  - aka Windows Session Manager
	- Starts the kernel and user modes
	- spawn csrss.exe and winlogon.exe in session 1 (when we log in, we are already in session 1)
	- when smss start a process, it terminats itself. 
	
	- smss > csrss.exe (Client Server Runtime Process)
		- user-mode side of the Windows subsystem. This process is always running and is critical to system operation. If this process is terminated by chance, it will result in system failure. This process is responsible for the Win32 console window and process thread creation and deletion. For each instance, csrsrv.dll, basesrv.dll, and winsrv.dll are loaded (along with others).
	
	- smss > wininit.exe(Windows Initialization Process)
		- is responsible for launching services.exe (Service Control Manager), lsass.exe (Local Security Authority), and lsaiso.exe within Session 0. It is another critical Windows process that runs in the background, along with its child processes.
	
		- wininit > service.exe (Service Control Manager) 
			- Its primary responsibility is to handle system services: loading services, interacting with services and starting or ending services. It maintains a database that can be queried using a Windows built-in utility
			- This process is the parent to several other key processes: svchost.exe, spoolsv.exe, msmpeng.exe, and dllhost.exe, to name a few. 
		
		- wininit > svchost.exe (Service Host) 
			- is responsible for hosting and managing Windows services.
			- Since svchost.exe will always have multiple running processes on any Windows system, this process has been a target for malicious use. Adversaries create malware to masquerade as this process and try to hide amongst the legitimate svchost.exe processes. They can name the malware svchost.exe or misspell it slightly, such as scvhost.exe. By doing so, the intention is to go under the radar. Another tactic is to install/call a malicious service (DLL).
		- wininit > lsass.exe (Local Security Authority Subsystem Service)
			- a process in Microsoft Windows operating systems that is responsible for enforcing the security policy on the system. It verifies users logging on to a Windows computer or server, handles password changes, and creates access tokens. It also writes to the Windows Security Log."
			- **mimikatz**
	- smss > winlogon.exe (Windows Logon)
		- is responsible for handling the Secure Attention Sequence (SAS). It is the ALT+CTRL+DELETE key combination users press to enter their username & password.
		- It is also responsible for locking the screen and running the user's screensaver, among other functions.
- userinit > explorer.exe (Windows Explorer) 
	- This process gives the user access to their folders and files. It also provides functionality for other features, such as the Start Menu and Taskbar.
	- Created by userinit.exe and exits


## Resources 
- [Core Process in Windows System](https://0xcybery.github.io/blog/Core-Processes-In-Windows-System0)


---
Last Modified: 2026-01-03

