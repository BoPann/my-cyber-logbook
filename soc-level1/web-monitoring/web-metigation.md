---
creation date: 2025-12-21 12:21
modified: 2025-12-28 00:11
tags:
---
# Metigation

## Overview 
There are few mechinism in place to ensure the security of a web app. 
- Security Header
- WAFs
- CDN

## 1. Security Header
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options
- Referrer-Policy

### 1.1 HttpOnly vs HSTS

| **Feature**          | **HttpOnly Cookie Flag**                                    | **HSTS (HTTP Strict Transport Security)**       |
| -------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| **What it protects** | Protects the **Cookie** itself.                             | Protects the **Connection**.                    |
| **Primary Goal**     | Prevents scripts (like JavaScript) from reading the cookie. | Forces the browser to only talk via **HTTPS**.  |
| **Prevents...**      | **Session Hijacking** via Cross-Site Scripting (XSS).       | **Man-in-the-Middle (MITM)** and SSL Stripping. |

## 2. WAFs
**Web Application Firewalls (WAFs)** are often the first line of defense for websites and web applications. WAFs act as gatekeepers for your web applications, inspecting full request packets

## 3. CDN
CDNs store and serve cached content from servers closer to the user to reduce latency. Imagine you have a main server housed in a central location. This main server provides information to edge servers worldwide so your customers can access data more quickly and safely. Aside from speed, CDNs also help in a security sense by acting as a buffer between the user and the origin server.

- IP Masking: Hides the origin server IP address, which makes it harder for attackers to target.
- DDoS Protection: CDNs can absorb a large amount of traffic, making denial-of-service attacks less effective.
- Enforced HTTPS: Encrypted communication via TLS is enforced by default by most CDNs.
- Integrated WAF: Many CDNs, including [Cloudflare CDN](https://www.cloudflare.com/), [Amazon CloudFront](https://aws.amazon.com/cloudfront/) & [Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview), integrate web application firewalls.

## 4. Bypassing CDN
The CDN might serve a cached URL at `/products`, but if an attacker appends the query with a random string like `/products?a=abcd`, the CDN cannot serve the cached page, and the origin server is forced to respond. Similarly, changing user agents, spoofing referrer pages, or launching requests from diverse geographic regions can help attackers evade WAF filtering rules.

## Extended Readings: 
- [Parent Page - Bo Cyber LogBook - Web Security Monitoring](web-monitoring.md)

---
Last Modified: 2025-12-28 \


