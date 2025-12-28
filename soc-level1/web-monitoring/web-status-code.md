---
creation date: 2025-12-27 23:44
modified: 2025-12-28 00:17
tags:
  - cyber/networking
---
# Status Code

## The Five Families
- **1xx (Informational):** Request received, continuing process. (Rarely seen in SOC triage).
- **2xx (Success):** The server did what the user asked. **High priority if the request was malicious.**
- **3xx (Redirection):** The resource moved. (Watch for "Open Redirect" phishing).
- **4xx (Client Error):** The request was bad or unauthorized. (Indicates scanning/fuzzing).
- **5xx (Server Error):** The server crashed or failed. (Indicates an exploit might be working).


## Must Know Code

|**Code**|**Name**|**SOC Meaning / Investigation Tip**|
|---|---|---|
|**200**|**OK**|**The Danger Zone.** If you see a SQL injection attempt and the response is `200`, the attacker might have successfully extracted data.|
|**401**|**Unauthorized**|**Authentication needed.** A spike in 401s from one IP suggests a **Brute Force** or **Credential Stuffing** attack.|
|**403**|**Forbidden**|**Access Denied.** The server understood the request but refuses it. Often triggered by a WAF blocking an attack.|
|**404**|**Not Found**|**Fuzzing/Scanning.** If one IP generates hundreds of 404s, they are likely using a tool like `Dirbuster` to find hidden files/folders.|
|**429**|**Too Many Requests**|**Rate Limiting.** The attacker is sending requests too fast. This is a clear indicator of automated tooling.|
|**500**|**Internal Error**|**Potential Exploit.** An attacker's payload (like a Buffer Overflow) might have crashed the application logic.|

# Extended Readings:
- [Parent Page - Bo Cyber LogBook - Web Security Monitoring](web-monitoring.md)

---
Last Modified: 2025-12-28  \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


