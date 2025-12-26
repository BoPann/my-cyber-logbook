---
tags:
  - cyber/tool
---
# curl 

Browser is one way how normal user interact with the web. However, it is not the only way (User-Agent). Another way is using `curl` command. Here are some common options: 
- - X - method used 
- -d - define the data `curl -X POST -d "username=user&password=user&submit=Login" http://MACHINE_IP/post.php`
- -i - to view the detailed return 
- -c - save cookies `curl -c cookies.txt -d "username=admin&password=admin" http://MACHINE_IP/session.php`
- -b - resued the saved cookies `curl -b cookies.txt http://MACHINE_IP/session.php`
- -A - custom user agent `curl -A "internalcomputer" http://MACHINE_IP/ua_check.php`