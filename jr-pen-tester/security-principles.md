---
creation date: 2026-01-11 20:54
modified: 2026-01-11 20:54
tags:
---

# Security Principles

## CIA 
- **Confidentiality** ensures that only the intended persons or recipients can access the data.
- **Integrity** aims to ensure that the data cannot be altered; moreover, we can detect any alteration if it occurs.
- **Availability** aims to ensure that the system or service is available when needed.

- **Authenticity**: Authentic means not fraudulent or counterfeit. Authenticity is about ensuring that the document/file/data is from the claimed source.
- **Nonrepudiation**: Repudiate means refusing to recognize the validity of something. Nonrepudiation ensures that the original source cannot deny that they are the source of a particular document/file/data. This characteristic is indispensable for various domains, such as shopping, patient diagnosis, and banking.

## DAD
The opposite of CIA
- Disclosure
- Alteration
- Destruction/ Denial

## Bell-LaPadula Model
The Bell-LaPadula Model aims to achieve **confidentiality** by specifying three rules:
- no read up 
- no write down
## Biba Model
The Biba Model aims to achieve **integrity** by specifying two main rules:
- no read down
- no write up


## Design Principles ISO/IEC 19249
1. Least Privilege
2. Attack Surface Minimisation
3. Centralized Parameter Validation - validate user's input
4. Centralized General Security Services - centralize security service
5. Prepare for Error and Exception Handling



---
Last Modified: 2026-01-11


