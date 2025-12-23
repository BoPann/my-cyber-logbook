# IDS
>Intrusion Detection System

If firewall is the gatekeeper, then IDS would be the security guard, catching the bad actors that gatekeeper fail to block. 


### Types 
- HIDS (host-based)
- NIDS (network-based)
### Modes
- Signature-based (vulnerable to 0-day)
- Anomaly-based (prevent 0-day but can generate many fasle-positive)
- hybrid-based

### IDS vs IPS (Intrusion Prevention System)
IPS is an active protecting solution for preventing possible malicious activities/patterns, abnormal incidents, and policy violations. It is responsible for stopping/preventing/terminating the suspicious event as soon as it is detected.
- IDS can identify threats but requires user assistance to stop them.
- IPS can identify and block threats with less user assistance at the time of detection.