---
creation date: 2025-12-11 18:22
modified: 2025-12-11 18:22
tags:
  - cyber/atk
---
# Shortened URL
> Hmm... something looks fishy. (it probably is)

## Overview 
Many atks (especially [Phishing](my-cyber-logbook/soc-level1/phishing/phishing.md)) like to shorten their URL to make it look less suspecious. It help hide their real domain and bypass the security check (evasion). 

## Description 
### How to spot a shortened link? 
- check common domain. I.e, `bit.ly/xxxx`, `goo.gl/xxxx` (discontinued), `t.co/xxxx` (Twitter), `youtu.be/xxxx` (YouTube), `tinyurl.com/xxxx`. 
- inspect the structure. A short URL typically consists of the domain name and a very short, random path (the characters after the first single slash).
	- **Normal URL Structure:** `[domain]/[descriptive-path]/[file-name]`
	- **Shortened URL Structure:** `[short-domain]/[random-key]`