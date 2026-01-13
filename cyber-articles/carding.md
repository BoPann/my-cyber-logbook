
# Carding
**I came across an article (Article #1) from Cyber Threat Intelligence that got me curious about what “carding” is.** That led me to another article (Article #2) from Stripe, a financial company that provides online payment processing for businesses.

**Carding refers to the unauthorized obtaining, trafficking, or use of credit card information.** Threat actors steal card data through various methods—phishing, keylogging, and more. Once obtained, the information is often sold on underground marketplaces, where it’s used for fraudulent transactions that can sometimes evade detection.

## Here are the finds after analyzing the carding infrastructure
- Team Cymru identified 28 unique IP addresses and 85 domains hosting carding markets or carding forums.
- These IPs were hosting the Login Pages or Forum Landing Pages of these sites.
- Many of the ASNs hosting carding infrastructure were offshore infrastructure providers.
- The most common top level domains (TLDs) used by carding infrastructure are .su, .cc, and .ru.

I was also curious about what “.cc” refers to. (Articles #3) Turns out it was initially for Cocos (Keeling) Islands, an Australian territory. It was introduced in 1997 to represent this region. However, .cc grew beyond its regional origins and became a versatile option for other businesses.



## Resoucres:
1. Researchers Uncover 28 Unique IPs and 85 Domains Hosting Carding Markets - [https://www.linkedin.com/pulse/researchers-uncover-28-unique-ips-85-domains-hosting-pbgac/](https://www.linkedin.com/pulse/researchers-uncover-28-unique-ips-85-domains-hosting-pbgac/)
2. What is Carding? - [https://stripe.com/resources/more/what-is-carding-how-this-type-of-fraud-works-and-how-businesses-can-prevent-it#:~:text=Carding%20is%20the%20illegal%20practice,authentication%2C%20and%20antifraud%20monitoring%20systems.](https://stripe.com/resources/more/what-is-carding-how-this-type-of-fraud-works-and-how-businesses-can-prevent-it#:~:text=Carding%20is%20the%20illegal%20practice,authentication%2C%20and%20antifraud%20monitoring%20systems.)
3. Who is .cc? - https://www.networksolutions.com/blog/what-is-cc-domain-name/