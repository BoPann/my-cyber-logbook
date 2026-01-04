---
creation date: 2025-12-25 21:07
modified: 2026-01-03 12:45
tags:
  - cyber/linux
  - cyber/tool
---
# Linux Log Analysis

This page docs the common log file in linux system. To see how to use command line to analyze them, see [Bo Cyber Logbook - Log Analysis](../network-analysis/log-analysis.md)

By default, Linux is a "silent" operator. It logs **system health** and **access**, but it doesn't log **user activity**. 

Out of the box, Three Major Linux Logs:

- **Who** arrived (Login via `auth.log`). (or `/var/log/secure)
- **How** the engine is running (Service status via `syslog`).
- **What** the web server served (Web traffic via `access.log`).

### Some Common Logs: 
- `/var/log/httpd`: Contains HTTP Request  / Response and error logs. Linux is the server for most website so this is important. 
- `/var/log/cron`: Events related to cron jobs are stored in this location.
- `/var/log/kern.log`: Kernel messages and errors, useful for more advanced investigations
- `/var/log/dpkg.log (or /var/log/apt)`: Package manager logs on Debian-based systems
- `/var/log/dnf.log (or /var/log/yum.log)`: Package manager logs on RHEL-based systems
- `~/.bash_history`: command history `history`


## Auditd - User Activity Log - [Bo Cyber Logbook - Linux Auditd Log](linux-auditd.md)
Like mentioned, user activty dese not get logged out of the box. In that case, we need a special tool called `auditd` (similar to sysmon in Windows) This is the standard tool for tracking **Runtime Events**. It monitors "System Calls" (when a program asks the kernel to do something).

### How does it work? 
When user types `whoami` in a shell, the shell will triger exec function in linux: \
`whoami` -> shell do `exec("/usr/bin/whoami")` -> kernel \
The `auditd` tools track this system call and log it. 

### Wait!
However, this can result in a massive amount of data, creating a lot of noise in SIEM. Therefore, we need to selectively log data that useful to us. We write **Audit Rules** to watch only for high-risk behavior:

- **The "Watch" List:** Only log changes to sensitive files (e.g., `/etc/shadow`, `/etc/passwd`).
- **The "Binary" List:** Only log when specific commands are run (e.g., `nmap`, `netcat`, `chmod`, `useradd`).
- **The "Process" List:** Log when a web server (like Apache) tries to launch a shell (`/bin/sh`).

### How do We see it?
We can view the generated logs in real time in `/var/log/audit/audit.log`, but it is easier to use the `ausearch` command, as it formats the output for better readability and supports filtering options.




## Entended Readings
- [Bo Cyber Logbook - Linux Auditd Log](linux-auditd.md)
- [Bo Cyber Logbook - Log Analysis](my-cyber-logbook/soc-level1/network-analysis/log-analysis.md)
- [Bo Cyber Logbook - Snort](../tools/snort.md)  << unlike `auditd`log endpoint activity, Snot focus on network log.


---
Last Modified: 2026-01-03


