---
creation date: 2025-12-05 12:47
modified: 2025-12-05 12:47
tags:
---
> The term **kill chain** is a military concept related to the structure of an attack. It consists of target identification, decision and order to attack the target, and finally the target destruction.

- [Reconnasissance](reconnasissance.md)
	- Gather info 
- Weaponization
	- create Malware, exploits, payload
- Delivery
	- phishing, USB, [watering-hole](watering-hole.md)
- Exploitation
	- Exploitation is the moment the attacker's code executes on the target, taking advantage of a known vulnerability
	- malicious macro exe, 0-day, known CVEs
- Installation
	- back door
	- Once the attacker gets access to the system, he would want to reconnect back to the system if he loses the connection to it or if he got detected and got the initial access removed.
	- web shell, meterpreter, [masquerading](masquerading.md), [Timestomp](Timestomp.md)
- Command & Control 
	- C2
	- continuing talking the C2 server 
- Actions on Objectives
	- In this stage, the attacker gains full control and does whatever he sets out to do
	- collect and exfiltrate data
	- overwrite data 
	- later movement to other machine


## Extended Reading
- [unified-kill-chain](unified-kill-chain.md)