// controllers/locationController.js
const Location = require('../models/Location');

// Função para salvar ou atualizar a localização (já existente)
const saveLocation = async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    let location = await Location.findOne();

    if (location) {
      location.latitude = latitude;
      location.longitude = longitude;
      await location.save();
      res.status(200).json({ message: 'Location updated successfully', location });
    } else {
      location = new Location({ latitude, longitude });
      await location.save();
      res.status(201).json({ message: 'Location saved successfully', location });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to save or update location' });
  }
};

// Função para pegar a última localização salva
const getLocation = async (req, res) => {
  try {
    // Procura a localização mais recente
    const location = await Location.findOne();
    
    if (!location) {
      return res.status(404).json({ message: 'No location found' });
    }

    res.status(200).json({ location });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve location' });
  }
};

module.exports = { saveLocation, getLocation };
