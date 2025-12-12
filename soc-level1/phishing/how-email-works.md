---
creation date: 2025-12-10 23:23
modified: 2025-12-10 23:23
tags:
  - cyber/networking
---
# How Email Works
> YOU GOT A MAIL!

## 1. Overview 
It relys on 3 protocols: SMTP, POP3, IMAP

## 2. Decription

### 2.1 Email Format
Email generally follow a format called IMF (Internet Message Format). It is a set of rule of how an email meesage must follow (like `From:`, `To:`, `Subject:`)

### 2.2 Email Header 
- Received - the last hop before it reaches your email server (the is the _ONLY_ header that can be trusted, other fields can be [masqueraded](../masquerading.md))
- Return Path - the return email addr if the email fails to delivered
- X-Originating-ip - sender's ip 

### 2.3 Process of Sending
1. **Client to Server:** Your email client (like Gmail or Outlook) connects to your email provider's **outgoing mail server** (the **SMTP** server) and hands off the message.
2. **Routing:** Your SMTP server looks up the recipient's domain to find their mail server's address using the **Domain Name System (DNS)** and its **MX Record** (Mail Exchanger).
3. **Server to Server:** Your SMTP server connects to the recipient's mail server (also using **SMTP**) and transfers the email.
4. **Delivery:** The recipient's mail server accepts the message, runs checks (spam, virus), and places it in the recipient's digital mailbox.
5. **Retrieval:** The recipient's email client later connects to their mail server (using **POP** or **IMAP**) to retrieve and display the message.
    
### 2.4 Protocols
- For Sending: 
	- SMTP is the only choice (port 25, and 587 for Secure Transport) 
- For Reseiving: 
	- IMAP - the mail stay on server. Users can view mail from different devices. 
	- POP3 - the users download the mails, and they will get deleted from servers.

## 3. Extended Readings
- [POP3 vs IMAP](https://help.aol.com/articles/what-is-the-difference-between-pop3-and-imap)
- [Email Configuration](https://help.dreamhost.com/hc/en-us/articles/214918038-Email-client-configuration-overview)