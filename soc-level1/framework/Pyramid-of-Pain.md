
# Pyramid of Pain
## Overview
>The Pyramid of Pain shows how much it “hurts” an attacker when you detect or block certain types of indicators.

>Bottom = easy for the attacker to bypass.  
Top = extremely hard and expensive to bypass.

## Description
1. Hash Values (very little pain)
	- I.e, a specific malware file
	- Attacker just recompiles, adds a byte, packs the file → new hash instantly.
2. IP addr
	- C2 attack
	- Attacker updates DNS to a new IP.
3. domain Names
	- C2 attack, but this time we got their domains
	- Attacker must register a new one and rebuild the lure.
4. host artifacts, network artificts (wireshark, tshark)
	- file path on the system
	- These are tied to how the malware **functions**. Changing them requires modifying the malware code.
	- Attackers need change code and redeploy
5. tools (this level will give attackers headache)
	- [fuzzy hashing](../atks/fuzzy-hashing.md)
	- Metasploit
	- Attacks need to write new malware, change tools
6. TTPs - Tactics, Techniquee & Procedures
	- I.e, Phishing + PowerShell + C2 + lateral movement pattern
	- Attackers must **fundamentally change their approach**, training, and operational playbook.

>Learning about the **Pyramid of Pain** completely changed how I look at security incidents. It gives you more than just “an event”. It gives you a whole perspective. It helps connect what you’re seeing to the attacker’s mindset, and lets you understand the impact on _both_ sides of the fight.