const express = require('express');
const TurmaController = require('../controllers/turmaController');
const Turma = require('../models/turma'); // Import the correct model

const router = express.Router();
const turmaController = new TurmaController(Turma); // Pass the model when instantiating

// Define routes for class-related API endpoints
router.post('/', turmaController.createTurma);
router.get('/', turmaController.getAllTurmas);
router.get('/:id', turmaController.getTurmaById);
router.put('/:id', turmaController.updateTurma);
router.delete('/:id', turmaController.deleteTurma);

module.exports = router;