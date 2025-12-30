---
creation date: 2025-12-27 11:55
modified: 2025-12-27 12:44
tags:
  - cyber/articles
  - cyber/atk
---
# MGM Data Breach
source: [https://netwrix.com/en/resources/blog/mgm-cyber-attack/](https://netwrix.com/en/resources/blog/mgm-cyber-attack/)

<p align="center"> <img src="../cyber-img/dwight-casino.png" style="width: 80%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: 15px;"> </p>
It took less than 10 minutes on a LinkedIn profile and a single phone call to the helpdesk to bring a $14 billion gambling empire to its knees. No zero-days, no complex coding—just a voice on the line and a password reset that changes everything. 

So how did that happen???

## Analysis with Cyber Kill Chain
### 1. Reconnaissance
-  Scattered Spider members researched MGM employees on LinkedIn, gathering information about their roles and identities.

### 2. Social Engineering
- Using the gathered information, the attackers chose an MGM employee to impersonate.
-  The hackers called MGM’s IT help desk, posing as the employee and successfully convinced the help desk into providing them with login credentials.

### 3. Credential Access 
- Using the obtained credentials, Scattered Spider gained administrator privileges to MGM’s Okta and Azure tenant environments.

### 4. Persistence
- Once inside, the attackers registered their own MFA devices to keep access.

### 5. Lateral Movement
- The attackers used their high-level access to move laterally within MGM’s systems.

### 6. Impact & Objectives
- They shut down hotel digital keys, slot machines, and encrypted servers for ransom.


## Thoughts 
The incident is quite recent (2023), and it shows that social engineering is still very effective. The silver lining? This could have been avoided with better employee awareness and training.

## Extended Readings
- [Bo Cyber Logbook - Cyber Kill Chain](../soc-level1/framework/cyber-kill-chain.md)


---
Last Modified: 2025-12-27  \


