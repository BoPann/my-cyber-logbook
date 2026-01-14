# Broken Access Control (IDOR)

## Overview 
Guess what's the most critical web application security risk is? It's broken access control. Image you walk in to a bank and go straight into the vault where all the money are stored. That easy? It is if no one was checking along the way. 

## Description 
- **Widespread Prevalence:** OWASP found that **94% of applications** tested had some form of broken access control.
- **High Impact:** It has the largest "attack surface" in modern software, with 34 different types of weaknesses (CWEs) mapped to it.
- **Complexity:** It is difficult to automate testing for this because access control is often tied to unique business logic (e.g., _should User A be able to see Document B?_).

## 3 Mitigations
- **Deny by Default:** This is the most critical rule. Instead of listing what a user _can't_ do, start by blocking everything and explicitly grant access only to what is necessary for their role.
- Enforce the Principle of Least Privilege (PoLP)
- **Enforce Ownership Controls:** Every time a user requests a record (e.g., `GET /invoice/12345`), the server must check if that specific user actually owns that invoice, not just if they are a "logged-in user."


## Resouces:
- [https://owasp.org/Top10/2021/A01_2021-Broken_Access_Control/](https://owasp.org/Top10/2021/A01_2021-Broken_Access_Control/)