const express = require('express');
const GajiController = require('../controller/gaji');
const router = express.Router();

router.post('/', GajiController.createNewGaji);

router.get('/', GajiController.getAllGaji);

router.get('/:id', GajiController.getGajiById);

module.exports = router;