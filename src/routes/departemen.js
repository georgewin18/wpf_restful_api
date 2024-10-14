const express = require('express');
const DepartemenController = require('../controller/departemen');
const router = express.Router();

router.post('/', DepartemenController.createNewDepartemen);

router.get('/', DepartemenController.getAllDepartemen);

router.get('/:id', DepartemenController.getDepartemenById);

router.patch('/:id', DepartemenController.updateDepartemen);

router.delete('/:id', DepartemenController.deleteDepartemen);

module.exports = router;