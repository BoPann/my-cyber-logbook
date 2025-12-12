---
creation date: 2025-12-11 23:28
modified: 2025-12-11 23:28
tags:
  - cyber/atk
---
# XSS (Cross-Site Scripting)
> The art of injecting codes 

## 1. Overview 
XSS is a type of vulnerability that allows an attacker to **inject malicious client-side script** into a webpage viewed by other users.

## 2. Description 

### 2.1 Stored XSS
- code is injected to the server (dangerous). Eveyone who visits the web will execute the code

### 2.2 Reflected XSS
- attacker crafts a malicious URL containing the script and send it to the victims
- usually requires some social engineering such as [phishing](../phishing/phishing.md)