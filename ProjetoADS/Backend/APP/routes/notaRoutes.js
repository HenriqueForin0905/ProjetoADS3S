const express = require('express');
const NotaController = require('../controllers/notaController');
const Nota = require('../models/nota'); // Import the correct model

const router = express.Router();
const notaController = new NotaController(Nota); // Pass the model when instantiating

// Define routes for grades (notas)
router.post('/', notaController.createNota);
router.get('/', notaController.getNotas);
router.get('/:id', notaController.getNotaById);
router.put('/:id', notaController.updateNota);
router.delete('/:id', notaController.deleteNota);

module.exports = router;