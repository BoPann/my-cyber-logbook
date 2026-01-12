---
creation date: 2026-01-09 15:22
modified: 2026-01-09 15:22
tags:
---

# Threat Modeling

## Overview
Instead of reacting to an attack, you "think like a hacker" to map out what could go wrong and how to stop it. **Threat modeling** is a structured process of identifying potential security threats and vulnerabilities in a system or application _before_ they are exploited.

policy - CIA triad
assumption - assumption about adversary
mechanism - software, hardware, system

## Steps
- **Scope (What are we building?):** Create a diagram (Data Flow Diagram) of the system. Identify entry points and "trust boundaries" (where data moves from untrusted to trusted zones).
- **Identify (What can go wrong?):** Use a framework like **STRIDE** to brainstorm potential attacks on each part of your diagram.
- **Mitigate (What are we going to do about it?):** Decide how to handle each threat: **Reduce** it (add a firewall), **Transfer** it (insurance), **Eliminate** it (remove the feature), or **Accept** it.
- **Validate (Did we do a good job?):** Review the model to ensure all threats were addressed and the system matches the diagram.


## Framework
- PASTA (Process for Attack Simulation and Threat Analysis)
- STRIDE

---
Last Modified: 2026-01-09

