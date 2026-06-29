## Day 1 — [29/06/2026]
- Installed MongoDB locally
- Set up server/ folder with Express + Mongoose + Socket.io
- Created Alert model (driverId, alertType, earValue, timestamp, location)
- API running on port 5000, connected to drowsinessDB
- Next: Day 2 — build the React frontend and connect to live alerts//
Problems Faced
PowerShell vs CMD

Problem:

mkdir config models routes

PowerShell doesn't support creating multiple folders like CMD.

Solution:

mkdir config
mkdir models
mkdir routes
MongoDB Connection Refused

Problem:

ECONNREFUSED 127.0.0.1:27017

Reason:

MongoDB wasn't installed.

Solution:

Installed MongoDB Community Server and verified the service was running.

Learned Today
Git basics
Express project setup
Mongoose connection
MongoDB installation
PowerShell commands
Environment variables
Socket.IO basics
Tomorrow
React setup
Dashboard
Live alert cards
Socket.IO frontend