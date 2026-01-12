---
creation date: 2025-12-31 22:11
modified: 2026-01-02 22:03
tags:
  - cyber/dfd
---
# Threat Intelligence
**When deciding whether an alert warrants further investigation, the right tools make all the difference.** This is where **Threat Intelligence** comes in—leveraging existing data to help analysts make faster, more informed decisions.

## Website
- screenshot - https://www.url2png.com/#testdrive
- URL info with screenshot https://urlscan.io/
- request and response - https://www.wannabrowser.net/
- reputation - https://talosintelligence.com/reputation_center/lookup?search=capitai-one.com

## File and Hash Threat Intel
- virustotal - https://www.virustotal.com/gui/home/upload
	- behavioral insights
	- threat intelligence (label, trend, etc...) 
	- mitre technique
- MalwareBazaar - https://bazaar.abuse.ch/
- hybrid analysis - https://hybrid-analysis.com/
- https://talosintelligence.com/talos_file_reputation
- LOLBin - https://lolbas-project.github.io/#
- CrackHash (known mapping of hash) - https://crackstation.net/

## IP Intel
### 2 questions to ask 
1. Who owns the IP? 
2. What service does it expose?

### DNS 
 - https://www.nslookup.io/
 - https://dnschecker.org/
 - https://mxtoolbox.com/SuperTool.aspx
 
### IP
- location - https://tools.keycdn.com/geo
- service - https://www.shodan.io/ , https://search.censys.io/
- certficate - https://crt.sh/
- https://www.whois.com/whois/
- https://lookup.icann.org/en 
- https://ipinfo.io/

## Sandbox tool
- https://app.any.run/
- https://hybrid-analysis.com/


## Intel Classifications
- **Strategic intel**: High-level intelligence that looks into the organisation's threat landscape and maps out the risk areas based on trends, patterns and emerging threats that may impact business decisions. An example is an annual ransomware trends report predicting a shift to data-wiping extortion in healthcare.
    
- **Tactical intel**: Assessments of adversaries' behaviours through analysis of tactics, techniques, and procedures (TTPs). This can be in the form of Advisory notes, such as detailing new T1059.005 (Visual Basic) abuse in malspam.
    
- **Operational intel**: Campaign-specific details about the motives and intent to perform an attack. This is useful for understanding the critical assets available in the organisation (people, processes, and technologies) that may be targeted.
    
- **Technical intel**: Atomic indicators and artefacts such as IPs and hashes related to an attack.


### CTI Life Cycle
1. Direction
2. Collection
3. Processing
4. Analysis
5. Dissemination
6. Feedback



## Extended Readings:
- [Bo Cyber Logbook - Phishing Analysis](my-cyber-logbook/soc-level1/phishing-analysis/phishing-analysis.md)

---
Last Modified: 2026-01-02

