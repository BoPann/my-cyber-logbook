# Linux Log

- Linux logging can be chaotic, but it often stores enough details to detect the threat
- Logs are kept in `/var/log/` folder by default and are usually stored in plain text
- The top three log sources for SOC are auth.log, app-specific logs, and runtime logs
- Bash history is unreliable for SOC; better use auditd or an alternative solution

The first and most useful log
- `/var/log/auth.log` (or `/var/log/secure`)



- /var/log/httpd: Contains HTTP Request  / Response and error logs.
- /var/log/cron: Events related to cron jobs are stored in this location.
- /var/log/auth.log and /var/log/secure: Stores authentication-related logs.
- /var/log/kern: This file stores kernel-related events.
- `/var/log/kern.log`: Kernel messages and errors, useful for more advanced investigations
- `/var/log/syslog (or /var/log/messages)`: A consolidated stream of various Linux events
- `/var/log/dpkg.log (or /var/log/apt)`: Package manager logs on Debian-based systems
- `/var/log/dnf.log (or /var/log/yum.log)`: Package manager logs on RHEL-based systems
- `~/.bash_history`: command history
- `history` 


whoami -> shell do exec("/usr/bin/whoami") -> kernel 





## Entended Readings
- [Log Analysis](my-cyber-logbook/soc-level1/network-analysis/log-analysis.md)