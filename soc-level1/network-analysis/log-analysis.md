---
creation date: 2025-12-17 12:34
modified: 2026-01-06 11:22
tags:
  - cyber/linux
  - cyber/tool
---
# Log Analysis

<p align="center"> <img src="../../cyber-img/dwight-sheriff.png" style="width: 80%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: 15px;"> </p>

## 1. Overview
Log is a record of events. Part of what analysts do is to know how to extract valuable information from a pile of logs. Often times we need to do **Event Correlation** by checking different logs sources to identify signifiant events. 

### 1.1 Logs Types
- host-centric logs 
- network-centric logs 

## 2. Description
While analyzing log, we want to have an idea of what the fields look like. This is easy if we are using GUI tool like Splunk. We simply nevagate to the left panel to see them (we can also add them to the filter, too) 

However, in **command line Interface** environment, this can get really overwhelming. In my experience, it typically involves these steps: 
- `cat` or `head` file - we want to have an idea of how it looks like. What fields does it have? 
- `cut` file - this steps is extracting the field we want and also make it less noise. 
	- `cut [delimiter] file -f3-5 | sort | uniq -c` 
	- `cut -d ' ' -f1 apache.log | sort|uniq -c| sort -n` - notice the first sort is preparing data for uniq. uniq is a lazy flag, and it can only compare itself to the neighbor. The second sort if used to sort the result. 
	- `sort -n -r ` sort numerically in reverse order
	- `sed` - modify files (kinda like refactoing)
	- `awk` - kida like sql to filter result with conditional logic. `awk '$9 >= 400' apache.log`
	
- `grep` - filter noise and keep the data that's valuable to us
	- -n: locate the line number
	- -c: return the count
	- -v: exclude the pattern
	- -e: or logic in grep
	- we can grep multiple items by using multiple greps
	- -E search for a pattern using regex `grep -E 'post=1[0-9]' apache-ex2.log`
	- -i: regardless of the lower or upper case

- Regex (Regular Expression) - advanced filtering. I need to use online tool to do this most of the time. 
	- \b([0-9]{1,3}\.){3}[0-9]{1,3}\b
		- `[0-9]{1,3}` - Matches one to three digits to match numbers from 0 to 999. While IPv4 addresses octets cannot exceed 255, this simplified pattern works for our use case.
		- `\.` - Escapes and matches a literal `.` character in the IP address.
		- `{3}` - Specifies that the previous capturing group `([0-9]{1,3}\.)` should be repeated three times.
		- `[0-9]{1,3}` - Again, this matches numbers from 0 to 999, completing the fourth octet of the IP address.

### 2.2 Tools (more to come)
- Sigma
- Yara

## Resources:
- [Sed & AWK](https://www.theunixschool.com/p/awk-sed.html)
- [Grep](https://www.gnu.org/software/grep/manual/grep.html)

## Extended Readings: 
- [Bo Cyber Logbook - Linux Log Analysis](../linux-monitoring/linux-log-analysis.md)
- [Bo Cyber Logbook - Linux Security Monitoring](../linux-monitoring/linux-monitoring.md)
- [Bo Cyber Logbook - Web Monitoring](../web-monitoring/web-monitoring.md)
- [Bo Cyber Logbook - Windows Security Monitoring](../win-monitoring/windows-security-monitoring.md)



---
Last Modified: 2026-01-06


