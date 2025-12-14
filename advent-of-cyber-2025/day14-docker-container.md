---
creation date: 2025-12-14 11:06
modified: 2025-12-14 12:11
tags:
  - cyber/tool
  - cyber/atk
---
# Day 14 Container

## Overview 
- Container solves the most common problem where software enginners often have: 
`Well it worked on my machine...🤷‍♂️`
	👉 Container bundle everything the app need to run (all its dependencies) in one place. 
- Another important feature of container is isolation. Docker perform isolation between the host and the container. 
- docker is one of the most famous container engine

## Description
### Docker Escape Atk 
Attackers often seek vulnerability to gain the access to the host system. One way to do this is by access the socket which usually found at `var/run/docker.sock` This is what we did in the AoC today, exploiting this misconfiguration and take back the control of our website. 

## Thoughts 
After today I immediately go check my `docker.sock` file and phew! I was safe! (at least from socket exposure)

>last modified: 2025-12-14