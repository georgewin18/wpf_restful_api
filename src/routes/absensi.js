const express = require('express');
const AbsensiController = require('../controller/absensi');
const router = express.Router();

router.post('/', AbsensiController.createNewAbsensi);

router.get('/', AbsensiController.getAllAbsensi);

router.get('/:id', AbsensiController.getAbsensiById);

module.exports = router;