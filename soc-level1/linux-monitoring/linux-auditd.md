---
creation date: 2025-12-26 12:50
modified: 2025-12-28 15:47
tags:
  - cyber/dfd
  - cyber/linux
---

# Auditd 
Linux Audit Log. Here docs the important fields of auditds. It is important to know this fields in order to read the auditd log. 

### 1. `type=PROCTITLE`

This record shows the full command-line arguments of the process as it appeared in the process table.

- **`proctitle`**: The raw command string. Note the `;`. In Linux, the semicolon separates commands, meaning "run the first part, then run the second part." This is a major red flag for **Command Injection**.
    

---

### 2. `type=CWD` (Current Working Directory)

This tells you where the user was "standing" on the filesystem when they ran the command.

- **`cwd=/opt/trypingme`**: The command was executed from inside this specific folder.
    

---

### 3. `type=EXECVE`

This record details the specific arguments passed to the `execve` system call (the function Linux uses to start a new program).

- **`argc=3`**: Argument Count. There are 3 parts to this command.
    
- **`a0=/bin/sh`**: The first argument (the program being run).
    
- **`a1=-c`**: The second argument (tells the shell to read the next string as a command).
    
- **`a2=ping -c 2 ;cat /opt/trypingme/main.py`**: The third argument (the actual payload).
    

---

### 4. `type=SYSCALL`

This is the most "data-heavy" part of the log. It explains who did it and what the system did about it.

#### **System Details**

- **`arch=x86_64`**: The CPU architecture of the server (64-bit Intel/AMD).
    
- **`syscall=execve`**: The specific system call used to execute a program.
    
- **`success=yes`**: The command was successfully started.
    
- **`exit=0`**: The exit code. `0` usually means "Success/No Errors."
    

#### **User & Process IDs**

- **`ppid=577`**: Parent Process ID. This is the "Father" process that spawned the command. (e.g., a Web Server).
    
- **`pid=1026`**: The unique Process ID assigned to this specific command.
    
- **`auid=unset`**: Audit User ID. Usually "unset" if the user hasn't logged in via a physical terminal or SSH (often seen in web-based exploits).
    
- **`uid=ubuntu`**: The real User ID. The command ran as the `ubuntu` user.
    
- **`gid=ubuntu`**: The Group ID associated with the user.
    
- **`euid/suid/fsuid`**: Effective, Saved, and Filesystem UIDs. All are `ubuntu` here, meaning no "Privilege Escalation" (like `sudo`) was used for this specific step.
    

#### **Technical Context**

- **`tty=(none)`**: No terminal was attached. This confirms the command wasn't typed by a human at a keyboard; it was likely triggered by a script or web app.
    
- **`comm=sh`**: The command name.
    
- **`exe=/usr/bin/dash`**: The actual path to the binary that ran. (In Ubuntu, `/bin/sh` is just a shortcut to `dash`).
    
- **`key=exec`**: This is a custom label. Whoever configured the audit rules on this machine labeled all execution events with the word "exec" to make them easier to search.
    
---
Last Modified: 2025-12-28  \


