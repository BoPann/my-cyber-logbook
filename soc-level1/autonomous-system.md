---
creation date: 2026-01-02 21:43
modified: 2026-01-02 23:15
tags:
  - cyber/networking
---

# Autonomous System (AS)

The Internet is not one single giant network; it is a **"network of networks."** An **Autonomous System (AS)** is one of those large networks (or a group of networks) managed by a single organization that has a unified routing policy.

## SOC Indicators 
If an IP address is like a **phone number**, then an **Autonomous System (AS)** is the **service provider or carrier** behind it. The AS helps identify the network “owner” or example, AT&T, Google, or a small ISP in France that’s responsible for routing traffic for that IP.

This context matters. If an IP belongs to a known **VPN-associated AS**, it might indicate someone is using a VPN. Or if you see 50 attacks coming from 50 different IPs that all belong to **Amazon’s AS**, it’s a strong sign that someone is using cloud-based scripts to rotate IPs and bypass your firewall.

---
Last Modified: 2026-01-02


