const express = require('express');
const KaryawanController = require('../controller/karyawan');
const router = express.Router();

router.post('/', KaryawanController.createNewKaryawan);

router.get('/', KaryawanController.getAllKaryawan);

router.get('/:id', KaryawanController.getKaryawanById);

router.get('/departemen/:id', KaryawanController.getKaryawanByDepartemenId);

router.get('/jabatan/:id', KaryawanController.getKaryawanByJabatanId);

router.patch('/:id', KaryawanController.updateKaryawan);

router.delete('/:id', KaryawanController.deleteKaryawan);

module.exports = router;