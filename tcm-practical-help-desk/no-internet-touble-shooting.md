
# Why Can't I Connect to the Internet???
> We’ve all been there, haven’t we? But hey, as help desk folks, we’re supposed to troubleshoot the problem… not scream into the void like the Wi-Fi personally betrayed us. 
![ross-confused](../cyber-img/ross-confused.png)

## 1. Overview
The troubleshooting process will depend on the OS the device is currently running. But generally, it should look similar. We can go from layer1 - layer3 and figure out the problem steps by stpes. 

## 2. Description 
## 2.1 Identify the scope
- have you tried reboot your device or the network device?
- what environment are you in? school? or company network? 
- has this happened before?
- is there other people experiencing the same proble? 
- what device are you using? laptop or smartphone?
- is it wired or wifi? 
- can you access the internal shared drives? (local network problem or gateway problem)

### 2.2 Layer 1 
- is the ehternet cable securely plugged in? 
	- "Are the link lights on the NIC and the switch/router port solid green or amber?"
- is the netowork device power on? 
	- Check the **power lights** on any intermediary devices (router, switch).
- how's the signal bar?

### 2.3 Layer 2
- how's the MAC address doing? Is the NIC working?
	- `ping the default gateway` (if can't the problem is inside local network)
	- `arp -a` 
	- **Verify the Default Gateway's IP and MAC address appear** in the ARP cache.
	
### 2.4 Layer 3
- Do you have an assigned ip? 
	- `ipconfig /all` for windows
	- `ifconfig /all `for linux/ Mac
	- `ipconfig/release`, `ipconfig/flushdns`, `ipconfig /renew`, `ipconfig /registerdns`
	- what is the reuslt when you `ping google.com`? (is the router working? is the DNS working?)
	- what about when `ping 8.8.8.8`? 
	- run `tracert` to see the route of the packet