
After the mid-review, I dove deeper into security monitoring. While the mid-review helped me learn how to use individual tools, I also learned how to combine frameworks such as the Cyber Kill Chain and MITRE ATT&CK to detect and trace attacks.

I learned how to analyze logs using different tools, including CLI utilities, Linux logs, Windows process logs, auditd, Sysmon, Splunk, Wireshark, and Snort, in order to validate my assumptions. Instead of looking at logs in isolation, I started applying what I learned to reason through incidents. 

For example, when a system slows down, I would first check the system logs and notice a process consuming over 90% of the CPU. I would then investigate the process ID to see what it was doing—only to find that it was connecting to an external IP. At that point, it becomes clear that we’re dealing with a hack-and-forget attack, where an attacker is using the machine for unauthorized computing power.


initial access
discovery
previlege escalation
lateral movement
collection
defense evasion
persistence
exfiltration

