---
creation date: 2025-12-27 23:13
modified: 2025-12-28 00:14
tags:
  - cyber/dfd
  - cyber/networking
---
# Web Security Monitoring

We will spend 90% of our time looking at these two things:

- **WAF (Web Application Firewall) Logs:** These generate alerts like "SQL Injection Attempt Blocked." We need to verify if the block was effective or if the attacker is bypassing it.
- **Web Server Access Logs:** (Apache, Nginx, IIS). These show the "raw truth."
    - **Format Example:** `IP - - [Date] "METHOD /path HTTP/1.1" STATUS SIZE "Referrer" "User-Agent"`

## Indicators

| **Attack Type**                | **What to look for as a SOC**                                              |
| ------------------------------ | -------------------------------------------------------------------------- |
| **SQL Injection (SQLi)**       | Keywords: `SELECT`, `UNION`, `OR 1=1`, `--`, `SLEEP()`.                    |
| **Cross-Site Scripting (XSS)** | Tags: `<script>`, `alert()`, `onerror=`.                                   |
| **Path Traversal**             | Patterns: `../../`, `/etc/passwd`, , `/admin`, `C:\Windows\`.              |
| **Remote File Inclusion**      | Links: `http://malicious-site.com/shell.txt`.                              |
| Web Shell                      | Abnormal `POST` and `GET` see [Bo Cyber Logbook - Web Shell](web-shell.md) |
| DDos                           | spike of traffic [Bo Cyber LogBook - Web DDoS](web-ddos.md)                |
| Additionally                   | uncommon user-agent (although this can be fabricated)                      |


## Extended Readings:
- [Bo Cyber Logbook - Web Basics](web-basics.md)


---
Last Modified: 2025-12-28  \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


