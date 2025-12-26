---
creation date: 2025-12-05 12:23
modified: 2025-12-05 12:23
tags:
---
# HTML vs React

- In a **traditional server‑rendered app**, your browser requests `/account`, the server runs the logic, and responds with a **full HTML page** already filled with your data. To change anything, you usually reload or navigate to another page, getting a _new_ full HTML response.
    
- In a **React/Vue/Angular SPA**, your browser first loads a mostly static HTML/JS “shell”. Then the JS makes **API calls** (e.g. `/api/v1/accounts?id=123`) to get just the data, and React updates only the relevant components on the page without a full reload.

## Extended Readings
[What the Deal with IDOR](https://mwrcybersec.com/whats-the-deal-with-idor)
[day5-IDOR](my-cyber-logbook/advent-of-cyber-2025/day5-IDOR.md)