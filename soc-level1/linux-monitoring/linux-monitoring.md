---
creation date: 2025-12-26 11:34
modified: 2025-12-28 14:12
tags:
  - cyber/dfd
  - cyber/networking
  - cyber/sys
---
# Linux Security Monitoring

<p align="center"> <img src="../../cyber-img/chandler-dance.png" style="width: 80%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: 15px;"> </p>

## 1. Overview
Look, Linux is the "Monica" of operating systems—it's organized, it's efficient, and it's basically running the entire apartment... I mean, the **Internet**. Between servers, embedded systems, and "The Cloud" (which, let's be honest, is just someone else's Linux computer in a fancy sweater), it’s everywhere!

But because it’s so popular, it’s also a total magnet for trouble. It’s like being the only person in the group with a car—everyone wants a piece of you, and usually, they’re going to leave a mess in the backseat. It is officially at the top of every hacker's "Must-Visit" list. To do this, we need 2 important skills. 1. **Process Tree Analysis** 2. **Linux Log Analysis**

### 1.1 Skills - Process Tree Analysis
- Default Linux logs are terrible for process tree analysis. So this only work on `auditd`
- Flow - Look for a suspecious process id's(pid) parent process id (ppid) and keep doing that until a complete tree is built. 
- Example
	- Continuing the example, we begin by locating the suspicious command in the logs with `ausearch -i -x whoami`. Next, we walk up the process tree using the `--pid` option until you reach PID 1, the OS process. The tree eventually shows that `whoami` was launched by a Python web application (`/opt/mywebapp/app.py`).


### 1.2 Skills - Linux Log Analysis
- For system level analysis see [Bo Cyber Logbook - Linux Log Analysis](linux-log-analysis.md)
- For using command line for analysis, see [Bo Cyber Logbook - Log Analysis](../network-analysis/log-analysis.md)
- For undersntaning linux auditd log, see [Bo Cyber Logbook - Auditd log](linux-auditd.md)


## 2. Description
### 2.1 SOC Indicators - SSH 
check `/var/log/auth.log`. There might be indicator for brute-force attack such as multiple failed log in attempt from the same source. 

### 2.2 SOC Indicators - Attacker's first foothold (Initial Access)

| Discovery Goal                | Typical Commands                                                       |
| ----------------------------- | ---------------------------------------------------------------------- |
| OS and Filesystem Discovery   | `pwd`, `ls /`, `env`, `uname -a`, `lsb_release -a`, `hostname`         |
| User and Groups Discovery     | `id`, `whoami`, `w`, `last`, `cat /etc/sudoers`, `cat /etc/passwd`     |
| Process and Network Discovery | `ps aux`, `top`, `ip a`, `ip r`, `arp -a`, `ss -tnlp`, `netstat -tnlp` |
| Cloud or Sandbox Discovery    | `systemd-detect-virt`, `lsmod`, `uptime`, `pgrep "<edr-or-sandbox>"`   |

### 2.3 SOC Indicators - Then they will want to move laterally or steal data

| Attack Objectives                                     | Typical Commands                                                       |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Find and steal credentials and other sensitive data   | `history \| grep pass`, `find / -name .env`, `find /home -name id_rsa` |
| Identify how suitable the system is for crypto mining | `cat /proc/cpuinfo`, `lscpu \| grep Model`, `free -m`, `top`, `htop`   |
| Scan the internal network for other future victims    | `ping <ip>`, `for ip in 192.168.1.{1..254}; do nc -w 1 $ip 22 done`    |


### 2.4 SOC Indicators - Persistence

| Attack Objectives                  | Typical Commands                                                                                                                                         |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monitor changes in cron job files  | `/etc/crontab`, `/etc/cron.d*`, `/var/spool/cron/*`, `/var/spool/crontab/*`                                                                              |
| Monitor changes in systemd folders | `/lib/systemd/system/*`, `/etc/systemd/system/*`, and [less common](https://manpages.ubuntu.com/manpages/questing/en/man5/systemd.unit.5.html) locations |
| Monitor related processes such as  | `nano /etc/crontab`, `crontab -e`, `systemctl start\|enable <service>`                                                                                   |
| Add Users                          | `useradd`, `usermod`                                                                                                                                     |

### 2.5 SOC Indicators - Botnet
"Hack and Forget" attacks are usually automated and performed at scale by botnets. The attacker doesn't care _who_ the victim is. They use automated scripts to scan the entire internet for a specific vulnerability. They hack, drops the payload, and forget about it. They don't want your data; they just want your **electricity and CPU power**.

We check `top` or `Auditd`. If we find a process named `[kworker]` (trying to look like a Linux kernel process) using 90% CPU.


## Extended Readings: 
- [Bo Cyber Logbook - Web Security Monitoring](../web-monitoring/web-monitoring.md)
- [Bo Cyber Logbook - Windows Security Monitoring](../win-monitoring/windows-monitoring.md)
- [Bo Cyber Logbook - Network Analysis](../network-analysis/network-analysis.md)
- [Bo Cyber Logbook - Phishing Analysis](../phishing-analysis/phishing.md)


---
Last Modified: 2025-12-28 \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


