---
creation date: 2026-01-11 16:22
modified: 2026-01-11 16:22
tags:
---

# Content Discovery

## Manually
- robot.txt - The robots.txt file is a document that tells search engines which pages they are and aren't allowed to show on their search engine results or ban specific search engines from crawling the website altogether. It can be common practice to restrict certain website areas so they aren't displayed in search engine results. These pages may be areas such as administration portals or files meant for the website's customers. This file gives us a great list of locations on the website that the owners don't want us to discover as penetration testers.
- favicon - Sometimes when frameworks are used to build a website, a favicon that is part of the installation gets leftover, and if the website developer doesn't replace this with a custom one, this can give us a clue on what framework is in use. OWASP host a database of common framework icons that you can use to check against the targets favicon [https://wiki.owasp.org/index.php/OWASP_favicon_database](https://wiki.owasp.org/index.php/OWASP_favicon_database). Once we know the framework stack, we can use external resources to discover more about it (see next section).
- sitemap.xml - Unlike the robots.txt file, which restricts what search engine crawlers can look at, the sitemap.xml file gives a list of every file the website owner wishes to be listed on a search engine. These can sometimes contain areas of the website that are a bit more difficult to navigate to or even list some old webpages that the current site no longer uses but are still working behind the scenes.
- http header - When we make requests to the web server, the server returns various HTTP headers. These headers can sometimes contain useful information such as the webserver software and possibly the programming/scripting language in use.
- framework stack - knowing the framestack can help us discover the known vulnerability
- Wappalyzer - reveals the tech stacks

## Automated
- https://github.com/danielmiessler/SecLists
- `gobuster dir --url http://10.64.174.227/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt`


---
Last Modified: 2026-01-11 16:22 


