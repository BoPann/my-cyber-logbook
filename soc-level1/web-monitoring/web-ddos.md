# DDOS
The most obvious indicator is the spike of ips, either from same ip or from different ips.

## Indicator from the log 
- **Sudden Traffic Spikes:** An unexplained, massive surge in bandwidth consumption or connection requests.
- **Service Unavailability:** Users reporting "503 Service Unavailable" errors or the website timing out completely.
- **High CPU/Memory Usage:** Server resources reaching 100% despite no legitimate increase in user activity.
- **Geographic Anomalies:** A flood of traffic originating from IP ranges in countries where you don't typically have a customer base.
- **Specific Pattern Matching:** Thousands of requests targeting a single URL, port, or specific asset (like a search bar or login page).
- **Ping Timeouts:** Network latency increases drastically, or `ping` requests to the server fail consistently.
- **Log Overload:** Web server logs filling up rapidly with repetitive requests from a wide variety of source IP addresses.

## Prevention 
see detail - [Bo Cyber Logbook - Metigation](web-metigation.md)
- challenge - CAPTCHA
- CDN
- WAF


### Bypassing CDN
Your CDN might serve a cached URL at `/products`, but if an attacker appends the query with a random string like `/products?a=abcd`, your CDN cannot serve the cached page, and the origin server is forced to respond. Similarly, changing user agents, spoofing referrer pages, or launching requests from diverse geographic regions can help attackers evade WAF filtering rules.


## Entended Readings:
- [Parent Page - Bo Cyber Logbook - Web Security Monitoring](web-monitoring.md)

---
Last Modified: 2025-12-28 \
Have Questions? Shoot me a text >> [Linkedin](https://www.linkedin.com/in/bopann/)



