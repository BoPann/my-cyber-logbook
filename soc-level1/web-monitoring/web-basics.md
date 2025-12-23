
http header
`METHOD /path HTTP/version`


request contains additional information like host, user agent, and content type, guiding how the web server should process the request

request body contains the data sent. 
- **URL Encoded (application/x-www-form-urlencoded)**
- **Form Data (multipart/form-data)**
- **JSON (application/json)**
- **XML (application/xml)**


### Code 
**100 (Continue)**  
The server got the first part of the request and is ready for the rest.

**200 (OK)**  
The request was successful, and the server is sending back the requested resource.

**301 (Moved Permanently)**  
The resource you’re requesting has been permanently moved to a new URL. Use the new URL from now on.

**404 (Not Found)**  
The server couldn’t find the resource at the given URL. Double-check that you’ve got the right address.

**500 (Internal Server Error)**  
Something went wrong on the server’s end, and it couldn’t process your request.


Required Response Header
- date
- content-type
- server - This header shows what kind of server software is handling the request. It’s good for debugging, but it can also reveal server information that might be useful for attackers, so many people remove or obscure this one.
Other Common response Header
- set-cookie - This one sends cookies from the server to the client, which the client then stores and sends back with future requests. To keep things secure, make sure cookies are set with the HttpOnly flag (so they can’t be accessed by JavaScript) and the Secure flag (so they’re only sent over HTTPS). Note: these two methods only protect the cookies! To protect connection, we need HSTS which will be coverd below.
- cache-control
- location 

Security Header
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options
- Referrer-Policy

| **Feature**          | **HttpOnly Cookie Flag**                                    | **HSTS (HTTP Strict Transport Security)**       |
| -------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| **What it protects** | Protects the **Cookie** itself.                             | Protects the **Connection**.                    |
| **Primary Goal**     | Prevents scripts (like JavaScript) from reading the cookie. | Forces the browser to only talk via **HTTPS**.  |
| **Prevents...**      | **Session Hijacking** via Cross-Site Scripting (XSS).       | **Man-in-the-Middle (MITM)** and SSL Stripping. |

### Resources 
- [Check Website Security](https://securityheaders.com/)
