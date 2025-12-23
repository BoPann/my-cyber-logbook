# Snort
Snort is an open-source, rule-based Network Intrusion Detection and Prevention System (NIDS/NIPS).

## 1. Overview
### Types
- Wireless Intrusion Prevention System (WIPS): WIPS monitors the traffic flow from a wireless network. Its aim is to protect wireless traffic and stop possible attacks launched from there. If a signature is identified, the connection is terminated.

- Host-based Intrusion Prevention System (HIPS): HIPS actively protects the traffic flow from a single endpoint device. The aim is to investigate the traffic on a particular device. If a signature is identified, the connection is terminated.

- **Network Intrusion Prevention System (NIPS)**: NIPS monitors the traffic flow from various areas of the network. The aim is to protect the traffic on the entire subnet. If a signature is identified, the connection is terminated.

- **Behaviour-based Intrusion Prevention System (Network Behaviour Analysis - NBA)**:Behaviour-based systems monitor the traffic flow from various areas of the network. The aim is to protect the traffic on the entire subnet. If an anomaly is identified, the connection is terminated.

## 2. Description 
### 2.1 Sniffer Mode
- -v verbose more 
- -d more details than verbose

### 2.2 Logger mode 
- `dev -l` logging mode
- `dev -K ASCII -l`. (show ing ASCII. Avoid using this. The limitation is that it won't be able to utilized after.) 
- `sudo snort -r snort.log.1638459842` - to read the generated log
- `sudo tcpdump -r snort.log.1638459842 -ntc 10 - show 10`
- `sudo snort -r logname.log tcp` 
- `sudo snort -r logname.log -X` extra details

2.3 IPS mode 
- `sudo snort -c /etc/snort/snort.conf -T` - check the configuration

### 2.4 pcap invistigation mode
- `snort -r icmp-test.pcap`
- `sudo snort -c /etc/snort/snort.conf -q --pcap-list="icmp-test.pcap http2.pcap" -A console --pcap-show` - investigate multiple pcap file


### 2.5 Snort Rule

#### Example
`alert udp any any -> any any (msg:"UDP detected!!!Same SRC and DEST";sameip; sid:1000001; rev:1;)`

- The **`sid`** is the unique identifier for the rule. No two rules in your entire system should have the same `sid`.
	- **< 1,000,000:** Reserved for official Snort distribution rules (the ones Cisco/Talos writes).
	- **≥ 1,000,000:** Used for **local rules** (the ones you write).

- The **`rev`** is the version number of that specific rule. You start at `rev:1`. If you later change the rule (e.g., you change the message or the logic), you increment it to `rev:2`.

## Why it Matters?
- **The "Talos" Advantage:** It’s backed by Cisco Talos, one of the world's largest threat intelligence teams. When a new hack is discovered, they release a Snort rule almost immediately.
- **Legacy Friendly:** Because it's lightweight (single-threaded), it can run on older hardware—perfect for the **"if it works, don't touch it"** legacy environments you'll find in **Helpdesk** and **SCADA** support.
- **Customization:** You can write your own rules. If a SCADA engineer says, "No one should ever write to Register 502," you can write a Snort rule to alert you the second it happens.