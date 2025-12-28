---
creation date: 2025-12-28 00:00
modified: 2025-12-28 00:17
tags:
  - cyber/networking
---

# Common HTTP Header

|**Header**|**Security Importance**|**SOC Red Flag**|
|---|---|---|
|**Host**|Which domain the user is visiting.|Seeing an internal IP address or unexpected subdomain.|
|**Authorization**|Contains credentials (e.g., `Bearer <token>` or `Basic <base64>`).|Frequent changes in tokens or Base64 strings from one IP (Session Hijacking).|
|**Referer**|The URL the user came from.|`Referer: <malicious-site.com>`—indicates a phishing link or CSRF attack.|
|**X-Forwarded-For**|Shows the "real" user IP if they are behind a proxy/VPN.|Multiple IPs in one list or an IP known for being a Tor Exit Node.|
|**Content-Type**|Tells the server how to read the Body (e.g., `application/json`).|Changing to `text/xml` to try a different exploit (like XXE) on a JSON endpoint.|

## Extended Readings: 
- [Parent Page - Bo Cyber LogBook - Web Security Monitoring](web-monitoring.md)

---
Last Modified: 2025-12-28  \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)


