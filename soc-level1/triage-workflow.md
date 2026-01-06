---
creation date: 2026-01-02 17:44
modified: 2026-01-03 13:03
tags:
  - cyber/dfd
---

# Triage Workflow

## Overview
**SOCs are often bombarded with a massive number of alerts.** Having a clear workflow in place—and knowing exactly what to do at each stage—can significantly reduce analyst fatigue and anxiety.

At its core, alert triage comes down to one key question:  
**Does this alert require further investigation?**

## 1. Verify (Is this real?)
The first step is to confirm the alert isn't a "False Positive." we are looking for the "Truth" behind the data.
### Scenerio
"The SIEM says there's a virus on a laptop. Does that file actually exist on the disk, or was it just a temporary browser file that the antivirus already blocked?"

## 2. Enrich (What’s the context?)
Once you know the alert is real, we need more information to understand the danger. This is where we use **Cyber Threat Intelligence (CTI)**.
### Scenerio
"The laptop has a suspicious file. I’ll check **VirusTotal** to see if other companies have seen this file. I’ll check the **User’s Identity**—is this a regular employee or an IT Admin with high-level access?"

## 3. Decide (What do I do now?)
After having the full picture, we choose the best response (Remediation).
### Scenerio    
"This is a targeted malware attack on an Admin account. I will **Isolate the Host** from the network, **Reset the User's Password**, and escalate to the Level 2 Incident Response team."

## Table View

| **Step**      | **What you do (Workflow)**                      | **The Skill required**                                                                                                                                      |
| ------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Verify** | Determine if the alert is a "False Positive."   | **Knowing which logs to check.** (e.g., checking host logs to see if a file was actually executed). Tools: SIEM, Log                                        |
| **2. Enrich** | Add context via Threat Intel (CTI) or identity. | **Understanding the baseline.** (e.g., is it "normal" for this specific user to access these files?). Who owns this IP? Tools: VirusTotal, Whois, AD... etc |
| **3. Decide** | Remediate or escalate the threat.               | **Explaining your decision.** Why esclating?                                                                                                                |


---
Last Modified: 2026-01-05


