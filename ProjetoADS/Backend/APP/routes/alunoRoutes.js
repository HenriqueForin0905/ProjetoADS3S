const express = require('express');
const AlunoController = require('../controllers/alunoController');
const Aluno = require('../models/aluno'); // Importe o model correto        

const router = express.Router();
const alunoController = new AlunoController(Aluno); // Passe o model ao instanciar


router.post('/', alunoController.createAluno);
router.get('/', alunoController.getAlunos);
router.get('/:id', alunoController.getAlunoById);
router.put('/:id', alunoController.updateAluno);
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;