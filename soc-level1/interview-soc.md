---
creation date: 2026-01-01 16:46
modified: 2026-01-01 16:46
tags:
---

- What is port? 
- what is port scanning
- indicators of malicious powershell command (obsucated code, IEX)


### Fundamentals & Technical

1. **What is the CIA Triad?** Confidentiality (privacy), Integrity (accuracy), and Availability (uptime).
    
2. **Explain the difference between IDS and IPS.** IDS (Intrusion Detection System) monitors/alerts; IPS (Intrusion Prevention System) monitors and actively blocks threats.
    
3. **What is SIEM?** Security Information and Event Management. It centralizes logs and uses "correlation rules" to find patterns that look like attacks.
    
4. **What is a False Positive vs. a False Negative?** False Positive: Benign activity flagged as a threat. False Negative: A real threat that went undetected.
    
5. **Explain the TCP 3-Way Handshake.** SYN (synchronize), SYN-ACK (acknowledge), and ACK. Essential for understanding how connection-oriented traffic begins.
    
6. **What are IoCs (Indicators of Compromise)?** Digital breadcrumbs like malicious IP addresses, file hashes (MD5/SHA), or suspicious URLs that suggest a breach.
    
7. **What is the difference between Hashing and Encryption?** Hashing is one-way (irreversible, for integrity); Encryption is two-way (requires a key to decrypt, for confidentiality).
    
8. **What is a Zero-Day exploit?** A vulnerability that is unknown to the software vendor and has no available patch.
    
9. **What is the difference between Symmetric and Asymmetric encryption?** Symmetric uses one shared key; Asymmetric uses a public/private key pair.
    
10. **What is Risk, Vulnerability, and Threat?** Vulnerability is a weakness; Threat is the actor/method to exploit it; Risk is the potential loss if they succeed ($Risk = Threat \times Vulnerability$).
    
11. **Explain the "Cyber Kill Chain."** A framework (Recon, Weaponization, Delivery, etc.) describing the stages an attacker must complete to succeed.
    
12. **What is ARP, and how is it used in attacks?** Address Resolution Protocol maps IP to MAC. Attackers use "ARP Poisoning" to sit in the middle of a connection.
    
13. **What is a DDoS attack?** A Distributed Denial of Service attack that floods a system with traffic from multiple sources to crash it.
    
14. **What is Cross-Site Scripting (XSS)?** Injecting malicious scripts into trusted websites to steal user sessions or data.
    
15. **What is SQL Injection?** Injecting malicious SQL queries into input fields to manipulate or leak database data.
    

### Scenario & Process

16. **How do you handle a phishing alert?** Quarantine the email, check if the user clicked links/files, reset credentials if needed, and block the sender's domain.
    
17. **What are the stages of Incident Response?** Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned.
    
18. **How do you stay updated on threats?** Mention specific sources like BleepingComputer, KrebsOnSecurity, or the SANS Internet Storm Center.
    
19. **What is Defense-in-Depth?** Layering security controls (firewalls, EDR, training) so that if one fails, others are in place to stop the threat.
    
20. **How do you prioritize alerts?** Based on **impact** (how many users/systems) and **urgency** (how critical is the affected asset).
    

### Connecting the Dots (Helpdesk to SOC)

21. **How does your helpdesk experience help you as a SOC Analyst?** It built my "investigative mindset." I know how users act and how "normal" system behavior looks, making it easier to spot anomalies.
    
22. **What is the difference between a SOC and a NOC?** A NOC (Network Ops Center) focuses on performance and uptime; a SOC focuses on security and threat detection.
    
23. **How do you explain a technical security risk to a non-technical user?** Use analogies (e.g., "A firewall is like a bouncer at a club") and focus on the business impact rather than the technical exploit.
    
24. **Describe your experience with Ticketing Systems.** (Mention ServiceNow, Jira, etc.) Emphasize how you document "Chain of Custody" or detailed notes for handovers.
    
25. **What is Endpoint Detection and Response (EDR)?** It’s like an "advanced antivirus" that monitors behavior on a laptop/server to detect and block threats in real-time.
    
26. **What common ports should a SOC analyst know?** 22 (SSH), 80 (HTTP), 443 (HTTPS), 53 (DNS), 3389 (RDP).
    
27. **How do you handle a "noisy" alert?** Analyze if it's a false positive; if so, work with Level 2/3 to "tune" the SIEM rule to reduce alert fatigue.
    
28. **What is Data Exfiltration?** The unauthorized transfer of sensitive data outside an organization (e.g., via USB or cloud storage).
    
29. **What is Privilege Escalation?** When an attacker gains a low-level account and tries to gain "Admin" or "Root" permissions.
    


## Resources
-[MyDFIR - SOC Analyst](https://www.youtube.com/watch?v=DLVR2QpkWCk&t=2s)


---
Last Modified: 2026-01-01 


