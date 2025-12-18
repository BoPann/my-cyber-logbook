---
creation date: 2025-12-03 22:51
modified: 2025-12-09 23:54
tags:
  - cyber/tool
---
# Splunk

## Overview
Splunk is one of the leading SIEM solutions in the market. It allows users to collect, analyze, and correlate network and machine logs in real time. It uses SPL (Search Processing Language) to make the search effective. 

- forwarder (collect data at endpoints and forward to splunk instance)
- indexer (parse and normalize data into field-value pair
- search head (this is where analyst search/ using SPL splunk processing language)

## 2. Description
Almost the first thing we want to look into is the **Fields** pane (like many other SIEM tool). We want to get an idea of the data that are collected. Fields pane are located on the left side. 

### 2.1 Filtering

- Splunk lets us upload your own data files and run searches on them. Just like SQL, you can filter, sort, and analyze the data — but Splunk uses its own query language (SPL)
- Having so many fields displayed can be overwhelming. We can do `| fields to only display the fields we want`
- ![](../imgs/fields-command-min.png)

- For searching, simply type it after a space 
- Or we can do `| search "Powershell"` to search the keyword we want. (but not sure how this is different from directly typing the keyword in the search bar)
- ![](../imgs/seachbar-min.png)

### 2.2 Structuring

- Similar to linux using `uniq` to show only the unique, we can use `dedup` here to fitler out the duplicate result. 
- ![](../imgs/dedup-command-min.png)


- Also similar to linux, we can use `head`, `tail`, `sort` to organize the result
- ![](../imgs/head-command-min.png)
- `top` returns the top result (also count them)
- ![](../imgs/top-command-min.png)

- similar to top, `chart count by Field` also return the count number (but not in order like top)
- We can also rename a field in the search result by using `rename A as B`  
- `table` allows us to only show the reuslt we want. (similar to SQL)
- ![](../imgs/table-command-min.png)

- If a reuslt is number than we can also use command `stats` to return the stats
- ![](../imgs/stats-command-min.png)

### Resources
[Splunk Official Doc](https://docs.splunk.com/Documentation/Splunk/8.1.2/SearchTutorial/NavigatingSplunk)