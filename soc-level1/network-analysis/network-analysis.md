---
creation date: 2025-12-12 22:57
modified: 2025-12-27 16:18
tags:
  - cyber/dfd
  - cyber/networking
---
# Network Analysis

<p align="center"> <img src="../../cyber-img/darryl-michael-warehouse.png" style="width: 80%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: 15px;"> </p>

## Overview
Look, analyzing the network is like... it’s like a footprint. If a bad guy walks through your kitchen, he’s gonna leave a footprint. Unless he’s a ghost. Are we dealing with ghosts? Toby, shut up. We’re not dealing with ghosts.

The problem is, the network log is **huge**. (That's what she said) If I go down to the warehouse and I say, 'Hey, find me the one invoice where someone bought a single paperclip,' Darryl is going to look at me and say, 'Michael, there are billions of papers here.'

That's why we need a 1. Right techinque 2. Deep networking knowledge

## Description
### Techinque 
- **Observation (Detection):** Identifying a deviation from the established "baseline." This is spotting the **symptom**—whether it's a slow PC (Helpdesk) or an unusual outbound connection (SOC).
- **Isolation:** Separating the "signal" from the "noise." You use tools like `grep`, Splunk, or Wireshark filters to remove legitimate traffic so only the **suspicious activity** remains.
- **Validation (Confirmation):** Correlating the isolated data with forensic evidence or threat intelligence to prove a **security incident** occurred.

## Scenerios
With right technique, we can apply them to differnt scenerios: 
- [Network Discovery Detection - who's here?](network-discovery.md)
- [MITM Detection - who's earsdroping? ](mitm-detection.md)
- [Data Exfiltration Detection - who's stealing data?](data-exfiltration-detection.md)

## Extended Readings: 
Here are tools we need to analyze traffics
- [Bo Cyber Logbook - Log Analysis](log-analysis.md)
- [Bo Cyber Logbook - Wireshark](../tools/wireshark.md)
- [Bo Cyber Logbook - Snort](../tools/snort.md)

---
Last Modified: 2025-12-27  \

