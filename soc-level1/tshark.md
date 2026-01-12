---
creation date: 2026-01-11 11:35
modified: 2026-01-11 11:35
tags:
  - cyber/tool
  - cyber/dfd
---

# Tshark 
Wireshark in text mode 

## Investigate Pcap Files
- `capinfos fileName`: show meta data
- `tshark -v`: version
- `tshark -h:` help 
- `tshark -r fileName -c count`: heplful when want to see specific packet in a file

## Capture files
- `tshark -w test.pcap -a filesize:10 -a files:3`: when filessize > 10 kb it moves to next file. When 3 files are filled it stops. 
- `tshark -w test.pcap -b filesize:10 -b files:3`: same as `-a` but it will keep overwriting the files so we always have the latest captures. `ring buffer control`

## Set Capture Filters
- Filtering a host - `tshark -f "host 10.10.10.10"`
- Filtering a network range - `tshark -f "net 10.10.10.0/24"`
- Filtering a Port - `tshark -f "port 80"`
- Filtering a port range - `tshark -f "portrange 80-100"`
- Filtering source address - `tshark -f "src host 10.10.10.10"`
- Filtering destination address - `tshark -f "dst host 10.10.10.10"`
- Filtering TCP - `tshark -f "tcp"`

## Set Display Filters
- Basically same as the GUI version
- Filtering an IP without specifying a direction - `tshark -Y 'ip.addr == 10.10.10.10'`
- Filtering a network range  - `tshark -Y 'ip.addr == 10.10.10.0/24'`
- Filtering a source IP - `tshark -Y 'ip.src == 10.10.10.10'`
- Filtering a destination IP - `tshark -Y 'ip.dst == 10.10.10.10'`


---
Last Modified: 2026-01-11


