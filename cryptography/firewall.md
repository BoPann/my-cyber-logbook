---
creation date: 2025-12-07 14:44
modified: 2025-12-07 14:44
tags:
  - cyber/networking
---
>protection between the networking you are protecting and the outside internet. 


## Types of firewall
1. stateless
	- layer 3 and 4 OSI
	- no memory from previous connection
	- each pacekt is indepedent
2. stateful 
	- layer3 and 4 OSI 
	- with memory of IP! so it can block certain ip onward
3. proxy 
	- check the contents too
	- layer 7 on OSI (application) 
4. NGFW 
	- next generation firewall
	- IDS
	- block IP instantly
	- layer 3 - 7 OSI protection

## Basic firewall componets
- **Source address:** The machine’s IP address that would originate the traffic.
- **Destination address:** The machine’s IP address that would receive the data.
- **Port:** The port number for the traffic.
- **Protocol:** The protocol that would be used during the communication.
- **Action:** This defines the action that would be taken upon identifying any traffic of this particular nature.
- **Direction:** This field defines the rule’s applicability to incoming or outgoing traffic.


## Manage
- In windows we use GUI
- In linux we can use ufw (uncomplicated firewall)
	- `ufw status`
	- `ufw enable`
	- `ufw default deny incoming`
