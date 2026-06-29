require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
const alertRoutes = require('./routes/alerts');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Make io accessible inside routes
app.set('io', io);

// Routes
app.use('/api/alerts', alertRoutes);

// Socket.io connection
io.on('connection', (socket) => {
  console.log('Dashboard connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('Dashboard disconnected:', socket.id);
  });
});

// Health check
app.get('/', (req, res) => res.send('Drowsiness API running'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));