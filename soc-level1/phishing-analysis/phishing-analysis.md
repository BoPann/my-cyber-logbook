---
creation date: 2025-12-11 12:06
modified: 2025-12-12 21:54
tags:
  - cyber/dfd
---

# Phishing Analysis
Have you been phished?

## 1. Overview
- Do not click any link!!!
- check header
	- does the sender detail addr match the sender mail addr?
- check body 
- check source code (there is a lot of information in here)
- Usually there is link, check the link source
	- has it been shortened? see: [shortened-url](../atks/shortened-url.md)

## 2. Description

### 2.1 DO NOT CLICK LINKS (Have I said that already?)
- In fact, as SCO analyst, we should always "Defang" the email. Deganging means to **modify a potentially malicious indicator (like a URL or IP address) to make it non-functional and safe to share.** 
- [Defang Web](https://gchq.github.io/CyberChef/#recipe=Defang_URL(true,true,true,'Valid%20domains%20and%20full%20URLs')&input=aHR0cDovL3QudGVja2JlLmNvbQ&ieol=CRLF&oeol=CRLF)

### 2.2 Some Common Tactics
- **Spoofed email address**
- **URL shortening services**
- **HTML to impersonate a legitimate brand**
- **Pixel tracking**. See [pixel-tracking](../atks/pixel-tracking.md)
* Link manipulation
* Credential harvesting - [example on anyrun](https://app.any.run/tasks/12dcbc54-be0f-4250-b6c1-94d548816e5c/)
* typosquatting - see [typosquatting](../atks/typosquatting.md)


### 2.3 Tools of Trade
Here are some tools that come in handy for analyzing email. They are also useful tools in general too!

- Header Analysis
	- https://toolbox.googleapps.com/apps/messageheader/analyzeheader
	- https://mha.azurewebsites.net/
	- https://mailheader.org/
- IP and DNS - [Bo Cyber Logbook - Threat Intelligence](../../../threat-intelligence.md)
- Website Analysis
	- screenshot - https://www.url2png.com/#testdrive
	- URL info with screenshot https://urlscan.io/
	- request and response - https://www.wannabrowser.net/
	- reputation - https://talosintelligence.com/reputation_center/lookup?search=capitai-one.com
	- URL info with screenshot https://urlscan.io/


- Extracting link is tedious, here are some tools to help with that (thank god)
	- https://www.convertcsv.com/url-extractor.htm
	- https://gchq.github.io/CyberChef/#recipe=Extract_URLs(false,false,false)

- File Hash - [Bo Cyber Logbook - Threat Intelligence](../../../threat-intelligence.md)

- Sandbox tool
	- https://app.any.run/
	- https://hybrid-analysis.com/


## Extended Readings: 
- [Bo Cyber Logbook - Threat Intelligence](../../../threat-intelligence.md)

---
last modified: 2026-01-02