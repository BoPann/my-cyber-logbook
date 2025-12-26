# Windows Logs
when investigating windows log, it is important that we look for the right log and look for the parrent process. 

Security Log 

Authentication
4624 (successful Logon) 
4625 (Failed Logon)


User Management
4720 - create
4722 - enable
4738 - change
4725 - disable
4726 - delete
4723 - change password
4724 - reset password
4732 - added to group
4733 - removed from group
4688 - process creation
1 - process creation (Sysmon) <<< this has become the de facto
11 - file creation 
13 - run key registery 
15 - file download from web
3 - network connection
22 - dns query (This is the one we want to look into to find out C2 domain)

4798 - A user's local group membership was enumerated

limitation
PowerShell, on the other hand, is a powerful all-in-one tool for managing the system. Once you launch powershell.exe, you can run hundreds of different commands within the same terminal session without creating new processes for each action. This is why Sysmon is not very helpful here, and you'll need to find an alternative logging approach.

Command Line Tools (Powershell)
```plaintext
	C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```


### Where to Find Sysmon?
Event Viewer > Appliction and Service Log > Microsoft > Windows > Sysmon 

>This is important if you don't want to spend 1 hour and realized you have been cheking the wrong file this whole time (Don't ask me how I know: )) 

