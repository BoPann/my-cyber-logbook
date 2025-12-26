---
creation date: 2025-12-07 12:20
modified: 2025-12-07 12:20
tags:
  - cyber/crypto
---
# AES
> Most Common use case - session key in TLS (after a shared key is established)


- impossible to brute force (2^128 at least)  
- fast to compute but diffcult to guess 
- blocker cipher 


Symmetric just means:
- Sender encrypts with key K
- Receiver decrypts with the same key K
>This has nothing to do with strength.  
The strength comes from **how hard it is to recover K**.