# Data Exfiltration Detection

Data is the core of the cybersecurity (and probably the modern technology). It is not surprised that bad actors want to steal data. 

oberservation
isolation
confirmation

### Common phases related to exfiltration
- **Discovery / Collection**: attacker locates sensitive files. 
- **Staging / Compression**: attacker aggregates, compresses, encrypts, or encodes files (ZIP, RAR, 7z, tar, base64, steganography).
- **Exfiltration transport**: transfer over network, removable media, cloud, or covert channels.
- **Command & Control (C2) coordination**: orchestrates transfer and confirms receipt.

### Indicators 
- Large or frequent outbound uploads (proxy/firewall) 
- Long or high-entropy DNS queries 
- Suspicious process command-lines and network connections (Sysmon/EDR)-
- Cloud storage API activity, removable-media events

### DNS Tunneling 
- Basic indicators
	- weird subdomain 
	- abnormal size of query
- Advanced indicators 
	- hight entropy or base32/64 patterns in the query names
	- rare record types (TXT, NULL)
	- regular intervals (beacons)
	- ![weird subdomain](../imgs/weird-subdomain.png)
---
### FTP
Indicators 
- abnormal large packet size
- look for keyword such as "USER", "PASS", "STOR"
- Reading Reading: [Bo Cyber Logbook - Wireshark FTP](../tools/wireshark-ftp.md)
---
HTTP
- perhaps the most common protocol 
- large HTTP request to an external host
- chunked or multipart transfers where multiple requests compose a larger file.
---
SMTP 
It is commonly allowed through firewalls and typically inspected less strictly than TCP/UDP, attackers sometimes abuse ICMP to tunnel and exfiltrate data.
- high entropy, base64 
- huge payload (normal ping ~74 bytes)
- type 8 echo | type 0 reply


