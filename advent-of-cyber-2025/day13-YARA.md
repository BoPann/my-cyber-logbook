---
creation date: 2025-12-13 10:41
modified: 2025-12-13 10:41
tags:
  - cyber/tool
---
# YARA

## Overview 
YARA is a tool that identify and classify malware by the pattern. And by pattern, it means identifying **specific textual or binary sequences** (Strings) and **structural characteristics** within a file or memory to create a unique **signature** for a malware family.

## Description
- **Strings:** These are unique, observable artifacts of the malware, such as:
    - **Text strings** (e.g., file names, registry keys, error messages).
    - **Hexadecimal byte patterns** (e.g., specific code fragments or function calls).
    - **Regular expressions** (to catch common, structured patterns).
- **Conditions:** The rule uses Boolean logic (`AND`, `OR`, `NOT`) to specify **how many** and **which** of these patterns must be present for a match to occur, allowing it to catch variants of the same malware family.

## Thoughts 
It seems to me Yata can be used as a powerful searching engine of the local file. (Of course it can be used for detecting malwar too). I might dive deeper into this tool later on! More to come!

>last modified: 2025-12-13 