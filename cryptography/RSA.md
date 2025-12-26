---
creation date: 2025-12-07 12:35
modified: 2025-12-07 12:35
tags:
  - cyber/crypto
---
# RSA

>Used for digital signature. authentication of the msg comes from that person you are talking to

RSA works by choosing two large primes, multiplying them, and using modular exponentiation for encryption and decryption. It’s secure because factoring a huge number back into its two primes is computationally infeasible, and reversing modular exponentiation without the private key is mathematically hard. The public key tells you nothing about the private key.

## Digital Signature

Digital signatures are a way to ensure **integrity, authenticity, and non-repudiation** of a message. Algorithms such as **RSA, ECDSA, or EdDSA** can be used for generating digital signatures. **Diffie-Hellman is not used for digital signatures**, it is used for securely exchanging keys.