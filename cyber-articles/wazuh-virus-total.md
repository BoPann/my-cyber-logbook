---
creation date: 2025-12-30 11:49
modified: 2025-12-30 13:12
tags:
  - cyber/dfd
  - cyber/tool
---
# Wazuh Integration with VirualTotal

<p align="center"> <img src="../cyber-img/chandler-sofa.png" style="width: 80%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: 15px;"> </p>

# Overview
Could this _be_ any more automated?

Imagine you’re at the **Helpdesk** and a user downloads a "definitely-not-a-virus.exe." Without this integration, you'd have to manually grab the hash, go to the VirusTotal website, and see if it’s evil. I mean, what is this, 1994?

With the **Wazuh + VirusTotal** integration, the dots don't just connect; they basically draw the whole picture for you.

## Before We Begin
2 Prerequisites
1. FIM see [Wazuh FIM (File Integrity Management)](../soc-level1/wazuh-fim.md)
2. Virus Total API [Link to VirusTotal](https://www.virustotal.com/gui/home/upload)


## How it Works? 
(From Wazuh Official Doc)\
This integration uses the VirusTotal API to detect malicious content within the files and directories monitored by the File Integrity Monitoring capability of Wazuh. This integration functions as described below:

1. Wazuh FIM looks for any file addition, change, or deletion on the monitored folders. This module has the hash of these files stored and triggers alerts when it detects any changes.
    
2. If enabled, Wazuh triggers the VirusTotal integration when an FIM alert occurs. From this alert, the integration extracts the hash field of the file.
    
3. The integration then makes an HTTP POST request to the VirusTotal database using the VirusTotal API. This call sends the extracted file hash to compare it with the information in the VirusTotal database.
    
4. The integration receives a JSON response, which is the result of the request. The response triggers one of the following Wazuh alerts:
    - Error: Check credentials.
    - Error: Public API request rate limit reached.
    - Alert: No records in VirusTotal database.
    - Alert: No positives found.
    - Alert: X engines detected this file. X is the number of antivirus engines.
        
Wazuh logs the triggered alert in the `/var/ossec/logs/integrations.log` file and stores it in the `/var/ossec/logs/alerts/alerts.log` file with all other alerts.

## Steps - Let's Begin

On the Wazuh Server Machine. Server! I repeat. Don't go to the agent machine like I did :)\
run `vim /var/ossec/etc/ossec.conf`

Nevigate to the last line of the file. If we you are not famaliar with VIM editor. Here is a trick: hit `G` and it will automatically go to the last line (if you are in editor mode, hit `esc` first). Then add the code below, swap `API_KEY` with yours from virusTotal. 
``` 
<integration>
  <name>virustotal</name>
  <api_key>API_KEY</api_key> <!-- Replace with your VirusTotal API key -->
  <group>syscheck</group>
  <alert_format>json</alert_format>
</integration>
```

When done, restart the server \
`systemctl restart wazuh-agent`

Now we start testing if virualTotal is working by downloading a testing mallicious file (it's safe. see https://www.eicar.org/download-anti-malware-testfile/) \
`curl https://secure.eicar.org/eicar.com -o eicar`

Go to Wazuh -> Threat Hunting -> Event \
You should see this in the log
`VirusTotal: Alert - /home/subuntu/checkFile/eicar - 65 engines detected this file` 

Python Remove Automation
First we need to add a script on the agent for the server to trigger \
On the agent, install jq `apt install jq`

run `vim /var/ossec/active-response/bin/remove-threat.sh`
and add the following script: 
```
#!/bin/bash

LOCAL=`dirname $0`;
cd $LOCAL
cd ../

PWD=`pwd`

read INPUT_JSON
FILENAME=$(echo $INPUT_JSON | jq -r .parameters.alert.data.virustotal.source.file)
COMMAND=$(echo $INPUT_JSON | jq -r .command)
LOG_FILE="${PWD}/../logs/active-responses.log"

#------------------------ Analyze command -------------------------#
if [ ${COMMAND} = "add" ]
then
 # Send control message to execd
 printf '{"version":1,"origin":{"name":"remove-threat","module":"active-response"},"command":"check_keys", "parameters":{"keys":[]}}\n'

 read RESPONSE
 COMMAND2=$(echo $RESPONSE | jq -r .command)
 if [ ${COMMAND2} != "continue" ]
 then
  echo "`date '+%Y/%m/%d %H:%M:%S'` $0: $INPUT_JSON Remove threat active response aborted" >> ${LOG_FILE}
  exit 0;
 fi
fi

# Removing file
rm -f $FILENAME
if [ $? -eq 0 ]; then
 echo "`date '+%Y/%m/%d %H:%M:%S'` $0: $INPUT_JSON Successfully removed threat" >> ${LOG_FILE}
else
 echo "`date '+%Y/%m/%d %H:%M:%S'` $0: $INPUT_JSON Error removing threat" >> ${LOG_FILE}
fi

exit 0;
```

Next, for the server. We need to turn on the `active response` \
Run `vim /var/ossec/etc/ossec.conf`\
find the `<active-response>` and add the following code: \
```
  <command>
    <name>remove-threat</name>
    <executable>remove-threat.sh</executable>
    <timeout_allowed>no</timeout_allowed>
  </command>

  <active-response>
    <disabled>no</disabled>
    <command>remove-threat</command>
    <location>local</location>
    <rules_id>87105</rules_id>
  </active-response>
```

restart the server `sudo systemctl restart wazuh-manager`

Now back to the agent and try to download the testing file again\
`curl https://secure.eicar.org/eicar.com -o eicar` 

Go to Wazuh -> Threat Hunting -> Event\
You should see: \
`Active response: active-response/bin/remove-threat.sh - add`


## Limitation 
If you are using free plan for Virus Total, you are very likely hit the limit really quick if you are monitoing a huge set of folder. The free plan offers: 

|   |   |
|---|---|
|Request rate|4 lookups / min|
|Daily quota|500 lookups / day|
|Monthly quota|15.5 K lookups / month|

Therefore, a workaround is using [Yara](../advent-of-cyber-2025/day13-YARA.md). YARA is a very popular open-source and multi-platform tool (it works with most hosts running Windows, Linux, or Mac operating systems) that provides a mechanism to exploit code similarities between malware samples within a family. We can enable Yara integration with Wazuh. I might do a walkthrough in the future as well! Stay tuned!


## Resources:
- [Wazuh and Virustotal Integrations](https://documentation.wazuh.com/current/user-manual/capabilities/malware-detection/virus-total-integration.html)

## Extended Readings: 
- [Bo Cyber Logbook - Do you VIM it? - Linux Editor](my-cyber-logbook/soc-level1/tools/linux-vim.md)


---
Last Modified: 2025-12-30


