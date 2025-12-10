---
creation date: 2025-12-09 16:30
modified: 2025-12-09 16:30
tags:
  - cyber/tool
---
# MITRE
## 1. Overview
MITRE is a comprehansive framework including aspect from attacking to defending. 
- **ATT&CK** defines **who** the adversary is and **how** they attack (Offense).
- **CAR** provides the **specific logic** (analytics/queries) needed in your tools (like Splunk) to **detect** the ATT&CK techniques (Detection).
- **D3FEND** provides the **countermeasures** to **prevent, deny, and disrupt** the ATT&CK techniques (Defense/Prevention).

## 2. Description

### 2.1 TTPs
- Tactic - goal and objective (why)
- Techinuque - How
- Procedure - the implementation

### 2.2 MITRE ATT&CK - [ATT&CK](https://attack.mitre.org/)
- ATT&CK is a **knowledge base** of adversary behavior, outlining Tactics (the _why_ of an attack, e.g., Persistence) and Techniques (the _how_, e.g., Scheduled Task). It tracks behaviors based on **real-world observations**, often attributed to APTs (Adversary Groups). It directly provides **Mitigations** and **Detection** opportunities for each technique.


### 2.3 MITRE CAR (Cyber Analytics Repo)
- CAR is explicitly a **knowledge base of analytics** developed by MITRE that leverages the ATT&CK model. It defines a data model and includes **pseudocode** descriptions, often with direct implementations for specific tools like **Splunk** and **EQL** (Event Query Language). Its goal is to provide validated, well-explained ways to _detect_ the adversary behaviors documented in ATT&CK. [Splunk](Splunk.md)

### 2.4 D3FEND (Detection, Denial, and Disruption Framework Empowering Network Defense) - [D3FEND](https://d3fend.mitre.org/)
- D3FEND is designed as a **complementary framework** to ATT&CK, focusing on the **defensive side**. It is a **knowledge graph** that provides a structured, standardized taxonomy of defensive cybersecurity countermeasures and their relationships to offensive techniques (from ATT&CK). It organizes defensive techniques into tactics like **Harden**, **Detect**, **Isolate**, and **Deceive**.

## 3. Why it Matters?
This is a handbook for a SOC analyst to do research and serve as a guideline when an incident happens. 

There are tons of different attacks happening every day, and the landscape changes fast. 
MITRE gives us a shared playbook so we can understand, detect, and respond to those incidents more effectively.

- ATT&CK - explains who the adversary is and how they operate. (Offense)
- CAR - gives you the actual detection logic (analytics/queries) for tools like Splunk can use to spot those ATT&CK techniques. (Detection)
- D3FEND - outlines the defensive techniques that prevent, block, or disrupt those attacks. (Defense/Prevention)

## 4. Extended Readings