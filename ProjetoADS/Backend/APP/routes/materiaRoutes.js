const express = require('express');
const MateriaController = require('../controllers/materiaController');
const Materia = require('../models/materia'); // Import the correct model

const router = express.Router();
const materiaController = new MateriaController(Materia); // Pass the model when instantiating

// Define routes for Materia
router.post('/', materiaController.createMateria);
router.get('/', materiaController.getAllMaterias);
router.get('/:id', materiaController.getAllMaterias);
router.put('/:id', materiaController.updateMateria);
router.delete('/:id', materiaController.deleteMateria);

module.exports = router;