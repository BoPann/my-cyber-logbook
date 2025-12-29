---
creation date: 2025-12-27 13:56
modified: 2025-12-28 23:16
tags:
---
# Third Quarter Reivew
## Overview
After the mid-review, I dove deeper into security monitoring. While the mid-review helped me learn how to use individual tools, I also learned how to combine frameworks such as the Cyber Kill Chain and MITRE ATT&CK to detect and trace attacks.

I learned how to analyze logs using different tools, including CLI utilities, Linux logs, Windows process logs, auditd, Sysmon, Splunk, Wireshark, and Snort, in order to validate my assumptions. Instead of looking at logs in isolation, I started applying what I learned to reason through incidents. 

For example, when a system slows down, I would first check the system logs and notice a process consuming over 90% of the CPU. I would then investigate the process ID to see what it was doing—only to find that it was connecting to an external IP. At that point, it becomes clear that we’re dealing with a hack-and-forget attack, where an attacker is using the machine for unauthorized computing power.

### Linked to Pages
- [Networking Analysis](soc-level1/network-analysis/network-analysis.md)
- [Web Security Monitoring](soc-level1/web-monitoring/web-monitoring.md)
- [Linux Security Monitoring](soc-level1/linux-monitoring/linux-monitoring.md)
- [Windows Security Monitoring](soc-level1/win-monitoring/windows-security-monitoring.md)


## Description
I evaluate investigation in different stages of Cyber Kill Chain including:  initial access, discovery, previlege escalation, lateral movement, collection, defense evasion, persistence, exfiltration 

## Table View

| Kill Chain Stage         | Linux – What to Investigate                     | Linux Logs / Commands                            | Windows – What to Investigate                | Windows Logs / Events                              |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------ | -------------------------------------------- | -------------------------------------------------- |
| **Initial Access**       | SSH brute force, web exploits, exposed services | `/var/log/auth.log`, `/var/log/secure`, web logs | Phishing, RDP brute force, exploited service | Event **4625**, **4624**, RDP logs                 |
| **Discovery**            | System & network enumeration                    | `whoami`, `id`, `uname -a`, `ip a`, `ps aux`     | Host, user, domain enumeration               | Event **4688**, PowerShell **4104**, Sysmon **1**  |
| **Privilege Escalation** | `sudo` abuse, kernel exploits, SUID binaries    | `/var/log/auth.log`, `find / -perm -4000`        | Token abuse, service exploit, LSASS access   | Event **4672**, Sysmon **10**                      |
| **Lateral Movement**     | SSH reuse, SCP, rsync                           | `/var/log/auth.log`, SSH logs                    | PsExec, WMI, SMB, RDP                        | Event **4624 (Type 3/10)**, **7045**, Sysmon **3** |
| **Collection**           | Data staging, compression                       | `tar`, `zip`, access to `/home`, `/etc`          | File staging, DB dumps                       | File access logs, archive creation                 |
| **Defense Evasion**      | Log deletion, auditd disable                    | Missing logs, stopped services                   | Defender disabled, logs cleared              | Event **1102**, Defender logs                      |
| **Persistence**          | Cron jobs, startup scripts, SSH keys            | `crontab -l`, `/etc/cron*`, `authorized_keys`    | Scheduled tasks, registry run keys, services | Event **4698**, **7045**                           |
| **Exfiltration**         | SCP, curl, DNS tunneling                        | Firewall logs, Netflow, Wireshark                | HTTPS, C2 traffic                            | Sysmon **3**, proxy/firewall logs                  |


---
Last Modified: 2025-12-28  \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


