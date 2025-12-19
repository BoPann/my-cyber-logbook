# Network Analysis

## Overview

- **Observation (Detection):** Identifying a deviation from the established "baseline." This is spotting the **symptom**—whether it's a slow PC (Helpdesk) or an unusual outbound connection (SOC).
- **Isolation:** Separating the "signal" from the "noise." You use tools like `grep`, Splunk, or Wireshark filters to remove legitimate traffic so only the **suspicious activity** remains.
- **Validation (Confirmation):** Correlating the isolated data with forensic evidence or threat intelligence to prove a **security incident** occurred.

We will see this throughout the detection below:
- [Network Discovery Detection](network-discovery.md)
- [Data Exfiltration Detection](data-exfiltration-detection.md)
- [MITM Detection](mitm-detection.md)


Network perimeter - the border control
- Firewalls: Gatekeepers that filter traffic between internal and external networks.
- Routers/Gateways: Devices that route traffic and enforce access rules.
- Demilitarized Zone (DMZ): A buffer network segment where public-facing servers (web, mail, VPN) are placed.
- Remote Access Gateways / VPNs: Secure entry points for employees working outside the office.

## Extended Readings
- [Bo Cyber Logbook - Log Analysis](log-analysis.md)