
# Prevention
> How not to get phished

## Overview
There are some protocol in place to do this. In addition, company usually has procedure to deal with this. That said, prevention is still hard and requires afforts (a lot)

## Description
- SPF - a published list of servers that are authorized to send email on behalf of a domain
- DKIM - a tamper-evident domain seal associated with a piece of email), to the content of an email
- DMARC use SPF and DMIM to protect domain
- **Secure/Multipurpose Internet Mail Extensions** (S/MIME) - public key encryption + digtal signature + certificate (Alice & Bob) 


### How is it done in Organization?
> This section is from TryHackMe.Shout out to them putting everything together!

### Technical Defenses
- [**Email Filtering**](https://www.spamhaus.org/resource-hub/ip-domain-reputation/): Provides filtering based on IP and domain reputation, allowing for blocking or quarantining of suspicious messages.
- [**Secure Email Gateways**](https://www.cloudflare.com/learning/email-security/secure-email-gateway-seg/) (SEGs): Scan messages to detect impersonation attempts, spoofing, and other phishing techniques that other filters might miss.
- [**Link Rewriting**](https://learn.microsoft.com/en-us/defender-office-365/safe-links-about): Replaces suspicious or unknown URLs with safe, redirected ones, giving the system time to scan and verify the link.
- [**Sandboxing**](https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about): Isolates and tests suspicious links or attachments in a secure, virtual environment to check for malicious behavior.

### To Users
- **Trust & Warning Indicators**: Modern email platforms display visual cues to help users understand if a message is safe. A banner may read “External Sender,” “Suspicious Link,” or signify that a message is from a trusted organization or sender. 
- **Phishing Reporting**: Easy, in-email reporting options that let users quickly report suspicious messages.
- **User Awareness Training**: Train employees on identifying phishing attempts, social engineering tactics, and safe email practices.
- **Phishing Simulation Exercises**: Run controlled phishing campaigns to test and reinforce employee training.