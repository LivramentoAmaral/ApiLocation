// routes/locationRoutes.js
const express = require('express');
const router = express.Router();
const { saveLocation, getLocation } = require('../controller/locationController');

// Rota POST para salvar ou atualizar a localização

router.get('/', (req, res) => {
    res.send('Ta ok!');
    },);

router.post('/location', saveLocation);

// Rota GET para obter a última localização salva
router.get('/location', getLocation);

module.exports = router;

// Path: src/controller/locationController.js