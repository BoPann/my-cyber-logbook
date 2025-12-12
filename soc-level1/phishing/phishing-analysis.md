
# Phishing Analysis
> Have you been phished?

## 1. Overview
> Do not click any link!!!
- check header
	- does the sender detail addr match the sender mail addr?
- check body 
- check source code
- Usually there is link, check the link source
	- has it been shortened? see: [shortened-url](../../cyber-img/shortened-url.md)

## 2. Description

### 2.1 DO NOT CLICK LINKS
- In fact, as SCO analyst, we should always "Defang" the email. Deganging means to **modify a potentially malicious indicator (like a URL or IP address) to make it non-functional and safe to share.** 
- [Defang Web](https://gchq.github.io/CyberChef/#recipe=Defang_URL(true,true,true,'Valid%20domains%20and%20full%20URLs')&input=aHR0cDovL3QudGVja2JlLmNvbQ&ieol=CRLF&oeol=CRLF)

### 2.2 Some Common Tactics
- **Spoofed email address**
- **URL shortening services**
- **HTML to impersonate a legitimate brand**
- **Pixel tracking**. See [pixel-tracking](../atks/pixel-tracking.md)
* Link manipulation
* Credential harvesting - [example on anyrun](https://app.any.run/tasks/12dcbc54-be0f-4250-b6c1-94d548816e5c/)
* typosquatting - see [typosquatting](../../pi-hole-set-up/imgs/typosquatting.md)


### 2.3 Tools of Trade
> Here are some tools that come in handy for analyzing email. 

- Header Analysis
	- https://toolbox.googleapps.com/apps/messageheader/analyzeheader
	- https://mha.azurewebsites.net/
	- https://mailheader.org/
- IP Analysis
	- https://ipinfo.io/
- Website Analysis
	- https://www.url2png.com/#testdrive
	- https://www.wannabrowser.net/#get=https://bopan.me
	- https://urlscan.io/result/019b0fbe-4531-73eb-aa6f-4bb0473391f6/
	- https://talosintelligence.com/reputation_center/lookup?search=capitai-one.com
- Domain Analysis
	- https://mxtoolbox.com/SuperTool.aspx

- extract link is tedious, here are some tools to help with that (thank god)
	- https://www.convertcsv.com/url-extractor.htm
	- https://gchq.github.io/CyberChef/#recipe=Extract_URLs(false,false,false)

- when we have a hash of a file, we can scan it using: 
	- https://talosintelligence.com/talos_file_reputation
	- https://www.virustotal.com/gui/home/upload

- sandbox tool
	- https://app.any.run/
	- https://hybrid-analysis.com/
