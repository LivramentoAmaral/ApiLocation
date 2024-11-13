// controllers/locationController.js
const Location = require('../models/Location');

const saveLocation = async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const location = new Location({ latitude, longitude });
    await location.save();
    res.status(201).json({ message: 'Location saved successfully', location });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save location' });
  }
};

module.exports = { saveLocation };
