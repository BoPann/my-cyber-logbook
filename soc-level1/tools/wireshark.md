# Wireshark 

## Overview 
- Detecting and troubleshooting network problems, such as network load failure points and congestion.
- Detecting security anomalies, such as rogue hosts, abnormal port usage, and suspicious traffic.
- Investigating and learning protocol details, such as response codes and payload data.

## 2. Description 
### 2.1 There are so many to learn in here. I will document things that I think can be helpful. 
 - see file details: statistics - >capture file property 
 - merge file: ffile -> merge 
 - right click on packet allows us to apply fiter 
 - we can also color the packet as well 
 - find packet 
	 - go -> go to pkt (simple search)
	 - edit -> find pkt (a more complacated search, allows us to search inside packets, covering packet list, packet details and packet bytes)
		 - pkt list: the summary view we see in wireshark
		 - pkt details: the detailed tree view (double click view)
		 - pkt bytes: the binary representaton
- mark packts (in black by dadult, will be gone after closing) 
- time display: view -> time display format
- expert section: analyze -> expert information (aloows us to see all the warning and error...)
- Filter Query 
	- **right click (or analyze) -> apply as filter**: this will yield to the packet that apply to the field
	- sometimes we want to see all linked packet to the selected packet, **right click (or analyze) -> conversation filter**: this will yield to all linked conversation to that packet
	- sometime we want to add multiple filter, we can do **prepare filter** to add multipel filter to the search pane
	- sometimes we just want to see a session of a conversation. we can do **analyze -> follow stream** to do this. 
- Statistic - show everything all at once
	- when watching a movie, it is important to have an idea of the roles. So is in analyzing traffic, we want to know who are playing. **statistics -> resolved address** allows us to see the ip addr in this pcap file. 
	- same above, we can also view the proportion of the protocol by doing **statistics -> protocol hierarchy
	- **endpoint** allows us to see more unique info such as contry
	- Name resolution is not enbaled by default. To enable do **Edit --> Preferences --> Name Resolution**
	- 
- For details see [Wireshark Official Guide](https://www.wireshark.org/docs/)

### 2.2 Common Analysis
- [Nmap Scan](wireshark-nmap.md)


## Limitation 
Wireshark is not an Intrusion Detection System (IDS). It only allows analysts to discover and investigate the packets in depth. It also doesn't modify packets; it reads them. Hence, detecting any anomaly or network problem highly relies on the analyst's knowledge and investigation skills.