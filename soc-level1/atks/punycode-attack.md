---
creation date: 2025-12-04 21:02
tags:
  - cyber/atk
  - reading
  - jot-down
urgency:
---

# Punycode

## Overview
Punycode is a special encoding system that converts Unicode characters (used in writing systems like Chinese, Cyrillic, and Arabic) into ASCII. A **Punycode attack** exploits lookalike Unicode characters in domain names to create fake but visually identical URLs for phishing and credential theft.

## Example
`apple.com`
`xn--pple-43d.com` = `apple.com`

## Metigation
## Modern browsers try to:
- Block mixed‑script domains
- Show punycode when suspicious


