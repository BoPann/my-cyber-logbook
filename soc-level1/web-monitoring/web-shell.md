

.aspx

query strings can be a good indicator of web shell `176.224:8080/files/awebshell.php?cmd=ls`

default web shell location
- Apache: `/var/www/html/` Default on most Linux distros
- Nginx: `/usr/share/nginx/html/` Default on many Linux setups

Temporary directories like `/tmp` can also be abused if file permissions are not configured securely.

## Indicators
- **New or Unusual Files:** Appearance of files with executable extensions (e.g., `.php`, `.aspx`, `.jsp`, `.py`) in directories that should only contain static content like `/images` or `/uploads`. 
- **Double Extensions:** Files named like `image.jpg.php` or `document.pdf.aspx` to bypass simple upload filters.
- **Process Anomalies:** The web server process (e.g., `w3wp.exe` for IIS or `apache2`/`httpd` for Linux) spawning child processes it shouldn't, such as `cmd.exe`, `powershell.exe`, `whoami`, or `sh`.
- **Log Inconsistencies:** * **Missing Referer:** Web requests to a specific script that have no "Referer" header, suggesting the attacker is accessing the shell directly via a tool rather than through site navigation.
    - **Unusual User-Agents:** Requests from tools like `curl`, `python-requests`, or very old browser versions (e.g., IE 6.0).
- **Timeline Gaps:** Files with "timestomping" (modified dates that don't match the last known application update) or creation dates during non-business hours.
- **Suspicious Content:** Static analysis of server files reveals keywords like `eval()`, `exec()`, `system()`, `base64_decode()`, or `passthru()`.
- **Network Behavior:** The web server initiating outbound connections to external IP addresses (Command & Control), which is atypical for a standard backend server.