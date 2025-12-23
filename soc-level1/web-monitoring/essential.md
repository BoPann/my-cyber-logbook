CDN
CDNs store and serve cached content from servers closer to the user to reduce latency. Imagine you have a main server housed in a central location. This main server provides information to edge servers worldwide so your customers can access data more quickly and safely. Aside from speed, CDNs also help in a security sense by acting as a buffer between the user and the origin server.

- IP Masking: Hides the origin server IP address, which makes it harder for attackers to target.
- DDoS Protection: CDNs can absorb a large amount of traffic, making denial-of-service attacks less effective.
- Enforced HTTPS: Encrypted communication via TLS is enforced by default by most CDNs.
- Integrated WAF: Many CDNs, including [Cloudflare CDN](https://www.cloudflare.com/), [Amazon CloudFront](https://aws.amazon.com/cloudfront/) & [Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview), integrate web application firewalls.