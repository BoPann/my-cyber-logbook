---
creation date: 2025-12-05 12:47
modified: 2025-12-05 12:47
tags:
---

# Cyber Kill Chain
The **Unified Kill Chain** is an evolved framework that builds upon the foundations of the original **Lockheed Martin Cyber Kill Chain** to provide a more comprehensive view of modern attacks. Here I just called it Cyber Kill Chain 


<p align="center"> <img src="../../cyber-img/andy-prius.png" width="80%" style="border-radius: 15px;"> </p>
>The term **kill chain** is a military concept related to the structure of an attack. It consists of target identification, decision and order to attack the target, and finally the target destruction. 

## Why Matters?
Knowing this help the defenders predict the nest step of the attackers, and it allows them to better defend the system. If we as defenders see a C2 beacon (Command & Control), we shouldn't go back and try to find the Delivery (still important during invistigation). Instead, we should watch out for data exfiltration which might the the attackers' objectives.  

## Description
- [Reconnasissance](../atks/reconnaissance.md)
	- Gather info 
	- google dorking (or any dorking)
- Weaponization
	- create Malware, exploits, payload
- Delivery
	- phishing, USB, [watering-hole](../atks/watering-hole.md)
- Exploitation
	- Exploitation is the moment the attacker's code executes on the target, taking advantage of a known vulnerability
	- malicious macro exe, 0-day, known CVEs
- Installation
	- back door
	- Once the attacker gets access to the system, he would want to reconnect back to the system if he loses the connection to it or if he got detected and got the initial access removed.
	- web shell, meterpreter, [masquerading](../atks/masquerading.md), [Timestomp](../atks/Timestomp.md)
- Command & Control 
	- C2
	- continuing talking the C2 server 
- Actions on Objectives
	- In this stage, the attacker gains full control and does whatever he sets out to do
	- collect and exfiltrate data
	- overwrite data 
	- later movement to other machine

## Details
<p align="center"> <img src="../imgs/UKC.png" width="80%" style="border-radius: 15px;"> </p>



## Extended Readings
- [Bo Cyber Logbook - MITRE](MITRE.md)
- [Bo Cyber Logbook - Pyramid of Pain](Pyramid-of-Pain.md)