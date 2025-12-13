---
creation date: 2025-12-04 22:48
modified: 2025-12-04 22:48
tags:
  - cyber/dfd
---
# Fuzzy Hashing

## Overview
Small changes to a file completely break traditional hashes, which attackers abuse to make malware look “new” even when it’s basically the same.

## Solution
Fuzzy hashing solves this by hashing a file in smaller pieces and comparing those chunks. Even if the file is modified, we can still measure how similar it is and spot related malware samples.