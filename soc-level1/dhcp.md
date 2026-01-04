---
creation date: 2025-12-15 17:30
modified: 2025-12-15 17:30
tags:
---

## DHCP Hankshake


| **Step**                          | **DHCP Message**  | **Client → Server**          | **Description**                                                                                                                                                                                                                                                  |
| --------------------------------- | ----------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. 🔍 Discover (DHCPDISCOVER)** | Broadcast         | Client $\rightarrow$ Network | The client has no IP address yet, so it sends a broadcast message to the entire local network, asking: "Is there a DHCP server out there? I need an IP address."                                                                                                 |
| **2. 🤝 Offer (DHCPOFFER)**       | Broadcast/Unicast | Server $\rightarrow$ Client  | One or more DHCP servers (if available) hear the broadcast. They respond by offering an available IP address from their pool (or "scope"), along with other configuration details (subnet mask, default gateway, DNS server addresses).                          |
| **3. 📞 Request (DHCPREQUEST)**   | Broadcast         | Client $\rightarrow$ Network | The client selects one of the offers (if multiple were received) and sends a broadcast message to the network, stating: "I accept the offer from Server X for IP address Y." This message also informs all _other_ servers to withdraw their offers.             |
| **4. ✅ Acknowledge (DHCPACK)**    | Unicast           | Server $\rightarrow$ Client  | The chosen DHCP server sends a final confirmation message to the client. This message formally allocates the IP address for a specific period (the **lease time**) and provides all the remaining network settings needed for the client to start communicating. |

>last modified: 2025-12-15 17:30