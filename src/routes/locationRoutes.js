// routes/locationRoutes.js
const express = require('express');
const router = express.Router();
const { saveLocation } = require('../controller/locationController');

// POST route to save latitude and longitude
router.post('/location', saveLocation);

module.exports = router;
