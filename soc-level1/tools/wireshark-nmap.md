---
creation date: 2025-12-14 13:43
modified: 2025-12-14 14:12
tags:
  - cyber/tool
---

## Wireshark Port Scan
Here are some common filter in wiereshark to detect port scanning including **TCP** and **UDP**

### TCP Scan

|**Flag Combination**|**Description (Nmap Context)**|**Decimal Value Filter (tcp.flags == X)**|**Boolean Filter (tcp.flags.flag == 1)**|
|---|---|---|---|
|**SYN**|Start connection (Request: SYN Scan, Connect Scan)|`tcp.flags == 2`|`tcp.flags.syn == 1`|
|**ACK**|Acknowledgment (Data Transfer)|`tcp.flags == 16`|`tcp.flags.ack == 1`|
|**SYN, ACK**|Acknowledgment of SYN + Synchronize (Open port response)|`tcp.flags == 18`|`(tcp.flags.syn == 1) and (tcp.flags.ack == 1)`|
|**RST**|Reset/Immediate end of connection (Stealth Scan close)|`tcp.flags == 4`|`tcp.flags.reset == 1`|
|**RST, ACK**|Reset/Immediate end + Acknowledgment (Closed port response)|`tcp.flags == 20`|`(tcp.flags.reset == 1) and (tcp.flags.ack == 1)`|
|**FIN**|Finish/Graceful end of connection (FIN Scan)|`tcp.flags == 1`|`tcp.flags.fin == 1`|
|**NULL**|No flags set (NULL Scan)|`tcp.flags == 0`|_(No specific single flag filter)_|
|**Global Search**|Any TCP Traffic|_(Not applicable)_|`tcp`|

### UDP Scan

|**Packet Type**|**Description**|**Wireshark Filter**|**Port Status Indication**|
|---|---|---|---|
|**ICMP Type 3, Code 3**|Destination Unreachable, Port Unreachable|`icmp.type==3 and icmp.code==3`|**Closed UDP Port**|


>last modified: 2025-12-14