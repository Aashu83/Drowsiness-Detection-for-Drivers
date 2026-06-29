# Driver Drowsiness Detection System

A real-time driver drowsiness detection system built using the MERN stack, OpenCV, and Socket.IO.

The application detects driver fatigue using facial landmarks and Eye Aspect Ratio (EAR), sends live alerts to the frontend, and stores alert history in MongoDB.

---

## Features

- Real-time drowsiness detection
- Live alert notifications using Socket.IO
- Alert history stored in MongoDB
- REST API with Express.js
- React dashboard
- Webcam integration
- Driver alert logging
- Responsive user interface

---

## Tech Stack

### Frontend

- React.js
- CSS
- Axios
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Socket.IO
- Mongoose

### Database

- MongoDB

### Computer Vision

- OpenCV
- MediaPipe / facial landmark detection
- Eye Aspect Ratio (EAR)

---

## Project Structure

```
drowsiness-app/
│
├── client/
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── README.md
└── DEVLOG.md
```

---

## Installation

### Clone

```bash
git clone https://github.com/YOUR_USERNAME/drowsiness-detection-system.git
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Current Progress

### ✅ Day 1

- Backend scaffold completed
- MongoDB connected
- Express server running
- Socket.IO configured
- Alert model created

Upcoming:

- React frontend
- Webcam integration
- Live alerts
- EAR calculation
- Driver dashboard

---

## Future Improvements

- Driver authentication
- Multiple driver support
- Email/SMS alerts
- GPS integration
- Analytics dashboard
- Deployment on Render/Vercel

---

## Author

Aashutosh Barve
