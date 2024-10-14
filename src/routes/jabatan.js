const express = require('express');
const JabatanController = require('../controller/jabatan');
const router = express.Router();

router.post('/', JabatanController.createNewJabatan);

router.get('/', JabatanController.getAllJabatan);

router.get('/:id', JabatanController.getJabatanById);

router.patch('/:id', JabatanController.updateJabatan);

router.delete('/:id', JabatanController.deleteJabatan);

module.exports = router;