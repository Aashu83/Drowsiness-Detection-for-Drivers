const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  driverId: {
    type: String,
    default: 'driver_01'
  },
  alertType: {
    type: String,
    enum: ['drowsy', 'microsleep', 'yawn'],
    required: true
  },
  earValue: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    default: 'unknown'
  }
});

module.exports = mongoose.model('Alert', alertSchema);