# SOC Report
![Ryan](../cyber-img/ryan.png)
>It is essential to document what you see in the SIEM and determine if it needs to be escalated. 

## 1. Overview
### 1.1 5W 
- when - when did it happen?
- who - who was involved? (ip, name, domain, etc. )
- what - what is done? (the verb)
- where - where was it done? (directory, device, etc.)
- why

### 1.2 Action-Oriented Checklist
- Time of activity:
- List of Affected Entities:
- Reason for Classifying as True Positive:
- Reason for Escalating the Alert:
- Recommended Remediation Actions:
- List of Attack Indicators:

### 1.3 UKC
This is about how an attacker break in (attack vector) using [Unified Killed Chain](framework/unified-kill-chain.md) to provide a linear view. This is helpful to visualize the "story" in high level view.

### 1.4 MITRE ATT&CK
Similar to UKC, [MITRE](framework/MITRE.md) ATT&CK provides the attacker vector. But ATT&CK dives in more detailed tactics. This is helpful when it comes to forensics. 


## 2. Description
### 2.1 Scenerio 
![SIEM screenshot](imgs/SIEM-screenshot.png)
#### 2.1.1 Example 1
At 18:30 UTC(WHEN), m.boslan@tryhackme.thm (Martin Boslan, HR lead)(WHO), logged in to their Google Workspace(WHAT) from a trusted LPT-HR-0988 device, and a minute later attempted to download the whole HR folder on their laptop(WHERE), but was blocked by our DLP solution.(WHY)
#### 2.1.2 Example 2
 A minute later, Martin shared the 'Employee Records (Updated)' spreadsheet to an unidentified shadow18562@protonmail.thm Protonmail email. Although no events are followed, escalating the alert to communicate with Martin and report the incident to the Compliance team.


### 2.2 Mixed Style

| **Report Section**                                                                                              | **5W Mapping**              | **Example Content**                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time of Activity**                                                                                            | **WHEN**                    | Initial successful login from suspicious IP: 2025-12-15 10:35 AM UTC. Account disabled: 2025-12-15 11:05 AM UTC.                                                                                                                                                                |
| **List of Affected Entities**                                                                                   | **WHO** & **WHERE**         | **User:** Jane Doe (J.Doe@company.com), Finance Department. **Asset:** User workstation (JD-WKS-04), Account ID 8903. **Location:** External login from IP 192.0.2.14 (Brazil).                                                                                                 |
| **List of Attack Indicators**<br>                                                                               | **WHAT** & **HOW**          | Suspicious login from an outside country (192.0.2.14). 5 subsequent failed logins across 3 other users immediately following the initial success. Evidence of a successful connection to an external mailbox rule setting via M365 logs.                                        |
| (Below are more of what SOC did to confirm this is a threat)<br><br>**Reason for Classifying as True Positive** | **WHAT**                    | Confirmed successful login and subsequent mailbox manipulation from a geolocated risk country, followed by attempts to access other user accounts using the same stolen credentials.                                                                                            |
| **Reason for Escalating the Alert**                                                                             | **WHY** & **WHAT** (Impact) | The affected account belongs to the Finance team, and evidence suggests an attacker successfully created a mailbox forwarding rule to exfiltrate financial communications. High business risk.                                                                                  |
| **Recommended Remediation Actions**                                                                             | **HOW** (Action)            | 1. **(SOC)** Block IP 192.0.2.14 globally. 2. **(Helpdesk)** Contact Jane Doe for immediate password reset. 3. **(Helpdesk)** Re-image workstation JD-WKS-04 to eliminate persistent threats. 4. **(SOC/IT)** Review all other users on the initial failed login list (if any). |
|                                                                                                                 |                             |                                                                                                                                                                                                                                                                                 |
