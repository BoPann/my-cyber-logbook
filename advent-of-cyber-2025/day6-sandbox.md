## Overview
When we test malware, we can look at it in two ways: static or dynamic.

## Description
1. **Static**  
	- We do not run the file at all.  
	- PE file are analyzed 
	- Strings might be checked
	- Code might checked using disassembler
	- Pestudio lets the analyst peek inside the file and see useful details without waking it up.
	
examine the file type `file fileName` - sometimes malware authors try to trick users by using misleading file extensions. In such scenarios, it is helpful to know how to find the actual file type of a file without depending on file extensions.

check the string format `strings fileName` - Looking at strings in a file can often give clues related to the behaviour of malware.

calculate hashes `md5 fileName`, `sha256sum fileName` and investigate it in VirusTotal

examine PE header - `pecheck` or `pe-tree` (GUI version) - The [PE File Header](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#file-headers) contains the metadata about a Portable Executable file. This data can help us find a lot of helpful information to help us in our analysis.



A **DLL (Dynamic Link Library)** is a file containing code and data that multiple programs can use at the same time. Think of it as a "toolbox" that programs borrow from rather than building every tool themselves.

A **Windows Batch file** (typically with a `.bat` or `.cmd` extension) is a script that contains a series of commands to be executed by the Windows Command Prompt (`cmd.exe`). It is used to automate repetitive tasks by running multiple commands in a single go.

2. **Dynamic**  
	- We actually run the file but inside a safe environment.  
	- Regshot takes a snapshot of the registry.  
	- We take a baseline before the malware runs, then another snapshot after.  
	- Now we can spot the changes and see what sneaky stuff the malware tried to add.
	- Some malware can detect if itself is in a controlled environment and bypass it. 

SandBox
- [Online Cuckoo Sandbox](https://cuckoo.cert.ee/) - Cuckoo's sandbox has been archived, and an update is pending. It also doesn't support Python 3, making it obsolete right now
- CAPE - A community version of this sandbox is available online, and it can be used to test-run it before installation. CAPE Sandbox is so far actively developed and supports Python 3.
- [Any.run](https://any.run/)
- [Intezer](https://analyze.intezer.com/)
- [Hybrid Analysis](https://hybrid-analysis.com/)

Sandbox Evasion
- **Environmental Checks:** Searching for "VM artifacts" like VMware/VirtualBox registry keys, specific MAC addresses (e.g., starting with `08:00:27`), or low CPU core counts/RAM (sandboxes are often under-resourced).
- **Stalling (Time-Based):** The malware uses `Sleep()` functions or long loops to wait out the sandbox’s analysis timer (usually only a few minutes) before executing the payload.
- **User Interaction:** Requiring a human action—like a specific mouse click, scrolling a document, or double-clicking an icon—before the malicious code activates.
- **"Pocket Litter" Detection:** Checking for signs of a real user, such as browser history, cookies, recently opened files, or a minimum number of running processes (e.g., >50).



Disassemblers convert the malware's code from binary to assembly so that an analyst can look at the instructions of the malware statically. Debuggers attach to a program and allow the analyst to monitor the instructions in malware while it is running. A debugger allows the analyst to stop and run the malware at different points to identify interesting pieces of information while also providing an overview of the memory and CPU of the system.



## Registry Key

Think of the registry like a giant recipe book.  
Startup programs are the dishes the computer cooks.  
Windows is the chef who reads the book and decides what to serve.

Inside the registry, Windows stores a huge amount of settings, such as  
what runs at startup, user preferences, system settings, application info, and many more.

## Why this Matters?
Testing a software is an integral part of cybersecurity. It is important to do it in a safe env so i won't affect other devices should things go south. 


## Resources
- [THM Case Study](https://tryhackme.com/room/malwareclassification)
- [REMnux: A Linux Toolkit for Malware Analysis](https://docs.remnux.org/)