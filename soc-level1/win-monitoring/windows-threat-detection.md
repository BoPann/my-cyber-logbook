# Windows Threat Detection

## Description
### Initial Access
RDP
**Instant Attacks:** Research shows that an exposed RDP port is usually discovered by automated botnets and hit with brute-force attempts within **one minute** of going online.
#### Remote Logon
- RDP (Logon Type 10)
- Network access (type 3)
- successful logon (eventID 4624)
- Failed Logon (enentID 4625)

Phiahing
usually involves open files

- Sysmon Event ID 1: Web browser is launched
	- Image: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe 
	- ParentImage: C:\Windows\Explorer.EXE

- Sysmon Event ID 11: A file (usually archive) appears in Downloads 
	- Image: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe 
	- TargetFilename: C:\Users\User\Downloads\invoice.zip*

- Sysmon Event ID 11: Optionally, the user unarchives files to some folder 
	- Image: C:\Windows\Explorer.EXE (or C:\Program Files\7-Zip\7zG.exe) 
	- TargetFilename: C:\Users\User\Downloads\invoice.pdf.exe

- Sysmon Event ID 1: The user double-clicks the unarchived file 
	- Image: C:\Users\User\Downloads\invoice.pdf.exe 
	- ParentImage: C:\Windows\Explorer.EXE

USB


## Extended Readings
- [MITRE](../framework/MITRE.md)
- [Windows Logs](windows-logs.md)