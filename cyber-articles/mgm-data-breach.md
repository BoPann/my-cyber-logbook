---
creation date: 2025-12-27 11:55
modified: 2025-12-27 12:44
tags:
  - cyber/articles
  - cyber/atk
---
# MGM Data Breach
source: [https://netwrix.com/en/resources/blog/mgm-cyber-attack/](https://netwrix.com/en/resources/blog/mgm-cyber-attack/)

## Articles
### Reconnaissance
-  Scattered Spider members researched MGM employees on LinkedIn, gathering information about their roles and identities.
### Initial Access (with social engineering)
- Using the gathered information, the attackers chose an MGM employee to impersonate.
-  The hackers called MGM’s IT help desk, posing as the employee and successfully convinced the help desk into providing them with login credentials.
### Credential Access 
- Using the obtained credentials, Scattered Spider gained administrator privileges to MGM’s Okta and Azure tenant environments.
### Lateral Movement
- The attackers used their high-level access to move laterally within MGM’s systems.
### Impact & Objectives
- They shut down hotel digital keys, slot machines, and encrypted servers for ransom.

## Thoughts 
The incident is quite recent (2023), and it shows that social engineering is still very effective. The silver lining? This could have been avoided with better employee awareness and training.

## Extended Readings
- [Bo Cyber Logbook - Cyber Kill Chain](../soc-level1/framework/cyber-kill-chain.md)


---
Last Modified: 2025-12-27  \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


