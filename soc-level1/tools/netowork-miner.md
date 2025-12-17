
NetworkMiner and Wireshark have similar base features, but they separate in use purpose. Although main functions are identical, some of the features are much stronger for specific use cases.

The best practice is to record the traffic for offline analysis, quickly overview the pcap with NetworkMiner and go deep with Wireshark for further investigation.

## Versions 
There are 2 majoy version and each has its features
- 1.6 - details in frame and packets 
- 2.7 - detect mac addr conflict, details in parameters 

## Thoughs
Network miner is more "topic oriented". Unlike wireshark which requires analyzer to set filters and nevagate in the packets, network miner categorize the packets in many different topic (host, files, credentials, parameters, etc.)

