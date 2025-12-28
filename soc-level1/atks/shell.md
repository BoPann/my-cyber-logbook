- Bind shell
	- attacker -> target
	- Target opens a listen port 
	- More likly to be blocked by firewall as this is a incoming traffic
	- SOCs look for 
 - Reverse shell
	- Target -> attacker 
	- Most common as this bypasses the attacker's firewall
	- SOCs look for **suspicious outbound connection** from an internal server to an unknown external IP
- Web shell
	- Attacker -> target
	- Exploit the web vulnerability that allows user to upload files and access them 
	- SOCs look for POST and GET request. `.php/ .aspx`files


## Graph
|**Shell Type**|**Connection Direction**|**Primary Log Source**|**Key Indicator**|
|---|---|---|---|
|**Bind**|**Inbound** (Attacker to Victim)|Netstat / Endpoint Logs|New Listening Port|
|**Reverse**|**Outbound** (Victim to Attacker)|Firewall / Sysmon|Connection to Unknown External IP|
|**Web**|**Inbound** (Over Port 80/443)|Web Server Access Logs|`POST` to unusual `.php`/`.aspx` files|