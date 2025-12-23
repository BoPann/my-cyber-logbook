
# Day 22 Detecting C2

## Overview
### RITA (Real Intelligence Threat Analytics)
- open-source framework to detect C2 including: 
	- C2 beacon detection
	- DNS tunneling detection
	- Long connection detection
	- Data exfiltration detection
	- Checking threat intel feeds
	- Score connections by severity
	- Show the number of hosts communicating with a specific external IP
	- Shows the datetime when the external host was first seen on the network

`Rita only read zeek log! So we need to convert pcap file to zeek first`

3 steps: 
1. convert pcap to zeek
2. have RITA read zeek log
3. open RITA terminal