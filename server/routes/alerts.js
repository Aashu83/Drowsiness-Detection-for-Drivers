const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

router.post('/', async (req, res) => {
  try {
    const { driverId, alertType, earValue, location } = req.body;
    const alert = await Alert.create({ driverId, alertType, earValue, location });

    const io = req.app.get('io');
    io.emit('new_alert', alert);

    res.status(201).json({ success: true, data: alert });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 }).limit(50);
    res.json({ success: true, data: alerts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;