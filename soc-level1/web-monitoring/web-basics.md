---
creation date: 2025-12-21 10:37
modified: 2025-12-28 00:15
tags:
  - cyber/atk
  - cyber/networking
---
# Web Basics

## 1. Overview
Web traffic operates on the **HTTP protocol**, consisting of two main components: the **Request** and the **Response**. Each component contains three essential sections: the **Start Line** (Method/Status Code), the **Header** (Metadata), and the **Body** (Payload). In a SOC environment, analyzing these fields is critical for distinguishing between legitimate user activity and malicious intent.

## 2. Description
### 2.1 HTTP Request
A correctly composed HTTP request contains the following elements:
1. A request line. `GET /software/htp/cics/index.html HTTP/1.1`
2. A series of HTTP headers, or header fields.
3. A message body, if needed.

### 2.1.1 HTTP header
- Request contains additional information like host, user agent, and content type, guiding how the web server should process the request. see [Common HTTP Header](web-http-header.md)

### 2.1.2 Request Body
request body contains the data sent. 
- **URL Encoded (application/x-www-form-urlencoded)**
- **Form Data (multipart/form-data)**
- **JSON (application/json)**
- **XML (application/xml)**

### 2.2 HTTP Response
HTTP Response contains: 
1. A status line. see [Status Code](web-status-code.md)
2. A series of HTTP headers, or header fields.
3. A message body, which is usually needed.

### 2.2.1 Required Response Header
- date
- content-type
- server - This header shows what kind of server software is handling the request. It’s good for debugging, but it can also reveal server information that might be useful for attackers, so many people remove or obscure this one.
### 2.2.2 Other Common Response Header
- set-cookie - This one sends cookies from the server to the client, which the client then stores and sends back with future requests. To keep things secure, make sure cookies are set with the HttpOnly flag (so they can’t be accessed by JavaScript) and the Secure flag (so they’re only sent over HTTPS). Note: these two methods only protect the cookies! To protect connection, we need HSTS which will be coverd below.
- cache-control
- location 

### 2.3 Metigation
- [So! Let's talk about Metigation!](web-metigation.md)


### Resources 
- [IBM HTTP Protocol](https://www.ibm.com/docs/en/cics-ts/6.x?topic=concepts-http-protocol)
- [IBM HTTP Request](https://www.ibm.com/docs/en/cics-ts/6.x?topic=protocol-http-requests)
- [IBM HTTP Response](https://www.ibm.com/docs/en/cics-ts/6.x?topic=protocol-http-responses)
- [Check Website Security](https://www.ibm.com/docs/en/cics-ts/6.x?topic=protocol-http-responses)


---
Last Modified: 2025-12-28 \


