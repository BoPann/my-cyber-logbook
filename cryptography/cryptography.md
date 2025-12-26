---
creation date: 2025-12-06 22:58
modified: 2025-12-25 23:44
tags:
  - cyber/crypto
---
# Cryptography

- **Plaintext** is the original, readable message or data before it’s encrypted. It can be a document, an image, a multimedia file, or any other binary data.
- **Ciphertext** is the scrambled, unreadable version of the message after encryption. Ideally, we cannot get any information about the original plaintext except its approximate size.
- **Cipher** is an algorithm or method to convert plaintext into ciphertext and back again. A cipher is usually developed by a mathematician.
- **Key** is a string of bits the cipher uses to encrypt or decrypt data. In general, the used cipher is public knowledge; however, the key must remain secret unless it is the public key in asymmetric encryption. We will visit asymmetric encryption in a later task.
- **Encryption** is the process of converting plaintext into ciphertext using a cipher and a key. Unlike the key, the choice of the cipher is disclosed.
- **Decryption** is the reverse process of encryption, converting ciphertext back into plaintext using a cipher and a key. Although the cipher would be public knowledge, recovering the plaintext without knowledge of the key should be impossible (infeasible).

## types of Encryption
>same key for both encryption and decryption? 

1. symmetric 
	- aka `private key cryptography`
	- **DES** was adopted as a standard in 1977 and uses a 56-bit key. With the advancement in computing power, in 1999, a DES key was successfully broken in less than 24 hours, motivating the shift to 3DES.
	- **3DES** is DES applied three times; consequently, the key size is 168 bits, though the effective security is 112 bits. 3DES was more of an ad-hoc solution when DES was no longer considered secure. 3DES was deprecated in 2019 and should be replaced by AES; however, it may still be found in some legacy systems.
	- **AES** was adopted as a standard in 2001. Its key size can be 128, 192, or 256 bits. [AES](AES.md)
2. asymmetric
	- aka `public key cryptography`
	- asymmetric encryption is based on a particular group of mathematical problems that are easy to compute in one direction but extremely difficult to reverse [RSA](RSA.md)

## Key points that Cryptography is solving

- **Authentication**: You want to be sure you communicate with the right person, not someone else pretending. 
- **Authenticity**: You can verify that the information comes from the claimed source.
- **Integrity**: You must ensure that no one changes the data you exchange.
- **Confidentiality**: You want to prevent an unauthorised party from eavesdropping on your conversations.
In real life, when meeting the person, these can be easily achieved. But on the internet, it is impossible for 2 people to do that. 

## New analogy on public key
- public key - lock 
- private key - key to the lock

>last modified: 2025-12-25 

