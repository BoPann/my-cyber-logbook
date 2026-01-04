---
creation date: 2025-12-10 21:25
modified: 2025-12-10 21:36
tags:
  - help-desk
  - cyber/windows
  - cyber/tool
  - cyber/sys
---
# Windows Log Types
## 1. Overview
The **Windows Log** is a centralized archive where the operating system and applications record significant actions, errors, and security events. Each record is called an **Event**. When things happen, this is the place to look. 

## 2. Description
- **Security:** Events related to security auditing (most commenly viewed)
	- User authentication attempts, account creation or modification, access to files and registry keys, process execution, system restarts or log clearing, and changes to audit or security policies.
- **Application:** Events logged by software applications (e.g., a program crash or successful database connection).
- **System:** Events logged by Windows system components and drivers (e.g., driver failures, system startup/shutdown).
- **Setup:** Events related to Windows installation, updates, and domain controller changes.

## 3. Why it Matters?
- Event Log is like a record, it helps Help desk or SOC analyst to figure what's going on. 

